var i = 1;
function pushList() {
    var valueStore = document.getElementById("input").value;
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
    i++;
}
function deleteBtn(i) {
    var parentID = document.getElementById(`id${i}`);
    parentID.remove();
}