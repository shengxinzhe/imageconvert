export type InputFormat = "heic" | "webp" | "avif" | "jpg" | "jpeg" | "png";
export type OutputFormat = "jpg" | "jpeg" | "png" | "webp";

export type BatchConvertOptions = {
  from: InputFormat;
  to: OutputFormat;
  quality?: number;
  maxWidth?: number | null;
  preserveExif?: boolean;
};

export type ConversionJobPayload = {
  jobId: string;
  buffer: ArrayBuffer;
  fileName: string;
  from: InputFormat;
  to: OutputFormat;
  quality: number;
  maxWidth: number | null;
};

export type WorkerSuccessMessage = {
  type: "success";
  jobId: string;
  buffer: ArrayBuffer;
  mimeType: string;
};

export type WorkerErrorMessage = {
  type: "error";
  jobId: string;
  message: string;
};

export type WorkerOutMessage = WorkerSuccessMessage | WorkerErrorMessage;

export type BatchConvertSuccess = {
  file: File;
  blob: Blob;
  outputName: string;
};

export type BatchConvertFailure = {
  file: File;
  error: unknown;
};
