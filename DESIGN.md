# Design System — Vercel (from awesome-design-md)

Source: [VoltAgent/awesome-design-md/design-md/vercel](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/vercel)

This project uses the Vercel-inspired DESIGN.md tokens for UI consistency.

## Core tokens

- **Ink / Primary:** `#171717`
- **Body:** `#4d4d4d` · **Mute:** `#888888`
- **Hairline:** `#ebebeb` · **Canvas:** `#ffffff` · **Canvas soft:** `#fafafa`
- **Link:** `#0070f3`
- **Buttons:** Pill shape (`border-radius: 9999px`), primary = ink fill + white text

## Typography

- **Sans:** Geist, Inter, system-ui
- **Mono:** Geist Mono (labels, technical badges)
- Display: tight negative letter-spacing (`-0.05em` at xl)

## Layout

- Max content width ~1152px (`max-w-6xl`)
- Nav height 64px, hairline bottom border
- Hero: mesh gradient band (cyan / blue / violet / amber at low opacity)

## Components

- Cards: `rounded-lg` (12px), hairline border, white or `#fafafa` fill
- Inputs / dropzone: hairline border, `rounded-md` (8px)
- No emerald accent — use ink + link blue only
