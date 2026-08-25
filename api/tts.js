// api/tts.js
// Vercel Serverless Function — يستدعي Microsoft Azure Speech Service من السيرفر فقط.
// المفتاح لا يُكتب هنا مطلقًا؛ يُقرأ من Environment Variables في إعدادات مشروع Vercel:
//   AZURE_SPEECH_KEY
//   AZURE_SPEECH_REGION   (مثال: "uaenorth" أو "westeurope" — حسب المنطقة التي أنشأت فيها المورد)
//
// الواجهة الأمامية (index.html) ترسل POST إلى /api/tts بالشكل:
//   { lang, locale, voice, text, rate }
// وتستقبل ملف صوت audio/mpeg جاهزًا للتشغيل مباشرة.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const AZURE_SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
  const AZURE_SPEECH_REGION = process.env.AZURE_SPEECH_REGION;

  if (!AZURE_SPEECH_KEY || !AZURE_SPEECH_REGION) {
    res.status(500).json({
      error: "AZURE_SPEECH_KEY أو AZURE_SPEECH_REGION غير مضبوطة في Environment Variables على Vercel."
    });
    return;
  }

  const { locale, voice, text, rate } = req.body || {};

  if (!locale || !voice || !text) {
    res.status(400).json({ error: "الحقول المطلوبة: locale, voice, text" });
    return;
  }

  const ratePercent = Math.round(((rate ?? 0.97) - 1) * 100);
  const rateAttr = `${ratePercent >= 0 ? "+" : ""}${ratePercent}%`;

  const ssml = `
    <speak version="1.0" xml:lang="${locale}">
      <voice name="${voice}">
        <prosody rate="${rateAttr}">${escapeXml(text)}</prosody>
      </voice>
    </speak>
  `.trim();

  try {
    const azureRes = await fetch(
      `https://${AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
      {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": AZURE_SPEECH_KEY,
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": "audio-16khz-64kbitrate-mono-mp3",
          "User-Agent": "noura-driving-kiosk"
        },
        body: ssml
      }
    );

    if (!azureRes.ok) {
      const errText = await azureRes.text();
      res.status(azureRes.status).json({ error: "Azure Speech رفض الطلب", details: errText });
      return;
    }

    const buffer = Buffer.from(await azureRes.arrayBuffer());
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.status(200).send(buffer);
  } catch (err) {
    res.status(500).json({ error: "فشل الاتصال بـ Azure Speech", details: String(err) });
  }
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
