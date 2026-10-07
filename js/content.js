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
   Optional cover image shown before the film plays: poster:"videos/mixland-01.jpg"
   عکس کاور (اختیاری) که قبل از پخش روی قاب دیده می‌شه: poster

   Brand logos / لوگوی برندها:
   Put a transparent PNG or SVG in assets/brands and add logoImg:"assets/brands/snapp.png"
   to that studio. It shows on the studio wall and the door sign.
   لوگو رو بذار توی assets/brands و آدرسش رو با logoImg به استودیو اضافه کن.
   c: brand colors. bg/bg2 = set backdrop, ink = text, acc = accent light.
   ========================================================= */
const CONTACT = {
  whatsapp:{ display:"+98 901 137 7877", link:"https://wa.me/989011377877" },
  instagram:{ display:"@artanourii", link:"https://www.instagram.com/artanourii" },
  // LinkedIn: paste your profile link here and the chip appears next to WhatsApp and Instagram
  linkedin:{ display:"Arta Noori", link:"https://www.linkedin.com/in/arta-noori-shahbolaghi-1a2234359" }
};
/* Your own two films / دو ویدیوی شخصی:
   logoAd: plays silently on a loop in the middle of Arta Studio, between the panels
           وسط استودیوی آرتا، بین پنل‌ها، بی‌صدا و تکراری پخش می‌شه
   instagramAd: floats big at the end of the hall and plays WITH SOUND;
           the sound fades in as the visitor walks up to it
           آخر راهرو، بزرگ و معلق روی هوا، با صدا پخش می‌شه و صداش با نزدیک شدن بلندتر می‌شه
   Tapping either one opens it full screen with its own sound. */
const FEATURES = {
  logoAd:{src:"https://artanourii.github.io/arta-videos-4/logo-ad.mp4",poster:"videos/logo-ad.jpg",r:"9/16",sound:false,
    t:{en:"ARTA NOORI",fa:"آرتا نوری"},m:{en:"Logo film",fa:"تیزر لوگو"}},
  instagramAd:{src:"https://artanourii.github.io/arta-videos-4/instagram-ad.mp4",poster:"videos/instagram-ad.jpg",r:"9/16",sound:true,
    t:{en:"@artanourii on Instagram",fa:"پیج اینستاگرام @artanourii"},m:{en:"Follow for new films",fa:"برای دیدن کارهای جدید فالو کن"}}
};

