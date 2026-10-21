/* Arrow Keys */

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") document.querySelector(".grid-arrow-back a")?.click();
    if (e.key === "ArrowRight") document.querySelector(".grid-arrow-forward a")?.click();
});

/* Play Button */

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("bird-toggle");
    const audio = document.getElementById("bird-audio");
    if (!btn || !audio) return;

    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => { });
        } else {
            audio.pause();
        }
    });

    audio.addEventListener("play", () => {
        btn.textContent = "❚❚";
        btn.setAttribute("aria-label", "Play ambient bird sounds");
        btn.classList.add("is-playing");
    });

    audio.addEventListener("pause", () => {
        btn.textContent = "▶";
        btn.setAttribute("aria-label", "Stop ambient bird sounds");
        btn.classList.remove("is-playing");
    });
});