function classSearch() {
    let input = document.getElementById('classSearch').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('classSelection');
    let l = x.length;
    for (i = 0; i < l; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].classList.add("hidden");
        }
        else {
        x[i].classList.remove("hidden");
        }
    }
}