import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/site-metadata";
import type { ToolConfig } from "@/lib/tools-config";

export function toolMetadata(tool: ToolConfig): Metadata {
  return {
    title: tool.title,
    description: tool.metaDescription,
    keywords: tool.keywords,
    alternates: { canonical: `${SITE_URL}${tool.path}` },
    openGraph: {
      title: tool.title,
      description: tool.metaDescription,
      url: `${SITE_URL}${tool.path}`,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}
