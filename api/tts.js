// api/tts.js
// Vercel Serverless Function — Azure Speech Text-to-Speech
// Required Vercel Environment Variables:
//   AZURE_SPEECH_KEY
//   AZURE_SPEECH_REGION   مثال: westeurope أو uaenorth
// Optional:
//   AZURE_SPEECH_VOICE    مثال: ar-SA-HamedNeural

const VOICES = {
  ar: "ar-SA-HamedNeural",   // صوت عربي سعودي
  en: "en-US-JennyNeural",    // صوت إنجليزي
  ur: "ur-PK-UzmaNeural",     // صوت أردو
  hi: "hi-IN-SwaraNeural"     // صوت هندي
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getVoice(lang) {
  // إذا وضعت AZURE_SPEECH_VOICE في Vercel فسيُستخدم لكل اللغات.
  // اتركه فارغًا لاستخدام صوت مناسب تلقائيًا لكل لغة.
  return process.env.AZURE_SPEECH_VOICE || VOICES[lang] || VOICES.ar;
}

function getLocale(lang, voice) {
  const voiceLocale = String(voice).split("-").slice(0, 2).join("-");
  return voiceLocale || ({ ar: "ar-SA", en: "en-US", ur: "ur-PK", hi: "hi-IN" }[lang] || "ar-SA");
}

function rateToAzurePercent(rate) {
  const numericRate = Number(rate);
  if (!Number.isFinite(numericRate) || numericRate <= 0) return "0%";

  // الواجهة الحالية ترسل 0.97؛ Azure يستخدم نسبة مئوية، لذلك تصبح -3%.
  const percent = Math.round((numericRate - 1) * 100);
  return `${percent >= 0 ? "+" : ""}${percent}%`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;

  if (!key || !region) {
    return res.status(500).json({
      error: "متغيرات Azure غير مضبوطة في Vercel.",
      required: ["AZURE_SPEECH_KEY", "AZURE_SPEECH_REGION"]
    });
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "صيغة JSON غير صحيحة" });
    }
  }

  const text = String(body.text || "").trim();
  const lang = String(body.lang || "ar").toLowerCase();
  const rate = body.rate;

  if (!text) {
    return res.status(400).json({ error: "الحقل المطلوب: text" });
  }

  // حماية بسيطة من الطلبات الضخمة غير المقصودة.
  if (text.length > 5000) {
    return res.status(413).json({ error: "النص طويل جدًا. الحد الأقصى 5000 حرف." });
  }

  const voice = getVoice(lang);
  const locale = getLocale(lang, voice);
  const ssml = `<?xml version="1.0" encoding="UTF-8"?>
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${locale}">
  <voice name="${escapeXml(voice)}">
    <prosody rate="${rateToAzurePercent(rate)}">${escapeXml(text)}</prosody>
  </voice>
</speak>`;

  const endpoint = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);

  try {
    const azureResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
        "User-Agent": "noura-driving-dashboard"
      },
      body: ssml,
      signal: controller.signal
    });

    if (!azureResponse.ok) {
      const details = await azureResponse.text().catch(() => "");
      console.error(`Azure Speech رفض الطلب — HTTP ${azureResponse.status}: ${details}`);
      return res.status(azureResponse.status).json({
        error: "Azure Speech رفض الطلب",
        status: azureResponse.status,
        voice,
        details
      });
    }

    const audioBuffer = Buffer.from(await azureResponse.arrayBuffer());
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.status(200).send(audioBuffer);
  } catch (error) {
    const message = error?.name === "AbortError" ? "انتهت مهلة الاتصال بـ Azure Speech" : String(error);
    console.error(message);
    return res.status(502).json({ error: "فشل الاتصال بـ Azure Speech", details: message });
  } finally {
    clearTimeout(timeout);
  }
}
