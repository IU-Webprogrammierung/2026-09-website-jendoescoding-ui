document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") document.querySelector(".grid-arrow-back a")?.click();
    if (e.key === "ArrowRight") document.querySelector(".grid-arrow-forward a")?.click();
});
