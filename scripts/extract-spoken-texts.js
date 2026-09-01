// scripts/extract-spoken-texts.js
// يقرأ noura-kiosk.html ويستخرج منه كل spokenText الموجودة فعليًا في كائن CONTENT
// (وليس نصوصًا مخترعة) ويكتبها في ملف manifest بسيط يستخدمه سكريبت التوليد المسبق.
//
// التشغيل: node scripts/extract-spoken-texts.js

import fs from "fs";
import path from "path";

const htmlPath = path.join(process.cwd(), "noura-kiosk.html");
const html = fs.readFileSync(htmlPath, "utf-8");

const match = html.match(/const CONTENT = (\{[\s\S]*?\});\nCONTENT\.pa/);
if (!match) {
  console.error("لم أستطع إيجاد كائن CONTENT داخل الملف. تأكد أن اسم الملف والمسار صحيحان.");
  process.exit(1);
}

const CONTENT = JSON.parse(match[1]);
CONTENT.pa = JSON.parse(JSON.stringify(CONTENT.ur));

const manifest = [];

function pushIfExists(lang, key, text) {
  if (text && text.trim()) manifest.push({ lang, key, text });
}

for (const lang of Object.keys(CONTENT)) {
  const c = CONTENT[lang];
  if (c.levelFlow?.spokenText) pushIfExists(lang, "levelFlow.audio", c.levelFlow.spokenText);
  if (c.unknown?.spokenText) pushIfExists(lang, "unknown.audio", c.unknown.spokenText);
  if (c.practicalDone?.spokenText) pushIfExists(lang, "practicalDone.audio", c.practicalDone.spokenText);
  for (const levelKey of ["beginner", "intermediate", "advanced"]) {
    const lvl = c.levels?.[levelKey];
    if (lvl?.spokenText) pushIfExists(lang, `level.${levelKey}.audio`, lvl.spokenText);
  }
}

fs.writeFileSync(
  path.join(process.cwd(), "scripts", "spoken-texts-manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf-8"
);

console.log(`تم استخراج ${manifest.length} نصًا صوتيًا إلى scripts/spoken-texts-manifest.json`);
