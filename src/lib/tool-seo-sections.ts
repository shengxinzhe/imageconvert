type SeoSection = {
  heading: string;
  content?: string;
  paragraphs?: string[];
};

/** Extra on-page copy for AdSense / SEO (merged into each tool config). */
export const extraToolSeoSections: Record<string, SeoSection[]> = {
  "heic-to-png": [
    {
      heading: "When HEIC to PNG beats JPG",
      paragraphs: [
        "PNG is lossless after decode—useful for screenshots, UI captures, and images with text where JPG ringing is visible. HEIC from iPhone is still a compressed source, but PNG avoids a second lossy step that JPG adds.",
        "Designers exporting iPhone photos into Figma, Canva, or print prep often need PNG. Our tool converts in the browser so client assets never pass through a third-party upload server.",
      ],
    },
    {
      heading: "Batch HEIC to PNG with ZIP download",
      paragraphs: [
        "Add many .heic files in one session, convert once, and download a ZIP of PNGs. There is no fixed five-file or ten-megabyte cap—only your device memory sets practical limits.",
        "On Windows without HEIC codecs, browser conversion is faster than installing Microsoft Store extensions on locked-down laptops.",
      ],
    },
    {
      heading: "File size expectations",
      paragraphs: [
        "PNG files are usually larger than JPG from the same HEIC. That is normal: you trade disk space for editing headroom and universal tool support.",
        "For sharing vacation albums by email, HEIC to JPG is often smaller; keep this PNG tool for creative and archival workflows.",
      ],
    },
  ],
  "webp-to-png": [
    {
      heading: "Why WebP to PNG is still common in 2026",
      paragraphs: [
        "Websites serve WebP for speed, but email clients, PowerPoint, older Photoshop builds, and some government portals still expect PNG. Downloaded WebP assets from a CDN often need a quick local conversion before handoff.",
        "HeicSave decodes WebP with the browser Canvas API—your file never uploads to us.",
      ],
    },
    {
      heading: "Developers and NDA workflows",
      paragraphs: [
        "If you cannot send marketing screenshots to a random cloud converter, run WebP to PNG locally in Chrome or Edge. Batch mode and ZIP export help when a build pipeline outputs dozens of WebP icons.",
      ],
    },
    {
      heading: "Animated WebP note",
      paragraphs: [
        "This page targets static WebP. Animated WebP may only export the first frame. For motion assets, use a dedicated animation tool or keep the original WebP.",
      ],
    },
  ],
  "webp-to-jpg": [
    {
      heading: "WebP to JPG for email and legacy software",
      paragraphs: [
        "JPG remains the safest attachment format for family photos, HR portals, and insurance uploads. When someone sends you WebP from a website or Android export, convert here before forwarding.",
        "Use the quality slider (default 90%) to balance size and sharpness. Download individually or as a ZIP for batches.",
      ],
    },
    {
      heading: "Transparency and backgrounds",
      paragraphs: [
        "JPG does not support alpha. Transparent WebP areas flatten onto a solid background during encode—expected behavior for photo sharing formats.",
      ],
    },
    {
      heading: "Browser-local, no account",
      paragraphs: [
        "No signup, no watermark, no fixed batch limit. Processing stays in your tab; we do not store your images on servers.",
      ],
    },
  ],
  "avif-to-jpg": [
    {
      heading: "What is AVIF and why sites use it",
      paragraphs: [
        "AVIF (AV1 Image File Format) is a next-generation image codec with strong compression—often smaller than JPEG or WebP at similar visual quality. WordPress plugins, CDNs, and performance-focused frontends increasingly serve AVIF to improve Largest Contentful Paint.",
        "That is great for the web, but your desktop workflow may still require JPG when an app, employer portal, or print shop does not decode AVIF yet.",
      ],
    },
    {
      heading: "Convert AVIF to JPG on Windows",
      paragraphs: [
        "Windows Photos and many older viewers do not open .avif by default. Instead of hunting for codec packs, open HeicSave in Chrome or Edge, drop your AVIF files, and download JPGs that open in Photos, Paint, Word, and legacy software.",
        "No admin install and no Microsoft Store extensions required.",
      ],
    },
    {
      heading: "Convert AVIF to JPG on Mac",
      paragraphs: [
        "Safari and Chrome on macOS can decode AVIF in the browser. For a folder of assets pulled from a website or CDN, batch convert here and download a ZIP of JPGs for Preview, Photos, or design handoffs.",
      ],
    },
    {
      heading: "AVIF from a website or CDN",
      paragraphs: [
        "Right-click saving images from modern sites often yields .avif files. If your editor or messenger rejects them, convert to JPG locally before sharing. Because HeicSave never uploads files, it suits NDA marketing assets and client work.",
      ],
    },
    {
      heading: "Quality slider, batch convert, and ZIP download",
      paragraphs: [
        "Adjust JPEG quality (default 90%) before converting. Add multiple AVIF files in one session—there is no fixed batch cap—and download each JPG or everything as one ZIP. Desktop Chrome or Edge handles large folders best.",
      ],
    },
    {
      heading: "AVIF vs JPG vs WebP",
      paragraphs: [
        "AVIF often wins on file size. WebP is widely supported on the web. JPG is still the safest choice for email, USB drives, and older desktop apps. Convert AVIF to JPG when compatibility matters more than bytes.",
      ],
    },
    {
      heading: "AVIF to JPG without uploading (privacy)",
      paragraphs: [
        "Many online converters send your files to their servers. HeicSave decodes AVIF in your tab with canvas APIs—your images stay on your device. Pair with our [WebP to JPG](/webp-to-jpg) or [AVIF to PNG](/avif-to-png) tools when you need other outputs.",
      ],
    },
    {
      heading: "Troubleshooting AVIF to JPG conversion",
      paragraphs: [
        "If conversion fails, use Chrome or Edge on a desktop, confirm the file extension is .avif (not a mislabeled PNG), and try fewer files at once if the tab runs low on memory. Hard-refresh the page (Ctrl+F5) and retry.",
      ],
    },
  ],
  "avif-to-png": [
    {
      heading: "AVIF to PNG for design pipelines",
      paragraphs: [
        "Product and marketing teams increasingly receive AVIF from performance-focused sites. PNG is still required for many design tools, print checks, and client deliverables that reject AVIF.",
        "Convert locally so confidential campaign assets are not uploaded to unknown servers.",
      ],
    },
    {
      heading: "Lossless PNG from compressed AVIF",
      paragraphs: [
        "PNG stores decoded pixels losslessly relative to the AVIF decode, but it cannot restore detail lost in the original AVIF compression. Expect larger files than the source AVIF.",
      ],
    },
    {
      heading: "Batch and browser tips",
      paragraphs: [
        "Large batches work best on desktop browsers with enough RAM. If a tab crashes, split the folder into smaller groups. No artificial file-count cap applies.",
      ],
    },
  ],
  "jpg-to-webp": [
    {
      heading: "JPG to WebP for faster pages",
      paragraphs: [
        "WebP often shrinks hero images and blog photos 25–35% versus JPG at similar quality—helpful for Largest Contentful Paint and mobile data. Encode locally before uploading to WordPress, Shopify, or a static host.",
        "Adjust the WebP quality slider (default 85%) before converting. Lower values save more bytes; higher values preserve fine detail.",
      ],
    },
    {
      heading: "Always ship a JPG fallback",
      paragraphs: [
        "Use <picture> or your framework image component to serve WebP with JPG fallback. Email and very old browsers still need JPEG.",
      ],
    },
    {
      heading: "Private batch encode",
      paragraphs: [
        "Convert many JPGs in one session and download a ZIP of WebP files. Source photos never leave your machine—useful under GDPR when optimizing client galleries.",
      ],
    },
  ],
  "png-to-webp": [
    {
      heading: "Shrink PNG UI assets for production",
      paragraphs: [
        "Large PNG icons and illustrations inflate page weight. WebP with alpha support can cut bytes dramatically for marketing sites and SaaS dashboards.",
        "Run PNG to WebP in the browser before commit—no ImageMagick install required for a quick check.",
      ],
    },
    {
      heading: "Transparency in WebP",
      paragraphs: [
        "WebP supports alpha like PNG. Verify in target browsers; Safari and modern Chrome handle WebP transparency well. Keep PNG masters in your repo.",
      ],
    },
    {
      heading: "Lossy WebP from PNG",
      paragraphs: [
        "Our encoder uses lossy WebP for smaller files. For pixel-perfect UI, compare output zoomed in; raise quality on the slider if edges look soft.",
      ],
    },
  ],
};
