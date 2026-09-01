// api/tts.js
// المسار الكامل: Client → Check Supabase Cache → (Hit: رابط جاهز) أو
// (Miss: استدعاء ElevenLabs → رفع لـ Supabase Storage → حفظ Metadata → إرجاع الرابط)
//
// المفتاح لا يظهر في المتصفح أبدًا — كل شيء هنا يعمل على السيرفر فقط.

import { getSupabaseAdmin, TTS_TABLE, TTS_BUCKET } from "../lib/supabaseAdmin.js";
import { buildCacheKey, storagePath } from "../lib/ttsCache.js";
import { getVoiceConfig } from "../config/elevenlabs.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const { lang, text } = req.body || {};
  if (!lang || !text) {
    res.status(400).json({ ok: false });
    return;
  }

  const voiceCfg = getVoiceConfig(lang);
  if (!voiceCfg) {
    // لا نكسر واجهة العميل أبدًا برسالة تقنية — فقط نرفض بهدوء والواجهة تتراجع
    // تلقائيًا لصوت المتصفح.
    res.status(204).end();
    return;
  }

  const { voiceId, modelId, outputFormat, voiceSettings } = voiceCfg;
  const characterCount = text.length; // العدد الفعلي للنص النهائي المُرسَل، وليس أي نص آخر بالواجهة

  const cacheKey = buildCacheKey({ text, voiceId, modelId, outputFormat, voiceSettings, language: lang });
  const textHash = buildCacheKey({ text, voiceId: "", modelId: "", outputFormat: "", voiceSettings: {}, language: "" });

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch (e) {
    console.error("Supabase غير مضبوط:", e.message);
    res.status(204).end(); // نفس مبدأ عدم كسر الواجهة — الفشل هنا يعني عدم توفر Cache وليس خطأ للعميل
    return;
  }

  try {
    // 1) فحص الـ Cache أولاً
    const { data: existing } = await supabase
      .from(TTS_TABLE)
      .select("*")
      .eq("cache_key", cacheKey)
      .maybeSingle();

    if (existing && existing.status === "ready" && existing.audio_url) {
      // Cache Hit — لا يوجد أي استدعاء لـ ElevenLabs هنا إطلاقًا
      supabase.from(TTS_TABLE)
        .update({ last_used_at: new Date().toISOString(), play_count: (existing.play_count || 0) + 1 })
        .eq("id", existing.id)
        .then(() => {}); // Fire-and-forget — لا نُبطئ الاستجابة لأجل هذا التحديث
      res.status(200).json({ ok: true, url: existing.audio_url, cacheHit: true });
      return;
    }

    if (existing && existing.status === "generating") {
      // طلب آخر (لنفس النص/الصوت/الإعدادات بالضبط) قيد التوليد الآن — ننتظر قليلاً
      // بدل ما نولّد نسخة مكرّرة، هذا هو منع Duplicate Generation المطلوب.
      const ready = await waitForReady(supabase, cacheKey, 5, 700);
      if (ready) { res.status(200).json({ ok: true, url: ready.audio_url, cacheHit: true }); return; }
      // إذا ما جهز بعد عدة محاولات (احتمال ضعيف)، نكمل ونحاول التوليد بأنفسنا كحل أخير
    }

    // 2) Cache Miss — نحجز الصف أولاً (Unique Constraint على cache_key هو آلية منع
    // التكرار الحقيقية بين عدة Invocations متزامنة على Vercel)
    const { error: insertErr } = await supabase.from(TTS_TABLE).insert({
      cache_key: cacheKey, language: lang, text_hash: textHash, text,
      voice_id: voiceId, model_id: modelId, output_format: outputFormat,
      voice_settings: voiceSettings, status: "generating", character_count: characterCount
    });

    if (insertErr) {
      // كود 23505 = Unique Violation → عميل آخر سبقنا بجزء من الثانية بالضبط
      if (insertErr.code === "23505") {
        const ready = await waitForReady(supabase, cacheKey, 5, 700);
        if (ready) { res.status(200).json({ ok: true, url: ready.audio_url, cacheHit: true }); return; }
      } else {
        console.error("فشل حجز صف Cache:", insertErr);
      }
    }

    // 3) توليد فعلي من ElevenLabs (مع إعادة محاولة عند 429/5xx فقط)
    const generated = await generateFromElevenLabs({ text, voiceId, modelId, outputFormat, voiceSettings });
    if (!generated) {
      await supabase.from(TTS_TABLE).update({ status: "failed", updated_at: new Date().toISOString() }).eq("cache_key", cacheKey);
      res.status(204).end(); // فشل صامت — الواجهة تتراجع لصوت المتصفح دون أي رسالة تقنية للعميل
      return;
    }

    // 4) رفع الملف لـ Supabase Storage
    const path = storagePath(lang, cacheKey);
    const { error: uploadErr } = await supabase.storage.from(TTS_BUCKET).upload(path, generated.buffer, {
      contentType: "audio/mpeg", upsert: true
    });
    if (uploadErr) {
      console.error("فشل رفع الصوت إلى Supabase Storage:", uploadErr);
      await supabase.from(TTS_TABLE).update({ status: "failed", updated_at: new Date().toISOString() }).eq("cache_key", cacheKey);
      res.status(204).end();
      return;
    }

    const { data: publicUrlData } = supabase.storage.from(TTS_BUCKET).getPublicUrl(path);
    const audioUrl = publicUrlData.publicUrl;

    // 5) حفظ الـ Metadata النهائية
    await supabase.from(TTS_TABLE).update({
      status: "ready", audio_url: audioUrl,
      character_cost: generated.characterCost ?? characterCount,
      request_id: generated.requestId || null,
      last_used_at: new Date().toISOString(), play_count: 1,
      updated_at: new Date().toISOString()
    }).eq("cache_key", cacheKey);

    res.status(200).json({ ok: true, url: audioUrl, cacheHit: false });
  } catch (err) {
    console.error("خطأ عام في /api/tts:", err);
    res.status(204).end(); // لا تُكسر الواجهة أبدًا — فشل صامت فقط
  }
}

