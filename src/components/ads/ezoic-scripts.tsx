import Script from "next/script";
import { isEzoicEnabled } from "@/lib/ezoic";

/** Ezoic header + privacy scripts (required for site connection & ads). */
export function EzoicScripts() {
  if (!isEzoicEnabled()) return null;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document -- Ezoic CMP must load before sa.min.js */}
      <Script
        id="ezoic-cmp"
        src="https://cmp.gatekeeperconsent.com/min.js"
        strategy="beforeInteractive"
        data-cfasync="false"
      />
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        id="ezoic-cmp-2"
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        strategy="beforeInteractive"
        data-cfasync="false"
      />
      <Script
        id="ezoic-sa"
        src="//www.ezojs.com/ezoic/sa.min.js"
        strategy="afterInteractive"
      />
      <Script id="ezoic-init" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          window.ezstandalone.cmd = window.ezstandalone.cmd || [];
        `}
      </Script>
      <Script
        id="ezoic-analytics"
        src="//ezoicanalytics.com/analytics.js"
        strategy="afterInteractive"
      />
    </>
  );
}
