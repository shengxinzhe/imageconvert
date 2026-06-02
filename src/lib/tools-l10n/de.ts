import type { ToolSlug } from "@/lib/tools-config";
import { deToolSeoSections } from "@/lib/tools-l10n/seo-sections-de";
import type { ToolLocaleFields } from "@/lib/tools-l10n/types";

const deToolsBase: Record<ToolSlug, ToolLocaleFields> = {
  "heic-to-jpg": {
    title: "HEIC in JPG — gratis, Stapel, kein Upload",
    h1: "HEIC in JPG umwandeln",
    metaDescription:
      "HEIC kostenlos im Browser in JPG umwandeln. Stapel ohne Limit, ZIP-Download—kein Server-Upload. Windows, Mac, Chromebook.",
    keywords: [
      "heic in jpg",
      "heic in jpg umwandeln",
      "heic in jpg umwandeln kostenlos",
      "heic zu jpg konverter",
      "heic jpg kostenlos",
      "heic stapel konvertieren",
    ],
    heroSubtitle: "iPhone-HEIC-Fotos sofort im Browser in JPG konvertieren",
    whyConvert: {
      title: "Warum HEIC in JPG umwandeln?",
      paragraphs: [
        "Apple speichert Fotos standardmäßig als HEIC — platzsparend und hochwertig. Viele Windows-PCs, ältere Apps und E-Mail-Programme erwarten jedoch JPG.",
        "JPG lässt sich überall teilen, drucken und hochladen. Die Konvertierung läuft bei uns vollständig im Browser — Ihre Dateien verlassen Ihr Gerät nicht.",
      ],
    },
    howToSteps: [
      "HEIC-Dateien per Drag & Drop ablegen (oder Dateien auswählen). Optional JPEG-Qualität einstellen.",
      "Auf Konvertieren klicken — die Verarbeitung erfolgt lokal im Browser.",
      "Einzelne JPGs herunterladen oder alle als ZIP speichern.",
    ],
    privacyNote:
      "HEIC wird im Browser per WebAssembly dekodiert. Es wird nichts auf unsere Server hochgeladen.",
    faqs: [
      {
        question: "HEIC unter Windows in JPG umwandeln — wie?",
        answer:
          "Seite in Chrome oder Edge öffnen, .heic-Dateien in die Zone ziehen und konvertieren. Keine Codec-Installation nötig.",
      },
      {
        question: "Ohne Qualitätsverlust konvertieren?",
        answer:
          "Ja. Qualitätsregler nutzen (Standard 90 %). Für Alltag und Social Media reicht das in der Regel aus.",
      },
      {
        question: "Werden meine Fotos gespeichert?",
        answer: "Nein. Die Konvertierung erfolgt nur auf Ihrem Gerät.",
      },
      {
        question: "Mehrere HEIC-Dateien auf einmal?",
        answer:
          "Ja. Viele Dateien in einer Sitzung möglich; am Desktop mit Chrome/Edge am schnellsten.",
      },
      {
        question: "HEIC vs. JPG — was wählen?",
        answer:
          "HEIC auf dem iPhone behalten. Für Teilen außerhalb von Apple: JPG.",
      },
    ],
  },
  "heic-to-png": {
    title: "HEIC in PNG umwandeln — kostenlos online",
    h1: "HEIC in PNG umwandeln — kostenlos online",
    metaDescription:
      "HEIC von iPhone kostenlos in PNG im Browser konvertieren. Kein Upload, Stapelverarbeitung und ZIP-Download — ideal für Bearbeitung, Transparenz und ältere Programme.",
    keywords: ["heic in png", "heic png konverter", "heic png online"],
    heroSubtitle: "HEIC-Fotos im Browser in verlustfreies PNG umwandeln",
    whyConvert: {
      title: "Warum HEIC in PNG?",
      paragraphs: [
        "PNG eignet sich für Bearbeitung und wenn Sie maximale Kompatibilität ohne erneute JPG-Kompression brauchen.",
        "Konvertierung lokal im Browser — privat und schnell.",
      ],
    },
    howToSteps: [
      "HEIC-Dateien hochladen (Drag & Drop).",
      "Konvertieren klicken — Verarbeitung lokal.",
      "PNG-Dateien oder ZIP herunterladen.",
    ],
    privacyNote: "Dateien bleiben auf Ihrem Gerät; kein Server-Upload.",
    faqs: [
      {
        question: "Ist PNG verlustfrei?",
        answer: "PNG ist verlustfrei; die Datei kann größer als HEIC oder JPG sein.",
      },
      {
        question: "Stapelverarbeitung möglich?",
        answer: "Ja, mehrere HEIC-Dateien in einer Sitzung.",
      },
    ],
  },
  "heic-to-webp": {
    title: "HEIC in WebP umwandeln — kostenlos online",
    h1: "HEIC in WebP umwandeln — kostenlos online",
    metaDescription:
      "iPhone-HEIC-Fotos kostenlos im Browser in WebP konvertieren. Kein Upload, Stapelverarbeitung, Größen-Presets und ZIP-Download.",
    keywords: ["heic in webp", "heic webp konverter", "heic webp online"],
    heroSubtitle: "HEIC-Fotos für moderne Websites in kleinere WebP-Dateien umwandeln",
    whyConvert: {
      title: "Warum HEIC in WebP?",
      paragraphs: [
        "WebP wird von modernen Browsern unterstützt und ist oft kleiner als JPG bei ähnlicher Qualität — ideal für Blogs und CMS.",
        "Die Konvertierung läuft vollständig im Browser, ohne Cloud-Upload.",
      ],
    },
    howToSteps: [
      "HEIC-Dateien ablegen, WebP-Qualität und optional max. Breite wählen.",
      "Konvertieren — parallele Verarbeitung lokal im Browser.",
      "Einzelne WebP-Dateien oder ZIP herunterladen.",
    ],
    privacyNote: "HEIC wird per libheif WebAssembly im Browser dekodiert — kein Server-Upload.",
    faqs: [
      {
        question: "Bleibt EXIF in WebP erhalten?",
        answer:
          "Nein. Browser-WebP enthält kein EXIF. Für Metadaten nutzen Sie HEIC in JPG.",
      },
      {
        question: "Stapelverarbeitung möglich?",
        answer: "Ja, viele HEIC-Dateien in einer Sitzung mit ZIP-Download.",
      },
    ],
  },
  "webp-to-png": {
    title: "WebP in PNG umwandeln — kostenlos online",
    h1: "WebP in PNG umwandeln — kostenlos online",
    metaDescription:
      "WebP kostenlos in PNG im Browser konvertieren. Kein Upload, Stapelverarbeitung, Transparenz bleibt erhalten — für Photoshop, ältere Apps und Druck-Workflows auf Windows und Mac.",
    keywords: ["webp in png", "webp png konverter"],
    heroSubtitle: "WebP lokal im Browser in PNG umwandeln",
    whyConvert: {
      title: "Warum WebP in PNG?",
      paragraphs: [
        "PNG wird von jedem Editor und vielen älteren Tools unterstützt — ideal zum Weiterbearbeiten.",
      ],
    },
    howToSteps: [
      "WebP-Dateien ablegen.",
      "Konvertieren — lokal im Browser.",
      "PNG herunterladen.",
    ],
    privacyNote: "Kein Upload Ihrer Bilder.",
    faqs: [
      {
        question: "Transparenz erhalten?",
        answer: "Ja, wenn die WebP-Datei einen Alphakanal hat.",
      },
    ],
  },
  "webp-to-jpg": {
    title: "WebP in JPG umwandeln — kostenlos online",
    h1: "WebP in JPG umwandeln — kostenlos online",
    metaDescription:
      "WebP in JPG kostenlos im Browser konvertieren. Kein Upload, JPEG-Qualität wählbar, Stapel + ZIP — JPG funktioniert in E-Mail, Word und überall sonst.",
    keywords: ["webp in jpg", "webp jpg konverter"],
    heroSubtitle: "WebP-Fotos für überall kompatibles JPG konvertieren",
    whyConvert: {
      title: "Warum WebP in JPG?",
      paragraphs: [
        "JPG ist das universelle Format für E-Mail, Druck und ältere Software.",
      ],
    },
    howToSteps: [
      "WebP-Dateien wählen.",
      "JPEG-Qualität optional anpassen.",
      "JPG oder ZIP herunterladen.",
    ],
    privacyNote: "Konvertierung nur auf Ihrem Gerät.",
    faqs: [
      {
        question: "Qualität einstellen?",
        answer: "Ja, über den JPEG-Qualitätsregler vor der Konvertierung.",
      },
    ],
  },
  "avif-to-jpg": {
    title: "AVIF in JPG umwandeln — kostenlos online (ohne Upload)",
    h1: "AVIF in JPG umwandeln — kostenlos im Browser",
    metaDescription:
      "AVIF in JPG kostenlos im Browser konvertieren. Kein Upload, Stapelverarbeitung, JPEG-Qualität wählen, ZIP-Download. Für Windows, Mac, Chrome und Edge.",
    keywords: [
      "avif in jpg",
      "avif zu jpg",
      "avif jpg konverter",
      "avif in jpeg umwandeln",
    ],
    heroSubtitle:
      "AVIF in universelle JPG-Dateien umwandeln — privat, schnell und kostenlos",
    whyConvert: {
      title: "Warum AVIF in JPG umwandeln?",
      paragraphs: [
        "AVIF spart Speicher im Web, aber viele Desktop-Programme, E-Mail-Clients und Büro-Apps öffnen .avif noch nicht zuverlässig.",
        "Wenn Sie JPG für Folien, Druck oder ältere Software brauchen, ist die Konvertierung im Browser die schnellste Lösung — ohne Upload.",
      ],
    },
    howToSteps: [
      "Seite in Chrome oder Edge öffnen, .avif-Dateien ablegen.",
      "Optional JPEG-Qualität einstellen (Standard 90 %).",
      "Konvertieren und JPGs oder ZIP herunterladen.",
    ],
    privacyNote: "AVIF wird nur lokal im Browser dekodiert — kein Server-Upload.",
    faqs: [
      {
        question: "AVIF in JPG — wie geht das?",
        answer:
          "Dateien hier ablegen, auf Konvertieren klicken, JPGs laden — kostenlos, ohne Konto.",
      },
      {
        question: "Kostenlos und ohne Upload?",
        answer: "Ja. Kein Wasserzeichen, keine feste Dateianzahl-Obergrenze.",
      },
      {
        question: "Windows öffnet AVIF nicht?",
        answer: "JPG öffnet in Fotos, Paint und Word — ohne Codec-Installation.",
      },
      {
        question: "Mehrere AVIF-Dateien auf einmal?",
        answer: "Ja, inklusive ZIP-Download für ganze Ordner.",
      },
      {
        question: "Welcher Browser?",
        answer: "Chrome oder Edge auf dem Desktop sind am zuverlässigsten.",
      },
    ],
  },
  "avif-to-png": {
    title: "AVIF in PNG umwandeln — kostenlos online",
    h1: "AVIF in PNG umwandeln — kostenlos online",
    metaDescription:
      "AVIF in PNG kostenlos im Browser umwandeln. Kein Upload, Stapelverarbeitung und ZIP — PNG öffnet in Design-Tools und älterer Software, die AVIF noch nicht unterstützt.",
    keywords: ["avif in png", "avif png konverter"],
    heroSubtitle: "AVIF im Browser in PNG für Design-Workflows umwandeln",
    whyConvert: {
      title: "Warum AVIF in PNG?",
      paragraphs: ["PNG für Tools, die AVIF noch nicht nativ öffnen."],
    },
    howToSteps: ["AVIF wählen.", "Konvertieren.", "PNG speichern."],
    privacyNote: "Dateien verlassen Ihren Browser nicht.",
    faqs: [
      {
        question: "Batch möglich?",
        answer: "Ja, mehrere AVIF-Dateien gleichzeitig.",
      },
    ],
  },
  "jpg-to-webp": {
    title: "JPG in WebP umwandeln — kostenlos online",
    h1: "JPG in WebP umwandeln — kostenlos online",
    metaDescription:
      "JPG in WebP für schnellere Websites — kostenlos im Browser konvertieren. Kein Upload, Qualitätsregler, Stapel und ZIP. Dateien bleiben auf Ihrem PC oder Mac.",
    keywords: ["jpg in webp", "jpeg webp konverter"],
    heroSubtitle: "JPG-Fotos für das Web in kleineres WebP umwandeln",
    whyConvert: {
      title: "Warum JPG in WebP?",
      paragraphs: [
        "WebP spart Bandbreite bei ähnlicher Qualität — gut für Websites und Apps.",
      ],
    },
    howToSteps: [
      "JPG-Dateien ablegen.",
      "WebP-Qualität wählen.",
      "WebP oder ZIP herunterladen.",
    ],
    privacyNote: "Kein Upload — ideal für vertrauliche Assets.",
    faqs: [
      {
        question: "Welche Qualität?",
        answer: "Standard etwa 85 % — vor dem Export anpassbar.",
      },
    ],
  },
  "png-to-webp": {
    title: "PNG in WebP umwandeln — kostenlos online",
    h1: "PNG in WebP umwandeln — kostenlos online",
    metaDescription:
      "PNG in WebP kostenlos im Browser konvertieren — kleinere Dateien für schnellere Seiten. Kein Upload, Stapelverarbeitung, Transparenz bleibt erhalten, ZIP-Download inklusive.",
    keywords: ["png in webp", "png webp konverter"],
    heroSubtitle: "PNG-Grafiken für schnellere Ladezeiten in WebP umwandeln",
    whyConvert: {
      title: "Warum PNG in WebP?",
      paragraphs: [
        "WebP reduziert oft die Dateigröße deutlich — besonders für UI-Grafiken und Screenshots.",
      ],
    },
    howToSteps: ["PNG ablegen.", "Konvertieren.", "WebP herunterladen."],
    privacyNote: "Alles lokal im Tab — nichts wird hochgeladen.",
    faqs: [
      {
        question: "Transparenz?",
        answer: "WebP unterstützt Transparenz wie PNG.",
      },
    ],
  },
};

export const deTools: Record<ToolSlug, ToolLocaleFields> = Object.fromEntries(
  (Object.entries(deToolsBase) as [ToolSlug, ToolLocaleFields][]).map(([slug, fields]) => [
    slug,
    { ...fields, seoSections: deToolSeoSections[slug] },
  ]),
) as Record<ToolSlug, ToolLocaleFields>;
