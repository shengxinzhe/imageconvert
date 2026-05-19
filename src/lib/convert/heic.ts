import heic2any from "heic2any";

export async function convertHeic(
  file: File,
  toType: "image/jpeg" | "image/png",
  quality = 0.9
): Promise<Blob> {
  const result = await heic2any({
    blob: file,
    toType,
    quality,
  });
  const blob = Array.isArray(result) ? result[0] : result;
  if (!blob) throw new Error("HEIC conversion failed");
  return blob;
}
