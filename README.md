# ARTA NOORI STUDIO

My portfolio site: a cinematic 3D film studio built with three.js. Scrolling moves the camera down a hallway of brand studios. Each studio holds its films in floating liquid-glass frames.

سایت نمونه‌کار من: یه استودیوی فیلمبرداری سه‌بعدی. با اسکرول، دوربین توی راهروی استودیوهای برندها جلو می‌ره و ویدیوهای هر برند توی قاب‌های liquid glass معلق‌ان.

- English by default, with a one-tap switch to Persian (RTL) / پیش‌فرض انگلیسی، با یه دکمه کل سایت فارسی و راست‌به‌چپ می‌شه
- Dark and light mode, following the device setting, plus a "Lights on / off" switch / حالت تیره و روشن
- Works on phone, tablet and desktop, and lowers quality automatically on slow devices / روی گوشی، تبلت و دسکتاپ

## Files / فایل‌ها

| Path | What it is |
| --- | --- |
| `index.html` | The page / صفحه‌ی اصلی |
| `js/content.js` | **Edit this one**: WhatsApp, Instagram, studios, videos, all English and Persian text / **فقط همین رو ویرایش کن**: تماس، استودیوها، ویدیوها و متن‌ها |
| `js/app.js` | 3D engine / موتور سه‌بعدی |
| `css/style.css` | Styles / استایل‌ها |
| `assets/logo-white.png`, `assets/logo-black.png` | Logo for dark mode and light mode / لوگو برای حالت تیره و روشن |
| `assets/brands/` | Brand logos for the studios / لوگوی برندها |
| `videos/` | Put your video files here / ویدیوها رو اینجا بذار |
| `vendor/three/` | three.js r128, bundled so the site doesn't depend on a CDN |

## Adding a video / اضافه کردن ویدیو

1. Copy the file into `videos/`, e.g. `videos/mixland-01.mp4`.
   فایل رو بذار توی پوشه‌ی `videos`.
2. In `js/content.js`, find the film and fill in `src`:
   توی `js/content.js` ویدیو رو پیدا کن و آدرسش رو توی `src` بنویس:

   ```js
   {t:{en:"Sour cherry pour",fa:"ریزش مربای آلبالو"}, ..., src:"videos/mixland-01.mp4", r:"9/16"}
   ```

   `r` is the frame shape: `"9/16"` vertical, `"16/9"` horizontal.
   If `src` is empty, the card shows "This film is on its way."

Tips / نکته‌ها:
- Use MP4 (H.264) so it plays on iPhone too. / فرمت MP4 با کدک H.264 تا روی آیفون هم پخش بشه.
- Keep each file under about 20 MB. GitHub rejects files over 100 MB. / هر فایل زیر ۲۰ مگابایت باشه. گیت‌هاب فایل بالای ۱۰۰ مگ رو قبول نمی‌کنه.
- A video hosted elsewhere also works: put its full URL in `src`. / لینک مستقیم ویدیو از جای دیگه هم کار می‌کنه.

## Your own two films / دو ویدیوی شخصی

Upload them to `videos/` with exactly these names / با همین اسم‌ها توی پوشه‌ی `videos` آپلود کن:

- `logo-ad.mp4`: logo film, plays silently on a loop in the middle of Arta Studio / تیزر لوگو، وسط استودیوی آرتا، بی‌صدا
- `instagram-ad.mp4`: Instagram film, plays with sound in front of the LED wall at the end of the hall; the sound rises as the visitor walks up / تیزر اینستاگرام، آخر راهرو، با صدا

Tapping either one opens it full screen with its own sound. Until a file is uploaded, its frame stays hidden. Settings are in `FEATURES` in `js/content.js`.
Browsers only allow sound after the visitor has tapped or clicked somewhere on the page; until then the film plays muted with a "Tap for sound" label.

## Publishing with GitHub Pages / انتشار

1. Merge this branch into `main`. / این برنچ رو با `main` ادغام کن.
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then pick `main` and `/ (root)` and save.
   توی گیت‌هاب: Settings ← Pages، شاخه‌ی `main` و پوشه‌ی `/ (root)` رو انتخاب کن و ذخیره کن.
3. After a minute the site is live at `https://artanourii.github.io/Arta-Portfolio/`.
   بعد از یکی دو دقیقه سایت روی این آدرس بالا میاد.

A custom domain can be added on the same Pages screen. / دامنه‌ی شخصی هم از همون صفحه اضافه می‌شه.

## Testing locally / اجرای محلی

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Still needed / هنوز لازمه

- Video files for each studio / ویدیوهای هر استودیو
- Logos for 12 brands (Aparat, ASUS and TikTok are done): save a transparent PNG or SVG in `assets/brands/` and add `logoImg:"assets/brands/name.png"` to that studio in `js/content.js` / لوگوی ۱۲ برند
- Exact brand colors for the studios marked "colors approximate" in `js/content.js` / کد رنگ دقیق برندها
- Real info in the highlighted résumé spots: start year, project count, education / اطلاعات هایلایت‌شده‌ی رزومه
