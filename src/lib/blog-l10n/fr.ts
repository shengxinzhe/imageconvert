/** French overlays for high-intent blog posts (slug → fields). */
export const frBlogPosts: Record<
  string,
  { title: string; description: string; content: string }
> = {
  "convert-avif-to-jpg-windows": {
    title: "Convertir AVIF en JPG sur Windows – gratuit, sans envoi (2026)",
    description:
      "Convertir des images AVIF en JPG sur Windows 10/11 dans Chrome ou Edge : traitement par lots, réglage de qualité, ZIP. Sans installation ni envoi vers un serveur tiers.",
    content: `Vous avez téléchargé une image **.avif** — ou un site ne fournit que ce format — et Windows refuse de l’ouvrir dans Outlook, Word ou un ancien formulaire d’envoi. Le **JPG** reste le format que tout le monde accepte. Ce guide présente des méthodes fiables pour **convertir AVIF en JPG sur Windows** sans installer de codecs ni envoyer vos photos vers un convertisseur en ligne inconnu.

> **Réponse rapide :** ouvrez notre outil gratuit **[AVIF en JPG](/avif-to-jpg)** dans **Chrome ou Edge**, déposez vos fichiers, réglez la qualité JPEG, cliquez sur **Convertir**, puis téléchargez des JPG ou une archive ZIP — le tout dans le navigateur.

## Qu’est-ce que l’AVIF ?

**AVIF** (AV1 Image File Format) repose sur une compression moderne. Les sites et CDN l’utilisent pour des fichiers souvent plus légers tout en restant nets. Sous Windows, **Photos**, d’anciennes versions de **Paint** et de nombreuses applications attendent encore le **.jpg** ou le **.png** — pas le .avif.

D’où la popularité des recherches **« avif to jpg »** : le fichier s’affiche bien dans un onglet, mais bloque ailleurs sur le PC.

## Windows 10/11 ouvre-t-il l’AVIF nativement ?

La prise en charge progresse, mais reste inégale :

- Les **codecs du Microsoft Store** aident dans certaines apps — pas dans tous les flux (Outlook, CMS anciens, imprimeurs).
- **Paint** sur d’anciennes versions de Windows n’ouvre souvent pas l’AVIF.
- Les **dossiers volumineux** issus d’un CDN ou d’un export design sont pénibles à traiter un par un.

Convertir une fois en JPG est en général plus rapide que de chercher des codecs sur chaque machine.

## Méthode 1 : conversion dans le navigateur (recommandée — sans envoi)

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

**Prêt ?** Ouvrez **[AVIF en JPG](/avif-to-jpg)** et convertissez votre premier fichier en moins d’une minute.`,
  },
  "transfer-iphone-photos-to-windows": {
    title: "Transférer les photos iPhone sur un PC Windows – guide 2026",
    description:
      "Copier les photos iPhone sur Windows sans blocage HEIC : USB, iCloud pour Windows et conversion HEIC→JPG locale dans le navigateur.",
    content: `Transférer des photos d’un iPhone vers un PC Windows devrait être simple — mais le format **HEIC** d’Apple interrompt souvent le parcours. Voici ce qui fonctionne en 2026.

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

Pour un parcours dédié Windows : [Ouvrir et convertir HEIC sur Windows](/blog/heic-windows-guide).`,
  },
};
