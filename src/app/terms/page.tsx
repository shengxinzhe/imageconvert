import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for using ${SITE_NAME} free online image converters.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 prose-vercel lg:px-6">
      <h1>Terms of Service</h1>
      <p>Last updated: May 19, 2026</p>
      <p>
        By using {SITE_NAME}, you agree to these terms. The service is provided &quot;as is&quot;
        without warranty.
      </p>
      <h2>Use of service</h2>
      <p>
        You may use our converters for lawful personal and commercial purposes. You must own or
        have rights to the images you convert. Do not use the service to process illegal content.
      </p>
      <h2>Limits</h2>
      <p>
        Conversion runs in your browser; we do not impose a fixed file-size or batch count cap,
        but very large files or many images at once may fail on low-memory devices. We may change
        features
        without notice.
      </p>
      <h2>Liability</h2>
      <p>
        We are not liable for data loss, conversion errors, or damages arising from use of the
        tools. Always keep backups of original files.
      </p>
      <h2>Changes</h2>
      <p>We may update these terms. Continued use constitutes acceptance.</p>
    </div>
  );
}
