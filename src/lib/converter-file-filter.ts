import type { InputFormat } from "@/lib/convert";

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

/** Whether a File matches the converter input format. */
export function fileMatchesInput(file: File, from: InputFormat): boolean {
  if (EXT[from].test(file.name)) return true;
  const type = file.type.toLowerCase();
  return MIME[from].some((m) => type === m);
}

export function filterFilesForInput(files: File[], from: InputFormat): File[] {
  return files.filter((f) => fileMatchesInput(f, from));
}
