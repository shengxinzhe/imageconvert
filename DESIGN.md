# Design System — Layered (awesome-design-md)

Base tokens: **Vercel** ([design-md/vercel](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/vercel))  
Implementation: `src/lib/design-variants.ts` + `src/app/globals.css`

## Audience layers

| Traffic | Style source | Routes | Visual cues |
|---------|--------------|--------|-------------|
| HEIC / iPhone | Apple-adjacent on Vercel base | `/heic-to-jpg`, `/heic-to-png`, home hero | `#fbfbfb` hero, spacious, ink CTAs, rounded-2xl cards |
| WebP / AVIF / dev | Linear-adjacent on Vercel base | `/webp-*`, `/avif-*`, `/jpg-to-webp`, `/png-to-webp` | Purple `#5e6ad2`, mono format labels, mesh hero |
| Blog / SEO | Mintlify-adjacent typography | `/blog/*` | Green links `#0d9373`, line-height 1.75, section dividers |
| Ads | Cal/Vercel partitions | `content-band`, sidebar | Hairline borders, soft bands between sections |

## Shared tokens (do not fork per page)

- Ink `#171717`, Body `#4d4d4d`, Hairline `#ebebeb`, Canvas `#ffffff`
- Geist Sans + Geist Mono
- Pill primary button = ink (HEIC) or purple (developer tools)

## Changing a layer

Edit `audienceStyles` in `src/lib/design-variants.ts`. To swap a whole brand (e.g. Linear → Resend), replace the `developer` entry with tokens from another `DESIGN.md` in awesome-design-md.
