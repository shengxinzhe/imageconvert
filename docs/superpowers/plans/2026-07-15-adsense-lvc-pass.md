# AdSense LVC Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix HeicSave so it can pass Google AdSense re-review after a Low value content rejection—by restoring guide images, adding pen-name E-E-A-T, thickening Contact/Home trust, differentiating three core tools, and finishing DE blog overlays.

**Architecture:** Keep the existing Next.js App Router + `messages/*.json` i18n + `tools-config` / `tool-seo-sections` content model. Add one locale-aware author page under `/about/author`, ship eight missing WebP assets under `public/guides/`, and extend home/contact/about copy without inventing a legal entity.

**Tech Stack:** Next.js 14, TypeScript, Tailwind, `messages/{en,de,fr}.json`, `blog-posts.ts` + `blog-l10n/{de,fr}.ts`, `tool-seo-sections.ts` (+ DE/FR SEO overlays), `sharp` (optional compress), browser screenshot for product UI.

**Locked decisions (from approved spec):**
- Pen name: **Mira Vale** (editorial handle; no fake employer/degree claims)
- Author URL: `/[locale]/about/author` (EN default omits `/en` via existing i18n)
- Scope B only; no mass new posts; no fake street address

**Spec:** `docs/superpowers/specs/2026-07-15-adsense-lvc-pass-design.md`

---

## File map

| File | Responsibility |
|------|----------------|
| `public/guides/*.webp` | Blog guide images (8 missing) |
| `src/lib/author.ts` | Pen-name constants + absolute author path helper |
| `src/app/[locale]/about/author/page.tsx` | Author page route |
| `src/components/site/author-page-layout.tsx` | Author page UI |
| `src/components/blog/blog-author-byline.tsx` | Link byline → author page; show Mira Vale |
| `src/components/seo/article-json-ld.tsx` | `Person` author |
| `src/components/seo/author-json-ld.tsx` | Author `ProfilePage` / `Person` JSON-LD |
| `src/components/site/about-page-layout.tsx` | “Who writes here” band |
| `src/components/site/contact-page-layout.tsx` | Topic subject lines + author/editorial links |
| `src/app/[locale]/page.tsx` | Home how-to + DevTools verify bands |
| `src/messages/{en,de,fr}.json` | All new UI strings |
| `src/lib/tool-seo-sections.ts` (+ de/fr SEO files if needed) | Unique sections for 3 tools |
| `src/lib/blog-l10n/de.ts` | 3 missing DE overlays |
| `scripts/sitemap-paths.mjs` | Add `/about/author` |
| `docs/superpowers/specs/2026-07-15-adsense-lvc-pass-design.md` | Source of truth (read-only during impl) |

---

### Task 1: Restore missing guide WebP assets

**Files:**
- Create: `public/guides/heicsave-dropzone-before.webp`
- Create: `public/guides/heicsave-dropzone-batch.webp`
- Create: `public/guides/heic-hevc-compression.webp`
- Create: `public/guides/iphone-most-compatible-formats.webp`
- Create: `public/guides/iphone-transfer-mac-pc.webp`
- Create: `public/guides/usb-iphone-dcim-windows.webp`
- Create: `public/guides/windows-heic-no-preview.webp`
- Create: `public/guides/windows-heif-codec.webp`
- Keep: `public/guides/mac-preview-heic-export.svg`

- [ ] **Step 1: Capture HeicSave product UI (2 files)**

Use browser MCP against production `https://heicsave.com/heic-to-jpg`:
1. Screenshot empty dropzone → save as `heicsave-dropzone-before.webp` (resize ~960px wide, WebP q≈80).
2. If batch UI hard to capture without files, generate an illustrative panel that **matches live UI chrome** (colors, dropzone copy) labeled in-image or via alt as product UI — still save `heicsave-dropzone-batch.webp`.

- [ ] **Step 2: Create remaining 6 illustrative guides**

Use `GenerateImage` (or equivalent) with captions that match blog alt text intent. Style: clean instructional UI mock, not photoreal fake Apple Settings:

