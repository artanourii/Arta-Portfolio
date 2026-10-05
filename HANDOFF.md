# Handoff: ARTA NOORI STUDIO

Notes for whoever continues this project (a person or a new Claude session).
یادداشت وضعیت پروژه برای ادامه‌ی کار در یک گفتگوی جدید.

**Talk to Arta in Persian (Farsi), always.** / با آرتا همیشه فارسی صحبت کن.

Branch: `claude/funny-johnson-xoghyu`. The site is static: `index.html`, `css/style.css`, `js/content.js` (all content), `js/app.js` (three.js r128 engine, bundled in `vendor/three/`). Test with `python3 -m http.server` and open http://localhost:8000.

## What the site does

- Entrance with the 3D AN logo; WhatsApp (+98 901 137 7877) and Instagram (@artanourii) chips; language switch (English default, Persian RTL); dark/light mode with the white/black logo files in `assets/`.
- Arta Studio: floating panels (about, résumé, skills, services, clients) and the logo film (`videos/logo-ad.mp4`, silent loop).
- One continuous scroll path down a hall of 15 brand studios, in this order: Asus Iran, Aparat, Respina, Hamrahe Aval, Snapp, Azkivam, Analiz Fix, Emarate Zarin, Farmaniyeh Club, Dicardo, Mahan Net, Niro Motor, IT Mall, Makeup & Beauty, My Tiktok Video. At each studio the camera turns, enters a tunnel of 3D glass frames (one per film), passes between them, faces the brand wall, cranes up and flies back out. Reverse scroll plays it backwards.
- Tapping a frame opens the film full screen with sound; Esc, ✕, reverse scroll or swipe down closes it.
- End of hall: LED wall with the Instagram film (`videos/instagram-ad.mp4`), which plays with sound as the visitor walks up (muted with a "Tap for sound" label until the visitor has tapped or clicked once).

## Still open

1. **Brand logos and exact colors** for: Respina (respina.net), Hamrahe Aval (mci.ir), Azkivam (azkivam.com), Snapp (snapp.ir), Farmaniyeh Club (farmanieh.club), Dicardo (dicardo.com), Mahan Net (mahannet.ir), Niro Motor (niroomotorgroup.com), IT Mall (itmall.ir), Asus Iran (asusiran.com), plus Analiz Fix and Emarate Zarin (no websites; Arta will send logo images / Instagram pages). Aparat, ASUS and TikTok already use official logos and colors.
   These Iranian sites do not answer requests from the cloud sandbox, so either run a local session on Arta's computer or work from screenshots Arta sends.
   Put logos in `assets/brands/` and add `logoImg:"assets/brands/<name>.png"` to the studio in `js/content.js`; update its `c:` colors (bg, bg2 = set backdrop, ink = text, acc = accent light).
2. **Videos** for each studio: `videos/` + `src:"videos/<file>.mp4"` in `js/content.js`. Optional cover image: `poster:"videos/<file>.jpg"`.
3. **logo-ad.mp4 and instagram-ad.mp4**: not uploaded yet; ask whether they are vertical (9:16) or horizontal (frames are 9:16 now, `r` in `FEATURES`).
4. **Résumé info**: start year, number of projects, education (highlighted placeholders in the résumé panel).
5. Publishing: merge to `main`, then GitHub Pages from `main` / root.
