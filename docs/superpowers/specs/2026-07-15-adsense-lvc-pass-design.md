# AdSense Low-Value Content (LVC) Pass — Design Spec

**Site:** https://heicsave.com (`d:\mytest\imageconvert`)  
**Date:** 2026-07-15  
**Status:** Approved for planning (user chose Approach 2 + pen name only)  
**Goal:** Pass Google AdSense re-review after **Low value content** rejection.

---

## 1. Context

### 1.1 Rejection

- AdSense status: **rejected for Low value content (LVC)** — option A confirmed by operator.
- Not a technical ads.txt / snippet failure; reviewers judged site content/value insufficient or thin.

### 1.2 Current strengths (keep)

- 13 tool landings with long-form SEO sections, FAQ, privacy copy.
- ~32 EN blog posts; DE/FR overlays mostly complete.
- Consent Mode v2, cookie banner, Privacy/Terms/DMCA, `ads.txt`, AdSense client meta.
- Ads only on tool pages (sidebar + in-content) when slots configured — density is fine.
- About page already has editorial standards and financing disclosure.

### 1.3 Confirmed failure modes (from audit)

1. **Broken guide images** — blog Markdown references 8× `.webp` under `/guides/`; only `mac-preview-heic-export.svg` exists in `public/guides/`.
2. **Anonymous operator** — byline is generic “HeicSave team”; no clickable author identity.
3. **Template-like tool shells** — converter UI first; below-fold copy highly repetitive across tools.
4. **Thin Contact** — email cards only; weak “real humans operate this” signal.
5. **DE gaps** — 3 posts fall back to English body (`disable-heic-iphone-jpg`, `heic-windows-11-uk`, `heic-iphone-photos-windows-us`).

### 1.4 Constraints (operator)

- Scope: **Standard package B** (~3–5 days), not minimal A or deep C.
- Identity: **pen name only** — no real legal name, no fabricated company address.
- Do not buy links, mass-produce thin posts, or flood blogs with ads for re-review.

---

## 2. Success criteria

| # | Criterion | How we verify |
|---|-----------|---------------|
| S1 | No broken `/guides/*` images linked from EN/DE/FR blog content | Spot-check live URLs + `public/guides/` file list |
| S2 | Pen-name author page live; blog byline links to it; JSON-LD `Person` uses pen name | Manual + View Source |
| S3 | Contact page has topic categories + response SLA + links to Privacy/DMCA/Editorial | Manual |
| S4 | Home has “how to use” + “how to verify no upload” content band | Manual |
| S5 | `heic-to-jpg`, `heic-to-png`, `webp-to-jpg` each have ≥1 unique non-boilerplate section | Diff vs other tools |
| S6 | DE overlays exist for the 3 missing slugs | `blog-l10n/de.ts` |
| S7 | Privacy/About/ads claims match reality (no “we have screenshots” without files) | Copy audit |
| S8 | After deploy (ideally 7–14 days live), operator can **request AdSense re-review** | Operator action |

**Out of scope for “pass”:** ranking improvements, Bing LVC, buying traffic, Product Hunt launch.

---

## 3. Approach (approved)

**Approach 2 — “Product site → content site”**

Keep the working converter product; fix broken editorial assets; add pen-name E-E-A-T; thicken Contact/Home; differentiate three core tool pages; finish DE gaps.

Rejected alternatives:

- Approach 1 (images + light trust only) — too weak for LVC re-reject risk.
- Approach 3 (full rewrite) — exceeds agreed B timeline.

---

## 4. Workstreams

### 4.1 Visual assets (P0)

**Missing files to create under `public/guides/`:**

| File | Used for |
|------|----------|
| `heic-hevc-compression.webp` | Format / compression guides |
| `heicsave-dropzone-before.webp` | Product UI — empty dropzone |
| `heicsave-dropzone-batch.webp` | Product UI — batch / ZIP state |
| `iphone-most-compatible-formats.webp` | iPhone format settings |
| `iphone-transfer-mac-pc.webp` | Transfer workflow |
| `usb-iphone-dcim-windows.webp` | DCIM on Windows |
| `windows-heic-no-preview.webp` | Explorer no-preview state |
| `windows-heif-codec.webp` | Store / codec context |
| *(keep)* `mac-preview-heic-export.svg` | Already present |

**Rules:**

- Prefer real UI captures of heicsave.com for dropzone assets.
- For OS/iPhone scenes: illustrative composites allowed if caption/alt say they are illustrative; **do not** fake official Microsoft/Apple branding as “proof screenshots” in a deceptive way.
- Target: readable at blog width (~720–960px), WebP, reasonably compressed.
- After add: scan `blog-posts.ts` + DE/FR for any remaining missing `/guides/` paths.

