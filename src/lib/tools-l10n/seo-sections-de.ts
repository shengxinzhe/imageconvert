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
    {
      heading: "HeicSave im Vergleich zu anderen HEIC→JPG-Methoden",
      paragraphs: [
        "Nicht jede Methode passt zu jedem Szenario. Cloud-Konverter bedeuten Upload-Wartezeit und Datenschutzfragen. Windows-Store-Codecs helfen bei der Vorschau — konvertieren aber keinen Hochzeitsordner für Outlook. Die Tabelle fasst unsere Erfahrung unter Windows 11 und macOS Sonoma (2026) zusammen.",
        "HeicSave dekodiert im Browser-Tab. Das zählt bei Versicherungsunterlagen, HR-Portalen und Familienalben, die nicht auf fremde Server sollen.",
      ],
      table: {
        caption:
          "Praxisvergleich für typische iPhone-Stapel (50–200 Dateien). Abhängig von RAM und Browser.",
        headers: ["Methode", "Dateien verlassen Gerät?", "Stapel + ZIP", "EXIF", "Ideal für"],
        rows: [
          [
            "HeicSave (diese Seite)",
            "Nein — lokal per WebAssembly",
            "Ja, kein festes Limit",
            "Oft (Datum, Kamera, Ausrichtung)",
            "Datenschutz, Windows ohne Codecs, große Ordner",
          ],
          [
            "Cloud-Upload-Konverter",
            "Ja — Upload auf fremde Server",
            "Unterschiedlich; Limits üblich",
            "Oft entfernt",
            "Einzeldateien ohne Datenschutzbedenken",
          ],
          [
            "Windows Fotos + HEIF-Erweiterung",
            "Bleibt lokal",
            "Manuell einzeln exportieren",
            "Teilweise",
            "Nur wenige Dateien ansehen",
          ],
          [
            "Mac Vorschau / Fotos-Export",
            "Bleibt lokal",
            "Mühsam ab 100+ Dateien",
            "Meist ja",
            "Kleine Mengen am Mac",
          ],
          [
            "iPhone Einstellungen → Kompatibel",
            "N/A — nur neue Fotos",
            "N/A",
            "N/A",
            "Zukünftiges HEIC vermeiden, alte Ordner nicht",
          ],
        ],
      },
    },
    {
      heading: "JPG, PNG oder WebP nach HEIC wählen",
      paragraphs: [
        "HEIC ist Speicherformat auf dem iPhone. Außerhalb von Apple wählen Sie das Zielformat nach Verwendung — nicht umgekehrt. Orientierung vor dem Konvertieren eines ganzen Urlaubsordners.",
      ],
      table: {
        headers: ["Ziel", "Konvertieren zu", "Warum"],
        rows: [
          ["E-Mail, WhatsApp, Arbeitgeber, Druck", "JPG", "Universal; klein genug für Fotos"],
          ["Photoshop, Figma, Folien mit Text", "PNG", "Verlustfrei-freundlich; HEIC in PNG hier"],
          ["WordPress / Shopify", "WebP", "Kleiner als JPG; HEIC in WebP"],
          ["Premiere / DaVinci Standbilder", "JPG-Serie", "Stabiler Import"],
          ["Archiv nach Bearbeitung", "HEIC behalten + PNG export", "Nicht die einzige Kopie als minderwertiges JPG"],
        ],
      },
    },
    {
      heading: "Technische Grenzen und Browser (2026)",
      paragraphs: [
        "Kein künstliches Fünf-Dateien-Limit. Praktische Grenze: RAM und HEIC-Unterstützung. Auf 8 GB Windows: 40–60 Vollauflösungsfotos pro Stapel; auf 16 GB Desktop-Chrome oft 150–200, bevor der Tab schwer wird.",
        "Tab langsam? ZIP laden, Seite neu laden, nächsten Stapel. Keine Live-Photo-.mov — nur .heic-Standbilder.",
      ],
      table: {
        headers: ["Umgebung", "HEIC-Dekodierung", "Stapel-Tipp"],
        rows: [
          ["Chrome / Edge Windows 11", "Ja", "Ideal für 100+ Dateien als ZIP"],
          ["Firefox Windows", "In neueren Versionen", "Kleinere Stapel bei wenig RAM"],
          ["Safari Mac", "Ja", "Gut für AirDrop-Ordner"],
          ["Safari iPhone / iPad", "Ja", "Kleinere Stapel; WLAN + Netzteil"],
          ["Chromebook", "Meist ja", "Kleinere Stapel; siehe Chromebook-Ratgeber"],
        ],
      },
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
  "heic-to-webp": [
    {
      heading: "HEIC in WebP für schnellere Website-Uploads",
      paragraphs: [
        "Moderne CMS und Blogs akzeptieren WebP für kleinere Uploads. iPhone-HEIC muss zuerst konvertiert werden — lokal im Browser, ohne Cloud.",
        "Nutzen Sie Breiten-Presets, wenn Formulare maximale Bildgrößen vorgeben.",
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
    {
      heading: "Für Entwickler und Designer — ohne Cloud-Warteschlange",
      paragraphs: [
        "Keine Lust auf Upload-Limits und Warteschlangen bei Online-Konvertern? Megabytes WebP im aktiven Browser-Tab in JPG — ohne Server-Upload. Für WordPress-Exports, Figma-Handoffs und CI-Assets.",
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
      heading: "Für Entwickler und Designer — ohne Cloud-Warteschlange",
      paragraphs: [
        "Warteschlangen bei Cloud-Konvertern nerven? Megabytes AVIF/WebP sofort im Tab in JPG — lokal mit JavaScript und Canvas, kein Upload an HeicSave. Für Frontend-Devs, UI-Designer und WordPress-Betreiber.",
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
  "jpg-to-png": [
    {
      heading: "JPG in PNG — Vergleich der Methoden",
      paragraphs: [
        "Viele Portale akzeptieren kein JPEG, aber PNG für Ausweise oder Formulare. Cloud-Konverter laden Ihre Dokumente hoch. Photoshop exportiert nur einzeln.",
        "HeicSave kodiert JPG lokal im Browser zu PNG — wichtig bei Namen, Adressen oder Kontonummern auf dem Scan.",
      ],
      table: {
        caption: "Typische Workflows für Formular-Uploads (2026).",
        headers: ["Methode", "Dateien verlassen Gerät?", "Stapel + ZIP", "Am besten für"],
        rows: [
          ["HeicSave (diese Seite)", "Nein — Canvas im Tab", "Ja, kein festes Limit", "Private Scans, Stapel-Formulare"],
          ["Cloud-Konverter", "Ja — Server-Upload", "Oft Limits", "Einmal-Konvertierung ohne Datenschutzbedenken"],
          ["Photoshop / GIMP", "Lokal", "Manuell einzeln", "Bearbeitung vor Export"],
          ["Paint / Preview", "Lokal", "Eine Datei", "Einzelner Screenshot oder Ausweis"],
        ],
      },
    },
    {
      heading: "Wann JPG in PNG sinnvoll ist",
      table: {
        headers: ["Situation", "Zu PNG?", "Warum"],
        rows: [
          ["Behörden-/Uni-Portal nur PNG", "Ja", "Upload wird nicht abgelehnt"],
          ["Design-Import (Figma, Canva)", "Ja", "Stabile Pipeline ohne extra JPEG-Verlust"],
          ["Text oder scharfe Kanten im Bild", "Oft ja", "Weniger JPEG-Ringing"],
          ["E-Mail / WhatsApp Foto", "Meist nein — PNG in JPG", "JPG kleiner und überall akzeptiert"],
        ],
      },
    },
    {
      heading: "Formulare, Scans und Design-Handoffs",
      paragraphs: [
        "Bewerbungsportale lehnen manchmal .jpg ab — PNG lokal erzeugen, ohne ID an Drittanbieter zu senden.",
        "Marketing-Teams brauchen PNG für Folien mit Text — Stapel konvertieren, ZIP laden, in PowerPoint einfügen.",
        "Bei Fehlern: echtes JPEG prüfen, Chrome/Edge am Desktop für große Stapel nutzen.",
      ],
    },
  ],
  "png-to-jpg": [
    {
      heading: "PNG in JPG — Vergleich der Methoden",
      paragraphs: [
        "PNG-Screenshots sind oft viel größer als JPEG. Cloud-Tools laden hoch. Paint speichert einzeln als JPG.",
        "HeicSave konvertiert PNG stapelweise im Browser mit Qualitätsregler — vor Outlook-Anhängen und Portal-Limits.",
      ],
      table: {
        headers: ["Methode", "Upload?", "Stapel + ZIP", "Qualitätskontrolle"],
        rows: [
          ["HeicSave", "Nein", "Ja", "Regler 60–100 %"],
          ["Cloud-Konverter", "Ja", "Variiert", "Oft feste Qualität"],
          ["Paint / Preview", "Nein", "Einzeln", "Begrenzte Presets"],
          ["Photoshop Export", "Nein", "Manuell", "Volle Kontrolle, langsam"],
        ],
      },
    },
    {
      heading: "Wann PNG in JPG passt",
      table: {
        headers: ["Ziel", "PNG→JPG?", "Tipp"],
        rows: [
          ["Outlook/Gmail-Anhang zu groß", "Ja", "85–90 % Qualität starten"],
          ["Portal 2–5 MB Limit", "Ja", "Danach [JPG komprimieren](/compress-jpg)"],
          ["WhatsApp / Telegram", "Ja", "JPG spart mobile Daten"],
          ["Logo mit Transparenz", "Vorsicht", "JPG füllt Alpha — PNG-Master behalten"],
        ],
      },
    },
    {
      heading: "Dateigröße und Transparenz",
      paragraphs: [
        "Foto-PNGs schrumpfen als JPG oft um 70–90 %. Transparenz wird auf Hintergrund gelegt — normal bei JPG.",
        "Ordner per Stapel konvertieren, ZIP mit JPGs laden. Desktop Chrome/Edge für große Mengen.",
      ],
    },
  ],
  "compress-jpg": [
    {
      heading: "JPG komprimieren — Methodenvergleich",
      paragraphs: [
        "Viele Online-Kompressoren laden Fotos hoch. HeicSave kodiert lokal mit Qualität und max. Breite — für Portale und E-Mail ohne Cloud-Risiko.",
      ],
      table: {
        headers: ["Methode", "Upload?", "Größe steuern", "Am besten für"],
        rows: [
          ["HeicSave", "Nein", "Regler + Szenen-Presets", "Formulare, E-Mail, Stapel"],
          ["Cloud-Kompressoren", "Ja", "Variiert", "Schnell, wenn Datenschutz egal"],
          ["Handy-Galerie", "Nein", "Wenig Kontrolle", "Alltag, nicht exakte MB"],
          ["Photoshop Save for Web", "Nein", "Volle Kontrolle", "Profi, langsam bei vielen Dateien"],
        ],
      },
    },
    {
      heading: "Upload-Limits nach Szenario",
      table: {
        headers: ["Szenario", "Typisches Limit", "Preset", "Wenn noch zu groß"],
        rows: [
          ["Job-/Behördenformular", "2–5 MB", "Formular / Portal", "Kleinste Datei oder 55 %"],
          ["E-Mail-Anhang", "~10–25 MB gesamt", "E-Mail-Anhang", "Jede Datei einzeln komprimieren"],
          ["Ausweis / Beleg", "Lesbarer Text", "Ausweis & Scan", "Qualität vor Breite senken"],
          ["Messenger", "Oft streng", "Chat & Social", "Kleinste Datei"],
        ],
      },
    },
    {
      heading: "Qualität, EXIF und Ergebnis",
      paragraphs: [
        "Bei 75–85 % meist OK für Formulare. Unter 60 % Text auf Scans prüfen.",
        "Re-Encoding entfernt oft GPS/EXIF — vor Upload oft gewünscht. Original behalten.",
        "Stapel + ZIP; Vorher/Nachher-Größe pro Datei in der Ergebnisliste.",
      ],
    },
  ],
  "strip-exif": [
    {
      heading: "EXIF entfernen — Methodenvergleich",
      paragraphs: [
        "EXIF kann GPS und Gerätedaten enthalten. Cloud-Dienste erhalten Ihre Bildbytes. exiftool ist mächtig, aber CLI-lastig.",
        "HeicSave kodiert lokal neu — HEIC, JPG, PNG, WebP, AVIF im Stapel; HEIC→JPG ohne EXIF-Übernahme.",
      ],
      table: {
        headers: ["Methode", "Upload?", "HEIC", "Stapel + ZIP"],
        rows: [
          ["HeicSave", "Nein", "Ja → JPG ohne EXIF", "Ja"],
          ["Cloud EXIF-Tools", "Ja", "Selten", "Oft Limits"],
          ["exiftool", "Nein", "Mit Plugins", "Skriptbar"],
          ["Handy Standort aus", "Nein", "Variiert", "Einzelbild"],
        ],
      },
    },
    {
      heading: "Was beim Entfernen wegfällt",
      table: {
        headers: ["Datentyp", "Entfernt?", "Relevanz"],
        rows: [
          ["GPS", "Ja", "Verrät Ort von Treffen oder Zuhause"],
          ["Kameramodell", "Ja", "Identifiziert Gerät"],
          ["Aufnahmedatum", "Oft ja", "Zeit am Ort nachweisbar"],
          ["Sichtbarer Bildinhalt", "Unverändert", "Kein Gesichtsblur"],
        ],
      },
    },
    {
      heading: "Wann vor dem Teilen strippen",
      paragraphs: [
        "Marktplätze und Kleinanzeigen: Käufer brauchen kein GPS. iPhone-HEIC oft mit Standort.",
        "Blog/Newsletter: EXIF aus Teamfotos entfernen — keine internen Standorte leaken.",
        "Gemischte Stapel: HEIC + JPG + PNG in einer Sitzung, ZIP mit bereinigten Dateien.",
        "Forensik/Archiv: Original separat aufbewahren — Tool für Kopien zum Teilen.",
      ],
    },
  ],
};
