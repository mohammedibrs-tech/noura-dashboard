// lib/providers/elevenlabsAdapter.js
//
// التطبيق الفعلي الوحيد لعقد TTSProvider (المعرّف في lib/ttsProviderAdapter.js)
// الخاص بـElevenLabs. هذا الملف يعمل على السيرفر فقط (Vercel Serverless) —
// المفتاح ELEVENLABS_API_KEY لا يظهر أبدًا في المتصفح.
//
// هذا الملف لا يغيّر أي شيء بالكتالوج (ttsCatalog.js) ولا بالواجهة — فقط ينفّذ
// العقد المتفق عليه مسبقًا، تمامًا كما كان مخططًا له من البداية.

export const elevenlabsAdapter = {
  async generateSpeech({ text, voiceId, modelId, voiceSettings }) {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    if (!ELEVENLABS_API_KEY) throw new Error("ELEVENLABS_API_KEY غير مضبوطة.");

    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: { "xi-api-key": ELEVENLABS_API_KEY, "Content-Type": "application/json", "Accept": "audio/mpeg" },
      body: JSON.stringify({ text, model_id: modelId, voice_settings: voiceSettings })
    });

    if (!res.ok) {
      const details = await res.text().catch(() => "");
      throw new Error(`ElevenLabs رفض الطلب — HTTP ${res.status}: ${details}`);
    }

    const audioBuffer = Buffer.from(await res.arrayBuffer());
    const characterCost = res.headers.get("character-cost") || res.headers.get("xi-character-cost");
    const requestId = res.headers.get("request-id") || res.headers.get("xi-request-id");

    return {
      audioBuffer,
      characterCost: characterCost ? Number(characterCost) : null,
      requestId: requestId || null
    };
  },

  async getVoice(voiceId) {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    if (!ELEVENLABS_API_KEY) throw new Error("ELEVENLABS_API_KEY غير مضبوطة.");
    const res = await fetch(`https://api.elevenlabs.io/v1/voices/${voiceId}`, {
      headers: { "xi-api-key": ELEVENLABS_API_KEY }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return { id: data.voice_id, name: data.name, language: null };
  },

  async getUsage() {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    if (!ELEVENLABS_API_KEY) throw new Error("ELEVENLABS_API_KEY غير مضبوطة.");
    const res = await fetch("https://api.elevenlabs.io/v1/user/subscription", {
      headers: { "xi-api-key": ELEVENLABS_API_KEY }
    });
    if (!res.ok) return { charactersUsed: 0, charactersLimit: null };
    const data = await res.json();
    return {
      charactersUsed: data.character_count ?? 0,
      charactersLimit: data.character_limit ?? null
    };
  },

  getCharacterCount(text) {
    return text.length;
  }
};
