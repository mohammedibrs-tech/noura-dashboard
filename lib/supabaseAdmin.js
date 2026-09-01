// lib/supabaseAdmin.js
import { createClient } from "@supabase/supabase-js";

// هذا الملف يُستدعى فقط من داخل api/*.js (Server-side). الـ Service Role Key
// له صلاحيات كاملة على قاعدة البيانات، لذلك ممنوع استيراده من أي كود يعمل في
// المتصفح. لا يوجد أي متغير هنا يبدأ بـ NEXT_PUBLIC_.
let client = null;

export function getSupabaseAdmin() {
  if (client) return client;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("SUPABASE_URL أو SUPABASE_SERVICE_ROLE_KEY غير مضبوطة في Environment Variables.");
  }
  client = createClient(url, key, { auth: { persistSession: false } });
  return client;
}

export const TTS_TABLE = "tts_audio_cache";
export const TTS_BUCKET = "tts-audio";
