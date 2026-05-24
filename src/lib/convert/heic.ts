type HeicOutputType = "image/jpeg" | "image/png";

let heicModulePromise: Promise<typeof import("heic-to")> | null = null;

/** Lazy-load heic-to (libheif WASM ~1.2MB) on first HEIC decode. */
function loadHeicTo(inWorker: boolean) {
  if (!heicModulePromise) {
    heicModulePromise = (inWorker
      ? import("heic-to/next")
      : import("heic-to")) as Promise<typeof import("heic-to")>;
  }
  return heicModulePromise;
}

function scaledSize(
  width: number,
  height: number,
  maxWidth: number | null,
): { width: number; height: number } {
  if (!maxWidth || width <= maxWidth) return { width, height };
  const scale = maxWidth / width;
  return {
    width: maxWidth,
    height: Math.max(1, Math.round(height * scale)),
  };
}

async function bitmapToBlob(
  bitmap: ImageBitmap,
  toType: HeicOutputType,
  quality: number,
  maxWidth: number | null,
): Promise<Blob> {
  const { width, height } = scaledSize(bitmap.width, bitmap.height, maxWidth);
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  if (toType === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  return canvas.convertToBlob({
    type: toType,
    quality: toType === "image/png" ? undefined : quality,
  });
}

/** Safari may decode HEIC natively via createImageBitmap. */
async function decodeHeicNative(
  source: Blob,
  toType: HeicOutputType,
  quality: number,
  maxWidth: number | null,
): Promise<Blob | null> {
  try {
    const bitmap = await createImageBitmap(source);
    return await bitmapToBlob(bitmap, toType, quality, maxWidth);
  } catch {
    return null;
  }
}

async function decodeHeicWasm(
  source: Blob,
  toType: HeicOutputType,
  quality: number,
  maxWidth: number | null,
  inWorker: boolean,
): Promise<Blob> {
  const { heicTo } = await loadHeicTo(inWorker);
  const decoded = await heicTo({
    blob: source,
    type: toType,
    quality,
  });

  if (!maxWidth) return decoded;

  const bitmap = await createImageBitmap(decoded);
  return bitmapToBlob(bitmap, toType, quality, maxWidth);
}

/**
 * Decode HEIC/HEIF to JPEG or PNG.
 * Tries native decode first (Safari), then lazy-loaded libheif WASM.
 */
export async function decodeHeic(
  source: Blob,
  toType: HeicOutputType,
  quality = 0.9,
  maxWidth: number | null = null,
  inWorker = false,
): Promise<Blob> {
  const native = await decodeHeicNative(source, toType, quality, maxWidth);
  if (native) return native;

  return decodeHeicWasm(source, toType, quality, maxWidth, inWorker);
}

/** @deprecated Use decodeHeic — kept for any direct imports during migration. */
export async function convertHeic(
  file: File,
  toType: HeicOutputType,
  quality = 0.9,
): Promise<Blob> {
  return decodeHeic(file, toType, quality, null, false);
}
