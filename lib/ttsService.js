// lib/ttsService.js
//
// الطبقة الوحيدة التي يفترض أن تتعامل معها الواجهة (UI) مستقبلاً لتشغيل الصوت.
// حاليًا provider = null عمدًا (حسب الطلب: "لا تربط المشروع الآن بمزود TTS معين").
//
// التدفق المخطَّط له لاحقًا:
//   Customer UI → TTSService → TTS Catalog → Provider Adapter → TTS Provider
//
// بمجرد تحديد المزود: يُستورد Adapter الفعلي هنا فقط (سطر واحد)، بدون أي تعديل
// على الكتالوج أو الواجهة.

import { getTTSEntry } from "../src/data/ttsCatalog.js";
import { elevenlabsAdapter } from "./providers/elevenlabsAdapter.js";
import { getVoiceConfig } from "../config/elevenlabs.js";

// المزوّد النشط الآن: ElevenLabs — تم تحديده منك. تغيير المزوّد مستقبلاً يكون
// بتبديل هذا السطر فقط (وإنشاء Adapter جديد بنفس العقد)، بدون أي تعديل آخر.
let activeProvider = elevenlabsAdapter;

export function setTTSProvider(providerAdapter) {
  activeProvider = providerAdapter;
}

export async function resolveAudio(ttsId, language) {
  const entry = getTTSEntry(ttsId, language);
  if (!entry) {
    console.warn(`لا يوجد إدخال بالكتالوج للمعرّف "${ttsId}" باللغة "${language}".`);
    return null;
  }
  if (!entry.spokenText) {
    console.warn(`المعرّف "${ttsId}" باللغة "${language}" ليس له نص منطوق بعد (${entry.status}).`);
    return null;
  }
  if (!activeProvider) {
    console.warn("لم يتم تفعيل أي مزود TTS بعد — استدعِ setTTSProvider() أولاً.");
    return null;
  }
  // هذا الاستدعاء لن يُنفَّذ فعليًا إلى أن يُضبط مزود حقيقي — الكود هنا جاهز فقط
  const voiceCfg = getVoiceConfig(language);
  if (!voiceCfg) {
    console.warn(`لا يوجد إعداد صوت للغة "${language}" في config/elevenlabs.js.`);
    return null;
  }
  return activeProvider.generateSpeech({
    text: entry.spokenText,
    voiceId: voiceCfg.voiceId,
    modelId: voiceCfg.modelId,
    voiceSettings: voiceCfg.voiceSettings
  });
}
