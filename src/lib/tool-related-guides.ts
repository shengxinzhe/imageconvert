import type { ToolSlug } from "@/lib/tools-config";

/** Blog slugs linked from tool pages (guides section + optional post-convert CTA). */
export const toolRelatedGuides: Partial<
  Record<ToolSlug, { guides: string[]; postConvertGuide?: string }>
> = {
  "heic-to-jpg": {
    guides: ["transfer-iphone-photos-to-windows", "heic-windows-guide"],
    postConvertGuide: "transfer-iphone-photos-to-windows",
  },
  "heic-to-png": {
    guides: ["heic-live-photo-guide", "heic-windows-guide"],
    postConvertGuide: "heic-live-photo-guide",
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
    guides: ["webp-vs-jpg"],
  },
  "webp-to-png": {
    guides: ["webp-for-developers"],
  },
};
