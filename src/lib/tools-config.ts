import type { InputFormat, OutputFormat } from "@/lib/convert";

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
  seoSections: { heading: string; content: string }[];
}

const allSlugs = [
  "heic-to-jpg",
  "heic-to-png",
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
    title: "HEIC to JPG Converter — Free & Online",
    h1: "HEIC to JPG Converter — Free & Online",
    metaDescription:
      "Convert iPhone HEIC photos to JPG free in your browser. No upload, no signup. Batch up to 5 images. Works on Windows, Mac, and mobile.",
    keywords: [
      "heic to jpg",
      "heic to jpg converter",
      "convert heic to jpg online",
      "heic to jpg free",
      "batch heic to jpg",
    ],
    heroSubtitle: "Convert iPhone HEIC photos to JPG instantly in your browser",
    whyConvert: {
      title: "Why Convert HEIC to JPG?",
      paragraphs: [
        "Apple uses HEIC (High Efficiency Image Container) by default on iPhones because it saves storage while keeping excellent quality. The tradeoff is compatibility: many Windows PCs, older apps, email clients, and websites still expect JPG.",
        "Converting HEIC to JPG makes your photos easy to share, print, and upload anywhere. JPG is the universal standard for photos on the web and in everyday workflows.",
        "Our converter runs entirely in your browser—files never leave your device, which is ideal for personal photos and GDPR-friendly privacy.",
      ],
    },
    howToSteps: [
      "Drag and drop your HEIC files (or click to browse). Up to 5 images at once.",
      "Click Convert. Processing happens locally on your computer.",
      "Download each JPG instantly. No watermarks, no account required.",
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
          "Yes. We use high-quality JPEG encoding (90% quality by default). HEIC is already compressed; converting to JPG at high quality preserves detail for most everyday and social uses.",
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
          "Yes. There is no signup, no watermark, and no paid tier in v1. Free limits: 10 MB per file and 5 files per batch.",
      },
      {
        question: "Do you store my photos?",
        answer:
          "No. Conversion runs client-side. We do not receive your image data.",
      },
      {
        question: "Can I convert multiple HEIC files at once?",
        answer:
          "Yes. Add up to 5 HEIC images per batch on the free plan.",
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
    ],
    relatedSlugs: related("heic-to-jpg"),
    seoSections: [
      {
        heading: "HEIC to JPG for iPhone users in the US and EU",
        content:
          "Millions of photos are captured in HEIC every day. If you email pictures to family, submit documents, or post to platforms that only accept JPG, a reliable HEIC to JPG converter saves time. ImageConvert is built for privacy-conscious users in Europe and North America: no account, no cloud upload, and clear cookie consent under GDPR.",
      },
      {
        heading: "Batch HEIC to JPG online",
        content:
          "Need to convert a vacation folder? Select up to five files, convert in one session, and download each JPG. For larger batches, run multiple rounds—still faster than installing codecs on every Windows machine in your office.",
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
      "Upload up to 5 HEIC files (max 10 MB each).",
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
        answer: "10 MB per file, 5 files per batch.",
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
        answer: "Up to 5 files, 10 MB each, free.",
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
      "Add WebP images (max 5 per batch).",
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
        answer: "We default to 90% JPEG quality for a strong balance of size and clarity.",
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
        answer: "Yes, with 10 MB and 5-file limits.",
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
    title: "AVIF to JPG Converter — Free & Online",
    h1: "AVIF to JPG Converter — Free & Online",
    metaDescription:
      "Convert AVIF to JPG free online. Browser-based AVIF decoder. Perfect when apps don't support AVIF yet.",
    keywords: ["avif to jpg", "convert avif to jpg", "avif to jpeg online"],
    heroSubtitle: "Convert next-gen AVIF images to universal JPG",
    whyConvert: {
      title: "Why Convert AVIF to JPG?",
      paragraphs: [
        "AVIF offers outstanding compression but adoption in desktop software lags behind browsers.",
        "JPG ensures your images open everywhere—from PowerPoint to older photo viewers.",
        "Google and CDNs increasingly serve AVIF; conversion tools help when you need a local JPG copy.",
      ],
    },
    howToSteps: [
      "Upload AVIF files (Chrome/Edge/Firefox recommended).",
      "Convert to JPG in-browser.",
      "Download results immediately.",
    ],
    privacyNote: "AVIF never leaves your device during conversion.",
    faqs: [
      {
        question: "What is AVIF?",
        answer:
          "AVIF (AV1 Image File Format) is a modern image format with excellent compression, supported in major browsers.",
      },
      {
        question: "Why can't I open AVIF on my computer?",
        answer:
          "Many desktop apps lack AVIF codecs. Converting to JPG solves compatibility.",
      },
      {
        question: "AVIF vs JPG quality?",
        answer:
          "AVIF often looks better at smaller sizes. JPG is the compatibility choice.",
      },
      {
        question: "Browser requirements?",
        answer: "Use an updated browser with AVIF decode support for canvas conversion.",
      },
      {
        question: "Is conversion free?",
        answer: "Yes—10 MB per file, 5 files per batch.",
      },
    ],
    relatedSlugs: related("avif-to-jpg"),
    seoSections: [
      {
        heading: "AVIF to JPG — the blue ocean converter",
        content:
          "Few dedicated AVIF tools exist compared to HEIC converters. ImageConvert targets early adopters and SEO for avif-to-jpg queries as AVIF deployment grows across the web.",
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
        answer: "Yes, up to 5 files.",
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
        answer: "Default WebP quality is 85%—adjust in future versions.",
      },
      {
        question: "Browser encode support?",
        answer: "Chrome and Edge have strong WebP encoding via canvas.",
      },
      {
        question: "Batch free tier?",
        answer: "5 files, 10 MB each.",
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
        answer: "10 MB per file, 5 per batch.",
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

export const toolList = Object.values(tools);

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools[slug as ToolSlug];
}
