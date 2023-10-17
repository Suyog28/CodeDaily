
const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
    if (inputBox.value == "") {
        alert("Please enter a task");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }

    inputBox.value = "";

    saveData()

}


listContainer.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("checked");
        saveData()
    } else if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove();
        saveData()
    }
}, false)


function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showData();