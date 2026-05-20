import type { ToolSlug } from "@/lib/tools-config";
import type { ToolLocaleFields } from "@/lib/tools-l10n/types";

export const frTools: Record<ToolSlug, ToolLocaleFields> = {
  "heic-to-jpg": {
    title: "Convertir HEIC en JPG — gratuit en ligne",
    h1: "Convertir HEIC en JPG — gratuit en ligne",
    metaDescription:
      "Convertissez les photos HEIC de l'iPhone en JPG gratuitement dans le navigateur. Sans envoi, sans inscription. Lot sur Windows, Mac, iPhone et Android.",
    keywords: [
      "heic en jpg",
      "convertir heic en jpg",
      "heic jpg en ligne",
      "heic jpg gratuit",
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
    ],
  },
  "heic-to-png": {
    title: "Convertir HEIC en PNG — gratuit en ligne",
    h1: "Convertir HEIC en PNG — gratuit en ligne",
    metaDescription:
      "HEIC iPhone en PNG dans le navigateur, sans envoi. Idéal pour retouche et compatibilité.",
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
  "webp-to-png": {
    title: "Convertir WebP en PNG — gratuit en ligne",
    h1: "Convertir WebP en PNG — gratuit en ligne",
    metaDescription: "WebP en PNG dans le navigateur. Gratuit, sans envoi de fichiers.",
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
    metaDescription: "WebP en JPG dans le navigateur — privé, gratuit, sans compte.",
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
    title: "Convertir AVIF en JPG — gratuit en ligne",
    h1: "Convertir AVIF en JPG — gratuit en ligne",
    metaDescription: "AVIF en JPG dans le navigateur — gratuit, sans envoi.",
    keywords: ["avif en jpg", "convertir avif jpg"],
    heroSubtitle: "AVIF en JPG pour une compatibilité maximale",
    whyConvert: {
      title: "Pourquoi AVIF en JPG ?",
      paragraphs: ["L'AVIF est moderne, mais beaucoup d'outils exigent encore du JPG."],
    },
    howToSteps: ["Ajoutez AVIF.", "Convertissez.", "Téléchargez JPG."],
    privacyNote: "Traitement local — pas de cloud.",
    faqs: [
      {
        question: "Quel navigateur ?",
        answer: "Chrome ou Edge sur bureau pour l'AVIF.",
      },
    ],
  },
  "avif-to-png": {
    title: "Convertir AVIF en PNG — gratuit en ligne",
    h1: "Convertir AVIF en PNG — gratuit en ligne",
    metaDescription: "AVIF en PNG dans le navigateur — privé et gratuit.",
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
    metaDescription: "JPG en WebP pour des sites plus rapides — conversion locale dans le navigateur.",
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
    metaDescription: "PNG en WebP — fichiers plus petits, traitement local dans le navigateur.",
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
