"use client";

import CookieConsent from "react-cookie-consent";
import { useParams } from "next/navigation";
import { denyAdConsent, grantAdConsent } from "@/components/ads/consent-mode";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { isAdSenseScriptEnabled } from "@/lib/adsense";
import { getT } from "@/lib/i18n/translations";

export function CookieBanner() {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);
  const adsense = isAdSenseScriptEnabled();

  const message = t("cookie.message", {
    ads: adsense ? t("cookie.messageAds") : "",
  });

  return (
    <CookieConsent
      location="bottom"
      buttonText={t("cookie.accept")}
      declineButtonText={t("cookie.decline")}
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
      {message}{" "}
      <Link href="/privacy" className="!text-white underline">
        {t("cookie.privacyLink")}
      </Link>
    </CookieConsent>
  );
}
