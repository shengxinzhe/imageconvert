import exifr from "exifr";

type PiexifDict = Record<string, Record<number, unknown>>;

function formatExifDate(value: unknown): string | undefined {
  if (!value) return undefined;
  const d = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(d.getTime())) return undefined;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}:${pad(d.getMonth() + 1)}:${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

/** Build piexif-compatible EXIF from source file (best-effort). */
export async function extractPiexifFromFile(file: File): Promise<PiexifDict | null> {
  try {
    const tags = await exifr.parse(file, {
      pick: [
        "Make",
        "Model",
        "Orientation",
        "DateTimeOriginal",
        "CreateDate",
        "ModifyDate",
        "ExposureTime",
        "FNumber",
        "ISO",
        "FocalLength",
        "LensModel",
      ],
    });
    if (!tags || typeof tags !== "object") return null;

    const piexif = await import("piexifjs");
    const zeroth: Record<number, unknown> = {};
    const exifIfd: Record<number, unknown> = {};

    const t = tags as Record<string, unknown>;

    if (t.Make) zeroth[piexif.ImageIFD.Make] = String(t.Make);
    if (t.Model) zeroth[piexif.ImageIFD.Model] = String(t.Model);
    if (t.Orientation) zeroth[piexif.ImageIFD.Orientation] = Number(t.Orientation);

    const date =
      formatExifDate(t.DateTimeOriginal) ??
      formatExifDate(t.CreateDate) ??
      formatExifDate(t.ModifyDate);
    if (date) {
      zeroth[piexif.ImageIFD.DateTime] = date;
      exifIfd[piexif.ExifIFD.DateTimeOriginal] = date;
      exifIfd[piexif.ExifIFD.DateTimeDigitized] = date;
    }

    if (t.ExposureTime) exifIfd[piexif.ExifIFD.ExposureTime] = t.ExposureTime;
    if (t.FNumber) exifIfd[piexif.ExifIFD.FNumber] = t.FNumber;
    if (t.ISO) exifIfd[piexif.ExifIFD.ISOSpeedRatings] = t.ISO;
    if (t.FocalLength) exifIfd[piexif.ExifIFD.FocalLength] = t.FocalLength;
    if (t.LensModel) exifIfd[piexif.ExifIFD.LensModel] = String(t.LensModel);

    if (!Object.keys(zeroth).length && !Object.keys(exifIfd).length) return null;

    return {
      "0th": zeroth,
      Exif: exifIfd,
    };
  } catch {
    return null;
  }
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read JPEG for EXIF"));
    reader.readAsDataURL(blob);
  });
}

export async function embedExifInJpeg(
  jpegBlob: Blob,
  exifDict: PiexifDict,
): Promise<Blob> {
  const piexif = await import("piexifjs");
  const dataUrl = await blobToDataUrl(jpegBlob);
  const withExif = piexif.insert(exifDict, dataUrl);
  const res = await fetch(withExif);
  return res.blob();
}

export async function preserveExifOnJpeg(
  source: File,
  jpegBlob: Blob,
): Promise<Blob> {
  const exifDict = await extractPiexifFromFile(source);
  if (!exifDict) return jpegBlob;
  try {
    return await embedExifInJpeg(jpegBlob, exifDict);
  } catch {
    return jpegBlob;
  }
}
