import type { ToolSlug } from "@/lib/tools-config";

/** i18n key under home.cards.{id} */
export type HomeCardId =
  | "heicToJpg"
  | "heicToPng"
  | "heicToWebp"
  | "webpToPng"
  | "webpToJpg"
  | "avifToJpg"
  | "avifToPng"
  | "jpgToWebp"
  | "pngToWebp"
  | "jpgToPng"
  | "pngToJpg"
  | "compressJpg"
  | "stripExif";

export const toolHomeCardId: Record<ToolSlug, HomeCardId> = {
  "heic-to-jpg": "heicToJpg",
  "heic-to-png": "heicToPng",
  "heic-to-webp": "heicToWebp",
  "webp-to-png": "webpToPng",
  "webp-to-jpg": "webpToJpg",
  "avif-to-jpg": "avifToJpg",
  "avif-to-png": "avifToPng",
  "jpg-to-webp": "jpgToWebp",
  "png-to-webp": "pngToWebp",
  "jpg-to-png": "jpgToPng",
  "png-to-jpg": "pngToJpg",
  "compress-jpg": "compressJpg",
  "strip-exif": "stripExif",
};

export const heicCardUseKeys = ["use1", "use2", "use3"] as const;
