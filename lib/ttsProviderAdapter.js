// lib/ttsProviderAdapter.js
//
// هذا الملف يحدد "العقد" (Interface) الذي يجب أن يلتزم به أي مزود TTS مستقبلي
// (ElevenLabs، Azure، Audexum، أو غيره) — بدون ربط الكود بمزود معيّن الآن.
//
// لا يوجد هنا أي استدعاء شبكة، لا مفتاح API، لا Billing. هذا مجرد "شكل" العقد.
//
// عند اختيار مزود لاحقًا: يُنشأ ملف جديد مثل lib/providers/elevenlabsAdapter.js
// يطبّق (implements) نفس الدوال الأربع بالضبط، ويُمرَّر لـ TTSService — بدون أي
// تعديل على الكتالوج (ttsCatalog.js) أو على واجهة المستخدم (UI) إطلاقًا.

/**
 * @typedef {Object} TTSProvider
 * @property {(params: {text: string, voiceId: string, modelId: string, voiceSettings: object}) => Promise<{audioBuffer: Buffer, characterCost: number|null, requestId: string|null}>} generateSpeech
 * @property {(voiceId: string) => Promise<{id: string, name: string, language: string}|null>} getVoice
 * @property {() => Promise<{charactersUsed: number, charactersLimit: number|null}>} getUsage
 * @property {(text: string) => number} getCharacterCount
 */

// قالب مرجعي فارغ — لا يُستخدم فعليًا، فقط يوثّق الشكل المتوقع لأي Adapter مستقبلي.
export const TTS_PROVIDER_TEMPLATE = {
  async generateSpeech({ text, voiceId, modelId, voiceSettings }) {
    throw new Error("لم يتم تحديد مزود TTS بعد. هذا Placeholder فقط.");
  },
  async getVoice(voiceId) {
    throw new Error("لم يتم تحديد مزود TTS بعد. هذا Placeholder فقط.");
  },
  async getUsage() {
    throw new Error("لم يتم تحديد مزود TTS بعد. هذا Placeholder فقط.");
  },
  getCharacterCount(text) {
    return text.length; // هذا الجزء فقط لا يحتاج مزودًا خارجيًا — يعمل دائمًا
  }
};
