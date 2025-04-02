document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModal = document.getElementById("closeModal");
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger-menu");
    const philQuote = document.getElementById("philQuote");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    if (contactButton) {
        contactButton.addEventListener("click", function () {
            modalOverlay.classList.remove("hidden");
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modalOverlay.classList.add("hidden");
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", function (event) {
            if (event.target === modalOverlay) {
                modalOverlay.classList.add("hidden");
            }
        });
    }

    if (philQuote) {
        philQuote.addEventListener("click", () => {
            let existingQuote = document.querySelector("#philQuote p");
            let existingAuthor = document.querySelector("#philQuote cite");
            let randQuote = getRandom();

            if (existingQuote && existingAuthor) {
                existingQuote.textContent = `"${randQuote.quote}"`;
                existingAuthor.textContent = `- ${randQuote.author}`;
            } else {
                let newQuote = document.createElement("p");
                newQuote.textContent = `"${randQuote.quote}"`;
                newQuote.style.opacity = "0";

                let newAuthor = document.createElement("cite");
                newAuthor.textContent = `- ${randQuote.author}`;
                newAuthor.style.opacity = "0";

                philQuote.appendChild(newQuote);
                philQuote.appendChild(newAuthor);

                setTimeout(() => {
                    newQuote.style.opacity = "1";
                    newAuthor.style.opacity = "1";
                }, 10);
            }
        });
    }
});

function getRandom() {
    const quotes = [
        { quote: "The unexamined life is not worth living.", author: "Socrates" },
        { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
        { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        { quote: "Freedom is nothing else but a chance to be better.", author: "Albert Camus" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
        { quote: "Man is condemned to be free.", author: "Jean-Paul Sartre" },
        { quote: "To be is to be perceived.", author: "George Berkeley" },
        { quote: "We suffer more in imagination than reality.", author: "Seneca the Younger" },
        { quote: "Hell is other people.", author: "Jean-Paul Sartre" }
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
