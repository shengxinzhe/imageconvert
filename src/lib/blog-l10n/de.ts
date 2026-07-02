/** German overlays for high-intent blog posts (slug → fields). */
export const deBlogPosts: Record<
  string,
  { title: string; description: string; content: string }
> = {
  "what-is-heic-file": {
    title: "Was ist eine HEIC-Datei? Kompletter Ratgeber (2026)",
    description:
      "Erfahren Sie, was HEIC ist, warum iPhones es nutzen und wie Sie HEIC unter Windows und Mac öffnen oder konvertieren — kostenlos im Browser, ohne Upload.",
    content: `*Zuletzt aktualisiert: 15. Juni 2026*

**HEIC** (High Efficiency Image Container) ist Apples Standard-Fotoformat auf modernen iPhones. Dank effizienter Kompression braucht es oft nur etwa halb so viel Speicher wie JPEG bei ähnlicher Bildqualität.

Eine **.heic** unter Windows, abgelehnte E-Mail-Anhänge oder kaputte Vorschaubilder in Google Drive? Millionen iPhone-Nutzer kennen das. Wenn Outlook oder Gmail den Anhang ablehnt, starten Sie mit unserem [HEIC-E-Mail-Anhang-Ratgeber](/blog/heic-outlook-email-attachment). Öffnet **Photoshop** Ihre iPhone-Standbilder nicht, siehe [HEIC lässt sich in Photoshop nicht öffnen](/blog/heic-wont-open-in-photoshop). Stürzt Premiere Pro beim Import ab: [HEIC in Premiere Pro](/blog/heic-premiere-pro-import).

## Warum nutzt Apple HEIC?

Speicher auf dem Handy ist knapp. HEIC hält mehr Fotos auf dem Gerät und in iCloud, oft mit gutem Detail. Seit iOS 11 setzt Apple darauf. Der Preis: Kompatibilität außerhalb des Apple-Ökosystems.

## HEIC vs. HEIF (dieselbe Familie)

Sie sehen **.heic**, **.heif** oder **.HEIC**. Für iPhone-Standfotos praktisch dasselbe. Unser [HEIC in JPG](/heic-to-jpg)-Tool akzeptiert gängige Varianten.

## HEIC vs. AVIF (verschiedene Formate)

**AVIF** ist ein Web-Bildformat (AV1-basiert), nicht Apples iPhone-Standard. Firefox und Chrome zeigen AVIF im Browser; der Windows-Explorer zeigt oft **leere Miniaturen**, obwohl Paint die Datei öffnet. Geht es um **.avif**-Vorschau, nicht **.heic**: [AVIF-Miniaturen fehlen im Explorer](/blog/avif-thumbnails-not-showing-windows-explorer) und [AVIF in JPG unter Windows](/blog/convert-avif-to-jpg-windows).

## Kann Windows HEIC öffnen?

Windows 10 und **Windows 11** öffnen HEIC **nach** optionalen Codecs aus dem Microsoft Store (HEIF Image Extensions, manchmal HEVC). Viele konvertieren lieber zu JPG – besonders auf Firmen-PCs ohne Admin-Rechte. Unter Windows 11 24H2 zeigt Fotos manchmal HEIC-Vorschau, während Adobe-Apps trotzdem scheitern – Codecs helfen dem Viewer, nicht jedem Editor.

Ausführlich: [HEIC unter Windows öffnen und konvertieren](/blog/heic-windows-guide).

## HEIC in Adobe und Videobearbeitung

Premiere Pro, After Effects, **Photoshop** und ältere Creative-Cloud-Builds erwarten **JPEG oder PNG** für Standbilder. Ein Ordner voller iPhone-**.heic** führt oft zu Hängern, „Format nicht unterstützt“ oder Absturz — stabiler HEIF-Decoder fehlt auf dem System.

**Photoshop-spezifisch:** Selbst wenn Camera Raw HEIC zeigt, scheitern **Datei → Öffnen**, Actions und Stapel-Skripte oft. Zuerst in JPG/PNG konvertieren — Anleitung: [HEIC lässt sich in Photoshop nicht öffnen](/blog/heic-wont-open-in-photoshop).

Für Premiere: Stapel mit [HEIC in JPG](/heic-to-jpg) oder [HEIC in PNG](/heic-to-png) auf dem PC, dann importieren. Abstürze und Proxies: [HEIC in Premiere Pro ohne Absturz](/blog/heic-premiere-pro-import).

## HEIC konvertieren (ohne Upload)

Browser-Konverter, die lokal arbeiten. Mit [HEIC in JPG](/heic-to-jpg) können Sie:

- **Viele Dateien in einer Sitzung** konvertieren (kein festes Stapel-Limit)
- **JPEG-Qualität** per Regler vor dem Export einstellen
- Einzeln oder als **ZIP** herunterladen
- Gängige **EXIF**-Daten (Datum, Kameramodell) ins JPG übernehmen, wenn möglich

Nichts wird auf unsere Server hochgeladen. Für Transparenz oder Bearbeitung: [HEIC in PNG](/heic-to-png). Für kleinere Web-Uploads danach: [HEIC in WebP](/heic-to-webp).

## E-Mail und Outlook mögen HEIC oft nicht

Firmen-Mail, Gmail und Outlook blockieren **.heic** oft, obwohl das Foto auf dem iPhone normal aussieht. Fast immer hilft: vor dem Anhängen in JPG umwandeln oder iPhone-Transfer so einstellen, dass der PC per USB JPEGs bekommt. Schritt für Schritt: [HEIC-Anhang abgelehnt](/blog/heic-outlook-email-attachment).

## iOS 18 und iPhone-Transfer 2026

**iOS 18** hat HEIC nicht als Standard-Kameraformat abgelöst. Per USB kommt weiterhin HEIC, außer Sie wählen **Kompatibel** (Einstellungen → Kamera → Formate) oder Fotos → An Mac oder PC soll JPEGs liefern, wenn iOS meint, der PC kann kein HEIC – auf Windows 11 nach Treiber-Updates oft unzuverlässig.

Für Schnitt und Druck: nach dem Transfer konvertieren. Für E-Mail: vor dem Anhängen ([Outlook & Gmail](/blog/heic-outlook-email-attachment)).

## HEIC-Fehlerbehebung 2026

| Symptom | Ursache | Lösung |
|---|---|---|
| Fotos öffnet HEIC, Premiere nicht | Viewer-Codec ≠ Editor | [JPG/PNG konvertieren](/heic-to-jpg), dann [Premiere-Ratgeber](/blog/heic-premiere-pro-import) |
| Graue Miniaturen im Explorer | HEIF-Erweiterung fehlt | HEIF aus Microsoft Store oder Stapel-Konvertierung |
| Farben nach Konvertierung blass | Profil / Qualität zu niedrig | [Farben ausgewaschen](/blog/heic-color-washed-out-after-convert) |
| USB-Kopie nur .heic | „Automatisch“ falsch geraten | [iPhone-Fotos auf Windows](/blog/transfer-iphone-photos-to-windows) |
| Live Photo nur als Still | .mov getrennt | [Live-Photo-Ratgeber](/blog/heic-live-photo-guide) |

## Typische Situationen 2026

| Situation | Vorgehen |
|---|---|
| E-Mail-Anhang abgelehnt | [Zuerst in JPG konvertieren](/blog/heic-outlook-email-attachment) |
| Premiere / Photoshop-Import abstürzt | [HEIC → JPG vor Timeline](/blog/heic-premiere-pro-import) · [Photoshop-Fix](/blog/heic-wont-open-in-photoshop) |
| Google-Drive-Ordner voller HEIC | ZIP laden → stapelweise konvertieren → JPGs hochladen ([Ratgeber](/blog/heic-google-drive-batch-convert)) |
| iPhone → Windows per USB, trotzdem HEIC | Normal; nach dem Kopieren konvertieren ([Transfer-Ratgeber](/blog/transfer-iphone-photos-to-windows)) |
| Verlustfreies Raster nötig | [HEIC in PNG](/heic-to-png) |
| Live Photo (.heic + .mov) | Nur die **.heic**-Stilldatei ([Live-Photo-Ratgeber](/blog/heic-live-photo-guide)) |

## HEIC vs. JPG

| | HEIC | JPG |
|---|---|---|
| Größe | Kleiner | Größer |
| Kompatibilität | Apple zuerst | Überall |
| Am besten für | iPhone-Speicher | Teilen überall |
| Druckerei / Behörden | Oft abgelehnt | Akzeptiert |

Für Familien-E-Mail oder Legacy-Portale bleibt JPG die sichere Wahl.

## Hunderte HEIC-Dateien stapelweise konvertieren

Für Alben, Google-Drive-Exporte oder Hochzeitsordner: [HEIC in JPG](/heic-to-jpg) öffnen, viele Dateien auf einmal ablegen, JPEG-Qualität wählen, **ZIP** laden. Konvertierung bleibt im Browser — praktisch, wenn die IT Store-Codecs auf dem Firmen-Laptop blockiert. Drive-Workflow: [Stapel aus Google Drive](/blog/heic-google-drive-batch-convert).

## Verwandte Ratgeber

- [HEIC in Premiere Pro](/blog/heic-premiere-pro-import)
- [HEIC lässt sich in Photoshop nicht öffnen](/blog/heic-wont-open-in-photoshop)
- [Warum das iPhone HEIC nutzt](/blog/why-iphone-uses-heic)
- [HEIC vs. JPG im Vergleich](/blog/heic-vs-jpg)
- [iPhone-Fotos auf Windows übertragen](/blog/transfer-iphone-photos-to-windows)
- [HEIC-E-Mail-Anhang abgelehnt](/blog/heic-outlook-email-attachment)
- [HEIC unter Windows](/blog/heic-windows-guide)
- [Beste HEIC-Konverter 2026](/blog/best-heic-converters-2026)

**Jetzt konvertieren:** [HEIC in JPG](/heic-to-jpg) · [HEIC in PNG](/heic-to-png)`,
  },
  "why-iphone-uses-heic": {
    title: "Warum das iPhone HEIC statt JPG nutzt",
    description:
      "Apple setzt auf HEIC wegen Speichereffizienz. Was das für Teilen und Kompatibilität bedeutet.",
    content: `*Zuletzt aktualisiert: 25. Mai 2026*

Seit iOS 11 speichert die iPhone-Kamera Fotos standardmäßig als HEIC. Apple wollte Effizienz: mehr Fotos auf dem Gerät, weniger iCloud-Traffic.

## Das Teilen-Problem

Empfänger unter Windows oder auf älteren Android-Geräten öffnen HEIC oft nur mit Zusatzsoftware. E-Mail, Schulportale und Druckereien erwarten weiterhin JPG. Deshalb sind Konverter so gefragt.

## „An Mac oder PC übertragen“: Automatisch vs. Kompatibel

**Einstellungen → Fotos → An Mac oder PC übertragen** steuert, was per USB vom iPhone kommt:

- **Automatisch** — iOS wandelt nur in JPG um, **wenn** es meint, der PC kann kein HEIC. Treiber- und Codec-Änderungen unter Windows verwirren das; oft landen trotzdem HEIC-Dateien auf dem PC.
- **Originale behalten** — immer HEIC.

Liefert Windows weiter HEIC trotz Automatisch: nach dem Kopieren konvertieren oder Kameraformat umstellen (unten).

## Auf dem iPhone auf JPG umstellen (nur neue Fotos)

**Einstellungen → Kamera → Formate → Kompatibel** erzwingt JPEG für neue Aufnahmen. Bestehende HEIC-Dateien müssen Sie separat konvertieren.

## Bestehende HEIC umwandeln

Unser kostenloser [HEIC-in-JPG-Konverter](/heic-to-jpg): privat, im Browser, ohne Konto, ohne Wasserzeichen. Mehrere Fotos hinzufügen, JPEG-Qualität wählen, bei ganzen Alben als ZIP laden.

Windows-Schritte nach USB-Kopie: [iPhone-Fotos auf Windows übertragen](/blog/transfer-iphone-photos-to-windows).`,
  },
  "heic-vs-jpg": {
    title: "HEIC vs. JPG: Qualität, Größe und wann welches Format",
    description:
      "HEIC und JPG 2026 vergleichen: Qualität, Dateigröße und Kompatibilität—wann HEIC auf dem iPhone behalten und wann für Windows, E-Mail und Druck in JPG konvertieren.",
    content: `*Zuletzt aktualisiert: 25. Mai 2026*

Beide Formate speichern Fotos, zielen aber auf verschiedene Ziele. Das falsche Format kostet Zeit, wenn ein Portal den Upload ablehnt oder Windows leere Vorschaubilder zeigt.

## Dateigröße

HEIC gewinnt bei gleicher wahrgenommener Qualität oft — häufig etwa halb so groß wie JPG. Deshalb nutzt das iPhone es standardmäßig.

## Kompatibilität

JPG funktioniert überall: E-Mail, Druckerei, Behördenportale, 20 Jahre alte Software. HEIC braucht moderne Unterstützung oder einen Konvertierungsschritt.

## HEIC behalten vs. in JPG konvertieren

| Ziel | Format |
|---|---|
| iPhone-Speicher maximieren | HEIC auf dem Handy |
| E-Mail an beliebige Empfänger | JPG |
| Upload in altes Webformular | JPG |
| Langzeitarchiv auf Windows-HDD | JPG (oder PNG verlustfrei) |
| Bearbeitung in Photoshop ohne Codecs | Zuerst konvertieren |

## Wann PNG statt JPG?

[HEIC in PNG](/heic-to-png), wenn Sie verlustfreies Raster, Transparenz aus bearbeiteten Exporten brauchen oder JPEG-Artefakte vor weiterer Bearbeitung vermeiden wollen. PNG ist größer; zum Teilen eher JPG.

Mehr: [HEIC in PNG: wann und wie](/blog/heic-to-png-when-and-how).

## Qualität bei der Konvertierung

Bei hoher JPEG-Qualität sehen beide exzellent aus. Bei [HeicSave](/heic-to-jpg) stellen Sie den Regler ein (Standard 90 %). Gängige EXIF-Tags übernehmen wir ins JPG; GPS und seltene Felder können fehlen.

## Empfehlung

- **HEIC behalten** auf dem iPhone für Speicher.
- **In JPG konvertieren**, wenn Sie außerhalb von Apple teilen.
- [HEIC in PNG](/heic-to-png) für verlustfreie Bearbeitungs-Workflows.`,
  },
  "heic-windows-guide": {
    title: "HEIC unter Windows öffnen und konvertieren (Ratgeber 2026)",
    description:
      "Schritt für Schritt: HEIC unter Windows 10/11 ohne Codecs öffnen oder online in JPG konvertieren.",
    content: `*Zuletzt aktualisiert: 25. Mai 2026*

Windows-Nutzer bekommen täglich HEIC-Dateien von iPhone-Besitzern — per USB, iCloud oder ZIP aus Google Drive.

## Option 1: HEIC-Codecs installieren (Admin evtl. nötig)

Im Microsoft Store: **HEIF Image Extensions** (oft gratis) und manchmal **HEVC Video Extensions** (auf manchen PCs kostenpflichtig). Danach öffnet Fotos HEIC, der Explorer zeigt Vorschaubilder.

Schnell per winget (PowerShell):

\`\`\`
winget install Microsoft.HEIFImageExtension
\`\`\`

**Grenzen:** gesperrte Firmen-PCs, fehlendes HEVC für manche Farbprofile, Stapel-Workflows bleiben umständlicher als einmalig JPG.

## Option 2: Im Browser konvertieren (ohne Installation)

1. [HEIC in JPG](/heic-to-jpg) in **Chrome oder Edge** öffnen (beste HEIC-Dekodierung unter Windows).
2. .heic-Dateien in die Ablagezone ziehen — oder **Dateien durchsuchen**.
3. **JPEG-Qualität** einstellen für kleinere oder schärfere Dateien.
4. **Konvertieren**, dann einzelne JPGs oder **Alles als ZIP** laden.

Konvertierung läuft im Browser. Kein Server-Upload.

### Browser-lokal vs. zufällige Upload-Seiten

| | HeicSave (browser-lokal) | Cloud-Uploader |
|---|---|---|
| Datenschutz | Dateien bleiben auf dem PC | Upload an Dritte |
| Stapel + ZIP | Ja | Oft begrenzt |
| Admin-Rechte | Nicht nötig | Nicht nötig |
| Konto | Keines | Oft Pflicht |

## Option 3: Fotos-App einzeln

Mit installierten Codecs: in **Fotos → ⋯ → Speichern unter → JPEG**. Für wenige Dateien OK; für Urlaubsordner mühsam.

## Tipps für Stapelverarbeitung

Bei HeicSave gibt es kein festes „5 Dateien“- oder „10 MB“-Limit. Sehr große Ordner können den PC bremsen; bei Problemen in Gruppen von 50–100 konvertieren. HeicSave warnt, wenn Stapel oder Dateigröße für Ihr Gerät heavy wirken.

Google Drive: [HEIC aus Google Drive stapelweise konvertieren](/blog/heic-google-drive-batch-convert).

## Fehlerbehebung (2026)

| Problem | Was versuchen |
|---|---|
| Fotos-App lädt ewig | Codecs fehlen; Browser-Konvertierung |
| E-Mail hängt HEIC nicht an | Zuerst in JPG konvertieren |
| Leere Vorschaubilder im Explorer | HEIF-Erweiterung oder konvertieren |
| USB-Kopie liefert HEIC | Normal; [Transfer-Ratgeber](/blog/transfer-iphone-photos-to-windows) |
| Konvertierung schlägt fehl | Chrome/Edge; .heic prüfen, nicht .mov Live-Photo-Video |
| Transparenz / verlustfrei | [HEIC in PNG](/heic-to-png) |

## Verwandte Ratgeber

- [iPhone-Fotos auf Windows übertragen](/blog/transfer-iphone-photos-to-windows)
- [Was ist eine HEIC-Datei?](/blog/what-is-heic-file)
- [HEIC in PNG, wenn nötig](/blog/heic-to-png-when-and-how)`,
  },
  "heic-mac-guide": {
    title: "HEIC in JPG auf dem Mac: Vorschau vs. Online-Tools",
    description:
      "Vorschau für Einzelbilder oder kostenloser Online-Stapel-Konverter für Tempo.",
    content: `Der Mac öffnet HEIC nativ in Vorschau und Fotos.

## Methode Vorschau

1. HEIC in Vorschau öffnen.
2. Ablage → Exportieren.
3. JPEG wählen, Qualität setzen, speichern.

Für ein Bild OK; für Dutzende langsam.

## Online-Stapel-Tool

[HEIC in JPG](/heic-to-jpg) in Safari oder Chrome:

- Viele Dateien auf einmal ablegen
- JPEG-Qualität am Regler
- **ZIP** mit allen JPGs laden
- EXIF (Aufnahmedatum, Kamera) wird wenn möglich übernommen

## Datenschutz

Browser-Tools mit lokaler Verarbeitung senden Fotos nicht an fremde Server. Praktisch für Kundenarbeit unter NDA.`,
  },
  "best-heic-converters-2026": {
    title: "Beste HEIC-Konverter 2026 (kostenlos & privat)",
    description:
      "Desktop-Apps, Cloud-Uploads und browser-lokale HEIC-Konverter im Vergleich.",
    content: `*Zuletzt aktualisiert: 25. Mai 2026*

HEIC-Konverter nach Datenschutz, Stapelgröße und Installationsmöglichkeit wählen. Das nutzen Leute 2026 wirklich.

## Browser-lokal (empfohlen)

**HeicSave** — [HEIC in JPG](/heic-to-jpg):

- Kein Upload; Dateien bleiben im Browser
- Kein Konto, kein Wasserzeichen, kostenlos
- **Kein festes** Datei- oder 10-MB-Limit (praktisch: Gerätespeicher)
- Stapel + **ZIP-Download**
- **JPEG-Qualitätsregler**
- **EXIF** ins JPG, wenn unterstützt

Außerdem: [HEIC in PNG](/heic-to-png), [WebP](/webp-to-jpg) und [AVIF](/avif-to-jpg).

**Am besten für:** Windows ohne Admin-Rechte, sensible Fotos, schnelle Stapel aus Google Drive oder USB.

## Desktop (Offline-Installation)

- **iMazing HEIC Converter** — gratis Mac/Windows, offline, klare Stapel.
- **XnConvert** — Power-User, Skripte, viele Formate.
- **IrfanView + Plugins** — schlanker Viewer mit Stapel-Export.

**Am besten für:** wiederkehrende Offline-Workflows, IT-Automatisierung, air-gapped Rechner.

## Cloud-Upload (Vorsicht)

Seiten, die Fotos auf Server laden, können Datenschutz bei medizinischen oder rechtlichen Bildern verletzen. Richtlinie lesen, bevor Sie Kunden- oder Familienfotos hochladen.

**Nur**, wenn Sie Betreiber und Policy ausdrücklich vertrauen.

## Windows-Codec-Weg

HEIF/HEVC aus dem Microsoft Store — Fotos öffnet HEIC nativ. Ansehen ja; Stapel-Export nach JPG bleibt mühsam vs. Browser-Stapel + ZIP.

## Szenario-Auswahl

| Sie brauchen… | Zuerst probieren |
|---|---|
| 50+ iPhone-Fotos unter Windows, ohne Install | [HEIC in JPG](/heic-to-jpg) in Chrome/Edge |
| Google-Drive-Ordner mit HEIC | [Drive-Stapel-Ratgeber](/blog/heic-google-drive-batch-convert) |
| Verlustfreie Bearbeitung | [HEIC in PNG](/heic-to-png) |
| AVIF vom CDN unter Windows | [AVIF in JPG](/avif-to-jpg) + [Windows-Ratgeber](/blog/convert-avif-to-jpg-windows) |
| WebP-Assets für E-Mail | [WebP in JPG](/webp-to-jpg) + [Windows-Ratgeber](/blog/convert-webp-to-jpg-windows) |

## Unser Tipp

Für schnelle private Konvertierung ohne Installation: browser-lokal zuerst. Desktop-Apps, wenn Sie wöchentlich skriptierte Offline-Automatisierung brauchen.`,
  },
  "avif-explained": {
    title: "AVIF erklärt: Das Bildformat der nächsten Web-Generation",
    description:
      "AVIF-Grundlagen, Browser-Unterstützung und wann Sie in JPG oder PNG konvertieren—für E-Mail, Design-Tools und ältere Windows-Apps, die .avif nicht öffnen.",
    content: `AVIF basiert auf AV1-Videokompression und liefert starke Qualität bei kleinen Dateien.

## Wer nutzt AVIF?

CDNs, WordPress-Plugins und performance-orientierte Sites liefern AVIF mit JPG-Fallback.

## Browser-Unterstützung

Große Browser dekodieren AVIF im Tab. Desktop-Apps oft nicht — daher Nachfrage nach [AVIF in JPG](/avif-to-jpg). Chrome oder Edge für zuverlässigste Browser-Konvertierung.

## Konvertieren wenn nötig

- **[AVIF in JPG](/avif-to-jpg)** für universelles Teilen — JPEG-Qualität am Regler.
- **[AVIF in PNG](/avif-to-png)** für Design-Pipelines.

Stapel und ZIP wie bei HEIC: mehrere Dateien, gemeinsam laden wenn nötig.

## Zukunft

AVIF-Unterstützung auf Desktops bleibt uneinheitlich. Konverter füllen dieselbe Lücke wie HEIC-Tools.

Unter Windows? [AVIF in JPG unter Windows](/blog/convert-avif-to-jpg-windows). Zeigt der Explorer leere AVIF-Symbole? Siehe [AVIF-Miniaturen fehlen](/blog/avif-thumbnails-not-showing-windows-explorer).`,
  },
  "webp-vs-jpg": {
    title: "WebP vs. JPG: Welches Format 2026?",
    description:
      "WebP vs. JPG für Websites, E-Mail und Speicher — mit kostenlosen Konverter-Tools.",
    content: `WebP ist Googles modernes Web-Bildformat; JPG der universelle Foto-Standard.

## Größe

WebP ist bei ähnlicher Qualität oft 25–35 % kleiner als JPG.

## Kompatibilität

JPG gewinnt bei E-Mail und Legacy-Apps. WebP gewinnt auf modernen Websites mit Fallback.

## Konverter-Tools

- [JPG in WebP](/jpg-to-webp) — für Ihre Site optimieren; **WebP-Qualität** am Regler (Standard 85 %).
- [WebP in JPG](/webp-to-jpg) — an jeden teilen; Stapel + ZIP.

**Schritt für Schritt unter Windows:** [WebP in JPG unter Windows](/blog/convert-webp-to-jpg-windows).

Konvertierung läuft lokal im Browser — kein Upload.

## Best Practice

WebP mit <picture> und JPG-Fallback ausliefern. Master in JPG oder RAW behalten.`,
  },
  "webp-for-developers": {
    title: "WebP für Entwickler: Enkodieren, Dekodieren, Konvertieren",
    description:
      "WebP für Frontend-Devs: PNG/JPG in beide Richtungen enkodieren und dekodieren—browser-lokal, Lighthouse-Tipps und JPG/PNG-Fallbacks für ältere Clients.",
    content: `Entwickler setzen WebP für Lighthouse-Scores und Bandbreite ein.

## Lokal enkodieren

Vor CI: [PNG in WebP](/png-to-webp) oder [JPG in WebP](/jpg-to-webp) für Marketing-Assets. Qualität in der UI, kein festes Dateigrößen-Gate.

## Für Stakeholder dekodieren

[WebP in PNG](/webp-to-png), wenn Design PNG in Figma-Handoffs braucht. [WebP in JPG](/webp-to-jpg) für E-Mail-Anhänge.

## Canvas-API

Moderne Browser enkodieren WebP via canvas.toBlob — unser Tool wrappt das clientseitig, wie in Produktion.

## Fallbacks nicht vergessen

Immer JPG/PNG-Fallback für E-Mail-Clients und alte Browser mitliefern.`,
  },
  "heic-live-photo-guide": {
    title: "iPhone Live Photos und HEIC: JPG-Standbilder exportieren",
    description:
      "Live-Photo-HEIC, .mov-Verwechslung und JPG-Export unter Windows und Mac.",
    content: `Live Photos speichern wenige Sekunden Bewegung um ein Standbild. Auf der Festplatte oft **zwei Dateien**: .heic (oder .jpg) plus **.mov**. Das verwirrt Windows-Nutzer und bricht Stapel-Konvertierung, wenn Sie die falsche Datei wählen.

## Was ist ein Live Photo?

Mit Live Photos an (**Einstellungen → Kamera → Live Photos**) speichert jede Aufnahme:

- Ein **Standbild** (HEIC standardmäßig auf modernen iPhones)
- Ein kurzer **Video-Clip** (.mov) für den Live-Effekt

In Fotos eine Kachel; auf dem PC manchmal zwei Dateien mit ähnlichen Namen.

## Warum Konvertierung an der falschen Datei scheitert

Browser-Konverter, auch [HEIC in JPG](/heic-to-jpg), erwarten ein **Standbild**. .mov in das HEIC-Tool → Fehler oder nutzloses Ergebnis.

**Fix:** nur die **.heic** (oder .heif)-Stilldatei wählen, nicht die .mov-Begleitdatei.

## JPG-Standbild vom iPhone (ohne PC)

1. Foto in **Fotos** öffnen.
2. **Teilen** tippen.
3. Steht **Als Video sichern**, teilen Sie den Clip — zurück und Still über Mac/PC exportieren.
4. Am Mac: Vorschau → **Ablage → Exportieren** → JPEG.

Für viele Fotos: HEIC-Stills auf den Rechner, stapelweise konvertieren.

## Live-Photo-Stills stapelweise unter Windows

1. Nur **.heic**-Dateien vom iPhone oder iCloud-Ordner kopieren.
2. [HEIC in JPG](/heic-to-jpg) in Chrome oder Edge öffnen.
3. Stills ablegen, Qualität setzen, konvertieren, ZIP laden.

.mov im selben Ordner überspringen — nicht das Foto für E-Mail oder Druck.

## Live Photos aus für einfacheres Teilen

**Kamera-App → Live-Photos-Symbol (oben)** — Aus, wenn Sie nur ein normales JPG/HEIC-Still brauchen. Weniger Doppeldateien unter Windows.

## Live Photo vs. normales HEIC

| | Live-Photo-Paar | Normales HEIC |
|---|---|---|
| Dateien | .heic + .mov | nur .heic |
| Gut für | Erinnerungen in Fotos | E-Mail, Druck, Windows |
| Mit HeicSave | nur .heic-Still | Ja |

## Datenschutz-Hinweis

Live-Photo-**Video**-Clips können Ton und Hintergrund enthalten, die Sie nicht teilen wollten. Für Uploads: **Still** HEIC→JPG und JPG vor dem Senden prüfen.

Universelle Windows-Kompatibilität? Nach Konvertierung öffnet JPG Fotos, Paint, Word und jeden Legacy-Uploader. Verlustfrei: [HEIC in PNG](/heic-to-png) nur für die Stilldatei.`,
  },
  "convert-avif-to-jpg-windows": {
    title: "AVIF in JPG unter Windows (kostenlos, ohne Upload)",
    description:
      "AVIF-Bilder unter Windows 10/11 in Chrome oder Edge in JPG konvertieren: Stapelverarbeitung, Qualitätsregler, ZIP-Download. Keine Installation, keine Uploads auf fremde Server.",
    content: `Sie haben eine **.avif**-Datei heruntergeladen (oder eine Website liefert nur noch AVIF), und Windows öffnet sie weder in der E-Mail, in Word noch in älteren Upload-Formularen. **JPG** funktioniert praktisch überall.

Öffnen Sie **[AVIF in JPG](/avif-to-jpg)** in **Chrome oder Edge**, legen Sie Ihre Dateien ab, stellen Sie die JPEG-Qualität ein und laden Sie JPGs oder ein ZIP herunter. Alles läuft im Browser; nichts wird auf unsere Server hochgeladen.

## Was ist AVIF?

**AVIF** (AV1 Image File Format) ist ein modernes Bildformat mit sehr effizienter Kompression. Websites und CDNs nutzen es, weil die Dateien oft kleiner sind und trotzdem scharf wirken. Unter Windows erwarten **Fotos**, ältere **Paint**-Versionen und viele Desktop-Programme jedoch weiterhin **.jpg** oder **.png**, nicht .avif.

Suchanfragen wie **„avif to jpg“** sind häufig, weil die Datei im Browser gut aussieht, am PC aber oft hängen bleibt.

## Unterstützt Windows 10/11 AVIF von Haus aus?

Die Unterstützung hat sich verbessert, ist aber weiterhin uneinheitlich:

- **Codecs aus dem Microsoft Store** helfen in manchen Apps – nicht aber in jedem Workflow (Outlook, ältere CMS, Druckereien).
- **Paint** auf älteren Windows-Builds öffnet AVIF häufig gar nicht.
- **Größere Ordner** von einem CDN oder Design-Export lassen sich mühsam Datei für Datei bearbeiten.

Einmal in JPG zu konvertieren ist meist schneller, als auf jedem Rechner erneut mit Codecs zu experimentieren.

## Methode 1: Im Browser konvertieren (ohne Upload)

**HeicSave** führt die Umwandlung **lokal in Ihrem Browser-Tab** aus – mit dem eingebauten Bilddecoder und der Canvas-API. Ihre Dateien werden **nicht auf unsere Server hochgeladen**.

### Schritt für Schritt unter Windows

1. **Chrome** oder **Edge** starten (beste AVIF-Unterstützung).
2. **[AVIF in JPG](/avif-to-jpg)** aufrufen.
3. Eine oder mehrere **.avif**-Dateien in die Ablagezone ziehen (oder per Klick auswählen).
4. Den **JPEG-Qualitätsregler** anpassen, wenn Sie kleinere Dateien brauchen (Standardwert ist für Teilen und E-Mail gut geeignet).
5. Auf **Konvertieren** klicken.
6. Einzelne JPGs herunterladen oder bei vielen Dateien **Alles als ZIP** wählen.

### Warum der Browser statt eines zufälligen „Online-Konverters“?

| | Im Browser (HeicSave) | Typischer Cloud-Uploader |
|---|---|---|
| Datenschutz | Dateien bleiben auf Ihrem PC | Upload auf fremde Server |
| Stapelverarbeitung | Viele Dateien + ZIP | Oft stark begrenzt |
| Konto | Nicht erforderlich | Häufig Pflicht |
| Wasserzeichen | Keines | Bei Gratis-Tarifen üblich |

Für Kundenprojekte, medizinische Unterlagen oder noch nicht veröffentlichte Marketing-Assets vermeiden Sie so Speicherung bei Dritten.

## Methode 2: Windows-Fotos oder Paint

Wenn AVIF auf Ihrem PC bereits geöffnet werden kann:

1. Bild in **Fotos** öffnen.
2. Für **viele Dateien** sind Workarounds wie **⋯ → Speichern unter** oder **Drucken → Microsoft Print to PDF** umständlich.
3. **Paint** (neuere Windows-11-Version) kann AVIF öffnen und pro Datei **Speichern unter → JPEG** anbieten.

Für **Dutzende Dateien** aus einem Download-Ordner ist Methode 1 in der Regel deutlich effizienter.

## Methode 3: Desktop-Programme (offline, Installation nötig)

- **XnConvert** – kostenlos, Stapelverarbeitung, Skripte; ideal für Power-User.
- **FFmpeg** – in der Konsole: \`ffmpeg -i input.avif output.jpg\` (schnell für IT-Teams).
- **IrfanView** mit Plugins – schlanker Viewer inklusive Stapelmodus.

Diese Tools lohnen sich bei Automatisierung; für einen einmaligen Ordner auf einem gesperrten Firmen-PC genügt oft der Browser – ohne Administratorrechte.

## JPEG-Qualität: welcher Wert am Regler?

- **90–95 %** – nahe am Original, größere JPGs; gut für Druck und Archivierung.
- **80–85 %** – ideal für E-Mail und Messenger; deutlich kleinere Dateien.
- **70 % und darunter** – nur wenn die Dateigröße wichtiger ist als feinste Details.

Bei **[AVIF in JPG](/avif-to-jpg)** stellen Sie die Qualität **vor** der Stapel-Konvertierung ein – so müssen Sie einen großen Ordner nicht zweimal bearbeiten.

## Stapelverarbeitung und ZIP-Download

Es gibt kein künstliches Limit wie „nur 5 Dateien“ – praktisch begrenzen **Arbeitsspeicher** und die Stabilität des Browser-Tabs. Tipps für große Mengen unter Windows:

- Schließen Sie speicherintensive Tabs, bevor Sie 100+ Bilder konvertieren.
- Teilen Sie den Ordner in Blöcke von 50–80 Dateien, wenn der Tab langsamer wird.
- Nutzen Sie für große Sammlungen **Chrome oder Edge am Desktop**, nicht das Handy.
- Laden Sie am Ende **ein ZIP** statt jede Datei einzeln zu speichern.

## Typische Anwendungsfälle

### Microsoft Designer / CDN-Exporte

Design-Tools und Performance-Plugins liefern mitunter **.avif**-Assets. Lehnt eine Windows-App die Datei ab, wandeln Sie zuerst in JPG um und importieren Sie danach. Bei Transparenz: **[AVIF in PNG](/avif-to-png)**.

### E-Mail und ältere Upload-Formulare

Viele Formulare akzeptieren weiterhin nur **.jpg**. Konvertieren Sie AVIF → JPG, bevor Sie anhängen.

### WordPress oder statische Websites

AVIF kann live bleiben, wenn Sie ein **picture**-Element mit JPG-Fallback nutzen. Für Redakteure und Stakeholder unter Windows lohnt sich zusätzlich ein **JPG-Master** zum Bearbeiten.

## Fehlerbehebung

| Problem | Was Sie versuchen können |
|---|---|
| Datei lässt sich nicht laden | Endung .avif prüfen; Chrome/Edge testen; bei Beschädigung erneut herunterladen |
| Farben wirken blass | AVIF oft Wide-Gamut, JPG sRGB – leichte Verschiebung ist normal |
| Stapel bricht mittendrin ab | Weniger Dateien pro Durchgang; andere Tabs schließen; RAM prüfen |
| Transparenz nötig | [AVIF in PNG](/avif-to-png) nutzen; JPG hat kein Alpha |
| Animiertes AVIF | Tool für Standbilder; zuerst ein Einzelbild exportieren |

## AVIF vs. JPG im Überblick

| | AVIF | JPG |
|---|---|---|
| Dateigröße | Meist kleiner | Größer |
| Unterstützung unter Windows | Wächst, aber uneinheitlich | Überall |
| Besonders geeignet für | Web-Auslieferung, Archive | Teilen, E-Mail, Druck |
| Transparenz | Ja (AVIF) | Nein |

## Verwandte Tools und Ratgeber

- **[AVIF in JPG](/avif-to-jpg)** – Hauptkonverter (Shortcut aus diesem Guide)
- **[AVIF in PNG](/avif-to-png)** – für Design und verlustfreie Raster
- **[WebP in JPG](/webp-to-jpg)** – ähnlicher Ablauf für .webp
- **[HEIC in JPG](/heic-to-jpg)** – iPhone-Fotos unter Windows

## Datenschutz

Die Konvertierung läuft in Ihrem Browser. Wir erhalten Ihre Bilddaten nicht zur Verarbeitung. Analytics und Werbung (falls aktiviert) sind in unserer [Datenschutzerklärung](/privacy) und im Cookie-Banner beschrieben – getrennt von Ihren Dateien.

Öffnen Sie **[AVIF in JPG](/avif-to-jpg)**.`,
  },
  "transfer-iphone-photos-to-windows": {
    title: "iPhone-Fotos auf den Windows-PC übertragen – Ratgeber 2026",
    description:
      "iPhone-Fotos auf Windows kopieren, ohne an HEIC zu scheitern: USB, iCloud für Windows und lokale HEIC-zu-JPG-Konvertierung im Browser.",
    content: `Fotos vom iPhone auf den Windows-PC zu bringen sollte einfach sein – doch Apples Standardformat **HEIC** (High Efficiency Image Container) bricht den Ablauf oft ab. Hier erfahren Sie, was 2026 zuverlässig funktioniert.

## Warum Windows mit iPhone-Fotos Probleme hat

Aktuelle iPhones speichern Standfotos standardmäßig als **HEIC**. Windows 10 und 11 öffnen .heic-Dateien nicht immer ohne Zusatzsoftware. Mögliche Symptome: leere Vorschaubilder, Fehlermeldungen in **Fotos** oder Anhänge, die sich nicht versenden lassen.

Für die meisten Windows-Programme, Drucker und Upload-Portale gilt weiterhin: **JPG**.

## Methode 1: USB-Kabel (Datei-Explorer)

1. iPhone mit Lightning- oder USB-C-Kabel verbinden.
2. Gerät entsperren und bei Aufforderung **Diesem Computer vertrauen** bestätigen.
3. **Datei-Explorer** öffnen → **Apple iPhone** → **Interner Speicher** → **DCIM**.
4. Gewünschte Ordner auf den PC kopieren.

**Wichtig:** Die kopierten Dateien sind oft noch **HEIC**. Eine Vorschau gelingt erst nach Codec-Installation oder Konvertierung.

## Methode 2: iCloud für Windows

Installieren Sie **iCloud für Windows**, melden Sie sich an und aktivieren Sie **Fotos**. Neue Aufnahmen vom iPhone erscheinen im iCloud-Fotos-Ordner auf dem PC.

**Wichtig:** Die Synchronisation kann bei langsamer Verbindung dauern. Das HEIC-Thema bleibt bestehen, solange die iPhone-Kamera nicht auf **Kompatibel** (JPEG) umgestellt ist.

## Methode 3: HEIC in JPG im Browser (ohne Installation)

Wenn die HEIC-Dateien bereits auf dem PC liegen – etwa nach USB-Kopie, AirDrop auf den Mac und Weitergabe per Stick – konvertieren Sie lokal:

1. **[HEIC in JPG](/heic-to-jpg)** in **Chrome oder Edge** öffnen.
2. Ihre .heic-Dateien in die Ablagezone ziehen.
3. Bei Bedarf die **JPEG-Qualität** anpassen (Standard: 90 %).
4. Auf **Konvertieren** klicken und einzelne JPGs oder **Alles als ZIP** herunterladen.

Die Verarbeitung erfolgt **in Ihrem Browser**. Nichts wird auf unsere Server hochgeladen – sinnvoll für private, medizinische oder Kundenfotos.

## Methode 4: Ab jetzt direkt JPG auf dem iPhone

Unter **Einstellungen → Kamera → Formate → Kompatibel** speichert das iPhone neue Fotos als JPEG. Bereits vorhandene HEIC-Dateien müssen Sie dennoch einmal umwandeln.

## Tipps für große Alben

Bei HeicSave gibt es kein festes Dateilimit – Grenzen setzen **Arbeitsspeicher** und die Stabilität des Tabs. Für Hunderte Urlaubsfotos:

- In Gruppen von 50–100 konvertieren, wenn der Tab langsamer wird.
- Vor großen Stapeln speicherintensive Browser-Tabs schließen.
- Für sehr große Ordner **Chrome oder Edge am Desktop** statt mobilem Safari nutzen.

## HEIC vs. JPG nach dem Transfer

| Ziel | Empfohlenes Format |
|---|---|
| Speicher auf dem iPhone sparen | HEIC auf dem Telefon |
| Unter Windows ohne Codecs öffnen | JPG auf dem PC |
| Druckerei oder Behördenportal | JPG |
| Maximale Bearbeitungsfreiheit | Zuerst [HEIC in PNG](/heic-to-png), dann weiterbearbeiten |

## Fehlerbehebung

- **PC erkennt das iPhone nicht** – anderes Kabel testen, Telefon entsperrt lassen; auf älteren Windows-Versionen ggf. Apple-Mobile-Device-Unterstützung bzw. iTunes-Komponenten neu installieren.
- **Foto falsch gedreht** – EXIF-Ausrichtung wird bei unterstützten Dateien ins JPG übernommen; bei Bedarf auf dem Mac erneut aus Fotos exportieren.
- **Live Photo (.heic + .mov)** – nur die **.heic**-Stilldatei konvertieren; Details im [Live-Photo-Ratgeber](/blog/heic-live-photo-guide).

Ausführlich nur für Windows: [HEIC unter Windows öffnen und konvertieren](/blog/heic-windows-guide). Für Google-Drive-Alben: [HEIC aus Google Drive stapelweise konvertieren](/blog/heic-google-drive-batch-convert).`,
  },
  "convert-webp-to-jpg-windows": {
    title: "WebP in JPG unter Windows (kostenlos, ohne Upload)",
    description:
      "WebP-Bilder unter Windows 10/11 in Chrome oder Edge in JPG konvertieren: Stapelverarbeitung, Qualitätsregler, ZIP-Download. Keine Installation, kein Server-Upload.",
    content: `Sie haben eine **.webp** von einer Website, aus Slack oder einem Design-Export gespeichert, und Windows öffnet sie weder in Word noch in Outlook noch in älteren Upload-Formularen. **JPG** funktioniert praktisch überall.

Öffnen Sie **[WebP in JPG](/webp-to-jpg)** in **Chrome oder Edge**, legen Sie Ihre Dateien ab, stellen Sie die JPEG-Qualität ein und laden Sie JPGs oder ein ZIP herunter. Alles läuft im Browser; nichts wird hochgeladen.

## Was ist WebP?

**WebP** ist Googles modernes Bildformat fürs Web. Es ist oft 25–35 % kleiner als JPG bei ähnlicher Qualität. Browser decodieren WebP nativ; viele **Desktop-Apps unter Windows** tun das noch nicht.

Suchanfragen wie **„webp to jpg“** sind häufig, weil die Datei im Browser funktioniert, in E-Mail-Anhängen und Legacy-CMS oft nicht.

## Unterstützt Windows 10/11 WebP nativ?

Nur teilweise:

- **Moderne Browser** zeigen WebP problemlos.
- **Paint** auf neueren Windows-11-Builds kann WebP öffnen und als JPEG speichern – pro Datei.
- **Fotos**, **Word** und viele Formulare erwarten weiterhin **.jpg**.

Für einen **Ordner voller WebP-Assets** skaliert die Browser-Konvertierung besser als Datei für Datei.

## Methode 1: Konvertierung im Browser (empfohlen)

**HeicSave** wandelt **lokal im Tab** um – mit Browser-Decoder und Canvas. Ihre Dateien werden **nicht auf unsere Server hochgeladen**.

### Schritte unter Windows

1. **Chrome** oder **Edge** öffnen.
2. **[WebP in JPG](/webp-to-jpg)** aufrufen.
3. Eine oder mehrere **.webp**-Dateien in die Ablagezone ziehen.
4. Den **JPEG-Qualitätsregler** anpassen.
5. Auf **Konvertieren** klicken.
6. Einzelne JPGs oder **Alles als ZIP** herunterladen.

### Warum browser-lokal?

| | Im Browser (HeicSave) | Typischer Cloud-Uploader |
|---|---|---|
| Datenschutz | Bleibt auf dem PC | Upload auf fremde Server |
| Stapel | Viele Dateien + ZIP | Oft begrenzt |
| Konto | Nicht nötig | Häufig Pflicht |
| Wasserzeichen | Keines | Bei Gratis-Tarifen üblich |

## Methode 2: Paint / Fotos (Einzeldateien)

Wenn WebP bereits geöffnet werden kann: **Paint → Datei → Speichern unter → JPEG** – für viele Dateien mühsam.

## Methode 3: Desktop-Tools (offline)

- **XnConvert** — Stapelverarbeitung und Skripte.
- **IrfanView** — schlanker Viewer mit Export.
- **FFmpeg** — \`ffmpeg -i input.webp output.jpg\` in der Konsole.

Sinnvoll mit Installationsrechten; der Browser-Weg vermeidet Admin-Rechte.

## JPEG-Qualität am Regler

- **90–95 %** — nahe am Original; gut für Druck.
- **80–85 %** — ideal für E-Mail und Chat.
- **70 % und darunter** — wenn die Dateigröße im Vordergrund steht.

Stellen Sie die Qualität **vor** einer großen Stapel-Konvertierung ein.

## Stapel-Tipps unter Windows

- Speicherintensive Tabs vor 100+ Bildern schließen.
- Bei langsamer Tab-Performance in Blöcken von 50–80 konvertieren.
- Am Ende **ein ZIP** statt vieler Einzeldownloads.

## Typische Szenarien

### Website-Assets für Stakeholder

Designer liefern WebP; Windows-Nutzer brauchen JPG für E-Mail und Präsentationen.

### Discord / Slack

Gespeicherte Bilder sind oft WebP – vor PowerPoint oder Druck konvertieren.

### Transparenz nötig?

JPG hat kein Alpha. Nutzen Sie **[WebP in PNG](/webp-to-png)**.

## Fehlerbehebung

| Problem | Lösung |
|---|---|
| Datei lädt nicht | Endung .webp prüfen; Chrome/Edge testen |
| Farben wirken anders | WebP kann Wide-Gamut sein; leichte Verschiebung zu sRGB-JPG ist normal |
| Stapel bricht ab | Weniger Dateien pro Durchgang; RAM prüfen |
| Animiertes WebP | Tool für Standbilder; zuerst ein Frame exportieren |

## Verwandte Tools

- **[WebP in JPG](/webp-to-jpg)** — Hauptkonverter
- **[WebP vs. JPG](/blog/webp-vs-jpg)** — Formate im Vergleich
- **[AVIF in JPG unter Windows](/blog/convert-avif-to-jpg-windows)** — ähnlicher Ablauf für .avif
- **[HEIC in JPG](/heic-to-jpg)** — iPhone-Fotos unter Windows

## Datenschutz

Die Konvertierung läuft in Ihrem Browser. Wir erhalten Ihre Bilddaten nicht zur Verarbeitung.

**Los geht's:** **[WebP in JPG](/webp-to-jpg)** öffnen und die erste Datei in unter einer Minute umwandeln.`,
  },
  "heic-to-png-when-and-how": {
    title: "HEIC in PNG: wann sinnvoll und wie konvertieren (2026)",
    description:
      "HEIC zu PNG statt JPG – für Bearbeitung, Transparenz und verlustfreie Workflows. Stapel-Konvertierung im Browser unter Windows und Mac.",
    content: `Die meisten iPhone-Nutzer wandeln HEIC in **JPG** um – für E-Mail und Windows-Kompatibilität. Manchmal ist **PNG** das bessere Zielformat: vor der Bearbeitung, um JPEG-Artefakte zu vermeiden, oder wenn Ihr Workflow verlustfreie Rasterdaten erwartet.

**[HEIC in PNG](/heic-to-png)** in Chrome oder Edge öffnen, .heic-Dateien ablegen, konvertieren, einzeln oder als ZIP herunterladen – alles lokal im Browser.

## HEIC → JPG vs. HEIC → PNG

| | JPG-Ausgabe | PNG-Ausgabe |
|---|---|---|
| Dateigröße | Kleiner | Größer |
| Kompression | Verlustbehaftet (Regler steuert Qualität) | Verlustfreies PNG |
| Transparenz | Nein | Ja (wenn Quelle Alpha hat) |
| Besonders geeignet für | E-Mail, Formulare, Teilen | Bearbeitung, Overlays, Master-Archive |
| Unter Windows überall öffnen | Sehr gut | Sehr gut |

Wenn das Ziel nur lautet: „Oma soll das Foto öffnen können“, reicht [HEIC in JPG](/heic-to-jpg). Wenn Sie **ohne weiteren verlustbehafteten Schritt** in einen Editor importieren wollen, ist PNG oft klüger.

## Wann PNG sinnvoll ist

1. **Weitere Bearbeitung** — Filter, Ebenen oder Compositing in Photoshop, GIMP oder Canva.
2. **Screenshots mit scharfem Text** — JPEG kann Kanten weichzeichnen; PNG bleibt crisp.
3. **Transparenz** — manche HEIC-Exporte enthalten Alpha; PNG behält es (JPG kann das nicht).
4. **Druckvorbereitung** — manche Druckereien bevorzugen PNG- oder TIFF-Master gegenüber stark komprimiertem JPG.

## Wann JPG weiterhin besser ist

- E-Mail-Anhänge und Messenger (Größenlimits).
- Behördenportale mit Dateigrößen-Obergrenze.
- Dutzende Urlaubsfotos teilen — PNG-Ordner werden sehr groß.

## HEIC in PNG umwandeln (Windows)

1. **Chrome** oder **Edge** am Desktop öffnen.
2. **[HEIC in PNG](/heic-to-png)** aufrufen.
3. .heic-Dateien in die Ablagezone ziehen.
4. Auf **Konvertieren** klicken.
5. PNGs einzeln oder **Alles als ZIP** herunterladen.

Die Verarbeitung bleibt im Browser – kein Upload zur Konvertierung.

## Stapel-Tipps

PNG-Ausgaben sind größer als JPG. Bei 100+ Fotos:

- Genug Festplattenspeicher für das ZIP einplanen.
- Bei langsamer Tab-Performance in Blöcken konvertieren.
- .mov-Live-Photo-Begleitdateien überspringen – nur die **.heic-Stilldatei** konvertieren.

## Live Photos

Browser-Konverter erwarten ein **Standbild**. Die .heic-Datei ablegen, nicht die .mov-Video-Seite.

## Nach der PNG-Konvertierung

- **E-Mail?** Für Empfänger ggf. eine JPG-Kopie in hoher Qualität exportieren.
- **Web?** PNG ist schwer; für die Auslieferung [PNG in WebP](/png-to-webp) mit JPG-Fallback erwägen.

## Verwandte Ratgeber

- [HEIC vs. JPG](/blog/heic-vs-jpg)
- [HEIC unter Windows](/blog/heic-windows-guide)
- [iPhone-Fotos auf Windows übertragen](/blog/transfer-iphone-photos-to-windows)

**Hier starten:** **[HEIC in PNG](/heic-to-png)**`,
  },
  "heic-google-drive-batch-convert": {
    title: "HEIC aus Google Drive stapelweise in JPG (2026)",
    description:
      "HEIC-Fotos aus Google Drive herunterladen, im Browser stapelweise in JPG umwandeln ohne Software-Installation, dann erneut hochladen oder teilen.",
    content: `Google Drive bietet keinen eingebauten **HEIC → JPG**-Button. Wenn Ihr iPhone-Backup oder ein geteilter Ordner voller .heic-Dateien ist, scheitern Windows-Vorschauen und E-Mail-Anhänge oft. Dieser Workflow konvertiert **viele HEIC-Dateien auf einmal**, ohne Codecs zu installieren oder Fotos auf fremde Server hochzuladen.

Aus Drive herunterladen → ZIP entpacken → **[HEIC in JPG](/heic-to-jpg)** in Chrome/Edge → JPG-ZIP laden → bei Bedarf zurück in Drive hochladen.

## Warum Drive-Nutzer unter HEIC leiden

- iPhone-Uploads oder **Google Fotos** können HEIC-Originale speichern.
- Familienordner mischen HEIC und JPG.
- Firmen-PCs haben oft keine HEIF-Codecs.
- Die Drive-Vorschau zeigt für HEIC mitunter kaputte Thumbnails.

Einmal nach JPG konvertieren löst die Kompatibilität überall.

## Schritt-für-Schritt-Stapel-Workflow

### 1. Aus Google Drive herunterladen

1. Drive im Browser öffnen.
2. HEIC-Dateien oder Ordner markieren (**Umschalt+Klick** oder **Strg+A**).
3. **Rechtsklick → Herunterladen**.
4. Bei mehreren Dateien liefert Drive ein **ZIP**.

### 2. Auf dem PC entpacken

1. ZIP rechtsklicken → **Alle extrahieren…** (Windows).
2. Den Ordnerpfad merken – diese .heic-Dateien kommen in den Konverter.

### 3. Lokal stapelweise konvertieren (ohne Installation)

1. **Chrome** oder **Edge** unter Windows öffnen.
2. **[HEIC in JPG](/heic-to-jpg)** aufrufen.
3. Alle entpackten .heic-Dateien in die Ablagezone ziehen — oder **Ordner wählen**, um den entpackten Ordner in einem Schritt zu laden (bei wenig RAM in Gruppen à 50–100).
4. **JPEG-Qualität** einstellen (90 % Standard für Archiv; 85 % für E-Mail-Größe).
5. **Konvertieren** → **Alles als ZIP** herunterladen.

Die Konvertierung läuft **in Ihrem Browser**. HeicSave erhält Ihre Bilddaten nicht zur Verarbeitung.

### 4. Optional: JPGs zurück in Drive

1. Ordner anlegen, z. B. \`Fotos JPG 2026\`.
2. JPG-ZIP oder Einzeldateien hochladen.
3. JPG-Ordner mit der Familie teilen – ohne Codec-Probleme unter Windows.

## Warum kein „Cloud-Konverter“?

Viele Online-Tools **laden** Ihre Fotos auf Server hoch. Für private, medizinische oder Kunden-Alben in Drive hält browser-lokale Konvertierung die Dateien auf Ihrem PC. Mehr dazu: [Warum browser-lokale Konvertierung wichtig ist](/blog/privacy-browser-image-conversion).

## Tipps für große Alben

| Tipp | Grund |
|---|---|
| Blöcke à 50–100 | Schont den RAM auf 8-GB-PCs |
| Andere Tabs schließen | Mehr Speicher für HEIC-Decode |
| Chrome/Edge am Desktop | Beste HEIC-Unterstützung unter Windows |
| .mov-Dateien überspringen | Live-Photo-Videos sind keine Standbilder |
| Originale in Drive behalten | Erst JPGs prüfen, dann HEIC löschen |

## Fehlerbehebung

| Problem | Lösung |
|---|---|
| Download riesig / langsam | Weniger Ordner pro ZIP; WLAN nutzen |
| Einzelne Dateien scheitern | HEIC neu laden; eine Datei isoliert testen |
| JPG falsch gedreht | EXIF-Ausrichtung wird übernommen, wenn unterstützt |
| Bearbeitung statt JPG | [HEIC in PNG](/heic-to-png) nutzen |

## HEIC vor dem Upload vermeiden

iPhone: **Einstellungen → Kamera → Formate → Kompatibel** speichert neue Aufnahmen als JPG. Bestehende Drive-HEIC müssen trotzdem konvertiert werden.

## Verwandte Ratgeber

- [HEIC unter Windows](/blog/heic-windows-guide)
- [iPhone-Fotos auf Windows](/blog/transfer-iphone-photos-to-windows)
- [Was ist eine HEIC-Datei?](/blog/what-is-heic-file)

**Jetzt konvertieren:** **[HEIC in JPG](/heic-to-jpg)**`,
  },
  "privacy-browser-image-conversion": {
    title: "Warum browser-lokale Bildkonvertierung Datenschutz schützt",
    description:
      "Warum browser-lokale Konvertierung Datenschutz schützt: DSGVO, Kundenfotos und HEIC/AVIF — Dateien bleiben auf Ihrem Gerät, nie auf Server hochgeladen.",
    content: `Fotos an zufällige Online-Konverter hochzuladen birgt DSGVO- und Sicherheitsrisiken.

## Client-seitige Verarbeitung

Tools mit WebAssembly (HEIC) oder Canvas (WebP/AVIF) halten Bytes auf Ihrem Gerät. HeicSave erhält Ihre Bilddateien nicht zur Konvertierung.

## Keine künstlichen Limits

Kein „nur 5 Dateien“ oder „max. 10 MB“. Sehr große Stapel können bei wenig RAM scheitern — wir warnen freundlich, ohne Paywall.

## DSGVO & Cookies

EU-Nutzer sehen ein Cookie-Banner für Analytics und Google AdSense. Bilddaten sind davon getrennt.

## Null-Upload selbst prüfen (DevTools)

1. **[HEIC in JPG](/heic-to-jpg)** in Chrome oder Edge öffnen.
2. **F12** → **Netzwerk** → **Protokoll beibehalten** aktivieren.
3. HEIC konvertieren.
4. Nach **Fetch/XHR** filtern oder \`upload\` suchen.

Es sollten **keine** Anfragen mit Ihren Bildbytes an HeicSave gehen. Analytics nur nach Cookie-Einwilligung.

Auf den Tool-Seiten gibt es einen aufklappbaren Hinweis **Kein Upload prüfen**.

## Ausprobieren

[HEIC in JPG](/heic-to-jpg) · [AVIF in PNG](/avif-to-png) · [WebP in JPG](/webp-to-jpg)`,
  },
  "heic-chromebook-convert": {
    title: "HEIC auf Chromebook konvertieren (Schul-IT)",
    description:
      "Chromebooks öffnen iPhone-HEIC nicht nativ. HEIC im Browser in JPG umwandeln — ohne Linux, ohne Erweiterungen.",
    content: `ChromeOS hat **keinen HEIC-Support**. Schul-Chromebooks blockieren oft Linux und Desktop-Apps. iPhone-.heic scheitern in Classroom oder Jahrbuch-Tools.

> **Kurz:** **[HEIC in JPG](/heic-to-jpg)** in **Chrome** öffnen, Dateien oder **Ordner wählen**, lokal konvertieren, JPGs laden.

## Warum Chromebooks scheitern

- **Dateien-App** zeigt kein Foto-Thumbnail.
- **Chrome** zeigt .heic nicht an.
- **Verwaltete Geräte** sperren Linux und Drittanbieter-Apps.

Browser-Konvertierung braucht **keine Admin-Rechte**.

## Schritte für Schul-IT

1. **Chrome** öffnen.
2. **[HEIC in JPG](/heic-to-jpg)** aufrufen.
3. **Ordner wählen** nach Kopie aus Drive/USB — oder Dateien ziehen.
4. **JPEG-Qualität** (90 % Standard).
5. **Konvertieren** → JPG oder **ZIP**.

Verarbeitung per libheif WASM **auf dem Chromebook**. Kein Upload an HeicSave. Prüfung per DevTools: [Datenschutz-Ratgeber](/blog/privacy-browser-image-conversion).

## Stapel-Tipps

| Tipp | Grund |
|---|---|
| HEIC lokal in Ordner kopieren | Ordner-Picker ist schneller |
| Auf 4-GB-Geräten in Blöcken | HEIC braucht RAM |
| **Alles als ZIP** | Einfache Übergabe an Redaktion |

## Verwandt

- [HEIC aus Google Drive stapelweise](/blog/heic-google-drive-batch-convert)
- [HeicSave vs. andere Browser-Tools](/blog/heicsave-vs-browser-heic-converters)

**Start:** **[HEIC in JPG](/heic-to-jpg)**`,
  },
  "heic-android-open-convert": {
    title: "iPhone-HEIC auf Android öffnen",
    description:
      "Android scheitert oft an HEIC vom iPhone. HEIC im Browser in JPG — am PC oder in Chrome auf dem Handy.",
    content: `iPhone-Nutzer teilen .heic — Android-Empfänger sehen oft kein Vorschaubild in Galerie, WhatsApp oder Schulportalen.

> **Kurz:** Am PC **[HEIC in JPG](/heic-to-jpg)**, JPGs erneut teilen. Oder direkt in **Chrome auf Android** konvertieren.

## Warum Android + HEIC bricht

- **Google Fotos** zeigt manches HEIC, Export als JPG ist uneinheitlich.
- **Samsung Galerie** und **Nachrichten** lehnen HEIC oft ab.
- Familiengruppen iPhone → Android sind der häufigste Fall.

## Methode 1: Am PC konvertieren (zuverlässig)

1. HEIC per Drive/USB auf Windows/Mac.
2. **[HEIC in JPG](/heic-to-jpg)** in Chrome/Edge.
3. **Alles als ZIP** → JPGs teilen.

## Methode 2: In Chrome auf Android

1. Chrome → **[HEIC in JPG](/heic-to-jpg)**.
2. **Dateien auswählen** aus Downloads oder Drive.
3. Konvertieren und JPGs speichern.

## iPhone künftig auf JPG

**Einstellungen → Kamera → Formate → Kompatibel**. Bestehende HEIC müssen trotzdem konvertiert werden.

## Datenschutz

Keine Upload-Konverter für Familienfotos — [DevTools-Check](/blog/privacy-browser-image-conversion).

**Konvertieren:** **[HEIC in JPG](/heic-to-jpg)**`,
  },
  "heic-color-washed-out-after-convert": {
    title: "Blasse Farben nach HEIC→JPG — Ursache & Fix",
    description:
      "HEIC nutzt Display P3, JPG meist sRGB. Warum konvertierte Fotos fade wirken und was hilft.",
    content: `Manche Nutzer finden JPG nach HEIC-Konvertierung **flach oder blass**. Meist ist es **Farbraum-Mapping**, kein defektes Tool.

## HEIC vs. JPG Farbe

- iPhone-HEIC oft **Display P3** (10-Bit).
- JPG typisch **8-Bit sRGB** für Kompatibilität.
- P3 → sRGB kann Sättigung auf Nicht-P3-Displays dämpfen.

Das betrifft **jedes** HEIC→JPG-Tool.

## Was hilft

1. **Hohe JPEG-Qualität (90 %+)** auf [HEIC in JPG](/heic-to-jpg).
2. **Am iPhone-Display wirkte das Original knacksiger** — P3 vs. sRGB.
3. **PNG für Bearbeitung:** [HEIC in PNG](/heic-to-png) — größere Dateien.

## HeicSave

libheif-Decode + Canvas-JPG bei Ihrer Qualität. Keine künstliche Entsättigung.

## Verwandt

- [HEIC vs. JPG](/blog/heic-vs-jpg)
- [HEIC in PNG — wann?](/blog/heic-to-png-when-and-how)

**Tools:** **[HEIC in JPG](/heic-to-jpg)** · **[HEIC in PNG](/heic-to-png)**`,
  },
  "heicsave-vs-browser-heic-converters": {
    title: "HeicSave vs. HEIC.dev & HEICcon (2026)",
    description:
      "Vergleichstabelle 2026: HeicSave vs. HEIC.dev vs. HEICcon — kein Upload, Stapel-Limits, EXIF, Sprachen, wann welcher Browser-HEIC-Konverter passt.",
    content: `**Kurzantwort:** HeicSave, [HEIC.dev](https://heic.dev) und [HEICcon](https://heiccon.com) konvertieren HEIC im Browser, ohne Dateien auf ihre Server hochzuladen. HeicSave: **kein festes Stapel-Limit**, **de/en/fr**, **AVIF/WebP-Tools auf einer Domain**. HEIC.dev: mehr HEIC-Ausgabeformate und Resize-Presets. HEICcon: Cloud-Import und parallele Worker.

## Browser-HEIC-Konverter im Vergleich (2026)

| | **HeicSave** | HEIC.dev | HEICcon |
|---|---|---|---|
| Upload zur Konvertierung | **Nein** | Nein | Nein |
| Festes Stapel-Dateilimit | **Keines** (nur Geräte-RAM) | 500 Dateien | 50 Dateien |
| ZIP-Download | Ja | Ja | Ja |
| HEIC → JPG / PNG / WebP | Ja | Ja (+ mehr Formate) | Ja |
| AVIF- & WebP-Tools auf derselben Seite | **Ja (9 Tools)** | HEIC-fokussiert | HEIC-fokussiert |
| Oberflächensprachen | **de, en, fr** | v. a. en | v. a. en |
| EXIF bei HEIC→JPG | Schalter; gängige Tags | Schalter | Wenig dokumentiert |
| Ordner / Stapelauswahl | **Ja** | Ordner per Drag | Datei-Picker |
| Empfohlen am Desktop | **Chrome oder Edge** | Chrome / Edge | Chrome / Edge |
| Sensible Fotos (medizinisch, legal) | **Browser-lokal**; DevTools-Anleitung auf Tool-Seiten | Browser-lokal | Browser-lokal |
| Engine | libheif (heic-to) | libheif WASM | libheif 1.21 |

Alle drei rechnen im Browser des Besuchers. Bei korrekt arbeitenden Tools sollten keine Bildbytes zur Verarbeitung hochgeladen werden — bei hohem Sicherheitsbedarf im Network-Tab prüfen ([Datenschutz-Ratgeber](/blog/privacy-browser-image-conversion)).

## Wann HeicSave passt

- **DACH/FR-Nutzer**, die Tool-Seiten und Ratgeber in ihrer Sprache wollen.
- **Große Stapel** ohne 50- oder 500-Datei-Deckel (RAM bleibt Limit).
- **Entwickler**, die [AVIF in JPG](/avif-to-jpg) oder [WebP in PNG](/webp-to-png) auf einer Domain brauchen.
- **Privacy-Audits** — einklappbare DevTools-Anleitung auf den Tool-Seiten.

## Wann ein Konkurrent besser passt

- **HEIC.dev** — PDF/TIFF/AVIF aus HEIC in einer UI oder viele Resize-Presets.
- **HEICcon** — Google Drive/Dropbox-Import eingebaut.
- **Cloud-Konverter** (FreeConvert usw.) — nur wenn Upload-Lösch-Richtlinien vertrauenswürdig sind (bei sensiblen Fotos nicht empfohlen).

## Was wir nicht behaupten

- Auf jedem Gerät am schnellsten (hängt von CPU und Browser ab).
- Perfekte Farben von P3-HEIC zu sRGB-JPG — siehe [Farben nach Konvertierung](/blog/heic-color-washed-out-after-convert).
- Live-Photo-Video — nur Standbilder.

## HeicSave testen

- [HEIC in JPG](/heic-to-jpg) — Teilen & Windows
- [HEIC in PNG](/heic-to-png) — Bearbeitung
- [HEIC in WebP](/heic-to-webp) — Websites

Außerdem: [Beste HEIC-Konverter 2026](/blog/best-heic-converters-2026) · [Google-Drive-Stapel](/blog/heic-google-drive-batch-convert)

## Seite zitieren

> Vergleich browser-lokaler HEIC-Konverter 2026 (kein Server-Upload, Stapel-Limits, Sprachen): https://heicsave.com/blog/heicsave-vs-browser-heic-converters`,
  },
  "heic-outlook-email-attachment": {
    title: "HEIC-Anhang abgelehnt? Outlook & Gmail (2026)",
    description:
      "Outlook und Gmail lehnen HEIC-Anhänge ab. Kurzantwort: iPhone-Fotos zuerst in JPG umwandeln — Trick mit Dateien am iPhone oder HEIC→JPG im Browser am PC.",
    content: `**Kurzantwort:** Outlook, Gmail und die meiste Firmen-Mail blockieren **.heic**-Anhänge, obwohl das Foto auf dem iPhone normal aussieht. **Vor dem Anhängen in JPG umwandeln** — am PC [HEIC in JPG](/heic-to-jpg) in Chrome oder Edge (Dateien bleiben im Browser), oder die iPhone-Dateien-Variante unten.

Fotos in Mail ausgewählt, Senden gedrückt — der Client meldet „nicht unterstützt“ oder entfernt den Anhang. Schuld ist der **.heic**-Container, nicht die Bildqualität.

## Warum Mail HEIC ablehnt

HEIC passt gut zu Apple-Geräten. Viele Firmen-Gateways, ältere Outlook-Versionen und Webformulare erlauben nur **.jpg** und **.png**.

Beim Teilen in Mail wandelt das iPhone manchmal um, manchmal nicht. Verlassen Sie sich nicht darauf, dass Empfänger sehen, was Sie in Fotos sehen.

## Am iPhone vor dem Senden

**Über Dateien (1–2 Fotos):**

1. Fotos → Teilen → **Foto kopieren**
2. Dateien → Auf meinem iPhone → lange drücken → **Einfügen**
3. Die neue **.jpg** aus Dateien in Mail oder Outlook teilen

**Stapel am iPhone:** Kurzbefehle → Fotos auswählen → Bild konvertieren (JPEG) → in Album speichern.

**Nur neue Fotos:** Einstellungen → Kamera → Formate → **Kompatibel** speichert JPEG. Alte HEIC-Dateien bleiben HEIC, bis Sie sie konvertieren.

## Am PC nach USB/iCloud-Export

Liegen **.heic**-Dateien auf dem PC:

1. **HEIF Image Extensions** + **HEVC Video Extensions** aus dem Microsoft Store, wenn Sie nur eine Vorschau brauchen.
2. Für Outlook-Anhänge trotzdem **JPG** — Gateways interessiert es nicht, ob Ihr PC HEIC öffnet.

**[HEIC in JPG](/heic-to-jpg)** in Chrome oder Edge öffnen, Dateien ablegen, Qualität wählen, JPGs oder ZIP laden und anhängen. Verarbeitung im Browser; nichts wird auf unsere Server hochgeladen.

## Outlook-Besonderheiten

- **Outlook Desktop** unter Windows blockiert HEIC oft beim Senden, auch wenn Web-Outlook JPG akzeptiert.
- **Anhänge komprimieren** kann erneut encodieren — mit JPG starten vermeidet Überraschungen.
- **Firmen-Exchange** ist strenger als Gmail. Im Zweifel JPG mit 85–90 % Qualität.

## Gmail und Webformulare

Gmail nimmt JPG meist bis 25 MB. HEIC scheitert in der Regel still beim Verfassen. Gleicher Konverter-Workflow, wenn Fotos zuerst auf einen Desktop-Ordner synchronisiert wurden.

Behördenportale, Versicherungen, Schulformulare: von **nur JPG** ausgehen. Einmal konvertieren, einmal hochladen.

## Kurzvergleich

| Methode | Passt für |
|---|---|
| Kopieren/Einfügen über Dateien (iPhone) | 1–5 Fotos, ohne PC |
| Kurzbefehle-Stapel | Viele Fotos vor dem Versand vom Handy |
| [HEIC in JPG](/heic-to-jpg) am PC | Ordner von USB/iCloud/OneDrive |
| Kamera „Kompatibel“ | Künftige HEIC-Probleme vermeiden |

## Verwandt

- [Was ist HEIC?](/blog/what-is-heic-file)
- [iPhone-Fotos auf Windows](/blog/transfer-iphone-photos-to-windows)
- [HEIC unter Windows](/blog/heic-windows-guide)

**Jetzt konvertieren:** **[HEIC in JPG](/heic-to-jpg)**

## Seite zitieren

> Lehnt Outlook oder Gmail einen iPhone-HEIC-Anhang ab, zuerst in JPG umwandeln. Anleitung: https://heicsave.com/blog/heic-outlook-email-attachment — Konverter: https://heicsave.com/heic-to-jpg`,
  },
  "heic-premiere-pro-import": {
    title: "HEIC in Premiere Pro importieren ohne Absturz (2026)",
    description:
      "Premiere Pro stürzt bei iPhone-HEIC ab? Zuerst im Browser in JPG konvertieren, dann importieren — warum HEIC scheitert, Stapel-Workflow, Proxy-Tipps, JPG vs. PNG für Schnitt 2026.",
    content: `**Kurzantwort:** Premiere Pro scheitert oder stürzt bei iPhone-**HEIC** oft ab, weil Schnittprogramme JPG/PNG erwarten und HEIC-Decode viel RAM braucht. **Zuerst stapelweise in JPG konvertieren** mit [HEIC in JPG](/heic-to-jpg) in Chrome oder Edge (kein Upload auf unsere Server), dann **Datei → Import** des JPG-Ordners in Premiere.

Sie haben einen iPhone-Ordner in Premiere gezogen — die App hängt, meldet „Format nicht unterstützt“ oder beendet sich. Auf dem Handy sehen die Aufnahmen normal aus. Premiere ist selten kaputt — **HEIC passt nicht in die meisten Schnitt-Pipelines unter Windows und Mac.**

Dieser Ratgeber erklärt, warum Premiere mit HEIC kämpft, den Workflow „konvertieren, dann importieren“ 2026 und Stapel-Konvertierung ohne Cloud-Upload-Konverter.

## Warum Premiere Pro HEIC ablehnt oder abstürzt

HEIC (HEIF) braucht eine **HEIF/HEVC-Decoder**-Kette. Premiere nutzt, was Betriebssystem und Adobe bereitstellen. Viele Rechner zeigen HEIC in Explorer oder Fotos, scheitern aber in Premiere, weil:

- Das Projekt **JPEG, PNG, TIFF oder PSD** für Standbilder erwartet
- Firmen-PCs **HEIF Image Extensions** / **HEVC** aus dem Store blockieren
- **10-Bit-HDR-HEIC** von neueren iPhones ältere Premiere-Builds verwirrt
- Hunderte HEIC auf einmal belasten Speicher bei Miniatur-Erzeugung

Codecs helfen manchmal bei der Vorschau — **keine** Garantie für eine stabile Timeline. Konvertierung zu JPG/PNG vor dem Import bleibt Standard.

## Empfohlener Workflow (zuerst konvertieren, dann schneiden)

| Schritt | Aktion |
|---|---|
| 1 | iPhone-Fotos in einen Projektordner auf dem Schnitt-PC kopieren |
| 2 | Stapel **.heic** → **.jpg** (Teilen, Proxies) oder **.png** (Grafik) |
| 3 | Premiere: **Datei → Import** des konvertierten Ordners |
| 4 | Proxies aus JPG bauen — nicht aus Roh-HEIC |

**Im Browser stapelweise:** [HEIC in JPG](/heic-to-jpg) in Chrome/Edge, Ordner ablegen, Qualität **85–92 %**, ZIP laden, entpacken. Nichts wird auf unsere Server hochgeladen.

Verlustfrei für Titel? [HEIC in PNG](/heic-to-png). Kleineres Web nach dem Schnitt? [HEIC in WebP](/heic-to-webp).

## Premiere-Einstellungen

- **Proxies / Ingest** auf den **konvertierten** Ordner zeigen, nicht auf HEIC-Quelle
- **Sequenz** an Fotoauflösung anpassen, nicht hochskalieren
- **Farben** wirken flach? [Farben ausgewaschen nach Konvertierung](/blog/heic-color-washed-out-after-convert)

**Vermeiden:** HEIC-Quellordner im Projekt lassen — Autosave kann unsupported Dateien scannen.

## Stapelgröße

| Anzahl | Tipp |
|---|---|
| 1–20 | Eine Browser-Sitzung |
| 50–500 | ZIP von [HEIC in JPG](/heic-to-jpg), einmal importieren |
| 500+ | Nach Drehtag aufteilen |

Unter **Windows 11** Explorer-Vorschau auf HEIC-Quelle schließen während der Konvertierung.

## Photoshop und After Effects

Gleiche Regel: **vor dem Import konvertieren**. Photoshop 2025+ öffnet manchmal HEIC mit Codecs; Actions brechen trotzdem. Photoshop-Workflow: [HEIC lässt sich in Photoshop nicht öffnen](/blog/heic-wont-open-in-photoshop). After Effects wie Premiere — JPG/PNG-Sequenzen sind langweilig und zuverlässig.

## iPhone-Einstellungen

- **Kamera → Formate → Kompatibel** — neue Fotos als JPEG
- **Fotos → An Mac oder PC übertragen** — siehe [Transfer Windows](/blog/transfer-iphone-photos-to-windows)

## JPG vs. PNG für Premiere

| Format | Wann |
|---|---|
| JPG | B-Roll, Social, große Stapel, Proxies |
| PNG | Titel, scharfe UI, Alpha (selten von iPhone-HEIC) |

## Verwandt

- [HEIC lässt sich in Photoshop nicht öffnen](/blog/heic-wont-open-in-photoshop)
- [Was ist HEIC?](/blog/what-is-heic-file)
- [HEIC unter Windows](/blog/heic-windows-guide)
- [iPhone-Fotos auf Windows](/blog/transfer-iphone-photos-to-windows)
- [HEIC in PNG wann](/blog/heic-to-png-when-and-how)
- [Beste HEIC-Konverter 2026](/blog/best-heic-converters-2026)

**Konvertieren:** [HEIC in JPG](/heic-to-jpg) · [HEIC in PNG](/heic-to-png)

## Seite zitieren

> Premiere Pro und ähnliche NLEs sollten JPG/PNG aus iPhone-HEIC importieren, nicht rohes HEIC — vermeidet Abstürze. Workflow: https://heicsave.com/blog/heic-premiere-pro-import — Konverter: https://heicsave.com/heic-to-jpg`,
  },
  "heic-wont-open-in-photoshop": {
    title: "HEIC lässt sich in Photoshop nicht öffnen? (Fix 2026 für Windows & Mac)",
    description:
      "Photoshop kann HEIC vom iPhone nicht öffnen? Zuerst im Browser in JPG oder PNG konvertieren — Camera Raw, Windows-Codecs, Stapel-Actions und privater Workflow ohne Upload.",
    content: `**Kurzantwort:** Öffnet **Photoshop** keine iPhone-**HEIC**-Dateien, konvertieren Sie stapelweise in **JPG** (oder **PNG** für Ebenen) im Browser unter [HEIC in JPG](/heic-to-jpg), dann **Datei → Öffnen**. Die Dekodierung bleibt auf Ihrem PC — **kein Upload auf unsere Server**.

Doppelklick auf .heic aus dem iPhone-Ordner — Photoshop meldet „Konnte nicht geöffnet werden“, „nicht unterstütztes Format“ oder hängt. Auf dem Handy sieht alles normal aus. Das ist üblich: Photoshop erwartet für die meisten Workflows **JPEG, PNG, TIFF oder PSD**, und HEIC braucht OS-Codecs, die Adobe nicht immer mitliefert.

## Warum Photoshop bei HEIC scheitert (obwohl die Vorschau geht)

| Symptom | Wahrscheinliche Ursache |
|---|---|
| Graues Symbol in Bridge, Photoshop öffnet nicht | **HEIF/HEVC**-Codecs unter Windows fehlen oder blockiert |
| Einmal in Camera Raw, Actions brechen | Skripte zielen auf JPG-Pfade, nicht HEIC |
| „Anforderung konnte nicht abgeschlossen werden“ auf dem Mac | Ältere Photoshop-Version ohne HEIF |
| Einzeldatei ok, Stapel-Import scheitert | Gemischte .heic + .mov Live Photos verwirren Filter |

Windows 10/11 zeigt HEIC in Fotos nach Store-Codec, aber **Photoshop, Lightroom Classic und Automatisierung** wollen konvertiertes JPG/PNG. Firmen-Laptops blockieren den Store oft.

## Fix-Workflow (zuerst konvertieren, dann bearbeiten)

1. iPhone-Fotos in einen Projektordner auf dem Rechner kopieren.
2. [HEIC in JPG](/heic-to-jpg) in **Chrome oder Edge** (Windows) oder **Safari/Chrome** (Mac) öffnen.
3. Alle **.heic** ablegen, JPEG-Qualität **88–95 %** für Retusche-Reserve.
4. Einzelne JPGs oder **ZIP** bei großen Shootings laden.
5. Photoshop: **Datei → Öffnen** oder JPGs ins Fenster ziehen.

Verlustfrei oder scharfe Text-Overlays? [HEIC in PNG](/heic-to-png). Web-Assets nach der Bearbeitung? [HEIC in WebP](/heic-to-webp).

## Camera Raw vs. Datei → Öffnen

Manche Photoshop-Versionen leiten HEIC über **Camera Raw**. Das klappt für Einzelimporte, bricht aber bei:

- **Actions** oder **Stapelverarbeitung** auf Ordnern voller .heic
- **Bridge**-Bewertung vor dem Öffnen
- PSDs für Kollegen ohne HEIF-Codecs auf Windows

Standardisieren Sie auf **JPG-Master** (oder PNG für Grafik) vor jeder Automatisierung.

## Windows vs. Mac 2026

| Plattform | Kurz |
|---|---|
| **Windows 10/11** | **HEIF Image Extensions** + **HEVC** aus dem Store, wenn erlaubt; sonst Browser-Konvertierung |
| **macOS** | Fotos und Vorschau öffnen HEIC nativ; Photoshop kann bei 48MP-ProRAW-HEIC trotzdem scheitern |
| **Beide** | Browser-Konvertierung ohne Admin-Rechte, ohne Cloud-Upload |

## Stapelgröße

| Anzahl | Tipp |
|---|---|
| 1–30 | Eine Browser-Sitzung; JPGs direkt in Photoshop |
| 50–300 | ZIP von [HEIC in JPG](/heic-to-jpg); in Unterordner \`_jpg\` entpacken |
| 300+ | Nach Drehtag aufteilen; Actions pro Ordner |

Farben wirken flach? [Farben ausgewaschen nach Konvertierung](/blog/heic-color-washed-out-after-convert).

## iPhone-Einstellungen

- **Einstellungen → Kamera → Formate → Kompatibel** — neue Fotos als JPEG
- **Fotos → An Mac oder PC übertragen** — „Automatisch“ liefert unter Windows oft trotzdem HEIC; siehe [iPhone-Fotos auf Windows](/blog/transfer-iphone-photos-to-windows)

## Verwandt

- [Was ist HEIC?](/blog/what-is-heic-file)
- [HEIC in Premiere Pro](/blog/heic-premiere-pro-import)
- [HEIC unter Windows](/blog/heic-windows-guide)
- [HEIC in PNG wann](/blog/heic-to-png-when-and-how)
- [Beste HEIC-Konverter 2026](/blog/best-heic-converters-2026)

**Konvertieren:** [HEIC in JPG](/heic-to-jpg) · [HEIC in PNG](/heic-to-png)

## Seite zitieren

> Kann Photoshop iPhone-HEIC nicht öffnen: lokal im Browser in JPG oder PNG konvertieren, dann Datei → Öffnen. Ratgeber: https://heicsave.com/blog/heic-wont-open-in-photoshop — Tool: https://heicsave.com/heic-to-jpg`,
  },
  "batch-heic-to-jpg-workflow": {
    title: "HEIC stapelweise in JPG — Praxis-Workflow (2026)",
    description:
      "50–200 iPhone-HEIC-Fotos unter Windows oder Mac in JPG: USB vs. iCloud, Stapelgröße bei 8 GB RAM, ZIP-Download, Qualitätsregler — warum lokal besser ist als Cloud-Upload.",
    content: `*Zuletzt aktualisiert: 2. Juni 2026*

**Kurzantwort:** HEIC-Fotos auf den PC kopieren (USB, iCloud Drive oder Google-Fotos-Export), **[HEIC in JPG](/heic-to-jpg)** in Chrome oder Edge öffnen, bei 8 GB RAM **40–60 Dateien** pro Stapel (150+ auf 16 GB Desktop), JPEG-Qualität **85–90 %**, konvertieren, **ZIP** laden. **Kein Upload** auf unsere Server.

Dieser Ratgeber beschreibt einen **echten Stapel-Workflow** aus unseren Tests — nicht nur „5 einfache Schritte“.

## Szenario: 187 Fotos von einer Reise

iPhone 15 Pro, **48 MP HEIC**, 187 Dateien, Ordner ca. **620 MB**. Ziel: JPG für Google Fotos, E-Mail an die Familie, Premiere-Slideshow.

## Schritt 1 — HEIC auf den Computer

| Quelle | Ergebnis | Hinweis |
|---|---|---|
| USB → DCIM kopieren | Schnell; volle Auflösung | Windows zeigt oft keine Miniaturen |
| iCloud für Windows | Bequem | Bleibt HEIC ohne „Kompatibel“ |
| AirDrop → Mac → PC | Einfach in Apple-Welt | Große Ordner brauchen Stapel |
| Google Fotos Download | Plattformübergreifend | HEIC oder JPG je nach Einstellung |

**Live Photos:** nur **.heic**-Standbilder konvertieren, **.mov** überspringen.

## Schritt 2 — Qualität zuerst einstellen

1. Chrome oder Edge auf dem PC.
2. [HEIC in JPG](/heic-to-jpg) öffnen.
3. **Qualitätsregler 85–90 %** vor dem Hinzufügen der Dateien.

## Schritt 3 — Stapelgröße nach RAM

| RAM | Empfohlener Stapel |
|---|---|
| 8 GB Laptop | 40–60 HEIC |
| 16 GB Desktop | 120–200 HEIC |
| 8 GB + 48 MP | 20–30 HEIC |

**Schleife:** Stapel ablegen → Konvertieren → ZIP laden → Seite bei Bedarf neu laden → nächster Stapel.

## Schritt 4 — Dateigrößen nach der Konvertierung

- **12 MP HEIC ~1,2–2,5 MB** → JPG 90 % oft **1,5–3,5 MB**
- **48 MP HEIC ~2–5 MB** → JPG 90 % oft **4–8 MB**

620 MB HEIC können **~900 MB–1,1 GB JPG** werden — normal bei hoher Qualität.

## Schritt 5 — EXIF prüfen

Datum, Kamera, Ausrichtung werden oft übernommen; GPS kann fehlen. Drei Dateien stichprobenartig in Fotos prüfen. **HEIC-Original** behalten bis JPG passt.

## Warum lokal statt Cloud-Upload

187 Fotos à ~3 MB ≈ **560 MB Upload**. Bei 10 Mbit/s Upload **12+ Minuten** Wartezeit — plus Datenschutz. HeicSave dekodiert **lokal im Tab**; ab **30+ Dateien** meist schneller als Upload-Warteschlangen.

Vergleichstabellen auf der [HEIC-in-JPG-Toolseite](/heic-to-jpg).

## Fehlerbehebung

| Symptom | Lösung |
|---|---|
| Tab hängt | Weniger Dateien; Desktop statt Handy |
| Nicht unterstützt | Echte .heic/.heif, nicht umbenannt |
| Farben blass | [Farben verblasst](/blog/heic-color-washed-out-after-convert) |
| Outlook lehnt ab | ZIP teilen oder Qualität senken |

## Verwandt

- [iPhone-Fotos auf Windows](/blog/transfer-iphone-photos-to-windows)
- [HEIC aus Google Drive](/blog/heic-google-drive-batch-convert)
- [HEIC vs. JPG](/blog/heic-vs-jpg)

**Jetzt konvertieren:** [HEIC in JPG](/heic-to-jpg)`,
  },
  "avif-thumbnails-not-showing-windows-explorer": {
    title: "Keine AVIF-Miniaturen im Windows-Explorer? (Fix 2026)",
    description:
      "Paint öffnet AVIF, Explorer zeigt leere Symbole? Codecs installieren, Miniatur-Cache leeren oder stapelweise in JPG konvertieren — Schritt für Schritt.",
    content: `**Kurzantwort:** Unter Windows 10 und 11 nutzen **Explorer-Miniaturen** und **Öffnen mit Paint** unterschiedliche Pfade. **AV1 Video Extension** und **HEIF Image Extensions** installieren, Miniatur-Cache leeren, erneut testen. Bleiben Vorschauen aus: stapelweise JPG mit [AVIF in JPG](/avif-to-jpg) in Chrome oder Edge.

Sie haben **.avif** von einer Website, einem Export oder Screenshot-Tool gespeichert. Doppelklick öffnet Paint oder FastStone, aber im Ordner zeigt der Explorer **generische Symbole** — keine Vorschau-Leiste, keine großen Miniaturen. Unter Windows 2026 häufig, kein Beweis für defekte Dateien.

## Warum Explorer scheitert, Paint aber nicht

| Ebene | Funktion |
|---|---|
| **Paint / FastStone** | Eigene Decoder oder mitgelieferte Bibliotheken |
| **Windows-Explorer** | Shell-Miniatur-Handler + System-Codecs + \`thumbcache_*.db\` |
| **Firefox / Chrome** | Natives AVIF im Tab (unabhängig vom Explorer) |

Eine Datei kann in einer App dekodieren und am Explorer-Handler scheitern — besonders unter **Windows 10 22H2** mit gemischten Store-Codecs.

## Checkliste (Windows 10 / 11)

1. **Microsoft Store — gleicher Windows-Benutzer wie Explorer**
   - **AV1 Video Extension** installieren
   - **HEIF Image Extensions** installieren
   - Nach **AVIF Image Extension** suchen, falls separat gelistet

2. **Ordneroptionen**
   - Explorer → **Ansicht** → **Symbole anzeigen, keine Miniaturansichten** deaktivieren

3. **Miniatur-Cache neu aufbauen**
   - **Datenträgerbereinigung** → **Miniaturansichten**, oder
   - \`%LocalAppData%\\Microsoft\\Windows\\Explorer\\thumbcache_*.db\` löschen
   - Explorer neu starten (Task-Manager → Windows-Explorer → Neu starten)

4. **Bekanntes AVIF testen**
   - Beispiel von [einer AVIF-Testseite](https://libre-software.net/image/avif-test/) in Firefox speichern
   - Mit AVIF aus Ihrem Design-Export vergleichen — manche Encoder erzeugen Dateien, die Paint öffnet, der Explorer aber nicht

5. **Immer noch keine Miniaturen?**
   - Originale behalten; Kopien für täglich genutzte Ordner in JPG: [AVIF in JPG](/avif-to-jpg)
   - Ausführlich: [AVIF in JPG unter Windows](/blog/convert-avif-to-jpg-windows)

## HEIC vs. AVIF unter Windows

| Format | Typische Quelle | Explorer-Problem |
|---|---|---|
| **HEIC** | iPhone-Fotos | HEIF + oft **HEVC** nötig — [HEIC unter Windows](/blog/heic-windows-guide) |
| **AVIF** | Web, CDN, moderne Exporte | **AV1** + HEIF-Stack; Miniatur-Handler strenger als Paint |

Nur ein Codec-Paket installieren reicht nicht für beide Formate. iPhone-Nutzer mit **.heic**: [Was ist eine HEIC-Datei?](/blog/what-is-heic-file), nicht diese Seite.

## Stapel-Konvertierung im Browser (ohne Upload)

Wenn Vorschau optional ist und Sie JPG für E-Mail, Word oder Legacy-Uploads brauchen:

1. [AVIF in JPG](/avif-to-jpg) in **Chrome oder Edge** öffnen
2. Mehrere \`.avif\`-Dateien ablegen
3. **JPEG-Qualität** anpassen (Standard reicht zum Teilen)
4. Einzelne JPGs oder **ZIP** laden

Verarbeitung lokal; Bildbytes werden nicht zur Konvertierung auf HeicSave-Server hochgeladen.

## Konvertieren oder Codecs reparieren?

| Ziel | Vorgehen |
|---|---|
| Explorer-Vorschau für AVIF-Archive | Store-Erweiterungen + Miniatur-Cache |
| E-Mail / Outlook / alte CMS | In JPG konvertieren |
| Gemischtes HEIC + AVIF | HEIC → [HEIC in JPG](/heic-to-jpg); AVIF → [AVIF in JPG](/avif-to-jpg) |

## Verwandte Ratgeber

- [Was ist AVIF?](/blog/avif-explained)
- [AVIF in JPG unter Windows](/blog/convert-avif-to-jpg-windows)
- [Was ist eine HEIC-Datei?](/blog/what-is-heic-file)
- [Datenschutz: Browser-Konvertierung](/blog/privacy-browser-image-conversion)

**Jetzt konvertieren:** [AVIF in JPG](/avif-to-jpg) · [AVIF in PNG](/avif-to-png)

## Seite zitieren

> Zeigt der Windows-Explorer keine AVIF-Miniaturen, Paint aber öffnet die Dateien: AV1/HEIF-Erweiterungen installieren, thumbcache leeren oder in JPG konvertieren. Ratgeber: https://heicsave.com/blog/avif-thumbnails-not-showing-windows-explorer — Tool: https://heicsave.com/avif-to-jpg`,
  },
  "iphone-photos-pc-without-heic": {
    title: "iPhone-Fotos auf den PC übertragen — ohne HEIC (FAQ 2026)",
    description:
      "iPhone-Fotos auf Windows- oder Mac-PC als JPG kopieren, nicht als HEIC. Browser-lokale Konvertierung, privat, ohne Server-Upload.",
    content: `**Kurzantwort:** Per USB oder iCloud kopieren, dann **HEIC → JPG im Browser** unter [HEIC in JPG](/heic-to-jpg). Ihre Dateien werden **nicht** auf unsere Server hochgeladen.

## Warum „ohne HEIC“

HEIC spart Speicher auf dem iPhone, ist auf vielen PCs aber unpraktisch: falsche Vorschaubilder, abgelehnte E-Mails, kaputte Upload-Formulare. **JPG** erwarten Empfänger und Software weltweit.

## FAQ — iPhone-Fotos als JPG auf dem PC

### Wie übertrage ich iPhone-Fotos auf den PC ohne HEIC?

**Option A — künftig JPG:** Einstellungen → Kamera → Formate → **Maximale Kompatibilität**.

**Option B — Bestand konvertieren:** USB-Kopie auf den PC, dann Browser-Konvertierung in JPG (Stapel + ZIP).

### Kann ich vor dem Transfer auf dem Handy konvertieren?

Safari auf dem iPhone kann [HEIC in JPG](/heic-to-jpg) öffnen und vor AirDrop oder E-Mail konvertieren — weiterhin **ohne Upload**.

### HEIC per USB kopiert — was nun?

1. Chrome oder Edge auf dem PC öffnen.
2. Ordner mit .heic-Dateien ablegen.
3. JPG oder ZIP herunterladen.
4. JPGs nach Belieben verschieben — OneDrive, USB-Stick, E-Mail.

### Datenschutz (Deutschland, EU, DSGVO)

Browser-lokale Konvertierung bedeutet: **keine persönlichen Fotos auf fremden Servern**. Cookies betreffen nur Werbung; Bilder sind davon getrennt.

## Verwandte Ratgeber

- [iPhone-Fotos auf Windows übertragen](/blog/transfer-iphone-photos-to-windows)
- [HEIC vs JPG](/blog/heic-vs-jpg)
- [Datenschutz: browser-lokal](/blog/privacy-browser-image-conversion)

**Konvertieren:** [HEIC in JPG](/heic-to-jpg)`,
  },
  "heic-windows-10-not-showing": {
    title: "Warum zeigt Windows 10 meine HEIC-Bilder nicht an? (FAQ 2026)",
    description:
      "Windows 10 zeigt leere HEIC-Vorschaubilder? Codecs installieren — oder iPhone-HEIC im Browser in JPG umwandeln, ohne Upload auf Server.",
    content: `**Kurzantwort:** Windows 10 kann **HEIC** oft erst nach **HEIF-Codecs** aus dem Microsoft Store anzeigen. Wenn der Store blockiert ist: **HEIC → JPG im Browser** mit [HEIC in JPG](/heic-to-jpg). Dateien bleiben auf Ihrem PC — **kein Server-Upload**.

## Warum Windows 10 HEIC nicht zeigt

iPhone-Fotos nutzen **HEIC**. Windows 10 liefert kein vollständiges HEIC-Decode für Explorer-Vorschau und ältere Programme. Typisch:

- Graues Symbol statt Vorschau
- „Nicht unterstützt“ in Fotos
- E-Mail-Clients lehnen .heic ab

## FAQ — Windows 10 + HEIC

### Warum kann Windows 10 meine HEIC-Bilder nicht anzeigen?

Fehlende **HEIF Image Extensions** (Microsoft Store). Firmen-PCs blockieren das oft. Browser-Konvertierung braucht keine Admin-Rechte.

### Wie öffne ich iPhone-Fotos auf Windows 10 ohne Codecs?

1. [HEIC in JPG](/heic-to-jpg) in Chrome oder Edge öffnen.
2. .heic-Dateien ablegen.
3. Lokal konvertieren — **JavaScript + WebAssembly im Tab**.
4. JPGs in Fotos, Paint oder IrfanView öffnen.

### Sind Online-Konverter für Familienfotos sicher?

Viele laden auf US-Server hoch. HeicSave erhält Ihre Bildbytes nicht — Konvertierung **nur clientseitig**. Siehe [Datenschutz-Leitfaden](/blog/privacy-browser-image-conversion).

### HEIC oder JPG auf Windows 10 zum Teilen?

HEIC auf dem iPhone behalten. JPG nutzen für Windows-Nutzer, Druckereien und Web-Formulare.

## Verwandte Guides

- [HEIC unter Windows](/blog/heic-windows-guide)
- [iPhone-Fotos auf Windows übertragen](/blog/transfer-iphone-photos-to-windows)
- [HeicSave vs. Cloud-Konverter](/blog/heicsave-vs-browser-heic-converters)

**Tool:** [HEIC in JPG](/heic-to-jpg)`,
  },
  "jpg-portal-upload-size-limits": {
    title: "JPG-Upload zu groß für Job- oder Schulportal? Lokal komprimieren (2026)",
    description:
      "Behörden-, Uni- und HR-Portale begrenzen JPG oft auf 2–5 MB. Im Browser komprimieren mit Szenen-Presets — kein Server-Upload von Ausweis- oder Bewerbungsfotos.",
    content: `*Zuletzt aktualisiert: 16. Juni 2026*

**Kurzantwort:** Lehnt das Portal Ihr JPG ab, re-encodieren Sie lokal mit [JPG komprimieren](/compress-jpg) — Preset **Formular / Portal** (65 % Qualität, max. 1280 px). Vorher/Nachher-Größe in der Ergebnisliste prüfen, dann erneut hochladen. Nichts geht zu HeicSave hoch.

## Warum Portale „normale“ JPGs ablehnen

Handykameras liefern **12–48 MP** JPEGs — oft **4–8 MB** pro Portrait. Portale nennen nur MB-Limits, nicht Pixel.

| Portal-Typ | Typisches Limit | Was wirklich nötig ist |
|---|---|---|
| US-Uni-Bewerbung | 2–5 MB | Lesbares Ausweis-/Passfoto |
| UK Behörden / NHS | 2–4 MB | Dokumentenscan, nicht 48 MP |
| EU Jobbörsen | 2–5 MB | Bewerbungsfoto |
| US DMV / Visum | 1–3 MB | Flacher Scan, ~1280 px reicht |
| Schulanmeldung | 1–2 MB | Schülerfoto, strenge Caps |

## Cloud vs. browser-lokal

Online-Kompressoren **laden hoch**. Schlecht für Pass-, KYC- oder Arzt-Scans. HeicSave re-encodiert im Tab — siehe [Datenschutz](/blog/privacy-browser-image-conversion).

## Schritt für Schritt (2-MB-Cap)

1. **[JPG komprimieren](/compress-jpg)** in Chrome/Edge öffnen.
2. Preset **Formular / Portal** wählen.
3. JPG ablegen → **Komprimieren**.
4. Noch zu groß? **Kleinste Datei** oder Qualität manuell senken.
5. Herunterladen und Portal erneut versuchen.

## Presets und Caps

| Preset | Qualität / Breite | Für |
|---|---|---|
| Formular / Portal | 65 % · 1280 px | Job/Behörde/Schule 2–5 MB |
| E-Mail-Anhang | 75 % · 1920 px | Outlook/Gmail |
| Ausweis & Scan | 82 % · 2048 px | Lesbarer Text |
| Kleinste Datei | 55 % · 1280 px | Unter 1 MB |

## Verwandte Ratgeber

- [HEIC-E-Mail-Anhang](/blog/heic-outlook-email-attachment)
- [Datenschutz browser-lokal](/blog/privacy-browser-image-conversion)

**Jetzt:** [JPG komprimieren](/compress-jpg)`,
  },
  "strip-exif-before-selling-online": {
    title: "Foto-GPS entfernen vor Facebook Marketplace oder Kleinanzeigen (2026)",
    description:
      "iPhone-Fotos enthalten GPS in EXIF. Metadaten lokal entfernen vor Marketplace, Craigslist oder eBay — HEIC, JPG, PNG stapelweise im Browser.",
    content: `*Zuletzt aktualisiert: 16. Juni 2026*

**Kurzantwort:** Vor dem Inserieren **[EXIF entfernen](/strip-exif)** in Chrome/Edge nutzen. HEIC, JPG, PNG, WebP, AVIF werden lokal ohne GPS, Kameramodell und Zeitstempel neu kodiert. ZIP laden — kein Upload zu HeicSave.

## Was EXIF verrät

| Datentyp | Im Handyfoto? | Risiko beim Verkauf |
|---|---|---|
| GPS | Oft ja | Wohnadresse, Treffpunkt |
| Aufnahmedatum | Ja | Zeit am Ort |
| Kameramodell | Ja | Gerät identifizierbar |

EXIF-Entfernung löscht **versteckte** Felder — nicht Gesichter oder Seriennummern im Bild.

## Warum Cloud-Tools riskant sind

Listing-Fotos zeigen Ihre Wohnung und Wertgegenstände. Upload an Drittanbieter = volle Auflösung auf fremdem Server. HeicSave bleibt browser-lokal — [Datenschutz](/blog/privacy-browser-image-conversion).

## Schritt für Schritt

1. **[EXIF entfernen](/strip-exif)** öffnen.
2. Fotos ablegen (HEIC + JPG gemischt OK).
3. **Konvertieren** → ZIP laden.
4. Bereinigte Dateien auf Marketplace/Kleinanzeigen hochladen.

## Original aufbewahren

Unveränderte Originale privat speichern **bevor** Sie Metadaten für öffentliche Anzeigen entfernen.

## Verwandte Ratgeber

- [Datenschutz browser-lokal](/blog/privacy-browser-image-conversion)
- [JPG-Portal-Limits](/blog/jpg-portal-upload-size-limits)

**Jetzt:** [EXIF entfernen](/strip-exif)`,
  },
};
