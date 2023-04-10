const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == "") {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // li = "inputBox.value"
        listContainer.appendChild(li); // add listContainer
        inputBox.value = "";
        let span = document.createElement("span"); // add for close tag
        span.innerHTML = "\u00d7"; // add close tag
        li.appendChild(span); // add into li
    }
    saveData();
};
listContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked") // add class of "checked"
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // remove li element
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();