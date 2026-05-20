"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isEzoicEnabled, runEzoic } from "@/lib/ezoic";

/** Re-scan ad placeholders on client-side route changes (Next.js App Router). */
export function EzoicRouteHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isEzoicEnabled()) return;

    runEzoic(() => {
      window.ezstandalone?.destroyPlaceholders();
      requestAnimationFrame(() => {
        window.ezstandalone?.showAds();
      });
    });
  }, [pathname]);

  return null;
}
