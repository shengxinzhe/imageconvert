import type { AppLocale } from "@/i18n/routing";

export const SCHEMA_LANG: Record<AppLocale, string> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
};

export const SCHEMA_PRICE_CURRENCY: Record<AppLocale, string> = {
  en: "USD",
  de: "EUR",
  fr: "EUR",
};

type SchemaCopy = {
  browserRequirements: string;
  featureList: string[];
  howToName: (from: string, to: string) => string;
  stepName: (position: number) => string;
  homeBreadcrumb: string;
  blogBreadcrumb: string;
  blogIndexName: (siteName: string) => string;
  blogIndexDescription: string;
  aboutPageName: (siteName: string) => string;
  toolsListName: string;
  guidesListName: string;
  definedTermsSetName: string;
  knowsAbout: string[];
  contactLanguages: string[];
  ogImageAlt: (siteName: string) => string;
};

const COPY: Record<AppLocale, SchemaCopy> = {
  en: {
    browserRequirements:
      "Requires JavaScript. Works in Chrome, Edge, Safari, and Firefox.",
    featureList: [
      "Client-side conversion (no upload)",
      "Batch conversion with ZIP download",
      "Adjustable JPEG/WebP quality",
      "Free to use",
      "No account required",
    ],
    howToName: (from, to) => `How to convert ${from} to ${to}`,
    stepName: (n) => `Step ${n}`,
    homeBreadcrumb: "Home",
    blogBreadcrumb: "Blog",
    blogIndexName: (site) => `${site} Blog`,
    blogIndexDescription:
      "Guides for HEIC, AVIF, and WebP on Windows, iPhone, email, and video editors — with links to free browser-local converters.",
    aboutPageName: (site) => `About ${site}`,
    toolsListName: "Free image converters",
    guidesListName: "Image format guides",
    definedTermsSetName: "Image formats HeicSave converts",
    knowsAbout: [
      "HEIC image conversion",
      "AVIF image conversion",
      "WebP image conversion",
      "Browser-local privacy-preserving image tools",
    ],
    contactLanguages: ["English", "German", "French"],
    ogImageAlt: (site) => `${site} — Free HEIC, WebP & AVIF converters`,
  },
  de: {
    browserRequirements:
      "JavaScript erforderlich. Funktioniert in Chrome, Edge, Safari und Firefox.",
    featureList: [
      "Konvertierung im Browser (kein Upload)",
      "Stapelverarbeitung mit ZIP-Download",
      "Einstellbare JPEG-/WebP-Qualität",
      "Kostenlos nutzbar",
      "Kein Konto erforderlich",
    ],
    howToName: (from, to) => `${from} in ${to} umwandeln`,
    stepName: (n) => `Schritt ${n}`,
    homeBreadcrumb: "Startseite",
    blogBreadcrumb: "Blog",
    blogIndexName: (site) => `${site} Blog`,
    blogIndexDescription:
      "Ratgeber zu HEIC, AVIF und WebP für Windows, iPhone, E-Mail und Videobearbeitung — mit kostenlosen browser-lokalen Konvertern.",
    aboutPageName: (site) => `Über ${site}`,
    toolsListName: "Kostenlose Bildkonverter",
    guidesListName: "Ratgeber zu Bildformaten",
    definedTermsSetName: "Bildformate, die HeicSave konvertiert",
    knowsAbout: [
      "HEIC-Bildkonvertierung",
      "AVIF-Bildkonvertierung",
      "WebP-Bildkonvertierung",
      "Browser-lokale datenschutzfreundliche Bildtools",
    ],
    contactLanguages: ["Deutsch", "Englisch", "Französisch"],
    ogImageAlt: (site) => `${site} — Kostenlose HEIC-, WebP- und AVIF-Konverter`,
  },
  fr: {
    browserRequirements:
      "JavaScript requis. Compatible Chrome, Edge, Safari et Firefox.",
    featureList: [
      "Conversion dans le navigateur (sans envoi)",
      "Conversion par lots avec téléchargement ZIP",
      "Qualité JPEG/WebP réglable",
      "Gratuit",
      "Sans compte",
    ],
    howToName: (from, to) => `Convertir ${from} en ${to}`,
    stepName: (n) => `Étape ${n}`,
    homeBreadcrumb: "Accueil",
    blogBreadcrumb: "Blog",
    blogIndexName: (site) => `Blog ${site}`,
    blogIndexDescription:
      "Guides HEIC, AVIF et WebP pour Windows, iPhone, e-mail et montage vidéo — avec convertisseurs gratuits dans le navigateur.",
    aboutPageName: (site) => `À propos de ${site}`,
    toolsListName: "Convertisseurs d'images gratuits",
    guidesListName: "Guides sur les formats d'image",
    definedTermsSetName: "Formats d'image convertis par HeicSave",
    knowsAbout: [
      "Conversion d'images HEIC",
      "Conversion d'images AVIF",
      "Conversion d'images WebP",
      "Outils d'image locaux dans le navigateur, respectueux de la vie privée",
    ],
    contactLanguages: ["Français", "Anglais", "Allemand"],
    ogImageAlt: (site) =>
      `${site} — Convertisseurs HEIC, WebP et AVIF gratuits`,
  },
};

export function getSchemaCopy(locale: AppLocale): SchemaCopy {
  return COPY[locale];
}
