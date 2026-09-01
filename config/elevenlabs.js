// config/elevenlabs.js
// كل إعدادات الصوت من مكان واحد فقط. لا يوجد Voice ID أو Model داخل أي Component.
//
// ملاحظة مهمة: القيم الحالية لكل اللغات تستخدم مؤقتًا نفس الـ Voice ID الواحد
// (cFUFIbKkO2iZFwS8cRnY) الذي زوّدتنا به سابقًا، مع نموذج multilingual الذي يكتشف
// اللغة من النص نفسه. قلت إنك ستزوّدنا لاحقًا بـ Voice IDs معتمدة لكل لغة —
// بمجرد توفرها، غيّرها هنا فقط ولا تلمس أي كود آخر.

export const ELEVENLABS_CONFIG = {
  defaultModelId: "eleven_multilingual_v2",
  defaultOutputFormat: "mp3_44100_128", // MP3 — صوت واضح وحجم ملف صغير وتشغيل سريع
  defaultVoiceSettings: { stability: 0.5, similarity_boost: 0.75 },

  languages: {
    ar: { locale: "ar-SA", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    en: { locale: "en-US", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    ur: { locale: "ur-PK", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    hi: { locale: "hi-IN", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    pa: { locale: "ur-PK", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    fr: { locale: "fr-FR", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    it: { locale: "it-IT", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    bn: { locale: "bn-BD", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } },
    tr: { locale: "tr-TR", voiceId: "cFUFIbKkO2iZFwS8cRnY", modelId: "eleven_multilingual_v2", outputFormat: "mp3_44100_128", voiceSettings: { stability: 0.5, similarity_boost: 0.75 } }
  }
};

export function getVoiceConfig(lang) {
  return ELEVENLABS_CONFIG.languages[lang] || null;
}
