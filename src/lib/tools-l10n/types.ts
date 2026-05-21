import type { ToolConfig } from "@/lib/tools-config";

export type ToolSeoSection = ToolConfig["seoSections"][number];

export type ToolLocaleFields = Pick<
  ToolConfig,
  | "title"
  | "h1"
  | "metaDescription"
  | "heroSubtitle"
  | "whyConvert"
  | "howToSteps"
  | "privacyNote"
  | "faqs"
> & {
  keywords?: string[];
  seoSections?: ToolSeoSection[];
};
