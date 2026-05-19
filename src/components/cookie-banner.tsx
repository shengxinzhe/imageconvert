"use client";

import CookieConsent from "react-cookie-consent";

export function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="heicsave_consent"
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
      We use cookies for analytics and ads (with your consent). Images are never uploaded.{" "}
      <a href="/privacy" className="!text-white underline">
        Privacy Policy
      </a>
    </CookieConsent>
  );
}