| File | Visual |
|------|--------|
| `iphone-most-compatible-formats.webp` | Settings-like list: Formats → Most Compatible selected |
| `iphone-transfer-mac-pc.webp` | Photos → Transfer to Mac or PC options |
| `usb-iphone-dcim-windows.webp` | Explorer tree: This PC → Apple iPhone → Internal Storage → DCIM |
| `windows-heic-no-preview.webp` | Explorer icons without thumbnails for `.heic` |
| `windows-heif-codec.webp` | Store-style “HEIF Image Extensions” card (illustrative) |
| `heic-hevc-compression.webp` | Simple diagram: HEIC container + HEVC still vs JPG size bars |

After generation, compress with sharp if >300KB:

```bash
node -e "const sharp=require('sharp'); const f='public/guides/FILE.webp'; sharp(f).webp({quality:80}).toFile(f+'.tmp').then(()=>require('fs').renameSync(f+'.tmp',f))"
```

- [ ] **Step 3: Verify all referenced paths exist**

```bash
node -e "const fs=require('fs');const t=fs.readFileSync('src/lib/blog-posts.ts','utf8');const m=[...new Set([...t.matchAll(/\/guides\/[\\w.-]+/g)].map(x=>x[0]))];for(const p of m){const ok=fs.existsSync('public'+p);console.log(ok?'OK':'MISSING',p)}"
```

Expected: every path `OK`.

- [ ] **Step 4: Commit**

```bash
git add public/guides/*.webp
git commit -m "fix(content): add missing blog guide images for AdSense LVC"
```

---

### Task 2: Author constants + `/about/author` page

**Files:**
- Create: `src/lib/author.ts`
- Create: `src/app/[locale]/about/author/page.tsx`
- Create: `src/components/site/author-page-layout.tsx`
- Create: `src/components/seo/author-json-ld.tsx`
- Modify: `scripts/sitemap-paths.mjs` — add `/about/author` to `STATIC_PAGES`
- Modify: `src/messages/en.json`, `de.json`, `fr.json` — add `author` namespace

- [ ] **Step 1: Add `src/lib/author.ts`**

```ts
/** Pen-name editorial identity for E-E-A-T (no legal-entity claims). */
export const AUTHOR_PEN_NAME = "Mira Vale";
export const AUTHOR_SLUG = "mira-vale";
export const AUTHOR_PATH = "/about/author" as const;

export const AUTHOR_ROLE_EN =
  "Editorial lead for HeicSave guides on HEIC, WebP, AVIF, and browser-local privacy.";
```

- [ ] **Step 2: Add message keys (EN shown; translate DE/FR)**

Under root of each messages file, add:

```json
"author": {
  "badge": "Author",
  "name": "Mira Vale",
  "role": "Editorial lead · image formats & privacy-minded converters",
  "intro": "Mira Vale is the pen name for the editor who writes and maintains HeicSave guides. Articles are tested on Windows 11 and macOS with Chrome and Edge before publication.",
  "affiliation": "Independent operator of heicsave.com — not affiliated with Apple, Google, Microsoft, or Adobe.",
  "funding": "HeicSave is funded by Google AdSense (with consent). Ads never receive your image bytes; conversion stays in your browser.",
  "standardsCta": "Read editorial standards",
  "contactCta": "Contact the team",
  "blogCta": "Browse all guides",
  "metaTitle": "Mira Vale — HeicSave editorial",
  "metaDescription": "About Mira Vale, pen-name editor of HeicSave HEIC, WebP, and AVIF guides. How we test workflows and keep conversion private."
}
```

DE/FR: translate all strings; keep name `Mira Vale`.

- [ ] **Step 3: Create author layout + page + JSON-LD**

`author-page-layout.tsx`: hero with name + role; paragraphs from messages; links to `/about#editorial-standards`, `/contact`, `/blog`.

`author/page.tsx`: `generateStaticParams` like About; metadata from `t("author.metaTitle")` / `metaDescription`; render layout + `AuthorJsonLd`.

`author-json-ld.tsx`:

