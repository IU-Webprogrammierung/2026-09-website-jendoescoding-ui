/* 1. Navigation with arrow keys */

document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

    const el = document.activeElement;
    const isTyping = el && (
        el.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)
    );
    if (isTyping) return;

    if (e.key === "ArrowLeft") document.querySelector(".grid-arrow-back a")?.click();
    if (e.key === "ArrowRight") document.querySelector(".grid-arrow-forward a")?.click();
});


/* 2. Pause background visuals (music.html) */

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hero-video");
    const btn = document.getElementById("motion-toggle");
    if (!video || !btn) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let saved = null;
    try { saved = localStorage.getItem("bgMotion"); } catch (e) { }

    if (saved === "off" || (saved === null && reduced)) {
        video.pause();
    }

    function updateButton() {
        btn.textContent = video.paused ? "▶" : "❚❚";
    }

    btn.addEventListener("click", () => {
        if (video.paused) {
            video.play().catch(() => { });
        } else {
            video.pause();
        }
        try { localStorage.setItem("bgMotion", video.paused ? "off" : "on"); } catch (e) { }
        updateButton();
    });

    updateButton();
});

/* Marking currently opened page within Navigation */

document.body.addEventListener("htmx:afterSettle", () => {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".grid-nav a").forEach((link) => {
        if (link.getAttribute("href") === current) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
});


/* Validation for Contact Form */

const check = document.getElementById("privacy-check");
check?.addEventListener("invalid", () => {
    check.setCustomValidity("Please confirm the privacy policy to send your message.");
});
check?.addEventListener("change", () => check.setCustomValidity(""));


/* Video Player */

const player = document.getElementById("video-player");

if (player) {
    const title = document.getElementById("video-title");
    const role = document.getElementById("video-role");
    const links = document.getElementById("video-links");
    const thumbs = document.querySelectorAll(".video-thumb");

    const services = [
        { key: "spotify", name: "Spotify", icon: "spotify.svg" },
        { key: "apple", name: "Apple Music", icon: "applemusic.svg" },
        { key: "soundcloud", name: "SoundCloud", icon: "soundcloud.svg" }
    ];

    function showVideo(btn, autoplay) {
        player.src = "https://www.youtube.com/embed/" + btn.dataset.id + (autoplay ? "?autoplay=1" : "");
        player.title = "Video: " + btn.dataset.title + ", a cover by jen";
        title.textContent = btn.dataset.title;
        role.innerHTML = btn.dataset.role;

        // Streaming-Icons neu aufbauen (nur die, die es gibt)
        links.innerHTML = "";
        services.forEach((s) => {
            const url = btn.dataset[s.key];
            if (!url) return;
            const li = document.createElement("li");
            li.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/${s.icon}" alt="">
                <span class="visually-hidden">${s.name} (opens in a new tab)</span></a>`;
            links.appendChild(li);
        });

        thumbs.forEach((b) => b.removeAttribute("aria-current"));
        btn.setAttribute("aria-current", "true");
    }

    thumbs.forEach((btn) => btn.addEventListener("click", () => showVideo(btn, true)));
    showVideo(thumbs[0], false);   // Startzustand
}


/* Dark Mode */

const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
}

try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
} catch (e) { }

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    btn.setAttribute("aria-pressed", String(next === "dark"));
    try { localStorage.setItem("theme", next); } catch (e) { }
});

document.body.addEventListener("htmx:afterSettle", () => {
    document.querySelector(".theme-toggle")
        ?.setAttribute("aria-pressed", String(currentTheme() === "dark"));
});


/* View Illustration (Persona & Equipment) */

const expandBtn = document.querySelector(".image-expand");

if (expandBtn) {
    const label = expandBtn.querySelector(".image-expand-label");
    const icon = expandBtn.querySelector("[aria-hidden]");

    const toggle = () => {
        const full = document.body.classList.toggle("panel-hidden");
        expandBtn.setAttribute("aria-expanded", String(full));
    };

    expandBtn.addEventListener("click", toggle);
    expandBtn.closest("figure").querySelector("img").addEventListener("click", toggle);
}


/* LANGUAGE TOGGLE */

const translations = {
    de: {
        /* ABOUT */
        "nav.about": "über mich",
        "about.title": "über mich",
        "about.p1": "Ich bin Sängerin, Texterin und Produzentin aus Deutschland. Meine Reise begann' vor über über einem Jahrzehnt im Jahr 2013. An dem Punkt war ich tief in die Welt von Anime und Vocaloid eingetaucht und hatte den Traum zu verstehen, worum es in meinen Lieblingssongs ging; obwohl ich nur bedingt Englisch verstehen konnte. In dem Zuge widmete ich meine Freizeit mit 14 dem Schreiben, Aufnehmen und Abmischen von Musik, um meine Kreativität mit der Welt zu teilen.",
        "about.p2": "Heute habe ich über 200 Cover auf Englisch, Deutsch oder Japanisch veröffentlicht, live auf dem MagFest und der Connichi gesungen, mit Menschen zusammengearbeitet, von denen ich nie zu träumen gewagt hätte und insgesamt über 84 Millionen Aufrufe auf diversene Plattformen erreicht.",
        "about.p3": "All' das wäre ohne die enorme Unterstützung von euch allen, die meine Musik hören und streamen, nicht möglich. Ihr seid ein riesiger Teil davon, warum ich nicht ans Aufhören denke und mich voller Zuversicht dem stelle, was die Zukunft für mich bereithält.",
        "about.p4": "Ich kann kaum auf das warten, was noch kommt, und kann euch gar nicht genug dafür danken, dass ihr Teil dieser Reise seid.",
        "about.p5": "Wie immer, mit ganz viel Liebe,",
        "about.p6": "Eure jen x",

        /* PERSONA */
        "persona.h1": "über mich",
        "persona.hair": "Haare",
        "persona.p1": "Geteilte Haarfarbe in Rot und Schwarz, aus Sicht der betrachtenden Person:",
        "persona.li1": "Rot (#cd514d) auf der rechten Seite.",
        "persona.li2": "Schwarz (#272625) auf der linken Seite.",
        "persona.eyes": "Augen",
        "persona.p3": "Bläuliches Grün (#829a89)",
        "persona.clothing": "Kleidung",
        "persona.li3": "Weiße, zugeknöpfte Bluse (#f4ecec) mit schwarzer Schleife",
        "persona.li4": "Schwarzer Faltenrock (#272625)",
        "persona.li5": "Overknee-Strümpfe",
        "persona.restrict": "Nutzungsbeschränkung",
        "persona.p4": "Die Nutzung, Vervielfältigung, Bearbeitung oder Darstellung meiner Persona ist ohne meine vorherige schriftliche Zustimmung nicht gestattet. Die Persona darf ausschließlich im Zusammenhang mit mir und meiner Arbeit verwendet und nicht von anderen als eigene Persona oder für persönliche Zwecke übernommen, nachgeahmt oder genutzt werden.",

        /* MUSIC */
        "nav.music": "musik",
        "music.title": "neuste musik",
        "music.p": "rolle: sängerin, produzentin & video editor",

        /* LYRICS */
        "small": "bald verfügbar",

        /* GOOD GUY */
        "upload": "hochgeladen am ",

        /* EQUIPMENT */
        "equipment.guitar": "Akustik Guitarre",
        "equipment.recording": "Für's Aufnahmen",
        "equipment.rec-vocals": "Für Stimmaufnahmen",
        "equipment.rec-instruments": "Für Aufnahmen von Instrumenten",
        "equipment.editing": "Für's Editieren",

        /* CONTACT */
        "nav.contact": "kontakt",
        "contact.name": "Dein Name",
        "contact.mail": "Deine E-Mail-Adresse",
        "contact.message": "Deine Nachricht",
        "contact.submit": "Absenden",
        "contact.privacy.start": "Ich habe die ",
        "contact.privacy.link": "Datenschutzerklärung",
        "contact.privacy.end": " gelesen und bin damit einverstanden, dass meine Daten weitergegeben werden, damit jen mich kontaktieren kann.",

        /* PRIVACY*/
        "policy.title": "Datenschutzerklärung",
        "policy.controller.title": "I. Verantwortliche Stelle",
        "policy.controller.intro": "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:",
        "policy.controller.name": "Jennifer Habeth",
        "policy.controller.address": "Musterstraße 123, 12345 Musterstadt",
        "policy.controller.email": "Muster@Mail.de",
        "policy.contact.title": "II. Kontaktaufnahme über das Kontaktformular",
        "policy.contact.intro": "Wenn Sie unser Kontaktformular verwenden, verarbeiten wir die von Ihnen angegebenen Informationen. Dazu können insbesondere gehören:",
        "policy.contact.email": "Ihre E-Mail-Adresse,",
        "policy.contact.message": "der Inhalt Ihrer Nachricht,",
        "policy.contact.voluntary": "alle weiteren Angaben, die Sie freiwillig machen.",
        "policy.contact.purpose": "Wir verarbeiten diese Informationen, um Ihre Anfrage zu bearbeiten und Ihnen zu antworten. Rechtsgrundlage für diese Verarbeitung ist Artikel 6 Absatz 1 Buchstabe f DSGVO. Unser berechtigtes Interesse besteht darin, eingehende Anfragen zu beantworten und die Kommunikation mit Ihnen zu ermöglichen. Bezieht sich Ihre Anfrage auf den Abschluss oder die Erfüllung eines Vertrags, kann Artikel 6 Absatz 1 Buchstabe b DSGVO ebenfalls als Rechtsgrundlage dienen.",
        "policy.contact.provision": "Die Angabe einer E-Mail-Adresse ist erforderlich, wenn Sie eine Antwort von uns erhalten möchten. Alle weiteren Angaben sind freiwillig. Ohne die erforderlichen Angaben können wir Ihre Anfrage möglicherweise nicht bearbeiten.",
        "policy.retention.title": "III. Speicherung der Daten",
        "policy.retention.text": "Wir speichern Ihre Informationen nur so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist. Anschließend werden sie gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen oder eine weitere Verarbeitung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.",
        "policy.recipients.title": "IV. Empfänger der Daten",
        "policy.recipients.text": "Ihre Nachricht wird an Muster@Mail.de gesendet und dort bearbeitet. Grundsätzlich geben wir Ihre Daten darüber hinaus nicht an Dritte weiter, es sei denn, eine solche Weitergabe ist gesetzlich zulässig oder vorgeschrieben.",
        "policy.logs.title": "V. Server-Logdateien",
        "policy.logs.text": "Beim Aufruf dieser Website kann der Hosting-Anbieter technische Zugriffsdaten verarbeiten. Dazu gehören unter anderem Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite, die übertragene Datenmenge und Ihr Browsertyp. Diese Verarbeitung dient der Bereitstellung und Sicherheit der Website.",
        "policy.rights.title": "VI. Ihre Rechte",
        "policy.rights.intro": "Vorbehaltlich der geltenden gesetzlichen Voraussetzungen haben Sie das Recht:",
        "policy.rights.access": "Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten;",
        "policy.rights.rectification": "die Berichtigung unrichtiger Daten zu verlangen;",
        "policy.rights.deletion": "die Löschung Ihrer Daten zu verlangen;",
        "policy.rights.restriction": "die Einschränkung der Verarbeitung zu verlangen;",
        "policy.rights.portability": "die Übertragbarkeit Ihrer Daten zu verlangen;",
        "policy.rights.objection": "bestimmten Arten der Verarbeitung zu widersprechen.",
        "policy.rights.complaint": "Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.",
        "policy.encryption.title": "VII. SSL-/TLS-Verschlüsselung",
        "policy.encryption.text": "Diese Website verwendet aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Sie schützt übertragene Daten und erschwert es Dritten, diese abzufangen oder zu lesen.",
        "policy.plugins.title": "VIII. Plugins",
        "policy.spotify.title": "Spotify",
        "policy.spotify.p1a": "Auf diesen Seiten sind Funktionen des Musikdienstes Spotify eingebunden. Dieser Dienst wird von Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm, Schweden, bereitgestellt. Spotify-Plugins sind an dem grünen Logo auf unserer Website zu erkennen. Eine Übersicht der Spotify-Plugins finden Sie unter ",
        "policy.spotify.plugins": "Spotify-Plugins",
        "policy.spotify.p1b": ". Wenn Sie eine unserer Seiten mit einem Spotify-Plugin besuchen, kann eine direkte Verbindung zwischen Ihrem Browser und dem Spotify-Server hergestellt werden. Dadurch kann Spotify über Ihre IP-Adresse erfahren, dass Sie unsere Website besucht haben.",
        "policy.spotify.p2": "Wenn Sie auf die Spotify-Schaltfläche klicken, während Sie in Ihrem Spotify-Konto angemeldet sind, können Sie Inhalte unserer Seiten mit Ihrem Spotify-Profil verknüpfen. Dadurch kann Spotify den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.",
        "policy.spotify.p3a": "Weitere Informationen finden Sie in der Datenschutzerklärung von Spotify unter ",
        "policy.spotify.privacy": "Datenschutzerklärung von Spotify",
        "policy.spotify.p3b": ". Wenn Sie nicht möchten, dass Spotify Ihren Besuch auf unserer Website Ihrem Spotify-Konto zuordnet, melden Sie sich bitte von Ihrem Spotify-Konto ab.",
        "policy.youtube.title": "YouTube",
        "policy.youtube.p1": "Meine Website verwendet Plugins von YouTube, das von Google betrieben wird. Betreiber der Seiten ist YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine meiner Seiten mit einem YouTube-Plugin besuchen, wird eine Verbindung zu den YouTube-Servern hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.",
        "policy.youtube.p2": "Wenn Sie in Ihrem YouTube-Konto angemeldet sind, kann YouTube Ihr Surfverhalten direkt Ihrem persönlichen Profil zuordnen. Sie können dies verhindern, indem Sie sich von Ihrem YouTube-Konto abmelden. YouTube wird verwendet, um unsere Website ansprechend zu gestalten. Dies stellt ein berechtigtes Interesse gemäß Art. 6 Abs. 1 Buchst. f DSGVO dar.",
        "policy.youtube.p3a": "Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter ",
        "policy.youtube.privacy": "Datenschutzerklärung von Google",
        "policy.youtube.p3b": ".",

        /* RIGHTS */
        "nav.privacy": "Datenschutzerklärung",
        "rights": "Alle Rechte vorbehalten.",

        /* SUCCESS */
        "success.title": "Nachricht gesendet.",
        "success.message": "Vielen Dank für deine Nachricht. Du hörst bald von mir!",
        "success.home": "Zurück zur Startseite",

        /* ERROR */
        "error.title": "Seite nicht gefunden",
        "error.message": "Diese Seite gibt es (noch) nicht.",
        "error.home": "Zurück zur Startseite"
    }
};

const defaultTexts = new Map();

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-trans]").forEach((el) => {
        if (!defaultTexts.has(el)) defaultTexts.set(el, el.textContent);
        el.textContent = lang === "en"
            ? defaultTexts.get(el)
            : (translations[lang]?.[el.dataset.trans] ?? defaultTexts.get(el));
    });

    document.querySelectorAll("[data-trans-attr]").forEach((el) => {
        const [attr, key] = el.dataset.transAttr.split(":");
        if (!el.dataset.transOrig) el.dataset.transOrig = el.getAttribute(attr);
        el.setAttribute(attr, lang === "en"
            ? el.dataset.transOrig
            : (translations[lang]?.[key] ?? el.dataset.transOrig));

    });
    document.querySelectorAll(".lang-switch button").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

function savedLanguage() {
    try { return localStorage.getItem("lang") || "en"; } catch (e) { return "en"; }
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-switch button");
    if (!btn) return;
    try { localStorage.setItem("lang", btn.dataset.lang); } catch (err) { }
    applyLanguage(btn.dataset.lang);
});

document.body.addEventListener("htmx:afterSettle", () => applyLanguage(savedLanguage()));
document.addEventListener("DOMContentLoaded", () => applyLanguage(savedLanguage()));