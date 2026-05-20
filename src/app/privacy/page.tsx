import type { Metadata } from "next";
import Link from "next/link";
import { PRIVACY_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}. Browser-local conversion, GDPR, cookies, Google AdSense, and analytics.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 prose-vercel lg:px-6">
      <h1>Privacy Policy</h1>
      <p className="font-mono text-sm text-mute">Last updated: May 19, 2026</p>
      <p>
        {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) provides free image conversion tools that run
        in your web browser. We do not upload or store your image files on our servers for
        conversion.
      </p>

      <h2>Image data</h2>
      <p>
        Conversion is performed locally on your device using JavaScript, WebAssembly, and the
        Canvas API. Your photos are not transmitted to us for processing.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        With your consent, we may use cookies and similar technologies for privacy-friendly
        analytics (e.g. Vercel Analytics) to understand how the site is used. Analytics does
        not include the content of your image files.
      </p>
      <p>
        You can accept or decline non-essential cookies via our cookie banner. Essential cookies
        may still be required for basic site operation.
      </p>

      <h2>Google AdSense</h2>
      <p>
        We use <strong>Google AdSense</strong> to display advertisements. Google and its
        partners may use cookies and similar technologies to serve ads based on your visits to
        this and other websites, to measure ad performance, and to combat fraud.
      </p>
      <p>
        Personalized ads in the EEA, UK, and Switzerland rely on your consent. Until you accept
        cookies in our banner, we configure Google&apos;s Consent Mode so ad-related storage
        remains denied by default.
      </p>
      <p>
        You can learn how Google uses data at{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          rel="noopener noreferrer"
          target="_blank"
        >
          How Google uses information from sites that use its services
        </a>
        . You may opt out of personalized advertising by visiting{" "}
        <a
          href="https://adssettings.google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Ads Settings
        </a>{" "}
        and, where required,{" "}
        <a
          href="https://www.youronlinechoices.eu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Your Online Choices (EU)
        </a>
        .
      </p>
      <p>
        Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s
        prior visits to this website or other websites. Google&apos;s use of advertising cookies
        enables it and its partners to serve ads to users based on their visit to our site
        and/or other sites on the Internet.
      </p>

      <h2>ads.txt</h2>
      <p>
        We publish an <a href="/ads.txt">ads.txt</a> file listing authorized digital sellers
        after AdSense approval, as required by the program.
      </p>

      <h2>GDPR (EEA/UK users)</h2>
      <p>
        If you are in the European Economic Area or UK, you have rights to access, rectify,
        erase, restrict processing, and object to processing of personal data we control (such
        as analytics or ad identifiers tied to cookies—not your image files). Contact us at{" "}
        {PRIVACY_EMAIL}.
      </p>
      <p>
        Legal bases may include consent (cookies/ads), legitimate interests (security and site
        operation), and contractual necessity where applicable.
      </p>

      <h2>Children</h2>
      <p>
        Our service is not directed at children under 13. We do not knowingly collect personal
        information from children.
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> ·{" "}
        <Link href="/contact">Contact page</Link> · <Link href="/about">About {SITE_NAME}</Link>
      </p>
    </div>
  );
}
