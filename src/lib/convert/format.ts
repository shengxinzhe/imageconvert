import { DEFAULT_JPEG_QUALITY, DEFAULT_WEBP_QUALITY } from "@/lib/constants";
import { isIos } from "@/lib/platform";
import type { InputFormat, OutputFormat } from "./conversion-types";

export type { InputFormat, OutputFormat } from "./conversion-types";

function outputExtension(to: OutputFormat): string {
  if (to === "jpeg") return "jpg";
  return to;
}

export function getOutputFilename(originalName: string, to: OutputFormat): string {
  const base = originalName.replace(/\.[^.]+$/, "");
  return `${base}.${outputExtension(to)}`;
}

export function outputSupportsQuality(to: OutputFormat): boolean {
  return to === "jpg" || to === "jpeg" || to === "webp";
}

export function defaultQualityPercent(to: OutputFormat): number {
  if (to === "webp") return Math.round(DEFAULT_WEBP_QUALITY * 100);
  if (to === "jpg" || to === "jpeg") return Math.round(DEFAULT_JPEG_QUALITY * 100);
  return 90;
}

export function acceptMimeForInput(from: InputFormat): string {
  const map: Record<InputFormat, string> = {
    heic: "image/heic,image/heif,.heic,.heif",
    webp: "image/webp,.webp",
    avif: "image/avif,.avif",
    jpg: "image/jpeg,.jpg,.jpeg",
    jpeg: "image/jpeg,.jpg,.jpeg",
    png: "image/png,.png",
  };
  return map[from];
}

/** `accept` for `<input type="file">` — iOS Photos needs `image/*` to open the library. */
export function fileInputAccept(from: InputFormat): string {
  const specific = acceptMimeForInput(from);
  if (isIos()) return `image/*,${specific}`;
  return specific;
}

export function supportsExifToggle(from: InputFormat, to: OutputFormat): boolean {
  return from === "heic" && (to === "jpg" || to === "jpeg");
}