### 4.2 Pen-name E-E-A-T (P0)

**Author identity (placeholder pending final copy):**

- Pen name: decide one stable name in implementation (e.g. editorial handle) — document chosen string in plan; use consistently EN/DE/FR.
- Role: editorial / image formats / privacy-minded tooling — **no fake degrees, employers, or “former Apple engineer” claims**.
- Relationship: independent operator of HeicSave; supported by ads; not affiliated with Apple/Google.

**Routing (recommended):**

- Page: `/[locale]/about/authors/[slug]` **or** single author at `/[locale]/about/author` if only one pen name.
- Prefer **one author** for B scope: `/about/author` (locale-aware) to avoid empty author directory.

**UI / schema:**

- Update `blog-author-byline.tsx` → link to author page; show pen name instead of only “HeicSave team”.
- `article-json-ld`: `author` as `Person` with `@id` pointing to author URL; `publisher` remains Organization.
- About page: short “Who writes here” section linking to author + `#editorial-standards`.

### 4.3 Contact thicken (P0)

Update Contact layouts + `messages` / `legal-l10n` as appropriate:

- Topic chips or list: Privacy, Tool bug, Copyright/DMCA, Partnership, Other.
- Response expectation: e.g. 2–3 business days.
- Links: Privacy, DMCA, Editorial standards, Author.
- Keep email-based contact; **no fake street address**.

### 4.4 Home content bands (P1)

On locale home (`app/[locale]/page.tsx` + messages):

1. **How it works** — 3 short steps (pick tool → convert in browser → download / ZIP).
2. **Verify privacy** — open DevTools Network while converting; expect no image upload to HeicSave origin (wording must stay accurate).
3. Keep existing tool grid + FAQ + blog teasers; do not turn home into an ad wall.

### 4.5 Core tool differentiation (P1)

Touch at least:

| Tool | Unique section intent |
|------|------------------------|
| `/heic-to-jpg` | Windows / Outlook / batch ZIP scenarios vs Store codecs |
| `/heic-to-png` | When PNG beats JPG (edit, transparency, avoid second lossy) |
| `/webp-to-jpg` | Legacy email / printers / apps that reject WebP |

Implementation notes:

- Prefer unique blocks in `tools-config.ts` / locale overlays / `tool-seo-sections*`, not a shared identical paragraph.
- Keep existing FAQ/privacy where accurate; trim the most duplicated boilerplate only where it hurts uniqueness.

### 4.6 DE blog overlays (P1)

Add full DE overlays for:

- `disable-heic-iphone-jpg`
- `heic-windows-11-uk`
- `heic-iphone-photos-windows-us`

Same quality bar as existing DE posts (title, description, content). FR already complete — no FR gap work required unless audit finds new gaps.

### 4.7 Copy consistency (P1)

- About editorial text: only claim screenshots where files exist.
- Privacy / About: AdSense financing language stays; do not claim “approved” until true.
- Avoid promising features not shipped.

### 4.8 Ads policy for re-review (keep)

- Do **not** add dense ads to blog/about for this pass.
- Tool-page slots remain optional via env; script/meta may stay for verification.
- No Ezoic alongside AdSense.

---

## 5. Explicit non-goals

- Legal entity registration / real-name disclosure.
- Mass new blog posts for keyword coverage.
- Paid backlinks or directory spam for AdSense.
- Redesigning converter UX (unless needed for dropzone screenshots).
- Guaranteeing AdSense approval (Google decision is external).

---

## 6. Risks

| Risk | Mitigation |
|------|------------|
| Re-review still fails LVC | Ensure images + author + Contact + 3 unique tool sections are live before clicking re-review; wait ~7–14 days if traffic/crawl stale |
| Pen name looks fake | Consistent voice; editorial standards page; no fabricated credentials |
| Illustrative OS images flagged as misleading | Clear alt/captions; prefer real HeicSave UI for product shots |
| Scope creep into Approach 3 | Stick to listed P0/P1 only |

---

## 7. Delivery order

1. Guide images → verify no 404s  
2. Author page + byline + JSON-LD  
3. Contact + About “who writes”  
4. Home bands  
5. Three tool unique sections  
6. DE three overlays  
7. Copy consistency pass + build  
8. Deploy → operator waits (optional) → AdSense re-review  

---

## 8. Spec self-review

- [x] No TBD placeholders for required decisions except pen name string (to be fixed in implementation plan).
- [x] No contradiction: pen name only vs no fake address.
- [x] Scope matches B; Approach 3 excluded.
- [x] Missing image list is complete vs current `blog-posts.ts` references.
- [x] Success criteria are testable.

---

## 9. Approval

- Design discussion: **approved** by operator (2026-07-15).
- Next: implementation plan via writing-plans; then execute.
