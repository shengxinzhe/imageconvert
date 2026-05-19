import type { Metadata } from "next";
import { DMCA_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DMCA",
  description: `DMCA copyright policy and agent contact for ${SITE_NAME}.`,
};

export default function DmcaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose prose-slate dark:prose-invert">
      <h1>DMCA Policy</h1>
      <p>
        {SITE_NAME} respects intellectual property rights. We respond to valid DMCA notices.
      </p>
      <h2>Designated agent</h2>
      <p>
        Email: <a href={`mailto:${DMCA_EMAIL}`}>{DMCA_EMAIL}</a>
      </p>
      <h2>Notice requirements</h2>
      <p>Your notice should include:</p>
      <ul>
        <li>Identification of the copyrighted work</li>
        <li>Identification of the infringing material and its location (URL)</li>
        <li>Your contact information</li>
        <li>A statement of good faith belief</li>
        <li>A statement under penalty of perjury that the information is accurate</li>
        <li>Your physical or electronic signature</li>
      </ul>
      <p>
        Note: Our conversion tools process files locally in the user&apos;s browser; we do not
        host user-uploaded images on our servers.
      </p>
    </div>
  );
}
