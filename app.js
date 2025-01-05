document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const columns = document.querySelectorAll(".column");

    // Drag-and-drop functionality
    columns.forEach(column => {
        column.addEventListener("dragover", e => {
            e.preventDefault();
            const draggingCard = document.querySelector(".dragging");
            const container = column.querySelector(".card-container");
            container.appendChild(draggingCard);

            // Save data after dragging
            saveData();
        });
    });

    // Function to create a card
    function createCard(title, description, status) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("draggable", "true");

        card.innerHTML = `
            <strong>${title}</strong>
            <p>${description}</p>
        `;

        card.addEventListener("dragstart", () => card.classList.add("dragging"));
        card.addEventListener("dragend", () => card.classList.remove("dragging"));

        const column = document.querySelector(`[data-status="${status}"] .card-container`);
        column.appendChild(card);
    }

    // Save cards to localStorage
    function saveData() {
        const tasks = [];
        document.querySelectorAll(".card").forEach(card => {
            tasks.push({
                title: card.querySelector("strong").textContent,
                description: card.querySelector("p").textContent,
                status: card.closest(".column").dataset.status,
            });
        });
        localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
    }

    // Load cards from localStorage
    function loadCardsFromStorage() {
        const savedCards = JSON.parse(localStorage.getItem("kanbanTasks") || "[]");
        savedCards.forEach(card => createCard(card.title, card.description, card.status));
    }

    loadCardsFromStorage();

    // Add card functionality
    const addCardButton = document.getElementById("add-card-button");
    console.log(addCardButton); // This should log the button element
    addCardButton.addEventListener("click", () => {
        console.log("addCard Clicked!");
        const title = document.getElementById("card-title").value.trim();
        const description = document.getElementById("card-description").value.trim();
        const status = document.getElementById("card-status").value;

        if (!title) {
            alert("Title is required!");
            return;
        }

        createCard(title, description, status);
        saveData();

        // Clear input fields
        document.getElementById("card-title").value = "";
        document.getElementById("card-description").value = "";
        document.getElementById("card-status").value = "To-Do";
    });
});
