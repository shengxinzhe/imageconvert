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
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          gtag('config', '${id}', { send_page_view: false });
        `}
      </Script>
    </>
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
