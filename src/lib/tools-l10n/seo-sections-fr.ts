import type { ToolSlug } from "@/lib/tools-config";
import type { ToolSeoSection } from "@/lib/tools-l10n/types";

export const frToolSeoSections: Record<ToolSlug, ToolSeoSection[]> = {
  "heic-to-jpg": [
    {
      heading: "HEIC en JPG pour les utilisateurs iPhone en UE et aux États-Unis",
      paragraphs: [
        "Des millions de photos HEIC sont prises chaque jour. Pour l’e-mail familial, les dossiers d’assurance ou les portails qui n’acceptent que le JPG, il faut un convertisseur rapide, gratuit et fiable.",
        "HeicSave s’adresse aux utilisateurs soucieux de la vie privée en Europe et en Amérique du Nord : pas de compte, pas d’envoi cloud, consentement cookies clair (RGPD). Vos photos restent sur l’appareil pendant la conversion dans le navigateur.",
      ],
    },
    {
      heading: "Qu’est-ce que le HEIC et pourquoi l’iPhone l’utilise ?",
      paragraphs: [
        "HEIC (High Efficiency Image Container) est le format photo par défaut d’Apple sur les iPhone et iPad récents. La compression réduit souvent la taille d’environ moitié par rapport au JPEG à qualité similaire.",
        "Le revers : la compatibilité. Windows sans extension HEIC, vieux Android, formulaires web et imprimeurs attendent encore le .jpg.",
      ],
    },
    {
      heading: "HEIC vs JPG : quand convertir ?",
      paragraphs: [
        "Gardez le HEIC sur l’iPhone au quotidien. Passez au JPG pour partager hors écosystème Apple : pièces jointes, clé USB, portails employeur, annonces immobilières ou réseaux qui refusent le HEIC.",
        "Le JPG reste le standard universel depuis des décennies — un peu plus lourd, mais compatible partout.",
      ],
    },
    {
      heading: "Convertir HEIC en JPG sur Windows (sans codec)",
      paragraphs: [
        "Windows 10/11 affiche souvent « format non pris en charge » pour les .heic sans extension HEIF du Microsoft Store — souvent bloquée en entreprise.",
        "La conversion dans le navigateur contourne le problème : ouvrez HeicSave dans Chrome ou Edge, déposez vos fichiers, téléchargez des JPG pour Photos, Paint et Word.",
      ],
    },
    {
      heading: "Convertir HEIC en JPG sur Mac",
      paragraphs: [
        "macOS ouvre le HEIC dans Aperçu et Photos. Pour des dizaines de photos de vacances, l’export un par un est long.",
        "Utilisez cette page dans Safari ou Chrome pour convertir par lots dans le navigateur.",
      ],
    },
    {
      heading: "Convertir HEIC en JPG sur iPhone et Android",
      paragraphs: [
        "JPG permanent sur iPhone : Réglages → Appareil photo → Formats → « Plus compatible ». Les HEIC existants doivent encore être convertis.",
        "Beaucoup d’Android n’ouvrent pas le HEIC nativement — convertissez sur PC, puis partagez des JPG.",
      ],
    },
    {
      heading: "Lot HEIC en JPG — privé et gratuit",
      paragraphs: [
        "Dossier de vacances ou scans bureau : plusieurs .heic en une session, un clic, téléchargement en ZIP — sans plafond artificiel de fichiers.",
        "Traitement local idéal pour données sensibles : médical, juridique, photos familiales.",
      ],
    },
    {
      heading: "Qualité, EXIF et taille de fichier",
      paragraphs: [
        "JPG encodé en haute qualité (~90 %) — adapté au partage. Le HEIC est déjà compressé ; le JPG ajoute une seconde génération — pour retouche lourde, voir [HEIC en PNG](/heic-to-png).",
        "EXIF courants (date, appareil, orientation) copiés quand le navigateur le permet. Conservez les originaux HEIC.",
      ],
    },
    {
      heading: "Pourquoi HeicSave plutôt qu’un convertisseur cloud ?",
      paragraphs: [
        "Beaucoup de convertisseurs « gratuits » envoient vos fichiers sur leurs serveurs. HeicSave ne reçoit pas vos octets d’image — WebAssembly et canvas dans l’onglet.",
        "Aligné avec le RGPD : pas de traitement de vos photos sur nos serveurs. Analytics et AdSense sont séparés des images.",
      ],
    },
    {
      heading: "Problèmes courants et solutions",
      paragraphs: [
        "Échec de conversion : Chrome/Edge sur bureau, moins d’onglets, lots plus petits. Rechargez la page (Ctrl+F5), vérifiez .heic/.heif — pas les .mov des Live Photos.",
      ],
    },
    {
      heading: "HeicSave comparé aux autres méthodes HEIC → JPG",
      paragraphs: [
        "Toutes les méthodes ne conviennent pas à tout. Les convertisseurs cloud impliquent upload et questions de confidentialité. Les codecs du Microsoft Store aident à prévisualiser — pas à convertir un dossier mariage pour Outlook. Tableau basé sur nos tests Windows 11 et macOS Sonoma (2026).",
        "HeicSave décode dans l’onglet du navigateur. Important pour assurances, portails RH et albums familiaux que vous ne voulez pas sur un serveur tiers.",
      ],
      table: {
        caption:
          "Comparaison pour lots iPhone typiques (50–200 fichiers). Varie selon RAM et navigateur.",
        headers: ["Méthode", "Fichiers quittent l’appareil ?", "Lot + ZIP", "EXIF", "Idéal pour"],
        rows: [
          [
            "HeicSave (cette page)",
            "Non — WebAssembly local",
            "Oui, pas de plafond fixe",
            "Souvent (date, appareil, orientation)",
            "Confidentialité, Windows sans codecs, gros dossiers",
          ],
          [
            "Convertisseurs cloud",
            "Oui — envoi sur leurs serveurs",
            "Variable ; quotas fréquents",
            "Souvent supprimés",
            "Conversions ponctuelles sans enjeu privacy",
          ],
          [
            "Photos Windows + extension HEIF",
            "Reste local",
            "Export manuel un par un",
            "Partiel",
            "Quelques fichiers en aperçu",
          ],
          [
            "Aperçu / Photos Mac",
            "Reste local",
            "Fastidieux au-delà de 100 fichiers",
            "En général oui",
            "Petits lots sur Mac",
          ],
          [
            "Réglages iPhone → Compatible",
            "N/A — nouvelles photos seulement",
            "N/A",
            "N/A",
            "Éviter le HEIC futur, pas les anciens dossiers",
          ],
        ],
      },
    },
    {
      heading: "Choisir JPG, PNG ou WebP après HEIC",
      paragraphs: [
        "Le HEIC sert au stockage sur iPhone. Hors écosystème Apple, choisissez le format de destination avant de convertir tout un dossier vacances.",
      ],
      table: {
        headers: ["Objectif", "Convertir en", "Pourquoi"],
        rows: [
          ["E-mail, WhatsApp, employeur, imprimeur", "JPG", "Universel ; taille raisonnable"],
          ["Photoshop, Figma, slides avec texte", "PNG", "Sans perte ; HEIC en PNG sur ce site"],
          ["WordPress / Shopify", "WebP", "Plus léger ; HEIC en WebP"],
          ["Premiere / DaVinci images fixes", "Série JPG", "Import stable"],
          ["Archive après retouche", "Garder HEIC + exporter PNG", "Ne pas compresser la seule copie en JPG basse qualité"],
        ],
      },
    },
    {
      heading: "Limites techniques et navigateurs (2026)",
      paragraphs: [
        "Pas de limite artificielle de cinq fichiers. Limites pratiques : RAM et décodage HEIC. Sur portable Windows 8 Go : 40–60 photos pleine résolution par lot ; sur Chrome bureau 16 Go : souvent 150–200 avant ralentissement.",
        "Onglet lent ? Téléchargez le ZIP, rechargez, continuez. Excluez les .mov Live Photo — convertissez les .heic uniquement.",
      ],
      table: {
        headers: ["Environnement", "Décode HEIC", "Conseil lot"],
        rows: [
          ["Chrome / Edge Windows 11", "Oui", "Idéal pour ZIP 100+ fichiers"],
          ["Firefox Windows", "Versions récentes", "Lots plus petits si peu de RAM"],
          ["Safari Mac", "Oui", "Dossiers AirDrop"],
          ["Safari iPhone / iPad", "Oui", "Petits lots ; Wi‑Fi + chargeur"],
          ["Chromebook", "En général oui", "Lots modestes ; voir guide Chromebook"],
        ],
      },
    },
  ],
  "heic-to-png": [
    {
      heading: "HEIC en PNG pour les designers",
      content:
        "Les graphistes ont souvent besoin de PNG. Cet outil relie les exports iPhone HEIC aux pipelines PNG sans envoyer les photos client sur un serveur.",
    },
    {
      heading: "Quand HEIC en PNG vaut mieux que JPG",
      paragraphs: [
        "Le PNG est sans perte après décodage — utile pour captures d’écran et texte. Le HEIC reste une source compressée ; le PNG évite une seconde perte JPG.",
        "Pour Figma, Canva ou préparation print. Conversion dans le navigateur.",
      ],
    },
    {
      heading: "Lot HEIC en PNG avec ZIP",
      paragraphs: [
        "Plusieurs .heic, une conversion, ZIP de PNG. Pas de limite fixe de 5 fichiers — seule la mémoire de l’appareil compte.",
        "Sur Windows sans codecs HEIC, souvent plus rapide que les extensions Store.",
      ],
    },
    {
      heading: "Taille des fichiers",
      paragraphs: [
        "Le PNG est en général plus lourd que le JPG issu du même HEIC — normal : espace disque contre marge d’édition.",
        "Pour albums par e-mail, [HEIC en JPG](/heic-to-jpg) ; gardez ce PNG pour les workflows créatifs.",
      ],
    },
  ],
  "heic-to-webp": [
    {
      heading: "HEIC en WebP pour des uploads web plus légers",
      paragraphs: [
        "Les CMS modernes acceptent le WebP pour des fichiers plus petits. Les HEIC iPhone doivent d’abord être convertis — localement, sans cloud.",
        "Utilisez les presets de largeur max si les formulaires imposent une taille.",
      ],
    },
  ],
  "webp-to-png": [
    {
      heading: "WebP en PNG pour les développeurs",
      content:
        "Votre pipeline sort du WebP mais les parties prenantes veulent du PNG ? Conversion locale — utile sous NDA, sans installer ImageMagick.",
    },
    {
      heading: "Pourquoi WebP en PNG reste courant en 2026",
      paragraphs: [
        "Les sites servent du WebP pour la vitesse ; e-mail, PowerPoint et vieux Photoshop attendent souvent du PNG.",
        "HeicSave décode via Canvas — aucun envoi de fichier.",
      ],
    },
    {
      heading: "Développeurs et workflows NDA",
      paragraphs: [
        "Pas d’envoi de captures marketing vers un convertisseur cloud inconnu : WebP en PNG dans Chrome/Edge, lots et ZIP.",
      ],
    },
    {
      heading: "WebP animé",
      paragraphs: [
        "Cette page cible le WebP statique. Le WebP animé peut n’exporter que la première image — gardez l’original pour le mouvement.",
      ],
    },
  ],
  "webp-to-jpg": [
    {
      heading: "WebP en JPG pour e-mail et logiciels anciens",
      content:
        "Le JPG reste le format le plus sûr en pièce jointe. WebP reçu d’un site ou Android ? Convertissez ici avant de transférer.",
    },
    {
      heading: "WebP en JPG pour e-mail et legacy",
      paragraphs: [
        "Curseur de qualité (défaut 90 %). Téléchargement unitaire ou ZIP pour les lots.",
      ],
    },
    {
      heading: "Transparence et arrière-plan",
      paragraphs: [
        "Le JPG n’a pas d’alpha. Les zones transparentes du WebP sont aplaties — comportement attendu pour le partage photo.",
      ],
    },
    {
      heading: "Local dans le navigateur, sans compte",
      paragraphs: [
        "Pas d’inscription, pas de filigrane, pas de plafond artificiel de lot. Traitement dans l’onglet.",
      ],
    },
    {
      heading: "Pour développeurs et designers — sans file d’attente cloud",
      paragraphs: [
        "Marre des limites d’upload et des files d’attente des convertisseurs en ligne ? Des mégaoctets de WebP en JPG dans l’onglet actif — sans envoi serveur. Idéal pour exports WordPress, livrables Figma et assets CI.",
      ],
    },
  ],
  "avif-to-jpg": [
    {
      heading: "AVIF en JPG pour e-mail, diapos et impression",
      paragraphs: [
        "Les sites marketing livrent de l’AVIF pour la bande passante. Les équipes ont encore besoin de JPG pour Outlook, PowerPoint ou portails sans AVIF.",
        "Conversion locale — pas d’assets campagne vers des clouds inconnus.",
      ],
    },
    {
      heading: "Qu’est-ce que l’AVIF et pourquoi les sites l’utilisent",
      paragraphs: [
        "L’AVIF (AV1 Image File Format) compresse fortement — souvent plus petit que JPEG ou WebP. WordPress, CDN et fronts performance l’adoptent.",
        "Les workflows bureau demandent encore souvent du JPG.",
      ],
    },
    {
      heading: "AVIF en JPG sur Windows",
      paragraphs: [
        "Photos et ancien Paint n’ouvrent souvent pas .avif. HeicSave dans Chrome/Edge : déposez les AVIF, téléchargez des JPG universels — sans codecs ni droits admin.",
      ],
    },
    {
      heading: "AVIF en JPG sur Mac",
      paragraphs: [
        "Safari et Chrome décodent l’AVIF dans le navigateur. Dossier CDN ? Convertissez par lots, ZIP de JPG pour Aperçu et Photos.",
      ],
    },
    {
      heading: "AVIF depuis un site ou CDN",
      paragraphs: [
        "Enregistrer une image moderne donne souvent .avif. Éditeur ou messagerie refuse ? Convertissez en JPG localement — HeicSave n’upload pas vos fichiers.",
      ],
    },
    {
      heading: "Qualité, lots et ZIP",
      paragraphs: [
        "Qualité JPEG avant conversion (défaut 90 %). Plusieurs AVIF en une session — pas de plafond fixe — Chrome/Edge bureau pour gros dossiers.",
      ],
    },
    {
      heading: "AVIF vs JPG vs WebP",
      paragraphs: [
        "AVIF souvent le plus petit. WebP très répandu sur le web. JPG le plus sûr pour e-mail et vieux logiciels.",
      ],
    },
    {
      heading: "AVIF en JPG sans envoi (vie privée)",
      paragraphs: [
        "Beaucoup de convertisseurs en ligne uploadent vos fichiers. HeicSave décode dans l’onglet. Voir aussi [WebP en JPG](/webp-to-jpg) et [AVIF en PNG](/avif-to-png).",
      ],
    },
    {
      heading: "Pour développeurs et designers — sans file d’attente cloud",
      paragraphs: [
        "Files d’attente cloud pour convertir des assets ? Convertissez des mégaoctets d’AVIF/WebP en JPG instantanément dans l’onglet — décodage local, aucun upload vers HeicSave. Pensé pour devs front, designers UI et sites WordPress.",
      ],
    },
    {
      heading: "Dépannage AVIF en JPG",
      paragraphs: [
        "Échec ? Chrome/Edge bureau, extension .avif, lots plus petits si peu de RAM, Ctrl+F5 et réessayer.",
      ],
    },
  ],
  "avif-to-png": [
    {
      heading: "AVIF en PNG pour pipelines créatifs",
      content:
        "Les équipes reçoivent de plus en plus d’AVIF. Beaucoup d’outils et imprimeurs exigent le PNG — convertissez localement.",
    },
    {
      heading: "PNG sans perte depuis AVIF compressé",
      paragraphs: [
        "Le PNG stocke les pixels décodés sans perte relative au décodage AVIF, mais ne restaure pas le détail perdu dans l’AVIF source. Fichiers souvent plus gros.",
      ],
    },
    {
      heading: "Lots et conseils navigateur",
      paragraphs: [
        "Grands lots sur bureau avec assez de RAM. Onglet planté ? Divisez le dossier — pas de limite artificielle de fichiers.",
      ],
    },
  ],
  "jpg-to-webp": [
    {
      heading: "JPG en WebP pour des pages plus rapides",
      content:
        "Le WebP réduit souvent les héros et photos de blog de 25–35 % — bon pour LCP et données mobiles. Encodez localement avant WordPress ou hébergement statique.",
    },
    {
      heading: "Pages plus rapides avec JPG en WebP",
      paragraphs: [
        "Qualité WebP (défaut 85 %) avant conversion. Plus bas = plus petit, plus haut = plus de détail.",
      ],
    },
    {
      heading: "Toujours une variante JPG",
      paragraphs: [
        "Utilisez <picture> ou composants framework : WebP avec repli JPG. E-mail et très vieux navigateurs restent sur JPEG.",
      ],
    },
    {
      heading: "Encodage par lots privé",
      paragraphs: [
        "Plusieurs JPG, ZIP de WebP — les sources ne quittent pas la machine. Utile sous RGPD pour galeries clients.",
      ],
    },
  ],
  "png-to-webp": [
    {
      heading: "Réduire les PNG UI pour la production",
      content:
        "Les grosses icônes PNG alourdissent les pages. WebP avec alpha peut réduire fortement la taille — testez dans le navigateur avant commit.",
    },
    {
      heading: "PNG UI pour la production",
      paragraphs: [
        "Sites marketing et dashboards SaaS gagnent en poids. PNG en WebP dans le navigateur sans ImageMagick.",
      ],
    },
    {
      heading: "Transparence en WebP",
      paragraphs: [
        "WebP gère l’alpha comme PNG. Vérifiez les navigateurs cibles ; gardez les masters PNG dans le dépôt.",
      ],
    },
    {
      heading: "WebP avec perte depuis PNG",
      paragraphs: [
        "Encodeur en WebP avec perte pour fichiers plus petits. Pour UI pixel-perfect, zoomez et montez la qualité au curseur.",
      ],
    },
  ],
};
