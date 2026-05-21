/** German overlays for high-intent blog posts (slug → fields). */
export const deBlogPosts: Record<
  string,
  { title: string; description: string; content: string }
> = {
  "convert-avif-to-jpg-windows": {
    title: "AVIF in JPG unter Windows umwandeln – kostenlos, ohne Upload (2026)",
    description:
      "AVIF-Bilder unter Windows 10/11 in Chrome oder Edge in JPG konvertieren: Stapelverarbeitung, Qualitätsregler, ZIP-Download. Keine Installation, keine Uploads auf fremde Server.",
    content: `Sie haben eine **.avif**-Datei heruntergeladen – oder eine Website liefert Bilder nur noch als AVIF – und Windows öffnet sie weder in der E-Mail, in Word noch in älteren Upload-Formularen. **JPG** bleibt das Format, das praktisch überall funktioniert. In diesem Ratgeber erfahren Sie, wie Sie **AVIF unter Windows zuverlässig in JPG umwandeln** – ohne Codec-Pakete und ohne Ihre Fotos an unbekannte Online-Dienste zu senden.

> **Kurzantwort:** Öffnen Sie unser kostenloses Tool **[AVIF in JPG](/avif-to-jpg)** in **Chrome oder Edge**, legen Sie Ihre Dateien ab, stellen Sie die JPEG-Qualität ein, klicken Sie auf **Konvertieren** und laden Sie einzelne JPGs oder ein ZIP-Archiv herunter – die gesamte Verarbeitung läuft im Browser.

## Was ist AVIF?

**AVIF** (AV1 Image File Format) ist ein modernes Bildformat mit sehr effizienter Kompression. Websites und CDNs nutzen es, weil die Dateien oft kleiner sind und trotzdem scharf wirken. Unter Windows erwarten **Fotos**, ältere **Paint**-Versionen und viele Desktop-Programme jedoch weiterhin **.jpg** oder **.png** – nicht .avif.

Genau deshalb sind Suchanfragen wie **„avif to jpg“** so verbreitet: Im Browser sieht alles gut aus, am PC bleibt die Datei sonst oft hängen.

## Unterstützt Windows 10/11 AVIF von Haus aus?

Die Unterstützung hat sich verbessert, ist aber weiterhin uneinheitlich:

- **Codecs aus dem Microsoft Store** helfen in manchen Apps – nicht aber in jedem Workflow (Outlook, ältere CMS, Druckereien).
- **Paint** auf älteren Windows-Builds öffnet AVIF häufig gar nicht.
- **Größere Ordner** von einem CDN oder Design-Export lassen sich mühsam Datei für Datei bearbeiten.

Einmal in JPG zu konvertieren ist meist schneller, als auf jedem Rechner erneut mit Codecs zu experimentieren.

## Methode 1: Konvertierung im Browser (empfohlen – ohne Upload)

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

**Bereit?** Öffnen Sie **[AVIF in JPG](/avif-to-jpg)** und wandeln Sie Ihre erste Datei in unter einer Minute um.`,
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

Ausführlich nur für Windows: [HEIC unter Windows öffnen und konvertieren](/blog/heic-windows-guide).`,
  },
};
