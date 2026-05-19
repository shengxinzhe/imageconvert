"use client";

import CookieConsent from "react-cookie-consent";

export function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="imageconvert_consent"
      style={{
        background: "#0f172a",
        fontSize: "14px",
        alignItems: "center",
      }}
      buttonStyle={{
        background: "#059669",
        color: "#fff",
        fontSize: "13px",
        borderRadius: "8px",
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #64748b",
        color: "#e2e8f0",
        fontSize: "13px",
        borderRadius: "8px",
      }}
    >
      We use cookies for analytics and ads (with your consent). Conversion runs in
      your browser—images are never uploaded. See our{" "}
      <a href="/privacy" className="underline">
        Privacy Policy
      </a>
      .
    </CookieConsent>
  );
}
