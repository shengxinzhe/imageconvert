"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/react";
import { hasAnalyticsConsent } from "@/lib/analytics-consent";

function beforeSend(event: BeforeSendEvent): BeforeSendEvent | null {
  if (!hasAnalyticsConsent()) return null;
  return event;
}

/**
 * Web Analytics pageviews + custom events (via track()).
 * Events are only sent after cookie Accept — see analytics-consent.ts.
 * Dashboard: Vercel → Project → Analytics → Pages / Events.
 */
export function VercelAnalytics() {
  return (
    <Analytics
      debug={process.env.NODE_ENV === "development"}
      beforeSend={beforeSend}
    />
  );
}
