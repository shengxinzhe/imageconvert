export const SITE_NAME = "HeicSave";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://heicsave.com";

export const DEFAULT_JPEG_QUALITY = 0.9;
export const DEFAULT_WEBP_QUALITY = 0.85;

/** Soft guidance only — conversion is not blocked above these values. */
export const SOFT_WARN_FILE_SIZE = 50 * 1024 * 1024; // 50 MB
export const SOFT_WARN_BATCH_COUNT = 20;

export const DMCA_EMAIL = "dmca@heicsave.com";
export const PRIVACY_EMAIL = "privacy@heicsave.com";

/** IndexNow key — file must exist at /{INDEXNOW_KEY}.txt (Bing/Yandex). */
export const INDEXNOW_KEY = "7c4e9a2b8f1d3e6a9c0b5d8e2f4a1b6c";
