export const ANALYTICS_CONSENT_COOKIE = "heicsave_consent";

/** Matches react-cookie-consent value when user clicks Accept. */
export function hasAnalyticsConsent(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split(";").some((part) => {
    const [name, value] = part.trim().split("=");
    return name === ANALYTICS_CONSENT_COOKIE && value === "true";
  });
}
