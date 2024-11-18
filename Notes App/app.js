var input = document.querySelector("#input");
input.value.trim()
var notesList = document.querySelector("#notes-container");




function addNotes() {
    if (input.value.length < 3) {
        alert("Plz write correct notes")
        return
    }
    var getNotes = localStorage.getItem("notes")

    var currentTime = new Date().toLocaleString()
    var noteObject = {
        text: input.value,
        notesTime: currentTime
    }
    if (getNotes == null) {
        let tempArr = [noteObject];
        localStorage.setItem("notes", JSON.stringify(tempArr));
    } else {
        let tempArr = JSON.parse(getNotes)
        tempArr.unshift(noteObject)
        localStorage.setItem("notes", JSON.stringify(tempArr))
    }
    renderUI();
    input.value = "";
    return
}
function editHandler(ele) {
    var getNotes = JSON.parse(localStorage.getItem("notes"));
    var elemID = ele.id
    var editPrompt = prompt("enter new notes")
    if (editPrompt == null) {
        return

    } else {
        var currentTime = new Date().toLocaleString()
        var noteObject = {
            text: editPrompt,
            notesTime: currentTime
        }

        var currentTime = new Date().toLocaleString(); 
        getNotes[elemID] = { text: editPrompt, timestamp: currentTime };
        getNotes[elemID] = noteObject
        localStorage.setItem("notes", JSON.stringify(getNotes));
        renderUI();
    }
}

function deleteHandler(ele) {
    var getNotes = JSON.parse(localStorage.getItem("notes"));
    var elemID = ele.id
    getNotes.splice(elemID, 1)
    localStorage.setItem("notes", JSON.stringify(getNotes))
    renderUI();

}

function renderUI() {
    var getArr = JSON.parse(localStorage.getItem("notes"))
    var showUI = "";
    for (var i = 0; i < getArr.length; i++) {
        var note = getArr[i]
        showUI += ` <div class="card">
    <div class="card-body d-flex justify-content-between align-items-center">
        <p class="cards-texts">${note.text}</p>
        <div class="d-flex">
        <i onClick="editHandler(this)" id=${i} class="fa-solid fa-pen-to-square"></i>
        <i onClick="deleteHandler(this)" id=${i} class="fas fa-trash-alt"></i>
        </div>
        </div>

          <div class="card-footer text-muted text-end">
                <small>Created at: ${note.notesTime}</small>
            </div>
    </div>`
    }

    notesList.innerHTML = showUI;

}

function enterFunc() {
    if (event.keyCode == 13) {
        addNotes()
    }
}