const STUDIOS = [
  // 1. Asus Iran (logo and colors from the official site)
  {id:"asus", theme:"dark", c:{bg:"#0E1116",bg2:"#202734",ink:"#F2F5F8",acc:"#009C49"},logoImg:"assets/brands/asus-iran.png",logoTint:true,
   name:{en:"Asus Iran",fa:"ایسوس ایران"},tag:{en:"Laptops and tech, made cinematic",fa:"لپ‌تاپ و تکنولوژی، سینمایی"},
   videos:[
     {t:{en:"Christmas loop 2",fa:"لوپ کریسمس ۲"},m:{en:"28s, 9:16",fa:"۲۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-24.mp4",poster:"videos/asus-24.jpg",r:"9/16"},
     {t:{en:"Black Friday",fa:"بلک فرایدی"},m:{en:"47s, 9:16",fa:"۴۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-23.mp4",poster:"videos/asus-23.jpg",r:"9/16"},
     {t:{en:"600K celebration",fa:"جشن ۶۰۰ کایی"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-22.mp4",poster:"videos/asus-22.jpg",r:"9/16"},
     {t:{en:"Combo loop",fa:"لوپ ترکیبی"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-21.mp4",poster:"videos/asus-21.jpg",r:"9/16"},
     {t:{en:"Instagram post",fa:"پست اینستاگرام"},m:{en:"38s, 9:16",fa:"۳۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-20.mp4",poster:"videos/asus-20.jpg",r:"9/16"},
     {t:{en:"Outfit change",fa:"تعویض لباس"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-19.mp4",poster:"videos/asus-19.jpg",r:"9/16"},
     {t:{en:"Bottle illusion",fa:"ایلوژن بطری"},m:{en:"19s, 9:16",fa:"۱۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-18.mp4",poster:"videos/asus-18.jpg",r:"9/16"},
     {t:{en:"Jump loop",fa:"لوپ پرش"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-17.mp4",poster:"videos/asus-17.jpg",r:"9/16"},
     {t:{en:"Gravity illusion",fa:"ایلوژن جاذبه"},m:{en:"9s, 9:16",fa:"۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-16.mp4",poster:"videos/asus-16.jpg",r:"9/16"},
     {t:{en:"Illusion loop 2",fa:"لوپ ایلوژن ۲"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-15.mp4",poster:"videos/asus-15.jpg",r:"9/16"},
     {t:{en:"Burger",fa:"همبرگر"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-14.mp4",poster:"videos/asus-14.jpg",r:"9/16"},
     {t:{en:"Body parts",fa:"تکه‌های بدن"},m:{en:"19s, 9:16",fa:"۱۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-13.mp4",poster:"videos/asus-13.jpg",r:"9/16"},
     {t:{en:"Cardboard loop",fa:"لوپ کارتنی"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-12.mp4",poster:"videos/asus-12.jpg",r:"9/16"},
     {t:{en:"Illusion",fa:"ایلوژن"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-11.mp4",poster:"videos/asus-11.jpg",r:"9/16"},
     {t:{en:"Vertigo loop",fa:"لوپ سرگیجه"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-10.mp4",poster:"videos/asus-10.jpg",r:"9/16"},
     {t:{en:"Illusion loop",fa:"لوپ ایلوژن"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-9.mp4",poster:"videos/asus-9.jpg",r:"9/16"},
     {t:{en:"Christmas loop",fa:"کریسمس لوپ"},m:{en:"21s, 9:16",fa:"۲۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-8.mp4",poster:"videos/asus-8.jpg",r:"9/16"},
     {t:{en:"Frame loop",fa:"لوپ تابلو"},m:{en:"9s, 9:16",fa:"۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-7.mp4",poster:"videos/asus-7.jpg",r:"9/16"},
     {t:{en:"Box illusion",fa:"ایلوژن جعبه"},m:{en:"17s, 9:16",fa:"۱۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-6.mp4",poster:"videos/asus-6.jpg",r:"9/16"},
     {t:{en:"Store transition",fa:"ترنزیشن فروشگاه ایسوس"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-5.mp4",poster:"videos/asus-5.jpg",r:"9/16"},
     {t:{en:"Unexpected crash loop",fa:"تصادف غیرمنتظره لوپ"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-4.mp4",poster:"videos/asus-4.jpg",r:"9/16"},
     {t:{en:"Consultation loop",fa:"مشاوره لوپ"},m:{en:"9s, 9:16",fa:"۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-3.mp4",poster:"videos/asus-3.jpg",r:"9/16"},
     {t:{en:"Crash loop",fa:"تصادف لوپ"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-2.mp4",poster:"videos/asus-2.jpg",r:"9/16"},
     {t:{en:"Installments loop",fa:"اقساط لوپ"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/asus-1.mp4",poster:"videos/asus-1.jpg",r:"9/16"}]},
  // 2. Aparat
  {id:"aparat", theme:"dark", c:{bg:"#1A0710",bg2:"#4A0B23",ink:"#FFF0F5",acc:"#ED145B"},logo:{d:"M12.0014 1.5938C2.7317 1.5906-1.9119 12.7965 4.641 19.3515c2.975 2.976 7.4496 3.8669 11.3374 2.257 3.8877-1.61 6.4228-5.4036 6.4228-9.6116 0-5.7441-4.6555-10.4012-10.3997-10.4031zM6.11 6.783c.5011-2.5982 3.8927-3.2936 5.376-1.1028 1.4834 2.1907-.4216 5.0816-3.02 4.5822-1.6118-.3098-2.6668-1.868-2.356-3.4794zm4.322 8.9882c-.5045 2.5971-3.8965 3.288-5.377 1.0959-1.4807-2.1922.427-5.0807 3.0247-4.5789 1.612.3114 2.6655 1.8714 2.3524 3.483zm1.2605-2.405c-1.1528-.2231-1.4625-1.7273-.4917-2.3877.9708-.6604 2.256.18 2.0401 1.3343-.1347.7198-.8294 1.1924-1.5484 1.0533zm6.197 3.8375c-.501 2.5981-3.8927 3.2935-5.376 1.1028-1.4834-2.1908.4217-5.0817 3.0201-4.5822 1.6117.3097 2.6667 1.8679 2.356 3.4794zm-1.9662-5.5018c-2.5981-.501-3.2935-3.8962-1.1027-5.3795 2.1907-1.4834 5.0816.4216 4.5822 3.02-.3082 1.6132-1.8668 2.6701-3.4795 2.3595zm-2.3348 11.5618l2.2646.611c1.9827.5263 4.0167-.6542 4.5433-2.6368l.639-2.4016a11.3828 11.3828 0 0 1-7.4469 4.4274zM21.232 3.5985l-2.363-.6284a11.3757 11.3757 0 0 1 4.3538 7.619l.6495-2.4578c.5194-1.9804-.6615-4.0076-2.6403-4.5328zM.6713 13.8086l-.5407 2.04c-.5263 1.9826.6542 4.0166 2.6368 4.5432l2.1066.5618a11.3792 11.3792 0 0 1-4.2027-7.145zM10.3583.702L8.1498.1261C6.166-.4024 4.1296.7785 3.603 2.763l-.5512 2.082A11.3757 11.3757 0 0 1 10.3583.702Z",vb:24},
   name:{en:"Aparat",fa:"آپارات"},tag:{en:"Video platform, video-first ideas",fa:"پلتفرم ویدیو، ایده‌هایی از جنس ویدیو"},
   videos:[
     {t:{en:"Ring loop",fa:"لوپ حلقه"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/aparat-1.mp4",poster:"videos/aparat-1.jpg",r:"9/16"},
     {t:{en:"Suitcase loop",fa:"لوپ چمدان"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/aparat-2.mp4",poster:"videos/aparat-2.jpg",r:"9/16"},
     {t:{en:"Phone illusion",fa:"ایلوژن موبایل"},m:{en:"27s, 9:16",fa:"۲۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/aparat-3.mp4",poster:"videos/aparat-3.jpg",r:"9/16"},
     {t:{en:"Bubble",fa:"حباب"},m:{en:"18s, 9:16",fa:"۱۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/aparat-4.mp4",poster:"videos/aparat-4.jpg",r:"9/16"},
     {t:{en:"Aparat pre-roll",fa:"پری‌رول آپارات"},m:{en:"28s, 16:9",fa:"۲۸ ثانیه، ۱۶:۹"},src:"https://artanourii.github.io/arta-videos-1/aparat-5.mp4",poster:"videos/aparat-5.jpg",r:"16/9"},
     {t:{en:"Cup illusion",fa:"ایلوژن لیوان"},m:{en:"47s, 9:16",fa:"۴۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/aparat-6.mp4",poster:"videos/aparat-6.jpg",r:"9/16"},
     {t:{en:"Aparat Shorts",fa:"آپارات شورتس"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/aparat-7.mp4",poster:"videos/aparat-7.jpg",r:"9/16"},
     {t:{en:"Door illusion",fa:"ایلوژن در"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/aparat-8.mp4",poster:"videos/aparat-8.jpg",r:"9/16"}]},
  // 3. Respina (logo and colors from the official site)
  {id:"respina", theme:"dark", c:{bg:"#06262B",bg2:"#0B4C55",ink:"#EAF7F8",acc:"#008B9E"},logoImg:"assets/brands/respina.svg",
   name:{en:"Respina",fa:"داده پردازی رسپینا"},tag:{en:"Tech brand, race-day energy",fa:"برند فناوری، با انرژی روز مسابقه"},
   videos:[
     {t:{en:"Company intro, 3D",fa:"معرفی شرکت، سه‌بعدی"},m:{en:"After Effects, 20s, 9:16",fa:"افترافکت، ۲۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-1/respina-intro.mp4",poster:"videos/respina-intro.jpg",r:"9/16"},
     {t:{en:"Brand film",fa:"تیزر تبلیغاتی"},m:{en:"90s, 16:9",fa:"۹۰ ثانیه، ۱۶:۹"},src:"https://artanourii.github.io/arta-videos-1/respina-film.mp4",poster:"videos/respina-film.jpg",r:"16/9"}]},
  // 4. Hamrahe Aval (logo and colors from the official site)
  {id:"mci", theme:"light", c:{bg:"#F4F8FB",bg2:"#D3E9F6",ink:"#010101",acc:"#0095DA"},logoImg:"assets/brands/mci.svg",
   name:{en:"Hamrahe Aval",fa:"همراه اول"},tag:{en:"Connecting a country, one spot at a time",fa:"ارتباط یک کشور، تیزر به تیزر"},
   videos:[
     {t:{en:"Illusion",fa:"ایلوژن"},m:{en:"18s, 9:16",fa:"۱۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/mci-1.mp4",poster:"videos/mci-1.jpg",r:"9/16"}]},
  // 5. Snapp (logo and colors from the official site)
  {id:"snapp", theme:"dark", c:{bg:"#161A26",bg2:"#252A3C",ink:"#FFFFFF",acc:"#00D170"},logoImg:"assets/brands/snapp.svg",
   name:{en:"Snapp",fa:"اسنپ"},tag:{en:"Rides, food and everything on the go",fa:"سفر، غذا و هر چیزی در مسیر"},
   videos:[
     {t:{en:"Box loop",fa:"لوپ جعبه"},m:{en:"29s, 9:16",fa:"۲۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/snapp-1.mp4",poster:"videos/snapp-1.jpg",r:"9/16"}]},
  // 6. Azkivam (logo and colors from the official site)
  {id:"azkivam", theme:"light", c:{bg:"#F3F5FD",bg2:"#DCE2FA",ink:"#242B35",acc:"#364FD9"},logoImg:"assets/brands/azkivam.svg",
   name:{en:"Azkivam",fa:"از کی وام"},tag:{en:"Loans made simple, on screen",fa:"وام ساده، روی صفحه"},
   videos:[
     {t:{en:"Cardboard illusion",fa:"ایلوژن کارتن"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/azkivam-1.mp4",poster:"videos/azkivam-1.jpg",r:"9/16"},
     {t:{en:"One Piece",fa:"وان پیس"},m:{en:"20s, 9:16",fa:"۲۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/azkivam-2.mp4",poster:"videos/azkivam-2.jpg",r:"9/16"}]},
  // 7. Makeup (colors approximate)
  {id:"beauty", theme:"light", c:{bg:"#F4E2DC",bg2:"#E7C6BE",ink:"#4A2229",acc:"#B76E79"},logoImg:"assets/brands/makeup.png",
   name:{en:"Makeup",fa:"میکاپ"},tag:{en:"Skin, glow and close-ups that sell",fa:"پوست، درخشش و کلوزآپ‌هایی که می‌فروشن"},
   videos:[
     {t:{en:"Makeup look 1",fa:"میکاپ ۱"},m:{en:"26s, 9:16",fa:"۲۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-6.mp4",poster:"videos/makeup-6.jpg",r:"9/16"},
     {t:{en:"Makeup look 2",fa:"میکاپ ۲"},m:{en:"14s, 9:16",fa:"۱۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-19.mp4",poster:"videos/makeup-19.jpg",r:"9/16"},
     {t:{en:"Makeup look 3",fa:"میکاپ ۳"},m:{en:"74s, 9:16",fa:"۷۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-12.mp4",poster:"videos/makeup-12.jpg",r:"9/16"},
     {t:{en:"Makeup look 4",fa:"میکاپ ۴"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-15.mp4",poster:"videos/makeup-15.jpg",r:"9/16"},
     {t:{en:"Makeup look 5",fa:"میکاپ ۵"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-7.mp4",poster:"videos/makeup-7.jpg",r:"9/16"},
     {t:{en:"Makeup look 6",fa:"میکاپ ۶"},m:{en:"8s, 9:16",fa:"۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-13.mp4",poster:"videos/makeup-13.jpg",r:"9/16"},
     {t:{en:"Makeup look 7",fa:"میکاپ ۷"},m:{en:"20s, 9:16",fa:"۲۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-3.mp4",poster:"videos/makeup-3.jpg",r:"9/16"},
     {t:{en:"Makeup look 8",fa:"میکاپ ۸"},m:{en:"7s, 9:16",fa:"۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-18.mp4",poster:"videos/makeup-18.jpg",r:"9/16"},
     {t:{en:"Makeup look 9",fa:"میکاپ ۹"},m:{en:"22s, 9:16",fa:"۲۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-11.mp4",poster:"videos/makeup-11.jpg",r:"9/16"},
     {t:{en:"Makeup look 10",fa:"میکاپ ۱۰"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-17.mp4",poster:"videos/makeup-17.jpg",r:"9/16"},
     {t:{en:"Makeup look 11",fa:"میکاپ ۱۱"},m:{en:"7s, 9:16",fa:"۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/makeup-8.mp4",poster:"videos/makeup-8.jpg",r:"9/16"},
     {t:{en:"Makeup look 12",fa:"میکاپ ۱۲"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-20.mp4",poster:"videos/makeup-20.jpg",r:"9/16"},
     {t:{en:"Makeup look 13",fa:"میکاپ ۱۳"},m:{en:"14s, 9:16",fa:"۱۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-5.mp4",poster:"videos/makeup-5.jpg",r:"9/16"},
     {t:{en:"Makeup look 14",fa:"میکاپ ۱۴"},m:{en:"5s, 9:16",fa:"۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-14.mp4",poster:"videos/makeup-14.jpg",r:"9/16"},
     {t:{en:"Makeup look 15",fa:"میکاپ ۱۵"},m:{en:"19s, 9:16",fa:"۱۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-9.mp4",poster:"videos/makeup-9.jpg",r:"9/16"},
     {t:{en:"Makeup look 16",fa:"میکاپ ۱۶"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-16.mp4",poster:"videos/makeup-16.jpg",r:"9/16"},
     {t:{en:"Makeup look 17",fa:"میکاپ ۱۷"},m:{en:"19s, 9:16",fa:"۱۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-10.mp4",poster:"videos/makeup-10.jpg",r:"9/16"},
     {t:{en:"Makeup look 18",fa:"میکاپ ۱۸"},m:{en:"8s, 9:16",fa:"۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-2.mp4",poster:"videos/makeup-2.jpg",r:"9/16"},
     {t:{en:"Makeup look 19",fa:"میکاپ ۱۹"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-4.mp4",poster:"videos/makeup-4.jpg",r:"9/16"},
     {t:{en:"Makeup look 20",fa:"میکاپ ۲۰"},m:{en:"20s, 9:16",fa:"۲۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/makeup-1.mp4",poster:"videos/makeup-1.jpg",r:"9/16"},
     {t:{en:"Makeup look 21",fa:"میکاپ ۲۱"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-5/makeup-21.mp4",poster:"videos/makeup-21.jpg",r:"9/16"},
     {t:{en:"Makeup look 22",fa:"میکاپ ۲۲"},m:{en:"29s, 9:16",fa:"۲۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-5/makeup-22.mp4",poster:"videos/makeup-22.jpg",r:"9/16"}]},
  // 8. Dream Salon (colors approximate)
  {id:"dreamsalon", theme:"light", showTag:true, c:{bg:"#F3EAF2",bg2:"#E2CDE0",ink:"#3A2240",acc:"#A35D9E"},logoImg:"assets/brands/dream-salon.png",
   name:{en:"Dream Salon",fa:"دریم سالن"},tag:{en:"Brow fibrosis, lip shading and microblading",fa:"فیبروز ابرو، شیدینگ لب و میکروبلیدینگ"},
   videos:[
     {t:{en:"Dream Salon 1",fa:"دریم سالن ۱"},m:{en:"9s, 9:16",fa:"۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-1.mp4",poster:"videos/salon-1.jpg",r:"9/16"},
     {t:{en:"Dream Salon 2",fa:"دریم سالن ۲"},m:{en:"22s, 9:16",fa:"۲۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-2.mp4",poster:"videos/salon-2.jpg",r:"9/16"},
     {t:{en:"Dream Salon 3",fa:"دریم سالن ۳"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-3.mp4",poster:"videos/salon-3.jpg",r:"9/16"},
     {t:{en:"Dream Salon 4",fa:"دریم سالن ۴"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-4.mp4",poster:"videos/salon-4.jpg",r:"9/16"},
     {t:{en:"Dream Salon 5",fa:"دریم سالن ۵"},m:{en:"18s, 9:16",fa:"۱۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-5.mp4",poster:"videos/salon-5.jpg",r:"9/16"},
     {t:{en:"Dream Salon 6",fa:"دریم سالن ۶"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-6.mp4",poster:"videos/salon-6.jpg",r:"9/16"},
     {t:{en:"Dream Salon 7",fa:"دریم سالن ۷"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-7.mp4",poster:"videos/salon-7.jpg",r:"9/16"},
     {t:{en:"Dream Salon 8",fa:"دریم سالن ۸"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-8.mp4",poster:"videos/salon-8.jpg",r:"9/16"},
     {t:{en:"Dream Salon 9",fa:"دریم سالن ۹"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-9.mp4",poster:"videos/salon-9.jpg",r:"9/16"},
     {t:{en:"Dream Salon 10",fa:"دریم سالن ۱۰"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-10.mp4",poster:"videos/salon-10.jpg",r:"9/16"},
     {t:{en:"Dream Salon 11",fa:"دریم سالن ۱۱"},m:{en:"6s, 9:16",fa:"۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-11.mp4",poster:"videos/salon-11.jpg",r:"9/16"},
     {t:{en:"Dream Salon 12",fa:"دریم سالن ۱۲"},m:{en:"38s, 9:16",fa:"۳۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-12.mp4",poster:"videos/salon-12.jpg",r:"9/16"},
     {t:{en:"Dream Salon 13",fa:"دریم سالن ۱۳"},m:{en:"17s, 9:16",fa:"۱۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-13.mp4",poster:"videos/salon-13.jpg",r:"9/16"},
     {t:{en:"Dream Salon 14",fa:"دریم سالن ۱۴"},m:{en:"29s, 9:16",fa:"۲۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-14.mp4",poster:"videos/salon-14.jpg",r:"9/16"},
     {t:{en:"Dream Salon 15",fa:"دریم سالن ۱۵"},m:{en:"14s, 9:16",fa:"۱۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-15.mp4",poster:"videos/salon-15.jpg",r:"9/16"},
     {t:{en:"Dream Salon 16",fa:"دریم سالن ۱۶"},m:{en:"29s, 9:16",fa:"۲۹ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-16.mp4",poster:"videos/salon-16.jpg",r:"9/16"},
     {t:{en:"Dream Salon 17",fa:"دریم سالن ۱۷"},m:{en:"30s, 9:16",fa:"۳۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-17.mp4",poster:"videos/salon-17.jpg",r:"9/16"},
     {t:{en:"Dream Salon 18",fa:"دریم سالن ۱۸"},m:{en:"7s, 9:16",fa:"۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-18.mp4",poster:"videos/salon-18.jpg",r:"9/16"},
     {t:{en:"Dream Salon 19",fa:"دریم سالن ۱۹"},m:{en:"14s, 9:16",fa:"۱۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-19.mp4",poster:"videos/salon-19.jpg",r:"9/16"},
     {t:{en:"Dream Salon 20",fa:"دریم سالن ۲۰"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/salon-20.mp4",poster:"videos/salon-20.jpg",r:"9/16"}]},
  // 9. Analiz Fix (logo and colors from the brand's Instagram logo)
  {id:"analizfix", theme:"dark", c:{bg:"#161A2B",bg2:"#2C3766",ink:"#FFFFFF",acc:"#ED8232"},logoImg:"assets/brands/analiz-fix.png",
   name:{en:"Analiz Fix",fa:"آنالیز فیکس"},tag:{en:"Diagnosis and repair, told in motion",fa:"عیب‌یابی و تعمیر، با زبان تصویر"},
   videos:[
     {t:{en:"Installment purchase",fa:"خرید قسطی"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/analizfix-1.mp4",poster:"videos/analizfix-1.jpg",r:"9/16"},
     {t:{en:"Installments",fa:"اقساط"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/analizfix-2.mp4",poster:"videos/analizfix-2.jpg",r:"9/16"},
     {t:{en:"Ping-pong",fa:"پینگ‌پنگی"},m:{en:"22s, 9:16",fa:"۲۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/analizfix-3.mp4",poster:"videos/analizfix-3.jpg",r:"9/16"},
     {t:{en:"Repair",fa:"تعمیر"},m:{en:"22s, 9:16",fa:"۲۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/analizfix-4.mp4",poster:"videos/analizfix-4.jpg",r:"9/16"},
     {t:{en:"Illusion",fa:"ایلوژن"},m:{en:"21s, 9:16",fa:"۲۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/analizfix-5.mp4",poster:"videos/analizfix-5.jpg",r:"9/16"},
     {t:{en:"Find My",fa:"فایند مای"},m:{en:"40s, 9:16",fa:"۴۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/analizfix-6.mp4",poster:"videos/analizfix-6.jpg",r:"9/16"}]},
  // 10. Niro Motor (logo and colors from the official site)
  {id:"niromotor", theme:"dark", c:{bg:"#0A1A33",bg2:"#19438D",ink:"#EEF3FB",acc:"#6687C0"},logoImg:"assets/brands/niroomotor-white.svg",
   name:{en:"Niro Motor",fa:"نیرو موتور"},tag:{en:"Engines, power and speed",fa:"موتور، قدرت و سرعت"},
   videos:[
     {t:{en:"Yamaha R25 illusion",fa:"ایلوژن یاماها R25"},m:{en:"17s, 9:16",fa:"۱۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/niromotor-1.mp4",poster:"videos/niromotor-1.jpg",r:"9/16"},
     {t:{en:"Board illusion",fa:"ایلوژن تابلو"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/niromotor-2.mp4",poster:"videos/niromotor-2.jpg",r:"9/16"},
     {t:{en:"Fun",fa:"فان"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/niromotor-3.mp4",poster:"videos/niromotor-3.jpg",r:"9/16"},
     {t:{en:"Giant and tiny",fa:"غول و کوچولو"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/niromotor-4.mp4",poster:"videos/niromotor-4.jpg",r:"9/16"},
     {t:{en:"Showroom",fa:"نمایشگاه نیرو موتور"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/niromotor-5.mp4",poster:"videos/niromotor-5.jpg",r:"9/16"}]},
  // 11. IT Mall (logo and colors from the official site)
  {id:"itmall", theme:"light", c:{bg:"#F3F6FD",bg2:"#D9E5FB",ink:"#1C2434",acc:"#1B61E6"},logoImg:"assets/brands/itmall.png",
   name:{en:"IT Mall",fa:"آی تی مال"},tag:{en:"Every gadget, one hero shot",fa:"هر گجت، یک نمای قهرمان"},
   videos:[
     {t:{en:"Life U2i earbuds",fa:"هدفون Life U2i"},m:{en:"24s, 9:16",fa:"۲۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/itmall-1.mp4",poster:"videos/itmall-1.jpg",r:"9/16"},
     {t:{en:"Unbelievable discounts",fa:"تخفیف‌های باورنکردنی"},m:{en:"24s, 9:16",fa:"۲۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/itmall-2.mp4",poster:"videos/itmall-2.jpg",r:"9/16"},
     {t:{en:"Tiny door illusion",fa:"ایلوژن در کوچک"},m:{en:"17s, 9:16",fa:"۱۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/itmall-3.mp4",poster:"videos/itmall-3.jpg",r:"9/16"}]},
  // 12. Farmanieh Club (logo and colors from the official site)
  {id:"farmaniyeh", theme:"light", c:{bg:"#F2F0EE",bg2:"#DEDAD6",ink:"#25282A",acc:"#D94D20"},logoImg:"assets/brands/farmanieh-club.png",
   name:{en:"Farmanieh Club",fa:"باشگاه فرمانیه"},tag:{en:"Sport and lifestyle, in slow motion",fa:"ورزش و سبک زندگی، با حرکت آهسته"},
   videos:[
     {t:{en:"Celebrities at the club",fa:"سلبریتی‌ها در باشگاه"},m:{en:"28s, 9:16",fa:"۲۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/farmaniyeh-1.mp4",poster:"videos/farmaniyeh-1.jpg",r:"9/16"},
     {t:{en:"Christmas at the gym",fa:"کریسمس در باشگاه"},m:{en:"18s, 9:16",fa:"۱۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/farmaniyeh-2.mp4",poster:"videos/farmaniyeh-2.jpg",r:"9/16"}]},
  // 13. Dicardo (logo and colors from the official site)
  {id:"dicardo", theme:"dark", c:{bg:"#070525",bg2:"#1C1458",ink:"#F3F0FF",acc:"#AC33ED"},logoImg:"assets/brands/dicardo.png",
   name:{en:"Dicardo",fa:"دیکاردو"},tag:{en:"Style that moves",fa:"استایلی که حرکت می‌کنه"},
   videos:[
     {t:{en:"Coffee illusion",fa:"ایلوژن قهوه"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/dicardo-1.mp4",poster:"videos/dicardo-1.jpg",r:"9/16"},
     {t:{en:"Nano Banana",fa:"نانو بنانا"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/dicardo-2.mp4",poster:"videos/dicardo-2.jpg",r:"9/16"}]},
  // 14. Emarat Zarrin (logo and colors from the brand's Instagram logo)
  {id:"emaratezarin", theme:"dark", c:{bg:"#0B1628",bg2:"#162D4D",ink:"#F5EAD0",acc:"#D9C080"},logoImg:"assets/brands/emarat-zarrin.png",
   name:{en:"Emarat Zarrin",fa:"امارت زرین"},tag:{en:"Architecture in gold light",fa:"معماری در نور طلایی"},
   videos:[
     {t:{en:"Ronaldo's wedding",fa:"عروسی رونالدو"},m:{en:"46s, 9:16",fa:"۴۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/emaratezarin-1.mp4",poster:"videos/emaratezarin-1.jpg",r:"9/16"}]},
  // 15. Mahan Net (logo and colors from the official site)
  {id:"mahannet", theme:"light", c:{bg:"#F7F5F4",bg2:"#E7E1DE",ink:"#000000",acc:"#FF2401"},logoImg:"assets/brands/mahan-net.png",
   name:{en:"Mahan Net",fa:"ماهان نت"},tag:{en:"Fast internet, faster cuts",fa:"اینترنت پرسرعت، کات‌های سریع‌تر"},
   videos:[
     {t:{en:"Box illusion",fa:"ایلوژن جعبه"},m:{en:"21s, 9:16",fa:"۲۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-2/mahannet-1.mp4",poster:"videos/mahannet-1.jpg",r:"9/16"}]},
  // 16. My Tiktok Video
  {id:"tiktok", theme:"dark", c:{bg:"#050505",bg2:"#161823",ink:"#FFFFFF",acc:"#FE2C55"},logo:{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",vb:24},
   name:{en:"My Tiktok Video",fa:"تیکتاک"},tag:{en:"Short, loud and made for the scroll",fa:"کوتاه، پرانرژی و ساخته‌شده برای اسکرول"},
   videos:[
     {t:{en:"TikTok video 1",fa:"ویدیوی تیک‌تاک ۱"},m:{en:"58s, 9:16",fa:"۵۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-1.mp4",poster:"videos/tiktok-1.jpg",r:"9/16"},
     {t:{en:"TikTok video 2",fa:"ویدیوی تیک‌تاک ۲"},m:{en:"32s, 9:16",fa:"۳۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-2.mp4",poster:"videos/tiktok-2.jpg",r:"9/16"},
     {t:{en:"TikTok video 3",fa:"ویدیوی تیک‌تاک ۳"},m:{en:"18s, 9:16",fa:"۱۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-3.mp4",poster:"videos/tiktok-3.jpg",r:"9/16"},
     {t:{en:"TikTok video 4",fa:"ویدیوی تیک‌تاک ۴"},m:{en:"27s, 9:16",fa:"۲۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-4.mp4",poster:"videos/tiktok-4.jpg",r:"9/16"},
     {t:{en:"TikTok video 5",fa:"ویدیوی تیک‌تاک ۵"},m:{en:"28s, 9:16",fa:"۲۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-5.mp4",poster:"videos/tiktok-5.jpg",r:"9/16"},
     {t:{en:"TikTok video 6",fa:"ویدیوی تیک‌تاک ۶"},m:{en:"23s, 9:16",fa:"۲۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-6.mp4",poster:"videos/tiktok-6.jpg",r:"9/16"},
     {t:{en:"TikTok video 7",fa:"ویدیوی تیک‌تاک ۷"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-7.mp4",poster:"videos/tiktok-7.jpg",r:"9/16"},
     {t:{en:"TikTok video 8",fa:"ویدیوی تیک‌تاک ۸"},m:{en:"44s, 9:16",fa:"۴۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-8.mp4",poster:"videos/tiktok-8.jpg",r:"9/16"},
     {t:{en:"TikTok video 9",fa:"ویدیوی تیک‌تاک ۹"},m:{en:"28s, 9:16",fa:"۲۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-9.mp4",poster:"videos/tiktok-9.jpg",r:"9/16"},
     {t:{en:"TikTok video 10",fa:"ویدیوی تیک‌تاک ۱۰"},m:{en:"23s, 9:16",fa:"۲۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-10.mp4",poster:"videos/tiktok-10.jpg",r:"9/16"},
     {t:{en:"TikTok video 11",fa:"ویدیوی تیک‌تاک ۱۱"},m:{en:"10s, 9:16",fa:"۱۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-11.mp4",poster:"videos/tiktok-11.jpg",r:"9/16"},
     {t:{en:"TikTok video 12",fa:"ویدیوی تیک‌تاک ۱۲"},m:{en:"30s, 9:16",fa:"۳۰ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-12.mp4",poster:"videos/tiktok-12.jpg",r:"9/16"},
     {t:{en:"TikTok video 13",fa:"ویدیوی تیک‌تاک ۱۳"},m:{en:"7s, 9:16",fa:"۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-3/tiktok-13.mp4",poster:"videos/tiktok-13.jpg",r:"9/16"},
     {t:{en:"TikTok video 14",fa:"ویدیوی تیک‌تاک ۱۴"},m:{en:"13s, 9:16",fa:"۱۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-14.mp4",poster:"videos/tiktok-14.jpg",r:"9/16"},
     {t:{en:"TikTok video 15",fa:"ویدیوی تیک‌تاک ۱۵"},m:{en:"17s, 9:16",fa:"۱۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-15.mp4",poster:"videos/tiktok-15.jpg",r:"9/16"},
     {t:{en:"TikTok video 16",fa:"ویدیوی تیک‌تاک ۱۶"},m:{en:"23s, 9:16",fa:"۲۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-16.mp4",poster:"videos/tiktok-16.jpg",r:"9/16"},
     {t:{en:"TikTok video 17",fa:"ویدیوی تیک‌تاک ۱۷"},m:{en:"14s, 9:16",fa:"۱۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-17.mp4",poster:"videos/tiktok-17.jpg",r:"9/16"},
     {t:{en:"TikTok video 18",fa:"ویدیوی تیک‌تاک ۱۸"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-18.mp4",poster:"videos/tiktok-18.jpg",r:"9/16"},
     {t:{en:"TikTok video 19",fa:"ویدیوی تیک‌تاک ۱۹"},m:{en:"33s, 9:16",fa:"۳۳ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-19.mp4",poster:"videos/tiktok-19.jpg",r:"9/16"},
     {t:{en:"TikTok video 20",fa:"ویدیوی تیک‌تاک ۲۰"},m:{en:"16s, 9:16",fa:"۱۶ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-20.mp4",poster:"videos/tiktok-20.jpg",r:"9/16"},
     {t:{en:"TikTok video 21",fa:"ویدیوی تیک‌تاک ۲۱"},m:{en:"17s, 9:16",fa:"۱۷ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-21.mp4",poster:"videos/tiktok-21.jpg",r:"9/16"},
     {t:{en:"TikTok video 22",fa:"ویدیوی تیک‌تاک ۲۲"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-22.mp4",poster:"videos/tiktok-22.jpg",r:"9/16"},
     {t:{en:"TikTok video 23",fa:"ویدیوی تیک‌تاک ۲۳"},m:{en:"15s, 9:16",fa:"۱۵ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-23.mp4",poster:"videos/tiktok-23.jpg",r:"9/16"},
     {t:{en:"TikTok video 24",fa:"ویدیوی تیک‌تاک ۲۴"},m:{en:"14s, 9:16",fa:"۱۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-24.mp4",poster:"videos/tiktok-24.jpg",r:"9/16"},
     {t:{en:"TikTok video 25",fa:"ویدیوی تیک‌تاک ۲۵"},m:{en:"18s, 9:16",fa:"۱۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-25.mp4",poster:"videos/tiktok-25.jpg",r:"9/16"},
     {t:{en:"TikTok video 26",fa:"ویدیوی تیک‌تاک ۲۶"},m:{en:"14s, 9:16",fa:"۱۴ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-26.mp4",poster:"videos/tiktok-26.jpg",r:"9/16"},
     {t:{en:"TikTok video 27",fa:"ویدیوی تیک‌تاک ۲۷"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-27.mp4",poster:"videos/tiktok-27.jpg",r:"9/16"},
     {t:{en:"TikTok video 28",fa:"ویدیوی تیک‌تاک ۲۸"},m:{en:"11s, 9:16",fa:"۱۱ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-28.mp4",poster:"videos/tiktok-28.jpg",r:"9/16"},
     {t:{en:"TikTok video 29",fa:"ویدیوی تیک‌تاک ۲۹"},m:{en:"28s, 9:16",fa:"۲۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-29.mp4",poster:"videos/tiktok-29.jpg",r:"9/16"},
     {t:{en:"TikTok video 30",fa:"ویدیوی تیک‌تاک ۳۰"},m:{en:"8s, 9:16",fa:"۸ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-30.mp4",poster:"videos/tiktok-30.jpg",r:"9/16"},
     {t:{en:"TikTok video 31",fa:"ویدیوی تیک‌تاک ۳۱"},m:{en:"12s, 9:16",fa:"۱۲ ثانیه، ۹:۱۶"},src:"https://artanourii.github.io/arta-videos-4/tiktok-31.mp4",poster:"videos/tiktok-31.jpg",r:"9/16"}]}
];

/* ---------- copy ---------- */
const TX = {
 en:{dir:"ltr",other:"فارسی",otherSmall:"Change language",studio:"ARTA NOORI STUDIO",line:"Ad films built on ideas, editing and VFX",
  scroll:"Scroll to walk in",swipe:"Swipe up to walk in",wa:"WhatsApp",ig:"Instagram",arch:"ARTA STUDIO",archSub:"Concept, edit, VFX and AI video, under one roof",
  open:"Open",studios:"The studios",studiosSub:"Pick a door and walk in",enter:"Enter",films:n=>n===1?"1 film":n+" films",
  endH:"Your brand could have the next studio",endSub:"Write to me, the next door is yours",back:"Hallway",prev:"Previous studio",next:"Next studio",
  rhint:"Scroll or use the arrows to go from film to film, tap any film to fly to it",
  playTap:"Tap the film to play it full screen",playClick:"Click the film to play it full screen",prevFilm:"Previous film",nextFilm:"Next film",soon:"This film is on its way",close:"Close",
  stops:{entrance:"Entrance",arta:"Arta Studio",hall:"Studios",end:"Contact"},
  panels:[
   {id:"about",k:"01",h:"About",p:"Who's behind the work",
    body:`<h2>Arta Noori</h2><p>I'm a Video Editor, VFX Artist and Content Creator, passionate about turning ideas into visually engaging stories</p><p>My expertise lies in high-impact commercial videos, seamless visual effects, cinematic edits, AI-powered content and creative loop videos that capture attention and leave a lasting impression. I enjoy solving creative challenges through editing, compositing, motion design and visual storytelling</p><p>From concept development to final delivery, I focus on content that is not only visually impressive but also communicates a brand's message. Every project is a chance to combine creativity, technical precision and attention to detail</p><p>I'm always excited to collaborate with brands, agencies and creative teams looking for distinctive, high-quality visual content. Let's create visuals that people remember</p>`},
   {id:"resume",k:"02",h:"Résumé",p:"Experience and brands",
    body:`<h2>Résumé</h2><ul><li>Freelance Videographer &amp; Editor<small>Oct 2021 to present · Tehran · Hybrid. Video creator, VFX artist, videographer, AI video creator. Clients include Asus Iran, Aparat, Respina, Hamrahe Aval, Snapp and more</small></li><li>Head of VFX &amp; Content Production, Vidabyte<small>Sep 2024 to Feb 2026 · Tehran · On-site. Concept developer and lead After Effects specialist: creative video built on seamless transitions, visual illusions and cinematic effects, from idea to final delivery, for social media, advertising and branded content. Led a small VFX team</small></li><li>Video creator, Vidabyte<small>Sep 2024 to Jul 2025 · Hybrid. Videographer and editor for various clients and businesses</small></li><li>Education<small>B.Sc. Computer Hardware Engineering · M.Sc. Industrial Management</small></li></ul>`},
   {id:"skills",k:"03",h:"Skills",p:"Tools and craft",
    body:`<h2>Skills</h2><ul><li>Video Editing</li><li>Visual Effects (VFX) &amp; Compositing</li><li>AI Video Creation<small>Seedance, Kling, Google Gemini, Higgsfield</small></li><li>Motion Graphics<small>After Effects</small></li><li>Commercial &amp; Brand Content</li><li>Creative Visual Storytelling</li><li>Seamless Loop Videos</li><li>Tools<small>Adobe Premiere Pro, After Effects, Photoshop</small></li></ul>`},
   {id:"services",k:"04",h:"Services",p:"What you can hire me for",
    body:`<h2>Services</h2><ul><li>Ad concept and creative direction</li><li>Product hero videos</li><li>Single-take transformation films</li><li>Logo reveals and 3D brand intros</li><li>AI video production</li><li>Reels editing for Instagram and LinkedIn</li></ul>`},
   {id:"clients",k:"05",h:"Clients",p:"Brands I've worked with",
    body:`<h2>Clients</h2><ul><li>Asus Iran</li><li>Aparat</li><li>Respina</li><li>Hamrahe Aval</li><li>Snapp</li><li>Azkivam</li><li>Analiz Fix</li><li>Emarat Zarrin</li><li>Farmanieh Club</li><li>Dicardo</li><li>Mahan Net</li><li>Niro Motor</li><li>IT Mall</li><li>Dream Salon</li><li>Your brand<small>Next door is empty</small></li></ul>`}
  ]},
 fa:{dir:"rtl",other:"English",otherSmall:"تغییر زبان",studio:"ARTA NOORI STUDIO",line:"تیزرهای تبلیغاتی که روی ایده، تدوین و VFX ساخته می‌شن",
  scroll:"اسکرول کن و وارد شو",swipe:"انگشتت رو بکش بالا تا وارد شی",wa:"واتس‌اپ",ig:"اینستاگرام",arch:"ARTA STUDIO",archSub:"ایده، تدوین، VFX و ویدیوی AI، زیر یک سقف",
  open:"باز کن",studios:"استودیوها",studiosSub:"یه در رو انتخاب کن و برو تو",enter:"ورود",films:n=>n.toLocaleString("fa")+" فیلم",
  endH:"استودیوی بعدی می‌تونه مال برند تو باشه",endSub:"بهم پیام بده، در بعدی مال توئه",back:"راهرو",prev:"استودیوی قبلی",next:"استودیوی بعدی",
  rhint:"اسکرول کن یا با فلش‌ها از فیلمی به فیلم دیگه برو، روی هر فیلم بزن تا دوربین بره سراغش",
  playTap:"روی ویدیو بزن تا تمام‌صفحه پخش شه",playClick:"روی ویدیو کلیک کن تا تمام‌صفحه پخش شه",prevFilm:"فیلم قبلی",nextFilm:"فیلم بعدی",soon:"این فیلم به‌زودی اضافه می‌شه",close:"بستن",
  stops:{entrance:"ورودی",arta:"استودیو آرتا",hall:"استودیوها",end:"تماس"},
  panels:[
   {id:"about",k:"۰۱",h:"درباره من",p:"کی پشت این کارهاست",
    body:`<h2>آرتا نوری</h2><p>تدوینگر، هنرمند جلوه‌های ویژه (VFX) و تولیدکننده‌ی محتوا هستم و عاشق اینم که ایده‌ها رو به داستان‌های تصویری جذاب تبدیل کنم</p><p>تخصصم ساخت ویدیوهای تبلیغاتی پرتأثیر، جلوه‌های ویژه‌ی بی‌نقص، تدوین سینمایی، محتوای ساخته‌شده با هوش مصنوعی و ویدیوهای لوپ خلاقانه‌ست؛ کارهایی که نگاه رو نگه می‌دارن و در ذهن می‌مونن. از حل چالش‌های خلاق با تدوین، کامپوزیت، موشن‌دیزاین و قصه‌گویی تصویری لذت می‌برم</p><p>از ایده تا تحویل نهایی، تمرکزم روی محتواییه که هم از نظر تصویری چشمگیر باشه و هم پیام برند رو درست برسونه. هر پروژه برام فرصتیه برای ترکیب خلاقیت، دقت فنی و توجه به جزئیات</p><p>همیشه از همکاری با برندها، آژانس‌ها و تیم‌های خلاقی که دنبال محتوای تصویری متمایز و باکیفیت‌ان استقبال می‌کنم. بیا تصویرهایی بسازیم که در یاد بمونن</p>`},
   {id:"resume",k:"۰۲",h:"رزومه",p:"سوابق و برندها",
    body:`<h2>رزومه</h2><ul><li>فیلمبردار و تدوینگر آزاد<small>از مهر ۱۴۰۰ (اکتبر ۲۰۲۱) تا امروز · تهران · ترکیبی. سازنده‌ی ویدیو، هنرمند VFX، فیلمبردار و سازنده‌ی ویدیو با هوش مصنوعی. همکاری با ایسوس ایران، آپارات، رسپینا، همراه اول، اسنپ و برندهای دیگر</small></li><li>مدیر VFX و تولید محتوا، ویدابایت<small>شهریور ۱۴۰۳ تا بهمن ۱۴۰۴ · تهران · حضوری. ایده‌پرداز و متخصص ارشد افترافکت: تولید ویدیوهای خلاق با تمرکز بر ترنزیشن‌های بی‌نقص، خطاهای دید و جلوه‌های سینمایی، از ایده تا تحویل نهایی، برای شبکه‌های اجتماعی، تبلیغات و محتوای برند. سرپرستی یک تیم کوچک VFX</small></li><li>سازنده‌ی ویدیو، ویدابایت<small>شهریور ۱۴۰۳ تا تیر ۱۴۰۴ · ترکیبی. فیلمبرداری و تدوین برای مشتریان و کسب‌وکارهای مختلف</small></li><li>تحصیلات<small>کارشناسی مهندسی کامپیوتر (سخت‌افزار) · کارشناسی ارشد مدیریت صنعتی</small></li></ul>`},
   {id:"skills",k:"۰۳",h:"مهارت‌ها",p:"ابزار و تخصص",
    body:`<h2>مهارت‌ها</h2><ul><li>تدوین ویدیو</li><li>جلوه‌های ویژه (VFX) و کامپوزیت</li><li>ساخت ویدیو با هوش مصنوعی<small>Seedance، Kling، Google Gemini، Higgsfield</small></li><li>موشن‌گرافیک<small>افترافکت</small></li><li>محتوای تبلیغاتی و برند</li><li>قصه‌گویی تصویری خلاق</li><li>ویدیوهای لوپ بی‌نقص</li><li>ابزارها<small>Adobe Premiere Pro، After Effects، Photoshop</small></li></ul>`},
   {id:"services",k:"۰۴",h:"خدمات",p:"برای چه کارهایی می‌تونی منو بیاری",
    body:`<h2>خدمات</h2><ul><li>ایده‌پردازی و کارگردانی خلاق تبلیغات</li><li>ویدیوی قهرمانِ محصول</li><li>فیلم تحول تک‌برداشت</li><li>رونمایی لوگو و اینترو سه‌بعدی برند</li><li>تولید ویدیو با هوش مصنوعی</li><li>تدوین ریل برای اینستاگرام و لینکدین</li></ul>`},
   {id:"clients",k:"۰۵",h:"مشتری‌ها",p:"برندهایی که باهاشون کار کردم",
    body:`<h2>مشتری‌ها</h2><ul><li>ایسوس ایران</li><li>آپارات</li><li>داده پردازی رسپینا</li><li>همراه اول</li><li>اسنپ</li><li>از کی وام</li><li>آنالیز فیکس</li><li>امارت زرین</li><li>باشگاه فرمانیه</li><li>دیکاردو</li><li>ماهان نت</li><li>نیرو موتور</li><li>آی تی مال</li><li>دریم سالن</li><li>برند تو<small>در بعدی خالیه</small></li></ul>`}
  ]}
};
