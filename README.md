# Creative Lab: Web-Programmierung (DLBUXPWP01)

Eine responsive Website für die Künstlerpersona [jen](https://www.youtube.com/@xunreachablee), umgesetzt im Rahmen des Creative Labs „Web-Programmierung“ für den B.A. UX-Design an der IU Internationale Hochschule. Das Gestaltungskonzept orientiert sich an einem Album-Booklet und verbindet Inhalte mit Illustrationen mittels eines Bento-Grid-Layout.

Technologien: HTML, CSS, JavaScript und HTMX
[Live-Pages](https://iu-webprogrammierung.github.io/2026-09-website-jendoescoding-ui/) · [Figma-Datei](https://www.figma.com/design/ebjMQUW34owW2KuN6oWJDJ/Web-Programmierung?node-id=0-1&t=KXtZlQXSAG1KD8rG-1)

___

### Inhaltsverzeichnis

- [Konzeptionsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Konzeptionsphase)
- [Erarbeitungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Erarbeitungsphase)
- [Finalisierungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Finalisierungsphase)

___


## Konzeptionsphase
In dieser Phase wurde ein sinniges Konzept für meine Künstlerpersona erarbeitet. In dem Zuge wurden verschiedene Illustrationen, die für vergangene Releases verwendet wurden gesammelt und ein visuell passendes (heroimagejen.avif) als Stilrichtung ausgewählt.

#### Logo
Nach der Auswahl des Hero-Bildes habe ich mich zum allerersten Mal mit der Gestaltung eines eigenen Logos beschäftigt. Von Beginn an wollte ich ein klares, cleanes Design, das auch in kleiner Größe gut lesbar und erkennbar bleibt, etwa bei künftigen Releases oder als Wasserzeichen unten rechts in Videos.

Damit das Logo nicht bloß meinen Künstlernamen in gewöhnlicher Schreibweise zeigt, habe ich iterativ mit der Anordnung der Buchstaben experimentiert. Das Ergebnis wirkt spielerisch und bleibt dennoch klar: Das "j" lehnt sich an das "e" und schiebt es an das "n", sodass die Buchstaben ineinandergreifen. Der Anfang des "n" läuft dabei serifenartig in das "e" hinein. So wird im Logo Bewegung erzeugt und der erste Grundstein für die stilistische Richtung der Brand Identity gelegt.


#### Sitemap
In dem selben Gedankengang rund um ein persönliches Logo wurde in dieser Phase ebenfalls angestoßen, welche Inhalte für einen persönlichen Webauftritt relevant und auch wirklich interessant für verschiedene Nutzergruppen wie u.a. Fans, Business Partners oder Interessenten wären. Um dies zu konkretisieren wurde über Notion eine Liste mit infrage kommenden Inhalten erarbeitet, die umfangreicher als zuvorderst gedacht wurde. Von einer Fotogalerie von vergangenen Live-Auftritten bis hinzu einer kleinen Ecke für meine Golden Retriever Hündin war gefühlt einmal alles dabei.

Um die wichtigsten Menüpunkte festzuhalten und diese einmal innerhalb einer Struktur auf die Probe zu stellen, wurde eine Sitemap erstellt. Diese bestand aus den folgenden Menüpunkten bzw. Seiten:


#### Seitenübersicht

| Page | File-Name | Content
|------|-----|-----|
| Startseite | `index.html` | Startpunkt und Übersicht aktueller Projekte  |
| Über Mich | `about.html` | Inhalte über die Künstlerpersona: Anfänge, Meilensteine, künftige Ziele |
| Persona | `persona.html` | Übersicht erstellter Illustrationen sowie Charakterreferenzen zur eigenen Erstellung |
| Musik | `music.html` | Übersicht aktueller Streaming Dienste und neuster Uploads |
| Videos | `video.html` | Persönliche Favoriten mit Angabe von Rolle innerhalb des kreativen Prozesses |
| Lyrics | `lyrics.html` | Übersicht erarbeiteter Lyrics |
| Equipment | `equipment.html` | Übersicht verwendeter Hard- und Software innerhalb des kreativen Prozesses |
| Kontakt | `contact.html` | Kontaktformular |
| Datenschutz | `policy.html` | Aufklärung bzgl. Erhebung von persönlichen Daten durch Kontaktformular |
| Error | `404.html` | Fehlerseite für nicht vorhandene Inhalte |
| Success | `success.html` | Proof of Concept für Nutzerfeedback, sobald Kontaktformular abgeschickt wurde |

Die entstandene Informationsarchitektur ist als Netzstruktur angelegt: Von jeder Seite aus kann beliebig zu den anderen Hauptmenüpunkten gesprungen werden.

#### Skizzen
Nachdem die zu erarbeiteten Seiten klar waren, wurde sich mit der Erstellung von Skizzen beschäftigt. Für diese wurden zunächst Layouts über Pinterest recherchiert, wodurch die Idee eines Album Booklets aufkam. Denn Album Booklets sind die ideale Möglichkeit, um mithilfe von Layouts und bewusst gewählten dekorativen Elementen zu experimentieren und die Identität eines Songs und/oder Künstlers widerzuspiegeln.

An diesen Gedanken anschließend wurde gezielt Album Booklets recherchiert, um Gestaltungslösungen anzustoßen und passende zu Papier (bzw. auf einem digitalen Canvas) zu bringen. Da bereits in der Aufgabenstellung die Themen Flexbox und Grid angerissen wurden, ergab sich hier nach erneuter Recherche, dass das sogenannte Bento-Grid die ideale Lösung für das von mir angestrebte Konzepts darstellte.

#### Wireframes
Nach Erstellung der Skizzen wurden diese als Wireframes in [Figma](https://www.figma.com/design/ebjMQUW34owW2KuN6oWJDJ/Web-Programmierung?node-id=0-1&t=KXtZlQXSAG1KD8rG-1) und zunächst nur für Desktop vollständig realisiert. Dabei wurde ersichtlich, dass die primären Menüpunkte "About" und "Music" per Dropdown zu den sekundären Menüpunkten "Persona", "Videos" und "Lyrics" führen sollen, um so eine sinnige Struktur zu schaffen. Bei sowohl der Erstellung der Skizzen als auch dem "Proof of Concept" durch Wireframes wurde klar, dass vorherige Ideen wie bspw. die Galerie passiv eingebracht werden können, indem auf (fast) jeder Seite ein sogenannter Hero-Frame eingebracht wird, der bewusst ausgewählte Illustrationen aufgreift. So soll jede Seite sowohl durch den Inhalt als auch einem dekorativ Element wie u.a. des Frames einem Thema folgen; also ähnlich wie bei einem Booklet. 

#### HTML & CSS
Der letzte Schritt dieser Phase war die grobe Überführung aller erstellten Artefakte in HTML & CSS durch Visual Studio Code. Mithilfe des ersten Live-Tutoriums konnte in diesem Schritt auf Github aufgesetzt werden, um die ersten Commits inkl. passender Nachrichten zu verfassen und die Webpräsenz per Pages ins Leben zu rufen

___

## Erarbeitungsphase
Nach Erhalt des Feedback von den Tutoren begann die Erarbeitungsphase. In dieser wurde das Konzept verfeinert, das persönliche Wissen über HTML und CSS erweitert und die Arbeitsweise im Verlauf der Phase reflektiert; denn nachdem das Grundgerüst gebaut und alle weiteren To Do's ersichtlich wurden, wurde ebenfalls klar, wie viel wirklich offen und zu tun war.

Da ich zu diesem Zeitpunkt noch nie solch eine Webpräsenz umgesetzt habe, wurde mit jedem Schritt deutlich, dass ich nicht alles auf einmal anfangen kann und möglicher Überforderung mit sinniger Planung entgegenwirken muss. Somit wurde sich neben dem Selbststudium bzgl. der Umsetzung auch mit Methoden wie u.a. der 80/20 Methode auseinandergesetzt, um die Workload überschaubar zu planen und das Endergebnis nicht aus den Augen zu verlieren.

#### Komponente, Dropdowns & Navigation
Zunächst wurde sich im Rahmen des dritten Tutoriums mit HTMX auseinandergesetzt, um wiederkehrende Elemente wie bspw. den Footer und Header bzw. die Side-Navigation in Form von Komponenten verwenden zu können. Daran anschließend wurden die einzelnen Elemente weiter ausgebaut, indem u.a. Transitions, Dropdowns sowie die Pfeilnavigation umgesetzt wurde.

Alles  wurde, da zu dem Zeitpunkt nur bedingte Kenntnisse in JavaScript vorlagen lediglich mit CSS gelöst. Um jedoch eine mit der Erarbeitung einhergehende Idee umzusetzen, musste sich mit js auseinandergesetzt werden: die Navigation mit Pfeiltasten, welche dem Durchblättern eines Booklets ähnelt.

Während der Umsetzung wurde die Webpräsenz stetig über den Browser geprüft. Dabei fiel auf, dass die Pfeilnavigation über js gesondert für das Kontaktformular funktionieren muss: denn sobald man etwas innerhalb des Textfelds getippt und dann auf eine Pfeiltaste gekommen ist, hat man ungewollt die Seite gewechselt.

#### Ausarbeitung aller Seiten
Nachdem sowohl die Side-Navigation, der Footer als auch die Navigation mittels Pfeiltasten fertig waren, wurden die Seiten der Reihe nach gestalterisch ausgearbeitet. Dabei dienten die zuvor erarbeiteten Artefakte als Referenzen, die jedoch während der Umsetzung aktiv weitergedacht wurden. Dies ermöglichte das Einbringen von neue Ideen und gleichermaßen die Prüfung des Konzepts auf Umsetzbarkeit.

#### Seiten & Inhalte

| Page | Content
|------|-----|
| Startseite | Hero-Bild über die gesamte Inhaltsfläche |
| Über Mich | Zweispaltiger Text, Streaming-Icons mit Links, sitzende Jen auf Frame |
| Persona | Eine zentrale Illustration als Referenz inkl. Farbwerten und Nutzungsbeschränkung |
| Musik | Eingebettetes YouTube-Video mit Titel und Rolle |
| Videos | Kartenübersicht inkl. Titel, Rolle und Streaming-Links |
| Lyrics | Liste verschiedener Songs |
| NEU Good Guy | Ausarbeitung einer Seite mit Lyrics inkl. YouTube-Video Embed |
| Equipment | Hard- und Software nach Instrumenten, Recording und Editing gruppiert |
| Kontakt | Formular mit Pflichtfeldern, Einwilligung zum Datenschutz und Weiterleitung auf success.html |
| Datenschutz | Aufklärung bzgl. Erhebung von persönlichen Daten durch Kontaktformular |
| Error | Fehlerseite für nicht vorhandene Inhalte |
| Success | Nutzerfeedback, sobald Kontaktformular abgeschickt wurde |

Mit jeder Seite und neuen Ideen wuchs styles.css sowohl mit Grundlagen als auch individuellen Ausarbeitungen, wodurch der Überblick allmählich verloren ging. In dem Zuge wurde styles.css in einzelne, seitenspezifische als auch grundlegende Datein aufgeteilt.

#### Projektstruktur
├── index.html, about.html, persona.html, music.html, videos.html,
│   lyrics.html, goodguy.html, equipment.html, contact.html,
│   policy.html, success.html, 404.html
├── script.js
├── css/
│   ├── base.css            Grid, Farben, Typografie, gemeinsame Komponenten
│   ├── responsive.css      Breakpoints für Tablet und Smartphone
│   └── pages/              Seitenspezifische Stile
├── htmx-components/        header.html, footer.html
└── assets/                 Illustrationen, Icons, Vorschaubilder, Hintergrundvideo

#### Interaktivität
Im weiteren Verlauf der Erarbeitungsphase wurden unterschiedliche "Add-On"-Features recherchiert, die die Webpräsenz thematisch immersiver machen. In dem Zuge wurde ein Playbutton auf der Startseite `index.html` implementiert, der Vogelgesang abspielt. Diese Idee wurde mittels JavaScript umgesetzt. Dieses Feature wurde anschließend für ein paar Tage beibehalten, bis dieses für eine anderweitige Idee umgewandelt wurde um Doppelungen zu vermeiden: Ein Playbutton für `music.html`, wo Footage vom ausgewählte Musikvideo im Hintergrund spielt.

Herausforderung: Wahrung von Barrierefreiheit inkl. Kontrast zwischen Hintergrundvideo und Text.
Lösung: Evaluierung des zuvor implementierten Playbuttons für Ambiente -> JavaScript Anpassung, sodass durch den Playbutton der Hintergrund gesteuert werden kann.
Verworfen: Playbutton für Vogelgesang über Startseite

#### Breakpoints
Für die Media Queries wurden insgesamt zwei Breakpoints definiert: 800px & 400px.
Zunächst wurde das Layout für den größeren Breakpoint ausgearbeitet, um so die Grundlage für den kleineren Breakpoint zu erarbeiten. Dabei wurden unterschiedliche Eigenschaften 

Innerhalb der Konzeptionsphase wurde sich aufgrund fehlender Zeit mit dem Thema Breakpoints nur bedingt auseinandergesetzt. Um dies für diese Phase aufzuholen, wurden diverse Umsetzungsmöglichkeit recherchiert und ausprobiert, sodass die funktionsweise greifbar wurde. Nachdem ein sinniges Grundlayout erarbeitet wurde, wurde auch hier eine separate CSS-Datei erstellt, welche für alle Seiten eine Media Query für 800px umfasst. 

#### Evaluaierung & Überarbeitung
Mit der Implementierung von Breakpoints wurde ersichtlich, dass die aktuellen Gestaltungslösungen für die Seiten „videos“, „lyrics“ + „goodguy“, „equipment“ und „contact“ nur bedingt mit dem angestrebten Stil der Seite übereinstimmen, wodurch diese erneut iterativ überarbeitet wurden. Dabei konnten neue Elemente erarbeitet werden, die folglich für alle weiteren Seiten berücksichtigt wurden.

##### Neu
`lyrics.html` -> Neue Gestaltungslösung, um Stilrichtung der Seite zu vereinheitlichen inkl. "coming soon", anstatt zu `404.html` zu führen.<br>
`videos.html` -> Neue Gestaltungslösung in Form eines Videoplayers. Das ausgewählte Video wird groß, die anderen verweilen klein -> das ausgewählte Video wird als ausgewählt hinterlegt.<br>
`goodguy.html` -> Neue Gestaltungslösung, um "Read-Along" zu ermöglichen. Sprich, sowohl das Video als auch der Lyrics sind gleichermaßen sichtbar, damit man den Lyrics verfolgen kann und ggf. mitsingen kann.<br>
`equipment.html` -> Neue Gestaltungslösung in Anlehnung an `lyrics.html`<br>
`contact.html` -> Neue Gestaltungslösung inkl. Validierung + `success.html`<br>

___

## Finalisierungsphase
Nachdem das Feedback für die vorletzte Phase eingegangen und dieses in den aktuellen Stand des Projekt eingeflossen ist, begann die letzte Phase des Creative Labs. In dieser wurde das Konzept erneut verfeinert und durch weitere Funktionen erweitert. Abschließend wurde mittels der Browserextension von WAVE sowie Lighthouse eine Barrierefreiheitsanalyse durchgeführt.

#### Code-Qualität
Mittels des erhaltenen Feedbacks wurden sowohl die HTML als auch CSS-Dateien überarbeitet. Dabei spielten die Umstrukturierung von tags, Pixelgrößen zu rem sowie das grundlegende Aufräumen der Dateien eine große Rolle. Zusätzliche wurde sich in dieser Phase noch mit dem Thema CSS-Nesting auseinandergesetzt.

#### Dark Mode
Um die Komplexität der Webpräsenz um sinnige Funktionen zu erweitern, wurde sich dazu entschieden einen Dark Mode hinzuzufügen. Die Umsetzung erfolgt iterativ und durch verschiedene Ansätze: Letztendlich wurde diese Funktion durch einen Schalter (ähnlich wie der Playbutton für `music.html`), JavaScript und CSS in die Webpräsenz implementiert. Dieser erkennt automatisch, welches Theme durch das System präferiert wird, sodass entweder light oder dark von Beginn an für die Nutzer:innen sichtbar ist.

Des Weiteren wurde sich dazu entschieden die verschiedenen Icons und Grafiken nicht separat auszutauschen, sondern mittels einem Filter zu invertieren. So konnte zusätzliche Arbeit und nachträgliche Pflege vereinfacht werden.

#### Mehrsprachigkeit
Eine weitere Funktion, die in dieser Phase erarbeitet wurde war die Möglichkeit, die Seite auch auf Deutsch einzusehen. Dabei wurde in jeder Seite ein Sprachumschalter implementiert sowie die einzelnen Textpassagen mit dem Schlüssel "data-trans" und dem Zustand "aria-pressed" ausgestattet, sodass die einzelnen Übersetzungen in js eingepflegt und der Switch zwischen beiden Sprache ermöglicht wurde.

Die Position dieser Funktion musste für Mobile nachträglich angepasst werden, um nicht mit dem Toggle für Dark Mode zu clashen.


#### Illustrationen erweitern
Eine letzte Funktion, die für diese Phase zunächst gebrainstormed und dann umgesetzte wurde war die Möglichkeit einzelne Illustrationen zu erweitern. Diese Idee wurde zunächst nur für `persona.html` umgesetzt, sodass man die beschriebenen Eigenschaften wie u.a. Farben, Haare, etc. über das Hero-Image vollständig ansehen kann. Initial wurde versucht die Funktion per Drag-and-Drop zu realisieren, indem die unterschiedlichen Elemente modular verschoben werden konnten. Dabei wurde jedoch ersichtlich, dass zusätzliche Icons nur bedingt auf diese Interaktionsmöglichkeit hinweisen und zum Teil sogar störend sind.

In dem Zuge wurde sich dazu entschieden das Feature "zu verstecken", bzw. nur per "Point and Click" umzusetzen, indem man auf die Illustration direkt klickt. Diese Interaktion wird durch einen sehr subtilen Hover-Effekt ersichtlich, der letztendlich nicht von den Inhalten der Seite ablenken soll. Nichtsdestotrotz konnte ich mir gut vorstellen, dass Nutzer:innen auf die Illustration klicken wollen würden und ggf. positiv überrascht sind, wenn diese sich durch einen Klick vergrößern würde.

Um die Interaktion zu vereinheitlichen wurde das Feature ebenfalls für `equipment.html` umgesetzt, da hier das Layout der Persona-Seite ähnelt, sodass man diese Interaktion höchstwahrscheinlich hier auch erwartet.

#### Barrierefreiheit
Abschließend wurde die erarbeitete Webpräsenz durch die Browsererweiterung WAVE und Lighthouse überprüft. Dabei wurde deutlich, dass eindeutige ID's fehlten, der Kontrast von `music.html`erhöht, alt-Text ergänzt sowie vereinzelte Layouts angepasst werden mussten.

## Fazit
Das Ergebnis des 3-monatigen Creative Labs ist, wie in der Konzeptionsphase angestrebt, eine Webpräsenz für die Künstlerpersona jen. Aus dem ursprünglichen Konzept ist eine vollwertige Website entstanden, die neben den geplanten Funktionen weitere umfasst, die erst durch das hinzugewonnene Wissen möglich wurden.

Da zu Beginn des Labs nur grundlegende Kenntnisse in HTML, CSS und JavaScript vorlagen, war das Projekt eine große Herausforderung, die ich mit viel Motivation und Liebe für das gewählte Thema gemeistert habe. Dabei habe ich gelernt, dass ich meine Arbeitsweise grundlegend strukturierter gestalten muss, um auch bei großen und (mir noch fremd vorkommenden) komplexen Projekten den Überblick zu behalten und die Qualität des Ergebnisses zu sichern. Zugleich hat mir das Projekt gezeigt, wie vielseitig Programmieren ist und wie viel Freude es machen kann; auch wenn zuvorderst viel schief geht.

Als nächsten Schritt plane ich, mein eigenes Portfolio ebenfalls mit HTML, CSS und JavaScript umzusetzen, um das Erlernte in einem neuen Kontext direkt anzuwenden und zu festigen, in der Hoffnung, dass mich diese Skills sowohl persönlich als auch beruflich weiterbringen.