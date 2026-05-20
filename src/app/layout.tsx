import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ADSENSE_CLIENT_ID_DEFAULT } from "@/lib/adsense";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Free HEIC, WebP & AVIF Converters`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Convert HEIC, WebP, and AVIF images free in your browser. Private, fast, no upload. Built for iPhone users and developers in the US & EU.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free HEIC, WebP & AVIF Converters`,
    description:
      "Convert HEIC, WebP, and AVIF images free in your browser. Private, fast, no upload.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Free HEIC, WebP & AVIF converters`,
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free HEIC, WebP & AVIF Converters`,
    description:
      "Convert HEIC, WebP, and AVIF images free in your browser. Private, fast, no upload.",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Literal tags for Google AdSense crawler (next/script __next_s is not detected) */}
        <meta name="google-adsense-account" content={ADSENSE_CLIENT_ID_DEFAULT} />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID_DEFAULT}`}
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: adsenseConsentInline }} />
      </head>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
