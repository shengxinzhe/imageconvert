import type { InputFormat } from "@/lib/convert";
import { isIos } from "@/lib/platform";

const EXT: Record<InputFormat, RegExp> = {
  heic: /\.(heic|heif)$/i,
  webp: /\.webp$/i,
  avif: /\.avif$/i,
  jpg: /\.(jpe?g)$/i,
  jpeg: /\.(jpe?g)$/i,
  png: /\.png$/i,
};

const MIME: Record<InputFormat, string[]> = {
  heic: ["image/heic", "image/heif"],
  webp: ["image/webp"],
  avif: ["image/avif"],
  jpg: ["image/jpeg"],
  jpeg: ["image/jpeg"],
  png: ["image/png"],
};

const IOS_WRONG_EXT: Record<InputFormat, RegExp | null> = {
  heic: /\.(webp|avif|gif|bmp|svg|mov|mp4)$/i,
  webp: /\.(heic|heif|avif|gif|bmp|svg|mov|mp4)$/i,
  avif: /\.(heic|heif|webp|gif|bmp|svg|mov|mp4)$/i,
  jpg: /\.(heic|heif|webp|avif|gif|bmp|svg|mov|mp4)$/i,
  jpeg: /\.(heic|heif|webp|avif|gif|bmp|svg|mov|mp4)$/i,
  png: /\.(heic|heif|webp|avif|gif|bmp|svg|mov|mp4)$/i,
};

function iosLooseMatch(file: File, from: InputFormat): boolean {
  const type = file.type.toLowerCase();
  const wrongExt = IOS_WRONG_EXT[from];
  if (wrongExt?.test(file.name)) return false;

  if (!type || type === "application/octet-stream") {
    return from === "heic" || EXT[from].test(file.name);
  }

  if (type.startsWith("image/")) {
    if (MIME[from].includes(type)) return true;
    // HEIC picker on iOS may report image/jpeg while bytes are still HEIC
    if (from === "heic" && (type === "image/jpeg" || type === "image/png")) {
      return true;
    }
  }

  return false;
}

/** Whether a File matches the converter input format. */
export function fileMatchesInput(file: File, from: InputFormat): boolean {
  if (EXT[from].test(file.name)) return true;
  const type = file.type.toLowerCase();
  if (MIME[from].some((m) => type === m)) return true;
  if (isIos()) return iosLooseMatch(file, from);
  return false;
}

export function filterFilesForInput(files: File[], from: InputFormat): File[] {
  return files.filter((f) => fileMatchesInput(f, from));
}
