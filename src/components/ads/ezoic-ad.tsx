"use client";

import { useEffect, useState } from "react";
import { runEzoic } from "@/lib/ezoic";

export function EzoicAd({ id }: { id: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    runEzoic(() => {
      window.ezstandalone?.showAds(id);
    });

    return () => {
      runEzoic(() => {
        window.ezstandalone?.destroyPlaceholders(id);
      });
    };
  }, [id]);

  return (
    <div className="ezoic-ad my-6 flex min-h-[90px] items-center justify-center">
      {mounted ? (
        <div id={`ezoic-pub-ad-placeholder-${id}`} className="w-full" />
      ) : null}
    </div>
  );
}
