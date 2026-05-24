/// <reference lib="webworker" />

import type { ConversionJobPayload, WorkerOutMessage } from "./conversion-types";
import { runConversionJob } from "./worker-convert";

declare const self: DedicatedWorkerGlobalScope;

self.onmessage = async (event: MessageEvent<ConversionJobPayload>) => {
  const payload = event.data;
  try {
    const { buffer, mimeType } = await runConversionJob(payload);
    const message: WorkerOutMessage = {
      type: "success",
      jobId: payload.jobId,
      buffer,
      mimeType,
    };
    self.postMessage(message, [buffer]);
  } catch (err) {
    const message: WorkerOutMessage = {
      type: "error",
      jobId: payload.jobId,
      message: err instanceof Error ? err.message : String(err),
    };
    self.postMessage(message);
  }
};

export {};