```ts
{
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: AUTHOR_PEN_NAME,
    url: absoluteUrl(AUTHOR_PATH, locale),
    jobTitle: t("author.role"),
    worksFor: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/", locale) },
  },
}
```

- [ ] **Step 4: Sitemap**

In `scripts/sitemap-paths.mjs`:

```js
export const STATIC_PAGES = ["/about", "/about/author", "/contact", "/privacy", "/terms", "/dmca", "/blog"];
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/author.ts src/app/[locale]/about/author src/components/site/author-page-layout.tsx src/components/seo/author-json-ld.tsx scripts/sitemap-paths.mjs src/messages/en.json src/messages/de.json src/messages/fr.json
git commit -m "feat(eeat): add Mira Vale author page for AdSense trust"
```

---

### Task 3: Wire byline + Article JSON-LD to Person

**Files:**
- Modify: `src/components/blog/blog-author-byline.tsx`
- Modify: `src/components/seo/article-json-ld.tsx`
- Modify: `src/messages/en.json` (`blog.authorName`, `blog.authorBio`, `blog.authorAboutLink`)
- Modify: `src/messages/de.json`, `fr.json` same keys
- Modify: `src/messages/en.json` `about.editorialReviewBody` (and de/fr)

- [ ] **Step 1: Update byline**

```tsx
import { AUTHOR_PATH } from "@/lib/author";
// ...
<p className="text-sm font-medium text-ink">
  <Link href={AUTHOR_PATH} className="hover:text-link-deep">
    {t("blog.authorName")}
  </Link>
</p>
<p className="mt-0.5 text-xs leading-relaxed text-body">
  {t("blog.authorBio")}{" "}
  <Link href={AUTHOR_PATH} className="font-medium text-link hover:text-link-deep">
    {t("blog.authorAboutLink")}
  </Link>
  {" · "}
  <Link href="/about#editorial-standards" className="font-medium text-link hover:text-link-deep">
    {t("blog.authorStandardsLink")}
  </Link>
</p>
```

Messages:

```json
"authorName": "Mira Vale",
"authorBio": "Tests HEIC workflows on Windows 11, macOS, Chrome, and Edge before publishing.",
"authorAboutLink": "Author page",
"authorStandardsLink": "Editorial standards"
```

- [ ] **Step 2: Article JSON-LD author → Person**

Replace Organization author block with:

```ts
author: {
  "@type": "Person",
  name: AUTHOR_PEN_NAME,
  url: absoluteUrl(AUTHOR_PATH, routing.defaultLocale),
},
```

Import `AUTHOR_PEN_NAME`, `AUTHOR_PATH` from `@/lib/author`.

- [ ] **Step 3: Commit**

```bash
git commit -am "feat(eeat): link blog byline and schema to Mira Vale"
```

---

### Task 4: About “Who writes” + Contact subject helpers

**Files:**
- Modify: `src/components/site/about-page-layout.tsx`
- Modify: `src/components/site/contact-page-layout.tsx`
- Modify: `src/messages/{en,de,fr}.json` — `about.whoWrites*`, `contact.topics*`, `contact.subject*`

- [ ] **Step 1: About band**

Insert after `whyTitle` / `operatorBody` section (or before editorial):

```tsx
<section className="mx-auto max-w-3xl px-4 py-12 lg:px-6">
  <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
    {t("about.whoWritesTitle")}
  </h2>
  <p className="mt-4 text-body">{t("about.whoWritesBody")}</p>
  <Link href="/about/author" className="mt-4 inline-flex text-sm font-medium text-link">
    {t("about.whoWritesCta")}
  </Link>
</section>
```

EN copy:

```json
"whoWritesTitle": "Who writes here",
"whoWritesBody": "Guides are written and maintained under the pen name Mira Vale. We publish original, device-tested workflows—not scraped manuals. There is no separate legal street address listed; contact us by email.",
"whoWritesCta": "Meet Mira Vale →"
```

Update `operatorBody` / `editorialReviewBody` to mention Mira Vale instead of only “HeicSave team”.

- [ ] **Step 2: Contact topics list**

Above the card grid, add a “How to email us” list:

