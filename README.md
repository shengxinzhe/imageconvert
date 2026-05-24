# HeicSave

Free browser-local image converters for HEIC, WebP, and AVIF. Production domain: [heicsave.com](https://heicsave.com). Built for Vercel deployment and Western SEO (US/EU).

## Stack

- Next.js 14 (App Router)
- Tailwind CSS + lightweight UI components
- `heic-to` (libheif WASM, lazy-loaded) + Canvas API (WebP/AVIF/JPEG/PNG)
- Vercel Analytics + `react-cookie-consent` (GDPR banner)

## Routes

| Path | Tool |
|------|------|
| `/heic-to-jpg` | HEIC → JPG |
| `/heic-to-png` | HEIC → PNG |
| `/heic-to-webp` | HEIC → WebP |
| `/webp-to-png` | WebP → PNG |
| `/webp-to-jpg` | WebP → JPG |
| `/avif-to-jpg` | AVIF → JPG |
| `/avif-to-png` | AVIF → PNG |
| `/jpg-to-webp` | JPG → WebP |
| `/png-to-webp` | PNG → WebP |

Plus `/about`, `/contact`, `/blog/*`, `/privacy`, `/terms`, `/dmca`.

## Develop

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Deploy (Vercel)

1. Import repo → set `NEXT_PUBLIC_SITE_URL` to your domain.
2. **Google AdSense only:** set `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-…` (from AdSense site setup). Do **not** enable `NEXT_PUBLIC_EZOIC_ENABLED`.
3. After approval: paste `ads.txt` line into `public/ads.txt`, add ad unit IDs to `NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR` and `NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT`.
4. Deploy. `postbuild` runs `next-sitemap`.
5. In Vercel → Settings → Domains, add `heicsave.com` and `www.heicsave.com`.

## Limits (V1)

- No fixed file-size or batch cap (browser memory is the practical limit)
- No server upload (privacy)

## License

Private — configure as needed.
