function toggleList(id) {
    let index = document.getElementById(id);
    index.classList.toggle("hidden");
}

function hidden() {
    let index = document.getElementById("list");
    index.classList.remove("hidden");
}

function expand() {
    let index = document.getElementById("list");
    index.classList.add("hidden");
}

function toggleList1() {
    toggleList("list1-sublist");
}

function toggleList2() {
    toggleList("list2-sublist");
}

function toggleList3() {
    toggleList("list3-sublist");
}
// toggleList1();
// toggleList2();
// toggleList3();


document.getElementById("list-1").onclick = toggleList1;
document.getElementById("list-2").onclick = toggleList2;
document.getElementById("list-3").onclick = toggleList3;
document.getElementById("expand").onclick = expand;
document.getElementById("hidden").onclick = hidden;