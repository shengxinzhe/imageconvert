function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}

function scaledDimensions(
  naturalWidth: number,
  naturalHeight: number,
  maxWidth: number | null,
): { width: number; height: number } {
  if (!maxWidth || naturalWidth <= maxWidth) {
    return { width: naturalWidth, height: naturalHeight };
  }
  const scale = maxWidth / naturalWidth;
  return {
    width: maxWidth,
    height: Math.max(1, Math.round(naturalHeight * scale)),
  };
}

export async function canvasConvert(
  file: File,
  mimeType: string,
  quality?: number,
  maxWidth: number | null = null,
): Promise<Blob> {
  const img = await loadImageFromFile(file);
  const { width, height } = scaledDimensions(
    img.naturalWidth,
    img.naturalHeight,
    maxWidth,
  );
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  if (mimeType === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(img, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error(`Failed to convert to ${mimeType}`));
      },
      mimeType,
      quality,
    );
  });
}
