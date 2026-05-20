import type { Metadata } from "next";
import Link from "next/link";
import { DMCA_EMAIL, PRIVACY_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} for support, privacy requests, and general questions.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 prose-vercel lg:px-6">
      <h1>Contact {SITE_NAME}</h1>
      <p>
        We run {SITE_NAME} at{" "}
        <a href={SITE_URL} className="font-medium text-ink">
          {SITE_URL.replace("https://", "")}
        </a>
        . Image conversion happens in your browser—we do not receive your photo files.
      </p>

      <h2>General &amp; privacy</h2>
      <p>
        Questions about cookies, GDPR, or how the site works:{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
      </p>

      <h2>Copyright (DMCA)</h2>
      <p>
        Copyright notices and takedown requests:{" "}
        <a href={`mailto:${DMCA_EMAIL}`}>{DMCA_EMAIL}</a>
      </p>
      <p>
        See our <Link href="/dmca">DMCA policy</Link> for required notice details.
      </p>

      <h2>Response time</h2>
      <p>
        We aim to reply within a few business days. We cannot recover converted files or
        debug device-specific issues without steps to reproduce (browser, OS, file type).
      </p>

      <h2>Before you write</h2>
      <ul>
        <li>
          Conversion problems? Try{" "}
          <Link href="/heic-to-jpg">HEIC to JPG</Link> in Chrome or Edge on a desktop.
        </li>
        <li>
          Who runs the site? See <Link href="/about">About</Link>.
        </li>
        <li>
          Privacy rights (EEA/UK)? See the <Link href="/privacy">Privacy Policy</Link>.
        </li>
      </ul>
    </div>
  );
}
