import type { Metadata } from "next";
import { PRIVACY_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}. Browser-local conversion, GDPR, cookies, and analytics.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose prose-slate dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: May 19, 2026</p>
      <p>
        {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) provides free image conversion tools that run
        in your web browser. We do not upload or store your image files on our servers.
      </p>
      <h2>Image data</h2>
      <p>
        Conversion is performed locally on your device using JavaScript and WebAssembly. Your
        photos are not transmitted to us for processing.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        With your consent, we may use cookies for analytics (e.g. Vercel Analytics, Plausible)
        and advertising partners. You can accept or decline via our cookie banner. Essential
        cookies may be required for site functionality.
      </p>
      <h2>GDPR (EEA/UK users)</h2>
      <p>
        If you are in the European Economic Area or UK, you have rights to access, rectify,
        erase, restrict processing, and object. Contact us at {PRIVACY_EMAIL}. Legal basis for
        analytics: consent where required.
      </p>
      <h2>Contact</h2>
      <p>Email: {PRIVACY_EMAIL}</p>
    </div>
  );
}
