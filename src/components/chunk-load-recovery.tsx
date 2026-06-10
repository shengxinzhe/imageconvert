"use client";

import { useEffect } from "react";

const RELOAD_KEY = "heicsave_chunk_reload";

function shouldRecover(message: string, source?: string): boolean {
  const haystack = `${message} ${source ?? ""}`;
  return (
    haystack.includes("ChunkLoadError") ||
    haystack.includes("Loading chunk") ||
    haystack.includes("/_next/static/chunks/")
  );
}

/**
 * After deploy, cached HTML may reference removed JS chunks (404 → text/plain MIME).
 * Reload once so the browser picks up fresh HTML + chunk hashes.
 */
export function ChunkLoadRecovery() {
  useEffect(() => {
    const recover = (message: string, source?: string) => {
      if (!shouldRecover(message, source)) return;
      if (sessionStorage.getItem(RELOAD_KEY)) return;
      sessionStorage.setItem(RELOAD_KEY, "1");
      window.location.reload();
    };

    const onError = (event: ErrorEvent) => {
      const target = event.target;
      let source: string | undefined;
      if (target instanceof HTMLScriptElement) {
        source = target.src;
      } else if (target instanceof HTMLLinkElement) {
        source = target.href;
      }
      recover(event.message, source);
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message =
        reason instanceof Error
          ? reason.message
          : typeof reason === "string"
            ? reason
            : "";
      recover(message);
    };

    window.addEventListener("error", onError, true);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
