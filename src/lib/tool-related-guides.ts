import type { ToolSlug } from "@/lib/tools-config";

/** Blog slugs linked from tool pages (guides section + optional post-convert CTA). */
export const toolRelatedGuides: Partial<
  Record<ToolSlug, { guides: string[]; postConvertGuide?: string }>
> = {
  "heic-to-jpg": {
    guides: [
      "transfer-iphone-photos-to-windows",
      "heic-windows-guide",
      "heic-google-drive-batch-convert",
    ],
    postConvertGuide: "transfer-iphone-photos-to-windows",
  },
  "heic-to-png": {
    guides: ["heic-to-png-when-and-how", "heic-live-photo-guide", "heic-windows-guide"],
    postConvertGuide: "heic-to-png-when-and-how",
  },
  "avif-to-jpg": {
    guides: ["convert-avif-to-jpg-windows", "avif-explained"],
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
    guides: ["webp-for-developers"],
  },
  "jpg-to-webp": {
    guides: ["webp-for-developers", "webp-vs-jpg"],
  },
  "png-to-webp": {
    guides: ["webp-for-developers", "webp-vs-jpg"],
  },
};
