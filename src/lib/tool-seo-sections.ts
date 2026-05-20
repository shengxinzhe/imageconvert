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
      heading: "AVIF adoption vs desktop reality",
      paragraphs: [
        "Major browsers display AVIF well, but many desktop photo viewers, slide decks, and print shops do not. Converting AVIF to JPG gives you a copy that opens everywhere while you keep AVIF on the web for performance.",
        "Use an updated Chrome or Edge for the most reliable in-browser AVIF decode.",
      ],
    },
    {
      heading: "Quality slider and batch ZIP",
      paragraphs: [
        "Set JPEG quality before converting. Add multiple AVIF files, convert in one click, and download all JPGs in a ZIP—ideal when a CDN served AVIF but your team needs JPG attachments.",
      ],
    },
    {
      heading: "AVIF vs JPG size",
      paragraphs: [
        "AVIF is often smaller at similar visual quality. JPG output may be larger—that is the cost of compatibility. For archiving masters, keep the original AVIF when possible.",
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
