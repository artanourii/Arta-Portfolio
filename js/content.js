/* =========================================================
   ARTA NOORI STUDIO: site content
   Edit this file to change contact details, studios, videos and text.
   محتوای سایت: شماره و لینک‌های تماس، استودیوها، ویدیوها و متن‌ها
   برای تغییر محتوا فقط همین فایل رو ویرایش کن.

   Videos / ویدیوها:
   1. Put the file in the "videos" folder, e.g. videos/beauty-01.mp4
      فایل رو بذار توی پوشه‌ی videos
   2. Write its path in "src", e.g. src:"videos/beauty-01.mp4"
      آدرسش رو توی src بنویس
   Leave src:"" empty and the card shows "This film is on its way."
   اگه src خالی بمونه، کارت پیام «به‌زودی» نشون می‌ده.
   "r" is the aspect ratio: "9/16" vertical, "16/9" horizontal.
   ========================================================= */
const CONTACT = {
  whatsapp:{ display:"+98 901 137 7877", link:"https://wa.me/989011377877" },
  instagram:{ display:"@artanourii", link:"https://www.instagram.com/artanourii" }
};
const STUDIOS = [
  {id:"beauty", theme:"light", c:{bg:"#F4E2DC",bg2:"#E7C6BE",ink:"#4A2229",acc:"#B76E79",frame:"#D9A9A4",glow:"rgba(183,110,121,.55)"},
   name:{en:"Beauty Video",fa:"Beauty Video"},tag:{en:"Skin, glow and close-ups that sell.",fa:"پوست، درخشش و کلوزآپ‌هایی که می‌فروشن."},
   videos:[
     {t:{en:"Makeup transition",fa:"ترنزیشن میکاپ"},m:{en:"Transition video, 9:16",fa:"ویدیوی ترنزیشن، ۹:۱۶"},src:"",r:"9/16"},
     {t:{en:"Beauty teaser",fa:"تیزر بیوتی"},m:{en:"Teaser, 9:16",fa:"تیزر، ۹:۱۶"},src:"",r:"9/16"}]},
  {id:"ai", theme:"dark", c:{bg:"#0D0A24",bg2:"#1E1650",ink:"#ECE9FF",acc:"#5CE1E6",frame:"#3B2F8F",glow:"rgba(92,225,230,.45)"},
   name:{en:"AI Lab",fa:"آزمایشگاه AI"},tag:{en:"Impossible shots, made real.",fa:"نماهای غیرممکن، واقعی‌شده."},
   videos:[
     {t:{en:"Gamer to soldier",fa:"از گیمر تا سرباز"},m:{en:"Single take, transformation",fa:"تک‌برداشت، تحول"},src:"",r:"9/16"},
     {t:{en:"Racer to footballer",fa:"از راننده تا فوتبالیست"},m:{en:"Seedance 2.5, VFX",fa:"Seedance 2.5، VFX"},src:"",r:"9/16"},
     {t:{en:"Face stretch reveal",fa:"کشیدن پوست صورت"},m:{en:"VFX, video to video",fa:"VFX، ویدیو به ویدیو"},src:"",r:"9/16"},
     {t:{en:"Logo touch",fa:"لمس لوگو"},m:{en:"Kling 3, 3s",fa:"Kling 3، ۳ ثانیه"},src:"",r:"9/16"}]},
  {id:"respina", theme:"dark", c:{bg:"#0A3A2D",bg2:"#0F6A5C",ink:"#EAF6F1",acc:"#D4AE57",frame:"#13836F",glow:"rgba(212,174,87,.45)"},
   name:{en:"Respina",fa:"رسپینا"},tag:{en:"Tech brand, race-day energy.",fa:"برند فناوری، با انرژی روز مسابقه."},
   videos:[
     {t:{en:"Company intro, 3D",fa:"معرفی شرکت، سه‌بعدی"},m:{en:"After Effects, 20s, 9:16",fa:"افترافکت، ۲۰ ثانیه، ۹:۱۶"},src:"",r:"9/16"},
     {t:{en:"Racetrack hero",fa:"پیست مسابقه"},m:{en:"Hyper-real still",fa:"تصویر هایپررئال"},src:"",r:"16/9"},
     {t:{en:"Track, top view",fa:"پیست از نمای بالا"},m:{en:"Logo on asphalt",fa:"لوگو روی آسفالت"},src:"",r:"16/9"}]},
  {id:"mixland", theme:"dark", c:{bg:"#110F10",bg2:"#3B0B15",ink:"#F5ECE2",acc:"#C2183A",frame:"#5A1020",glow:"rgba(194,24,58,.5)"},
   name:{en:"Mixland",fa:"میکس‌لند"},tag:{en:"Sour cherry jam that pours itself.",fa:"مربای آلبالویی که خودش ریخته می‌شه."},
   videos:[
     {t:{en:"Sour cherry pour",fa:"ریزش مربای آلبالو"},m:{en:"AI video, 10s, 9:16",fa:"ویدیوی AI، ۱۰ ثانیه، ۹:۱۶"},src:"",r:"9/16"}]},
  {id:"ucollective", theme:"light", c:{bg:"#F2F1EE",bg2:"#DAD8D2",ink:"#141414",acc:"#141414",frame:"#BEBBB3",glow:"rgba(20,20,20,.3)"},
   name:{en:"U Collective",fa:"U Collective"},tag:{en:"One take. One brush. One logo.",fa:"یک برداشت. یک قلم‌مو. یک لوگو."},
   videos:[
     {t:{en:"Ink samurai",fa:"سامورایی جوهر"},m:{en:"Seedance 2, single take, 15s",fa:"Seedance 2، تک‌برداشت، ۱۵ ثانیه"},src:"",r:"9/16"}]},
  {id:"artanoori", theme:"dark", c:{bg:"#0C0C0C",bg2:"#242424",ink:"#F5F2EA",acc:"#F5F2EA",frame:"#3A3A3A",glow:"rgba(245,242,234,.3)"},
   name:{en:"ARTA NOORI",fa:"ARTA NOORI"},tag:{en:"My own label, written in ink.",fa:"برند شخصی خودم، نوشته‌شده با جوهر."},
   videos:[
     {t:{en:"Ink calligraphy film",fa:"فیلم خوشنویسی جوهر"},m:{en:"Brand film, Seedance 2",fa:"فیلم برند، Seedance 2"},src:"",r:"9/16"},
     {t:{en:"Lookbook",fa:"لوک‌بوک"},m:{en:"Four angles",fa:"چهار زاویه"},src:"",r:"9/16"}]}
];

