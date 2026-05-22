"use client";

import { useEffect } from "react";
import { denyCookieConsent, grantCookieConsent } from "@/components/ads/consent-mode";
import { isAdSenseScriptEnabled } from "@/lib/adsense";
import { getConsentCookieStatus } from "@/lib/consent-cookie";

/**
 * Re-apply Google Consent Mode when the user already chose Accept/Decline
 * (react-cookie-consent hides the banner and does not re-fire onAccept).
 */
export function ConsentRestore() {
  useEffect(() => {
    const status = getConsentCookieStatus();
    const ads = isAdSenseScriptEnabled();

    if (status === "accepted") {
      grantCookieConsent(ads);
    } else if (status === "declined") {
      denyCookieConsent(ads);
    }
  }, []);

  return null;
}
