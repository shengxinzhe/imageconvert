import type { ToolSlug } from "@/lib/tools-config";

/** Blog slugs linked from tool pages (guides section + optional post-convert CTA). */
export const toolRelatedGuides: Partial<
  Record<ToolSlug, { guides: string[]; postConvertGuide?: string }>
> = {
  "heic-to-jpg": {
    guides: [
      "heic-windows-11-uk",
      "heic-windows-10-not-showing",
      "iphone-photos-pc-without-heic",
      "heic-iphone-photos-windows-us",
      "heic-premiere-pro-import",
      "heic-wont-open-in-photoshop",
      "batch-heic-to-jpg-workflow",
      "what-is-heic-file",
      "transfer-iphone-photos-to-windows",
      "heic-windows-guide",
      "heic-vs-jpg",
      "heic-google-drive-batch-convert",
      "heic-chromebook-convert",
      "heic-android-open-convert",
      "heic-outlook-email-attachment",
      "heicsave-vs-browser-heic-converters",
      "privacy-browser-image-conversion",
      "best-heic-converters-2026",
    ],
    postConvertGuide: "transfer-iphone-photos-to-windows",
  },
  "heic-to-png": {
    guides: ["heic-to-png-when-and-how", "heic-live-photo-guide", "heic-windows-guide"],
    postConvertGuide: "heic-to-png-when-and-how",
  },
  "heic-to-webp": {
    guides: ["webp-for-developers", "heic-google-drive-batch-convert", "heic-windows-guide"],
    postConvertGuide: "webp-for-developers",
  },
  "avif-to-jpg": {
    guides: [
      "convert-avif-to-jpg-windows",
      "avif-thumbnails-not-showing-windows-explorer",
      "avif-explained",
    ],
    postConvertGuide: "convert-avif-to-jpg-windows",
  },
  "avif-to-png": {
    guides: ["avif-explained", "convert-avif-to-jpg-windows"],
    postConvertGuide: "avif-explained",
  },
  "webp-to-jpg": {
    guides: ["convert-webp-to-jpg-windows", "webp-vs-jpg"],
    postConvertGuide: "convert-webp-to-jpg-windows",
  },
  "webp-to-png": {
    guides: ["webp-for-developers", "webp-vs-jpg", "convert-webp-to-jpg-windows"],
  },
  "jpg-to-webp": {
    guides: ["webp-for-developers", "webp-vs-jpg"],
  },
  "png-to-webp": {
    guides: ["webp-for-developers", "webp-vs-jpg"],
  },
  "jpg-to-png": {
    guides: ["privacy-browser-image-conversion"],
  },
  "png-to-jpg": {
    guides: ["privacy-browser-image-conversion", "webp-vs-jpg"],
  },
  "compress-jpg": {
    guides: [
      "jpg-portal-upload-size-limits",
      "heic-outlook-email-attachment",
      "privacy-browser-image-conversion",
    ],
    postConvertGuide: "jpg-portal-upload-size-limits",
  },
  "strip-exif": {
    guides: [
      "strip-exif-before-selling-online",
      "privacy-browser-image-conversion",
      "disable-heic-iphone-jpg",
    ],
    postConvertGuide: "strip-exif-before-selling-online",
  },
};
