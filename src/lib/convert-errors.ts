import type { InputFormat } from "@/lib/convert";

function isMemoryError(message: string, error: unknown): boolean {
  if (error instanceof DOMException) {
    return (
      error.name === "QuotaExceededError" ||
      error.name === "AbortError" ||
      /memory/i.test(error.message)
    );
  }
  return /memory|allocation|heap|out of memory|aw snap/i.test(message);
}

export function formatConversionError(
  error: unknown,
  from: InputFormat,
  fileName?: string,
): string {
  const raw = error instanceof Error ? error.message : String(error);
  const message = raw.trim() || "Unknown error";
  const lower = message.toLowerCase();
  const label = fileName ? `"${fileName}"` : "This file";

  if (isMemoryError(message, error)) {
    return `${label} is too large for this browser tab. Close other tabs, convert fewer files at once, or use Chrome or Edge on a desktop PC.`;
  }

  if (
    lower.includes("canvas") ||
    lower.includes("failed to load image") ||
    lower.includes("decode")
  ) {
    if (from === "avif") {
      return `${label} could not be decoded as AVIF. Use the latest Chrome or Edge; Firefox and older Safari versions often fail on AVIF.`;
    }
    if (from === "webp") {
      return `${label} could not be decoded as WebP. Try Chrome or Edge, or re-export the image from your editor.`;
    }
    return `${label} could not be loaded for conversion. The file may be corrupt or use an unsupported variant.`;
  }

  if (from === "heic" || lower.includes("heic") || lower.includes("heif")) {
    return `${label} could not be converted from HEIC. Use Chrome or Edge on a desktop, confirm it is a still photo (.heic/.heif, not a Live Photo .mov), and try converting one file at a time.`;
  }

  if (lower.includes("security") || lower.includes("tainted")) {
    return `Browser blocked reading ${label} for security reasons. Reload the page and try again without cross-origin files.`;
  }

  if (lower.includes("not supported") || lower.includes("wasm")) {
    return `Your browser does not support this conversion. Update the browser or switch to Chrome, Edge, or Safari on a recent version.`;
  }

  return `Could not convert ${fileName ?? "the file"}. Try Chrome or Edge on a desktop, use smaller files, or convert fewer images per batch. (${message})`;
}
