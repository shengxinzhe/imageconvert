import type { Metadata } from "next";
import Link from "next/link";
import { PRIVACY_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME}: free browser-local HEIC, WebP, and AVIF converters for iPhone users and developers.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 prose-vercel lg:px-6">
      <h1>About {SITE_NAME}</h1>
      <p className="font-mono text-sm text-mute">Last updated: May 19, 2026</p>

      <p>
        {SITE_NAME} is a free online image conversion site at{" "}
        <a href={SITE_URL}>{SITE_URL.replace("https://", "")}</a>. We help iPhone
        users turn HEIC photos into JPG or PNG, and help developers convert WebP and
        AVIF when older apps or email clients cannot open modern formats.
      </p>

      <h2>How we are different</h2>
      <ul>
        <li>
          <strong>Private by design</strong> — conversion runs in your browser with
          JavaScript and WebAssembly. Your photos are not uploaded to our servers for
          processing.
        </li>
        <li>
          <strong>No account required</strong> — no signup, no watermark, no paid tier
          for basic conversion.
        </li>
        <li>
          <strong>Practical features</strong> — batch convert, ZIP download, JPEG/WebP
          quality sliders, and EXIF preservation on HEIC→JPG when your browser allows
          it.
        </li>
      </ul>

      <h2>Who we serve</h2>
      <p>
        Our primary audience is people in the United States and Europe who receive
        HEIC files from iPhones and need JPG for Windows PCs, email, forms, and print.
        We also publish guides for WebP and AVIF workflows used on modern websites.
      </p>

      <h2>How we make money</h2>
      <p>
        {SITE_NAME} is supported by advertising (Google AdSense) and may use privacy-friendly
        analytics with your consent. We do not sell your image files—ads and analytics
        are separate from conversion, which stays on your device.
      </p>

      <h2>Editorial content</h2>
      <p>
        We maintain a <Link href="/blog">blog</Link> with original guides on HEIC, WebP,
        AVIF, and browser-local privacy. Tool pages include step-by-step instructions
        and FAQs so you can solve real problems without installing codecs.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or GDPR requests:{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> or our{" "}
        <Link href="/contact">Contact</Link> page.
      </p>
      <p>
        See also <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    </div>
  );
}
