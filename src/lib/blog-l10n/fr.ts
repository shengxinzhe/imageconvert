/** French overlays for high-intent blog posts (slug → fields). */
export const frBlogPosts: Record<
  string,
  { title: string; description: string; content: string }
> = {
  "what-is-heic-file": {
    title: "Qu’est-ce qu’un fichier HEIC ? Guide complet (2026)",
    description:
      "Découvrez le HEIC, pourquoi l'iPhone l'utilise et comment ouvrir ou convertir des photos HEIC sur Windows et Mac — outils gratuits dans le navigateur, sans envoi.",
    content: `*Dernière mise à jour : 1 juin 2026*

Le **HEIC** (High Efficiency Image Container) est le format photo par défaut d’Apple sur les iPhone récents. Grâce à une compression avancée, il occupe souvent environ deux fois moins d’espace qu’un JPEG pour une qualité visuelle comparable.

Un **.heic** sur Windows, une pièce jointe refusée ou des miniatures cassées sur Google Drive ? Des millions d’utilisateurs iPhone connaissent ça. Si Outlook ou Gmail rejette la pièce jointe, commencez par notre [guide pièce jointe HEIC](/blog/heic-outlook-email-attachment). Si Premiere Pro ou Photoshop plante à l’import de photos iPhone : [HEIC dans Premiere Pro](/blog/heic-premiere-pro-import).

## Pourquoi Apple utilise le HEIC ?

Le stockage sur téléphone est précieux. Le HEIC garde plus de photos sur l’appareil et dans iCloud tout en conservant le détail. Apple pousse ce format depuis iOS 11. Le revers : la compatibilité hors écosystème Apple.

## HEIC vs HEIF (même famille)

Vous verrez **.heic**, **.heif** ou **.HEIC**. Pour les photos fixes d’iPhone, c’est le même format en pratique. Notre outil [HEIC en JPG](/heic-to-jpg) accepte les variantes courantes.

## Windows peut-il ouvrir le HEIC ?

Windows 10 et **Windows 11** ouvrent le HEIC **après** les codecs optionnels du Microsoft Store (HEIF Image Extensions, parfois HEVC). Beaucoup préfèrent convertir en JPG — surtout sur un PC pro sans droits admin. Sous Windows 11 24H2, Photos peut prévisualiser le HEIC alors qu’Adobe échoue encore — les codecs aident la visionneuse, pas chaque éditeur.

Guide détaillé : [Ouvrir et convertir le HEIC sur Windows](/blog/heic-windows-guide).

## HEIC dans Adobe et le montage vidéo

Premiere Pro, After Effects et d’anciennes versions de Photoshop attendent du **JPEG ou PNG** pour les images fixes. Glisser un dossier de **.heic** iPhone dans une timeline provoque souvent blocage, « format non pris en charge » ou plantage — décodeur HEIF instable sur le système.

Workflow fiable : convertir en lot sur le PC avec [HEIC en JPG](/heic-to-jpg) ou [HEIC en PNG](/heic-to-png), puis importer. Plantages Premiere et proxies : [Importer du HEIC dans Premiere Pro sans planter](/blog/heic-premiere-pro-import).

## Convertir le HEIC (sans envoi)

Un convertisseur dans le navigateur qui traite les fichiers localement. Avec [HEIC en JPG](/heic-to-jpg) vous pouvez :

- Convertir **plusieurs fichiers en une session** (pas de plafond fixe)
- Régler la **qualité JPEG** avec un curseur avant conversion
- Télécharger individuellement ou en **ZIP**
- Conserver les **EXIF** courants (date, modèle d’appareil) dans le JPG quand c’est possible

Rien n’est envoyé sur nos serveurs. Pour la transparence ou l’édition : [HEIC en PNG](/heic-to-png). Pour des uploads web plus légers après conversion : [HEIC en WebP](/heic-to-webp).

## E-mail et Outlook n’aiment souvent pas le HEIC

La messagerie pro, Gmail et Outlook bloquent souvent le **.heic** même si la photo paraît normale sur l’iPhone. La solution est presque toujours la même : convertir en JPG avant d’attacher, ou régler le transfert iPhone pour que le PC reçoive des JPEG en USB. Pas à pas : [Pièce jointe HEIC refusée](/blog/heic-outlook-email-attachment).

## iOS 18 et transfert iPhone en 2026

**iOS 18** n’a pas remplacé le HEIC comme format caméra par défaut. En USB vous recevez encore du HEIC sauf **Compatible** (Réglages → Appareil photo → Formats) ou Photos → Transférer vers Mac ou PC en JPEG quand iOS estime que le PC ne décode pas le HEIC — souvent incohérent sur Windows 11 après mises à jour pilotes.

Pour le montage et l’impression : convertir après transfert. Pour l’e-mail : convertir avant d’attacher ([Outlook et Gmail](/blog/heic-outlook-email-attachment)).

## Dépannage HEIC en 2026

| Symptôme | Cause probable | Solution |
|---|---|---|
| Photos ouvre le HEIC, pas Premiere | Codec visionneuse ≠ éditeur | [Convertir en JPG/PNG](/heic-to-jpg) puis [guide Premiere](/blog/heic-premiere-pro-import) |
| Miniatures grises dans l’Explorateur | Extension HEIF manquante | HEIF depuis le Microsoft Store, ou conversion en lot |
| Couleurs fades après conversion | Profil / qualité trop basse | [Couleurs délavées](/blog/heic-color-washed-out-after-convert) |
| Copie USB que du .heic | Transfert « Automatique » erroné | [Transférer photos iPhone vers Windows](/blog/transfer-iphone-photos-to-windows) |
| Live Photo en image seule | .mov séparé | [Guide Live Photo](/blog/heic-live-photo-guide) |

## Situations courantes en 2026

| Situation | Que faire |
|---|---|
| Pièce jointe refusée | [Convertir d’abord en JPG](/blog/heic-outlook-email-attachment) |
| Import Premiere / Photoshop plante | [HEIC → JPG avant la timeline](/blog/heic-premiere-pro-import) |
| Dossier Google Drive plein de HEIC | Télécharger le ZIP → convertir en lot → remonter les JPG ([guide](/blog/heic-google-drive-batch-convert)) |
| iPhone → Windows en USB, toujours HEIC | Normal ; convertir après copie ([guide transfert](/blog/transfer-iphone-photos-to-windows)) |
| Raster sans perte | [HEIC en PNG](/heic-to-png) |
| Live Photo (.heic + .mov) | Convertir **uniquement le .heic** fixe ([guide Live Photo](/blog/heic-live-photo-guide)) |

## HEIC vs JPG

| | HEIC | JPG |
|---|---|---|
| Taille | Plus petit | Plus grand |
| Compatibilité | Apple d’abord | Universelle |
| Idéal pour | Stockage iPhone | Partage partout |
| Imprimeur / administration | Souvent refusé | Accepté |

Pour envoyer des photos à la famille ou uploader sur un portail ancien, le JPG reste le choix sûr.

## Guides associés

- [Importer du HEIC dans Premiere Pro](/blog/heic-premiere-pro-import)
- [Pourquoi l’iPhone utilise le HEIC](/blog/why-iphone-uses-heic)
- [Comparatif HEIC vs JPG](/blog/heic-vs-jpg)
- [Transférer les photos iPhone vers Windows](/blog/transfer-iphone-photos-to-windows)
- [Pièce jointe HEIC refusée](/blog/heic-outlook-email-attachment)
- [HEIC sur Windows](/blog/heic-windows-guide)

**Convertir :** [HEIC en JPG](/heic-to-jpg) · [HEIC en PNG](/heic-to-png)`,
  },
  "why-iphone-uses-heic": {
    title: "Pourquoi l’iPhone utilise le HEIC plutôt que le JPG",
    description:
      "Apple est passé au HEIC pour l’efficacité du stockage. Conséquences pour le partage et la compatibilité.",
    content: `*Dernière mise à jour : 25 mai 2026*

Depuis iOS 11, l’appareil photo iPhone enregistre par défaut en HEIC. Apple visait l’efficacité : plus de photos sur le téléphone, moins de bande passante iCloud.

## Le problème du partage

Les destinataires sous Windows ou sur d’anciens Android n’ouvrent pas toujours le HEIC sans logiciel supplémentaire. E-mail, portails scolaires et imprimeurs attendent encore le JPG. D’où la forte demande de convertisseurs.

## « Transférer vers Mac ou PC » : Automatique vs Compatible

**Réglages → Photos → Transférer vers Mac ou PC** contrôle ce qui quitte l’iPhone en USB :

- **Automatique** — iOS convertit en JPG **seulement si** il estime que le PC ne gère pas le HEIC. Les changements de pilotes et codecs sous Windows peuvent fausser le jugement ; vous recevez parfois quand même des HEIC.
- **Conserver les originaux** — toujours du HEIC.

Si Windows reçoit encore du HEIC malgré Automatique : convertir après copie ou changer le format caméra (ci-dessous).

## Passer au JPG sur iPhone (nouvelles photos seulement)

**Réglages → Appareil photo → Formats → Compatible** force le JPEG pour les nouvelles prises. Les HEIC existants restent à convertir à part.

## Convertir les HEIC existants

Notre [convertisseur HEIC en JPG](/heic-to-jpg) gratuit : privé, dans le navigateur, sans compte ni filigrane. Ajoutez plusieurs photos, choisissez la qualité JPEG, téléchargez un ZIP pour un album entier.

Étapes Windows après copie USB : [Transférer les photos iPhone vers Windows](/blog/transfer-iphone-photos-to-windows).`,
  },
  "heic-vs-jpg": {
    title: "HEIC vs JPG : qualité, taille et quand utiliser quoi",
    description:
      "Comparer HEIC et JPG en 2026 : qualité, taille de fichier et compatibilité.",
    content: `*Dernière mise à jour : 25 mai 2026*

Les deux formats stockent des photos, mais visent des objectifs différents. Le mauvais choix fait perdre du temps quand un portail refuse l’upload ou qu’un PC Windows affiche des miniatures vides.

## Taille de fichier

Le HEIC gagne souvent à qualité perçue égale — environ deux fois plus petit que le JPG. C’est pourquoi l’iPhone l’utilise par défaut.

## Compatibilité

Le JPG fonctionne partout : e-mail, imprimeur, portails publics, logiciels vieux de 20 ans. Le HEIC exige un support moderne ou une conversion.

## Garder le HEIC vs convertir en JPG

| Objectif | Format |
|---|---|
| Maximiser le stockage iPhone | HEIC sur le téléphone |
| E-mail à n’importe qui | JPG |
| Upload sur ancien formulaire web | JPG |
| Archive long terme sur disque Windows | JPG (ou PNG sans perte) |
| Retouche Photoshop sans codecs | Convertir d’abord |

## Quand choisir le PNG plutôt que le JPG ?

[HEIC en PNG](/heic-to-png) si vous voulez un raster sans perte, de la transparence sur des exports retouchés, ou éviter les artefacts JPEG avant une nouvelle édition. Le PNG est plus lourd ; pour partager, préférez le JPG.

À lire : [HEIC en PNG : quand et comment](/blog/heic-to-png-when-and-how).

## Qualité à la conversion

À haute qualité JPEG, les deux rendus sont excellents. Sur [HeicSave](/heic-to-jpg), réglez le curseur (90 % par défaut). Nous copions les EXIF courants dans le JPG ; GPS et champs rares peuvent manquer.

## Recommandation

- **Garder le HEIC** sur iPhone pour le stockage.
- **Convertir en JPG** pour partager hors écosystème Apple.
- [HEIC en PNG](/heic-to-png) pour des flux de retouche sans perte.`,
  },
  "heic-windows-guide": {
    title: "Ouvrir et convertir le HEIC sur Windows (guide 2026)",
    description:
      "Pas à pas : ouvrir le HEIC sous Windows 10/11 sans codecs, ou convertir en JPG en ligne.",
    content: `*Dernière mise à jour : 25 mai 2026*

Les utilisateurs Windows reçoivent chaque jour des HEIC d’iPhone — par USB, iCloud ou ZIP depuis Google Drive.

## Option 1 : Installer les codecs HEIC (admin parfois requis)

Le Microsoft Store propose **HEIF Image Extensions** (souvent gratuit) et parfois **HEVC Video Extensions** (payant sur certains PC). Ensuite, Photos ouvre le HEIC et l’Explorateur affiche les miniatures.

Installation rapide via winget (PowerShell) :

\`\`\`
winget install Microsoft.HEIFImageExtension
\`\`\`

**Limites :** PC pro verrouillés, HEVC manquant pour certains profils couleur, lots toujours pénibles vs une conversion unique en JPG.

## Option 2 : Convertir dans le navigateur (sans installation)

1. Ouvrir [HEIC en JPG](/heic-to-jpg) dans **Chrome ou Edge** (meilleur décodage HEIC sous Windows).
2. Glisser les .heic dans la zone — ou **Parcourir les fichiers**.
3. Régler la **qualité JPEG** pour des fichiers plus petits ou plus nets.
4. **Convertir**, puis télécharger chaque JPG ou **Tout en ZIP**.

La conversion s’exécute dans le navigateur. Aucun envoi serveur.

### Navigateur local vs sites d’upload au hasard

| | HeicSave (local) | Uploader cloud |
|---|---|---|
| Confidentialité | Fichiers sur le PC | Envoi à un tiers |
| Lot + ZIP | Oui | Souvent limité |
| Droits admin | Non requis | Non requis |
| Compte | Aucun | Souvent obligatoire |

## Option 3 : App Photos une par une

Avec codecs installés : **Photos → ⋯ → Enregistrer sous → JPEG**. OK pour quelques fichiers ; pénible pour un dossier vacances.

## Conseils pour les lots

Pas de plafond fixe « 5 fichiers » ou « 10 Mo » sur HeicSave. De très gros dossiers peuvent ralentir le PC ; en cas de souci, convertir par groupes de 50–100. HeicSave avertit si le lot ou la taille semble lourd pour votre appareil.

Workflow Google Drive : [Convertir en lot le HEIC depuis Google Drive](/blog/heic-google-drive-batch-convert).

## Dépannage (2026)

| Problème | Essayer |
|---|---|
| Photos tourne indéfiniment | Codecs manquants ; conversion navigateur |
| E-mail refuse le HEIC | Convertir d’abord en JPG |
| Miniatures vides dans l’Explorateur | Extension HEIF ou convertir |
| Copie USB donne du HEIC | Normal ; [guide transfert](/blog/transfer-iphone-photos-to-windows) |
| Échec de conversion | Chrome/Edge ; vérifier .heic, pas .mov Live Photo |
| Transparence / sans perte | [HEIC en PNG](/heic-to-png) |

## Guides associés

- [Transférer les photos iPhone vers Windows](/blog/transfer-iphone-photos-to-windows)
- [Qu’est-ce qu’un fichier HEIC ?](/blog/what-is-heic-file)
- [HEIC en PNG quand il le faut](/blog/heic-to-png-when-and-how)`,
  },
  "heic-mac-guide": {
    title: "Convertir HEIC en JPG sur Mac : Aperçu vs outils en ligne",
    description:
      "Aperçu pour un fichier isolé ou convertisseur en lot gratuit pour aller vite.",
    content: `Le Mac ouvre le HEIC nativement dans Aperçu et Photos.

## Méthode Aperçu

1. Ouvrir le HEIC dans Aperçu.
2. Fichier → Exporter.
3. Choisir JPEG, régler la qualité, enregistrer.

Bien pour une image ; lent pour des dizaines.

## Outil en lot en ligne

[HEIC en JPG](/heic-to-jpg) dans Safari ou Chrome :

- Déposer plusieurs fichiers d’un coup
- Qualité JPEG au curseur
- Télécharger un **ZIP** de tous les JPG
- EXIF (date, appareil) conservés quand c’est possible

## Confidentialité

Les outils qui traitent localement n’envoient pas vos photos à un serveur tiers. Pratique pour du travail client sous NDA.`,
  },
  "best-heic-converters-2026": {
    title: "Meilleurs convertisseurs HEIC en 2026 (gratuits et privés)",
    description:
      "Apps bureau, upload cloud et convertisseurs HEIC locaux dans le navigateur comparés.",
    content: `*Dernière mise à jour : 25 mai 2026*

Choisissez un convertisseur HEIC selon la confidentialité, la taille des lots et la possibilité d’installer un logiciel. Ce que les gens utilisent vraiment en 2026.

## Navigateur local (recommandé)

**HeicSave** — [HEIC en JPG](/heic-to-jpg) :

- Pas d’envoi ; fichiers dans le navigateur
- Sans compte, sans filigrane, gratuit
- **Pas de limite fixe** de fichiers ou 10 Mo (la RAM de l’appareil compte)
- Conversion par lots + **ZIP**
- Curseur **qualité JPEG**
- **EXIF** copiés dans le JPG si supportés

Aussi : [HEIC en PNG](/heic-to-png), [WebP](/webp-to-jpg) et [AVIF](/avif-to-jpg).

**Idéal pour :** Windows sans droits admin, photos sensibles, lots rapides depuis Google Drive ou USB.

## Bureau (installation hors ligne)

- **iMazing HEIC Converter** — gratuit Mac/Windows, hors ligne, lots simples.
- **XnConvert** — utilisateurs avancés, scripts, nombreux formats.
- **IrfanView + plugins** — visionneuse légère avec export par lots.

**Idéal pour :** flux hors ligne récurrents, automatisation IT, machines isolées.

## Upload cloud (prudence)

Les sites qui envoient les photos sur leurs serveurs peuvent violer la confidentialité pour des images médicales ou juridiques. Lisez la politique avant d’uploader des photos client ou famille.

**Seulement** si vous faites confiance à l’opérateur et à sa politique.

## Route codecs Windows

Installer HEIF/HEVC depuis le Microsoft Store — Photos ouvre le HEIC. Pratique pour voir ; l’export JPG en lot reste laborieux vs navigateur + ZIP.

## Choix par scénario

| Besoin | Essayer d’abord |
|---|---|
| 50+ photos iPhone sur Windows, sans install | [HEIC en JPG](/heic-to-jpg) dans Chrome/Edge |
| Dossier Google Drive en HEIC | [Guide Drive par lots](/blog/heic-google-drive-batch-convert) |
| Pipeline d’édition sans perte | [HEIC en PNG](/heic-to-png) |
| AVIF d’un CDN sur Windows | [AVIF en JPG](/avif-to-jpg) + [guide Windows](/blog/convert-avif-to-jpg-windows) |
| Assets WebP pour e-mail | [WebP en JPG](/webp-to-jpg) + [guide Windows](/blog/convert-webp-to-jpg-windows) |

## Notre choix

Pour une conversion rapide et privée sans installation : outils locaux dans le navigateur d’abord. Apps bureau si vous automatisez hors ligne chaque semaine.`,
  },
  "avif-explained": {
    title: "AVIF expliqué : le format image next-gen pour le web",
    description:
      "Bases AVIF, support navigateur et quand convertir en JPG ou PNG.",
    content: `L’AVIF repose sur la compression vidéo AV1 et offre une excellente qualité à petite taille.

## Qui utilise l’AVIF ?

CDN, plugins WordPress et sites orientés performance servent l’AVIF avec repli JPG.

## Support navigateur

Les grands navigateurs décodent l’AVIF dans l’onglet. Les apps bureau souvent pas — d’où la demande pour [AVIF en JPG](/avif-to-jpg). Chrome ou Edge pour la conversion navigateur la plus fiable.

## Convertir si besoin

- **[AVIF en JPG](/avif-to-jpg)** pour partager partout — qualité JPEG au curseur.
- **[AVIF en PNG](/avif-to-png)** pour les pipelines design.

Lots et ZIP comme pour le HEIC : plusieurs fichiers, téléchargement groupé si besoin.

## Avenir

Le support AVIF reste inégal sur desktop. Les convertisseurs comblent le même vide que pour le HEIC.

Sous Windows ? [Convertir AVIF en JPG sur Windows](/blog/convert-avif-to-jpg-windows).`,
  },
  "webp-vs-jpg": {
    title: "WebP vs JPG : quel format choisir en 2026 ?",
    description:
      "WebP vs JPG pour sites, e-mail et stockage, avec outils de conversion gratuits.",
    content: `Le WebP est le format image moderne de Google pour le web ; le JPG reste le standard photo universel.

## Taille

Le WebP est souvent 25 à 35 % plus petit que le JPG à qualité similaire.

## Compatibilité

Le JPG gagne pour l’e-mail et les apps anciennes. Le WebP gagne sur les sites modernes avec repli.

## Outils de conversion

- [JPG en WebP](/jpg-to-webp) — optimiser pour votre site ; **qualité WebP** au curseur (85 % par défaut).
- [WebP en JPG](/webp-to-jpg) — partager avec n’importe qui ; lots + ZIP.

**Pas à pas sous Windows :** [Convertir WebP en JPG sur Windows](/blog/convert-webp-to-jpg-windows).

Toute conversion est locale dans le navigateur — sans envoi.

## Bonne pratique

Servir le WebP avec <picture> et repli JPG. Garder les masters en JPG ou RAW.`,
  },
  "webp-for-developers": {
    title: "WebP pour les développeurs : encoder, décoder, convertir",
    description:
      "WebP pour le front-end : encoder et convertir PNG/JPG dans les deux sens.",
    content: `Les développeurs adoptent le WebP pour les scores Lighthouse et la bande passante.

## Encoder localement

Avant la CI : [PNG en WebP](/png-to-webp) ou [JPG en WebP](/jpg-to-webp) sur les assets marketing. Régler la qualité dans l’UI, pas de plafond de taille fixe.

## Décoder pour les parties prenantes

[WebP en PNG](/webp-to-png) quand le design a besoin de PNG pour Figma. [WebP en JPG](/webp-to-jpg) pour les pièces jointes e-mail.

## API Canvas

Les navigateurs modernes encodent le WebP via canvas.toBlob — notre outil encapsule ça côté client, comme en production.

## Ne pas oublier les replis

Toujours livrer JPG/PNG de secours pour les clients mail et navigateurs anciens.`,
  },
  "heic-live-photo-guide": {
    title: "Live Photos iPhone et HEIC : exporter des JPG fixes",
    description:
      "HEIC Live Photo, confusion .mov et export JPG sur Windows et Mac.",
    content: `Les Live Photos capturent quelques secondes de mouvement autour d’une image fixe. Sur disque, souvent **deux fichiers** : un .heic (ou .jpg) et une **.mov**. Ça embrouille sous Windows et casse la conversion par lots si vous choisissez le mauvais fichier.

## Qu’est-ce qu’une Live Photo ?

Avec Live Photos activé (**Réglages → Appareil photo → Live Photos**), chaque prise stocke :

- Une **image fixe** (HEIC par défaut sur iPhone récents)
- Un court **clip vidéo** (.mov) pour l’effet « live »

Une tuile dans Photos ; sur un partage PC, parfois deux fichiers au nom proche.

## Pourquoi la conversion échoue sur le mauvais fichier

Les convertisseurs navigateur, dont [HEIC en JPG](/heic-to-jpg), attendent une **image fixe**. Déposer un .mov dans l’outil HEIC → échec ou résultat inutile.

**Correction :** ne sélectionner que le **.heic** (ou .heif) fixe, pas le .mov associé.

## Exporter un JPG fixe depuis l’iPhone (sans ordinateur)

1. Ouvrir la photo dans **Photos**.
2. Appuyer sur **Partager**.
3. Si vous voyez **Enregistrer comme vidéo**, vous partagez le clip — revenez en arrière et exportez le fixe via Mac/PC.
4. Sur Mac : Aperçu → **Fichier → Exporter** → JPEG.

Pour beaucoup de photos : transférer les HEIC fixes sur un ordinateur et convertir en lot.

## Convertir en lot les fixes Live Photo sous Windows

1. Copier **uniquement** les .heic depuis iPhone ou dossier iCloud.
2. Ouvrir [HEIC en JPG](/heic-to-jpg) dans Chrome ou Edge.
3. Déposer les fixes, régler la qualité, convertir, télécharger le ZIP.

Ignorer les .mov du même dossier — ce n’est pas la photo pour l’e-mail ou l’impression.

## Désactiver Live Photos pour partager plus simplement

**Appareil photo → icône Live Photos (en haut)** — Off quand vous voulez seulement un fixe JPG/HEIC. Moins de doublons sous Windows.

## Live Photo vs HEIC classique

| | Paire Live Photo | HEIC normal |
|---|---|---|
| Fichiers | .heic + .mov | .heic seul |
| Idéal pour | Souvenirs dans Photos | E-mail, impression, Windows |
| Avec HeicSave | fixe .heic seulement | Oui |

## Note confidentialité

Les **vidéos** Live Photo peuvent inclure du son et des scènes de fond non voulues. Pour un upload, passez par HEIC→JPG sur le **fixe** et relisez le JPG avant envoi.

Compatibilité Windows universelle ? Après conversion, le JPG s’ouvre dans Photos, Paint, Word et tout ancien uploader. Sans perte : [HEIC en PNG](/heic-to-png) sur l’image fixe seulement.`,
  },
  "convert-avif-to-jpg-windows": {
    title: "Convertir AVIF en JPG sur Windows (gratuit, sans envoi)",
    description:
      "Convertir des images AVIF en JPG sur Windows 10/11 dans Chrome ou Edge : traitement par lots, réglage de qualité, ZIP. Sans installation ni envoi vers un serveur tiers.",
    content: `Vous avez téléchargé une image **.avif** (ou un site ne fournit que ce format), et Windows refuse de l’ouvrir dans Outlook, Word ou un ancien formulaire d’envoi. Le **JPG** fonctionne partout.

Ouvrez **[AVIF en JPG](/avif-to-jpg)** dans **Chrome ou Edge**, déposez vos fichiers, réglez la qualité JPEG et téléchargez des JPG ou une archive ZIP. Tout se passe dans le navigateur ; rien n’est envoyé sur nos serveurs.

## Qu’est-ce que l’AVIF ?

**AVIF** (AV1 Image File Format) repose sur une compression moderne. Les sites et CDN l’utilisent pour des fichiers souvent plus légers tout en restant nets. Sous Windows, **Photos**, d’anciennes versions de **Paint** et de nombreuses applications attendent encore le **.jpg** ou le **.png** — pas le .avif.

Les recherches **« avif to jpg »** sont fréquentes : le fichier s’affiche dans un onglet, mais bloque ailleurs sur le PC.

## Windows 10/11 ouvre-t-il l’AVIF nativement ?

La prise en charge progresse, mais reste inégale :

- Les **codecs du Microsoft Store** aident dans certaines apps — pas dans tous les flux (Outlook, CMS anciens, imprimeurs).
- **Paint** sur d’anciennes versions de Windows n’ouvre souvent pas l’AVIF.
- Les **dossiers volumineux** issus d’un CDN ou d’un export design sont pénibles à traiter un par un.

Convertir une fois en JPG est en général plus rapide que de chercher des codecs sur chaque machine.

## Méthode 1 : convertir dans le navigateur (sans envoi)

**HeicSave** effectue la conversion **localement dans votre onglet**, via le décodeur d’images du navigateur et l’API Canvas. Vos fichiers **ne sont pas envoyés sur nos serveurs** pour traitement.

### Étapes sur Windows

1. Ouvrir **Chrome** ou **Edge** (meilleure prise en charge AVIF).
2. Aller sur **[AVIF en JPG](/avif-to-jpg)**.
3. Glisser une ou plusieurs fichiers **.avif** dans la zone de dépôt (ou cliquer pour parcourir).
4. Ajuster le **curseur de qualité JPEG** si vous voulez des fichiers plus petits (la valeur par défaut convient bien au partage).
5. Cliquer sur **Convertir**.
6. Télécharger chaque JPG ou choisir **Tout en ZIP** pour un lot.

### Pourquoi le navigateur plutôt qu’un « convertisseur en ligne » au hasard ?

| | Dans le navigateur (HeicSave) | Convertisseur cloud classique |
|---|---|---|
| Confidentialité | Les fichiers restent sur le PC | Envoi vers un serveur tiers |
| Lots | Nombreux fichiers + ZIP | Souvent limité |
| Compte | Non requis | Souvent obligatoire |
| Filigrane | Aucun sur notre outil | Fréquent en gratuit |

Pour le travail client, les documents médicaux ou les visuels non publiés, la conversion locale évite tout stockage chez un tiers.

## Méthode 2 : Photos Windows ou Paint

Si l’AVIF s’ouvre déjà sur votre PC :

1. Ouvrir l’image dans **Photos**.
2. Pour **beaucoup de fichiers**, les contournements (**⋯ → Enregistrer sous**, **Imprimer → Microsoft Print to PDF**) sont laborieux.
3. **Paint** (Windows 11 récent) peut ouvrir l’AVIF et proposer **Enregistrer sous → JPEG** — fichier par fichier.

Pour **des dizaines de fichiers** dans un dossier de téléchargement, la méthode 1 est en général plus efficace.

## Méthode 3 : logiciels bureau (hors ligne, installation requise)

- **XnConvert** — gratuit, lots, scripts ; idéal pour les utilisateurs avancés.
- **FFmpeg** — en terminal : \`ffmpeg -i input.avif output.jpg\` (rapide pour les équipes IT).
- **IrfanView** avec plugins — visionneuse légère et traitement par lots.

Utile pour l’automatisation ; pour un dossier ponctuel sur un PC verrouillé, l’outil navigateur évite les droits administrateur.

## Qualité JPEG : quelle valeur choisir ?

- **90–95 %** — proche de l’original, fichiers plus lourds ; adapté à l’impression et à l’archivage.
- **80–85 %** — bon compromis pour l’e-mail et la messagerie ; fichiers nettement plus petits.
- **70 % et moins** — seulement si la taille compte plus que le détail fin.

Sur **[AVIF en JPG](/avif-to-jpg)**, réglez la qualité **avant** de lancer un gros lot — vous n’aurez pas à tout refaire.

## Conversion par lots et téléchargement ZIP

Il n’y a pas de plafond artificiel du type « 5 fichiers seulement » — les limites pratiques sont la **RAM** et la stabilité de l’onglet. Conseils pour de gros volumes sous Windows :

- Fermez les onglets gourmands avant de convertir 100+ images.
- Divisez en blocs de 50–80 fichiers si l’onglet ralentit.
- Préférez **Chrome ou Edge sur bureau** pour les gros dossiers.
- Téléchargez **un ZIP** à la fin plutôt que de sauvegarder chaque fichier.

## Scénarios courants

### Microsoft Designer / exports CDN

Les outils design et plugins de performance livrent parfois des assets **.avif**. Si une application Windows les refuse, convertissez en JPG puis importez. Pour la transparence : **[AVIF en PNG](/avif-to-png)**.

### E-mail et anciens formulaires d’envoi

La plupart des formulaires n’acceptent encore que le **.jpg**. Convertissez AVIF → JPG avant la pièce jointe.

### WordPress ou site statique

Vous pouvez garder l’AVIF en production avec un élément **picture** et un repli JPG. Gardez aussi des **fichiers JPG de travail** pour les rédacteurs et parties prenantes sous Windows.

## Dépannage

| Problème | Piste de solution |
|---|---|
| Le fichier ne se charge pas | Vérifier l’extension .avif ; tester Chrome/Edge ; retélécharger si corrompu |
| Couleurs ternes | AVIF souvent wide-gamut, JPG en sRGB — léger décalage normal |
| Le lot s’interrompt | Moins de fichiers par passage ; fermer d’autres onglets ; vérifier la RAM |
| Besoin de transparence | Utiliser [AVIF en PNG](/avif-to-png) ; le JPG n’a pas d’alpha |
| AVIF animé | Notre outil cible les images fixes ; exporter d’abord une image |

## AVIF vs JPG en un coup d’œil

| | AVIF | JPG |
|---|---|---|
| Taille | Souvent plus petit | Plus grand |
| Prise en charge Windows | En progression, inégale | Universelle |
| Idéal pour | Diffusion web, archives | Partage, e-mail, impression |
| Transparence | Oui (AVIF) | Non |

## Outils et guides associés

- **[AVIF en JPG](/avif-to-jpg)** — convertisseur principal (raccourci de ce guide)
- **[AVIF en PNG](/avif-to-png)** — raster pour la création graphique
- **[WebP en JPG](/webp-to-jpg)** — même logique pour les .webp
- **[HEIC en JPG](/heic-to-jpg)** — photos iPhone sur Windows

## Confidentialité

La conversion s’exécute dans votre navigateur. Nous ne recevons pas vos données image pour traitement. Les statistiques et publicités (si activées) sont décrites dans notre page [Confidentialité](/privacy) et la bannière cookies — séparément de vos fichiers.

Ouvrez **[AVIF en JPG](/avif-to-jpg)** et convertissez votre premier fichier en moins d’une minute.`,
  },
  "transfer-iphone-photos-to-windows": {
    title: "Transférer les photos iPhone sur un PC Windows – guide 2026",
    description:
      "Copier les photos iPhone sur Windows sans blocage HEIC : USB, iCloud pour Windows et conversion HEIC→JPG locale dans le navigateur.",
    content: `Copier des photos iPhone vers un PC Windows paraît simple, jusqu’à ce que le **HEIC** bloque le flux. Voici ce qui fonctionne encore en 2026.

## Pourquoi Windows peine avec les photos iPhone

Les iPhone récents enregistrent les photos en **HEIC** (High Efficiency Image Container). Windows 10 et 11 n’ouvre pas toujours les fichiers .heic sans extension. Symptômes fréquents : vignette vide, erreur dans **Photos**, pièces jointes refusées.

La plupart des applications Windows, imprimeurs et portails d’envoi attendent encore le **JPG**.

## Méthode 1 : câble USB (Explorateur de fichiers)

1. Brancher l’iPhone avec un câble Lightning ou USB-C.
2. Déverrouiller l’appareil et appuyer sur **Faire confiance à cet ordinateur** si demandé.
3. Ouvrir l’**Explorateur de fichiers** → **Apple iPhone** → **Stockage interne** → **DCIM**.
4. Copier les dossiers souhaités sur le PC.

**À noter :** les fichiers copiés sont souvent encore en **HEIC**. L’aperçu n’apparaît qu’après installation de codecs ou conversion.

## Méthode 2 : iCloud pour Windows

Installez **iCloud pour Windows**, connectez-vous et activez **Photos**. Les nouvelles prises de vue se synchronisent dans le dossier iCloud Photos sur le PC.

**À noter :** la synchronisation peut être lente sur une connexion faible. Le problème HEIC persiste tant que l’iPhone n’est pas réglé sur **Plus compatible** (JPEG) dans Réglages → Appareil photo → Formats.

## Méthode 3 : convertir HEIC en JPG dans le navigateur (sans installation)

Si les fichiers HEIC sont déjà sur le PC — après copie USB, AirDrop vers un Mac puis clé USB, par exemple — convertissez localement :

1. Ouvrir **[HEIC en JPG](/heic-to-jpg)** dans **Chrome ou Edge**.
2. Glisser vos fichiers .heic dans la zone de dépôt.
3. Ajuster la **qualité JPEG** si besoin (90 % par défaut).
4. Cliquer sur **Convertir**, puis télécharger chaque JPG ou **Tout en ZIP**.

Le traitement a lieu **dans votre navigateur**. Rien n’est envoyé sur nos serveurs — pratique pour les photos personnelles, médicales ou client.

## Méthode 4 : photographier en JPG à l’avenir

**Réglages → Appareil photo → Formats → Plus compatible** enregistre les nouvelles photos en JPEG. Les HEIC déjà présents doivent encore être convertis une fois.

## Conseils pour les albums volumineux

HeicSave n’impose pas de nombre fixe de fichiers — les limites viennent de la **mémoire** et de la stabilité de l’onglet. Pour des centaines de photos de vacances :

- Convertir par groupes de 50 à 100 si l’onglet ralentit.
- Fermer les onglets lourds avant un gros lot.
- Préférer **Chrome ou Edge sur bureau** plutôt que Safari mobile pour les très gros dossiers.

## HEIC vs JPG après le transfert

| Objectif | Format conseillé |
|---|---|
| Économiser l’espace sur l’iPhone | HEIC sur le téléphone |
| Ouvrir sous Windows sans codecs | JPG sur le PC |
| Imprimeur ou portail administratif | JPG |
| Retouche avec maximum de marge | D’abord [HEIC en PNG](/heic-to-png), puis retouche |

## Dépannage

- **Le PC ne voit pas l’iPhone** — essayer un autre câble, garder le téléphone déverrouillé ; sur d’anciennes versions de Windows, réinstaller le support Apple Mobile Device / les composants iTunes.
- **Photo mal orientée** — l’orientation EXIF est souvent reprise dans le JPG ; réexporter depuis Photos sur Mac si nécessaire.
- **Live Photo (.heic + .mov)** — convertir uniquement le **.heic** (image fixe) ; voir notre [guide Live Photo](/blog/heic-live-photo-guide).

Pour un parcours dédié Windows : [Ouvrir et convertir HEIC sur Windows](/blog/heic-windows-guide). Pour les albums Google Drive : [Convertir HEIC en lot depuis Google Drive](/blog/heic-google-drive-batch-convert).`,
  },
  "convert-webp-to-jpg-windows": {
    title: "Convertir WebP en JPG sur Windows (gratuit, sans envoi)",
    description:
      "Convertir des images WebP en JPG sur Windows 10/11 dans Chrome ou Edge : lots, réglage qualité, ZIP. Sans installation ni envoi vers un serveur.",
    content: `Vous avez enregistré une **.webp** depuis un site, Slack ou un export design, et Windows refuse de l’ouvrir dans Word, Outlook ou un ancien formulaire. Le **JPG** fonctionne partout.

Ouvrez **[WebP en JPG](/webp-to-jpg)** dans **Chrome ou Edge**, déposez vos fichiers, réglez la qualité JPEG et téléchargez des JPG ou un ZIP. Tout se passe dans le navigateur ; rien n’est envoyé sur nos serveurs.

## Qu’est-ce que le WebP ?

**WebP** est le format d’image moderne de Google pour le web. Il est souvent 25 à 35 % plus léger que le JPG à qualité similaire. Les navigateurs le décodent nativement ; de nombreuses **applications bureau sous Windows** ne le font pas encore.

D’où les recherches **« webp to jpg »** : le fichier s’affiche dans Chrome mais échoue en pièce jointe ou sur un CMS ancien.

## Windows 10/11 ouvre-t-il le WebP nativement ?

Partiellement :

- Les **navigateurs modernes** affichent le WebP sans problème.
- **Paint** sur Windows 11 récent peut ouvrir WebP et enregistrer en JPEG — fichier par fichier.
- **Photos**, **Word** et beaucoup de formulaires attendent encore le **.jpg**.

Pour un **dossier entier de WebP**, la conversion navigateur est plus efficace.

## Méthode 1 : conversion dans le navigateur (recommandée)

**HeicSave** convertit **localement dans l’onglet** via le décodeur du navigateur et Canvas. Vos fichiers **ne sont pas envoyés sur nos serveurs**.

### Étapes sur Windows

1. Ouvrir **Chrome** ou **Edge**.
2. Aller sur **[WebP en JPG](/webp-to-jpg)**.
3. Glisser un ou plusieurs fichiers **.webp** dans la zone de dépôt.
4. Ajuster le **curseur de qualité JPEG**.
5. Cliquer sur **Convertir**.
6. Télécharger chaque JPG ou **Tout en ZIP**.

### Pourquoi le navigateur ?

| | Dans le navigateur (HeicSave) | Convertisseur cloud |
|---|---|---|
| Confidentialité | Reste sur le PC | Envoi vers un tiers |
| Lots | Nombreux fichiers + ZIP | Souvent limité |
| Compte | Non requis | Souvent obligatoire |
| Filigrane | Aucun | Fréquent en gratuit |

## Méthode 2 : Paint / Photos (fichiers uniques)

Si WebP s’ouvre déjà : **Paint → Fichier → Enregistrer sous → JPEG** — lent pour des dizaines de fichiers.

## Méthode 3 : logiciels bureau (hors ligne)

- **XnConvert** — lots et scripts.
- **IrfanView** — visionneuse légère avec export.
- **FFmpeg** — \`ffmpeg -i input.webp output.jpg\` en terminal.

Utile avec droits d’installation ; l’outil navigateur évite l’administrateur.

## Qualité JPEG

- **90–95 %** — proche de l’original ; bon pour l’impression.
- **80–85 %** — idéal pour e-mail et messagerie.
- **70 % et moins** — quand la taille prime sur le détail.

Réglez la qualité **avant** un gros lot.

## Conseils pour les lots sous Windows

- Fermer les onglets lourds avant 100+ images.
- Diviser en blocs de 50–80 si l’onglet ralentit.
- Télécharger **un ZIP** à la fin.

## Scénarios courants

### Assets web pour des collègues

Les designers livrent du WebP ; les utilisateurs Windows ont besoin de JPG pour e-mail et présentations.

### Discord / Slack

Les images enregistrées sont souvent en WebP — convertir avant PowerPoint ou impression.

### Transparence ?

Le JPG n’a pas d’alpha. Utilisez **[WebP en PNG](/webp-to-png)**.

## Dépannage

| Problème | Essayer |
|---|---|
| Fichier ne charge pas | Vérifier l’extension .webp ; Chrome/Edge |
| Couleurs différentes | WebP parfois wide-gamut ; léger écart vers JPG sRGB normal |
| Lot interrompu | Moins de fichiers par passage ; vérifier la RAM |
| WebP animé | Outil pour images fixes ; exporter une frame d’abord |

## Outils et guides liés

- **[WebP en JPG](/webp-to-jpg)** — convertisseur principal
- **[WebP vs JPG](/blog/webp-vs-jpg)** — comparaison des formats
- **[AVIF en JPG sur Windows](/blog/convert-avif-to-jpg-windows)** — même flux pour .avif
- **[HEIC en JPG](/heic-to-jpg)** — photos iPhone sur Windows

## Confidentialité

La conversion s’exécute dans votre navigateur. Nous ne recevons pas vos données image pour traitement.

**C’est parti :** ouvrez **[WebP en JPG](/webp-to-jpg)** et convertissez votre premier fichier en moins d’une minute.`,
  },
  "heic-to-png-when-and-how": {
    title: "HEIC en PNG : quand et comment convertir (2026)",
    description:
      "HEIC vers PNG plutôt que JPG — pour retouche, transparence et flux sans perte. Conversion par lots dans le navigateur sur Windows et Mac.",
    content: `La plupart des utilisateurs iPhone convertissent HEIC en **JPG** pour l’e-mail et Windows. Parfois le **PNG** est le meilleur choix : avant retouche, pour éviter les artefacts JPEG, ou quand le workflow exige un raster sans perte.

Ouvrez **[HEIC en PNG](/heic-to-png)** dans Chrome ou Edge, déposez vos .heic, convertissez et téléchargez individuellement ou en ZIP. Tout reste dans le navigateur.

## HEIC → JPG vs HEIC → PNG

| | Sortie JPG | Sortie PNG |
|---|---|---|
| Taille | Plus petite | Plus grande |
| Compression | Avec perte (curseur qualité) | PNG sans perte |
| Transparence | Non | Oui (si la source a de l’alpha) |
| Idéal pour | E-mail, formulaires, partage | Retouche, calques, masters |
| Ouverture universelle Windows | Excellente | Excellente |

Si le seul objectif est « faire ouvrir la photo à mamie », [HEIC en JPG](/heic-to-jpg) suffit. Pour **importer dans un éditeur sans nouvelle perte**, le PNG est souvent plus judicieux.

## Quand le PNG a du sens

1. **Retouche ultérieure** — filtres, calques ou compositing dans Photoshop, GIMP ou Canva.
2. **Captures avec texte net** — le JPEG adoucit les bords ; le PNG reste net.
3. **Transparence** — certains exports HEIC ont de l’alpha ; le PNG le conserve (pas le JPG).
4. **Préparation impression** — certaines imprimeries préfèrent PNG ou TIFF aux JPG très compressés.

## Quand le JPG reste meilleur

- Pièces jointes e-mail et messageries (limites de taille).
- Portails administratifs avec plafond de Mo.
- Partager des dizaines de photos de vacances — les dossiers PNG deviennent énormes.

## Convertir HEIC en PNG (Windows)

1. Ouvrir **Chrome** ou **Edge** sur bureau.
2. Aller sur **[HEIC en PNG](/heic-to-png)**.
3. Glisser les fichiers .heic dans la zone de dépôt.
4. Cliquer sur **Convertir**.
5. Télécharger chaque PNG ou **Tout en ZIP**.

Le traitement reste dans le navigateur — aucun envoi pour conversion.

## Conseils pour les lots

Les PNG sont plus lourds que les JPG. Pour 100+ photos :

- Prévoir assez d’espace disque pour le ZIP.
- Convertir par blocs si l’onglet ralentit.
- Ignorer les .mov Live Photo — convertir uniquement le **.heic** fixe.

## Live Photos

Les convertisseurs navigateur attendent une **image fixe**. Déposez le .heic, pas la vidéo .mov associée.

## Après conversion PNG

- **E-mail ?** Envisager une copie JPG haute qualité pour les destinataires.
- **Web ?** Le PNG est lourd ; pour la diffusion, [PNG en WebP](/png-to-webp) avec repli JPG.

## Guides liés

- [HEIC vs JPG](/blog/heic-vs-jpg)
- [HEIC sur Windows](/blog/heic-windows-guide)
- [Transférer photos iPhone sur Windows](/blog/transfer-iphone-photos-to-windows)

**Commencer ici :** **[HEIC en PNG](/heic-to-png)**`,
  },
  "heic-google-drive-batch-convert": {
    title: "Convertir HEIC en JPG par lot depuis Google Drive (2026)",
    description:
      "Télécharger des photos HEIC depuis Google Drive, les convertir en JPG par lot dans le navigateur sans installation, puis les remettre en ligne ou les partager.",
    content: `Google Drive n’a pas de bouton **HEIC → JPG** intégré. Si votre sauvegarde iPhone ou un dossier partagé regorge de fichiers .heic, les aperçus Windows échouent et les pièces jointes sont refusées. Ce flux convertit **beaucoup de HEIC d’un coup** sans installer de codecs ni envoyer vos photos vers un serveur inconnu.

télécharger depuis Drive → extraire le ZIP → **[HEIC en JPG](/heic-to-jpg)** dans Chrome/Edge → ZIP JPG → remettre sur Drive si besoin.

## Pourquoi les utilisateurs Drive souffrent du HEIC

- Les uploads iPhone ou **Google Photos** peuvent conserver l’original HEIC.
- Les dossiers familiaux mélangent HEIC et JPG.
- Les PC pro n’ont souvent pas les codecs HEIF.
- L’aperçu Drive peut afficher des vignettes HEIC cassées.

Une conversion unique en JPG règle la compatibilité partout.

## Workflow par lot, étape par étape

### 1. Télécharger depuis Google Drive

1. Ouvrir Drive dans le navigateur.
2. Sélectionner les HEIC ou le dossier (**Maj+clic** ou **Ctrl+A**).
3. **Clic droit → Télécharger**.
4. Plusieurs fichiers → Drive fournit un **ZIP**.

### 2. Extraire sur le PC

1. Clic droit sur le ZIP → **Extraire tout…** (Windows).
2. Noter le chemin du dossier — vous y glisserez les .heic.

### 3. Convertir localement par lot (sans installation)

1. Ouvrir **Chrome** ou **Edge** sous Windows.
2. Aller sur **[HEIC en JPG](/heic-to-jpg)**.
3. Glisser **tous** les .heic extraits — ou **Choisir un dossier** pour charger le dossier extrait en une fois (par groupes de 50–100 si peu de RAM).
4. Régler la **qualité JPEG** (90 % par défaut pour archiver ; 85 % pour l’e-mail).
5. **Convertir** → **Tout en ZIP**.

La conversion s’exécute **dans votre navigateur**. HeicSave ne reçoit pas vos images pour traitement.

### 4. Optionnel : remettre les JPG sur Drive

1. Créer un dossier du type \`Photos JPG 2026\`.
2. Téléverser le ZIP JPG ou les fichiers.
3. Partager le dossier JPG avec la famille — fini les codecs sous Windows.

## Pourquoi éviter un « convertisseur cloud » ?

Beaucoup d’outils en ligne **envoient** vos photos sur leurs serveurs. Pour des albums personnels, médicaux ou clients dans Drive, la conversion locale garde les fichiers sur le PC. Voir [Pourquoi la conversion locale compte](/blog/privacy-browser-image-conversion).

## Conseils pour les gros albums

| Conseil | Pourquoi |
|---|---|
| Blocs de 50–100 | Protège la RAM sur PC 8 Go |
| Fermer les autres onglets | Libère la mémoire pour le décodage HEIC |
| Chrome/Edge bureau | Meilleure prise en charge HEIC sous Windows |
| Ignorer les .mov | Les vidéos Live Photo ne sont pas des photos fixes |
| Garder les originaux | Vérifier les JPG avant de supprimer les HEIC |

## Dépannage

| Problème | Solution |
|---|---|
| Téléchargement lourd / lent | Moins de dossiers par ZIP ; Wi-Fi |
| Certains fichiers échouent | Re-télécharger ; tester un fichier seul |
| JPG mal orienté | Orientation EXIF reprise si supportée |
| Besoin de retouche | [HEIC en PNG](/heic-to-png) |

## Éviter le HEIC avant upload

iPhone : **Réglages → Appareil photo → Formats → Plus compatible** enregistre en JPG. Les HEIC déjà sur Drive doivent encore être convertis.

## Guides liés

- [HEIC sur Windows](/blog/heic-windows-guide)
- [Transférer photos iPhone sur Windows](/blog/transfer-iphone-photos-to-windows)
- [Qu’est-ce qu’un fichier HEIC ?](/blog/what-is-heic-file)

**Convertir maintenant :** **[HEIC en JPG](/heic-to-jpg)**`,
  },
  "privacy-browser-image-conversion": {
    title: "Pourquoi la conversion locale protège la vie privée",
    description:
      "Pourquoi la conversion locale protège la vie privée : RGPD, photos clients et HEIC/AVIF — vos fichiers restent sur l'appareil, jamais envoyés sur serveurs.",
    content: `Envoyer des photos à des convertisseurs aléatoires crée des risques RGPD et sécurité.

## Traitement côté client

WebAssembly (HEIC) ou Canvas (WebP/AVIF) garde les bytes sur votre appareil. HeicSave ne reçoit pas vos images pour conversion.

## Pas de limites artificielles

Pas de « 5 fichiers seulement ». Les très gros lots peuvent échouer par manque de RAM — avertissement honnête, pas de paywall.

## RGPD & cookies

Bannière cookie pour analytics et AdSense en UE. Les images restent séparées.

## Vérifier zéro envoi (DevTools)

1. Ouvrir **[HEIC en JPG](/heic-to-jpg)** dans Chrome ou Edge.
2. **F12** → **Réseau** → cocher **Conserver le journal**.
3. Convertir des HEIC.
4. Filtrer **Fetch/XHR** ou chercher \`upload\`.

Aucune requête ne doit porter vos bytes image vers HeicSave. Analytics seulement si cookies acceptés.

Indice repliable **Vérifier zéro envoi** sur les pages outils.

## Essayer

[HEIC en JPG](/heic-to-jpg) · [AVIF en PNG](/avif-to-png) · [WebP en JPG](/webp-to-jpg)`,
  },
  "heic-chromebook-convert": {
    title: "Convertir HEIC sur Chromebook (guide IT)",
    description:
      "ChromeOS n'ouvre pas les HEIC iPhone. Convertir HEIC en JPG dans le navigateur — sans Linux ni extensions.",
    content: `ChromeOS **ne supporte pas HEIC**. Les Chromebooks scolaires bloquent souvent Linux. Les .heic échouent dans Classroom ou outils d'annuaire.

**[HEIC en JPG](/heic-to-jpg)** dans **Chrome**, fichiers ou **dossier**, conversion locale, télécharger JPG.

## Pourquoi les Chromebooks échouent

- **Fichiers** : pas d'aperçu photo.
- **Chrome** n'affiche pas .heic.
- **Appareils gérés** : pas de Linux ni apps tierces.

La conversion navigateur **ne demande pas de droits admin**.

## Étapes pour l'IT scolaire

1. **Chrome** ouvert.
2. **[HEIC en JPG](/heic-to-jpg)**.
3. **Choisir un dossier** après copie Drive/USB — ou glisser-déposer.
4. **Qualité JPEG** (90 % par défaut).
5. **Convertir** → JPG ou **ZIP**.

Traitement libheif WASM **sur le Chromebook**. Pas d'envoi à HeicSave. Vérif DevTools : [guide confidentialité](/blog/privacy-browser-image-conversion).

## Conseils lot

| Conseil | Pourquoi |
|---|---|
| Copier HEIC dans un dossier local | Sélecteur de dossier plus rapide |
| Lots sur Chromebook 4 Go | HEIC consomme RAM |
| **Tout en ZIP** | Remise simple aux rédacteurs |

## Liens

- [Lot HEIC depuis Google Drive](/blog/heic-google-drive-batch-convert)
- [HeicSave vs autres outils](/blog/heicsave-vs-browser-heic-converters)

**Démarrer :** **[HEIC en JPG](/heic-to-jpg)**`,
  },
  "heic-android-open-convert": {
    title: "Ouvrir les HEIC iPhone sur Android",
    description:
      "Android échoue souvent avec les HEIC iPhone. Convertir HEIC en JPG dans le navigateur — PC ou Chrome mobile.",
    content: `Les iPhone envoient des .heic — Android affiche souvent pas d'aperçu dans Galerie, WhatsApp ou portails scolaires.

Sur PC **[HEIC en JPG](/heic-to-jpg)**, repartager en JPG. Ou **Chrome sur Android**.

## Pourquoi Android + HEIC casse

- **Google Photos** affiche parfois, export JPG incohérent.
- **Samsung Gallery** et **Messages** refusent souvent HEIC.
- Groupes famille iPhone → Android = cas fréquent.

## Méthode 1 : PC (fiable)

1. HEIC via Drive/USB sur Windows/Mac.
2. **[HEIC en JPG](/heic-to-jpg)** Chrome/Edge.
3. **Tout en ZIP** → partager JPG.

## Méthode 2 : Chrome Android

1. Chrome → **[HEIC en JPG](/heic-to-jpg)**.
2. **Parcourir** depuis Téléchargements ou Drive.
3. Convertir et enregistrer JPG.

## iPhone en JPG à l'avenir

**Réglages → Appareil photo → Formats → Plus compatible**. Les HEIC existants restent à convertir.

## Confidentialité

Éviter convertisseurs cloud pour photos familiales — [vérif DevTools](/blog/privacy-browser-image-conversion).

**Convertir :** **[HEIC en JPG](/heic-to-jpg)**`,
  },
  "heic-color-washed-out-after-convert": {
    title: "Couleurs fades après HEIC→JPG",
    description:
      "HEIC en Display P3, JPG souvent sRGB. Pourquoi les photos semblent ternes et quoi faire.",
    content: `Certains trouvent le JPG **plat** après conversion HEIC. Souvent **mappage d'espace colorimétrique**, pas un outil cassé.

## Couleur HEIC vs JPG

- HEIC iPhone souvent **Display P3** (10 bits).
- JPG typiquement **sRGB 8 bits**.
- P3 → sRGB peut adoucir saturation sur écrans non-P3.

Tout convertisseur HEIC→JPG est concerné.

## Aides

1. **Qualité JPEG 90 %+** sur [HEIC en JPG](/heic-to-jpg).
2. **L'original paraissait plus vif sur iPhone** — P3 vs sRGB.
3. **PNG pour retouche :** [HEIC en PNG](/heic-to-png) — fichiers plus lourds.

## HeicSave

Decode libheif + JPG Canvas à votre qualité. Pas de désaturation artificielle.

## Liens

- [HEIC vs JPG](/blog/heic-vs-jpg)
- [HEIC en PNG — quand ?](/blog/heic-to-png-when-and-how)

**Outils :** **[HEIC en JPG](/heic-to-jpg)** · **[HEIC en PNG](/heic-to-png)**`,
  },
  "heicsave-vs-browser-heic-converters": {
    title: "HeicSave vs HEIC.dev & HEICcon (2026)",
    description:
      "Tableau comparatif 2026 : HeicSave vs HEIC.dev vs HEICcon — sans envoi, limites de lot, EXIF, langues, quel convertisseur HEIC navigateur choisir.",
    content: `**Réponse courte :** HeicSave, [HEIC.dev](https://heic.dev) et [HEICcon](https://heiccon.com) convertissent le HEIC dans le navigateur sans envoyer les fichiers sur leurs serveurs. HeicSave : **pas de plafond de lot**, **fr/de/en**, **outils AVIF/WebP sur un seul domaine**. HEIC.dev : plus de formats de sortie HEIC et préréglages de taille. HEICcon : import cloud et workers parallèles.

## Comparatif convertisseurs HEIC navigateur (2026)

| | **HeicSave** | HEIC.dev | HEICcon |
|---|---|---|---|
| Envoi pour conversion | **Non** | Non | Non |
| Plafond fixe de fichiers par lot | **Aucun** (RAM de l’appareil) | 500 fichiers | 50 fichiers |
| Téléchargement ZIP | Oui | Oui | Oui |
| HEIC → JPG / PNG / WebP | Oui | Oui (+ autres formats) | Oui |
| Outils AVIF et WebP sur le même site | **Oui (9 outils)** | axé HEIC | axé HEIC |
| Langues de l’interface | **fr, de, en** | surtout en | surtout en |
| EXIF sur HEIC→JPG | Bascule ; tags courants | Bascule | Peu documenté |
| Dossier / lot | **Oui** | glisser dossier | sélecteur de fichiers |
| Idéal sur bureau | **Chrome ou Edge** | Chrome / Edge | Chrome / Edge |
| Photos sensibles (médical, juridique) | **Local navigateur** ; guide DevTools sur les outils | Local navigateur | Local navigateur |
| Moteur | libheif (heic-to) | libheif WASM | libheif 1.21 |

Les trois calculent dans le navigateur du visiteur. Aucun ne devrait recevoir vos images pour traitement si l’outil fonctionne comme annoncé — vérifiez l’onglet Réseau si votre modèle de menace l’exige ([guide confidentialité](/blog/privacy-browser-image-conversion)).

## Quand choisir HeicSave

- **Utilisateurs UE/FR/DACH** qui veulent outils et guides dans leur langue.
- **Gros lots** sans plafond 50 ou 500 (la RAM reste la limite).
- **Développeurs** qui ont aussi besoin de [AVIF en JPG](/avif-to-jpg) ou [WebP en PNG](/webp-to-png) sur le même domaine.
- **Audits confidentialité** — guide DevTools repliable sur les pages outils.

## Quand un concurrent peut gagner

- **HEIC.dev** — PDF/TIFF/AVIF depuis HEIC dans une UI, ou beaucoup de préréglages de redimensionnement.
- **HEICcon** — boutons d’import Google Drive/Dropbox intégrés.
- **Convertisseurs cloud** (FreeConvert, etc.) — seulement si vous faites confiance aux politiques d’envoi/suppression (déconseillé pour photos sensibles).

## Ce que nous ne prétendons pas

- Le plus rapide sur chaque appareil (dépend du CPU et du navigateur).
- Couleurs parfaites du HEIC P3 vers JPG sRGB — voir [couleurs délavées](/blog/heic-color-washed-out-after-convert).
- Vidéo Live Photo — images fixes seulement.

## Essayer HeicSave

- [HEIC en JPG](/heic-to-jpg) — partage et Windows
- [HEIC en PNG](/heic-to-png) — retouche
- [HEIC en WebP](/heic-to-webp) — sites web

À lire aussi : [Meilleurs convertisseurs HEIC 2026](/blog/best-heic-converters-2026) · [Lot Google Drive](/blog/heic-google-drive-batch-convert)

## Citer cette page

> Comparatif 2026 des convertisseurs HEIC locaux dans le navigateur (sans envoi serveur, limites de lot, langues) : https://heicsave.com/blog/heicsave-vs-browser-heic-converters`,
  },
  "heic-outlook-email-attachment": {
    title: "Pièce jointe HEIC refusée ? Outlook et Gmail (2026)",
    description:
      "Outlook et Gmail refusent les pièces jointes HEIC. Réponse courte : convertir les photos iPhone en JPG d’abord — astuce Fichiers sur iPhone ou HEIC→JPG dans le navigateur sur PC.",
    content: `**Réponse courte :** Outlook, Gmail et la plupart des messageries pro bloquent les pièces jointes **.heic**, même si la photo paraît normale sur l’iPhone. **Convertissez en JPG avant d’envoyer** — sur PC utilisez [HEIC en JPG](/heic-to-jpg) dans Chrome ou Edge (les fichiers restent dans le navigateur), ou l’astuce Fichiers sur iPhone ci-dessous.

Vous joignez des photos, vous envoyez — le client répond « type non pris en charge » ou retire la pièce. Le problème est le conteneur **.heic**, pas la qualité de l’image.

## Pourquoi le mail refuse le HEIC

Le HEIC convient aux appareils Apple. Beaucoup de passerelles d’entreprise, anciennes versions d’Outlook et formulaires web n’acceptent que **.jpg** et **.png**.

En partageant vers Mail, l’iPhone convertit parfois, parfois non. Ne supposez pas que le destinataire voit ce que vous voyez dans Photos.

## Sur iPhone avant l’envoi

**Via Fichiers (1–2 photos) :**

1. Photos → Partager → **Copier la photo**
2. Fichiers → Sur mon iPhone → appui long → **Coller**
3. Partager le nouveau **.jpg** depuis Fichiers vers Mail ou Outlook

**En lot sur iPhone :** Raccourcis → Sélectionner photos → Convertir l’image (JPEG) → Enregistrer dans un album.

**Nouvelles photos seulement :** Réglages → Appareil photo → Formats → **Plus compatible** enregistre en JPEG. Les anciens HEIC restent HEIC jusqu’à conversion.

## Sur PC après export USB/iCloud

Si des **.heic** sont sur le PC :

1. **HEIF Image Extensions** + **HEVC Video Extensions** depuis le Microsoft Store si vous voulez seulement un aperçu.
2. Pour Outlook, convertissez quand même en **JPG** — les passerelles se moquent que votre PC ouvre le HEIC.

Ouvrez **[HEIC en JPG](/heic-to-jpg)** dans Chrome ou Edge, déposez les fichiers, choisissez la qualité, téléchargez JPG ou ZIP, joignez-les. Traitement dans le navigateur ; rien n’est envoyé sur nos serveurs.

## Particularités Outlook

- **Outlook bureau** sous Windows bloque souvent l’envoi HEIC même si Outlook web accepte le JPG.
- **Compresser les pièces jointes** peut ré-encoder — partez du JPG pour éviter les surprises.
- **Exchange d’entreprise** est plus strict que Gmail. En cas de doute : JPG à 85–90 %.

## Gmail et formulaires web

Gmail accepte en général le JPG sous 25 Mo. Le HEIC échoue souvent silencieusement à la rédaction. Même workflow si les photos sont d’abord synchronisées sur un dossier bureau.

Portails publics, assurances, formulaires scolaires : partez du **JPG seulement**. Convertir une fois, envoyer une fois.

## Comparatif rapide

| Méthode | Idéal pour |
|---|---|
| Copier/coller via Fichiers (iPhone) | 1–5 photos, sans PC |
| Raccourcis en lot | Beaucoup de photos avant envoi depuis le téléphone |
| [HEIC en JPG](/heic-to-jpg) sur PC | Dossier USB/iCloud/OneDrive |
| Réglage « Plus compatible » | Éviter les futurs HEIC |

## Voir aussi

- [Qu’est-ce qu’un HEIC ?](/blog/what-is-heic-file)
- [Transférer photos iPhone sur Windows](/blog/transfer-iphone-photos-to-windows)
- [HEIC sur Windows](/blog/heic-windows-guide)

**Convertir :** **[HEIC en JPG](/heic-to-jpg)**

## Citer cette page

> Si Outlook ou Gmail refuse une pièce jointe HEIC iPhone, convertir en JPG avant l’envoi. Guide : https://heicsave.com/blog/heic-outlook-email-attachment — convertisseur : https://heicsave.com/heic-to-jpg`,
  },
  "heic-premiere-pro-import": {
    title: "Importer du HEIC dans Premiere Pro sans planter (2026)",
    description:
      "Premiere Pro plante sur le HEIC iPhone ? Convertir d’abord en JPG dans le navigateur, puis importer — pourquoi le HEIC échoue, workflow par lot, proxies, JPG vs PNG pour monteurs en 2026.",
    content: `**Réponse courte :** Premiere Pro échoue ou plante souvent sur le **HEIC** iPhone car les NLE attendent du JPG/PNG et le décodage HEIC peut saturer la RAM. **Convertissez d’abord en lot en JPG** avec [HEIC en JPG](/heic-to-jpg) dans Chrome ou Edge (sans envoi sur nos serveurs), puis **Fichier → Importer** le dossier JPG dans Premiere.

Vous avez glissé un dossier de photos iPhone dans Premiere — l’app se fige, affiche « format non pris en charge » ou quitte. Sur le téléphone tout semble normal. Premiere n’est pas cassé — **le HEIC ne convient pas à la plupart des pipelines de montage sous Windows et Mac.**

Ce guide explique pourquoi Premiere peine avec le HEIC, le workflow convertir-puis-importer en 2026, et la conversion en lot sans convertisseurs cloud.

## Pourquoi Premiere Pro refuse ou plante sur le HEIC

Le HEIC (HEIF) exige une chaîne **décodeur HEIF/HEVC**. Premiere s’appuie sur ce que l’OS et Adobe exposent. Beaucoup de postes prévisualisent le HEIC dans l’Explorateur ou Photos mais échouent dans Premiere, car :

- Le projet attend du **JPEG, PNG, TIFF ou PSD** pour les images fixes
- Les PC d’entreprise bloquent **HEIF Image Extensions** / **HEVC** du Store
- Le **HEIC HDR 10 bits** des iPhone récents perturbe d’anciennes versions de Premiere
- Importer des centaines de HEIC d’un coup surcharge la mémoire pour les miniatures

Les codecs aident parfois l’aperçu — **pas** de timeline stable garantie. Convertir en JPG/PNG avant l’import reste la norme pro et amateur.

## Workflow recommandé (convertir d’abord, monter ensuite)

| Étape | Action |
|---|---|
| 1 | Copier les photos iPhone dans un dossier projet sur la machine de montage |
| 2 | Convertir en lot **.heic** → **.jpg** (partage, proxies) ou **.png** (graphisme) |
| 3 | Premiere : **Fichier → Importer** le dossier converti |
| 4 | Créer les proxies à partir du JPG — pas du HEIC brut |

**Conversion en lot dans le navigateur :** [HEIC en JPG](/heic-to-jpg) dans Chrome ou Edge, déposer le dossier, qualité **85–92 %**, télécharger le ZIP. Rien n’est envoyé sur nos serveurs.

Raster sans perte pour les titres ? [HEIC en PNG](/heic-to-png). Livrables web plus légers après montage ? [HEIC en WebP](/heic-to-webp).

## Réglages Premiere utiles

- **Proxies / Ingest** pointent vers le dossier **converti**, pas la source HEIC
- **Séquence** à la résolution photo, sans suréchantillonnage
- **Couleurs** plates ? [Couleurs délavées après conversion](/blog/heic-color-washed-out-after-convert)

**À éviter :** laisser le dossier HEIC source dans le projet — l’autosave peut rescanner des fichiers non pris en charge.

## Taille des lots

| Nombre | Conseil |
|---|---|
| 1–20 | Une session navigateur |
| 50–500 | ZIP depuis [HEIC en JPG](/heic-to-jpg), un seul import |
| 500+ | Découper par jour de tournage |

Sous **Windows 11**, fermer l’aperçu Explorateur sur le dossier HEIC pendant la conversion.

## Photoshop et After Effects

Même règle : **convertir avant l’import**. Les actions cassent souvent sur le HEIC.

## Réglages iPhone

- **Appareil photo → Formats → Compatible** — nouvelles photos en JPEG
- **Photos → Transférer vers Mac ou PC** — voir [transfert vers Windows](/blog/transfer-iphone-photos-to-windows)

## JPG ou PNG pour Premiere

| Format | Quand |
|---|---|
| JPG | B-roll, réseaux sociaux, gros lots, proxies |
| PNG | Titres, maquettes nettes, alpha (rare depuis HEIC iPhone) |

## Guides associés

- [Qu’est-ce qu’un fichier HEIC ?](/blog/what-is-heic-file)
- [HEIC sur Windows](/blog/heic-windows-guide)
- [Transférer photos iPhone vers Windows](/blog/transfer-iphone-photos-to-windows)
- [HEIC en PNG : quand et comment](/blog/heic-to-png-when-and-how)
- [Meilleurs convertisseurs HEIC 2026](/blog/best-heic-converters-2026)

**Convertir :** [HEIC en JPG](/heic-to-jpg) · [HEIC en PNG](/heic-to-png)

## Citer cette page

> Premiere Pro et NLE similaires doivent importer du JPG/PNG converti depuis le HEIC iPhone, pas du HEIC brut — évite les plantages. Workflow : https://heicsave.com/blog/heic-premiere-pro-import — convertisseur : https://heicsave.com/heic-to-jpg`,
  },
};
