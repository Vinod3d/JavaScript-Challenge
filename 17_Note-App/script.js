document.addEventListener("DOMContentLoaded", function() {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeBtn");
    const submitBtn = document.getElementById("submitBtn");
    const notesContainer = document.getElementById("notesContainer");
    let editMode = false;
    let editIndex = null;

    addNoteBtn.addEventListener("click", function() {
        modal.style.display = "block";
        editMode = false;
        editIndex = null;
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    submitBtn.addEventListener("click", function() {
        const title = document.getElementById("noteTitle").value;
        const description = document.getElementById("noteDescription").value;

        if (title && description) {
            const note = { title, description };
            if (editMode) {
                updateNoteInLocalStorage(editIndex, note);
                updateNoteInUI(editIndex, note);
            } else {
                addNoteToLocalStorage(note);
                addNoteToUI(note);
            }
            modal.style.display = "none";
            clearInputs();
        } else {
            alert("Please fill in both title and description fields.");
        }
    });

    function addNoteToLocalStorage(note) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function addNoteToUI(note) {
        const noteCard = document.createElement("div");
        noteCard.classList.add("card");
        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.description}</p>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        notesContainer.appendChild(noteCard);
    }

    function updateNoteInLocalStorage(index, note) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes[index] = note;
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function updateNoteInUI(index, note) {
        const card = notesContainer.children[index];
        card.querySelector("h3").textContent = note.title;
        card.querySelector("p").textContent = note.description;
    }

    function clearInputs() {
        document.getElementById("noteTitle").value = "";
        document.getElementById("noteDescription").value = "";
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(note => addNoteToUI(note));
    }

    loadNotes();

    notesContainer.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("deleteBtn")) {
            const card = target.parentElement;
            const title = card.querySelector("h3").textContent;
            deleteNoteFromLocalStorage(title);
            card.remove();
        } else if (target.classList.contains("editBtn")) {
            const card = target.parentElement;
            const title = card.querySelector("h3").textContent;
            const description = card.querySelector("p").textContent;
            editMode = true;
            editIndex = Array.from(notesContainer.children).indexOf(card);
            document.getElementById("noteTitle").value = title;
            document.getElementById("noteDescription").value = description;
            modal.style.display = "block";
        }
    });

    function deleteNoteFromLocalStorage(title) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes = notes.filter(note => note.title !== title);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
});
