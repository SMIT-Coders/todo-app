var i = 1;
function pushList() {
    valueStore = document.getElementById("input").value;
    if (valueStore !== "") {
        var orderedList = document.querySelector("ol");
        var newList = document.createElement("li");
        newList.classList.add("list-item");
        newList.setAttribute("id", `id${i}`);
        var list = document.createElement("i");
        var appendChild1 = orderedList.appendChild(newList);
        appendChild1.innerHTML = valueStore;
        newList.appendChild(list);
        list.classList.add("fa-solid", "fa-trash");
        list.setAttribute("onclick", `deleteBtn(${i});`)
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
    var parentID = document.getElementById(`id${i}`);
    parentID.remove();
}

function modalClose() {
    var modalClass = document.getElementsByClassName("modal")[0];
    modalClass.classList.add("hidden");
    modalClass.classList.remove("modal");
    document.getElementById("input").focus();
}