```json
"topicsTitle": "Pick a topic for your subject line",
"topicPrivacy": "Privacy / cookies / GDPR — privacy@…",
"topicBug": "Tool bug — include browser, OS, file type, steps",
"topicDmca": "Copyright (DMCA) — dmca@…",
"topicPartner": "Partnership / press — privacy@… with subject Partnership",
"topicOther": "Other — privacy@…",
"slaBody": "We aim to reply within 2–3 business days.",
"authorLink": "About the editor →",
"editorialLink": "Editorial standards →"
```

Wire links to `/about/author` and `/about#editorial-standards`. Keep existing 4 cards; tighten `cardResponseBody` to “2–3 business days”.

- [ ] **Step 3: Commit**

```bash
git commit -am "feat(trust): thicken About and Contact for AdSense LVC"
```

---

### Task 5: Home how-to + DevTools verify bands

**Files:**
- Modify: `src/app/[locale]/page.tsx`
- Modify: `src/messages/{en,de,fr}.json` — `home.how*`, `home.verify*`

- [ ] **Step 1: Add strings**

```json
"howTitle": "How it works",
"howStep1Title": "Pick a converter",
"howStep1Body": "Start with HEIC to JPG for iPhone photos on Windows, or WebP/AVIF tools for web assets.",
"howStep2Title": "Convert in your browser",
"howStep2Body": "Drop files into the tool. Decoding runs with JavaScript and WebAssembly on this device.",
"howStep3Title": "Download JPG/PNG or a ZIP",
"howStep3Body": "Save individuals or a batch ZIP. No account and no watermark.",
"verifyTitle": "How to verify nothing uploads",
"verifyBody": "Open Chrome DevTools → Network, convert a sample HEIC, and filter for your image filename. You should not see HeicSave uploading image bytes for conversion. Cookie/ad requests (if you accept cookies) are separate from conversion.",
"verifyCta": "Read the privacy guide →"
```

- [ ] **Step 2: Render two sections on home**

Place after hero trust bullets / before or after tool grids:

- Ordered list of 3 how-steps
- Verify band linking to `/blog/privacy-browser-image-conversion`

Match existing `homeStyles` / `audienceStyles` spacing; no new card chrome if avoidable.

- [ ] **Step 3: Commit**

```bash
git commit -am "feat(home): add how-to and DevTools privacy verify bands"
```

---

### Task 6: Unique SEO sections for three core tools

**Files:**
- Modify: `src/lib/tool-seo-sections.ts` — prepend/append unique sections for `heic-to-jpg`, `heic-to-png`, `webp-to-jpg`
- Modify: `src/lib/tools-l10n/seo-sections-de.ts` and `seo-sections-fr.ts` if those tools’ extras are mirrored there; otherwise ensure localized tools still show EN extras via merge path (check `get-localized-tool`).

- [ ] **Step 1: Confirm merge path**

Open `src/lib/get-localized-tool.ts` (or equivalent) and confirm `extraToolSeoSections[slug]` merges into landing. If DE/FR override replaces EN extras entirely, add matching DE/FR unique sections.

- [ ] **Step 2: Add unique EN sections**

**heic-to-jpg** — add section (do not duplicate existing comparison table):

```ts
{
  heading: "Real Windows scenarios this page is built for",
  paragraphs: [
    "Use this converter when Outlook rejects a .heic attachment, when Explorer shows blank icons, or when a workplace PC blocks Microsoft Store HEIF codecs. Convert the album once, attach JPG, and keep originals on the phone.",
    "For 50–500 vacation photos, use batch mode and download a ZIP. Prefer JPEG quality 85–92 for email portals that cap upload size.",
  ],
},
```

**heic-to-png**:

```ts
{
  heading: "When HEIC → PNG is the right call (not JPG)",
  paragraphs: [
    "Choose PNG when you will edit further, need a lossless-friendly still, or will composite text/UI over the photo. JPG is better for email and most portals.",
    "PNG files are larger. Convert only the frames you will edit; use HEIC to JPG for the rest of the album.",
  ],
},
```

