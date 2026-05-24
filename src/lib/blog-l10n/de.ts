/** German overlays for high-intent blog posts (slug → fields). */
export const deBlogPosts: Record<
  string,
  { title: string; description: string; content: string }
> = {
  "convert-avif-to-jpg-windows": {
    title: "AVIF in JPG unter Windows (kostenlos, ohne Upload)",
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

Ausführlich nur für Windows: [HEIC unter Windows öffnen und konvertieren](/blog/heic-windows-guide). Für Google-Drive-Alben: [HEIC aus Google Drive stapelweise konvertieren](/blog/heic-google-drive-batch-convert).`,
  },
  "convert-webp-to-jpg-windows": {
    title: "WebP in JPG unter Windows (kostenlos, ohne Upload)",
    description:
      "WebP-Bilder unter Windows 10/11 in Chrome oder Edge in JPG konvertieren: Stapelverarbeitung, Qualitätsregler, ZIP-Download. Keine Installation, kein Server-Upload.",
    content: `Sie haben eine **.webp**-Datei von einer Website, aus Slack oder einem Design-Export gespeichert – und Windows öffnet sie weder in Word noch in Outlook noch in älteren Upload-Formularen. **JPG** bleibt das Format, das praktisch überall funktioniert. Dieser Ratgeber zeigt zuverlässige Wege, **WebP unter Windows in JPG umzuwandeln**, ohne Software zu installieren oder Fotos an unbekannte Server zu senden.

> **Kurzantwort:** Öffnen Sie unser kostenloses Tool **[WebP in JPG](/webp-to-jpg)** in **Chrome oder Edge**, legen Sie Ihre Dateien ab, stellen Sie die JPEG-Qualität ein, klicken Sie auf **Konvertieren** und laden Sie JPGs oder ein ZIP-Archiv herunter – alles im Browser.

## Was ist WebP?

**WebP** ist Googles modernes Bildformat fürs Web. Es ist oft 25–35 % kleiner als JPG bei ähnlicher Qualität. Browser decodieren WebP nativ; viele **Desktop-Apps unter Windows** tun das noch nicht.

Deshalb sind Suchanfragen wie **„webp to jpg“** so verbreitet: Im Browser funktioniert die Datei, in E-Mail-Anhängen und Legacy-CMS oft nicht.

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

> **Kurzantwort:** **[HEIC in PNG](/heic-to-png)** in Chrome oder Edge öffnen, .heic-Dateien ablegen, konvertieren, einzeln oder als ZIP herunterladen – alles lokal im Browser.

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

> **Kurzantwort:** Aus Drive herunterladen → ZIP entpacken → **[HEIC in JPG](/heic-to-jpg)** in Chrome/Edge → JPG-ZIP laden → bei Bedarf zurück in Drive hochladen.

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
      "DSGVO, Kundenfotos und warum HEIC/AVIF auf dem Gerät bleiben sollten — inkl. DevTools-Check ohne Upload.",
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
      "Ehrlicher Vergleich browser-lokaler HEIC-Konverter: Datenschutz, Stapel-Limits, Sprachen, EXIF.",
    content: `Mehrere Seiten werben mit „kein Upload“. **HeicSave** vs. **[HEIC.dev](https://heic.dev)** und **[HEICcon](https://heiccon.com)** — ehrlich verglichen.

> **Kurz:** Alle drei konvertieren lokal. HeicSave: **kein Stapel-Hardcap**, **de/fr**, **AVIF/WebP-Toolkette**. HEIC.dev: mehr Ausgabeformate. HEICcon: Drive-Import, 50er-Stapel.

## Tabelle

| | **HeicSave** | HEIC.dev | HEICcon |
|---|---|---|---|
| Upload | **Nein** | Nein | Nein |
| Stapel-Cap | **Kein festes Limit** | 500 | 50 |
| ZIP | Ja | Ja | Ja |
| HEIC→WebP | Ja | Ja | Ja |
| AVIF/WebP same site | **Ja** | HEIC-fokus | HEIC-fokus |
| Sprachen | **de, en, fr** | v. a. en | v. a. en |
| Ordner wählen | **Ja** | Ordner-Drag | Datei-Picker |

## Wann HeicSave passt

- **DACH/FR** mit lokalisierten Tool-Seiten.
- **Große Stapel** ohne 50/500-Deckel (RAM bleibt Limit).
- **Entwickler** mit [AVIF in JPG](/avif-to-jpg) auf derselben Domain.
- **DevTools-Privacy-Check** auf Tool-Seiten.

## Probieren

[HEIC in JPG](/heic-to-jpg) · [HEIC in WebP](/heic-to-webp) · [Vergleichs-Rundown](/blog/best-heic-converters-2026)`,
  },
};
