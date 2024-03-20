function pageChange(newActivePage) {
    activePage = document.getElementsByClassName("active").item(0);
    newActivePage = document.getElementById(newActivePage);
    if (activePage == null && newActivePage != null) {
        newActivePage.className = "active";
    } else if (newActivePage != null && newActivePage != activePage) {
        activePage.className = "hidden";
        newActivePage.className = "active";
    }

}
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