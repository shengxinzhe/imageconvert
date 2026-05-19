export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readMinutes: number;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-heic-file",
    title: "What Is a HEIC File? Complete Guide (2026)",
    description:
      "Learn what HEIC files are, why iPhones use them, and how to open or convert HEIC on Windows and Mac.",
    publishedAt: "2026-01-15",
    readMinutes: 8,
    content: `HEIC (High Efficiency Image Container) is Apple's default photo format on modern iPhones. It uses advanced compression to store photos at roughly half the size of JPEG with similar visual quality.

## Why does Apple use HEIC?

Storage on phones is precious. HEIC keeps more photos on device and in iCloud while maintaining detail. Apple has pushed the format since iOS 11.

## Can Windows open HEIC?

Windows 10/11 can open HEIC with optional codecs from the Microsoft Store. Many users skip that and convert to JPG instead for universal compatibility.

## How to convert HEIC

Use a browser-based converter that processes files locally—no upload required. Our [HEIC to JPG](/heic-to-jpg) tool converts up to five images per batch for free.

## HEIC vs JPG

| | HEIC | JPG |
|---|---|---|
| Size | Smaller | Larger |
| Compatibility | Apple-first | Universal |
| Best for | iPhone storage | Sharing everywhere |

When you need to email photos to family or upload to a legacy portal, JPG remains the safe choice.`,
  },
  {
    slug: "why-iphone-uses-heic",
    title: "Why iPhone Uses HEIC Instead of JPG",
    description:
      "Apple switched to HEIC for storage efficiency. Here's what that means for sharing and compatibility.",
    publishedAt: "2026-01-18",
    readMinutes: 6,
    content: `Since iOS 11, the iPhone camera saves photos as HEIC by default. Apple chose efficiency: you fit more photos on your phone and use less iCloud bandwidth.

## The sharing problem

Recipients on Windows or older Android devices may not open HEIC without extra software. That's why conversion tools are in high demand.

## Switch to JPG on iPhone

Settings → Camera → Formats → **Most Compatible** forces new photos to JPEG. Existing HEIC files still need conversion.

## Convert existing HEIC

Try our free [HEIC to JPG converter](/heic-to-jpg)—private, browser-based, no account.`,
  },
  {
    slug: "heic-vs-jpg",
    title: "HEIC vs JPG: Quality, Size, and When to Use Each",
    description:
      "Compare HEIC and JPG for quality, file size, and compatibility in 2026.",
    publishedAt: "2026-01-22",
    readMinutes: 7,
    content: `Both formats store photos, but they target different goals.

## File size

HEIC typically wins at the same perceived quality—often ~50% smaller than JPG.

## Compatibility

JPG works everywhere: email, print shops, government portals, and 20-year-old software. HEIC needs modern support.

## Quality

At high bitrates both look excellent. Converting HEIC→JPG at 90% quality is fine for social and documents.

## Recommendation

- **Keep HEIC** on iPhone for storage.
- **Convert to JPG** when sharing outside Apple's ecosystem.
- Use [HEIC to PNG](/heic-to-png) when you need lossless PNG workflows.`,
  },
  {
    slug: "heic-windows-guide",
    title: "How to Open and Convert HEIC on Windows (2026 Guide)",
    description:
      "Step-by-step: open HEIC on Windows 10/11 without codecs, or convert to JPG online.",
    publishedAt: "2026-02-01",
    readMinutes: 9,
    content: `Windows users receive HEIC files from iPhone users daily. Here's how to handle them.

## Option 1: Install HEIC codecs

Microsoft Store offers "HEIF Image Extensions" and "HEVC Video Extensions" (paid on some systems). After install, Photos may open HEIC.

## Option 2: Convert online (no install)

1. Open [HEIC to JPG](/heic-to-jpg) in Chrome or Edge.
2. Drag .heic files into the drop zone.
3. Download JPG files.

Conversion runs in your browser—nothing uploads to a server.

## Batch conversion

Convert up to 5 files per batch (10 MB each). Repeat for larger folders.

## Troubleshooting

- **Photos app spins forever** — codecs missing; use browser conversion.
- **Email won't attach HEIC** — convert to JPG first.`,
  },
  {
    slug: "heic-mac-guide",
    title: "Convert HEIC to JPG on Mac — Preview vs Online Tools",
    description:
      "Use Preview for one-offs or a free online batch converter for speed.",
    publishedAt: "2026-02-05",
    readMinutes: 5,
    content: `Mac opens HEIC natively in Preview and Photos.

## Preview method

1. Open HEIC in Preview.
2. File → Export.
3. Choose JPEG, set quality, save.

Fine for one image; slow for dozens.

## Online batch tool

Use [HEIC to JPG](/heic-to-jpg) in Safari or Chrome for up to 5 files at once without exporting one-by-one.

## Privacy

Browser tools that process locally never send your photos to a third-party server—useful for client work under NDA.`,
  },
  {
    slug: "best-heic-converters-2026",
    title: "Best HEIC Converters in 2026 (Free & Private)",
    description:
      "Compare HEIC conversion options: desktop apps, cloud uploaders, and browser-local tools.",
    publishedAt: "2026-02-10",
    readMinutes: 10,
    content: `Choosing a HEIC converter depends on privacy, batch size, and install tolerance.

## Browser-local (recommended)

**HeicSave** — [HEIC to JPG](/heic-to-jpg), no upload, GDPR-friendly, free tier 5×10MB.

## Desktop

- **iMazing HEIC Converter** — free Mac/Windows, offline.
- **XnConvert** — power users, batch scripts.

## Cloud upload (caution)

Sites that upload photos to servers may violate privacy policies for medical or legal images. Read privacy policies.

## Our pick

For quick, private conversion without installs, use browser-local tools first.`,
  },
  {
    slug: "avif-explained",
    title: "AVIF Explained: The Next-Gen Image Format for the Web",
    description:
      "What AVIF is, browser support, and when to convert AVIF to JPG or PNG.",
    publishedAt: "2026-02-15",
    readMinutes: 8,
    content: `AVIF is based on AV1 video compression and delivers excellent quality at small file sizes.

## Who uses AVIF?

CDNs, WordPress plugins, and performance-focused sites serve AVIF with JPG fallbacks.

## Browser support

Major browsers decode AVIF. Desktop apps often don't—hence [AVIF to JPG](/avif-to-jpg) demand.

## Convert when needed

- **AVIF → JPG** for universal sharing.
- **AVIF → PNG** for design pipelines.

## Future

As AVIF support spreads, converters remain a bridge format—similar to HEIC today.`,
  },
  {
    slug: "webp-vs-jpg",
    title: "WebP vs JPG: Which Format Should You Use in 2026?",
    description:
      "Compare WebP and JPG for websites, email, and storage. Plus free conversion tools.",
    publishedAt: "2026-02-20",
    readMinutes: 7,
    content: `WebP is Google's modern image format for the web; JPG is the universal photo standard.

## Size

WebP is often 25–35% smaller than JPG at similar quality.

## Compatibility

JPG wins for email and legacy apps. WebP wins on modern websites with fallbacks.

## Conversion tools

- [JPG to WebP](/jpg-to-webp) — optimize for your site.
- [WebP to JPG](/webp-to-jpg) — share with anyone.

## Best practice

Serve WebP with <picture> and JPG fallback. Keep masters in JPG or RAW.`,
  },
  {
    slug: "webp-for-developers",
    title: "WebP for Developers: Encode, Decode, and Convert",
    description:
      "Practical WebP guide for frontend devs: convert PNG/JPG to WebP and back.",
    publishedAt: "2026-02-25",
    readMinutes: 6,
    content: `Developers adopt WebP for Lighthouse scores and bandwidth savings.

## Encode locally

Before CI, run [PNG to WebP](/png-to-webp) or [JPG to WebP](/jpg-to-webp) on marketing assets.

## Decode for stakeholders

[WebP to PNG](/webp-to-png) when design needs PNG in Figma handoffs.

## Canvas API

Modern browsers encode WebP via canvas.toBlob—our tool wraps that client-side.

## Don't forget fallbacks

Always ship JPG/PNG fallbacks for email clients and ancient browsers.`,
  },
  {
    slug: "privacy-browser-image-conversion",
    title: "Why Browser-Local Image Conversion Matters for Privacy",
    description:
      "GDPR, client photos, and why files should stay on-device when converting HEIC and AVIF.",
    publishedAt: "2026-03-01",
    readMinutes: 5,
    content: `Uploading family photos or client assets to random converters creates GDPR and security risk.

## Client-side processing

Tools that use WebAssembly (HEIC) or Canvas (WebP/AVIF) keep bytes on your device.

## GDPR

EU users expect consent for cookies and clarity on data processing. We don't process image content on servers.

## What we collect

Analytics (with consent) and standard server logs—not your image files.

## Try it

[HEIC to JPG](/heic-to-jpg) · [AVIF to PNG](/avif-to-png) · [WebP to JPG](/webp-to-jpg)`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
