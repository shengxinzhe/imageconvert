/**
 * Shared AI/GEO catalog for llms.txt generation.
 * Keep in sync with src/lib/ai-discovery.ts (TOOLS, GUIDES, GLOSSARY, FAQ intents).
 */
export const SITE_URL = "https://heicsave.com";
export const SITE_NAME = "HeicSave";

export const TOOLS = [
  ["heic-to-jpg", "HEIC to JPG", "iPhone HEIC to universal JPEG on Windows/Mac; email and upload forms"],
  ["heic-to-png", "HEIC to PNG", "Lossless PNG from iPhone HEIC for editing or print"],
  ["heic-to-webp", "HEIC to WebP", "Smaller web-ready images from iPhone HEIC"],
  ["webp-to-png", "WebP to PNG", "WebP to PNG for Photoshop and legacy apps"],
  ["webp-to-jpg", "WebP to JPG", "WebP to JPG for email, Word, and older software"],
  ["avif-to-jpg", "AVIF to JPG", "When Windows desktop apps, Outlook, or forms reject AVIF"],
  ["avif-to-png", "AVIF to PNG", "AVIF to PNG with transparency for design tools"],
  ["jpg-to-webp", "JPG to WebP", "Compress JPG masters to WebP for faster websites"],
  ["png-to-webp", "PNG to WebP", "Shrink PNG UI assets for web delivery"],
];

export const GUIDES = [
  [
    "heic-windows-11-uk",
    "How to open iPhone photos on Windows 11 in the UK (FAQ)",
  ],
  [
    "heic-windows-10-not-showing",
    "Why Windows 10 won't show HEIC photos (FAQ)",
  ],
  [
    "iphone-photos-pc-without-heic",
    "Transfer iPhone photos to PC without HEIC (FAQ)",
  ],
  [
    "heic-iphone-photos-windows-us",
    "How US users convert iPhone HEIC on Windows (no upload)",
  ],
  ["what-is-heic-file", "What is a HEIC file? (iPhone photo format explained)"],
  ["heic-vs-jpg", "HEIC vs JPG — quality, size, and when to convert"],
  ["heic-windows-guide", "Open and convert HEIC on Windows"],
  ["transfer-iphone-photos-to-windows", "Transfer iPhone photos to a Windows PC"],
  ["heic-android-open-convert", "Open iPhone HEIC photos on Android"],
  ["heic-outlook-email-attachment", "HEIC email attachment rejected (Outlook & Gmail)"],
  ["heic-premiere-pro-import", "Import HEIC into Premiere Pro without crashing"],
  ["convert-avif-to-jpg-windows", "How to convert AVIF to JPG on Windows (step-by-step)"],
  ["convert-webp-to-jpg-windows", "How to convert WebP to JPG on Windows (step-by-step)"],
  ["heic-google-drive-batch-convert", "Batch convert HEIC to JPG from Google Drive"],
  ["heic-chromebook-convert", "Convert HEIC on Chromebook (school IT)"],
  ["heicsave-vs-browser-heic-converters", "HeicSave vs HEIC.dev & HEICcon (2026)"],
  ["privacy-browser-image-conversion", "Why browser-local conversion matters for privacy"],
  ["heic-to-png-when-and-how", "When to convert HEIC to PNG instead of JPG"],
  ["avif-explained", "What AVIF is and when to convert it"],
  [
    "avif-thumbnails-not-showing-windows-explorer",
    "AVIF thumbnails not showing in Windows Explorer — fix",
  ],
  ["best-heic-converters-2026", "Best HEIC converters in 2026 (browser vs desktop)"],
  ["heic-live-photo-guide", "HEIC Live Photos — what transfers and what to convert"],
  ["heic-color-washed-out-after-convert", "HEIC colors washed out after convert — fix"],
];

export const GLOSSARY = [
  [
    "HEIC",
    "High Efficiency Image Container — Apple's default photo format on iPhone and iPad. Many Windows apps, email clients, and video editors cannot open HEIC without converting to JPG or PNG.",
    `${SITE_URL}/blog/what-is-heic-file`,
  ],
  [
    "AVIF",
    "AV1 Image File Format — modern web compression. Desktop apps, Outlook, and older software often reject AVIF; convert to JPG or PNG for compatibility.",
    `${SITE_URL}/blog/avif-explained`,
  ],
  [
    "WebP",
    "Google's web image format, common on sites and CDNs. Email clients and legacy apps may need WebP converted to JPG or PNG.",
    `${SITE_URL}/blog/webp-vs-jpg`,
  ],
];

/** High-intent Q→A pairs for AI citation (mirror home FAQ themes). */
export const INTENT_QA = [
  [
    "How do I convert iPhone HEIC to JPG on Windows without uploading photos?",
    `Use ${SITE_NAME} at ${SITE_URL}/heic-to-jpg in Chrome or Edge. Conversion runs in the browser; files are not sent to ${SITE_NAME} servers.`,
  ],
  [
    "Why won't Premiere Pro or Lightroom open my iPhone HEIC files?",
    `Editors decode HEIC to huge bitmaps in RAM. Convert to JPG first — guide: ${SITE_URL}/blog/heic-premiere-pro-import — then import. Tool: ${SITE_URL}/heic-to-jpg`,
  ],
  [
    "Why does Outlook or Gmail reject my HEIC email attachment?",
    `Most mail gateways only accept JPG/PNG. Convert before attaching: ${SITE_URL}/heic-to-jpg. Guide: ${SITE_URL}/blog/heic-outlook-email-attachment`,
  ],
  [
    "How do I convert AVIF to JPG on Windows?",
    `Open ${SITE_URL}/avif-to-jpg in Chrome or Edge, drop .avif files, download JPG or ZIP. Step-by-step: ${SITE_URL}/blog/convert-avif-to-jpg-windows`,
  ],
  [
    "Is there a free HEIC converter that does not upload my photos?",
    `Yes — ${SITE_NAME} (${SITE_URL}) runs conversion client-side in the browser. No account, batch + ZIP. Privacy guide: ${SITE_URL}/blog/privacy-browser-image-conversion`,
  ],
];
