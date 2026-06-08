export const SITE_NAME = "HeicSave";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://heicsave.com";

/** impact.com media property verification (meta + optional body text). */
export const IMPACT_SITE_VERIFICATION = "e0cf3e41-ceb9-4a55-b3f3-765b2cb45c55";

export const DEFAULT_JPEG_QUALITY = 0.9;
export const DEFAULT_WEBP_QUALITY = 0.85;

/** Soft guidance only — conversion is not blocked above these values. */
export const SOFT_WARN_FILE_SIZE = 50 * 1024 * 1024; // 50 MB
export const SOFT_WARN_BATCH_COUNT = 20;

/** Output max-width presets (px). null = original size. */
export const RESIZE_PRESETS = [
  { id: "original", maxWidth: null },
  { id: "2048", maxWidth: 2048 },
  { id: "1920", maxWidth: 1920 },
  { id: "1280", maxWidth: 1280 },
] as const;

export type ResizePresetId = (typeof RESIZE_PRESETS)[number]["id"];

export const DMCA_EMAIL = "dmca@heicsave.com";
export const PRIVACY_EMAIL = "privacy@heicsave.com";

/** IndexNow key — file must exist at /{INDEXNOW_KEY}.txt (Bing/Yandex). */
export const INDEXNOW_KEY = "7c4e9a2b8f1d3e6a9c0b5d8e2f4a1b6c";