async function waitForReady(supabase, cacheKey, attempts, delayMs) {
  for (let i = 0; i < attempts; i++) {
    await new Promise(r => setTimeout(r, delayMs));
    const { data } = await supabase.from(TTS_TABLE).select("*").eq("cache_key", cacheKey).maybeSingle();
    if (data && data.status === "ready" && data.audio_url) return data;
    if (data && data.status === "failed") return null;
  }
  return null;
}

async function generateFromElevenLabs({ text, voiceId, modelId, outputFormat, voiceSettings }, retriesLeft = 2) {
  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  if (!ELEVENLABS_API_KEY) { console.error("ELEVENLABS_API_KEY غير مضبوطة."); return null; }

  try {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=${outputFormat}`, {
      method: "POST",
      headers: { "xi-api-key": ELEVENLABS_API_KEY, "Content-Type": "application/json", "Accept": "audio/mpeg" },
      body: JSON.stringify({ text, model_id: modelId, voice_settings: voiceSettings })
    });

    if (res.status === 429 || res.status >= 500) {
      if (retriesLeft > 0) {
        await new Promise(r => setTimeout(r, (3 - retriesLeft) * 1200)); // Exponential backoff بسيط
        return generateFromElevenLabs({ text, voiceId, modelId, outputFormat, voiceSettings }, retriesLeft - 1);
      }
      console.error(`ElevenLabs رفض الطلب بعد إعادة المحاولة — HTTP ${res.status}`);
      return null;
    }
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error(`ElevenLabs رفض الطلب — HTTP ${res.status}: ${errText}`);
      return null;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    // ملاحظة أمانة: لم أستطع التحقق حيًا من الاسم الدقيق لأي Header ترجعه ElevenLabs
    // فعليًا لتكلفة الأحرف الحقيقية (character-cost) لأني بلا اتصال إنترنت هنا لأختبر
    // استجابة API مباشرة. أحاول قراءة أكثر من اسم محتمل، وإن لم يوجد أي منها،
    // نرجع لعدّ طول النص كتقدير (وهو نفس المعيار المستخدم في المرسلة).
    const characterCost = res.headers.get("character-cost") || res.headers.get("xi-character-cost") || null;
    const requestId = res.headers.get("request-id") || res.headers.get("xi-request-id") || null;

    return { buffer, characterCost: characterCost ? Number(characterCost) : null, requestId };
  } catch (err) {
    if (retriesLeft > 0) {
      await new Promise(r => setTimeout(r, (3 - retriesLeft) * 1200));
      return generateFromElevenLabs({ text, voiceId, modelId, outputFormat, voiceSettings }, retriesLeft - 1);
    }
    console.error("فشل الاتصال بـ ElevenLabs:", err);
    return null;
  }
}
