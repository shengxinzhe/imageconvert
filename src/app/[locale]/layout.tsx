import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Ga4Analytics } from "@/components/analytics/ga4-analytics";
import { VercelAnalytics } from "@/components/analytics/vercel-analytics";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { routing, type AppLocale } from "@/i18n/routing";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { ADSENSE_CLIENT_ID_DEFAULT } from "@/lib/adsense";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/site-metadata";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d9373",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Free HEIC, WebP & AVIF Converters`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free online image converters for HEIC, WebP, and AVIF. Convert in your browser—private, fast, no upload. Built for iPhone users and developers.",
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
    images: [OG_IMAGE],
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
        <meta name="google-adsense-account" content={ADSENSE_CLIENT_ID_DEFAULT} />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID_DEFAULT}`}
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: adsenseConsentInline }} />
      </head>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <OrganizationJsonLd />
        <Header locale={locale as AppLocale} />
        <main>{children}</main>
        <Footer locale={locale as AppLocale} />
        <CookieBanner />
        <VercelAnalytics />
        <Ga4Analytics />
      </body>
    </html>
  );
}
