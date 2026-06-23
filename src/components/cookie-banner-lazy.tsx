"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(
  () => import("@/components/cookie-banner").then((m) => ({ default: m.CookieBanner })),
  { ssr: false },
);

export function CookieBannerLazy() {
  return <CookieBanner />;
}
