document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModal = document.getElementById("closeModal");
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger-menu");
    const quoteButton = document.getElementById("philQuote");
 
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Show the modal when the contact button is clicked
    contactButton.addEventListener("click", function () {
        modalOverlay.classList.remove("hidden");
    });

    // Hide the modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        modalOverlay.classList.add("hidden");
    });

    // Hide the modal if the user clicks outside the contact card
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            modalOverlay.classList.add("hidden");
        }
    });

    philQuote.addEventListener("click", () => {
        alert("the button works");
    });
});