/* ---------- copy ---------- */
const TX = {
 en:{dir:"ltr",other:"فارسی",otherSmall:"Change language",studio:"ARTA NOORI STUDIO",line:"Ad films built on ideas, editing and VFX.",
  scroll:"Scroll to walk in",swipe:"Swipe up to walk in",wa:"WhatsApp",ig:"Instagram",arch:"ARTA STUDIO",archSub:"Concept, edit, VFX and AI video, under one roof.",
  open:"Open",studios:"The studios",studiosSub:"Pick a door and walk in.",enter:"Enter",films:n=>n===1?"1 film":n+" films",
  endH:"Your brand could have the next studio.",back:"Hallway",prev:"Previous studio",next:"Next studio",
  rhint:"Scroll or swipe to move through the studio. Tap a film to play.",soon:"This film is on its way.",close:"Close",
  stops:{entrance:"Entrance",arta:"Arta Studio",hall:"Studios",end:"Contact"},
  panels:[
   {id:"about",k:"01",h:"About",p:"Who's behind the work.",
    body:`<h2>Arta Noori</h2><p>I make ad films where the idea does the heavy lifting. My strength is the concept, the edit and the VFX, not standing in front of the lens. In-shoot tricks, compositing, 3D motion and AI video turn a simple shoot into something people stop to watch.</p><p>One of my behind-the-scenes reels passed 1M views on Instagram.</p>`},
   {id:"resume",k:"02",h:"Résumé",p:"Experience and brands.",
    body:`<h2>Résumé</h2><ul><li>Independent ad film creator<small><span class="ph">20XX</span> to now. Respina, Mixland, U Collective and more.</small></li><li>Founder, ARTA NOORI<small>Personal fashion label, from lookbook to brand film.</small></li><li>Instagram @artanourii<small>Portfolio of ad and commercial films. 1M+ views on a single reel.</small></li><li><span class="ph">Education or course</span><small>Add yours here.</small></li></ul>`},
   {id:"skills",k:"03",h:"Skills",p:"Tools and craft.",
    body:`<h2>Skills</h2><ul><li>Creative concepts and ad ideas</li><li>Editing, pacing and sound design</li><li>VFX and compositing</li><li>3D motion graphics<small>After Effects</small></li><li>AI video and image<small>Seedance 2 and 2.5, Kling 3, Google Gemini, Higgsfield</small></li></ul>`},
   {id:"services",k:"04",h:"Services",p:"What you can hire me for.",
    body:`<h2>Services</h2><ul><li>Ad concept and creative direction</li><li>Product hero videos</li><li>Single-take transformation films</li><li>Logo reveals and 3D brand intros</li><li>AI video production</li><li>Reels editing for Instagram and LinkedIn</li></ul>`},
   {id:"clients",k:"05",h:"Clients",p:"Brands I've worked with.",
    body:`<h2>Clients</h2><ul><li>Respina<small>3D company intro, racetrack campaign imagery</small></li><li>Mixland<small>Sour cherry jam ad</small></li><li>U Collective<small>Single-take ink film</small></li><li>Your brand<small>Next door is empty.</small></li></ul>`}
  ]},
 fa:{dir:"rtl",other:"English",otherSmall:"تغییر زبان",studio:"ARTA NOORI STUDIO",line:"تیزرهای تبلیغاتی که روی ایده، تدوین و VFX ساخته می‌شن.",
  scroll:"اسکرول کن و وارد شو",swipe:"انگشتت رو بکش بالا تا وارد شی",wa:"واتس‌اپ",ig:"اینستاگرام",arch:"ARTA STUDIO",archSub:"ایده، تدوین، VFX و ویدیوی AI، زیر یک سقف.",
  open:"باز کن",studios:"استودیوها",studiosSub:"یه در رو انتخاب کن و برو تو.",enter:"ورود",films:n=>n.toLocaleString("fa")+" فیلم",
  endH:"استودیوی بعدی می‌تونه مال برند تو باشه.",back:"راهرو",prev:"استودیوی قبلی",next:"استودیوی بعدی",
  rhint:"اسکرول کن یا بکش تا توی استودیو جلو بری. روی هر فیلم بزن تا پخش شه.",soon:"این فیلم به‌زودی اضافه می‌شه.",close:"بستن",
  stops:{entrance:"ورودی",arta:"استودیو آرتا",hall:"استودیوها",end:"تماس"},
  panels:[
   {id:"about",k:"۰۱",h:"درباره من",p:"کی پشت این کارهاست.",
    body:`<h2>آرتا نوری</h2><p>تیزر تبلیغاتی می‌سازم که بار اصلی‌اش روی ایده‌ست. قدرت من ایده، تدوین و VFX ـه، نه جلوی دوربین بودن. با ترفندهای حین فیلمبرداری، کامپوزیت، موشن سه‌بعدی و ویدیوی AI، یه فیلمبرداری ساده رو به چیزی تبدیل می‌کنم که آدم‌ها براش اسکرول رو نگه می‌دارن.</p><p>یکی از ریل‌های پشت‌صحنه‌ام توی اینستاگرام از یک میلیون بازدید گذشت.</p>`},
   {id:"resume",k:"۰۲",h:"رزومه",p:"سوابق و برندها.",
    body:`<h2>رزومه</h2><ul><li>سازنده‌ی مستقل تیزر تبلیغاتی<small>از <span class="ph">۱۴XX</span> تا امروز. رسپینا، میکس‌لند، U Collective و برندهای دیگر.</small></li><li>بنیان‌گذار ARTA NOORI<small>برند شخصی پوشاک، از لوک‌بوک تا فیلم برند.</small></li><li>اینستاگرام ‎@artanourii<small>نمونه‌کارهای تبلیغاتی. بیش از یک میلیون بازدید برای یک ریل.</small></li><li><span class="ph">تحصیلات یا دوره</span><small>اینجا اضافه کن.</small></li></ul>`},
   {id:"skills",k:"۰۳",h:"مهارت‌ها",p:"ابزار و تخصص.",
    body:`<h2>مهارت‌ها</h2><ul><li>ایده‌پردازی خلاق تبلیغاتی</li><li>تدوین، ریتم و طراحی صدا</li><li>VFX و کامپوزیت</li><li>موشن‌گرافیک سه‌بعدی<small>افترافکت</small></li><li>ویدیو و تصویر با هوش مصنوعی<small>Seedance 2 و 2.5، Kling 3، Google Gemini، Higgsfield</small></li></ul>`},
   {id:"services",k:"۰۴",h:"خدمات",p:"برای چه کارهایی می‌تونی منو بیاری.",
    body:`<h2>خدمات</h2><ul><li>ایده‌پردازی و کارگردانی خلاق تبلیغات</li><li>ویدیوی قهرمانِ محصول</li><li>فیلم تحول تک‌برداشت</li><li>رونمایی لوگو و اینترو سه‌بعدی برند</li><li>تولید ویدیو با هوش مصنوعی</li><li>تدوین ریل برای اینستاگرام و لینکدین</li></ul>`},
   {id:"clients",k:"۰۵",h:"مشتری‌ها",p:"برندهایی که باهاشون کار کردم.",
    body:`<h2>مشتری‌ها</h2><ul><li>رسپینا<small>اینترو سه‌بعدی شرکت، تصاویر کمپین پیست</small></li><li>میکس‌لند<small>تیزر مربای آلبالو</small></li><li>U Collective<small>فیلم جوهر تک‌برداشت</small></li><li>برند تو<small>در بعدی خالیه.</small></li></ul>`}
  ]}
};
