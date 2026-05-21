import type { AppLocale } from "@/i18n/routing";

export type LegalPageId = "about" | "contact" | "privacy" | "terms" | "dmca";

export interface LegalPageContent {
  meta: { title: string; description: string };
  h1: string;
  /** Shown under h1 when set (e.g. "Last updated: …") */
  lastUpdated?: string;
  /** Markdown body (headings start at ##). Internal links use /path syntax. */
  body: string;
}

export type LegalCatalog = Record<LegalPageId, LegalPageContent>;

export type LegalLocale = AppLocale;
