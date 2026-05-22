export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  /** When set, shown in UI and JSON-LD dateModified */
  updatedAt?: string;
  readMinutes: number;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-heic-file",
    title: "What Is a HEIC File? Complete Guide (2026)",
    description:
      "Learn what HEIC files are, why iPhones use them, and how to open or convert HEIC on Windows and Mac.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-05-22",
    readMinutes: 10,
    content: `*Last updated: May 22, 2026*

HEIC (High Efficiency Image Container) is Apple's default photo format on modern iPhones. It uses advanced compression to store photos at roughly half the size of JPEG with similar visual quality.

If you received a .heic file on Windows, tried to email it, or opened Google Drive and saw thumbnails that will not preview—you are dealing with the same format problem millions of iPhone users hit every week.

## Why does Apple use HEIC?

Storage on phones is precious. HEIC keeps more photos on device and in iCloud while maintaining detail. Apple has pushed the format since iOS 11. The trade-off is compatibility outside Apple's ecosystem.

## HEIC vs HEIF — same family

You may see **.heic**, **.heif**, or **.HEIC** extensions. For still photos from iPhone they are the same practical format. Our [HEIC to JPG](/heic-to-jpg) tool accepts common variants.

## Can Windows open HEIC?

Windows 10/11 can open HEIC **after** optional codecs from the Microsoft Store (HEIF Image Extensions, sometimes HEVC). Many users skip that and convert to JPG instead—especially on work PCs without admin rights.

See our full walkthrough: [How to Open and Convert HEIC on Windows](/blog/heic-windows-guide).

## How to convert HEIC (no upload)

Use a browser-based converter that processes files locally. Our [HEIC to JPG](/heic-to-jpg) tool lets you:

- Convert **many files in one session** (no fixed batch cap)
- Adjust **JPEG quality** with a slider before converting
- Download results individually or as a **ZIP**
- Keep common **EXIF** data (date, camera model) in JPG when possible

Nothing is uploaded to our servers. For transparency or editing workflows, use [HEIC to PNG](/heic-to-png) instead.

## Common scenarios in 2026

| Situation | What to do |
|---|---|
| Email attachment rejected | Convert to JPG first |
| Google Drive folder full of HEIC | Download ZIP → batch convert → re-upload JPGs ([guide](/blog/heic-google-drive-batch-convert)) |
| iPhone → Windows USB copy still HEIC | Normal—convert after transfer ([transfer guide](/blog/transfer-iphone-photos-to-windows)) |
| Need lossless raster | [HEIC to PNG](/heic-to-png) |
| Live Photo (.heic + .mov) | Convert the **.heic still only** ([Live Photo guide](/blog/heic-live-photo-guide)) |

## HEIC vs JPG

| | HEIC | JPG |
|---|---|---|
| Size | Smaller | Larger |
| Compatibility | Apple-first | Universal |
| Best for | iPhone storage | Sharing everywhere |
| Print shops / government forms | Often rejected | Accepted |

When you need to email photos to family or upload to a legacy portal, JPG remains the safe choice.

## Related guides

- [Why iPhone uses HEIC](/blog/why-iphone-uses-heic)
- [HEIC vs JPG comparison](/blog/heic-vs-jpg)
- [Transfer iPhone photos to Windows](/blog/transfer-iphone-photos-to-windows)`,
  },
  {
    slug: "why-iphone-uses-heic",
    title: "Why iPhone Uses HEIC Instead of JPG",
    description:
      "Apple switched to HEIC for storage efficiency. Here's what that means for sharing and compatibility.",
    publishedAt: "2026-01-18",
    updatedAt: "2026-05-22",
    readMinutes: 7,
    content: `*Last updated: May 22, 2026*

Since iOS 11, the iPhone camera saves photos as HEIC by default. Apple chose efficiency: you fit more photos on your phone and use less iCloud bandwidth.

## The sharing problem

Recipients on Windows or older Android devices may not open HEIC without extra software. Email clients, school portals, and print shops still expect JPG. That is why conversion tools are in high demand.

## "Transfer to Mac or PC" — Automatic vs Most Compatible

**Settings → Photos → Transfer to Mac or PC** controls what leaves your iPhone over USB:

- **Automatic** — iOS converts to JPG **only if** it thinks the PC cannot handle HEIC. Windows driver and codec changes can confuse this, so you may still get HEIC files.
- **Keep Originals** — always HEIC.

If Windows keeps receiving HEIC despite Automatic, convert after copy or switch camera format (below).

## Switch to JPG on iPhone (new photos only)

**Settings → Camera → Formats → Most Compatible** forces new photos to JPEG. Existing HEIC files still need conversion.

## Convert existing HEIC

Use our free [HEIC to JPG converter](/heic-to-jpg): private, in your browser, no account, no watermark. Add multiple photos, pick your JPEG quality, and download a ZIP if you converted a whole album.

For Windows-specific steps after USB copy, see [Transfer iPhone photos to Windows](/blog/transfer-iphone-photos-to-windows).`,
  },
  {
    slug: "heic-vs-jpg",
    title: "HEIC vs JPG: Quality, Size, and When to Use Each",
    description:
      "Compare HEIC and JPG for quality, file size, and compatibility in 2026.",
    publishedAt: "2026-01-22",
    updatedAt: "2026-05-22",
    readMinutes: 9,
    content: `*Last updated: May 22, 2026*

Both formats store photos, but they target different goals. Picking the wrong one wastes time when a portal rejects your upload or a Windows PC shows blank thumbnails.

## File size

HEIC typically wins at the same perceived quality—often ~50% smaller than JPG. That is why iPhones use it by default.

## Compatibility

JPG works everywhere: email, print shops, government portals, and 20-year-old software. HEIC needs modern support or a conversion step.

## When to keep HEIC vs convert to JPG

| Goal | Format |
|---|---|
| Maximize iPhone storage | HEIC on phone |
| Email to anyone | JPG |
| Upload to legacy web form | JPG |
| Long-term archive on Windows HDD | JPG (or PNG for lossless) |
| Edit in Photoshop on Windows without codecs | Convert first |

## When to use PNG instead of JPG

Choose [HEIC to PNG](/heic-to-png) when you need a lossless raster, transparency from edited exports, or want to avoid JPEG compression artifacts before further editing. PNG files are larger—use JPG for sharing.

Read: [HEIC to PNG: when and how](/blog/heic-to-png-when-and-how).

## Quality when you convert

At high JPEG quality both look excellent. On [HeicSave](/heic-to-jpg) you can set the slider (default 90%) before converting. We also try to copy common EXIF tags into the JPG; GPS and rare fields may still drop.

## Recommendation

- **Keep HEIC** on iPhone for storage.
- **Convert to JPG** when sharing outside Apple's ecosystem.
- Use [HEIC to PNG](/heic-to-png) when you need lossless PNG workflows.`,
  },
  {
    slug: "heic-windows-guide",
    title: "How to Open and Convert HEIC on Windows (2026 Guide)",
    description:
      "Step-by-step: open HEIC on Windows 10/11 without codecs, or convert to JPG online.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-05-22",
    readMinutes: 12,
    content: `*Last updated: May 22, 2026*

Windows users receive HEIC files from iPhone users daily. Here is how to handle them in 2026—whether you copied photos over USB, synced iCloud, or downloaded a ZIP from Google Drive.

## Option 1: Install HEIC codecs (admin may be required)

Microsoft Store offers **HEIF Image Extensions** (often free) and sometimes **HEVC Video Extensions** (paid on some PCs). After install, Photos may open HEIC and Explorer may show thumbnails.

Quick install via winget (PowerShell):

\`\`\`
winget install Microsoft.HEIFImageExtension
\`\`\`

**Limitations:** locked-down work PCs, missing HEVC for some color profiles, and batch workflows still awkward compared to converting once to JPG.

## Option 2: Convert in the browser (no install — recommended)

1. Open [HEIC to JPG](/heic-to-jpg) in **Chrome or Edge** (best HEIC decode on Windows).
2. Drag .heic files into the drop zone—or click Browse files.
3. Set **JPEG quality** if you want smaller or sharper files.
4. Click **Convert**, then download each JPG or **Download all as ZIP**.

Conversion runs in your browser—nothing uploads to a server.

### Why browser-local beats random upload sites

| | HeicSave (browser-local) | Cloud uploader |
|---|---|---|
| Privacy | Files stay on your PC | Uploaded to third party |
| Batch + ZIP | Yes | Often capped |
| Admin rights | Not needed | Not needed |
| Account | None | Often required |

## Option 3: Photos app one-by-one

If codecs are installed: open in **Photos → ⋯ → Save as → JPEG**. Fine for a few files; painful for vacation folders.

## Batch conversion tips

There is no fixed “5 files” or “10 MB” cap on HeicSave. Very large folders may slow down your PC; if the tab struggles, convert in smaller groups of 50–100. HeicSave warns when a batch or file size looks heavy for your device.

For Google Drive workflows specifically, see [Batch convert HEIC from Google Drive](/blog/heic-google-drive-batch-convert).

## Troubleshooting (2026)

| Problem | What to try |
|---|---|
| Photos app spins forever | Codecs missing; use browser conversion |
| Email won't attach HEIC | Convert to JPG first |
| Blank thumbnails in Explorer | Install HEIF extension or convert |
| USB copy still HEIC | Normal—see [transfer guide](/blog/transfer-iphone-photos-to-windows) |
| Conversion failed | Chrome/Edge, confirm .heic not .mov Live Photo video |
| Need transparency / lossless | [HEIC to PNG](/heic-to-png) |

## Related guides

- [Transfer iPhone photos to Windows](/blog/transfer-iphone-photos-to-windows)
- [What is a HEIC file?](/blog/what-is-heic-file)
- [HEIC to PNG when you need it](/blog/heic-to-png-when-and-how)`,
  },
  {
    slug: "heic-mac-guide",
    title: "Convert HEIC to JPG on Mac — Preview vs Online Tools",
    description:
      "Use Preview for one-offs or a free online batch converter for speed.",
    publishedAt: "2026-02-05",
    readMinutes: 5,
    content: `Mac opens HEIC natively in Preview and Photos.

## Preview method

1. Open HEIC in Preview.
2. File → Export.
3. Choose JPEG, set quality, save.

Fine for one image; slow for dozens.

## Online batch tool

Use [HEIC to JPG](/heic-to-jpg) in Safari or Chrome:

- Drop many files at once
- Adjust JPEG quality on the slider
- Download a **ZIP** of all JPGs
- EXIF (date taken, camera) is preserved when possible

## Privacy

Browser tools that process locally never send your photos to a third-party server—useful for client work under NDA.`,
  },
  {
    slug: "best-heic-converters-2026",
    title: "Best HEIC Converters in 2026 (Free & Private)",
    description:
      "Compare HEIC conversion options: desktop apps, cloud uploaders, and browser-local tools.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-05-22",
    readMinutes: 11,
    content: `*Last updated: May 22, 2026*

Choosing a HEIC converter depends on privacy, batch size, and install tolerance. This comparison reflects options commonly used in 2026.

## Browser-local (recommended)

**HeicSave** — [HEIC to JPG](/heic-to-jpg):

- No upload; files stay in your browser
- No account, no watermark, free
- **No fixed** file-count or 10 MB limits (device memory is the practical cap)
- Batch convert + **ZIP download**
- **JPEG quality** slider
- **EXIF** copied to JPG when supported

Also: [HEIC to PNG](/heic-to-png), [WebP](/webp-to-jpg), and [AVIF](/avif-to-jpg) tools.

**Best for:** Windows users without admin rights, privacy-sensitive photos, quick batches from Google Drive or USB copy.

## Desktop (offline install)

- **iMazing HEIC Converter** — free Mac/Windows, offline, straightforward batches.
- **XnConvert** — power users, scripts, many formats.
- **IrfanView + plugins** — lightweight viewer with batch export.

**Best for:** recurring offline workflows, IT automation, air-gapped machines with install rights.

## Cloud upload (caution)

Sites that upload photos to servers may violate privacy policies for medical or legal images. Read privacy policies before uploading client or family photos.

**Best for:** only when you explicitly trust the operator and policy.

## Windows codec route

Install HEIF/HEVC from Microsoft Store so Photos opens HEIC natively. Works for viewing; batch export to JPG is still tedious compared to browser batch + ZIP.

## Scenario picker

| You need… | Try first |
|---|---|
| 50+ iPhone photos on Windows, no install | [HEIC to JPG](/heic-to-jpg) in Chrome/Edge |
| Google Drive folder of HEIC | [Drive batch guide](/blog/heic-google-drive-batch-convert) |
| Lossless edit pipeline | [HEIC to PNG](/heic-to-png) |
| AVIF from a CDN on Windows | [AVIF to JPG](/avif-to-jpg) + [Windows guide](/blog/convert-avif-to-jpg-windows) |
| WebP assets for email | [WebP to JPG](/webp-to-jpg) + [Windows guide](/blog/convert-webp-to-jpg-windows) |

## Our pick

For quick, private conversion without installs, use browser-local tools first. Install desktop apps when you need scripted offline automation every week.`,
  },
  {
    slug: "avif-explained",
    title: "AVIF Explained: The Next-Gen Image Format for the Web",
    description:
      "What AVIF is, browser support, and when to convert AVIF to JPG or PNG.",
    publishedAt: "2026-02-15",
    readMinutes: 8,
    content: `AVIF is based on AV1 video compression and delivers excellent quality at small file sizes.

## Who uses AVIF?

CDNs, WordPress plugins, and performance-focused sites serve AVIF with JPG fallbacks.

## Browser support

Major browsers decode AVIF in the tab. Desktop apps often don't—hence [AVIF to JPG](/avif-to-jpg) demand. Use Chrome or Edge for the most reliable in-browser conversion.

## Convert when needed

- **[AVIF to JPG](/avif-to-jpg)** for universal sharing—adjust JPEG quality on the slider.
- **[AVIF to PNG](/avif-to-png)** for design pipelines.

Batch and ZIP work the same as our HEIC tools: multiple files, download together when you need them.

## Future

As AVIF support spreads, converters remain a bridge format—similar to HEIC today.

**Need step-by-step on Windows?** Read [How to convert AVIF to JPG on Windows](/blog/convert-avif-to-jpg-windows).`,
  },
  {
    slug: "convert-avif-to-jpg-windows",
    title: "Convert AVIF to JPG on Windows (Free, No Upload)",
    description:
      "Convert AVIF images to JPG on Windows 10/11 in Chrome or Edge—batch files, adjust quality, download ZIP. No install, no server upload.",
    publishedAt: "2026-05-19",
    readMinutes: 11,
    content: `You downloaded an **.avif** image—or a site exported one—and Windows will not open it in email, Word, or an old uploader. **JPG** is still the format everyone accepts. This guide shows reliable ways to convert **AVIF to JPG on Windows** without installing codecs or uploading photos to a random server.

> **Quick answer:** Open our free **[AVIF to JPG](/avif-to-jpg)** tool in **Chrome or Edge**, drop your files, set JPEG quality, convert, and download JPGs or a ZIP—all in the browser.

## What is AVIF?

**AVIF** (AV1 Image File Format) uses modern compression. Websites and CDNs use it because files are small and sharp. Windows **Photos**, older **Paint** builds, and many desktop apps still expect **.jpg** or **.png**, not .avif.

That gap is why searches like **“avif to jpg”** are common: the file is fine in a browser tab but stuck everywhere else.

## Does Windows 10/11 open AVIF natively?

Support has improved, but it is inconsistent:

- **Microsoft Store codecs** may help in some apps—not every workflow (Outlook, legacy CMS, print shops).
- **Paint** on older Windows builds often has no AVIF.
- **Batch folders** from a CDN or design export are painful to open one-by-one.

Converting to JPG once is usually faster than fighting codecs on every PC you touch.

## Method 1: Browser conversion (recommended — no upload)

**HeicSave** runs conversion **locally** in your tab using the browser’s image decoder and Canvas. Files are **not uploaded** to us for processing.

### Steps on Windows

1. Open **Chrome** or **Edge** (best AVIF decode support).
2. Go to **[AVIF to JPG](/avif-to-jpg)**.
3. Drag one or many **.avif** files into the drop zone (or click to browse).
4. Move the **JPEG quality** slider if you need smaller files (default is tuned for sharing).
5. Click **Convert**.
6. Download each JPG or use **Download all as ZIP** for batches.

### Why use the browser instead of a random “online converter”?

| | Browser-local (HeicSave) | Typical cloud uploader |
|---|---|---|
| Privacy | Stays on your PC | Uploads to their server |
| Batch | Many files + ZIP | Often limited |
| Account | Not required | Often required |
| Watermark | None on our tool | Common on free tiers |

For client work, medical scans, or unreleased assets, local conversion avoids third-party storage.

## Method 2: Windows Photos / Paint

If AVIF already opens on your PC:

1. Open the image in **Photos**.
2. **⋯ → Save as** or **Print → Microsoft Print to PDF** workarounds are clumsy for batches.
3. **Paint** (newer Windows 11) may open AVIF and **Save as → JPEG** for one file.

For **dozens of files** from a download folder, Method 1 scales better.

## Method 3: Desktop tools (offline, install required)

- **XnConvert** — free, batch, scripts; good for power users.
- **FFmpeg** — run **ffmpeg -i input.avif output.jpg** in a terminal; fast for IT teams.
- **IrfanView** with plugins — lightweight viewer + batch.

These shine when you need automation; for a one-off folder on a locked-down PC, the browser tool avoids admin rights.

## JPEG quality: what slider value should you use?

- **90–95%** — near-original look; larger JPGs; good for printing or archiving.
- **80–85%** — sweet spot for email and chat; much smaller files.
- **70% and below** — only when size matters more than fine detail.

Our [AVIF to JPG](/avif-to-jpg) tool exposes the slider **before** you convert so you do not re-run a huge batch.

## Batch conversion and ZIP download

There is no artificial “5 files only” cap—practical limits are **RAM** and browser stability. Tips for large sets on Windows:

- Close other heavy tabs before converting 100+ images.
- Split into chunks of 50–80 if the tab slows down.
- Prefer desktop Chrome/Edge over mobile browsers for big folders.
- Use **ZIP** once at the end instead of clicking save on every file.

## Common scenarios

### Microsoft Designer / CDN exports

Design tools and performance plugins sometimes deliver **.avif** assets. If a Windows app rejects them, convert to JPG, then import. For transparency, use **[AVIF to PNG](/avif-to-png)** instead.

### Email and legacy upload forms

Most web forms still accept **.jpg** only. Convert AVIF → JPG before attaching.

### WordPress or static site assets

Keep AVIF for the live site if you use a **picture** element with JPG fallbacks; keep a **JPG master** for editors and stakeholders on Windows.

## Troubleshooting

| Problem | What to try |
|---|---|
| File will not load | Confirm extension is .avif; try Chrome/Edge; re-download if corrupt |
| Colors look dull | AVIF is often wide-gamut; JPG is sRGB—slight shift is normal |
| Conversion fails mid-batch | Fewer files per run; close other tabs; check available RAM |
| Need transparency | Use [AVIF to PNG](/avif-to-png); JPG has no alpha |
| Animated AVIF | Our tool targets still images; export a frame first |

## AVIF vs JPG at a glance

| | AVIF | JPG |
|---|---|---|
| Size | Usually smaller | Larger |
| Windows app support | Growing, uneven | Universal |
| Best for | Web delivery, archives | Sharing, email, print |
| Transparency | Yes (AVIF) | No |

## Related tools and guides

- **[AVIF to JPG](/avif-to-jpg)** — main converter (this guide’s shortcut)
- **[AVIF to PNG](/avif-to-png)** — lossless-style raster for design
- **[AVIF explained](/blog/avif-explained)** — format background
- **[WebP to JPG](/webp-to-jpg)** — similar workflow for .webp files
- **[HEIC to JPG](/heic-to-jpg)** — iPhone photos on Windows

## Privacy

Conversion runs in your browser. We do not receive your image bytes for processing. Analytics and ads (if enabled) follow our [Privacy](/privacy) page and cookie banner—separate from your files.

**Ready?** Open **[AVIF to JPG](/avif-to-jpg)** and convert your first file in under a minute.`,
  },
  {
    slug: "webp-vs-jpg",
    title: "WebP vs JPG: Which Format Should You Use in 2026?",
    description:
      "Compare WebP and JPG for websites, email, and storage. Plus free conversion tools.",
    publishedAt: "2026-02-20",
    readMinutes: 7,
    content: `WebP is Google's modern image format for the web; JPG is the universal photo standard.

## Size

WebP is often 25–35% smaller than JPG at similar quality.

## Compatibility

JPG wins for email and legacy apps. WebP wins on modern websites with fallbacks.

## Conversion tools

- [JPG to WebP](/jpg-to-webp) — optimize for your site; set **WebP quality** on the slider (default 85%).
- [WebP to JPG](/webp-to-jpg) — share with anyone; batch + ZIP supported.

**Windows step-by-step:** [How to convert WebP to JPG on Windows](/blog/convert-webp-to-jpg-windows).

All conversion is local in the browser—no upload.

## Best practice

Serve WebP with <picture> and JPG fallback. Keep masters in JPG or RAW.`,
  },
  {
    slug: "webp-for-developers",
    title: "WebP for Developers: Encode, Decode, and Convert",
    description:
      "Practical WebP guide for frontend devs: convert PNG/JPG to WebP and back.",
    publishedAt: "2026-02-25",
    readMinutes: 6,
    content: `Developers adopt WebP for Lighthouse scores and bandwidth savings.

## Encode locally

Before CI, run [PNG to WebP](/png-to-webp) or [JPG to WebP](/jpg-to-webp) on marketing assets. Tune quality in the UI—no fixed file-size gate.

## Decode for stakeholders

[WebP to PNG](/webp-to-png) when design needs PNG in Figma handoffs. [WebP to JPG](/webp-to-jpg) for email attachments.

## Canvas API

Modern browsers encode WebP via canvas.toBlob—our tool wraps that client-side, same as production would.

## Don't forget fallbacks

Always ship JPG/PNG fallbacks for email clients and ancient browsers.`,
  },
  {
    slug: "privacy-browser-image-conversion",
    title: "Why Browser-Local Image Conversion Matters for Privacy",
    description:
      "GDPR, client photos, and why files should stay on-device when converting HEIC and AVIF.",
    publishedAt: "2026-03-01",
    readMinutes: 6,
    content: `Uploading family photos or client assets to random converters creates GDPR and security risk.

## Client-side processing

Tools that use WebAssembly (HEIC) or Canvas (WebP/AVIF) keep bytes on your device. HeicSave does not receive your image files for conversion.

## What we don't limit artificially

There is no “5 files only” or “10 MB max” rule in our tools. Very large batches may still fail if your browser runs out of memory—we show a friendly warning, not a paywall.

## GDPR & cookies

EU users see a cookie banner for analytics and Google AdSense. You can accept or decline. Image bytes are not part of that processing.

## What we collect

Analytics (with consent) and standard server logs—not your image files. Questions: [privacy@heicsave.com](mailto:privacy@heicsave.com) or our [Contact](/contact) page.

## Try it

[HEIC to JPG](/heic-to-jpg) · [AVIF to PNG](/avif-to-png) · [WebP to JPG](/webp-to-jpg)`,
  },
  {
    slug: "transfer-iphone-photos-to-windows",
    title: "How to Transfer iPhone Photos to a Windows PC (2026 Guide)",
    description:
      "Copy iPhone photos to Windows without HEIC headaches. USB, iCloud, and browser conversion options explained.",
    publishedAt: "2026-05-19",
    readMinutes: 9,
    content: `Moving photos from an iPhone to a Windows PC should be simple—but Apple's default HEIC format often breaks the workflow. Here is what works in 2026.

## Why Windows struggles with iPhone photos

Modern iPhones save still photos as **HEIC** (High Efficiency Image Container). Windows 10 and 11 do not always open .heic files out of the box. You may see a blank thumbnail, an error in Photos, or files that refuse to attach to email.

JPG is still what most Windows apps, printers, and upload forms expect.

## Method 1: USB cable (File Explorer)

1. Connect iPhone with a Lightning or USB-C cable.
2. Unlock the phone and tap **Trust This Computer** if prompted.
3. Open **File Explorer** → **Apple iPhone** → **Internal Storage** → **DCIM**.
4. Copy folders to your PC.

**Catch:** copied files are often still HEIC. They may not preview until you install codecs or convert them.

## Method 2: iCloud for Windows

Install **iCloud for Windows**, sign in, and enable **Photos**. New iPhone shots sync to the iCloud Photos folder on your PC.

**Catch:** sync can take time on slow connections, and HEIC compatibility on Windows still applies unless you change iPhone camera settings to **Most Compatible** (JPG).

## Method 3: Convert HEIC to JPG in the browser (no install)

If you already copied HEIC files—or received them by AirDrop to a Mac and moved them via USB stick—convert locally:

1. Open [HEIC to JPG](/heic-to-jpg) in **Chrome or Edge**.
2. Drag your .heic files into the drop zone.
3. Adjust **JPEG quality** if needed (default 90%).
4. Click **Convert**, then download each JPG or **Download all as ZIP**.

Processing happens **in your browser**. Nothing uploads to our servers—useful for personal, medical, or client photos.

## Method 4: Shoot JPG on iPhone going forward

**Settings → Camera → Formats → Most Compatible** makes new photos JPEG. Existing HEIC files still need conversion.

## Batch tips for large albums

There is no fixed file-count cap on HeicSave—practical limits are your PC memory and browser tab stability. For hundreds of vacation photos:

- Convert in groups of 50–100 if the tab feels slow.
- Close other heavy tabs before a big batch.
- Prefer desktop Chrome or Edge over mobile Safari for very large folders.

## HEIC vs JPG after transfer

| Goal | Format |
|---|---|
| Keep iPhone storage efficient | HEIC on phone |
| Open on Windows without codecs | JPG on PC |
| Print shop or government portal | JPG |
| Edit with maximum flexibility | [HEIC to PNG](/heic-to-png) first |

## Troubleshooting

- **PC does not see iPhone** — try another cable, unlock phone, reinstall Apple Mobile Device support / iTunes components on older Windows builds.
- **Photos look rotated wrong** — EXIF orientation is copied to JPG when supported; re-export from Photos on Mac if needed.
- **Live Photo pairs (.heic + .mov)** — convert the .heic still; see our [Live Photo guide](/blog/heic-live-photo-guide).

For a Windows-only walkthrough, see [How to Open and Convert HEIC on Windows](/blog/heic-windows-guide). For Google Drive albums, see [Batch convert HEIC from Google Drive](/blog/heic-google-drive-batch-convert).`,
  },
  {
    slug: "heic-live-photo-guide",
    title: "iPhone Live Photos and HEIC: How to Export JPG Still Images",
    description:
      "Understand Live Photo HEIC files, avoid .mov confusion, and convert still images to JPG on Windows and Mac.",
    publishedAt: "2026-05-20",
    readMinutes: 7,
    content: `Live Photos capture a few seconds of motion around a still image. On disk they often appear as **two files**: a .heic (or .jpg) still and a companion **.mov** video. That confuses Windows users and breaks batch conversion if you pick the wrong file.

## What is a Live Photo?

When Live Photos is on (**Settings → Camera → Live Photos**), each shot stores:

- A **still image** (HEIC by default on modern iPhones)
- A short **video clip** (.mov) for the "live" effect

In the Photos app you see one tile; on a PC file share you may see both files with similar names.

## Why conversion fails on the wrong file

Browser converters—including [HEIC to JPG](/heic-to-jpg)—expect a **still image**. If you drop a .mov into the HEIC tool, conversion will fail or produce nothing useful.

**Fix:** select only the **.heic** (or .heif) file—the still—not the .mov sidecar.

## Export a still JPG from iPhone (no computer)

1. Open the photo in **Photos**.
2. Tap **Share**.
3. If you see **Save as Video**, you are sharing the motion clip—go back and use **Duplicate** or export still via Mac/PC instead.
4. On Mac: open in Preview → **File → Export** → JPEG.

For many photos at once, transfer HEIC stills to a computer and batch-convert.

## Batch convert Live Photo stills on Windows

1. Copy **only** .heic files from iPhone or iCloud folder.
2. Open [HEIC to JPG](/heic-to-jpg) in Chrome or Edge.
3. Drop the stills, set quality, convert, download ZIP.

Skip .mov files in the same folder—they are not the photo you want for email or printing.

## Turn off Live Photos for simpler sharing

**Camera app → Live Photos icon (top)** — set to Off when you know you only need a plain JPG/HEIC still. Fewer duplicate files on Windows.

## Live Photo vs regular HEIC

| | Live Photo pair | Regular HEIC photo |
|---|---|---|
| Files on disk | .heic + .mov | .heic only |
| Good for | Memories in Photos app | Email, print, Windows |
| Convert with HeicSave | .heic still only | Yes |

## Privacy note

Live Photo **video** clips can include audio and background scenes you did not intend to share. When converting for upload, use the **still** HEIC→JPG path and review the JPG before sending.

Need universal Windows compatibility? After conversion, JPG opens in Photos, Paint, Word, and every legacy uploader. For lossless workflows, try [HEIC to PNG](/heic-to-png) on the still image only.`,
  },
  {
    slug: "convert-webp-to-jpg-windows",
    title: "Convert WebP to JPG on Windows (Free, No Upload)",
    description:
      "Convert WebP images to JPG on Windows 10/11 in Chrome or Edge—batch files, adjust quality, download ZIP. No install, no server upload.",
    publishedAt: "2026-05-22",
    readMinutes: 11,
    content: `You saved a **.webp** image from a website, Slack, or design export—and Windows will not open it in Word, Outlook, or an old uploader. **JPG** is still the format everyone accepts. This guide shows reliable ways to convert **WebP to JPG on Windows** without installing software or uploading photos to a random server.

> **Quick answer:** Open our free **[WebP to JPG](/webp-to-jpg)** tool in **Chrome or Edge**, drop your files, set JPEG quality, convert, and download JPGs or a ZIP—all in the browser.

## What is WebP?

**WebP** is Google's modern image format for the web. It is often 25–35% smaller than JPG at similar quality. Browsers decode WebP natively; many **desktop apps on Windows still do not**.

That gap is why searches like **"webp to jpg"** are common: the file works in Chrome but fails in email attachments and legacy CMS uploads.

## Does Windows 10/11 open WebP natively?

Partially:

- **Modern browsers** display WebP fine.
- **Paint** on recent Windows 11 builds may open WebP and save as JPEG for one file.
- **Photos**, **Word**, and many upload forms still expect **.jpg**.

For a **folder of WebP assets**, converting in the browser scales better than opening files one-by-one.

## Method 1: Browser conversion (recommended — no upload)

**HeicSave** runs conversion **locally** in your tab using the browser's image decoder and Canvas. Files are **not uploaded** to us for processing.

### Steps on Windows

1. Open **Chrome** or **Edge**.
2. Go to **[WebP to JPG](/webp-to-jpg)**.
3. Drag one or many **.webp** files into the drop zone.
4. Move the **JPEG quality** slider (default tuned for sharing).
5. Click **Convert**.
6. Download each JPG or **Download all as ZIP**.

### Why browser-local?

| | Browser-local (HeicSave) | Typical cloud uploader |
|---|---|---|
| Privacy | Stays on your PC | Uploads to their server |
| Batch | Many files + ZIP | Often limited |
| Account | Not required | Often required |
| Watermark | None | Common on free tiers |

## Method 2: Paint / Photos (single files)

If WebP already opens:

1. Open in **Paint** (Windows 11) → **File → Save as → JPEG**.
2. Repeat for every file—slow for batches.

## Method 3: Desktop tools (offline)

- **XnConvert** — batch scripts.
- **IrfanView** — lightweight viewer + export.
- **FFmpeg** — \`ffmpeg -i input.webp output.jpg\` for automation.

Useful when IT allows installs; browser tool avoids admin rights.

## JPEG quality settings

- **90–95%** — near-original; good for print.
- **80–85%** — sweet spot for email and chat.
- **70% and below** — when size matters more than fine detail.

Set the slider **before** converting a large batch.

## Batch tips on Windows

- Close heavy tabs before 100+ images.
- Split into chunks of 50–80 if the tab slows.
- Use **ZIP** download once at the end.

## Common scenarios

### Website assets for stakeholders

Designers export WebP for production; account managers on Windows need JPG. Convert once, attach to email.

### Discord / Slack downloads

Saved images may be WebP. Convert before importing to PowerPoint or print workflows.

### Need transparency?

JPG has no alpha. Use **[WebP to PNG](/webp-to-png)** instead.

## Troubleshooting

| Problem | What to try |
|---|---|
| File will not load | Confirm .webp extension; try Chrome/Edge |
| Colors look different | WebP may be wide-gamut; slight shift to sRGB JPG is normal |
| Batch fails mid-run | Fewer files per run; check available RAM |
| Animated WebP | Our tool targets still images; export a frame first |

## Related tools and guides

- **[WebP to JPG](/webp-to-jpg)** — main converter
- **[WebP vs JPG](/blog/webp-vs-jpg)** — format comparison
- **[JPG to WebP](/jpg-to-webp)** — optimize assets for your site
- **[Convert AVIF to JPG on Windows](/blog/convert-avif-to-jpg-windows)** — similar workflow for .avif
- **[HEIC to JPG](/heic-to-jpg)** — iPhone photos on Windows

## Privacy

Conversion runs in your browser. We do not receive your image bytes for processing.

**Ready?** Open **[WebP to JPG](/webp-to-jpg)** and convert your first file in under a minute.`,
  },
  {
    slug: "heic-to-png-when-and-how",
    title: "HEIC to PNG: When You Need It and How to Convert (2026)",
    description:
      "Choose HEIC to PNG over JPG for editing, transparency, and lossless workflows. Batch convert in your browser on Windows and Mac.",
    publishedAt: "2026-05-22",
    readMinutes: 9,
    content: `Most iPhone users convert HEIC to **JPG** for email and Windows compatibility. Sometimes **PNG** is the better target—especially before editing, when you want to avoid JPEG artifacts, or when a workflow expects lossless raster input.

> **Quick answer:** Open **[HEIC to PNG](/heic-to-png)** in Chrome or Edge, drop your .heic files, convert, download individually or as ZIP—all local in the browser.

## HEIC to JPG vs HEIC to PNG

| | JPG output | PNG output |
|---|---|---|
| File size | Smaller | Larger |
| Compression | Lossy (slider controls quality) | Lossless PNG |
| Transparency | No | Yes (when source has alpha) |
| Best for | Email, upload forms, sharing | Editing, overlays, archival masters |
| Universal open on Windows | Excellent | Excellent |

If your only goal is "make Grandma's PC open the photo," use [HEIC to JPG](/heic-to-jpg). If your goal is "import into an editor without another lossy step," PNG is often smarter.

## When PNG makes sense

1. **Further editing** — filters, layers, or compositing in Photoshop, GIMP, or Canva.
2. **Screenshots or graphics with sharp text** — JPEG can blur edges; PNG preserves crisp lines.
3. **Transparency** — some edited HEIC exports include alpha; PNG keeps it (JPG cannot).
4. **Print prep** — some print shops prefer PNG or TIFF masters over heavily compressed JPG.

## When JPG is still better

- Email attachments and messaging apps (size limits).
- Government portals that cap file size.
- Sharing dozens of vacation photos—PNG folders get huge.

## How to convert HEIC to PNG (Windows)

1. Open **Chrome** or **Edge** on desktop.
2. Go to **[HEIC to PNG](/heic-to-png)**.
3. Drag .heic files into the drop zone.
4. Click **Convert**.
5. Download each PNG or **Download all as ZIP**.

Processing stays in your browser—nothing uploads for conversion.

## Batch tips

PNG outputs are larger than JPG. For 100+ photos:

- Ensure free disk space before downloading a ZIP.
- Convert in chunks if your browser tab slows.
- Skip .mov Live Photo sidecars—convert the **.heic still** only ([Live Photo guide](/blog/heic-live-photo-guide)).

## Live Photos warning

Browser converters expect a **still image**. Drop the .heic file, not the companion .mov video clip.

## After PNG conversion

- **Email?** Consider re-exporting a JPG copy at high quality for recipients.
- **Web use?** PNG is heavy; use [PNG to WebP](/png-to-webp) for site delivery with a JPG fallback.

## Related guides

- [HEIC vs JPG](/blog/heic-vs-jpg)
- [Open HEIC on Windows](/blog/heic-windows-guide)
- [Transfer iPhone photos to Windows](/blog/transfer-iphone-photos-to-windows)

**Start here:** **[HEIC to PNG](/heic-to-png)**`,
  },
  {
    slug: "heic-google-drive-batch-convert",
    title: "How to Batch Convert HEIC to JPG from Google Drive (2026)",
    description:
      "Download HEIC photos from Google Drive, batch convert to JPG in your browser without installing software, then re-upload or share.",
    publishedAt: "2026-05-22",
    readMinutes: 10,
    content: `Google Drive does not offer a built-in **HEIC → JPG** button. If your iPhone backup or shared folder is full of .heic files, Windows previews may fail and email attachments get rejected. This workflow converts **many HEIC files at once** without installing codecs or uploading photos to a stranger's server.

> **Quick answer:** Download from Drive → extract ZIP → **[HEIC to JPG](/heic-to-jpg)** in Chrome/Edge → download JPG ZIP → upload back to Drive if needed.

## Why Drive users hit HEIC pain

- iPhone **Google Photos** or manual uploads may store HEIC originals.
- Shared family folders mix HEIC + JPG.
- Windows PCs often lack HEIF codecs on work accounts.
- Drive's web preview may show broken thumbnails for HEIC.

Converting once to JPG fixes compatibility everywhere.

## Step-by-step batch workflow

### 1. Download from Google Drive

1. Open Drive in the browser.
2. Select the HEIC files or folder (**Shift+click** or **Ctrl+A** in a folder view).
3. **Right-click → Download**.
4. Drive delivers a **ZIP** when you select multiple files.

### 2. Extract on your PC

1. Right-click the downloaded ZIP → **Extract All…** (Windows).
2. Note the folder path— you'll drag these .heic files into the converter.

### 3. Batch convert locally (no install)

1. Open **Chrome** or **Edge** on Windows.
2. Go to **[HEIC to JPG](/heic-to-jpg)**.
3. Drag **all** extracted .heic files into the drop zone (or add in groups of 50–100 if RAM is tight).
4. Set **JPEG quality** (90% default is good for archiving; 85% for email-sized outputs).
5. Click **Convert**.
6. Click **Download all as ZIP** to get every JPG at once.

Conversion runs **in your browser**. HeicSave does not receive your image bytes for processing.

### 4. Optional: upload JPGs back to Drive

1. Create a folder like \`Photos JPG 2026\`.
2. Upload the JPG ZIP or individual files.
3. Share the JPG folder with family on Windows—no codec drama.

## Why not use a "cloud converter"?

Many online tools **upload** your photos to their servers. For personal, medical, or client albums in Drive, browser-local conversion keeps bytes on your PC. See [Why browser-local conversion matters](/blog/privacy-browser-image-conversion).

## Tips for large albums

| Tip | Why |
|---|---|
| Convert in chunks of 50–100 | Protects browser RAM on 8 GB PCs |
| Close other tabs | Frees memory for HEIC decode |
| Use desktop Chrome/Edge | Best HEIC support on Windows |
| Skip .mov files | Live Photo videos are not stills ([guide](/blog/heic-live-photo-guide)) |
| Keep originals in Drive | Convert copies; delete HEIC only after verifying JPGs |

## Troubleshooting

| Problem | Fix |
|---|---|
| Download is huge / slow | Select fewer folders per ZIP; use Wi-Fi |
| Some files fail | Re-download corrupt HEIC; try one file alone |
| JPGs rotated wrong | EXIF orientation copied when supported |
| Still need PNG for editing | Use [HEIC to PNG](/heic-to-png) instead |

## Alternative: prevent HEIC before upload

On iPhone: **Settings → Camera → Formats → Most Compatible** saves new shots as JPG. Existing Drive HEIC still needs conversion.

## Related guides

- [Open and convert HEIC on Windows](/blog/heic-windows-guide)
- [Transfer iPhone photos to Windows](/blog/transfer-iphone-photos-to-windows)
- [What is a HEIC file?](/blog/what-is-heic-file)

**Start converting:** **[HEIC to JPG](/heic-to-jpg)**`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsNewestFirst(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
