// api/tts-stats.js
// محمي بمفتاح إداري بسيط (ADMIN_SECRET) — للاستخدام الداخلي فقط، لا يظهر للعملاء.
import { getSupabaseAdmin, TTS_TABLE } from "../lib/supabaseAdmin.js";

export default async function handler(req, res) {
  const adminSecret = process.env.ADMIN_SECRET;
  const provided = req.headers["x-admin-secret"];
  if (!adminSecret || provided !== adminSecret) {
    res.status(401).json({ ok: false, error: "غير مصرّح" });
    return;
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from(TTS_TABLE).select("*");
    if (error) throw error;

    const totalFiles = data.filter(r => r.status === "ready").length;
    const totalCharacters = data.reduce((sum, r) => sum + (r.character_count || 0), 0);
    const totalPlays = data.reduce((sum, r) => sum + (r.play_count || 0), 0);
    const byLanguage = {};
    const voiceIds = new Set();
    let lastGenerated = null;

    data.forEach(r => {
      byLanguage[r.language] = (byLanguage[r.language] || 0) + 1;
      if (r.voice_id) voiceIds.add(r.voice_id);
      if (r.status === "ready" && (!lastGenerated || r.created_at > lastGenerated)) lastGenerated = r.created_at;
    });

    res.status(200).json({
      ok: true,
      totalCachedAudio: totalFiles,
      totalCharactersGenerated: totalCharacters,
      totalPlays,
      languages: byLanguage,
      voiceIds: Array.from(voiceIds),
      lastGenerated
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
}
