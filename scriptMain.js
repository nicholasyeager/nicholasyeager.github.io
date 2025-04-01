document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModal = document.getElementById("closeModal");

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
});
