"use client";

import { useEffect, useRef } from "react";
import { getAdSenseClientId } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSenseAd({
  slotId,
  layout = "display",
}: {
  slotId: string;
  layout?: "display" | "in-article";
}) {
  const pushed = useRef(false);
  const clientId = getAdSenseClientId();

  useEffect(() => {
    if (!clientId || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* ad blocker or script not ready */
    }
  }, [clientId]);

  if (!clientId) return null;

  return (
    <div className="adsense-ad my-6 flex min-h-[90px] items-center justify-center">
      <ins
        className="adsbygoogle block w-full"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={layout === "in-article" ? "fluid" : "auto"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
