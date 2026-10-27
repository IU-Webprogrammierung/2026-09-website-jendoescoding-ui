/* 1. Navigation with arrow keys */

document.addEventListener("keydown", (e) => {
    // Browser-Kürzel nicht stören (Alt + Pfeil links = Zurück im Browser)
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

    // Gespeicherte Wahl hat Vorrang, sonst gilt die Systemeinstellung "Bewegung reduzieren"
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