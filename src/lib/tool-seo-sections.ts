import type { ToolSeoSection } from "@/lib/tool-seo-types";

/** Extra on-page copy for AdSense / SEO (merged into each tool config). */
export const extraToolSeoSections: Record<string, ToolSeoSection[]> = {
  "heic-to-jpg": [
    {
      heading: "How HeicSave compares to other HEIC to JPG methods",
      paragraphs: [
        "Not every converter fits the same job. Cloud upload tools add privacy risk and wait time on slow Wi‑Fi. Windows Store codecs help preview only—they do not batch-convert a wedding folder for email. The table below summarizes what we tested on Windows 11 and macOS Sonoma in 2026.",
        "HeicSave keeps decoding in your browser tab. That matters for insurance scans, HR uploads, and family albums you do not want on a stranger's server.",
      ],
      table: {
        caption:
          "Subjective comparison for typical iPhone photo batches (50–200 files). Your mileage varies with RAM and browser.",
        headers: ["Method", "Files leave your device?", "Batch + ZIP", "EXIF preserved", "Best for"],
        rows: [
          [
            "HeicSave (this page)",
            "No — local WebAssembly",
            "Yes, no fixed cap",
            "Often (date, camera, orientation)",
            "Privacy, Windows without codecs, large folders",
          ],
          [
            "Cloud upload converters",
            "Yes — uploaded to their servers",
            "Varies; quotas common",
            "Sometimes stripped",
            "One-off converts when privacy is not a concern",
          ],
          [
            "Windows Photos + HEIF extension",
            "Stays local",
            "Manual export one-by-one",
            "Partial",
            "Previewing a few files only",
          ],
          [
            "Mac Preview / Photos export",
            "Stays local",
            "Tedious for 100+ files",
            "Usually yes",
            "Small sets on Mac",
          ],
          [
            "iPhone Settings → Most Compatible",
            "N/A — new photos only",
            "N/A",
            "N/A",
            "Stopping future HEIC, not fixing old folders",
          ],
        ],
      },
    },
    {
      heading: "Choose JPG, PNG, or WebP after HEIC",
      paragraphs: [
        "HEIC is a storage format on iPhone. Once you leave Apple's ecosystem, pick the output for the destination—not the other way around. Use this decision guide before you convert an entire trip folder to the wrong type.",
      ],
      table: {
        headers: ["Your goal", "Convert to", "Why"],
        rows: [
          [
            "Email, WhatsApp, employer portal, print shop",
            "JPG",
            "Universal; smallest practical size for photos",
          ],
          [
            "Photoshop, Figma, slides with text overlays",
            "PNG",
            "Lossless-friendly; use HEIC to PNG on this site",
          ],
          [
            "WordPress / Shopify hero images",
            "WebP",
            "Smaller than JPG; use HEIC to WebP",
          ],
          [
            "Premiere Pro / DaVinci stills",
            "JPG sequence",
            "Stable import; see our Premiere Pro HEIC guide",
          ],
          [
            "Archival master after heavy editing",
            "Keep HEIC original + export PNG",
            "Do not re-compress the only copy as low-quality JPG",
          ],
        ],
      },
    },
    {
      heading: "Technical limits and browser support (2026)",
      paragraphs: [
        "There is no artificial five-file cap on HeicSave. Practical limits come from device RAM and browser HEIC decode support. On an 8 GB Windows laptop, convert 40–60 full-resolution iPhone photos per batch; on 16 GB desktop Chrome, 150–200 is typical before the tab feels heavy.",
        "If the tab slows down, download the ZIP for the finished batch, refresh the page, and continue with the next group. Live Photo .mov sidecars should be excluded—convert still .heic files only.",
      ],
      table: {
        headers: ["Environment", "HEIC decode", "Batch tip"],
        rows: [
          ["Chrome / Edge on Windows 11", "Supported", "Best for 100+ file ZIP exports"],
          ["Firefox on Windows", "Supported in recent versions", "Split batches if memory is low"],
          ["Safari on Mac", "Supported", "Good for AirDrop folders"],
          ["Safari on iPhone / iPad", "Supported", "Smaller batches; use Wi‑Fi + power connected"],
          ["Chromebook", "Usually supported", "Smaller batches; see Chromebook HEIC guide"],
        ],
      },
    },
  ],
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
  "heic-to-webp": [
    {
      heading: "HEIC to WebP for faster website uploads",
      paragraphs: [
        "Modern CMS and blog platforms accept WebP for smaller uploads and faster pages. iPhone HEIC must be converted first—this tool does it locally without a cloud upload step.",
        "Use max-width presets when forms cap image dimensions or when you want consistent hero sizes.",
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
    {
      heading: "For developers and designers tired of cloud queues",
      paragraphs: [
        "Tired of waiting on cloud converter queues or upload limits when you need JPG from WebP assets? Convert megabytes of WebP in your active browser tab—no server upload, no account. Ideal for WordPress exports, Figma handoffs, and CI asset prep.",
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
    {
      heading: "For developers and designers tired of cloud queues",
      paragraphs: [
        "Tired of waiting for cloud queue limits during asset conversion? Convert megabytes of WebP or AVIF assets instantly in your active tab—decoded locally with JavaScript and Canvas, not uploaded to HeicSave. Built for frontend devs, UI designers, and WordPress site owners who need JPG now.",
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
  "jpg-to-png": [
    {
      heading: "How HeicSave compares to other JPG to PNG methods",
      paragraphs: [
        "Many portals reject JPEG but accept PNG for ID scans, insurance forms, and design handoffs. Cloud converters work, but they receive your document bytes on their servers. Desktop apps like Photoshop export one file at a time—slow for a folder of scans.",
        "HeicSave re-encodes JPG to PNG in your browser tab. That matters when the image contains names, addresses, or account numbers you do not want on a third-party upload queue.",
      ],
      table: {
        caption:
          "Typical workflow comparison for form uploads and design exports (2026).",
        headers: ["Method", "Files leave your device?", "Batch + ZIP", "Best for"],
        rows: [
          [
            "HeicSave (this page)",
            "No — Canvas in your tab",
            "Yes, no fixed cap",
            "Private scans, batch form prep, quick PNG handoffs",
          ],
          [
            "Cloud upload converters",
            "Yes — uploaded to their servers",
            "Quotas common",
            "One-off converts when privacy is not a concern",
          ],
          [
            "Photoshop / GIMP export",
            "Stays local",
            "Manual, one-by-one",
            "Heavy retouching before export",
          ],
          [
            "Paint / Preview Save As",
            "Stays local",
            "One file at a time",
            "Single screenshot or ID photo",
          ],
          [
            "Screenshot tools (PNG native)",
            "Stays local",
            "N/A",
            "New captures — not converting existing JPG",
          ],
        ],
      },
    },
    {
      heading: "When JPG to PNG beats staying on JPG",
      paragraphs: [
        "PNG is not always the right output—it is usually larger. Convert when the destination or workflow requires PNG, not because PNG sounds higher quality.",
      ],
      table: {
        headers: ["Your situation", "Convert to PNG?", "Why"],
        rows: [
          [
            "Government or university portal accepts PNG only",
            "Yes",
            "Avoid rejected uploads; PNG is whitelisted",
          ],
          [
            "Design tool import (Figma, Canva, older CMS)",
            "Yes",
            "Stable decode; no extra JPEG generation loss in the pipeline",
          ],
          [
            "Image with text, UI, or sharp edges",
            "Often yes",
            "PNG avoids JPEG ringing on high-contrast edges",
          ],
          [
            "Email or WhatsApp photo share",
            "Usually no — use PNG to JPG",
            "JPG is smaller and universally accepted",
          ],
          [
            "Archival master after editing",
            "Maybe — keep original JPG too",
            "PNG cannot restore detail lost in the source JPEG",
          ],
        ],
      },
    },
    {
      heading: "Real scenarios: forms, scans, and design handoffs",
      paragraphs: [
        "Job applications and visa portals sometimes show \"unsupported format\" for .jpg even when the photo looks fine on your phone. Converting to PNG locally fixes the extension and container without uploading your ID to a random converter site.",
        "Marketing teams often receive JPG exports from clients but need PNG for slide decks with text overlays. Batch convert here, download a ZIP, and attach PNGs to PowerPoint or Google Slides—nothing passes through our servers.",
        "If a single file fails, confirm it is a real JPEG (not a misnamed WebP or HEIC). Hard-refresh the page and retry with Chrome or Edge on desktop for large batches.",
      ],
    },
  ],
  "png-to-jpg": [
    {
      heading: "How HeicSave compares to other PNG to JPG methods",
      paragraphs: [
        "PNG screenshots and exports are often 3–10× larger than JPEG for photographic content. Cloud compressors shrink files but upload your bytes. Windows Paint and Mac Preview can save as JPEG one file at a time.",
        "HeicSave batch-converts PNG to JPG in the browser with an adjustable quality slider—useful before Outlook attachments, HR uploads, and chat apps with size caps.",
      ],
      table: {
        caption: "Comparison for shrinking PNG attachments and portal uploads.",
        headers: ["Method", "Files leave your device?", "Batch + ZIP", "Quality control"],
        rows: [
          [
            "HeicSave (this page)",
            "No — Canvas encode in tab",
            "Yes",
            "Slider 60–100% (default 90%)",
          ],
          [
            "Cloud PNG to JPG tools",
            "Yes — server upload",
            "Varies",
            "Often fixed quality",
          ],
          [
            "Paint / Preview Save As JPEG",
            "Stays local",
            "One-by-one",
            "Limited presets",
          ],
          [
            "Photoshop Export As JPEG",
            "Stays local",
            "Manual batch actions",
            "Full control; slower for dozens of files",
          ],
          [
            "Email client auto-resize",
            "Stays in mail app",
            "Per message",
            "Unpredictable quality",
          ],
        ],
      },
    },
    {
      heading: "When PNG to JPG is the right move",
      table: {
        headers: ["Your goal", "PNG to JPG?", "Tip"],
        rows: [
          [
            "Outlook / Gmail attachment over 10–25 MB",
            "Yes",
            "Start at 85–90% quality; lower if still too large",
          ],
          [
            "Employer portal 2–5 MB file cap",
            "Yes",
            "Pair with [Compress JPG](/compress-jpg) if still over limit",
          ],
          [
            "WhatsApp / Telegram image send",
            "Yes",
            "JPG avoids PNG size penalty on mobile data",
          ],
          [
            "Logo or UI with transparency",
            "Careful — JPG flattens alpha",
            "Keep PNG master; export JPG only for sharing",
          ],
          [
            "Print shop asks for PNG/TIFF",
            "No — keep PNG",
            "Do not convert lossy for print unless they require JPG",
          ],
        ],
      },
    },
    {
      heading: "File size and transparency expectations",
      paragraphs: [
        "Photographic PNGs often drop 70–90% in file size when converted to high-quality JPG. Screenshots with flat color compress even more aggressively.",
        "Transparent PNG areas become a solid background in JPG—that is normal. If you need alpha, stay on PNG or convert to WebP with our [PNG to WebP](/png-to-webp) tool instead.",
        "For a folder of PNGs, convert in one session and download a ZIP of JPGs. Desktop Chrome or Edge handles large batches best; split groups if the tab feels slow on 8 GB RAM.",
      ],
    },
  ],
  "compress-jpg": [
    {
      heading: "How HeicSave compares to other JPG compressors",
      paragraphs: [
        "Most \"compress JPG online\" sites upload your photos to their servers. Phone gallery apps compress one image at a time. HeicSave re-encodes in the browser with visible quality and max-width controls—built for portal limits and email attachments without cloud privacy risk.",
      ],
      table: {
        caption:
          "Subjective comparison for shrinking JPG before upload (typical phone photos, 2026).",
        headers: ["Method", "Files leave your device?", "Resize + quality", "Best for"],
        rows: [
          [
            "HeicSave (this page)",
            "No — local re-encode",
            "Slider + max-width presets + scene shortcuts",
            "Forms, email, batch receipts/IDs",
          ],
          [
            "Cloud JPG compressors",
            "Yes — uploaded",
            "Varies",
            "Quick one-offs when privacy OK",
          ],
          [
            "iPhone Photos / Google Photos export",
            "Stays on device",
            "Limited control",
            "Casual sharing, not precise MB targets",
          ],
          [
            "Photoshop Save for Web",
            "Stays local",
            "Full control",
            "Pro workflows; slow for 100+ files",
          ],
          [
            "Zip archives only (no re-encode)",
            "Stays local",
            "No pixel change",
            "Does not help strict image MB caps",
          ],
        ],
      },
    },
    {
      heading: "Upload limits by scenario — quick preset guide",
      paragraphs: [
        "Use the scene presets on this page to match common caps. Then fine-tune the quality slider if the portal still rejects the file.",
      ],
      table: {
        headers: ["Scenario", "Typical limit", "Suggested preset", "If still too large"],
        rows: [
          [
            "Job / gov / school web form",
            "2–5 MB per file",
            "Form / portal (65%, 1280 px)",
            "Try Smallest file or lower quality to 55%",
          ],
          [
            "Email attachment (Outlook/Gmail)",
            "~10–25 MB total message",
            "Email attachment (75%, 1920 px)",
            "Compress each JPG separately before attaching",
          ],
          [
            "ID scan or receipt upload",
            "Readable text required",
            "ID & document scan (82%, 2048 px)",
            "Raise quality before shrinking width",
          ],
          [
            "WhatsApp / Telegram / Discord",
            "Varies; often aggressive",
            "Chat & social (70%, 1280 px)",
            "Use Smallest file preset",
          ],
          [
            "Very tight cap (under 1 MB)",
            "Under 1 MB",
            "Smallest file (55%, 1280 px)",
            "Reduce max width to 1280 or 960 manually",
          ],
        ],
      },
    },
    {
      heading: "Quality, EXIF, and what changes when you compress",
      paragraphs: [
        "Compressing JPG applies a new generation of JPEG compression. At 75–85% quality, most phone photos still look fine for forms and email. Below 60%, watch for soft text on document scans.",
        "Re-encoding through the browser canvas typically strips GPS and camera EXIF—often desirable before uploading personal documents. Keep your original JPG if you need the full metadata archive.",
        "Batch compress an entire folder, then download one ZIP. Results show before/after file size on each row so you can confirm the savings before you upload.",
      ],
    },
  ],
  "strip-exif": [
    {
      heading: "How HeicSave compares to other EXIF removal tools",
      paragraphs: [
        "EXIF can embed GPS coordinates, device serials, and capture timestamps. Cloud \"metadata remover\" sites receive your full image bytes. Desktop tools like exiftool are powerful but require installs and command-line comfort.",
        "HeicSave re-encodes images locally and supports HEIC, JPG, PNG, WebP, and AVIF in one batch—HEIC converts to JPG without copying EXIF forward.",
      ],
      table: {
        caption: "Privacy-focused comparison for removing photo metadata before sharing.",
        headers: ["Method", "Files leave your device?", "HEIC support", "Batch + ZIP"],
        rows: [
          [
            "HeicSave (this page)",
            "No — browser re-encode",
            "Yes → JPG without EXIF",
            "Yes",
          ],
          [
            "Cloud EXIF remover sites",
            "Yes — full upload",
            "Rare",
            "Quotas common",
          ],
          [
            "exiftool (CLI)",
            "Stays local",
            "With plugins",
            "Scriptable; steep learning curve",
          ],
          [
            "Phone \"Remove location\" toggle",
            "Stays on device",
            "Varies",
            "One photo at a time",
          ],
          [
            "Social app \"strip on upload\"",
            "Uploads to platform",
            "Platform-dependent",
            "You trust the platform policy",
          ],
        ],
      },
    },
    {
      heading: "What metadata stripping actually removes",
      paragraphs: [
        "Re-encoding produces a new file without the original EXIF/IPTC blocks. Some quality change may occur for JPG and WebP outputs; PNG stays lossless relative to decoded pixels.",
      ],
      table: {
        headers: ["Data type", "Usually removed?", "Why it matters"],
        rows: [
          ["GPS latitude / longitude", "Yes", "Reveals home, school, or sale meetup location"],
          ["Camera make / model", "Yes", "Identifies your phone or gear"],
          ["Date / time taken", "Often yes", "Can confirm when you were at a place"],
          ["Orientation tag", "Replaced by pixels", "Output displays correctly without tag"],
          ["IPTC caption / copyright", "Yes", "Rare on phone photos; gone after re-encode"],
          ["Visible image content", "Unchanged", "Stripping metadata is not the same as blurring faces"],
        ],
      },
    },
    {
      heading: "When to strip EXIF before you post or sell",
      paragraphs: [
        "Facebook Marketplace, Craigslist, and dating-app screenshots: buyers do not need your GPS. iPhone HEIC shots are high risk because location is embedded by default until you strip or use a stripped export.",
        "Newsletter photos and blog posts: remove EXIF from staff headshots and office pictures so you do not leak internal locations or device inventories.",
        "Mixed batches: add HEIC, JPG, and PNG in one session—each file re-encodes to JPG, PNG, or WebP without metadata. Download a ZIP of clean files ready to upload.",
        "For legal or forensic workflows, keep an unmodified original separately. This tool is for sharing copies, not destroying your only archive.",
      ],
    },
  ],
};
