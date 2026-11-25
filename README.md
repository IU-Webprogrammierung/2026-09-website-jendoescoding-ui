# Creative Lab: Web-Programmierung (DLBUXPWP01)

## Inhaltsverzeichnis

- [Über das Projekt](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Über-das-Projekt)
- [Konzeptionsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Konzeptionsphase)
- [Seitenübersicht](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Seitenübersicht)
- [Erarbeitungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Erarbeitungsphase)

<br>

## Über das Projekt
Als Prüfungsleistung für das 3-monatige Creative Lab "Web-Programmierung" an der IU Internationale Hochschule wurde ein responsiver, persönlicher Webauftritt für die Künstlerpersona [jen](https://www.youtube.com/@xunreachablee) mithilfe von HTML, CSS und JavaSript erarbeitet.

Bei dieser Persona handelt es sich um meine eigene, die ich seit über einem Jahrzehnt auf verschiedenen Streamingplattformen und Social-Media-Kanälen musikalisch aufbaue. Mit meiner eigenen Brand Identity habe ich mich zu dem Zeitpunkt des Labs kaum bis gar nicht auseinandergesetzt, wodurch diese Prüfungsleistung die ideale Gelegenheit bot, mich sowohl persönlich als auch professionell weiterzuentwickeln.

Für einen reibungslosen Ablauf des Projekts wurde dieses in insgesamt drei Phase unterteilt:

- [Konzeptionsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Konzeptionsphase)
- [Erarbeitungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Erarbeitungsphase)
- [Finalisierungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Finalisierungsphase)

<br>

## Konzeptionsphase
In diese Phase wurde ein sinniges Thema für meine Künstlerpersona erarbeitet. In dem Zuge wurden verschiedene Illustrationen, die für vergangene Releases verwendet wurden gesammelt und ein visuell passendes (heroimagejen.avif) als Stilrichtung ausgewählt.

### Logo
Nach der Auswahl des Hero-Bildes habe ich mich zum allerersten Mal mit der Gestaltung eines eigenen Logos beschäftigt. Von Beginn an wollte ich ein klares, cleanes Design, das auch in kleiner Größe gut lesbar und erkennbar bleibt, etwa bei künftigen Releases oder als Wasserzeichen unten rechts in Videos.

Damit das Logo nicht bloß meinen Künstlernamen in gewöhnlicher Schreibweise zeigt, habe ich iterativ mit der Anordnung der Buchstaben experimentiert. Das Ergebnis wirkt spielerisch und bleibt dennoch klar: Das "j" lehnt sich an das "e" und schiebt es an das "n", sodass die Buchstaben ineinandergreifen. Der Anfang des "n" läuft dabei serifenartig in das "e" hinein. So wird im Logo Bewegung erzeugt und der erste Grundstein für die stilistische Richtung der Brand Identity gelegt.


### Sitemap
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

### Skizzen
Nachdem die zu erarbeiteten Seiten klar waren, wurde sich mit der Erstellung von Skizzen beschäftigt. Für diese wurden zunächst Layouts über Pinterest recherchiert, wodurch die Idee eines Album Booklets aufkam. Denn Album Booklets sind die ideale Möglichkeit, um mithilfe von Layouts und bewusst gewählten dekorativen Elementen zu experimentieren und die Identität eines Songs und/oder Künstlers widerzuspiegeln.

An diesen Gedanken anschließend wurde gezielt Album Booklets recherchiert, um Gestaltungslösungen anzustoßen und passende zu Papier (bzw. auf einem digitalen Canvas) zu bringen. Da bereits in der Aufgabenstellung die Themen Flexbox und Grid angerissen wurden, ergab sich hier nach erneuter Recherche, dass das sogenannte Bento-Grid die ideale Lösung für das von mir angestrebte Konzepts darstellte.

### Wireframes
Nach Erstellung der Skizzen wurden diese als Wireframes in [Figma](https://www.figma.com/design/ebjMQUW34owW2KuN6oWJDJ/Web-Programmierung?node-id=0-1&t=KXtZlQXSAG1KD8rG-1) und zunächst nur für Desktop vollständig realisiert. Dabei wurde ersichtlich, dass die primären Menüpunkte "About" und "Music" per Dropdown zu den sekundären Menüpunkten "Persona", "Videos" und "Lyrics" führen sollen, um so eine sinnige Struktur zu schaffen. Bei sowohl der Erstellung der Skizzen als auch dem "Proof of Concept" durch Wireframes wurde klar, dass vorherige Ideen wie bspw. die Galerie passiv eingebracht werden können, indem auf (fast) jeder Seite ein sogenannter Hero-Frame eingebracht wird, der bewusst ausgewählte Illustrationen aufgreift. So soll jede Seite sowohl durch den Inhalt als auch einem dekorativ Element wie u.a. des Frames einem Thema folgen; also ähnlich wie bei einem Booklet. 

### HTML & CSS
Der letzte Schritt dieser Phase war die grobe Überführung aller erstellten Artefakte in HTML & CSS durch Visual Studio Code. Mithilfe des ersten Live-Tutoriums konnte in diesem Schritt auf Github aufgesetzt werden, um die ersten Commits inkl. passender Nachrichten zu verfassen und die Webpräsenz per Pages ins Leben zu rufen

### Konzept
Abschließend konnte durch diese erste Phase das folgende Konzept konkretisiert werden:

Für das Creative Lab für Web-Programmierung für eine persönliche Webpräsenz für die Künstlerpersona von [jen](https://www.youtube.com/@xunreachablee) angestrebt, welches stilistisch einem Album Booklet ähnelt. Die Präsenz besteht insgesamt aus 10 individuellen Seiten, die sich als primäre, sekundäre und teritiäre Navigation unterscheiden lassen. Begleitend zu allen Seiten werden verschiedene Illustrationen verwendet, die dekorativ die Hauptinhalte der jeweiligen Seiten begleiten.
<br>

## Erarbeitungsphase
Nach Erhalt des Feedback von den Tutoren begann die Erarbeitungsphase. In dieser wurde das Konzept verfeinert, das persönliche Wissen über HTML und CSS erweitert und die Arbeitsweise im Verlauf der Phase reflektier; denn nachdem das Grundgerüst gebaut und alle weiteren To Do's ersichtlich wurden, wurde ebenfalls schnell klar, wie viel offen und zu tun war.

Da ich zu diesem Zeitpunkt noch nie solch eine Webpräsenz umgesetzt habe, wurde mit jedem Schritt deutlich, dass ich nicht alles auf einmal anfangen kann und möglicher Überforderung mit sinniger Planung entgegenwirken muss. Somit wurde sich neben dem Selbststudium bzgl. der Umsetzung auch mit Methoden wie u.a. der 80/20 Methode auseinandergesetzt, um die Workload überschaubar zu planen und das Endergebnis nicht aus den Augen zu verlieren.

### Komponente, Dropdowns & Navigation
Zunächst wurde sich im Rahmen des dritten Tutoriums mit HTMX auseinandergesetzt, um wiederkehrende Elemente wie bspw. den Footer und Header bzw. die Side-Navigation in Form von Komponenten verwenden zu können. Daran anschließend wurden die einzelnen Elemente weiter ausgebaut, indem u.a. Transitions, Dropdowns sowie die Pfeilnavigation geplant und folglich umgesetzt wurde.

Beides wurde, da zu dem Zeitpunkt nur bedingte Kenntnisse in JavaScript vorlagen lediglich mit CSS gelöst. Um jedoch eine mit der Erarbeitung einhergehende Idee umzusetzen, musste sich mit js auseinandergesetzt werden: die Navigation mit Pfeiltasten, welche dem Durchblättern eines Booklets ähnelt.

Während der Umsetzung wurde die Webpräsenz stetig über den Browser geprüft. Dabei fiel auf, dass die Pfeilnavigation über js gesondert für das Kontaktformular funktionieren muss: denn sobald man etwas innerhalb des Textfelds getippt und dann auf eine Pfeiltaste gekommen ist, hat man ungewollt die Seite gewechselt.

### Ausarbeitung aller Seiten
Nachdem sowohl die Side-Navigation, der Footer als auch die Navigation mittels Pfeiltasten fertig waren, wurden die Seiten der Reihe nach gestalterisch ausgearbeitet. Dabei dienten die zuvor erarbeiteten Artefakte als Referenzen, die jedoch während der Umsetzung aktiv weitergedacht wurden. Dies ermöglichte das Einbringen von neue Ideen und gleichermaßen die Prüfung des Konzepts auf Umsetzbarkeit.

#### Seiten & Inhalte

| Page | Content
|------|-----|-----|
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

Mit jeder Seite und neuen Idee wuchs styles.css sowohl mit Grundlagen als auch individuellen Ausarbeitungen, wodurch der Überblick allmählich verloren ging. In dem Zuge wurde styles.css in einzelne, seitenspezifische als auch grundlegende Datein aufgeteilt.

#### CSS-Dateien & Inhalte

| File | Content
|------|-----|-----|
| base.css | Grundraster inkl. Farbschema, Schrift und Layout von Navigation und Footer |
| responsive.css | |
| about.css | |
| music.css | |
| videos.css | |
| lyrics.css | |
| goodguy.css | |
| equipment.css | |
| contact.css | |
| policy.css | |
| 404.css | |
| success.css | |

FOLGT