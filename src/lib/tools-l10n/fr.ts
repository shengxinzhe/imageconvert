import type { ToolSlug } from "@/lib/tools-config";
import { frToolSeoSections } from "@/lib/tools-l10n/seo-sections-fr";
import type { ToolLocaleFields } from "@/lib/tools-l10n/types";

const frToolsBase: Record<ToolSlug, ToolLocaleFields> = {
  "heic-to-jpg": {
    title: "HEIC en JPG — gratuit, lot, sans envoi",
    h1: "Convertir HEIC en JPG",
    metaDescription:
      "Convertissez HEIC en JPG gratuitement dans le navigateur. Lot illimité, ZIP—aucun envoi serveur. Windows, Mac, Chromebook.",
    keywords: [
      "heic en jpg",
      "convertir heic en jpg",
      "convertir heic en jpg en ligne",
      "heic jpg gratuit",
      "heic sans envoi",
      "convertir heic lot",
      "fichier heic gratuit",
      "ouvrir photo iphone sur pc",
    ],
    heroSubtitle: "Convertissez les photos HEIC de l'iPhone en JPG instantanément dans le navigateur",
    whyConvert: {
      title: "Pourquoi convertir HEIC en JPG ?",
      paragraphs: [
        "Apple utilise HEIC par défaut — léger et de bonne qualité. Beaucoup de PC Windows, d'apps et de messageries attendent encore du JPG.",
        "Le JPG se partage partout. La conversion se fait entièrement dans votre navigateur : vos fichiers ne quittent pas votre appareil.",
      ],
    },
    howToSteps: [
      "Glissez-déposez vos fichiers HEIC (ou parcourez). Réglez la qualité JPEG si besoin.",
      "Cliquez sur Convertir — traitement local dans le navigateur.",
      "Téléchargez chaque JPG ou tout le lot en ZIP.",
    ],
    privacyNote:
      "Le décodage HEIC s'effectue dans le navigateur via WebAssembly. Aucun envoi vers nos serveurs.",
    faqs: [
      {
        question: "Convertir HEIC en JPG sous Windows ?",
        answer:
          "Ouvrez cette page dans Chrome ou Edge, déposez vos .heic et convertissez. Pas besoin d'installer de codecs.",
      },
      {
        question: "Sans perte de qualité ?",
        answer:
          "Oui. Utilisez le curseur de qualité (90 % par défaut), suffisant pour un usage courant.",
      },
      {
        question: "Stockez-vous mes photos ?",
        answer: "Non. La conversion reste sur votre appareil.",
      },
      {
        question: "Plusieurs fichiers HEIC à la fois ?",
        answer:
          "Oui. Idéal sur ordinateur avec Chrome ou Edge pour les gros dossiers.",
      },
      {
        question: "HEIC ou JPG ?",
        answer:
          "Gardez HEIC sur iPhone. Passez en JPG pour partager hors écosystème Apple.",
      },
      {
        question: "Comment transférer des photos iPhone sur un PC sans HEIC ?",
        answer:
          "Branchez l’iPhone ou utilisez iCloud, puis convertissez les .heic en JPG ici dans Chrome ou Edge. Les fichiers restent sur votre appareil pendant la conversion — aucun envoi vers nos serveurs. Téléchargez les JPG et copiez-les sur le PC : Photos, Outlook et les formulaires en ligne les acceptent.",
      },
    ],
  },
  "heic-to-png": {
    title: "Convertir HEIC en PNG — gratuit en ligne",
    h1: "Convertir HEIC en PNG — gratuit en ligne",
    metaDescription:
      "Convertissez HEIC iPhone en PNG gratuitement dans le navigateur. Sans envoi, lot et ZIP — idéal pour retouche, transparence et logiciels qui n’ouvrent pas le HEIC.",
    keywords: ["heic en png", "convertir heic png"],
    heroSubtitle: "Convertissez HEIC en PNG dans le navigateur",
    whyConvert: {
      title: "Pourquoi HEIC en PNG ?",
      paragraphs: [
        "Le PNG convient à la retouche et évite une recompression JPG supplémentaire.",
        "Conversion locale, privée et rapide.",
      ],
    },
    howToSteps: [
      "Ajoutez vos HEIC.",
      "Convertissez — traitement local.",
      "Téléchargez PNG ou ZIP.",
    ],
    privacyNote: "Vos fichiers restent sur votre appareil.",
    faqs: [
      {
        question: "Le PNG est-il sans perte ?",
        answer: "Oui, mais le fichier peut être plus lourd que HEIC ou JPG.",
      },
      {
        question: "Conversion par lot ?",
        answer: "Oui, plusieurs HEIC en une session.",
      },
    ],
  },
  "heic-to-webp": {
    title: "Convertir HEIC en WebP — gratuit en ligne",
    h1: "Convertir HEIC en WebP — gratuit en ligne",
    metaDescription:
      "Convertissez les photos HEIC iPhone en WebP dans le navigateur. Sans envoi, lot, presets de taille et ZIP.",
    keywords: ["heic en webp", "convertir heic webp"],
    heroSubtitle: "Transformez HEIC en WebP plus léger pour le web",
    whyConvert: {
      title: "Pourquoi HEIC en WebP ?",
      paragraphs: [
        "Le WebP convient aux sites modernes et produit souvent des fichiers plus petits que le JPG.",
        "Conversion locale dans le navigateur — vos photos ne quittent pas l'appareil.",
      ],
    },
    howToSteps: [
      "Ajoutez vos HEIC, réglez la qualité WebP et la largeur max si besoin.",
      "Convertissez — traitement parallèle local.",
      "Téléchargez chaque WebP ou un ZIP.",
    ],
    privacyNote: "Décodage HEIC via libheif WebAssembly — aucun envoi serveur.",
    faqs: [
      {
        question: "L'EXIF est-il conservé en WebP ?",
        answer:
          "Non. Utilisez HEIC en JPG si vous avez besoin des métadonnées appareil.",
      },
      {
        question: "Conversion par lot ?",
        answer: "Oui, plusieurs HEIC avec téléchargement ZIP.",
      },
    ],
  },
  "webp-to-png": {
    title: "Convertir WebP en PNG — gratuit en ligne",
    h1: "Convertir WebP en PNG — gratuit en ligne",
    metaDescription:
      "Convertissez WebP en PNG gratuitement dans le navigateur. Sans envoi, lot et transparence conservée — pour Photoshop, anciennes apps et workflows d’impression.",
    keywords: ["webp en png", "convertir webp png"],
    heroSubtitle: "WebP en PNG localement dans le navigateur",
    whyConvert: {
      title: "Pourquoi WebP en PNG ?",
      paragraphs: ["Le PNG est reconnu par tous les éditeurs et anciens outils."],
    },
    howToSteps: ["Ajoutez WebP.", "Convertissez.", "Téléchargez PNG."],
    privacyNote: "Aucun envoi de vos images.",
    faqs: [
      {
        question: "Transparence conservée ?",
        answer: "Oui si le WebP contient un canal alpha.",
      },
    ],
  },
  "webp-to-jpg": {
    title: "Convertir WebP en JPG — gratuit en ligne",
    h1: "Convertir WebP en JPG — gratuit en ligne",
    metaDescription:
      "WebP en JPG gratuit dans le navigateur — privé, sans compte. Qualité JPEG réglable, lot et ZIP. Le JPG s’ouvre dans mail, Word et presque tous les logiciels.",
    keywords: ["webp en jpg", "convertir webp jpg"],
    heroSubtitle: "WebP en JPG compatible partout",
    whyConvert: {
      title: "Pourquoi WebP en JPG ?",
      paragraphs: ["Le JPG reste le format universel pour e-mail, impression et vieux logiciels."],
    },
    howToSteps: [
      "Choisissez vos WebP.",
      "Réglez la qualité JPEG.",
      "Téléchargez JPG ou ZIP.",
    ],
    privacyNote: "Conversion uniquement sur votre appareil.",
    faqs: [
      {
        question: "Régler la qualité ?",
        answer: "Oui, via le curseur JPEG avant conversion.",
      },
    ],
  },
  "avif-to-jpg": {
    title: "Convertir AVIF en JPG — gratuit en ligne (sans envoi)",
    h1: "Convertir AVIF en JPG — gratuit dans le navigateur",
    metaDescription:
      "Convertissez AVIF en JPG gratuitement dans le navigateur. Sans envoi, lot, réglage qualité JPEG, ZIP. Windows, Mac, Chrome et Edge.",
    keywords: [
      "avif en jpg",
      "convertir avif en jpg",
      "avif jpg convertisseur",
      "avif en jpeg",
    ],
    heroSubtitle:
      "Transformez AVIF en JPG universel — privé, rapide et gratuit",
    whyConvert: {
      title: "Pourquoi convertir AVIF en JPG ?",
      paragraphs: [
        "L'AVIF compresse très bien sur le web, mais beaucoup d'apps bureau, d'e-mails et de logiciels anciens attendent encore du JPG.",
        "Pour les pièces jointes, les slides ou l'impression, la conversion dans le navigateur évite d'envoyer vos fichiers sur un serveur inconnu.",
      ],
    },
    howToSteps: [
      "Ouvrez cette page dans Chrome ou Edge, déposez vos .avif.",
      "Réglez la qualité JPEG si besoin (90 % par défaut).",
      "Convertissez, puis téléchargez chaque JPG ou un ZIP.",
    ],
    privacyNote:
      "Décodage AVIF local dans le navigateur — aucun envoi vers nos serveurs.",
    faqs: [
      {
        question: "Comment convertir AVIF en JPG ?",
        answer:
          "Ajoutez vos fichiers, cliquez Convertir, téléchargez les JPG — gratuit, sans compte.",
      },
      {
        question: "Gratuit et sans envoi ?",
        answer: "Oui. Pas de filigrane, pas de limite fixe de fichiers.",
      },
      {
        question: "AVIF ne s'ouvre pas sur Windows ?",
        answer: "Le JPG s'ouvre dans Photos, Paint et Word sans extension codec.",
      },
      {
        question: "Plusieurs fichiers AVIF ?",
        answer: "Oui, avec téléchargement ZIP pour tout un dossier.",
      },
      {
        question: "Quel navigateur ?",
        answer: "Chrome ou Edge sur ordinateur — le plus fiable pour l'AVIF.",
      },
    ],
  },
  "avif-to-png": {
    title: "Convertir AVIF en PNG — gratuit en ligne",
    h1: "Convertir AVIF en PNG — gratuit en ligne",
    metaDescription:
      "AVIF en PNG gratuit dans le navigateur — sans envoi, lot et ZIP. Le PNG s’ouvre dans les outils design et anciennes apps qui ne lisent pas encore l’AVIF.",
    keywords: ["avif en png", "convertir avif png"],
    heroSubtitle: "AVIF en PNG pour vos workflows design",
    whyConvert: {
      title: "Pourquoi AVIF en PNG ?",
      paragraphs: ["PNG pour les apps qui n'ouvrent pas encore l'AVIF."],
    },
    howToSteps: ["Ajoutez AVIF.", "Convertissez.", "Enregistrez PNG."],
    privacyNote: "Les fichiers ne quittent pas votre navigateur.",
    faqs: [
      {
        question: "Lot possible ?",
        answer: "Oui, plusieurs AVIF en une fois.",
      },
    ],
  },
  "jpg-to-webp": {
    title: "Convertir JPG en WebP — gratuit en ligne",
    h1: "Convertir JPG en WebP — gratuit en ligne",
    metaDescription:
      "JPG en WebP pour des sites plus rapides — conversion locale gratuite dans le navigateur. Sans envoi, réglage qualité, lot et ZIP. Vos fichiers restent sur votre appareil.",
    keywords: ["jpg en webp", "jpeg webp convertir"],
    heroSubtitle: "JPG en WebP plus léger pour le web",
    whyConvert: {
      title: "Pourquoi JPG en WebP ?",
      paragraphs: ["Le WebP réduit souvent la taille avec une qualité similaire."],
    },
    howToSteps: [
      "Ajoutez JPG.",
      "Choisissez la qualité WebP.",
      "Téléchargez WebP ou ZIP.",
    ],
    privacyNote: "Sans envoi — adapté aux assets sensibles.",
    faqs: [
      {
        question: "Quelle qualité ?",
        answer: "Environ 85 % par défaut — réglable avant export.",
      },
    ],
  },
  "png-to-webp": {
    title: "Convertir PNG en WebP — gratuit en ligne",
    h1: "Convertir PNG en WebP — gratuit en ligne",
    metaDescription:
      "PNG en WebP gratuit dans le navigateur — fichiers plus petits pour charger plus vite. Sans envoi, lot, transparence conservée et téléchargement ZIP inclus.",
    keywords: ["png en webp", "convertir png webp"],
    heroSubtitle: "PNG en WebP pour accélérer le chargement",
    whyConvert: {
      title: "Pourquoi PNG en WebP ?",
      paragraphs: [
        "Le WebP réduit souvent fortement la taille, surtout pour UI et captures.",
      ],
    },
    howToSteps: ["Ajoutez PNG.", "Convertissez.", "Téléchargez WebP."],
    privacyNote: "Tout reste dans l'onglet — rien n'est envoyé.",
    faqs: [
      {
        question: "Transparence ?",
        answer: "Le WebP gère la transparence comme le PNG.",
      },
    ],
  },
};

export const frTools: Record<ToolSlug, ToolLocaleFields> = Object.fromEntries(
  (Object.entries(frToolsBase) as [ToolSlug, ToolLocaleFields][]).map(([slug, fields]) => [
    slug,
    { ...fields, seoSections: frToolSeoSections[slug] },
  ]),
) as Record<ToolSlug, ToolLocaleFields>;
