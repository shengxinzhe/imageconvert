import type { InputFormat, OutputFormat } from "@/lib/convert";
import { extraToolSeoSections } from "@/lib/tool-seo-sections";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ToolConfig {
  slug: string;
  path: string;
  from: InputFormat;
  to: OutputFormat;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];
  heroSubtitle: string;
  whyConvert: { title: string; paragraphs: string[] };
  howToSteps: string[];
  privacyNote: string;
  faqs: FaqItem[];
  relatedSlugs: string[];
  seoSections: { heading: string; content?: string; paragraphs?: string[] }[];
}

const allSlugs = [
  "heic-to-jpg",
  "heic-to-png",
  "heic-to-webp",
  "webp-to-png",
  "webp-to-jpg",
  "avif-to-jpg",
  "avif-to-png",
  "jpg-to-webp",
  "png-to-webp",
] as const;

export type ToolSlug = (typeof allSlugs)[number];

function related(current: ToolSlug): string[] {
  return allSlugs.filter((s) => s !== current).slice(0, 4);
}

export const tools: Record<ToolSlug, ToolConfig> = {
  "heic-to-jpg": {
    slug: "heic-to-jpg",
    path: "/heic-to-jpg",
    from: "heic",
    to: "jpg",
    title: "HEIC to JPG — Free, Batch, No Upload",
    h1: "HEIC to JPG Converter",
    metaDescription:
      "Convert HEIC to JPG free in your browser. Unlimited batch, ZIP download—photos never uploaded. Windows, Mac, Chromebook.",
    keywords: [
      "heic to jpg",
      "heic to jpg converter",
      "convert heic to jpg",
      "convert heic to jpg online",
      "heic to jpg free",
      "heic to jpeg",
      "batch heic to jpg",
      "open iphone photos on windows 11",
      "iphone photos to pc jpg",
    ],
    heroSubtitle: "Convert iPhone HEIC photos to JPG instantly in your browser",
    whyConvert: {
      title: "Why Convert HEIC to JPG?",
      paragraphs: [
        "Apple uses HEIC (High Efficiency Image Container) by default on iPhones because it saves storage while keeping excellent quality. The tradeoff is compatibility: many Windows PCs, older apps, email clients, and websites still expect JPG.",
        "Converting HEIC to JPG makes your photos easy to share, print, and upload anywhere. JPG is the universal standard for photos on the web and in everyday workflows.",
        "Our converter runs entirely in your browser—files never leave your device, which is ideal for personal photos and GDPR-friendly privacy.",
        "Whether you need one picture for a form or hundreds from a trip, HeicSave converts HEIC to JPG without installing codecs, creating an account, or uploading to a stranger's server.",
      ],
    },
    howToSteps: [
      "Drag and drop your HEIC files (or click Browse files). Adjust JPEG quality with the slider if needed.",
      "Click Convert. Processing happens locally in your browser—nothing is uploaded.",
      "Download each JPG, or use Download all as ZIP when converting multiple photos.",
    ],
    privacyNote:
      "Your HEIC files are decoded in the browser using WebAssembly. Nothing is uploaded to our servers.",
    faqs: [
      {
        question: "How do I convert HEIC to JPG on Windows?",
        answer:
          "Open this page in Chrome or Edge, drag your .heic files into the drop zone, and click Convert. Windows Photos may not open HEIC without extra codecs; browser conversion avoids that problem entirely.",
      },
      {
        question: "Can I convert HEIC to JPG without losing quality?",
        answer:
          "Yes. Use the quality slider (default 90%) before converting. HEIC is already compressed; high JPEG quality preserves detail for most everyday and social uses.",
      },
      {
        question: "How do I convert HEIC to JPG on Mac?",
        answer:
          "Use Preview to export one-by-one, or use our free online tool for faster batch conversion without installing software.",
      },
      {
        question: "How do I convert HEIC to JPG on iPhone?",
        answer:
          "On iPhone, go to Settings → Camera → Formats and choose Most Compatible to shoot JPG. For existing HEIC files, transfer them to a computer or use Safari on iOS to convert here in the browser.",
      },
      {
        question: "What is a HEIC file?",
        answer:
          "HEIC is Apple's default photo format on modern iPhones. It stores images efficiently but is not universally supported outside the Apple ecosystem.",
      },
      {
        question: "Is this HEIC to JPG converter really free?",
        answer:
          "Yes. There is no signup, no watermark, and no paid tier in v1. No fixed file-size or batch limits—conversion runs in your browser.",
      },
      {
        question: "Do you store my photos?",
        answer:
          "No. Conversion runs client-side. We do not receive your image data.",
      },
      {
        question: "Can I convert multiple HEIC files at once?",
        answer:
          "Yes. Select many HEIC files in one session. Very large batches may be slow on phones; desktop Chrome or Edge is best for big folders.",
      },
      {
        question: "Why won't my HEIC open on my PC?",
        answer:
          "Windows may lack HEIC codecs. Converting to JPG produces a file every app can open.",
      },
      {
        question: "HEIC vs JPG — which should I use?",
        answer:
          "Keep HEIC on iPhone for storage. Use JPG when sharing with others, uploading to websites, or using non-Apple software.",
      },
      {
        question: "How to open iPhone photos on Windows 11 in the UK?",
        answer:
          "Windows 11 often needs HEIF codecs from the Microsoft Store before Photos opens .heic files. Skip that install: open HeicSave in Chrome or Edge, drop your iPhone HEIC photos, convert to JPG in your browser, and download files that open in Photos, Outlook, and every UK workplace app—nothing is uploaded to our servers.",
      },
    ],
    relatedSlugs: related("heic-to-jpg"),
    seoSections: [
      {
        heading: "HEIC to JPG for iPhone users in the US and EU",
        paragraphs: [
          "Millions of photos are captured in HEIC every day. If you email pictures to family, submit insurance documents, upload to a job portal, or post on a platform that only accepts JPG, you need a converter that is fast, free, and trustworthy.",
          "HeicSave is built for privacy-conscious users in Europe and North America: no account, no cloud upload, and clear cookie consent under GDPR. Your photos stay on your device while you convert HEIC to JPG in the browser.",
        ],
      },
      {
        heading: "What is HEIC and why does iPhone use it?",
        paragraphs: [
          "HEIC (High Efficiency Image Container) is Apple's default photo format on modern iPhones and iPads. It uses advanced compression—often based on HEVC—so you get similar visual quality to JPEG at roughly half the file size. That saves iCloud storage and keeps your camera roll manageable.",
          "The downside is compatibility. Windows PCs without the HEIC extension, older Android phones, many web forms, and legacy print-shop software still expect .jpg or .jpeg. When someone says \"I can't open your photos,\" HEIC is usually the reason.",
        ],
      },
      {
        heading: "HEIC vs JPG: when to convert",
        paragraphs: [
          "Keep HEIC on your iPhone for everyday shooting—it is excellent for storage. Convert to JPG when you share outside Apple's ecosystem: email attachments, USB drives for family, employer portals, real-estate listings, school projects, or social networks that reject HEIC uploads.",
          "JPG has been the universal photo standard for decades. Every viewer, editor, and uploader understands it. Converting HEIC to JPG trades a little file size for maximum compatibility—almost always the right move for sharing.",
        ],
      },
      {
        heading: "Convert HEIC to JPG on Windows (no codec install)",
        paragraphs: [
          "Windows 10 and 11 often show a generic icon or \"unsupported format\" for .heic files unless you install Microsoft's HEIF Image Extensions from the Microsoft Store. Corporate laptops may block that install entirely.",
          "Browser-based conversion sidesteps the problem: open HeicSave in Chrome or Edge, drop your .heic files, and download JPGs that open in Photos, Paint, Word, and every legacy app. No admin rights, no store extensions, no reboot.",
        ],
      },
      {
        heading: "Convert HEIC to JPG on Mac",
        paragraphs: [
          "macOS opens HEIC natively in Preview and Photos. For a single image, File → Export works. For dozens of vacation photos or a client folder, exporting one-by-one is tedious.",
          "Use this page in Safari or Chrome to batch-convert HEIC to JPG in the browser. Downloads land in your Downloads folder as standard .jpg files ready for email, Slack, or Google Drive—without changing your iPhone camera settings.",
        ],
      },
      {
        heading: "Convert HEIC to JPG on iPhone and Android",
        paragraphs: [
          "On iPhone, the permanent fix is Settings → Camera → Formats → Most Compatible, which saves new shots as JPG. Existing HEIC photos still need conversion. AirDrop them to a Mac or PC, or open HeicSave in Safari on iOS and convert right on the phone.",
          "Android does not open HEIC out of the box on many devices. Convert to JPG on a desktop browser first, then transfer the JPGs—your recipients on Android and Windows will thank you.",
        ],
      },
      {
        heading: "Batch HEIC to JPG online — private and free",
        paragraphs: [
          "Need to convert a vacation folder, wedding shoot, or office scan batch? Add multiple .heic files in one session, convert in one click, then download everything as a single ZIP—no fixed file cap.",
          "Because processing is local, batch conversion is ideal for sensitive content: medical images, legal scans, family photos, and EU personal data you do not want on a random cloud converter's server.",
        ],
      },
      {
        heading: "Quality, EXIF, and file size after conversion",
        paragraphs: [
          "We encode JPG at high quality (about 90%) so everyday prints, Instagram, and document uploads look sharp. HEIC is already compressed; converting to JPG applies a second generation of compression—visually fine for sharing, but not ideal if you plan heavy editing afterward. For editing workflows, consider our HEIC to PNG tool for lossless-friendly output.",
          "We copy common EXIF fields (date taken, camera model, orientation) into JPG when your browser allows it. GPS and rare tags may still be dropped. Keep HEIC originals for your full archive.",
        ],
      },
      {
        heading: "Why use HeicSave instead of cloud upload converters?",
        paragraphs: [
          "Many \"free online converters\" upload your files to their servers. That creates privacy risk, slower uploads on mobile data, and terms-of-use you may not read. HeicSave never receives your image bytes—conversion runs with WebAssembly and canvas APIs in your tab.",
          "That architecture aligns with GDPR expectations: you are not sending personal photos to us for processing. We show cookie consent for analytics and Google AdSense ads, but your images are not part of that data flow.",
        ],
      },
      {
        heading: "Common HEIC to JPG problems (and fixes)",
        paragraphs: [
          "If conversion fails, try Chrome or Edge on a desktop, close other heavy tabs to free memory, or convert fewer files at once. Extremely large single images (high-megapixel RAW-like exports) may need to be exported smaller from Photos first.",
          "If downloads look wrong, hard-refresh the page (Ctrl+F5) and ensure you selected actual .heic / .heif files, not Live Photo video companions (.mov). Rename extensions only if you are sure the file is a still image.",
        ],
      },
    ],
  },
  "heic-to-png": {
    slug: "heic-to-png",
    path: "/heic-to-png",
    from: "heic",
    to: "png",
    title: "HEIC to PNG Converter — Free & Online",
    h1: "HEIC to PNG Converter — Free & Online",
    metaDescription:
      "Convert HEIC to PNG online for free. Lossless-friendly PNG output, browser-based, private. Perfect for screenshots and graphics.",
    keywords: ["heic to png", "convert heic to png", "heic to png online free"],
    heroSubtitle: "Turn iPhone HEIC images into PNG with full browser privacy",
    whyConvert: {
      title: "Why Convert HEIC to PNG?",
      paragraphs: [
        "PNG supports lossless compression and transparency, making it useful for designs, screenshots, and workflows that reject HEIC.",
        "Design tools, CMS platforms, and older software often require PNG instead of Apple's HEIC format.",
        "Convert locally—ideal when you cannot install Apple's HEIC codecs on a work computer.",
      ],
    },
    howToSteps: [
      "Select one or more HEIC files.",
      "Click Convert to generate PNG files in your browser.",
      "Download your PNGs—ready for design tools or the web.",
    ],
    privacyNote: "HEIC decoding happens on your device only.",
    faqs: [
      {
        question: "Is HEIC to PNG lossless?",
        answer:
          "PNG is lossless, but HEIC is already a compressed format. You preserve the decoded pixel data; you do not recover information lost in the original HEIC compression.",
      },
      {
        question: "Are PNG files larger than JPG from HEIC?",
        answer: "Usually yes. PNG is best when you need compatibility without JPG artifacts or when transparency matters.",
      },
      {
        question: "Does this work on Windows?",
        answer: "Yes. Use Chrome, Edge, or Firefox—no HEIC codec install required.",
      },
      {
        question: "Free limits?",
        answer:
          "No artificial cap. Very large files or many images at once may be slow or fail on low-memory devices.",
      },
      {
        question: "Why PNG instead of JPG?",
        answer: "Choose PNG for graphics, text in images, or lossless workflows; choose JPG for smaller photo files.",
      },
    ],
    relatedSlugs: related("heic-to-png"),
    seoSections: [
      {
        heading: "HEIC to PNG for designers",
        content:
          "Graphic designers and developers often need PNG assets. This tool bridges iPhone HEIC exports and PNG-based pipelines without sending client photos to a server.",
      },
    ],
  },
  "heic-to-webp": {
    slug: "heic-to-webp",
    path: "/heic-to-webp",
    from: "heic",
    to: "webp",
    title: "HEIC to WebP Converter — Free & Online",
    h1: "HEIC to WebP Converter — Free & Online",
    metaDescription:
      "Convert iPhone HEIC photos to WebP free in your browser. No upload, batch convert, resize presets, and ZIP download for modern websites.",
    keywords: [
      "heic to webp",
      "convert heic to webp",
      "heic to webp online free",
      "iphone heic to webp",
    ],
    heroSubtitle: "Turn iPhone HEIC photos into smaller WebP files for the web",
    whyConvert: {
      title: "Why Convert HEIC to WebP?",
      paragraphs: [
        "WebP is widely supported in modern browsers and often produces smaller files than JPG at similar quality—ideal for blogs, portfolios, and CMS uploads.",
        "iPhone HEIC photos are efficient on device but rarely accepted by website upload forms. Converting to WebP gives you a web-ready format without sending files to a cloud converter.",
        "HeicSave runs entirely in your browser: batch convert, optional resize presets, and ZIP download with no account required.",
      ],
    },
    howToSteps: [
      "Drag and drop HEIC files (or click Browse). Set WebP quality and optional max width (2048, 1920, or 1280 px).",
      "Click Convert. Processing runs locally in parallel—nothing is uploaded.",
      "Download each WebP or grab all files as a ZIP.",
    ],
    privacyNote:
      "HEIC is decoded with libheif WebAssembly in your browser. Your photos never reach our servers.",
    faqs: [
      {
        question: "Is HEIC to WebP conversion free?",
        answer:
          "Yes. No signup, no watermark, and no fixed batch cap. Very large folders work best on desktop Chrome or Edge.",
      },
      {
        question: "Does WebP keep EXIF from HEIC?",
        answer:
          "WebP output from browser canvas does not embed EXIF. Use our HEIC to JPG tool if you need date and camera metadata preserved.",
      },
      {
        question: "HEIC to WebP vs HEIC to JPG?",
        answer:
          "Choose WebP for websites and smaller file sizes on modern browsers. Choose JPG for email, print, and maximum compatibility.",
      },
      {
        question: "Can I resize while converting?",
        answer:
          "Yes. Pick a max-width preset (2048, 1920, or 1280 px) before converting to match upload limits or page layouts.",
      },
      {
        question: "Batch convert HEIC to WebP?",
        answer:
          "Yes. Add many .heic files, convert in one click, and download a ZIP of WebP files.",
      },
    ],
    relatedSlugs: related("heic-to-webp"),
    seoSections: [
      {
        heading: "HEIC to WebP for websites and CMS uploads",
        paragraphs: [
          "WordPress, Shopify, and many headless CMS tools accept WebP for faster pages. iPhone HEIC exports need a conversion step first—this tool does it privately in the browser.",
          "Use resize presets when upload forms cap image dimensions or when you want hero images at a consistent max width.",
        ],
      },
    ],
  },
  "webp-to-png": {
    slug: "webp-to-png",
    path: "/webp-to-png",
    from: "webp",
    to: "png",
    title: "WebP to PNG Converter — Free & Online",
    h1: "WebP to PNG Converter — Free & Online",
    metaDescription:
      "Convert WebP to PNG online. Free, fast, browser-based. Ideal for developers and designers who need universal PNG output.",
    keywords: ["webp to png", "convert webp to png", "webp to png online"],
    heroSubtitle: "Convert WebP images to PNG for universal compatibility",
    whyConvert: {
      title: "Why Convert WebP to PNG?",
      paragraphs: [
        "WebP is excellent for the web but still unsupported in some desktop apps, email clients, and legacy pipelines.",
        "PNG remains the lingua franca for lossless images and tools that require alpha channels.",
        "Developers often export WebP from build tools but need PNG for previews, documentation, or print.",
      ],
    },
    howToSteps: [
      "Drop WebP files into the converter.",
      "Convert locally—no server upload.",
      "Download PNG files instantly.",
    ],
    privacyNote: "WebP is decoded via the browser Canvas API.",
    faqs: [
      {
        question: "Can I convert animated WebP?",
        answer:
          "This tool targets static WebP. Animated WebP may only convert the first frame.",
      },
      {
        question: "Is WebP to PNG lossless?",
        answer:
          "Decoding WebP then saving PNG preserves pixels; PNG file size may be larger than WebP.",
      },
      {
        question: "Why do developers use WebP?",
        answer: "Smaller files and good quality for websites. PNG is for compatibility.",
      },
      {
        question: "Browser support?",
        answer: "Modern Chrome, Firefox, Safari, and Edge support WebP decoding in canvas.",
      },
      {
        question: "Batch limit?",
        answer: "No fixed limit; performance depends on your browser and device memory.",
      },
    ],
    relatedSlugs: related("webp-to-png"),
    seoSections: [
      {
        heading: "WebP to PNG for developers",
        content:
          "If your asset pipeline outputs WebP but stakeholders need PNG, this converter avoids ImageMagick installs and keeps files on your machine—useful for NDA projects.",
      },
    ],
  },
  "webp-to-jpg": {
    slug: "webp-to-jpg",
    path: "/webp-to-jpg",
    from: "webp",
    to: "jpg",
    title: "WebP to JPG Converter — Free & Online",
    h1: "WebP to JPG Converter — Free & Online",
    metaDescription:
      "Free WebP to JPG converter. Convert in browser, no upload. Smaller sharing size for photos saved as WebP.",
    keywords: ["webp to jpg", "convert webp to jpg", "webp to jpeg online"],
    heroSubtitle: "Turn WebP photos into JPG for email, print, and legacy apps",
    whyConvert: {
      title: "Why Convert WebP to JPG?",
      paragraphs: [
        "JPG is still the most compatible photo format for email attachments and older software.",
        "WebP downloaded from the web can be re-encoded as JPG for tools that only accept JPEG.",
        "High-quality JPG output keeps file sizes reasonable for sharing.",
      ],
    },
    howToSteps: [
      "Add one or more WebP images.",
      "Click Convert for local JPG encoding.",
      "Download JPG files.",
    ],
    privacyNote: "All processing uses your browser—zero server storage.",
    faqs: [
      {
        question: "WebP vs JPG — which is smaller?",
        answer: "WebP is often smaller at similar quality. JPG wins on compatibility.",
      },
      {
        question: "Quality settings?",
        answer:
          "Use the quality slider on the converter (60–100%). Default is 90% JPEG for a strong balance of size and clarity.",
      },
      {
        question: "Transparency in WebP?",
        answer: "JPG does not support transparency; transparent areas flatten onto a background.",
      },
      {
        question: "Works offline?",
        answer: "After the page loads, conversion can work without sending images online.",
      },
      {
        question: "Free?",
        answer: "Yes. No fixed file-size or batch cap; large jobs may be slow on mobile.",
      },
    ],
    relatedSlugs: related("webp-to-jpg"),
    seoSections: [
      {
        heading: "Convert WebP to JPG for social and email",
        content:
          "Platforms that reject WebP uploads are still common. Convert locally before posting family photos or marketing assets.",
      },
    ],
  },
  "avif-to-jpg": {
    slug: "avif-to-jpg",
    path: "/avif-to-jpg",
    from: "avif",
    to: "jpg",
    title: "AVIF to JPG Converter — Free Online (No Upload)",
    h1: "Convert AVIF to JPG — Free Online in Your Browser",
    metaDescription:
      "Convert AVIF to JPG free in your browser. No upload, no signup—batch convert .avif files, adjust JPEG quality, download ZIP. Works on Windows, Mac, and Chrome.",
    keywords: [
      "avif to jpg",
      "convert avif to jpg",
      "avif to jpg converter",
      "avif to jpeg",
      "avif to jpg online free",
      "convert avif to jpg without uploading",
    ],
    heroSubtitle:
      "Turn AVIF images into universal JPG files—private, instant, and free in your browser",
    whyConvert: {
      title: "Why Convert AVIF to JPG?",
      paragraphs: [
        "AVIF (AV1 Image File Format) delivers excellent compression in Chrome, Firefox, and Edge—but many desktop apps, email clients, and slide decks still expect JPG or PNG.",
        "Websites and CDNs increasingly serve AVIF for speed. When you need to edit in Photoshop (older versions), attach to email, or share with someone on legacy software, converting AVIF to JPG is the practical fix.",
        "HeicSave runs entirely in your browser: your AVIF files are decoded locally and never uploaded to our servers.",
      ],
    },
    howToSteps: [
      "Open this page in Chrome or Edge (best AVIF support). Drag .avif files into the drop zone or click Browse files.",
      "Set JPEG quality with the slider (default 90%) if you want smaller or sharper JPGs.",
      "Click Convert, then download each JPG or use Download all as ZIP for multiple files.",
    ],
    privacyNote:
      "AVIF is decoded in your browser using canvas APIs. Nothing is sent to our servers for conversion.",
    faqs: [
      {
        question: "How do I convert AVIF to JPG?",
        answer:
          "Open this tool in Chrome or Edge, add your .avif files, click Convert, and download JPGs. No install and no account required.",
      },
      {
        question: "Is AVIF to JPG conversion free?",
        answer:
          "Yes. No watermark, no paid tier, and no fixed file-count cap. Very large batches work best on desktop browsers.",
      },
      {
        question: "Why can't I open AVIF on Windows or Mac?",
        answer:
          "Many photo viewers and office apps lack AVIF codecs. JPG opens in Photos, Preview, PowerPoint, and almost every legacy tool.",
      },
      {
        question: "Can I convert AVIF to JPG without losing quality?",
        answer:
          "Use the quality slider (default 90%). AVIF is already compressed; high JPEG quality keeps photos sharp for web and print sharing.",
      },
      {
        question: "Can I convert multiple AVIF files at once?",
        answer:
          "Yes. Add many .avif files in one session and download everything as a single ZIP after conversion.",
      },
      {
        question: "Do you upload my AVIF files?",
        answer:
          "No. Conversion is client-side only. We do not receive your image bytes.",
      },
      {
        question: "What is an AVIF file?",
        answer:
          "AVIF is a modern image format based on AV1 video compression. It is common on performance-focused websites and in Chrome-based browsers.",
      },
      {
        question: "AVIF vs JPG — which should I use?",
        answer:
          "Keep AVIF on your site for bandwidth savings. Use JPG when you need maximum compatibility outside the browser.",
      },
      {
        question: "Which browser works best?",
        answer:
          "Chrome or Edge on desktop are the most reliable for decoding AVIF before export to JPG. Firefox also supports AVIF in current versions.",
      },
      {
        question: "AVIF vs WebP vs JPG?",
        answer:
          "AVIF often beats both on size at similar quality. JPG remains the universal sharing format; use our WebP tools if you need that path instead.",
      },
    ],
    relatedSlugs: related("avif-to-jpg"),
    seoSections: [
      {
        heading: "Convert AVIF to JPG for email, slides, and print",
        paragraphs: [
          "Marketing sites and blogs increasingly ship AVIF to save bandwidth. Your team may still need JPG for Outlook attachments, PowerPoint decks, print proofs, or client portals that reject AVIF uploads.",
          "Browser-local conversion avoids sending campaign assets to random cloud converters.",
        ],
      },
    ],
  },
  "avif-to-png": {
    slug: "avif-to-png",
    path: "/avif-to-png",
    from: "avif",
    to: "png",
    title: "AVIF to PNG Converter — Free & Online",
    h1: "AVIF to PNG Converter — Free & Online",
    metaDescription:
      "Convert AVIF to PNG online free. Private browser conversion for designers and developers.",
    keywords: ["avif to png", "convert avif to png online"],
    heroSubtitle: "Export AVIF assets as PNG for design and legacy workflows",
    whyConvert: {
      title: "Why Convert AVIF to PNG?",
      paragraphs: [
        "PNG is required for many design exports, Figma handoffs, and print pipelines.",
        "AVIF downloaded from optimized websites may need PNG for editing.",
        "Local conversion protects confidential marketing assets.",
      ],
    },
    howToSteps: [
      "Select AVIF files.",
      "Run browser-side conversion to PNG.",
      "Download PNG outputs.",
    ],
    privacyNote: "Client-side only—no cloud processing.",
    faqs: [
      {
        question: "Lossless PNG from AVIF?",
        answer: "PNG stores decoded pixels; quality depends on the source AVIF.",
      },
      {
        question: "File size?",
        answer: "PNG is typically larger than AVIF.",
      },
      {
        question: "Batch support?",
        answer: "Yes, multiple files at once.",
      },
      {
        question: "Which browsers?",
        answer: "Latest Chrome, Edge, Firefox, and Safari versions.",
      },
      {
        question: "Animated AVIF?",
        answer: "Static conversion only; animation may not be preserved.",
      },
    ],
    relatedSlugs: related("avif-to-png"),
    seoSections: [
      {
        heading: "AVIF to PNG for creative workflows",
        content:
          "When your CDN serves AVIF but your team works in PNG, a quick browser converter beats shipping files to unknown third-party APIs.",
      },
    ],
  },
  "jpg-to-webp": {
    slug: "jpg-to-webp",
    path: "/jpg-to-webp",
    from: "jpg",
    to: "webp",
    title: "JPG to WebP Converter — Free & Online",
    h1: "JPG to WebP Converter — Free & Online",
    metaDescription:
      "Convert JPG to WebP online for smaller web images. Free browser tool for developers optimizing Core Web Vitals.",
    keywords: ["jpg to webp", "jpeg to webp", "convert jpg to webp online"],
    heroSubtitle: "Shrink JPG photos to WebP for faster websites",
    whyConvert: {
      title: "Why Convert JPG to WebP?",
      paragraphs: [
        "WebP typically reduces file size 25–35% versus JPG at similar visual quality—directly improving LCP.",
        "Developers use WebP for hero images, blogs, and e-commerce galleries.",
        "Encode locally before uploading to your CMS or static host.",
      ],
    },
    howToSteps: [
      "Upload JPG/JPEG files.",
      "Convert to WebP in your browser.",
      "Download optimized WebP files.",
    ],
    privacyNote: "Your source JPG never uploads to our servers.",
    faqs: [
      {
        question: "How much smaller is WebP vs JPG?",
        answer: "Often 25–35% smaller; results vary by image content.",
      },
      {
        question: "SEO impact?",
        answer: "Faster pages can improve Core Web Vitals and user experience.",
      },
      {
        question: "Quality?",
        answer:
          "Use the WebP quality slider before converting. Default is 85%; raise it for sharper output or lower it for smaller files.",
      },
      {
        question: "Browser encode support?",
        answer: "Chrome and Edge have strong WebP encoding via canvas.",
      },
      {
        question: "Batch free tier?",
        answer: "No fixed limit; use a desktop browser for large batches.",
      },
    ],
    relatedSlugs: related("jpg-to-webp"),
    seoSections: [
      {
        heading: "JPG to WebP for Core Web Vitals",
        content:
          "Google uses page experience signals. Converting heavy JPG heroes to WebP is a low-risk win when your stack serves WebP with JPG fallback.",
      },
    ],
  },
  "png-to-webp": {
    slug: "png-to-webp",
    path: "/png-to-webp",
    from: "png",
    to: "webp",
    title: "PNG to WebP Converter — Free & Online",
    h1: "PNG to WebP Converter — Free & Online",
    metaDescription:
      "Convert PNG to WebP online free. Reduce PNG weight for the web while keeping transparency in supported browsers.",
    keywords: ["png to webp", "convert png to webp", "png to webp online"],
    heroSubtitle: "Compress PNG assets to WebP for production websites",
    whyConvert: {
      title: "Why Convert PNG to WebP?",
      paragraphs: [
        "Large PNG UI assets slow down pages. WebP lossless or lossy modes cut bytes dramatically.",
        "Ideal for logos, illustrations, and UI graphics when you control delivery format.",
        "Run conversions privately before deploy—no CI secrets needed for a quick check.",
      ],
    },
    howToSteps: [
      "Drop PNG files into the tool.",
      "Generate WebP locally.",
      "Download and replace assets in your project.",
    ],
    privacyNote: "PNG stays on your machine during encode.",
    faqs: [
      {
        question: "Does WebP support transparency from PNG?",
        answer: "Yes. WebP supports alpha; most modern browsers display it correctly.",
      },
      {
        question: "PNG vs WebP for UI?",
        answer: "Use WebP on the web with fallbacks; keep PNG for source files.",
      },
      {
        question: "Lossless WebP?",
        answer: "Our tool uses lossy WebP by default for smaller files.",
      },
      {
        question: "Safari support?",
        answer: "Safari supports WebP; always provide fallbacks for ancient clients.",
      },
      {
        question: "Limits?",
        answer: "No fixed cap; device memory is the practical limit.",
      },
    ],
    relatedSlugs: related("png-to-webp"),
    seoSections: [
      {
        heading: "PNG to WebP for frontend performance",
        content:
          "Replace bloated PNGs in your /public folder with WebP exports from this tool, then use <picture> elements for resilient delivery.",
      },
    ],
  },
};

for (const slug of Object.keys(extraToolSeoSections) as ToolSlug[]) {
  const extra = extraToolSeoSections[slug];
  if (extra?.length && tools[slug]) {
    tools[slug].seoSections = [...tools[slug].seoSections, ...extra];
  }
}

export const toolList = Object.values(tools);

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools[slug as ToolSlug];
}
