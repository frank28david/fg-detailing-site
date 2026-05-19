
# SEO + AI Visibility Implementation Plan

Using your confirmed info:
- **Domain**: https://www.fgcarwash.com
- **Service area**: Broward, Miami-Dade, Monroe County
- **Hours**: 24/7
- **Email**: fgcarwash28@gmail.com
- **GBP name**: FG Car Wash Mobile Detailing
- **Social**: Instagram + Yelp links

## Part 1 — Per-page SEO metadata

Add unique `title`, `description`, `og:title`, `og:description`, `og:url`, `og:image`, and canonical `<link>` to each route's `head()`:
- `/` — "FG Car Wash Mobile Detailing — 24/7 Mobile Detailing in Miami, Broward & Keys"
- `/services` (already partial — refine)
- `/about`
- `/gallery`
- `/reviews`
- `/contact`
- `/faq` (already has good meta — refine canonical/og:url only)

OG images: wire each route's existing hero/gallery image as absolute URL.

## Part 2 — Sitewide root metadata (`__root.tsx`)

Replace generic "Lovable App" defaults with:
- Default title/description for FG
- `og:site_name` = "FG Car Wash Mobile Detailing"
- Favicon → red origami crane (already imported)
- Sitewide **LocalBusiness / AutoDetailing JSON-LD** with:
  - name, phone (786) 258-2326, email, URL, logo
  - `areaServed`: Broward County, Miami-Dade County, Monroe County (3 GeoCircle / AdministrativeArea entries)
  - `openingHoursSpecification`: Mo–Su 00:00–23:59
  - `sameAs`: Instagram + Yelp URLs
  - `priceRange`: "$$"

## Part 3 — Per-page structured data

- `/services` — **Service** schema for each of the 6 packages (name, price, provider)
- `/faq` — already has FAQPage JSON-LD ✓
- `/reviews` — **Review** + aggregateRating schema (using existing on-page reviews)
- `/gallery` — **ImageGallery** schema
- All inner pages — **BreadcrumbList**

## Part 4 — Sitemap + robots

- New `src/routes/sitemap[.]xml.ts` server route listing all 7 routes with `BASE_URL = "https://www.fgcarwash.com"`
- New `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  User-agent: GPTBot
  Allow: /
  User-agent: ClaudeBot
  Allow: /
  User-agent: PerplexityBot
  Allow: /
  User-agent: Google-Extended
  Allow: /
  Sitemap: https://www.fgcarwash.com/sitemap.xml
  ```

## Part 5 — On-page content tweaks for AI extractability

- **Services page**: convert pricing to a real `<table>` (AI assistants quote tables verbatim) + add "Service Areas" block listing all 3 counties + key cities (Pinecrest, Coral Gables, Brickell, Fort Lauderdale, Hollywood, Key Largo, etc.)
- **FAQ page**: add 3 county-specific Qs ("Do you serve Fort Lauderdale?", "Do you serve the Keys?", "What's your travel fee outside Miami-Dade?")
- **Home page**: add a one-line "Serving Miami-Dade, Broward & Monroe County — 24/7 mobile service" near the hero
- **Footer**: add NAP block (Name, service area, phone, email, hours) + Instagram/Yelp icon links — this is what crawlers and AI assistants scrape for business identity
- **Image alt text**: rewrite all 8 gallery `alt` attributes to be descriptive ("Ferrari F8 after ceramic coating in Miami", etc.) instead of generic

## Part 6 — What YOU need to do after I deploy (off-site)

I can't do these — they're external accounts:

1. **Google Business Profile** — log in, set hours to 24/7, add service areas (Broward + Miami-Dade + Monroe), upload 8–10 photos from your gallery, add all 6 services with prices, and **ask every happy customer for a Google review with the word "Miami" or "Pinecrest" in it**. This is the #1 ranking factor for local + AI search.
2. **Yelp profile** — same: add service areas, photos, hours, services.
3. **Instagram bio** — add www.fgcarwash.com link + "Mobile detailing Miami-Dade · Broward · Keys · 24/7"
4. **Get listed on**: Nextdoor, Thumbtack, Angi, BBB (free), Apple Maps, Bing Places. These feed AI assistants.
5. **Vercel/Hostinger DNS check** — confirm `www.fgcarwash.com` redirects to one canonical version (either `www` or non-`www`, not both — duplicate content penalty). I'll set canonical tags to `www.` per your answer.

## Files touched

- `src/routes/__root.tsx` — full meta rewrite + LocalBusiness JSON-LD
- `src/routes/index.tsx` — head() + service-area line
- `src/routes/services.tsx` — head() refine + `<table>` pricing + Service schema + service areas
- `src/routes/about.tsx` — head() + BreadcrumbList
- `src/routes/gallery.tsx` — head() + ImageGallery schema + alt text
- `src/routes/reviews.tsx` — head() + Review schema
- `src/routes/contact.tsx` — head()
- `src/routes/faq.tsx` — canonical/og:url + 3 new Qs
- `src/components/Footer.tsx` — NAP block + social icons
- **New**: `src/routes/sitemap[.]xml.ts`
- **New**: `public/robots.txt`

## What I will NOT touch

- Pricing, services, brand visuals, layout
- The video hero or any imagery
- Any business logic

---

Reply **"go"** and I'll implement everything in one pass.
