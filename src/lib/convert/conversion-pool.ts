import type {
  BatchConvertFailure,
  BatchConvertSuccess,
  ConversionJobPayload,
  WorkerOutMessage,
} from "./conversion-types";
import {
  convertImage,
  getOutputFilename,
  type ConvertOptions,
  type InputFormat,
  type OutputFormat,
} from "./index";

const DEFAULT_POOL_SIZE = 3;
const MAX_POOL_SIZE = 4;

function poolSize(): number {
  if (typeof navigator === "undefined") return DEFAULT_POOL_SIZE;
  const cores = navigator.hardwareConcurrency ?? DEFAULT_POOL_SIZE;
  return Math.min(MAX_POOL_SIZE, Math.max(2, Math.floor(cores / 2)));
}

function canUseWorkers(): boolean {
  return (
    typeof Worker !== "undefined" &&
    typeof OffscreenCanvas !== "undefined" &&
    typeof createImageBitmap !== "undefined"
  );
}

function createWorker(): Worker {
  return new Worker(new URL("./convert.worker.ts", import.meta.url));
}

function runInWorker(
  worker: Worker,
  payload: ConversionJobPayload,
): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const onMessage = (event: MessageEvent<WorkerOutMessage>) => {
      if (event.data.jobId !== payload.jobId) return;
      worker.removeEventListener("message", onMessage);
      worker.removeEventListener("error", onError);
      if (event.data.type === "success") {
        resolve(event.data.buffer);
      } else {
        reject(new Error(event.data.message));
      }
    };
    const onError = (event: ErrorEvent) => {
      worker.removeEventListener("message", onMessage);
      worker.removeEventListener("error", onError);
      reject(event.error ?? new Error(event.message));
    };
    worker.addEventListener("message", onMessage);
    worker.addEventListener("error", onError);
    worker.postMessage(payload, [payload.buffer]);
  });
}

type PoolWorker = {
  worker: Worker;
  busy: boolean;
};

async function convertWithPool(
  files: File[],
  options: ConvertOptions,
  onProgress: (completed: number, total: number) => void,
): Promise<{ successes: BatchConvertSuccess[]; failures: BatchConvertFailure[] }> {
  const total = files.length;
  let completed = 0;
  const successes: BatchConvertSuccess[] = [];
  const failures: BatchConvertFailure[] = [];

  const workers: PoolWorker[] = Array.from({ length: poolSize() }, () => ({
    worker: createWorker(),
    busy: false,
  }));

  const queue = files.map((file, index) => ({ file, index }));

  const acquireWorker = (): Promise<PoolWorker> =>
    new Promise((resolve) => {
      const tryAcquire = () => {
        const free = workers.find((w) => !w.busy);
        if (free) {
          free.busy = true;
          resolve(free);
          return;
        }
        setTimeout(tryAcquire, 16);
      };
      tryAcquire();
    });

  const processOne = async (file: File, index: number) => {
    const slot = await acquireWorker();
    const jobId = `${file.name}-${file.size}-${index}-${Date.now()}`;
    const buffer = await file.arrayBuffer();
    const payload: ConversionJobPayload = {
      jobId,
      buffer,
      fileName: file.name,
      from: options.from,
      to: options.to,
      quality: options.quality ?? 0.9,
      maxWidth: options.maxWidth ?? null,
    };

    try {
      const outBuffer = await runInWorker(slot.worker, payload);
      let blob = new Blob([outBuffer], {
        type:
          options.to === "png"
            ? "image/png"
            : options.to === "webp"
              ? "image/webp"
              : "image/jpeg",
      });

      if (
        options.from === "heic" &&
        (options.to === "jpg" || options.to === "jpeg") &&
        options.preserveExif !== false
      ) {
        const { preserveExifOnJpeg } = await import("./exif");
        blob = await preserveExifOnJpeg(file, blob);
      }

      successes.push({
        file,
        blob,
        outputName: getOutputFilename(file.name, options.to),
      });
    } catch (err) {
      failures.push({ file, error: err });
    } finally {
      slot.busy = false;
      completed += 1;
      onProgress(completed, total);
    }
  };

  try {
    await Promise.all(queue.map(({ file, index }) => processOne(file, index)));
  } finally {
    workers.forEach(({ worker }) => worker.terminate());
  }

  successes.sort((a, b) => a.file.name.localeCompare(b.file.name));
  return { successes, failures };
}

async function convertSequentialMainThread(
  files: File[],
  options: ConvertOptions,
  onProgress: (completed: number, total: number) => void,
): Promise<{ successes: BatchConvertSuccess[]; failures: BatchConvertFailure[] }> {
  const successes: BatchConvertSuccess[] = [];
  const failures: BatchConvertFailure[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    try {
      const blob = await convertImage(file, options);
      successes.push({
        file,
        blob,
        outputName: getOutputFilename(file.name, options.to),
      });
    } catch (err) {
      failures.push({ file, error: err });
    }
    onProgress(i + 1, files.length);
  }

  return { successes, failures };
}

export async function convertBatch(
  files: File[],
  options: ConvertOptions & { from: InputFormat; to: OutputFormat },
  onProgress: (completed: number, total: number) => void,
): Promise<{ successes: BatchConvertSuccess[]; failures: BatchConvertFailure[] }> {
  if (!files.length) {
    return { successes: [], failures: [] };
  }

  if (canUseWorkers()) {
    try {
      return await convertWithPool(files, options, onProgress);
    } catch {
      /* fall through to main-thread path */
    }
  }

  return convertSequentialMainThread(files, options, onProgress);
}
