import type { ToolSlug } from "@/lib/tools-config";
import type { ToolSeoSection } from "@/lib/tools-l10n/types";

export const deToolSeoSections: Record<ToolSlug, ToolSeoSection[]> = {
  "heic-to-jpg": [
    {
      heading: "HEIC in JPG für iPhone-Nutzer in EU und USA",
      paragraphs: [
        "Täglich entstehen Millionen HEIC-Fotos. Für E-Mail an die Familie, Versicherungsunterlagen, Jobportale oder Plattformen, die nur JPG akzeptieren, brauchen Sie einen schnellen, kostenlosen und vertrauenswürdigen Konverter.",
        "HeicSave richtet sich an datenschutzbewusste Nutzer in Europa und Nordamerika: kein Konto, kein Cloud-Upload, klare Cookie-Einwilligung nach DSGVO. Ihre Fotos bleiben auf dem Gerät, während Sie HEIC im Browser in JPG umwandeln.",
      ],
    },
    {
      heading: "Was ist HEIC und warum nutzt das iPhone es?",
      paragraphs: [
        "HEIC (High Efficiency Image Container) ist Apples Standardfotoformat auf modernen iPhones und iPads. Die Kompression spart oft etwa die Hälfte des Speichers bei ähnlicher Qualität wie JPEG.",
        "Der Nachteil ist Kompatibilität: Windows ohne HEIC-Erweiterung, ältere Android-Geräte, viele Webformulare und Druckereien erwarten .jpg. Wenn jemand sagt „Ich kann deine Fotos nicht öffnen“, ist oft HEIC schuld.",
      ],
    },
    {
      heading: "HEIC vs. JPG: wann umwandeln?",
      paragraphs: [
        "Behalten Sie HEIC auf dem iPhone für den Alltag. Wandeln Sie in JPG um, wenn Sie außerhalb des Apple-Ökosystems teilen: E-Mail, USB für die Familie, Arbeitgeber-Portale, Immobilien, Schulprojekte oder Netzwerke ohne HEIC-Upload.",
        "JPG ist seit Jahrzehnten der universelle Standard. Die Umwandlung kostet etwas Dateigröße, bringt aber maximale Kompatibilität.",
      ],
    },
    {
      heading: "HEIC in JPG unter Windows (ohne Codec-Installation)",
      paragraphs: [
        "Windows 10/11 zeigt .heic oft als „nicht unterstützt“, bis Sie die HEIF-Erweiterung aus dem Microsoft Store installieren — auf Firmen-Laptops oft blockiert.",
        "Browser-Konvertierung umgeht das: HeicSave in Chrome oder Edge öffnen, .heic-Dateien ablegen, JPGs herunterladen, die in Fotos, Paint und Word funktionieren. Keine Admin-Rechte nötig.",
      ],
    },
    {
      heading: "HEIC in JPG auf dem Mac",
      paragraphs: [
        "macOS öffnet HEIC in Vorschau und Fotos. Für viele Urlaubsfotos ist Einzel-Export mühsam.",
        "Nutzen Sie diese Seite in Safari oder Chrome für Stapel-Konvertierung im Browser. Downloads landen als normale .jpg in Ihrem Download-Ordner.",
      ],
    },
    {
      heading: "HEIC in JPG auf iPhone und Android",
      paragraphs: [
        "Dauerhaft JPG auf dem iPhone: Einstellungen → Kamera → Formate → „Kompatibel“. Bestehende HEIC-Dateien müssen trotzdem konvertiert werden.",
        "Viele Android-Geräte öffnen HEIC nicht nativ. Konvertieren Sie am PC im Browser, dann teilen Sie JPGs.",
      ],
    },
    {
      heading: "Stapel HEIC in JPG — privat und kostenlos",
      paragraphs: [
        "Urlaubsordner oder Büro-Scan? Viele .heic-Dateien in einer Sitzung, ein Klick, Download als ZIP — ohne festes Dateilimit.",
        "Lokale Verarbeitung eignet sich für sensible Inhalte: medizinische Bilder, Rechtsdokumente, Familienfotos und personenbezogene EU-Daten.",
      ],
    },
    {
      heading: "Qualität, EXIF und Dateigröße",
      paragraphs: [
        "JPG wird mit hoher Qualität (ca. 90 %) encodiert — gut für Druck, Social Media und Uploads. HEIC ist bereits komprimiert; JPG ist eine zweite Generation — für Teilen meist unsichtbar, für schwere Bearbeitung eher [HEIC in PNG](/heic-to-png).",
        "Gängige EXIF-Felder (Datum, Kamera, Ausrichtung) werden übernommen, wenn der Browser es erlaubt. Originale HEIC als Archiv behalten.",
      ],
    },
    {
      heading: "Warum HeicSave statt Cloud-Upload-Konverter?",
      paragraphs: [
        "Viele „kostenlose Online-Konverter“ laden Dateien auf Server hoch — Datenschutzrisiko und langsame Mobilfunk-Uploads. HeicSave erhält Ihre Bildbytes nicht; Konvertierung per WebAssembly und Canvas im Tab.",
        "Das passt zu DSGVO-Erwartungen: keine Verarbeitung Ihrer Fotos auf unseren Servern. Analytics und AdSense sind getrennt von den Bilddaten.",
      ],
    },
    {
      heading: "Typische Probleme und Lösungen",
      paragraphs: [
        "Schlägt die Konvertierung fehl: Chrome/Edge am Desktop, weniger Tabs, kleinere Stapel. Sehr große Einzelbilder ggf. zuerst in Fotos verkleinern.",
        "Falsche Downloads: Seite hart neu laden (Strg+F5), echte .heic/.heif wählen — nicht Live-Photo-.mov-Dateien.",
      ],
    },
  ],
  "heic-to-png": [
    {
      heading: "HEIC in PNG für Designer",
      content:
        "Grafiker und Entwickler brauchen oft PNG-Assets. Dieses Tool verbindet iPhone-HEIC-Exporte mit PNG-Pipelines — ohne Kundenfotos auf einen Server zu schicken.",
    },
    {
      heading: "Wann HEIC in PNG statt JPG sinnvoll ist",
      paragraphs: [
        "PNG ist nach dem Decode verlustfrei — gut für Screenshots, UI und Text, wo JPG-Ringe sichtbar sind. HEIC bleibt komprimierte Quelle, PNG vermeidet einen zweiten verlustbehafteten Schritt.",
        "Für Figma, Canva oder Druckvorbereitung oft PNG. Konvertierung im Browser — Assets bleiben lokal.",
      ],
    },
    {
      heading: "Stapel HEIC in PNG mit ZIP",
      paragraphs: [
        "Viele .heic-Dateien, ein Durchlauf, ZIP mit PNGs. Kein festes 5-Dateien-Limit — nur Gerätespeicher.",
        "Unter Windows ohne HEIC-Codecs oft schneller als Store-Erweiterungen auf gesperrten Laptops.",
      ],
    },
    {
      heading: "Dateigröße",
      paragraphs: [
        "PNG ist meist größer als JPG aus demselben HEIC — normal: Speicher gegen Bearbeitungsspielraum.",
        "Für E-Mail-Urlaubsalben oft [HEIC in JPG](/heic-to-jpg); dieses PNG-Tool für kreative Workflows.",
      ],
    },
  ],
  "webp-to-png": [
    {
      heading: "WebP in PNG für Entwickler",
      content:
        "Liefert Ihre Pipeline WebP, Stakeholder aber PNG? Konvertierung lokal — sinnvoll bei NDA-Projekten, ohne ImageMagick-Installation.",
    },
    {
      heading: "Warum WebP in PNG 2026 noch relevant ist",
      paragraphs: [
        "Websites nutzen WebP für Geschwindigkeit; E-Mail, PowerPoint und ältere Photoshop-Versionen erwarten oft PNG. CDN-Downloads brauchen vor der Weitergabe oft eine lokale Umwandlung.",
        "HeicSave dekodiert WebP per Canvas — keine Uploads.",
      ],
    },
    {
      heading: "Entwickler und NDA-Workflows",
      paragraphs: [
        "Marketing-Screenshots nicht an zufällige Cloud-Konverter? WebP in PNG in Chrome/Edge — Stapel und ZIP für viele Icons aus Builds.",
      ],
    },
    {
      heading: "Animiertes WebP",
      paragraphs: [
        "Diese Seite ist für statisches WebP. Animiertes WebP liefert ggf. nur das erste Frame — für Bewegung eigenes Tool oder Original behalten.",
      ],
    },
  ],
  "webp-to-jpg": [
    {
      heading: "WebP in JPG für E-Mail und Legacy-Software",
      content:
        "JPG bleibt das sicherste Anhangsformat. WebP von Websites oder Android? Hier lokal in JPG umwandeln vor dem Weiterleiten.",
    },
    {
      heading: "WebP in JPG für E-Mail und ältere Programme",
      paragraphs: [
        "Qualitätsregler (Standard 90 %) für Größe vs. Schärfe. Einzeldownload oder ZIP für Stapel.",
      ],
    },
    {
      heading: "Transparenz und Hintergrund",
      paragraphs: [
        "JPG hat kein Alpha. Transparente WebP-Bereiche werden auf Vollfarbe gelegt — erwartetes Verhalten für Fotos.",
      ],
    },
    {
      heading: "Lokal im Browser, ohne Konto",
      paragraphs: [
        "Kein Login, kein Wasserzeichen, kein künstliches Stapel-Limit. Verarbeitung im Tab — keine Server-Speicherung.",
      ],
    },
  ],
  "avif-to-jpg": [
    {
      heading: "AVIF in JPG für E-Mail, Folien und Druck",
      paragraphs: [
        "Moderne Sites liefern AVIF zur Bandbreiten-Ersparnis. Teams brauchen oft JPG für Outlook, PowerPoint oder Portale ohne AVIF.",
        "Browser-Konvertierung — keine Kampagnen-Assets an unbekannte Cloud-Dienste.",
      ],
    },
    {
      heading: "Was ist AVIF und warum nutzen Sites es?",
      paragraphs: [
        "AVIF (AV1 Image File Format) komprimiert stark — oft kleiner als JPEG oder WebP bei ähnlicher Qualität. WordPress, CDNs und Performance-Frontends setzen zunehmend auf AVIF.",
        "Desktop-Workflows erwarten aber oft noch JPG, wenn Apps AVIF nicht dekodieren.",
      ],
    },
    {
      heading: "AVIF in JPG unter Windows",
      paragraphs: [
        "Fotos und älteres Paint öffnen .avif oft nicht. HeicSave in Chrome/Edge: AVIF ablegen, JPGs für Fotos, Paint, Word — ohne Codec-Pakete oder Store-Rechte.",
      ],
    },
    {
      heading: "AVIF in JPG auf dem Mac",
      paragraphs: [
        "Safari und Chrome dekodieren AVIF im Browser. Ordner von CDN oder Website? Stapel konvertieren, ZIP mit JPGs für Vorschau und Fotos.",
      ],
    },
    {
      heading: "AVIF von Website oder CDN",
      paragraphs: [
        "Rechtsklick-Speichern liefert oft .avif. Editor oder Messenger lehnen ab? Lokal in JPG — HeicSave lädt Dateien nicht hoch, passt zu NDA-Marketing.",
      ],
    },
    {
      heading: "Qualität, Stapel und ZIP",
      paragraphs: [
        "JPEG-Qualität vor dem Konvertieren (Standard 90 %). Viele AVIF in einer Sitzung — kein festes Limit — Desktop Chrome/Edge für große Ordner.",
      ],
    },
    {
      heading: "AVIF vs. JPG vs. WebP",
      paragraphs: [
        "AVIF oft kleinste Datei. WebP weit verbreitet im Web. JPG sicherste Wahl für E-Mail und alte Desktop-Apps. Umwandeln, wenn Kompatibilität zählt.",
      ],
    },
    {
      heading: "AVIF in JPG ohne Upload (Datenschutz)",
      paragraphs: [
        "Viele Online-Konverter senden Dateien an Server. HeicSave dekodiert im Tab. Auch [WebP in JPG](/webp-to-jpg) oder [AVIF in PNG](/avif-to-png) verfügbar.",
      ],
    },
    {
      heading: "Fehlerbehebung AVIF in JPG",
      paragraphs: [
        "Fehler? Chrome/Edge am Desktop, Endung .avif prüfen, bei wenig RAM kleinere Stapel, Strg+F5 und erneut versuchen.",
      ],
    },
  ],
  "avif-to-png": [
    {
      heading: "AVIF in PNG für Design-Pipelines",
      content:
        "Teams erhalten zunehmend AVIF von performanten Sites. Viele Tools und Druckchecks verlangen PNG — lokal konvertieren, vertrauliche Assets nicht hochladen.",
    },
    {
      heading: "Verlustfreies PNG aus komprimiertem AVIF",
      paragraphs: [
        "PNG speichert dekodierte Pixel verlustfrei relativ zum AVIF-Decode, stellt aber kein verlorenes AVIF-Detail wieder her. Dateien meist größer als AVIF.",
      ],
    },
    {
      heading: "Stapel und Browser-Tipps",
      paragraphs: [
        "Große Stapel am Desktop mit genug RAM. Tab abstürzt? Ordner in kleinere Gruppen teilen — kein künstliches Dateilimit.",
      ],
    },
  ],
  "jpg-to-webp": [
    {
      heading: "JPG in WebP für schnellere Seiten",
      content:
        "WebP schrumpft Hero-Bilder und Blog-Fotos oft um 25–35 % — gut für LCP und mobiles Datenvolumen. Lokal encodieren vor WordPress oder statischem Host.",
    },
    {
      heading: "Schnellere Seiten mit JPG in WebP",
      paragraphs: [
        "WebP-Qualität (Standard 85 %) vor dem Konvertieren. Niedriger = kleiner, höher = mehr Detail.",
      ],
    },
    {
      heading: "Immer JPG-Fallback ausliefern",
      paragraphs: [
        "Nutzen Sie <picture> oder Framework-Komponenten: WebP mit JPG-Fallback. E-Mail und sehr alte Browser brauchen JPEG.",
      ],
    },
    {
      heading: "Private Stapel-Kodierung",
      paragraphs: [
        "Viele JPGs in einer Sitzung, ZIP mit WebP — Quellen verlassen Ihr Gerät nicht. Hilfreich unter DSGVO bei Kundengalerien.",
      ],
    },
  ],
  "png-to-webp": [
    {
      heading: "PNG-UI-Assets für Produktion verkleinern",
      content:
        "Große PNG-Icons blähen Seiten auf. WebP mit Alpha kann Bytes stark reduzieren — vor dem Commit im Browser prüfen, ohne ImageMagick.",
    },
    {
      heading: "PNG-UI für Produktion verkleinern",
      paragraphs: [
        "Marketing- und SaaS-Dashboards profitieren von kleineren Assets. PNG in WebP im Browser testen.",
      ],
    },
    {
      heading: "Transparenz in WebP",
      paragraphs: [
        "WebP unterstützt Alpha wie PNG. In Zielbrowsern prüfen; PNG-Master im Repo behalten.",
      ],
    },
    {
      heading: "Verlustbehaftetes WebP aus PNG",
      paragraphs: [
        "Encoder nutzt verlustbehaftes WebP für kleinere Dateien. Bei pixelgenauer UI gezoomt prüfen; Qualität am Regler erhöhen.",
      ],
    },
  ],
};