**webp-to-jpg**:

```ts
{
  heading: "Unstick WebP that email and printers reject",
  paragraphs: [
    "Many CRM uploads, older Outlook builds, and print kiosks still reject WebP. Convert marketing assets to JPG here before you leave the office network.",
    "Keep a WebP master for the website; use JPG as the compatibility export. Quality 88–92 is a practical starting point for screenshots with text.",
  ],
},
```

- [ ] **Step 3: Mirror DE/FR** if required by merge logic (translate headings/paragraphs).

- [ ] **Step 4: Commit**

```bash
git commit -am "feat(tools): add unique scenario sections for core converters"
```

---

### Task 7: DE overlays for three missing posts

**Files:**
- Modify: `src/lib/blog-l10n/de.ts`

Slugs:

1. `disable-heic-iphone-jpg`
2. `heic-windows-11-uk`
3. `heic-iphone-photos-windows-us`

- [ ] **Step 1: Copy structure from FR overlays**

FR already has all three (`blog-l10n/fr.ts` ~1541+). Translate FR → DE (or EN → DE) with:

- `title`, `description` (≥140 chars where possible)
- Full `content` markdown including the same `/guides/*.webp` image paths
- Internal links keep locale-relative `/blog/...` and `/heic-to-jpg` form used elsewhere in DE file

- [ ] **Step 2: Verify `hasBlogTranslation(slug, "de")` returns true**

```bash
node --input-type=module -e "import { hasBlogTranslation } from './src/lib/blog-l10n/index.ts'" 
```

If TS import awkward, grep that each slug key exists once in `de.ts`.

- [ ] **Step 3: Commit**

```bash
git commit -am "feat(i18n): add DE overlays for three EN-only blog posts"
```

---

### Task 8: Copy consistency + build verify

**Files:**
- Modify as needed: `src/messages/*.json` `about.editorialStandard2Body` (only claim screenshots that exist)
- Possibly `about.changelog*` — add July 2026 LVC trust update line

- [ ] **Step 1: Soften screenshot claim if needed**

Change EN `editorialStandard2Body` to:

`Long guides include batch sizes, file-size expectations, troubleshooting tables, and UI illustrations where they help—see our batch HEIC and portal upload guides.`

Mirror in DE/FR.

- [ ] **Step 2: Production build**

```bash
npm run build
```

Expected: compile success; static paths include `/about/author` for en/de/fr.

- [ ] **Step 3: Spot-check locally or after deploy**

- `/guides/heicsave-dropzone-before.webp` returns 200
- `/about/author` shows Mira Vale
- Blog post byline links to author
- Home shows how-to + verify
- `heic-to-jpg` shows new scenario heading

- [ ] **Step 4: Final commit if copy tweaks remain**

```bash
git commit -am "chore: align About editorial claims with shipped guide images"
```

- [ ] **Step 5: Operator handoff**

After Vercel deploy is live (prefer wait 7–14 days, or re-review sooner if crawl fresh):

1. AdSense → Sites → heicsave.com → Request review  
2. Do not stuff new thin posts during review  
3. Optional: `npm run indexnow` + GSC URL inspection for `/about/author` and 3 core tools

---

## Spec coverage checklist

| Spec item | Task |
|-----------|------|
| 8 missing WebPs | Task 1 |
| Pen-name author page | Task 2 |
| Byline + Person JSON-LD | Task 3 |
| Contact thicken | Task 4 |
| About who-writes | Task 4 |
| Home how-to + verify | Task 5 |
| 3 unique tool sections | Task 6 |
| DE 3 overlays | Task 7 |
| Copy consistency + build | Task 8 |
| No fake address / no blog ad flood | Constraints in Tasks 2–4, 8 |

## Placeholder scan

No TBD steps. Pen name locked to **Mira Vale**. Image generation uses concrete filenames.

---

## Execution handoff

Plan saved to `docs/superpowers/plans/2026-07-15-adsense-lvc-pass.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — fresh subagent per task, review between tasks  
2. **Inline Execution** — this session runs tasks with checkpoints  

Which approach?
