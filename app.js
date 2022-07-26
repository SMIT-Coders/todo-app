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
        document.getElementsByClassName("ok-button")[0].focus();
        document.getElementById("input").blur();
        document.body.children[1].classList.add("modal");
        document.body.children[1].classList.remove("hidden");
    }

}

function deleteBtn(i) {
    document.getElementById(`id${i}`).remove();
}

function deleteAll() {
    document.querySelector("ol").innerHTML = "";
}

function editBtn(i) {
    document.getElementById(`id${i}`).innerHTML = `<form onsubmit="return false">
        <input type="text" id="newInput">
        <button class="hidden" onclick="editBtn2(${i});"></button>
    </form>
    <i class="fa-solid fa-trash hidden" onclick="deleteBtn(${i});"></i>
    <i class="edit fa-solid fa-pen hidden" onclick="editBtn(${i});"></i>
    `;
    document.getElementById("newInput").focus();
}

function editBtn2(i) {
    var inputValue = document.getElementById("newInput").value;
    // document.getElementById(`id${i}`).innerHTML = inputValue;

    document.getElementById(`id${i}`).innerHTML = `${inputValue}
    <i class="fa-solid fa-trash" onclick="deleteBtn(${i});"></i>
    <i class="edit fa-solid fa-pen" onclick="editBtn(${i});"></i>
    `;
    console.log(
        document.getElementById(`id${i}`)
    );
}

function modalClose() {
    var modalClass = document.getElementsByClassName("modal")[0];
    modalClass.classList.add("hidden");
    modalClass.classList.remove("modal");
    document.getElementById("input").focus();
}
