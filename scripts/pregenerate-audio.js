// scripts/pregenerate-audio.js
// يقرأ scripts/spoken-texts-manifest.json (ناتج extract-spoken-texts.js) ويولّد
// فقط الملفات الصوتية الناقصة فعليًا — لا يعيد توليد أي ملف موجود مسبقًا في الـ Cache.
//
// التشغيل (من جهازك، وليس من المتصفح):
//   node scripts/extract-spoken-texts.js
//   node scripts/pregenerate-audio.js
//
// يتطلب متغيرات البيئة نفسها الموجودة في .env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
// ELEVENLABS_API_KEY — حمّلها من ملف .env محليًا أو صدّرها في الـ Shell قبل التشغيل.

import fs from "fs";
import path from "path";
import { getSupabaseAdmin, TTS_TABLE, TTS_BUCKET } from "../lib/supabaseAdmin.js";
import { buildCacheKey, storagePath } from "../lib/ttsCache.js";
import { getVoiceConfig } from "../config/elevenlabs.js";

const manifestPath = path.join(process.cwd(), "scripts", "spoken-texts-manifest.json");
if (!fs.existsSync(manifestPath)) {
  console.error("شغّل أولاً: node scripts/extract-spoken-texts.js");
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
const supabase = getSupabaseAdmin();

async function generateOne(item) {
  const voiceCfg = getVoiceConfig(item.lang);
  if (!voiceCfg) { console.log(`⏭  تخطّي (لا يوجد إعداد صوت): ${item.lang}/${item.key}`); return; }

  const { voiceId, modelId, outputFormat, voiceSettings } = voiceCfg;
  const cacheKey = buildCacheKey({ text: item.text, voiceId, modelId, outputFormat, voiceSettings, language: item.lang });

  const { data: existing } = await supabase.from(TTS_TABLE).select("status").eq("cache_key", cacheKey).maybeSingle();
  if (existing?.status === "ready") { console.log(`✔  موجود مسبقًا: ${item.lang}/${item.key}`); return; }

  console.log(`⏳ توليد: ${item.lang}/${item.key}`);
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=${outputFormat}`, {
    method: "POST",
    headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY, "Content-Type": "application/json", "Accept": "audio/mpeg" },
    body: JSON.stringify({ text: item.text, model_id: modelId, voice_settings: voiceSettings })
  });

  if (!res.ok) { console.error(`✘  فشل: ${item.lang}/${item.key} — HTTP ${res.status}`); return; }

  const buffer = Buffer.from(await res.arrayBuffer());
  const spath = storagePath(item.lang, cacheKey);
  await supabase.storage.from(TTS_BUCKET).upload(spath, buffer, { contentType: "audio/mpeg", upsert: true });
  const { data: pub } = supabase.storage.from(TTS_BUCKET).getPublicUrl(spath);

  await supabase.from(TTS_TABLE).upsert({
    cache_key: cacheKey, language: item.lang, text_hash: cacheKey, text: item.text,
    voice_id: voiceId, model_id: modelId, output_format: outputFormat, voice_settings: voiceSettings,
    status: "ready", audio_url: pub.publicUrl, character_count: item.text.length,
    updated_at: new Date().toISOString()
  }, { onConflict: "cache_key" });

  console.log(`✔  تم: ${item.lang}/${item.key}`);
}

(async () => {
  for (const item of manifest) {
    await generateOne(item);
  }
  console.log("انتهى التوليد المسبق.");
})();
