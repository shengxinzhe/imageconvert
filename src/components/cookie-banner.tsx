"use client";

import CookieConsent from "react-cookie-consent";
import { denyAdConsent, grantAdConsent } from "@/components/ads/consent-mode";
import { isAdSenseScriptEnabled } from "@/lib/adsense";

export function CookieBanner() {
  const adsense = isAdSenseScriptEnabled();

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="heicsave_consent"
      onAccept={() => {
        if (adsense) grantAdConsent();
      }}
      onDecline={() => {
        if (adsense) denyAdConsent();
      }}
      style={{
        background: "#171717",
        fontSize: "14px",
        alignItems: "center",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
      buttonStyle={{
        background: "#ffffff",
        color: "#171717",
        fontSize: "13px",
        borderRadius: "9999px",
        fontWeight: 500,
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #888888",
        color: "#ededed",
        fontSize: "13px",
        borderRadius: "9999px",
      }}
    >
      We use cookies for analytics
      {adsense ? " and Google AdSense ads" : ""}. Your images are never uploaded.{" "}
      <a href="/privacy" className="!text-white underline">
        Privacy Policy
      </a>
    </CookieConsent>
  );
}
