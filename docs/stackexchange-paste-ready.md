# Stack Exchange — paste-ready (no fenced code blocks)

How to paste:
1. Open the question → "Your Answer"
2. Copy ONE section below from the first line of the answer through the last line (do not copy the === line or the URL line above it)
3. Paste into the answer box
4. Click "Preview" — code should appear in gray boxes if indented with 4 spaces

If you have less than 50 reputation, delete the Disclosure line and all heicsave.com URLs before posting.

================================================================================
POST 1 — https://superuser.com/questions/1934171
================================================================================

For **AutoHotkey v2**, launch Firefox with a `file:///` URL:

    #Requires AutoHotkey v2.0
    path := "C:\Users\user\Downloads\mp50-2.avif"
    uri  := "file:///" . StrReplace(path, "\", "/")
    Run('"' . A_ProgramFiles . '\Mozilla Firefox\firefox.exe" "' . uri . '"')

If Firefox shows a **blank or broken** image on Windows, fix codecs before blaming AHK:

1. Install **AV1 Video Extension** from Microsoft Store.
2. In Firefox, open: https://libre-software.net/image/avif-test/ — if that fails, AVIF is not decoding on the PC.
3. **Automation workaround:** convert once to JPG, then point AHK at the JPG:
   - https://heicsave.com/avif-to-jpg (browser-local, no upload)
   - https://heicsave.com/blog/convert-avif-to-jpg-windows

The Desktop-shortcut method in the other answer works; `Run` above is the same idea.

**Disclosure:** I maintain heicsave.com (links above).

================================================================================
POST 2 — https://photo.stackexchange.com/questions/136161
================================================================================

CloudConvert’s `no images defined` / ImageMagick error 3368 usually means the service **never decoded a raster** from the container—not a permissions problem on your PC, especially when **every file from the same shoot** fails.

**Recovery steps**

1. Re-copy **originals** from the iPhone (USB, “Keep originals”) or re-download **original quality** from Google Photos/iCloud (not storage-saver).
2. On Windows, install **HEIF Image Extensions** and **HEVC Video Extensions**, then open one file in Photos or Paint. If the OS cannot open it, online converters will fail too.
3. If you have ImageMagick locally:

    magick identify -verbose "IMG_9861.heic"
    magick "IMG_9861.heic[0]" -quality 92 out.jpg

    The `[0]` frame matters for multi-image HEIC (tiles / Live Photo).

4. **Browser-local batch (Chrome/Edge, no upload):** https://heicsave.com/heic-to-jpg — ZIP for many files.
5. Why some HEICs break online tools: https://heicsave.com/blog/heicsave-vs-browser-heic-converters

**Disclosure:** I maintain heicsave.com (links above).

================================================================================
POST 3 — https://superuser.com/questions/1861154
================================================================================

Major desktop browsers still **do not decode HEIC inside a normal** `<img src="…heic">` **tag** the way they decode JPEG, WebP, or AVIF. Windows HEIF/HEVC codecs help Explorer and desktop apps; they do not turn on HEIC inside the browser image pipeline.

**For Immich**

1. **Server-side (best for shared libraries):** Let Immich build browser-friendly previews (JPEG/WebP) so remote users never get raw HEIC in `<img>`. Extra storage, correct UX.
2. **Pre-convert before upload:** Batch HEIC to JPEG on your PC, then upload JPEGs. Browser-local tool (no upload of image bytes for conversion): https://heicsave.com/heic-to-jpg
3. **DIY:** libheif compiled to WASM can decode in JS and draw to `<canvas>` — custom work, not a stable “install an extension” fix.

A Chromium “HEIC extension” will not reliably fix `<img>` on arbitrary sites. Immich-specific fixes belong in Immich transcode settings or client-side pre-conversion.

AVIF is natively supported in Firefox and Chrome; HEIC is not in the same category.

Privacy (online vs in-browser converters): https://heicsave.com/blog/privacy-browser-image-conversion

**Disclosure:** I maintain heicsave.com (links above).

================================================================================
POST 4 — https://superuser.com/questions/1854948
================================================================================

On **Windows 10**, Paint and third-party viewers can open AVIF while **Explorer thumbnails stay blank**, because thumbnails use a different shell handler than “Open with”.

**Checklist**

1. Install **AV1 Video Extension** and **HEIF Image Extensions** for the same Windows user that runs Explorer.
2. In Microsoft Store, search for **AVIF Image Extension** (name varies by build).
3. Rebuild thumbnails: Disk Cleanup → Thumbnails, or delete files under `%LocalAppData%\Microsoft\Windows\Explorer\` named `thumbcache_*.db`, then restart Explorer.
4. Folder Options → View: turn off **Always show icons, never thumbnails**.
5. Compare a known-good AVIF (e.g. saved from Firefox) with your exports — some encoders produce AVIF that Paint opens but Explorer’s handler rejects.

**Workaround:** convert folders you browse in Explorer to JPEG: https://heicsave.com/blog/convert-avif-to-jpg-windows — browser batch: https://heicsave.com/avif-to-jpg

**Disclosure:** I maintain heicsave.com (links above).

================================================================================
POST 5 — https://superuser.com/questions/1839145
================================================================================

Many iPhone HEIC files are **HEIF containers with multiple images** (tiles, thumbnails, Live Photo). **ffmpeg** often treats them as a sequence:

- `ffmpeg -i test.heic output.jpg` → one partial tile
- `ffmpeg -i test.heic -map 0 %d.jpeg` → many JPEGs, some with wrong size or padding

**ffmpeg — one full-frame JPEG**

    ffmpeg -y -i test.heic -map 0:v:0 -frames:v 1 -q:v 2 output.jpg

**Linux — one complete JPEG (often more reliable)**

    sudo apt install libheif-examples
    heif-convert test.heic output.jpg

**ImageMagick**

    magick "test.heic[0]" -quality 92 output.jpg

**Windows without CLI:** install HEIF + HEVC from Microsoft Store, open in Paint → Save as JPEG, or browser-local batch: https://heicsave.com/heic-to-jpg

The existing `heif-convert` answer covers Linux well; for ffmpeg you need explicit frame mapping on multi-image HEIC.

**Disclosure:** I maintain heicsave.com (link above).
