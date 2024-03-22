function raceSearch() {
    let input = document.getElementById('raceSearch').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('raceSelection');
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