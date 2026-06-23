"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { hasAnalyticsConsent } from "@/lib/analytics-consent";
import { getGaMeasurementId, trackGaPageview } from "@/lib/ga4";

function Ga4Pageviews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!getGaMeasurementId() || !hasAnalyticsConsent()) return;
    const query = searchParams?.toString();
    trackGaPageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}

function Ga4Scripts() {
  const id = getGaMeasurementId();
  if (!id) return null;

  return (
    <Script
      id="ga4-gtag"
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      strategy="lazyOnload"
      onLoad={() => {
        const gtag = (window as Window & { gtag?: (...args: unknown[]) => void })
          .gtag;
        gtag?.("js", new Date());
        gtag?.("config", id, { send_page_view: false });
      }}
    />
  );
}

/**
 * GA4 pageviews after cookie Accept. Consent Mode defaults live in layout <head>.
 * Dashboard: analytics.google.com → Reports → Realtime.
 */
export function Ga4Analytics() {
  if (!getGaMeasurementId()) return null;

  return (
    <>
      <Ga4Scripts />
      <Suspense fallback={null}>
        <Ga4Pageviews />
      </Suspense>
    </>
  );
}
