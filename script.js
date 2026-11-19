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
        label.textContent = full ? "Show text" : "View full illustration";
        icon.textContent = full ? "⤡" : "⤢";
    };

    expandBtn.addEventListener("click", toggle);
    expandBtn.closest("figure").querySelector("img").addEventListener("click", toggle);
}