
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const notesList = document.querySelector("#notes-list");
const status = document.querySelector("#status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const note = input.value.trim();

    if (!note) {
        status.textContent = "Please enter a note.";
        return;
    }

    const item = document.createElement("li");
    item.textContent = note;

    notesList.appendChild(item);

    input.value = "";
    status.textContent = "Note added successfully.";
});
