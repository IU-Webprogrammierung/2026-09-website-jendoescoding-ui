# Creative Lab: Web-Programmierung (DLBUXPWP01)

## Inhaltsverzeichnis

- [Über das Projekt](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Über-das-Projekt)
- [Konzeptionsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Konzeptionsphase)
- [Seitenübersicht](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Seitenübersicht)
- [Technologie](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Technologie)
- [Offene To Do's](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#offene-to-dos)
- [Erarbeitungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Erarbeitungsphase)

## Über das Projekt
Als Prüfungsleistung für das 3-monatige Creative Lab "Web-Programmierung" an der IU Internationale Hochschule wurde ein responsiver, persönlicher Webauftritt für die Künstlerpersona [jen](https://www.youtube.com/@xunreachablee) mithilfe von HTML, CSS und JavaSript erarbeitet.

Bei dieser Persona handelt es sich um meine eigene, die ich seit über einem Jahrzehnt auf verschiedenen Streamingplattformen und Social-Media-Kanälen musikalisch aufbaue. Mit meiner eigenen Brand Identity habe ich mich zu dem Zeitpunkt des Labs kaum bis gar nicht auseinandergesetzt, wodurch diese Prüfungsleistung die ideale Gelegenheit bot, mich sowohl persönlich als auch professionell weiterzuentwickeln; dadurch wurde die Themenwahl schnell klar.

Für einen reibungslosen Ablauf des Projekts wurde dieses in insgesamt drei Phase unterteilt:

- [Konzeptionsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Konzeptionsphase)
- [Erarbeitungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Erarbeitungsphase)
- [Finalisierungsphase](https://github.com/IU-Webprogrammierung/2026-09-website-jendoescoding-ui#Finalisierungsphase)


## Konzeptionsphase
In diese Phase wurde ein sinniges Thema für meine Künstlerpersona erarbeitet. In dem Zuge wurden verschiedene Illustrationen, die für vergangene Releases verwendet wurden gesammelt und ein visuell passendes (heroimagejen.avif) als Stilrichtung ausgewählt.

### Logo
Nach der Auswahl des Hero-Bildes habe ich mich zum allerersten Mal mit der Gestaltung eines eigenen Logos beschäftigt. Von Beginn an wollte ich ein klares, cleanes Design, das auch in kleiner Größe gut lesbar und erkennbar bleibt, etwa bei künftigen Releases oder als Wasserzeichen unten rechts in Videos.

Damit das Logo nicht bloß meinen Namen in gewöhnlicher Schreibweise zeigt, habe ich iterativ mit der Anordnung der Buchstaben experimentiert. Das Ergebnis wirkt spielerisch und bleibt dennoch klar: Das "j" lehnt sich an das "e" und schiebt es an das "n", sodass die Buchstaben ineinandergreifen. Der Anfang des "n" läuft dabei serifenartig in das "e" hinein. So wird im Logo Bewegung erzeugt und der erste Grundstein für die stilistische Richtung der Brand Identity gelegt.

### Sitemap
In dem selben Gedankengang rund um ein persönliches Logo wurde in dieser Phase ebenfalls angestoßen, welche Inhalte für einen persönlichen Webauftritt relevant und auch wirklich interessant für verschiedene Nutzergruppen wie u.a. Fans, Business Partners oder Interessenten wären. Um dies zu konkretisieren wurde über Notion eine Liste mit infrage kommenden Inhalten erarbeitet, die umfangreicher als zuvorderst gedacht wurde. Von einer Fotogalerie von vergangenen Live-Auftritten bis hinzu einer kleinen Ecke für meine Golden Retriever Hündin war gefühlt einmal alles dabei.

Um die wichtigsten Menüpunkte festzuhalten und innerhalb einer Struktur auf die Probe zu stellen, wurde eine Sitemap erstellt. Aus dieser wurden die folgenden Menüpunkte bzw. Seiten ersichtlich:

| Bereich | Dateiname | Inhalt
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

### Skizzen
Mit Erarbeitung eines Logos wurde sich anschließend mit der Erstellung von Skizzen beschäftigt. Für diese wurden zuvorderst Layouts über Pinterest recherchiert, wodurch die Idee eines Album Booklets aufkam. Denn Album Booklets sind die ideale Möglichkeit, um mit Layouts und vielen dekorativen Elementen zu experimentieren, um den damit verknüpften Songtext und die Identität des Künstlers widerzuspiegeln.

Mit dem Gedanken wurden darauffolgend nicht nur Moodbilder sondern gezielt Album Booklets recherchiert, um Ideen anzustoßen und passende zu Papier (bzw. auf einem digitalen Canvas) zu bringen. Da bereits in der Aufgabenstellung die Themen Flexbox und Grid angerissen wurden, ergab sich bei dieser Erarbeitungsphase, dass das sogenannte Bento-Grid die idealer Lösung für das von mir angestrebte Konzepts darstellte.

### Wireframes
Nach Erstellung der Skizzen wurden diese schließlich als Wireframes über [Figma](https://www.figma.com/design/ebjMQUW34owW2KuN6oWJDJ/Web-Programmierung?node-id=0-1&t=KXtZlQXSAG1KD8rG-1) und zunächst nur für Desktop überführt. In dem Zuge...

### HTML & CSS


CONTENT FOLGT