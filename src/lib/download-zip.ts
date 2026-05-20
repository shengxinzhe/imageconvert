import { zipSync } from "fflate";

function uniqueZipName(name: string, used: Set<string>): string {
  if (!used.has(name)) {
    used.add(name);
    return name;
  }
  const dot = name.lastIndexOf(".");
  const base = dot > 0 ? name.slice(0, dot) : name;
  const ext = dot > 0 ? name.slice(dot) : "";
  let i = 2;
  while (used.has(`${base}-${i}${ext}`)) i += 1;
  const next = `${base}-${i}${ext}`;
  used.add(next);
  return next;
}

export async function buildZipBlob(
  entries: { name: string; blob: Blob }[],
): Promise<Blob> {
  const files: Record<string, Uint8Array> = {};
  const used = new Set<string>();

  for (const entry of entries) {
    const name = uniqueZipName(entry.name, used);
    files[name] = new Uint8Array(await entry.blob.arrayBuffer());
  }

  const zipped = zipSync(files);
  return new Blob([zipped], { type: "application/zip" });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
