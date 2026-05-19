# ImageConvert

Free browser-local image converters for HEIC, WebP, and AVIF. Built for Vercel deployment and Western SEO (US/EU).

## Stack

- Next.js 14 (App Router)
- Tailwind CSS + lightweight UI components
- `heic2any` (HEIC) + Canvas API (WebP/AVIF/JPEG/PNG)
- Vercel Analytics + `react-cookie-consent` (GDPR banner)

## Routes

| Path | Tool |
|------|------|
| `/heic-to-jpg` | HEIC → JPG |
| `/heic-to-png` | HEIC → PNG |
| `/webp-to-png` | WebP → PNG |
| `/webp-to-jpg` | WebP → JPG |
| `/avif-to-jpg` | AVIF → JPG |
| `/avif-to-png` | AVIF → PNG |
| `/jpg-to-webp` | JPG → WebP |
| `/png-to-webp` | PNG → WebP |

Plus `/blog/*`, `/privacy`, `/terms`, `/dmca`.

## Develop

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Deploy (Vercel)

1. Import repo → set `NEXT_PUBLIC_SITE_URL` to your domain.
2. Deploy. `postbuild` runs `next-sitemap`.
3. Add AdSense / Cookiebot scripts in `src/components/ads/ad-slot.tsx` when approved.
4. Point domain (e.g. `imageconvert.io`) in Vercel DNS.

## Limits (V1)

- 10 MB per file
- 5 files per batch
- No server upload (privacy)

## License

Private — configure as needed.
