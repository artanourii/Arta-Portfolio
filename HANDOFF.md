# Handoff: ARTA NOORI STUDIO

Notes for whoever continues this project (a person or a new Claude session).
یادداشت وضعیت پروژه برای ادامه‌ی کار در یک گفتگوی جدید.

**Talk to Arta in Persian (Farsi), always.** / با آرتا همیشه فارسی صحبت کن.

Branch: `claude/funny-johnson-xoghyu`. The site is static: `index.html`, `css/style.css`, `js/content.js` (all content), `js/app.js` (three.js r128 engine, bundled in `vendor/three/`). Test with `python3 -m http.server` and open http://localhost:8000.

## What the site does

- Entrance with the 3D AN logo; WhatsApp (+98 901 137 7877) and Instagram (@artanourii) chips; language switch (English default, Persian RTL); dark/light mode with the white/black logo files in `assets/`.
- Arta Studio: floating panels (about, résumé, skills, services, clients) and the logo film (`videos/logo-ad.mp4`, silent loop) in a 3D glass frame that rises into place after the camera passes through the lobby logo. Both own films are 3D frames (`buildFeatureFilms` in `js/app.js`), so solid objects hide them correctly.
- One continuous scroll path down a hall of 15 brand studios, in this order: Asus Iran, Aparat, Respina, Hamrahe Aval, Snapp, Azkivam, Analiz Fix, Emarat Zarrin, Farmaniyeh Club, Dicardo, Mahan Net, Niro Motor, IT Mall, Makeup & Beauty, My Tiktok Video. At each studio the camera turns, enters a tunnel of 3D glass frames (one per film), passes between them, faces the brand wall, cranes up and flies back out. Reverse scroll plays it backwards.
- Tapping a frame opens the film full screen with sound; Esc, ✕, reverse scroll or swipe down closes it.
- End of hall: the Instagram film floats big in its own 3D glass frame (`videos/instagram-ad.mp4`), which plays with sound as the visitor walks up (muted with a "Tap for sound" label until the visitor has tapped or clicked once).

## Still open

1. **Brand logos**: done for all brands with websites (files and colour codes in `assets/brands/`, see `assets/brands/BRANDS.md`). Analiz Fix and Emarat Zarrin were cut from their Instagram logos. Put a logo in `assets/brands/` and add `logoImg:"assets/brands/<name>.png"` to the studio in `js/content.js`; update its `c:` colours (bg, bg2 = set backdrop, ink = text, acc = accent light). `logoTint:true` recolours a one-colour logo in the set's ink colour.
2. **Videos** for each studio: `videos/` + `src:"videos/<file>.mp4"` in `js/content.js`. Optional cover image: `poster:"videos/<file>.jpg"`.
3. **logo-ad.mp4 and instagram-ad.mp4**: done (both 9:16, converted from HEVC to H.264 1080×1920 with ffmpeg, about 14 MB each, posters `videos/*.jpg`). Always convert to H.264: HEVC does not play in every browser.
4. **Résumé**: filled in from LinkedIn (about, experience, skills, education).
5. Publishing: merge to `main`, then GitHub Pages from `main` / root.

## Liquid glass

3D glass (Arta Studio panels, the Studios heading, every film frame) is a real refraction shader (`liquidMat` / `renderBackdrop` in `js/app.js`): the scene is drawn once per frame without the glass into a small mipmapped texture, and each glass surface samples it at its own screen position, bending it like a lens toward the rim, with colour fringing, frost and a specular edge. It looks the same in light and dark mode; only the text colour changes. HTML glass (`.glass` in `css/style.css`) follows the same idea with `backdrop-filter`.
