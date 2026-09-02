// src/data/ttsCatalog.js
// المصدر المركزي الوحيد لكل جمل الصوت في منصة نورة — Provider-Agnostic بالكامل.
// لا يوجد هنا أي Voice ID أو مزود TTS معيّن — هذا الملف بيانات نصية بحتة.
// كل معرّف (ID) ثابت ويُستخدم كمفتاح Cache لاحقًا — لا تُغيّر أي ID بعد اعتماده
// لأن ذلك يُفقد الربط مع أي صوت مُولَّد مسبقًا لهذا المعرّف.

export const TTS_CATALOG = {
  "TTS_LEVEL_SELECTION_INTRO": {
    "category": "level_selection",
    "languages": {
      "ar": {
        "displayText": "ما هو عدد الساعات المحددة لك؟",
        "spokenText": "عشان نعرف البرنامج المناسب لك، اختر عدد الساعات المحددة لك.",
        "characterCount": 59,
        "textHash": "9edbb71571defc30d29eaa4c930c2c83627f30d405a972d8f2c5b8c7397019f6",
        "status": "pending"
      },
      "en": {
        "displayText": "How many training hours were you assigned?",
        "spokenText": "To find the right program for you, please select your assigned number of hours.",
        "characterCount": 79,
        "textHash": "86678366a458695e4de49be73f0fb70979cfc0c82d55cac7f22ca9ba59002983",
        "status": "pending"
      },
      "ur": {
        "displayText": "آپ کے لیے مقرر کردہ گھنٹے کتنے ہیں؟",
        "spokenText": "آپ کے لیے صحیح پروگرام جاننے کے لیے، اپنے مقرر کردہ گھنٹے منتخب کریں۔",
        "characterCount": 69,
        "textHash": "abaf750f1b087b5d67f743549e25fdfbc13c553194b6aa7756f9b86cb7d925b9",
        "status": "pending"
      },
      "hi": {
        "displayText": "आपके लिए निर्धारित घंटे कितने हैं?",
        "spokenText": "आपके लिए सही कार्यक्रम जानने के लिए, अपने निर्धारित घंटे चुनें।",
        "characterCount": 63,
        "textHash": "d0c4b8fa1342ede70df05d4063789d86d9a0a1357b3cb8602c3d93e24e5719c7",
        "status": "pending"
      },
      "pa": {
        "displayText": "آپ کے لیے مقرر کردہ گھنٹے کتنے ہیں؟",
        "spokenText": "آپ کے لیے صحیح پروگرام جاننے کے لیے، اپنے مقرر کردہ گھنٹے منتخب کریں۔",
        "characterCount": 69,
        "textHash": "abaf750f1b087b5d67f743549e25fdfbc13c553194b6aa7756f9b86cb7d925b9",
        "status": "pending"
      },
      "fr": {
        "displayText": "Combien d'heures vous ont été attribuées ?",
        "spokenText": "Pour trouver le programme adapté, veuillez sélectionner le nombre d'heures qui vous a été attribué.",
        "characterCount": 99,
        "textHash": "4d327219e87416c9863fdcecc1a24e4a35e5fce6dbcee65ac3148d475f328d04",
        "status": "pending"
      },
      "it": {
        "displayText": "Quante ore ti sono state assegnate?",
        "spokenText": "Per trovare il programma adatto a te, seleziona il numero di ore assegnate.",
        "characterCount": 75,
        "textHash": "693989ca5b4667e2d57ed97a9e5b01e31337ffc0d9ae6fc29278241658225ea0",
        "status": "pending"
      },
      "bn": {
        "displayText": "আপনার জন্য নির্ধারিত ঘণ্টা কত?",
        "spokenText": "আপনার জন্য সঠিক প্রোগ্রাম জানতে, আপনার নির্ধারিত ঘণ্টা নির্বাচন করুন।",
        "characterCount": 69,
        "textHash": "1f8a61dbc1b592f4722b898b15999ae0c057999b5ed8f54b6a84815caf3ca488",
        "status": "pending"
      },
      "tr": {
        "displayText": "Size kaç saat atandı?",
        "spokenText": "Size uygun programı belirlemek için, atanan saat sayısını seçin.",
        "characterCount": 64,
        "textHash": "5988dc476fcddf1eca4d3169cfd2a5f0c199f32b7f7fb17b60d2af13909e61d3",
        "status": "pending"
      }
    }
  },
  "TTS_LEVEL_BEGINNER": {
    "category": "level",
    "languages": {
      "ar": {
        "displayText": "عدد ساعات التدريب: 30 ساعة",
        "spokenText": "إذا كان تقييمك مبتدئ، بيكون تدريبك 30 ساعة على 11 يوم. بعد تحديد المستوى، تتوجه للاستقبال وتاخذ رقم، وبعدها تنتظر خدمة العملاء عشان تكمل دفع الرسوم. بعد الدفع، تاخذ حصة المحاكاة في المبنى الرئيسي، وبعدها الاختبار النظري. وإذا اجتزت الاختبار، تقدر تحدد مواعيد التدريب العملي عن طريق خدمة العملاء أو من الموقع، وتوصل لموقع الميدان العملي عن طريق مسح الرمز.",
        "characterCount": 354,
        "textHash": "0d9c1a7948e29834111fa8aafb887b9b9926dae0898ead2d4831216c9236465a",
        "status": "pending"
      },
      "en": {
        "displayText": "Training hours: 30 hours",
        "spokenText": "If your level is beginner, your training will be 30 hours over 11 days. After the level assessment, go to reception and take a number, then wait for customer service to complete the fee payment. After payment, you'll take the simulation session at the main building, then the theory test. Once you pass, you can schedule your practical training dates through customer service or the website, and reach the practical field location by scanning the code.",
        "characterCount": 452,
        "textHash": "22336fe5c2a066a1df15b4fa9bfa1d683d378a5aafa80c06b620596ccaa5f99c",
        "status": "pending"
      },
      "ur": {
        "displayText": "تربیت کے گھنٹے: 30 گھنٹے",
        "spokenText": "اگر آپ کی سطح ابتدائی ہے تو آپ کی تربیت 30 گھنٹے اور 11 دن پر مشتمل ہوگی۔ سطح کے تعین کے بعد استقبالیہ پر جا کر نمبر لیں، پھر فیس کی ادائیگی کے لیے کسٹمر سروس کا انتظار کریں۔ ادائیگی کے بعد مرکزی عمارت میں سمولیشن سیشن ہوگا، پھر تھیوری ٹیسٹ۔ پاس ہونے کے بعد آپ کسٹمر سروس یا ویب سائٹ کے ذریعے عملی تربیت کی تاریخیں طے کر سکتے ہیں، اور کوڈ اسکین کر کے عملی میدان کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 387,
        "textHash": "60354c937251f9a68e10c1b4672d77685bef0a7a725c61e156ddbe48471bd51f",
        "status": "pending"
      },
      "hi": {
        "displayText": "प्रशिक्षण घंटे: 30 घंटे",
        "spokenText": "अगर आपका स्तर शुरुआती है, तो आपका प्रशिक्षण 30 घंटे और 11 दिन का होगा। स्तर निर्धारण के बाद रिसेप्शन जाकर नंबर लें, फिर शुल्क भुगतान के लिए ग्राहक सेवा का इंतज़ार करें। भुगतान के बाद मुख्य भवन में सिमुलेशन सत्र होगा, फिर थ्योरी परीक्षा। पास होने के बाद आप ग्राहक सेवा या वेबसाइट के माध्यम से व्यावहारिक प्रशिक्षण की तारीखें तय कर सकते हैं, और कोड स्कैन करके व्यावहारिक मैदान तक पहुँच सकते हैं।",
        "characterCount": 393,
        "textHash": "f852e34fbefa895a4f3e66f26eb7c2349469625da40fb1d3b4f0ae9a1be9a74d",
        "status": "pending"
      },
      "pa": {
        "displayText": "تربیت کے گھنٹے: 30 گھنٹے",
        "spokenText": "اگر آپ کی سطح ابتدائی ہے تو آپ کی تربیت 30 گھنٹے اور 11 دن پر مشتمل ہوگی۔ سطح کے تعین کے بعد استقبالیہ پر جا کر نمبر لیں، پھر فیس کی ادائیگی کے لیے کسٹمر سروس کا انتظار کریں۔ ادائیگی کے بعد مرکزی عمارت میں سمولیشن سیشن ہوگا، پھر تھیوری ٹیسٹ۔ پاس ہونے کے بعد آپ کسٹمر سروس یا ویب سائٹ کے ذریعے عملی تربیت کی تاریخیں طے کر سکتے ہیں، اور کوڈ اسکین کر کے عملی میدان کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 387,
        "textHash": "60354c937251f9a68e10c1b4672d77685bef0a7a725c61e156ddbe48471bd51f",
        "status": "pending"
      },
      "fr": {
        "displayText": "Heures de formation : 30 heures",
        "spokenText": "Si votre niveau est débutant, votre formation durera 30 heures sur 11 jours. Après la détermination du niveau, rendez-vous à la réception pour prendre un ticket, puis attendez le service client pour finaliser le paiement. Après le paiement, vous ferez la séance de simulation au bâtiment principal, puis l'examen théorique. Une fois réussi, vous pourrez planifier vos dates de formation pratique via le service client ou le site web, et rejoindre le terrain pratique en scannant le code.",
        "characterCount": 487,
        "textHash": "2debc58e5f5bbd6d03f9b000a0e6d1c71548214cbc7e59c18efbc5aeb58c1861",
        "status": "pending"
      },
      "it": {
        "displayText": "Ore di formazione: 30 ore",
        "spokenText": "Se il tuo livello è principiante, la tua formazione durerà 30 ore in 11 giorni. Dopo la valutazione del livello, vai alla reception per prendere un numero, poi attendi il servizio clienti per completare il pagamento. Dopo il pagamento, farai la sessione di simulazione presso l'edificio principale, poi l'esame teorico. Una volta superato, potrai pianificare le date della formazione pratica tramite il servizio clienti o il sito web, e raggiungere il campo pratico scansionando il codice.",
        "characterCount": 489,
        "textHash": "0956d2bb3e98325b858c163d0963f5fd884c4494ff2c15953ff35890a6e2928d",
        "status": "pending"
      },
      "bn": {
        "displayText": "প্রশিক্ষণ ঘণ্টা: ৩০ ঘণ্টা",
        "spokenText": "আপনার স্তর যদি শিক্ষানবিশ হয়, তাহলে আপনার প্রশিক্ষণ হবে ৩০ ঘণ্টা এবং ১১ দিন। স্তর নির্ধারণের পর রিসেপশনে গিয়ে নম্বর নিন, তারপর ফি প্রদানের জন্য কাস্টমার সার্ভিসের অপেক্ষা করুন। প্রদানের পর প্রধান ভবনে সিমুলেশন সেশন হবে, তারপর তত্ত্বীয় পরীক্ষা। পাস করার পর আপনি কাস্টমার সার্ভিস বা ওয়েবসাইটের মাধ্যমে ব্যবহারিক প্রশিক্ষণের তারিখ নির্ধারণ করতে পারবেন, এবং কোড স্ক্যান করে ব্যবহারিক মাঠে পৌঁছাতে পারবেন।",
        "characterCount": 404,
        "textHash": "feca81026f9fc0af3e49aa903e27f001b2d70e2ab921f9b2ceec902f1ab248ef",
        "status": "pending"
      },
      "tr": {
        "displayText": "Eğitim saatleri: 30 saat",
        "spokenText": "Seviyeniz başlangıç ise, eğitiminiz 11 gün boyunca 30 saat sürecektir. Seviye belirlemeden sonra resepsiyona gidip numara alın, ardından ödemeyi tamamlamak için müşteri hizmetlerini bekleyin. Ödemeden sonra ana binada simülasyon seansına, ardından teori sınavına gireceksiniz. Geçtikten sonra müşteri hizmetleri veya web sitesi üzerinden uygulamalı eğitim tarihlerinizi belirleyebilir, kodu tarayarak uygulama sahasına ulaşabilirsiniz.",
        "characterCount": 435,
        "textHash": "5d49b37ecf9fcb0f7dbed01be24b0fdbe85b9dd9ed2169d18ba7f098b67818a1",
        "status": "pending"
      }
    }
  },
  "TTS_LEVEL_INTERMEDIATE": {
    "category": "level",
    "languages": {
      "ar": {
        "displayText": "عدد ساعات التدريب: 15 ساعة",
        "spokenText": "إذا كان تقييمك متوسط، بيكون تدريبك 15 ساعة على 5 أيام. بعد تحديد المستوى، تتوجه للاستقبال وتاخذ رقم، وبعدها تنتظر خدمة العملاء عشان تكمل دفع الرسوم. بعد الدفع، تاخذ حصة المحاكاة في المبنى الرئيسي، وبعدها الاختبار النظري. وإذا اجتزت الاختبار، تقدر تحدد مواعيد التدريب العملي عن طريق خدمة العملاء أو من الموقع، وتوصل لموقع الميدان العملي عن طريق مسح الرمز.",
        "characterCount": 354,
        "textHash": "10de8918444ae56ec8ac835f31e9dd84a62ebb377a303a67b26b4774ea7f81eb",
        "status": "pending"
      },
      "en": {
        "displayText": "Training hours: 15 hours",
        "spokenText": "If your level is intermediate, your training will be 15 hours over 5 days. After the level assessment, go to reception and take a number, then wait for customer service to complete the fee payment. After payment, you'll take the simulation session at the main building, then the theory test. Once you pass, you can schedule your practical training dates through customer service or the website, and reach the practical field location by scanning the code.",
        "characterCount": 455,
        "textHash": "7260220cfcf8b82df8ae4d5cb14fa3966aa813ee00e8e29a38aba842bc43088b",
        "status": "pending"
      },
      "ur": {
        "displayText": "تربیت کے گھنٹے: 15 گھنٹے",
        "spokenText": "اگر آپ کی سطح درمیانہ ہے تو آپ کی تربیت 15 گھنٹے اور 5 دن پر مشتمل ہوگی۔ سطح کے تعین کے بعد استقبالیہ پر جا کر نمبر لیں، پھر فیس کی ادائیگی کے لیے کسٹمر سروس کا انتظار کریں۔ ادائیگی کے بعد مرکزی عمارت میں سمولیشن سیشن ہوگا، پھر تھیوری ٹیسٹ۔ پاس ہونے کے بعد آپ کسٹمر سروس یا ویب سائٹ کے ذریعے عملی تربیت کی تاریخیں طے کر سکتے ہیں، اور کوڈ اسکین کر کے عملی میدان کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 386,
        "textHash": "76c64e1a66c94d9ae4da70d685dd9b52a15fcb52c4ab51d7f9c45c5d045031d2",
        "status": "pending"
      },
      "hi": {
        "displayText": "प्रशिक्षण घंटे: 15 घंटे",
        "spokenText": "अगर आपका स्तर मध्यम है, तो आपका प्रशिक्षण 15 घंटे और 5 दिन का होगा। स्तर निर्धारण के बाद रिसेप्शन जाकर नंबर लें, फिर शुल्क भुगतान के लिए ग्राहक सेवा का इंतज़ार करें। भुगतान के बाद मुख्य भवन में सिमुलेशन सत्र होगा, फिर थ्योरी परीक्षा। पास होने के बाद आप ग्राहक सेवा या वेबसाइट के माध्यम से व्यावहारिक प्रशिक्षण की तारीखें तय कर सकते हैं, और कोड स्कैन करके व्यावहारिक मैदान तक पहुँच सकते हैं।",
        "characterCount": 390,
        "textHash": "166f6e50e6816b0d13a3c2a31e55cbf07efec807b2da70cf9081593cdf064c70",
        "status": "pending"
      },
      "pa": {
        "displayText": "تربیت کے گھنٹے: 15 گھنٹے",
        "spokenText": "اگر آپ کی سطح درمیانہ ہے تو آپ کی تربیت 15 گھنٹے اور 5 دن پر مشتمل ہوگی۔ سطح کے تعین کے بعد استقبالیہ پر جا کر نمبر لیں، پھر فیس کی ادائیگی کے لیے کسٹمر سروس کا انتظار کریں۔ ادائیگی کے بعد مرکزی عمارت میں سمولیشن سیشن ہوگا، پھر تھیوری ٹیسٹ۔ پاس ہونے کے بعد آپ کسٹمر سروس یا ویب سائٹ کے ذریعے عملی تربیت کی تاریخیں طے کر سکتے ہیں، اور کوڈ اسکین کر کے عملی میدان کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 386,
        "textHash": "76c64e1a66c94d9ae4da70d685dd9b52a15fcb52c4ab51d7f9c45c5d045031d2",
        "status": "pending"
      },
      "fr": {
        "displayText": "Heures de formation : 15 heures",
        "spokenText": "Si votre niveau est intermédiaire, votre formation durera 15 heures sur 5 jours. Après la détermination du niveau, rendez-vous à la réception pour prendre un ticket, puis attendez le service client pour finaliser le paiement. Après le paiement, vous ferez la séance de simulation au bâtiment principal, puis l'examen théorique. Une fois réussi, vous pourrez planifier vos dates de formation pratique via le service client ou le site web, et rejoindre le terrain pratique en scannant le code.",
        "characterCount": 491,
        "textHash": "a03e51d0ffab24537f55676cebe1769cf0bba5c5447286091c14d87335c18d01",
        "status": "pending"
      },
      "it": {
        "displayText": "Ore di formazione: 15 ore",
        "spokenText": "Se il tuo livello è intermedio, la tua formazione durerà 15 ore in 5 giorni. Dopo la valutazione del livello, vai alla reception per prendere un numero, poi attendi il servizio clienti per completare il pagamento. Dopo il pagamento, farai la sessione di simulazione presso l'edificio principale, poi l'esame teorico. Una volta superato, potrai pianificare le date della formazione pratica tramite il servizio clienti o il sito web, e raggiungere il campo pratico scansionando il codice.",
        "characterCount": 486,
        "textHash": "1ea24a467a030a1ccbca87381cc43e574df95635160c073827b8d5f089ee3dbc",
        "status": "pending"
      },
      "bn": {
        "displayText": "প্রশিক্ষণ ঘণ্টা: ১৫ ঘণ্টা",
        "spokenText": "আপনার স্তর যদি মধ্যম হয়, তাহলে আপনার প্রশিক্ষণ হবে ১৫ ঘণ্টা এবং ৫ দিন। স্তর নির্ধারণের পর রিসেপশনে গিয়ে নম্বর নিন, তারপর ফি প্রদানের জন্য কাস্টমার সার্ভিসের অপেক্ষা করুন। প্রদানের পর প্রধান ভবনে সিমুলেশন সেশন হবে, তারপর তত্ত্বীয় পরীক্ষা। পাস করার পর আপনি কাস্টমার সার্ভিস বা ওয়েবসাইটের মাধ্যমে ব্যবহারিক প্রশিক্ষণের তারিখ নির্ধারণ করতে পারবেন, এবং কোড স্ক্যান করে ব্যবহারিক মাঠে পৌঁছাতে পারবেন।",
        "characterCount": 398,
        "textHash": "09790fa93d3696b310ab85797483758666efc42ae9672a865ef77bcf5934e6ac",
        "status": "pending"
      },
      "tr": {
        "displayText": "Eğitim saatleri: 15 saat",
        "spokenText": "Seviyeniz orta ise, eğitiminiz 5 gün boyunca 15 saat sürecektir. Seviye belirlemeden sonra resepsiyona gidip numara alın, ardından ödemeyi tamamlamak için müşteri hizmetlerini bekleyin. Ödemeden sonra ana binada simülasyon seansına, ardından teori sınavına gireceksiniz. Geçtikten sonra müşteri hizmetleri veya web sitesi üzerinden uygulamalı eğitim tarihlerinizi belirleyebilir, kodu tarayarak uygulama sahasına ulaşabilirsiniz.",
        "characterCount": 429,
        "textHash": "3241bf69a1a07892b6a720f2c73bb7850d1e58b46ee26c3be8a29d66f6618db6",
        "status": "pending"
      }
    }
  },
  "TTS_LEVEL_ADVANCED": {
    "category": "level",
    "languages": {
      "ar": {
        "displayText": "عدد ساعات التدريب: 6 ساعات",
        "spokenText": "إذا كان تقييمك متقدم، بيكون تدريبك 6 ساعات في يوم واحد. بعد تحديد المستوى، تتوجه للاستقبال وتاخذ رقم، وبعدها تنتظر خدمة العملاء عشان تكمل دفع الرسوم. بعد الدفع، ما تحتاج حصة محاكاة، تتوجه مباشرة للاختبار النظري في المبنى الرئيسي. وإذا اجتزت الاختبار، تقدر تحدد مواعيد التدريب العملي عن طريق خدمة العملاء أو من الموقع، وتوصل لموقع الميدان العملي عن طريق مسح الرمز.",
        "characterCount": 363,
        "textHash": "ac6b0e689c05df662304b79e95c6ab742929f303ced826bbda1caae29052d896",
        "status": "pending"
      },
      "en": {
        "displayText": "Training hours: 6 hours",
        "spokenText": "If your level is advanced, your training will be 6 hours in a single day. After the level assessment, go to reception and take a number, then wait for customer service to complete the fee payment. After payment, no simulation session is needed — go directly to the theory test at the main building. Once you pass, you can schedule your practical training dates through customer service or the website, and reach the practical field location by scanning the code.",
        "characterCount": 462,
        "textHash": "cce87969ae944ef97e501758af1b4e3121b423b9383c88ac66813f12028e6ce9",
        "status": "pending"
      },
      "ur": {
        "displayText": "تربیت کے گھنٹے: 6 گھنٹے",
        "spokenText": "اگر آپ کی سطح اعلیٰ ہے تو آپ کی تربیت صرف 6 گھنٹے اور ایک دن پر مشتمل ہوگی۔ سطح کے تعین کے بعد استقبالیہ پر جا کر نمبر لیں، پھر فیس کی ادائیگی کے لیے کسٹمر سروس کا انتظار کریں۔ ادائیگی کے بعد سمولیشن سیشن کی ضرورت نہیں، براہ راست مرکزی عمارت میں تھیوری ٹیسٹ دیں۔ پاس ہونے کے بعد آپ کسٹمر سروس یا ویب سائٹ کے ذریعے عملی تربیت کی تاریخیں طے کر سکتے ہیں، اور کوڈ اسکین کر کے عملی میدان کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 408,
        "textHash": "6ed6dc77eb69963410933a10a128b8a082ed788ce36ccdba7beabf3b0f4a1464",
        "status": "pending"
      },
      "hi": {
        "displayText": "प्रशिक्षण घंटे: 6 घंटे",
        "spokenText": "अगर आपका स्तर उन्नत है, तो आपका प्रशिक्षण केवल 6 घंटे और एक दिन का होगा। स्तर निर्धारण के बाद रिसेप्शन जाकर नंबर लें, फिर शुल्क भुगतान के लिए ग्राहक सेवा का इंतज़ार करें। भुगतान के बाद सिमुलेशन सत्र की ज़रूरत नहीं, सीधे मुख्य भवन में थ्योरी परीक्षा दें। पास होने के बाद आप ग्राहक सेवा या वेबसाइट के माध्यम से व्यावहारिक प्रशिक्षण की तारीखें तय कर सकते हैं, और कोड स्कैन करके व्यावहारिक मैदान तक पहुँच सकते हैं।",
        "characterCount": 410,
        "textHash": "069cf570d022ab10095066a834402b53b44537820c112753dda2ea542f2438d8",
        "status": "pending"
      },
      "pa": {
        "displayText": "تربیت کے گھنٹے: 6 گھنٹے",
        "spokenText": "اگر آپ کی سطح اعلیٰ ہے تو آپ کی تربیت صرف 6 گھنٹے اور ایک دن پر مشتمل ہوگی۔ سطح کے تعین کے بعد استقبالیہ پر جا کر نمبر لیں، پھر فیس کی ادائیگی کے لیے کسٹمر سروس کا انتظار کریں۔ ادائیگی کے بعد سمولیشن سیشن کی ضرورت نہیں، براہ راست مرکزی عمارت میں تھیوری ٹیسٹ دیں۔ پاس ہونے کے بعد آپ کسٹمر سروس یا ویب سائٹ کے ذریعے عملی تربیت کی تاریخیں طے کر سکتے ہیں، اور کوڈ اسکین کر کے عملی میدان کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 408,
        "textHash": "6ed6dc77eb69963410933a10a128b8a082ed788ce36ccdba7beabf3b0f4a1464",
        "status": "pending"
      },
      "fr": {
        "displayText": "Heures de formation : 6 heures",
        "spokenText": "Si votre niveau est avancé, votre formation ne durera que 6 heures en une seule journée. Après la détermination du niveau, rendez-vous à la réception pour prendre un ticket, puis attendez le service client pour finaliser le paiement. Après le paiement, aucune séance de simulation n'est nécessaire — passez directement à l'examen théorique au bâtiment principal. Une fois réussi, vous pourrez planifier vos dates de formation pratique via le service client ou le site web, et rejoindre le terrain pratique en scannant le code.",
        "characterCount": 526,
        "textHash": "cd3a074425401409bbef2954ba6d4f05fd5ad8978e5b86e0373ca6e96375e4bc",
        "status": "pending"
      },
      "it": {
        "displayText": "Ore di formazione: 6 ore",
        "spokenText": "Se il tuo livello è avanzato, la tua formazione durerà solo 6 ore in un giorno. Dopo la valutazione del livello, vai alla reception per prendere un numero, poi attendi il servizio clienti per completare il pagamento. Dopo il pagamento, non è necessaria alcuna sessione di simulazione — vai direttamente all'esame teorico presso l'edificio principale. Una volta superato, potrai pianificare le date della formazione pratica tramite il servizio clienti o il sito web, e raggiungere il campo pratico scansionando il codice.",
        "characterCount": 520,
        "textHash": "ff3bb97366dd7274c5ef9345f1a25f99d1fff95a50a2944a9456375f864f0020",
        "status": "pending"
      },
      "bn": {
        "displayText": "প্রশিক্ষণ ঘণ্টা: ৬ ঘণ্টা",
        "spokenText": "আপনার স্তর যদি উন্নত হয়, তাহলে আপনার প্রশিক্ষণ হবে মাত্র ৬ ঘণ্টা এবং এক দিন। স্তর নির্ধারণের পর রিসেপশনে গিয়ে নম্বর নিন, তারপর ফি প্রদানের জন্য কাস্টমার সার্ভিসের অপেক্ষা করুন। প্রদানের পর সিমুলেশন সেশনের প্রয়োজন নেই, সরাসরি প্রধান ভবনে তত্ত্বীয় পরীক্ষা দিন। পাস করার পর আপনি কাস্টমার সার্ভিস বা ওয়েবসাইটের মাধ্যমে ব্যবহারিক প্রশিক্ষণের তারিখ নির্ধারণ করতে পারবেন, এবং কোড স্ক্যান করে ব্যবহারিক মাঠে পৌঁছাতে পারবেন।",
        "characterCount": 420,
        "textHash": "2d26ff8cc79be17592823ccbbb549f72caa449a8f4a0ae9145cd280fb13f9adb",
        "status": "pending"
      },
      "tr": {
        "displayText": "Eğitim saatleri: 6 saat",
        "spokenText": "Seviyeniz ileri ise, eğitiminiz sadece tek günde 6 saat sürecektir. Seviye belirlemeden sonra resepsiyona gidip numara alın, ardından ödemeyi tamamlamak için müşteri hizmetlerini bekleyin. Ödemeden sonra simülasyon seansına gerek yoktur — doğrudan ana binada teori sınavına girin. Geçtikten sonra müşteri hizmetleri veya web sitesi üzerinden uygulamalı eğitim tarihlerinizi belirleyebilir, kodu tarayarak uygulama sahasına ulaşabilirsiniz.",
        "characterCount": 439,
        "textHash": "c0964901c4fb7a16931cb6d31e0c33d01761c16ddb5e73faa3d0045cc4f39ed0",
        "status": "pending"
      }
    }
  },
  "TTS_LEVEL_UNKNOWN": {
    "category": "level",
    "languages": {
      "ar": {
        "displayText": "تأكيد عدد الساعات",
        "spokenText": "إذا ما تعرف عدد الساعات المحددة لك، ما عليك. خذ تذكرة انتظار من الاستقبال وتوجّه لخدمة العملاء، والموظف بيساعدك ويتأكد لك من البرنامج المناسب.",
        "characterCount": 142,
        "textHash": "dbabb3702e874851a32f3c59b7024b351e6f033a9878492c33fcc843fa679f0d",
        "status": "pending"
      },
      "en": {
        "displayText": "Confirm your hours",
        "spokenText": "If you're not sure about your assigned hours, no problem. Take a queue ticket from reception and go to customer service — the staff will help confirm the right program for you.",
        "characterCount": 176,
        "textHash": "39d63be567aca8f0078e415f4b8a8e7404eee613cf93ff86ca1822c327e80af4",
        "status": "pending"
      },
      "ur": {
        "displayText": "گھنٹوں کی تصدیق",
        "spokenText": "اگر آپ کو اپنے مقرر کردہ گھنٹوں کا علم نہیں تو کوئی مسئلہ نہیں۔ استقبالیہ سے نمبر لیں اور کسٹمر سروس پر جائیں، عملہ آپ کے لیے مناسب پروگرام کی تصدیق کرے گا۔",
        "characterCount": 156,
        "textHash": "e3e0c36e34b6656e67da4cacdd9666963a40220611bec8bea88f8b0b5c3297dc",
        "status": "pending"
      },
      "hi": {
        "displayText": "घंटों की पुष्टि",
        "spokenText": "अगर आपको अपने निर्धारित घंटों की जानकारी नहीं है, तो कोई बात नहीं। रिसेप्शन से टोकन लें और ग्राहक सेवा पर जाएँ, कर्मचारी आपके लिए उपयुक्त कार्यक्रम की पुष्टि करेंगे।",
        "characterCount": 165,
        "textHash": "15ca6679dcf9d8188bc09e29b6325d2357b4a44c11ad53885ce1d470b8550dcf",
        "status": "pending"
      },
      "pa": {
        "displayText": "گھنٹوں کی تصدیق",
        "spokenText": "اگر آپ کو اپنے مقرر کردہ گھنٹوں کا علم نہیں تو کوئی مسئلہ نہیں۔ استقبالیہ سے نمبر لیں اور کسٹمر سروس پر جائیں، عملہ آپ کے لیے مناسب پروگرام کی تصدیق کرے گا۔",
        "characterCount": 156,
        "textHash": "e3e0c36e34b6656e67da4cacdd9666963a40220611bec8bea88f8b0b5c3297dc",
        "status": "pending"
      },
      "fr": {
        "displayText": "Vérifier vos heures",
        "spokenText": "Si vous ne connaissez pas votre nombre d'heures attribué, ce n'est pas un problème. Prenez un ticket à la réception et rendez-vous au service client — le personnel confirmera le programme qui vous convient.",
        "characterCount": 206,
        "textHash": "a7d492d3746b5af42ab83832259deaba3c4745f602beacfb0eb120a132b43025",
        "status": "pending"
      },
      "it": {
        "displayText": "Verifica le tue ore",
        "spokenText": "Se non conosci il numero di ore assegnate, non preoccuparti. Prendi un numero alla reception e vai al servizio clienti — il personale confermerà il programma più adatto a te.",
        "characterCount": 174,
        "textHash": "cc330b738245e1c0a3d5700592aa1d39866c84d638e811fa7106e2f7e67552dc",
        "status": "pending"
      },
      "bn": {
        "displayText": "ঘণ্টা নিশ্চিতকরণ",
        "spokenText": "আপনার নির্ধারিত ঘণ্টা সম্পর্কে না জানলে, কোনো সমস্যা নেই। রিসেপশন থেকে টোকেন নিন এবং কাস্টমার সার্ভিসে যান, কর্মী আপনার জন্য উপযুক্ত প্রোগ্রাম নিশ্চিত করবেন।",
        "characterCount": 157,
        "textHash": "d20274936976ade3e5e6a857529eab834f58ac662181d8f16b2d312961a2afe7",
        "status": "pending"
      },
      "tr": {
        "displayText": "Saatlerinizi doğrulayın",
        "spokenText": "Atanan saat sayınızı bilmiyorsanız sorun değil. Resepsiyondan bir sıra numarası alın ve müşteri hizmetlerine gidin — personel sizin için uygun programı doğrulayacaktır.",
        "characterCount": 168,
        "textHash": "8c0713b1e5d20d9a5d89cd14ec73996c5b84c6312993ed4a3ee2a725ad1d7a67",
        "status": "pending"
      }
    }
  },
  "TTS_PRACTICAL_EXAM_BOOKING": {
    "category": "practical_exam",
    "languages": {
      "ar": {
        "displayText": "احجز موعد الاختبار العملي",
        "spokenText": "الخطوة الجاية هي حجز موعد للاختبار العملي. الاختبار يكون في مبنى المرور، وبعد ما تحجز موعدك، تقدر توصل للموقع عن طريق مسح الرمز الظاهر أمامك.",
        "characterCount": 141,
        "textHash": "0664b9c7cd10046d90c023a8743dfd6921307e30bc92e26079587f7a644a28f7",
        "status": "pending"
      },
      "en": {
        "displayText": "Book your practical exam",
        "spokenText": "The next step is to book an appointment for your practical exam. The exam takes place at the Traffic Building, and once you've booked your appointment, you can reach the location by scanning the code shown in front of you.",
        "characterCount": 222,
        "textHash": "564785a760af2a095a072e78d031058e64fe9db09b34187afdc58e7e65ee04a7",
        "status": "pending"
      },
      "ur": {
        "displayText": "عملی امتحان کی بکنگ",
        "spokenText": "اگلا مرحلہ یہ ہے کہ آپ اپنے عملی امتحان کے لیے وقت بک کریں۔ امتحان ٹریفک عمارت میں ہوگا، اور وقت بک کرنے کے بعد آپ سامنے دکھائے گئے کوڈ کو اسکین کر کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 173,
        "textHash": "76bbe1299e39fb7c7016164199983100b727056f1e3bbb715fa61d9f3205ce45",
        "status": "pending"
      },
      "hi": {
        "displayText": "व्यावहारिक परीक्षा बुक करें",
        "spokenText": "अगला कदम है अपनी व्यावहारिक परीक्षा के लिए अपॉइंटमेंट बुक करना। परीक्षा यातायात भवन में होगी, और अपॉइंटमेंट बुक करने के बाद आप सामने दिखाए गए कोड को स्कैन करके स्थान तक पहुँच सकते हैं।",
        "characterCount": 184,
        "textHash": "bb69fa143a9c7c09ca8eb7460d390bf2466f2d62aec5c2eb8a5ff2ea36b4c002",
        "status": "pending"
      },
      "pa": {
        "displayText": "عملی امتحان کی بکنگ",
        "spokenText": "اگلا مرحلہ یہ ہے کہ آپ اپنے عملی امتحان کے لیے وقت بک کریں۔ امتحان ٹریفک عمارت میں ہوگا، اور وقت بک کرنے کے بعد آپ سامنے دکھائے گئے کوڈ کو اسکین کر کے مقام تک پہنچ سکتے ہیں۔",
        "characterCount": 173,
        "textHash": "76bbe1299e39fb7c7016164199983100b727056f1e3bbb715fa61d9f3205ce45",
        "status": "pending"
      },
      "fr": {
        "displayText": "Réserver votre examen pratique",
        "spokenText": "La prochaine étape consiste à réserver un rendez-vous pour votre examen pratique. L'examen se déroule au bâtiment de la circulation, et une fois votre rendez-vous réservé, vous pouvez accéder au lieu en scannant le code affiché devant vous.",
        "characterCount": 240,
        "textHash": "1d206a2a4074d5f4a3300b84a266b4b28f7a32da79f44776eedcbf520633da5b",
        "status": "pending"
      },
      "it": {
        "displayText": "Prenota il tuo esame pratico",
        "spokenText": "Il prossimo passo è prenotare un appuntamento per il tuo esame pratico. L'esame si svolge presso l'edificio del traffico, e una volta prenotato l'appuntamento potrai raggiungere la posizione scansionando il codice mostrato davanti a te.",
        "characterCount": 236,
        "textHash": "756d2a933d7524be4067d4a1d2471fc047561fa02676cc5980b13e68003c709b",
        "status": "pending"
      },
      "bn": {
        "displayText": "ব্যবহারিক পরীক্ষা বুক করুন",
        "spokenText": "পরবর্তী ধাপ হলো আপনার ব্যবহারিক পরীক্ষার জন্য অ্যাপয়েন্টমেন্ট বুক করা। পরীক্ষা ট্রাফিক ভবনে হবে, এবং অ্যাপয়েন্টমেন্ট বুক করার পর আপনি সামনে দেখানো কোড স্ক্যান করে স্থানে পৌঁছাতে পারবেন।",
        "characterCount": 187,
        "textHash": "17d4a80b8b508b331ecbb6fcc92ec7bf578bf444065efcef87adf99d128867a5",
        "status": "pending"
      },
      "tr": {
        "displayText": "Uygulama sınavınızı ayırtın",
        "spokenText": "Bir sonraki adım, uygulamalı sınavınız için randevu almaktır. Sınav Trafik Binası'nda yapılır ve randevunuzu aldıktan sonra önünüzde gösterilen kodu tarayarak konuma ulaşabilirsiniz.",
        "characterCount": 182,
        "textHash": "afb0a837484d10fe609da961ac8ebb09947023ffc2bcd62fb3f7d5c35247b376",
        "status": "pending"
      }
    }
  },
  "TTS_NAV_PRACTICAL_BUILDING": {
    "category": "navigation",
    "languages": {
      "ar": {
        "displayText": "اتبع المسار الموضح للوصول إلى مبنى التدريب العملي.",
        "spokenText": "عشان توصل لمبنى التدريب العملي، تابع المسار الموضّح قدامك لين توصل.",
        "characterCount": 67,
        "textHash": "fb7f0ada57d4c1aedacf9afc010e5ba86d6dc7068409348376f53150aa4c5a61",
        "status": "pending"
      },
      "en": {
        "displayText": "Follow the route shown to reach the practical training building.",
        "spokenText": "To reach the practical training building, follow the route shown ahead until you arrive.",
        "characterCount": 88,
        "textHash": "d42d028de85907183ee8e83d221276f8e102d93646d367f4e3ef40f533fc4e1c",
        "status": "pending"
      },
      "ur": {
        "displayText": "عملی تربیت کی عمارت تک پہنچنے کے لیے دکھایا گیا راستہ اختیار کریں۔",
        "spokenText": "عملی تربیت کی عمارت تک پہنچنے کے لیے، سامنے دکھایا گیا راستہ اختیار کریں یہاں تک کہ آپ پہنچ جائیں۔",
        "characterCount": 98,
        "textHash": "6969b9e0c0a67f77cfaa2c92a19d293c2cf9b42622e233e5efb87144e7f43f37",
        "status": "pending"
      },
      "hi": {
        "displayText": "व्यावहारिक प्रशिक्षण भवन तक पहुँचने के लिए दिखाया गया मार्ग अपनाएँ।",
        "spokenText": "व्यावहारिक प्रशिक्षण भवन तक पहुँचने के लिए, सामने दिखाए गए मार्ग का अनुसरण करें जब तक आप पहुँच न जाएँ।",
        "characterCount": 102,
        "textHash": "eeff440d38e037c31a962b72f0c09dc433403a15c2689cd7b6843b3367715408",
        "status": "pending"
      },
      "pa": {
        "displayText": "عملی تربیت کی عمارت تک پہنچنے کے لیے دکھایا گیا راستہ اختیار کریں۔",
        "spokenText": "عملی تربیت کی عمارت تک پہنچنے کے لیے، سامنے دکھایا گیا راستہ اختیار کریں یہاں تک کہ آپ پہنچ جائیں۔",
        "characterCount": 98,
        "textHash": "6969b9e0c0a67f77cfaa2c92a19d293c2cf9b42622e233e5efb87144e7f43f37",
        "status": "pending"
      },
      "fr": {
        "displayText": "Suivez l'itinéraire indiqué pour atteindre le bâtiment de formation pratique.",
        "spokenText": "Pour atteindre le bâtiment de formation pratique, suivez l'itinéraire indiqué devant vous jusqu'à votre arrivée.",
        "characterCount": 112,
        "textHash": "92d3a470a6f1836f07f46e559a589121799df0f883baf80e1a0211f297f78d9e",
        "status": "pending"
      },
      "it": {
        "displayText": "Segui il percorso indicato per raggiungere l'edificio di formazione pratica.",
        "spokenText": "Per raggiungere l'edificio di formazione pratica, segui il percorso mostrato davanti a te fino ad arrivare.",
        "characterCount": 107,
        "textHash": "886ff586d7e873a47151394b0c51b2c6782ac20f0c11d7f490bde0a95e712520",
        "status": "pending"
      },
      "bn": {
        "displayText": "ব্যবহারিক প্রশিক্ষণ ভবনে পৌঁছাতে প্রদর্শিত পথ অনুসরণ করুন।",
        "spokenText": "ব্যবহারিক প্রশিক্ষণ ভবনে পৌঁছাতে, সামনে দেখানো পথ অনুসরণ করুন যতক্ষণ না আপনি পৌঁছান।",
        "characterCount": 84,
        "textHash": "2abf2a5b910e6f3270b6008f4be0b3d4e186840497be6f25f6d5eff303096fb5",
        "status": "pending"
      },
      "tr": {
        "displayText": "Uygulamalı eğitim binasına ulaşmak için gösterilen rotayı izleyin.",
        "spokenText": "Uygulamalı eğitim binasına ulaşmak için önünüzde gösterilen rotayı varana kadar takip edin.",
        "characterCount": 91,
        "textHash": "469aa7f8c4b81f8b051fc68705d99a2e7684efcde38b34eaede2c0434791b991",
        "status": "pending"
      }
    }
  },
  "TTS_NAV_MAIN_BUILDING": {
    "category": "navigation",
    "languages": {
      "ar": {
        "displayText": "اتبع المسار الموضح للوصول إلى المبنى الرئيسي النظري.",
        "spokenText": "عشان توصل للمبنى الرئيسي، تابع المسار الموضّح قدامك لين توصل.",
        "characterCount": 61,
        "textHash": "aa2abfb1b2f200640bedde03ddb81177bf47fcffbb570a695959f67a013d1ba5",
        "status": "pending"
      },
      "en": {
        "displayText": "Follow the route shown to reach the main theory building.",
        "spokenText": "To reach the main building, follow the route shown ahead until you arrive.",
        "characterCount": 74,
        "textHash": "23c84fd7c9adc196cbf7a5fc4e951f8739df4734b7cd9f5a1e6dc84b0032e87a",
        "status": "pending"
      },
      "ur": {
        "displayText": "مرکزی تھیوری عمارت تک پہنچنے کے لیے دکھایا گیا راستہ اختیار کریں۔",
        "spokenText": "مرکزی عمارت تک پہنچنے کے لیے، سامنے دکھایا گیا راستہ اختیار کریں یہاں تک کہ آپ پہنچ جائیں۔",
        "characterCount": 90,
        "textHash": "0a88276f601d890eb9c4a5522ff6dc79790bfe0b0aca61584de10198cbd5d12f",
        "status": "pending"
      },
      "hi": {
        "displayText": "मुख्य थ्योरी भवन तक पहुँचने के लिए दिखाया गया मार्ग अपनाएँ।",
        "spokenText": "मुख्य भवन तक पहुँचने के लिए, सामने दिखाए गए मार्ग का अनुसरण करें जब तक आप पहुँच न जाएँ।",
        "characterCount": 87,
        "textHash": "a6b24216c65ac6847f9ad5d6f4671515d3c8277bf95ccdb202982a64336e1f7a",
        "status": "pending"
      },
      "pa": {
        "displayText": "مرکزی تھیوری عمارت تک پہنچنے کے لیے دکھایا گیا راستہ اختیار کریں۔",
        "spokenText": "مرکزی عمارت تک پہنچنے کے لیے، سامنے دکھایا گیا راستہ اختیار کریں یہاں تک کہ آپ پہنچ جائیں۔",
        "characterCount": 90,
        "textHash": "0a88276f601d890eb9c4a5522ff6dc79790bfe0b0aca61584de10198cbd5d12f",
        "status": "pending"
      },
      "fr": {
        "displayText": "Suivez l'itinéraire indiqué pour atteindre le bâtiment principal.",
        "spokenText": "Pour atteindre le bâtiment principal, suivez l'itinéraire indiqué devant vous jusqu'à votre arrivée.",
        "characterCount": 100,
        "textHash": "a7952e33fa8637d7c127cbc9f5d87818c0de91373324717a2ae681f1dddf62a7",
        "status": "pending"
      },
      "it": {
        "displayText": "Segui il percorso indicato per raggiungere l'edificio principale.",
        "spokenText": "Per raggiungere l'edificio principale, segui il percorso mostrato davanti a te fino ad arrivare.",
        "characterCount": 96,
        "textHash": "db187c85c5419f7f78dee4fd5b2e4e14f1f82e3024f81950e5609c0985c1fc3a",
        "status": "pending"
      },
      "bn": {
        "displayText": "প্রধান ভবনে পৌঁছাতে প্রদর্শিত পথ অনুসরণ করুন।",
        "spokenText": "প্রধান ভবনে পৌঁছাতে, সামনে দেখানো পথ অনুসরণ করুন যতক্ষণ না আপনি পৌঁছান।",
        "characterCount": 71,
        "textHash": "ef8895cdf45324fa8e7d37189ece24f534709fe51f4cf4f6b362630ed162b943",
        "status": "pending"
      },
      "tr": {
        "displayText": "Ana binaya ulaşmak için gösterilen rotayı izleyin.",
        "spokenText": "Ana binaya ulaşmak için önünüzde gösterilen rotayı varana kadar takip edin.",
        "characterCount": 75,
        "textHash": "26b8086f7353e99cdc9887e0f6ba970990dfe4022bb332358bb38305f7d9f8e2",
        "status": "pending"
      }
    }
  },
  "TTS_NAV_TRAFFIC_BUILDING": {
    "category": "navigation",
    "languages": {
      "ar": {
        "displayText": "اتبع المسار الموضح للوصول إلى مبنى المرور.",
        "spokenText": "عشان توصل لمبنى المرور، تابع المسار الموضّح قدامك لين توصل.",
        "characterCount": 59,
        "textHash": "ff8a9383e8db416c4cb5b9df538ed597e0a6af2b531d2d5b08f643ac6edc2f62",
        "status": "pending"
      },
      "en": {
        "displayText": "Follow the route shown to reach the traffic building.",
        "spokenText": "To reach the traffic building, follow the route shown ahead until you arrive.",
        "characterCount": 77,
        "textHash": "1a767772624deea092e3bb86b2d526c50cb999cbe1882bc1f23b84c425ed6b93",
        "status": "pending"
      },
      "ur": {
        "displayText": "ٹریفک عمارت تک پہنچنے کے لیے دکھایا گیا راستہ اختیار کریں۔",
        "spokenText": "ٹریفک عمارت تک پہنچنے کے لیے، سامنے دکھایا گیا راستہ اختیار کریں یہاں تک کہ آپ پہنچ جائیں۔",
        "characterCount": 90,
        "textHash": "2c5637e24b6a73d383e9ad250dd6922ad55178a5a08e5b975fd0d77f21b8ae81",
        "status": "pending"
      },
      "hi": {
        "displayText": "यातायात भवन तक पहुँचने के लिए दिखाया गया मार्ग अपनाएँ।",
        "spokenText": "यातायात भवन तक पहुँचने के लिए, सामने दिखाए गए मार्ग का अनुसरण करें जब तक आप पहुँच न जाएँ।",
        "characterCount": 89,
        "textHash": "fcd28408ee9e74708e674093e2fb35b0d5819ef41876957e67b6f9d62ccbc098",
        "status": "pending"
      },
      "pa": {
        "displayText": "ٹریفک عمارت تک پہنچنے کے لیے دکھایا گیا راستہ اختیار کریں۔",
        "spokenText": "ٹریفک عمارت تک پہنچنے کے لیے، سامنے دکھایا گیا راستہ اختیار کریں یہاں تک کہ آپ پہنچ جائیں۔",
        "characterCount": 90,
        "textHash": "2c5637e24b6a73d383e9ad250dd6922ad55178a5a08e5b975fd0d77f21b8ae81",
        "status": "pending"
      },
      "fr": {
        "displayText": "Suivez l'itinéraire indiqué pour atteindre le bâtiment de la circulation.",
        "spokenText": "Pour atteindre le bâtiment de la circulation, suivez l'itinéraire indiqué devant vous jusqu'à votre arrivée.",
        "characterCount": 108,
        "textHash": "87b5f67b1a0be6f241d0f1da0e93ba7b572309df6cd941adb68c6ee054832e42",
        "status": "pending"
      },
      "it": {
        "displayText": "Segui il percorso indicato per raggiungere l'edificio del traffico.",
        "spokenText": "Per raggiungere l'edificio del traffico, segui il percorso mostrato davanti a te fino ad arrivare.",
        "characterCount": 98,
        "textHash": "5335c7d81325d8231123a1af9877586d4722c5385b5a0e66ec92b56f23a1e45b",
        "status": "pending"
      },
      "bn": {
        "displayText": "ট্রাফিক ভবনে পৌঁছাতে প্রদর্শিত পথ অনুসরণ করুন।",
        "spokenText": "ট্রাফিক ভবনে পৌঁছাতে, সামনে দেখানো পথ অনুসরণ করুন যতক্ষণ না আপনি পৌঁছান।",
        "characterCount": 72,
        "textHash": "df6055cba7c6c1a4093893f0f7a13610d92970e078f7fda7928dd6e35de1a6bf",
        "status": "pending"
      },
      "tr": {
        "displayText": "Trafik binasına ulaşmak için gösterilen rotayı izleyin.",
        "spokenText": "Trafik binasına ulaşmak için önünüzde gösterilen rotayı varana kadar takip edin.",
        "characterCount": 80,
        "textHash": "806c6555aebb3e5a8ba44b32a854195bb4b3230965401e2550b5613c2318cd69",
        "status": "pending"
      }
    }
  },
  "TTS_PAYMENT_INSTRUCTIONS": {
    "category": "payment",
    "languages": {
      "ar": {
        "displayText": "طريقة دفع الرسوم",
        "spokenText": "عشان تدفع الرسوم، توجّه للاستقبال وخذ رقم انتظار، وبعدها انتظر لين يُنادى على رقمك، ثم توجّه لخدمة العملاء وكمّل الدفع واستلم برنامجك التدريبي.",
        "characterCount": 143,
        "textHash": "238a67b49ead6789e179e9d702c881f6fc0296c917edf320d0eb9d681984625e",
        "status": "pending"
      },
      "en": {
        "displayText": "How to pay the fees",
        "spokenText": "To pay your fees, go to reception and take a queue ticket, wait until your number is called, then go to customer service to complete payment and receive your training program.",
        "characterCount": 175,
        "textHash": "6d31317795b82a0acdee0c309c2fbcbd0b03ac311df1ea153cc0b7def78c1a2c",
        "status": "pending"
      },
      "ur": {
        "displayText": "فیس ادا کرنے کا طریقہ",
        "spokenText": "فیس ادا کرنے کے لیے استقبالیہ پر جائیں اور نمبر لیں، پھر اپنے نمبر کے اعلان کا انتظار کریں، اس کے بعد کسٹمر سروس پر جا کر ادائیگی مکمل کریں اور اپنا تربیتی پروگرام حاصل کریں۔",
        "characterCount": 174,
        "textHash": "6e9e7113c34b909be5b3dae31b9ff4b4a12036712d6fa42416886f9dee9e824d",
        "status": "pending"
      },
      "hi": {
        "displayText": "शुल्क भुगतान का तरीका",
        "spokenText": "शुल्क भुगतान के लिए रिसेप्शन पर जाएँ और टोकन लें, फिर अपने नंबर की घोषणा का इंतज़ार करें, उसके बाद ग्राहक सेवा पर जाकर भुगतान पूरा करें और अपना प्रशिक्षण कार्यक्रम प्राप्त करें।",
        "characterCount": 177,
        "textHash": "408432b688267996dc2b0f9b0e500cb74b55343ac269b73af6e6c10d741586b8",
        "status": "pending"
      },
      "pa": {
        "displayText": "فیس ادا کرنے کا طریقہ",
        "spokenText": "فیس ادا کرنے کے لیے استقبالیہ پر جائیں اور نمبر لیں، پھر اپنے نمبر کے اعلان کا انتظار کریں، اس کے بعد کسٹمر سروس پر جا کر ادائیگی مکمل کریں اور اپنا تربیتی پروگرام حاصل کریں۔",
        "characterCount": 174,
        "textHash": "6e9e7113c34b909be5b3dae31b9ff4b4a12036712d6fa42416886f9dee9e824d",
        "status": "pending"
      },
      "fr": {
        "displayText": "Comment payer les frais",
        "spokenText": "Pour payer vos frais, rendez-vous à la réception et prenez un ticket, attendez que votre numéro soit appelé, puis rendez-vous au service client pour finaliser le paiement et recevoir votre programme de formation.",
        "characterCount": 212,
        "textHash": "2924290173a5508da5257f338a83b6a2d2f84f47759d82208971e5dccf5fb509",
        "status": "pending"
      },
      "it": {
        "displayText": "Come pagare le tasse",
        "spokenText": "Per pagare le tasse, recati alla reception e prendi un numero, attendi che venga chiamato, poi vai al servizio clienti per completare il pagamento e ricevere il tuo programma di formazione.",
        "characterCount": 189,
        "textHash": "7833f2be6d23252507a2d22458dba75d1a354cd275240e55ebd3c54054b6f0ab",
        "status": "pending"
      },
      "bn": {
        "displayText": "ফি প্রদানের উপায়",
        "spokenText": "ফি প্রদানের জন্য রিসেপশনে যান এবং একটি টোকেন নিন, তারপর আপনার নম্বর ডাকার অপেক্ষা করুন, এরপর কাস্টমার সার্ভিসে গিয়ে পেমেন্ট সম্পন্ন করুন এবং আপনার প্রশিক্ষণ প্রোগ্রাম গ্রহণ করুন।",
        "characterCount": 179,
        "textHash": "067c206383f9a27d0ca09e6994a95a7b28476ddebefffd1a0342a861759bc989",
        "status": "pending"
      },
      "tr": {
        "displayText": "Ücret nasıl ödenir",
        "spokenText": "Ücretinizi ödemek için resepsiyona gidin ve bir sıra numarası alın, numaranız çağrılana kadar bekleyin, ardından müşteri hizmetlerine giderek ödemeyi tamamlayın ve eğitim programınızı alın.",
        "characterCount": 189,
        "textHash": "8b133fcc40cf6c16a1acd3312f9c5504f6e724564fea6997fc4ee058bf247c88",
        "status": "pending"
      }
    }
  },
  "TTS_AFTER_ASSESSMENT": {
    "category": "after_step",
    "languages": {
      "ar": {
        "displayText": "ماذا أفعل بعد التقييم؟",
        "spokenText": "بعد ما تخلص التقييم، توجّه للمبنى الرئيسي، ومن هناك خذ رقم من الاستقبال، وبعدها توجّه لخدمة العملاء عشان تكمل إجراءاتك وتستلم برنامجك التدريبي.",
        "characterCount": 143,
        "textHash": "72e5f75924a2e2fb7c8039c0abd4b3d600345c4b2d15d3981e1b1ee60e3e776c",
        "status": "pending"
      },
      "en": {
        "displayText": "What to do after the evaluation?",
        "spokenText": "After the evaluation, go to the main building, take a ticket at reception, then go to customer service to complete your procedures and receive your training program.",
        "characterCount": 165,
        "textHash": "ba55a1f37ac7c3f42cae01638bdc1c34915460690d89cdd3e8a42a3358006088",
        "status": "pending"
      },
      "ur": {
        "displayText": "تشخیص کے بعد کیا کریں؟",
        "spokenText": "تشخیص کے بعد مرکزی عمارت جائیں، وہاں پہنچ کر استقبالیہ سے نمبر لیں، پھر کسٹمر سروس پر جا کر اپنے کام مکمل کریں اور اپنی تشخیص کے مطابق تربیتی پروگرام حاصل کریں۔",
        "characterCount": 160,
        "textHash": "2c181482a899d802b3fb2511051dd566f6fa0babefd9712bc9f8d76285877feb",
        "status": "pending"
      },
      "hi": {
        "displayText": "मूल्यांकन के बाद क्या करें?",
        "spokenText": "मूल्यांकन के बाद मुख्य भवन जाएँ, वहाँ पहुँचकर रिसेप्शन से टोकन लें, फिर ग्राहक सेवा पर जाकर अपनी प्रक्रिया पूरी करें और अपने मूल्यांकन के अनुसार प्रशिक्षण कार्यक्रम प्राप्त करें।",
        "characterCount": 178,
        "textHash": "a2609ce04bbe83f46c69f06978d39c01b8f7fb4149915c27a9d2c62e5ee595ff",
        "status": "pending"
      },
      "pa": {
        "displayText": "تشخیص کے بعد کیا کریں؟",
        "spokenText": "تشخیص کے بعد مرکزی عمارت جائیں، وہاں پہنچ کر استقبالیہ سے نمبر لیں، پھر کسٹمر سروس پر جا کر اپنے کام مکمل کریں اور اپنی تشخیص کے مطابق تربیتی پروگرام حاصل کریں۔",
        "characterCount": 160,
        "textHash": "2c181482a899d802b3fb2511051dd566f6fa0babefd9712bc9f8d76285877feb",
        "status": "pending"
      },
      "fr": {
        "displayText": "Que faire après l'évaluation ?",
        "spokenText": "Après l'évaluation, rendez-vous au bâtiment principal, prenez un ticket à la réception, puis allez au service client pour finaliser vos démarches et recevoir votre programme de formation selon votre évaluation.",
        "characterCount": 210,
        "textHash": "e557e132897c26e5bcec6f6f31ded26c2d3e8ef176f99db8e69c2e5a8283de0c",
        "status": "pending"
      },
      "it": {
        "displayText": "Cosa fare dopo la valutazione?",
        "spokenText": "Dopo la valutazione, recati all'edificio principale, prendi un numero alla reception, poi vai al servizio clienti per completare le pratiche e ricevere il tuo programma di formazione in base alla valutazione.",
        "characterCount": 208,
        "textHash": "d7c09930fed6a94f22df080a30991dd56daa7bff16baa21e1c81ade7a824a020",
        "status": "pending"
      },
      "bn": {
        "displayText": "মূল্যায়নের পরে কী করবেন?",
        "spokenText": "মূল্যায়নের পরে প্রধান ভবনে যান, সেখানে পৌঁছে রিসেপশন থেকে একটি টোকেন নিন, তারপর কাস্টমার সার্ভিসে গিয়ে আপনার প্রক্রিয়া সম্পন্ন করুন এবং আপনার মূল্যায়ন অনুযায়ী প্রশিক্ষণ প্রোগ্রাম গ্রহণ করুন।",
        "characterCount": 195,
        "textHash": "9c8de1db944ba803960ac685b319b1472682f43997121f6491abae07023ab6a4",
        "status": "pending"
      },
      "tr": {
        "displayText": "Değerlendirmeden sonra ne yapmalıyım?",
        "spokenText": "Değerlendirmeden sonra ana binaya gidin, resepsiyondan bir numara alın, ardından müşteri hizmetlerine giderek işlemlerinizi tamamlayın ve değerlendirmenize göre eğitim programınızı alın.",
        "characterCount": 186,
        "textHash": "ac850c0bf78f09f7ad2460a0b41ebd98ef5f7b83a35bcb96756eb8ea7f7d1ea9",
        "status": "pending"
      }
    }
  },
  "TTS_AFTER_THEORY_EXAM": {
    "category": "after_step",
    "languages": {
      "ar": {
        "displayText": "ماذا أفعل بعد الاختبار النظري؟",
        "spokenText": "بعد ما تخلص الاختبار النظري وتجتازه، توجّه لمبنى التدريب العملي. تقدر تستخدم رمز الموقع عشان توصل، وبعد ما توصل ادخل وانتظر موعد تدريبك.",
        "characterCount": 136,
        "textHash": "9677d9615b4e9474631f1762e4ffc5e9d54bbba84f59a5d2a235c208193f8567",
        "status": "pending"
      },
      "en": {
        "displayText": "What to do after the theory test?",
        "spokenText": "After finishing and passing the theory test, go to the practical training building. Use the location code to get there, then go inside and wait for your appointment.",
        "characterCount": 165,
        "textHash": "e26538e14276126309482438a14ddb2aa8228b10ee0425d4d669b0754c8f9376",
        "status": "pending"
      },
      "ur": {
        "displayText": "تھیوری ٹیسٹ کے بعد کیا کریں؟",
        "spokenText": "تھیوری ٹیسٹ مکمل کرنے اور پاس کرنے کے بعد، عملی تربیت کی عمارت جائیں۔ مقام تک پہنچنے کے لیے کوڈ استعمال کریں، پھر اندر جا کر اپنے تربیتی وقت کا انتظار کریں۔",
        "characterCount": 156,
        "textHash": "b244869adaa1127de76353069c4deea1f846d38c78fa1635f4813dd9069f76ce",
        "status": "pending"
      },
      "hi": {
        "displayText": "थ्योरी परीक्षा के बाद क्या करें?",
        "spokenText": "थ्योरी परीक्षा पूरी करने और पास करने के बाद, व्यावहारिक प्रशिक्षण भवन जाएँ। स्थान तक पहुँचने के लिए कोड का उपयोग करें, फिर अंदर जाकर अपने प्रशिक्षण समय का इंतज़ार करें।",
        "characterCount": 168,
        "textHash": "daed46cc8422dfd9e4b4d7263ba55af7e843c4e650a05433790c4902e44d5b52",
        "status": "pending"
      },
      "pa": {
        "displayText": "تھیوری ٹیسٹ کے بعد کیا کریں؟",
        "spokenText": "تھیوری ٹیسٹ مکمل کرنے اور پاس کرنے کے بعد، عملی تربیت کی عمارت جائیں۔ مقام تک پہنچنے کے لیے کوڈ استعمال کریں، پھر اندر جا کر اپنے تربیتی وقت کا انتظار کریں۔",
        "characterCount": 156,
        "textHash": "b244869adaa1127de76353069c4deea1f846d38c78fa1635f4813dd9069f76ce",
        "status": "pending"
      },
      "fr": {
        "displayText": "Que faire après l'examen théorique ?",
        "spokenText": "Après avoir terminé et réussi l'examen théorique, rendez-vous au bâtiment de formation pratique. Utilisez le code du lieu pour vous y rendre, puis entrez et attendez votre rendez-vous de formation.",
        "characterCount": 197,
        "textHash": "f15fa596a3fb73ac05351973987f5f56effddbdf0c9ae0de691dbce85242a583",
        "status": "pending"
      },
      "it": {
        "displayText": "Cosa fare dopo l'esame teorico?",
        "spokenText": "Dopo aver completato e superato l'esame teorico, recati all'edificio di formazione pratica. Usa il codice per raggiungere la posizione, poi entra e attendi il tuo appuntamento di formazione.",
        "characterCount": 190,
        "textHash": "b2cd6354dec6400acf9156dd7111b0e870de087b00804a4f32b8d43ad9158d3f",
        "status": "pending"
      },
      "bn": {
        "displayText": "তত্ত্বীয় পরীক্ষার পরে কী করবেন?",
        "spokenText": "তত্ত্বীয় পরীক্ষা সম্পন্ন ও পাস করার পরে, ব্যবহারিক প্রশিক্ষণ ভবনে যান। অবস্থানে পৌঁছাতে কোড ব্যবহার করুন, তারপর ভিতরে গিয়ে আপনার প্রশিক্ষণের সময়ের অপেক্ষা করুন।",
        "characterCount": 163,
        "textHash": "8d861e5d4d6519b932ae4328af99ec6c1a0cf502036e0eb0dd540d434c06bdec",
        "status": "pending"
      },
      "tr": {
        "displayText": "Teori sınavından sonra ne yapmalıyım?",
        "spokenText": "Teori sınavını tamamlayıp geçtikten sonra, uygulamalı eğitim binasına gidin. Konuma ulaşmak için kodu kullanın, ardından içeri girip eğitim randevunuzu bekleyin.",
        "characterCount": 161,
        "textHash": "0e3935ca2bdb3c0b53f24be79692a2ebb9f43fccfdd44b767bff9f123d0699a3",
        "status": "pending"
      }
    }
  },
  "TTS_AFTER_PRACTICAL_TRAINING": {
    "category": "after_step",
    "languages": {
      "ar": {
        "displayText": "ماذا أفعل بعد التدريب العملي؟",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "en": {
        "displayText": "What to do after practical training?",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "ur": {
        "displayText": "عملی تربیت کے بعد کیا کریں؟",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "hi": {
        "displayText": "व्यावहारिक प्रशिक्षण के बाद क्या करें?",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "pa": {
        "displayText": "عملی تربیت کے بعد کیا کریں؟",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "fr": {
        "displayText": "Que faire après la formation pratique ?",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "it": {
        "displayText": "Cosa fare dopo la formazione pratica?",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "bn": {
        "displayText": "ব্যবহারিক প্রশিক্ষণের পরে কী করবেন?",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      },
      "tr": {
        "displayText": "Uygulamalı eğitimden sonra ne yapmalıyım?",
        "spokenText": "",
        "characterCount": 0,
        "textHash": null,
        "status": "disabled"
      }
    }
  },
  "TTS_CHANGE_APPOINTMENT": {
    "category": "appointment",
    "languages": {
      "ar": {
        "displayText": "تغيير موعد التدريب",
        "spokenText": "سيتم إضافة إجراء تغيير الموعد هنا.",
        "characterCount": 34,
        "textHash": "1e92be10a06d0c8c264e6a8612f6e2f753916bff109945e80a378d096ca4ad80",
        "status": "pending"
      },
      "en": {
        "displayText": "Change appointment",
        "spokenText": "The approved procedure will be added here.",
        "characterCount": 42,
        "textHash": "6e6a6e1f65a05216c7bfcd7b5e0c69d1231ccfeb3931be5a3efc24fd79dfe57b",
        "status": "pending"
      },
      "ur": {
        "displayText": "تربیت کا وقت تبدیل کرنا",
        "spokenText": "اپائنٹمنٹ تبدیل کرنے کا طریقہ کار یہاں شامل کیا جائے گا۔",
        "characterCount": 56,
        "textHash": "3cbf40d34687573cb222682278b756549096dab015dde8e3afc06b78948a4daa",
        "status": "pending"
      },
      "hi": {
        "displayText": "प्रशिक्षण समय बदलना",
        "spokenText": "अपॉइंटमेंट बदलने की प्रक्रिया यहाँ जोड़ी जाएगी।",
        "characterCount": 47,
        "textHash": "e77f0b7351193f1a48f0928df1ad97a10adeb95f5f518afde5acbe75d9939d1d",
        "status": "pending"
      },
      "pa": {
        "displayText": "تربیت کا وقت تبدیل کرنا",
        "spokenText": "اپائنٹمنٹ تبدیل کرنے کا طریقہ کار یہاں شامل کیا جائے گا۔",
        "characterCount": 56,
        "textHash": "3cbf40d34687573cb222682278b756549096dab015dde8e3afc06b78948a4daa",
        "status": "pending"
      },
      "fr": {
        "displayText": "Changer le rendez-vous",
        "spokenText": "La procédure sera ajoutée ici.",
        "characterCount": 30,
        "textHash": "651f4e06e44271a63fddb48b1ece3a84899f30a157bc68fc582cc4c906d14b29",
        "status": "pending"
      },
      "it": {
        "displayText": "Cambiare appuntamento",
        "spokenText": "La procedura sarà aggiunta qui.",
        "characterCount": 31,
        "textHash": "c218a83750d159446f8324cf30bc0a628b4275133caf59aae41e3da5babb991c",
        "status": "pending"
      },
      "bn": {
        "displayText": "প্রশিক্ষণের সময় পরিবর্তন",
        "spokenText": "পদ্ধতি এখানে যোগ করা হবে।",
        "characterCount": 25,
        "textHash": "7dcc9bc0049be9f7aed12097b26a2c1b4d9fb8b6d83fdaa377a4b4c3ba57a34e",
        "status": "pending"
      },
      "tr": {
        "displayText": "Randevu değişikliği",
        "spokenText": "Prosedür buraya eklenecektir.",
        "characterCount": 29,
        "textHash": "5e8e129550b8e41fe9483aa56e17f4c9c48f6358f5063de09347ac564731c5a8",
        "status": "pending"
      }
    }
  }
};

export function getTTSEntry(ttsId, language) {
  const entry = TTS_CATALOG[ttsId];
  if (!entry) return null;
  return entry.languages[language] || null;
}

export function getAllTTSIds() {
  return Object.keys(TTS_CATALOG);
}

export function getTTSIdsByCategory(category) {
  return Object.keys(TTS_CATALOG).filter(id => TTS_CATALOG[id].category === category);
}
