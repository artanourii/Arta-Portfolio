# Handoff: ARTA NOORI STUDIO

Notes for whoever continues this project (a person or a new Claude session).
یادداشت وضعیت پروژه برای ادامه‌ی کار در یک گفتگوی جدید.

**Talk to Arta in Persian (Farsi), always.** / با آرتا همیشه فارسی صحبت کن.

Branch: `claude/funny-johnson-xoghyu`. The site is static: `index.html`, `css/style.css`, `js/content.js` (all content), `js/app.js` (three.js r128 engine, bundled in `vendor/three/`). Test with `python3 -m http.server` and open http://localhost:8000.

## What the site does

- Entrance with the 3D AN logo; WhatsApp (+98 901 137 7877) and Instagram (@artanourii) chips; language switch (English default, Persian RTL); dark/light mode with the white/black logo files in `assets/`.
- Arta Studio: floating panels (about, résumé, skills, services, clients) and the logo film (`videos/logo-ad.mp4`, silent loop) in a 3D glass frame that rises into place after the camera passes through the lobby logo. Both own films are 3D frames (`buildFeatureFilms` in `js/app.js`), so solid objects hide them correctly.
- One continuous scroll path down a hall of 16 brand studios, in this order: Asus Iran, Aparat, Respina, Hamrahe Aval, Snapp, Azkivam, Analiz Fix, Emarat Zarrin, Farmanieh Club, Dicardo, Mahan Net, Niro Motor, IT Mall, Makeup, Dream Salon, My Tiktok Video. At each studio the camera turns, enters a tunnel of 3D glass frames (one per film), passes between them, faces the brand wall, cranes up and flies back out. Reverse scroll plays it backwards.
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

## Studios with many films

More than four films: frames sit in rows across the whole room (middle included), the camera stops 1.5 m in front of each one in turn, and the studio HUD has ‹ n / total › buttons (arrow keys too). Tapping a film further away flies the camera to it; tapping the film in front of you opens it full screen. A "Tap the film to play it full screen" hint shows whenever the camera is close to a film (studios, the logo film, the Instagram film). Only the 4 nearest films play (2 on phones).

## Status (end of day, Oct 6 2026)

- Videos in: your two films (logo film, Instagram film), Respina (2), Asus Iran (24: asus-1 to asus-24 in `videos/`, titles in `js/content.js`).
- Still to come: videos for Aparat, Hamrahe Aval, Snapp, Azkivam, Analiz Fix, Emarat Zarrin, Farmanieh Club, Dicardo, Mahan Net, Niro Motor, IT Mall, Beauty Video, My Tiktok Video (and any more Asus films).
- Video workflow: Arta sends files in chat (≤30 MB) or via GitHub Desktop into `videos/` on this branch (≤100 MB). Convert every upload to H.264 (`-preset slow -crf 19 -maxrate 9M`, two-pass to ~14 MB when larger), make a poster `.jpg`, add `{t,m,src,poster,r}` to the studio in `js/content.js`. Remove raw uploads from `videos/`.
- Site video total is about 320 MB; GitHub Pages allows about 1 GB.
- The claude.ai preview holds at most 256 MB, so it only carries some of the Asus films (the rest show their cover there).
- Optional from Arta: Services text, project count, a larger Mahan Net logo.
- Last step: merge to `main` and switch on GitHub Pages.


## Video hosting
The films are stored at their original quality in five public repos served by GitHub Pages, so the site itself stays small:
arta-videos-1 … arta-videos-5 (https://artanourii.github.io/arta-videos-N/<file>.mp4). Repos 1–4 hold the current 131 films
(~0.9 GB each at most); arta-videos-5 is free for new films. Every "src" in js/content.js points to its file there; posters
(*.jpg) stay in this repo's videos/ folder. GitHub Pages sends CORS headers, so the films can be drawn on the 3D walls
(the video elements use crossOrigin="anonymous"). Originals that were HEVC were converted to H.264 at visually lossless
quality, since most browsers cannot play HEVC; all other files are the uploads unchanged (only the index moved to the front).
