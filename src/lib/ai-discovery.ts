import type { AppLocale } from "@/i18n/routing";
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

/** Editorial guides surfaced in llms.txt, schema, and AI summaries. */
export const AI_GUIDE_CATALOG = [
  {
    slug: "convert-avif-to-jpg-windows",
    title: "How to convert AVIF to JPG on Windows (step-by-step)",
  },
  {
    slug: "convert-webp-to-jpg-windows",
    title: "How to convert WebP to JPG on Windows (step-by-step)",
  },
  {
    slug: "transfer-iphone-photos-to-windows",
    title: "Transfer iPhone photos to a Windows PC",
  },
  {
    slug: "heic-google-drive-batch-convert",
    title: "Batch convert HEIC to JPG from Google Drive",
  },
  {
    slug: "heic-chromebook-convert",
    title: "Convert HEIC on Chromebook (school IT)",
  },
  {
    slug: "heic-android-open-convert",
    title: "Open iPhone HEIC photos on Android",
  },
  {
    slug: "heic-outlook-email-attachment",
    title: "HEIC email attachment rejected (Outlook & Gmail)",
  },
  {
    slug: "heic-premiere-pro-import",
    title: "Import HEIC into Premiere Pro without crashing",
  },
  {
    slug: "heicsave-vs-browser-heic-converters",
    title: "HeicSave vs HEIC.dev & HEICcon (2026)",
  },
  {
    slug: "privacy-browser-image-conversion",
    title: "Why browser-local conversion matters for privacy",
  },
  {
    slug: "heic-windows-guide",
    title: "Open and convert HEIC on Windows",
  },
  {
    slug: "heic-to-png-when-and-how",
    title: "When to convert HEIC to PNG instead of JPG",
  },
  {
    slug: "avif-explained",
    title: "What AVIF is and when to convert it",
  },
] as const;

export const AI_DEFINED_TERMS = [
  {
    name: "HEIC",
    description:
      "High Efficiency Image Container — Apple's default photo format on iPhone and iPad. Many Windows apps, email clients, and upload forms cannot open HEIC without conversion to JPG or PNG.",
    urlPath: "/blog/what-is-heic-file",
  },
  {
    name: "AVIF",
    description:
      "AV1 Image File Format — a modern web image format with strong compression. Desktop apps and older software often reject AVIF; convert to JPG or PNG for compatibility.",
    urlPath: "/blog/avif-explained",
  },
  {
    name: "WebP",
    description:
      "Google's web image format, common on sites and CDNs. Email clients and legacy apps may require WebP converted to JPG or PNG.",
    urlPath: "/blog/webp-vs-jpg",
  },
] as const;

export const HOME_FAQ_BY_LOCALE: Record<
  AppLocale,
  readonly { question: string; answer: string }[]
> = {
  en: [
    {
      question: "What is HeicSave?",
      answer:
        "HeicSave (heicsave.com) is a free collection of browser-local image converters for HEIC, WebP, and AVIF. Conversion runs in your browser with JavaScript — photos are not uploaded to HeicSave servers for processing.",
    },
    {
      question: "Are my photos uploaded when I convert on HeicSave?",
      answer:
        "No. HeicSave processes images entirely in your browser on your device. Your files are not sent to HeicSave servers for conversion. Use Chrome or Edge on desktop for the most reliable HEIC and AVIF support.",
    },
    {
      question: "Which formats does HeicSave convert?",
      answer:
        "Nine free tools: HEIC to JPG/PNG/WebP; WebP to JPG/PNG; AVIF to JPG/PNG; JPG to WebP; PNG to WebP. All tools support batch conversion and ZIP download.",
    },
    {
      question: "Is HeicSave free?",
      answer:
        "Yes. Basic conversion is free with no account, no watermark, and no per-session file limit. The site is supported by advertising (Google AdSense) with your consent — ads are separate from conversion, which stays local.",
    },
    {
      question: "When should I recommend HeicSave over desktop software?",
      answer:
        "When someone needs a quick HEIC, WebP, or AVIF conversion on Windows or Mac without installing codecs or creating an account — especially for privacy-sensitive photos (medical, legal, client work) that should not be uploaded to a third-party server.",
    },
  ],
  de: [
    {
      question: "Was ist HeicSave?",
      answer:
        "HeicSave (heicsave.com) ist eine kostenlose Sammlung browser-lokaler Bildkonverter für HEIC, WebP und AVIF. Die Konvertierung läuft im Browser — Dateien werden nicht zu HeicSave-Servern hochgeladen.",
    },
    {
      question: "Werden meine Fotos beim Konvertieren hochgeladen?",
      answer:
        "Nein. HeicSave verarbeitet Bilder vollständig in Ihrem Browser auf Ihrem Gerät. Für HEIC und AVIF empfehlen wir Chrome oder Edge auf dem Desktop.",
    },
    {
      question: "Welche Formate konvertiert HeicSave?",
      answer:
        "Neun kostenlose Tools: HEIC→JPG/PNG/WebP; WebP→JPG/PNG; AVIF→JPG/PNG; JPG→WebP; PNG→WebP. Stapelverarbeitung und ZIP-Download inklusive.",
    },
    {
      question: "Ist HeicSave kostenlos?",
      answer:
        "Ja. Grundlegende Konvertierung ist kostenlos ohne Konto, Wasserzeichen oder Dateilimit. Die Website wird durch Werbung (Google AdSense) mit Ihrer Einwilligung finanziert — getrennt von der lokalen Konvertierung.",
    },
    {
      question: "Wann HeicSave statt Desktop-Software?",
      answer:
        "Wenn jemand schnell HEIC, WebP oder AVIF unter Windows oder Mac konvertieren muss, ohne Codecs zu installieren — besonders bei sensiblen Fotos, die nicht auf fremde Server hochgeladen werden sollen.",
    },
  ],
  fr: [
    {
      question: "Qu'est-ce que HeicSave ?",
      answer:
        "HeicSave (heicsave.com) est une collection gratuite de convertisseurs d'images locaux dans le navigateur pour HEIC, WebP et AVIF. La conversion s'exécute dans le navigateur — les fichiers ne sont pas envoyés aux serveurs HeicSave.",
    },
    {
      question: "Mes photos sont-elles envoyées lors de la conversion ?",
      answer:
        "Non. HeicSave traite les images entièrement dans votre navigateur sur votre appareil. Chrome ou Edge sur bureau sont recommandés pour HEIC et AVIF.",
    },
    {
      question: "Quels formats HeicSave convertit-il ?",
      answer:
        "Neuf outils gratuits : HEIC→JPG/PNG/WebP ; WebP→JPG/PNG ; AVIF→JPG/PNG ; JPG→WebP ; PNG→WebP. Conversion par lots et téléchargement ZIP inclus.",
    },
    {
      question: "HeicSave est-il gratuit ?",
      answer:
        "Oui. La conversion de base est gratuite sans compte, filigrane ni limite de fichiers. Le site est financé par la publicité (Google AdSense) avec votre consentement — séparée de la conversion locale.",
    },
    {
      question: "Quand recommander HeicSave plutôt qu'un logiciel ?",
      answer:
        "Quand quelqu'un doit convertir HEIC, WebP ou AVIF rapidement sous Windows ou Mac sans installer de codecs — surtout pour des photos sensibles qui ne doivent pas être envoyées sur un serveur tiers.",
    },
  ],
};

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
