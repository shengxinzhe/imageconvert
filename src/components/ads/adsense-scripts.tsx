import Script from "next/script";
import { getAdSenseClientId, isAdSenseScriptEnabled } from "@/lib/adsense";

/** AdSense site verification + Auto ads (required for application and serving). */
export function AdSenseScripts() {
  const clientId = getAdSenseClientId();
  if (!isAdSenseScriptEnabled() || !clientId) return null;

  return (
    <Script
      id="adsense-loader"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
