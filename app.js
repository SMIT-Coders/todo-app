var i = 1;
function pushList() {
    valueStore = document.getElementById("input").value;
    if (valueStore !== "") {
        var orderedList = document.querySelector("ol");
        var newList = document.createElement("li");
        newList.classList.add("list-item");
        newList.setAttribute("id", `id${i}`);
        var icon1 = document.createElement("i");
        var icon2 = document.createElement("i");
        var appendChild1 = orderedList.appendChild(newList);
        appendChild1.innerHTML = valueStore;
        newList.appendChild(icon1);
        newList.appendChild(icon2);
        icon1.classList.add("fa-solid", "fa-trash");
        icon2.classList.add("edit", "fa-solid", "fa-pen");
        icon1.setAttribute("onclick", `deleteBtn(${i});`)
        icon2.setAttribute("onclick", `editBtn(${i});`)
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        i++;
    }
    else {
        document.body.children[1].classList.add("modal");
        document.body.children[1].classList.remove("hidden");
        document.getElementsByClassName("ok-button")[0].focus();
        document.getElementById("input").blur();
    }

}

function deleteBtn(i) {
    document.getElementById(`id${i}`).remove();
}

function deleteAll() {
    document.querySelector("ol").innerHTML = "";
}
var value1;
function editBtn(i) {
    var getList = document.getElementById(`id${i}`);
    value1 = getList.innerHTML; 
    var newIcon = document.createElement("i");
    newIcon.setAttribute("id", "close");
    newIcon.setAttribute("class", "fa-solid fa-xmark");
    newIcon.setAttribute("onclick", `closeBtn(${i})`);
    var icon1 = document.getElementById(`id${i}`).children[0]
    var icon2 = document.getElementById(`id${i}`).children[1]
    getList.innerText = "";
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "newInput");
    getList.appendChild(newInput);
    getList.appendChild(newIcon);
    newInput.focus();
    newInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if (newInput.value !== "") {

                var newValue = document.getElementById("newInput").value;
                getList.innerText = newValue;
                getList.appendChild(icon1);
                getList.appendChild(icon2);
            }
            else {
                document.body.children[1].classList.add("modal");
                document.body.children[1].classList.remove("hidden");
                document.getElementsByClassName("ok-button")[0].focus();
                document.getElementById("newInput").blur();
            }
        }
    })
}
function modalClose() {
    var modalClass = document.getElementsByClassName("modal")[0];
    modalClass.classList.add("hidden");
    modalClass.classList.remove("modal");
}

function closeBtn(i) {
    document.getElementById(`id${i}`).innerHTML = value1;
}