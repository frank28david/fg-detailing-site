## Goal
Update the services with the prices you provided, replace AI imagery with your real client photos, swap the logo to your red origami crane, and use your MP4 as the hero background video.

## Pricing update (`src/routes/services.tsx`)
Restructure to 6 packages with your prices:

1. **Full Interior Detailing** — **$120** — deep vacuum, leather/upholstery, steam sanitization, dash & trim
2. **Full Exterior Detailing** — **$120** — foam hand wash, wheels & tires, clay treatment, wax, windows
3. **Full Detailing (Interior + Exterior)** — **$200** *(Most Popular)* — everything above combined
4. **Paint Correction** — **From $699** — 1–2 stage polish, swirl/scratch removal, gloss enhancement
5. **Ceramic Coating** — **From $699** — paint decontamination, prep polish, ceramic application
6. **Engine Bay Detail** — **$120** — safe degrease, brushing, rinse, plastic/rubber dressing

Add a small note: "Final quote on exotics, oversized SUVs and trucks may vary — call for an exact estimate." Also update the home page service cards and pricing references.

## Assets to import
Copy from uploads into `src/assets/`:
- `Park-Miller_Nuptials.PNG` → `logo-crane.png` (red origami crane — replace Sparkles icon in `Header.tsx` and `Footer.tsx`)
- `4d678a75…jpg` → `gallery-aston-exterior.jpg`
- `7be2f5f5…jpg` → `gallery-aston-interior.jpg`
- `IMG_0203.jpg` → `gallery-lambo.jpg`
- `IMG_0211.jpg` → `gallery-porsche.jpg`
- `IMG_0514.jpg` → `gallery-ferrari-f8.jpg`
- `IMG_2801.jpg` → `gallery-shop-lineup.jpg`
- `IMG_9296.jpg` → `gallery-sf90.jpg`
- `IMG_3936.JPEG` → `gallery-bmw.jpg`

Copy `Diseño_sin_título_5.mp4` → `public/hero.mp4` (kept in /public so it streams as a static asset, not bundled).

## Hero (home page)
Replace the static AI hero image with the MP4 as an autoplay/muted/loop/playsinline background video, dark gradient overlay preserved. Fallback poster = `gallery-aston-exterior.jpg`.

## Real photo gallery
- Home: swap the 3 service cards' AI images for `gallery-aston-interior.jpg` (Interior), `gallery-aston-exterior.jpg` (Exterior), `gallery-ferrari-f8.jpg` (Ceramic). Replace the "Why FG" side image with `gallery-shop-lineup.jpg`.
- New `/gallery` route OR add a "Recent Work" grid section on home with all 8 photos in a responsive masonry-style grid, lightbox optional (keep simple grid for now). Add link in header nav.
- About page: add `gallery-shop-lineup.jpg` as section image.

## Logo
Replace the gradient Sparkles tile in `Header.tsx` and `Footer.tsx` with the red crane PNG (h-9 w-9, `object-contain`). Keep "FG Car Wash / Mobile Detailing" text. Update favicon meta in `__root.tsx` to the crane.

## Files touched
- `src/routes/services.tsx` (prices + restructure)
- `src/routes/index.tsx` (video hero, real photos, gallery section, updated price hints)
- `src/components/Header.tsx`, `src/components/Footer.tsx` (logo)
- `src/routes/about.tsx` (real photo)
- New: `src/routes/gallery.tsx` (optional — confirm below)
- `src/assets/*` (new images), `public/hero.mp4`

## Confirm before I build
1. Add a **dedicated `/gallery` page** in the nav, or just a "Recent Work" section on the home page?
2. Ceramic coating: keep as single "From $699", or split into 1yr / 3yr / 5yr tiers? (You can answer later.)
