import { ANALYTICS_CONSENT_COOKIE } from "@/lib/analytics-consent";

export type ConsentCookieStatus = "accepted" | "declined" | "unknown";

/** Read heicsave_consent cookie set by react-cookie-consent. */
export function getConsentCookieStatus(): ConsentCookieStatus {
  if (typeof document === "undefined") return "unknown";

  for (const part of document.cookie.split(";")) {
    const [name, value] = part.trim().split("=");
    if (name !== ANALYTICS_CONSENT_COOKIE) continue;
    if (value === "true") return "accepted";
    if (value === "false") return "declined";
  }

  return "unknown";
}
