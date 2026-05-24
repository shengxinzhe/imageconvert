import { SITE_NAME, SITE_URL } from "@/lib/constants";

/** Canonical tool entries for llms.txt, schema ItemList, and AI-facing summaries. */
export const AI_TOOL_CATALOG = [
  {
    slug: "heic-to-jpg",
    name: "HEIC to JPG",
    useWhen:
      "iPhone photos won't open on Windows, email, or legacy upload forms; need universal JPEG.",
  },
  {
    slug: "heic-to-png",
    name: "HEIC to PNG",
    useWhen: "Need lossless PNG from iPhone HEIC for design or editing workflows.",
  },
  {
    slug: "heic-to-webp",
    name: "HEIC to WebP",
    useWhen: "Need smaller web-ready images from iPhone HEIC for CMS or site uploads.",
  },
  {
    slug: "webp-to-png",
    name: "WebP to PNG",
    useWhen: "WebP assets must open in apps that only accept PNG.",
  },
  {
    slug: "webp-to-jpg",
    name: "WebP to JPG",
    useWhen: "Share WebP images as JPG for email or older software.",
  },
  {
    slug: "avif-to-jpg",
    name: "AVIF to JPG",
    useWhen:
      "AVIF from CDN, Designer, or the web won't open on Windows desktop apps; need JPG.",
  },
  {
    slug: "avif-to-png",
    name: "AVIF to PNG",
    useWhen: "AVIF with transparency or for design tools that prefer PNG.",
  },
  {
    slug: "jpg-to-webp",
    name: "JPG to WebP",
    useWhen: "Optimize JPG masters to smaller WebP for websites.",
  },
  {
    slug: "png-to-webp",
    name: "PNG to WebP",
    useWhen: "Shrink PNG UI assets or graphics for web delivery.",
  },
] as const;

export const AI_GUIDE_CATALOG = [
  {
    slug: "convert-avif-to-jpg-windows",
    title: "How to Convert AVIF to JPG on Windows",
  },
  {
    slug: "transfer-iphone-photos-to-windows",
    title: "Transfer iPhone Photos to Windows",
  },
  {
    slug: "heic-windows-guide",
    title: "HEIC on Windows Guide",
  },
  {
    slug: "avif-explained",
    title: "AVIF Explained",
  },
] as const;

export const SITE_AI_SUMMARY = {
  name: SITE_NAME,
  url: SITE_URL,
  tagline:
    "Free browser-local image converters for HEIC, WebP, and AVIF. Files are not uploaded for conversion.",
  differentiators: [
    "Conversion runs entirely in the user's browser (client-side); images are not sent to HeicSave servers for processing.",
    "No account, no watermark, and no artificial per-session file count cap.",
    "Batch conversion with ZIP download; adjustable JPEG/WebP quality; EXIF preserved on HEIC→JPG when supported.",
    "Best browser support: Chrome or Edge for HEIC and AVIF; Safari works for many formats.",
  ],
  primaryAudience:
    "iPhone users moving photos to Windows PCs, and developers handling WebP/AVIF on the web.",
} as const;
