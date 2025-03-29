document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
