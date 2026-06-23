import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Ga4Analytics } from "@/components/analytics/ga4-analytics";
import { VercelAnalytics } from "@/components/analytics/vercel-analytics";
import { ChunkLoadRecovery } from "@/components/chunk-load-recovery";
import { CookieBannerLazy } from "@/components/cookie-banner-lazy";
import { ConsentRestore } from "@/components/consent-restore";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { routing, type AppLocale } from "@/i18n/routing";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { ADSENSE_CLIENT_ID_DEFAULT } from "@/lib/adsense";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getOgImage } from "@/lib/site-metadata";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d9373",
};

const LAYOUT_COPY: Record<
  AppLocale,
  { title: string; description: string }
> = {
  en: {
    title: `${SITE_NAME} — Free HEIC, WebP & AVIF Converters`,
    description:
      "Free online image converters for HEIC, WebP, and AVIF. Convert in your browser—private, fast, no upload. Built for iPhone users and developers.",
  },
  de: {
    title: `${SITE_NAME} — HEIC, WebP & AVIF kostenlos konvertieren`,
    description:
      "Kostenlose Bildkonverter für HEIC, WebP und AVIF im Browser. Privat, schnell, ohne Upload — für iPhone-Nutzer und Entwickler.",
  },
  fr: {
    title: `${SITE_NAME} — Convertisseurs HEIC, WebP et AVIF gratuits`,
    description:
      "Convertisseurs d'images gratuits pour HEIC, WebP et AVIF dans le navigateur. Privé, rapide, sans envoi — pour iPhone et développeurs.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const { title, description } = LAYOUT_COPY[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"],
    },
    openGraph: {
      images: [getOgImage(locale)],
    },
    ...(process.env.BING_MSVALIDATE
      ? {
          verification: {
            other: { "msvalidate.01": process.env.BING_MSVALIDATE },
          },
        }
      : {}),
    other: {
      "google-adsense-account": ADSENSE_CLIENT_ID_DEFAULT,
    },
  };
}

const adsenseConsentInline = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  wait_for_update:500
});
`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full catalog" />
        <link
          rel="alternate"
          type="application/json"
          href="/ai.json"
          title="AI discovery catalog"
        />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="google-adsense-account" content={ADSENSE_CLIENT_ID_DEFAULT} />
      </head>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Script
          id="adsense-consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: adsenseConsentInline }}
        />
        <Script
          id="adsense-loader"
          strategy="lazyOnload"
          async
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID_DEFAULT}`}
        />
        <ChunkLoadRecovery />
        <OrganizationJsonLd locale={locale as AppLocale} />
        <Header locale={locale as AppLocale} />
        <main>{children}</main>
        <Footer locale={locale as AppLocale} />
        <CookieBannerLazy />
        <ConsentRestore />
        <VercelAnalytics />
        <Ga4Analytics />
      </body>
    </html>
  );
}
