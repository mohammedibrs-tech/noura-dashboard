// lib/ttsCache.js
import crypto from "crypto";

// أي تغيير حقيقي في الصوت الناتج (نص، صوت، نموذج، صيغة، إعدادات) يجب أن ينتج
// مفتاح Cache مختلف تمامًا — هذا هو الضامن الوحيد لعدم استخدام صوت قديم خاطئ.
export function buildCacheKey({ text, voiceId, modelId, outputFormat, voiceSettings, language }) {
  const payload = {
    text,
    voiceId,
    modelId,
    outputFormat,
    voiceSettings,
    language
  };
  const hash = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  return hash;
}

export function storagePath(language, cacheKey) {
  return `${language}/${cacheKey}.mp3`;
}
