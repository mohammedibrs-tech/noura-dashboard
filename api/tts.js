// api/tts.js
// Vercel Serverless Function — يستدعي ElevenLabs Text-to-Speech من السيرفر فقط.
// المفتاح لا يُكتب هنا مطلقًا؛ يُقرأ من Environment Variables في إعدادات مشروع Vercel:
//   ELEVENLABS_API_KEY
//   ELEVENLABS_VOICE_ID   (صوت واحد يُستخدم لكل اللغات عبر نموذج multilingual)
//
// الواجهة الأمامية (index.html) ترسل POST إلى /api/tts بالشكل:
//   { lang, locale, text, rate }
// وتستقبل ملف صوت audio/mpeg جاهزًا للتشغيل مباشرة.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID;

  if (!ELEVENLABS_API_KEY || !ELEVENLABS_VOICE_ID) {
    res.status(500).json({
      error: "ELEVENLABS_API_KEY أو ELEVENLABS_VOICE_ID غير مضبوطة في Environment Variables على Vercel."
    });
    return;
  }

  const { text } = req.body || {};
  if (!text) {
    res.status(400).json({ error: "الحقل المطلوب: text" });
    return;
  }

  try {
    const elRes = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
          "Accept": "audio/mpeg"
        },
        body: JSON.stringify({
          text,
          // نموذج متعدد اللغات: يكتشف اللغة من النص نفسه وينطقها بنفس الصوت
          model_id: "eleven_multilingual_v2",
          voice_settings: { stability: 0.5, similarity_boost: 0.75 }
        })
      }
    );

    if (!elRes.ok) {
      const errText = await elRes.text();
      res.status(elRes.status).json({ error: "ElevenLabs رفض الطلب", details: errText });
      return;
    }

    const buffer = Buffer.from(await elRes.arrayBuffer());
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.status(200).send(buffer);
  } catch (err) {
    res.status(500).json({ error: "فشل الاتصال بـ ElevenLabs", details: String(err) });
  }
}
