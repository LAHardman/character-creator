let searchBars = document.getElementsByClassName('searchBar');
for (let i = 0; i < searchBars.length; i++) {
    searchBars[i].addEventListener('keyup', function() {
        search(searchBars[i].parentElement.id);
    }, false);
}

function search(searchType) {
    let searchField = document.getElementById(searchType);
    let input = searchField.getElementsByClassName('searchBar')[0].value
    input = input.toLowerCase();
    let x = searchField.getElementsByClassName('searchResult');
    let l = x.length;
    for (let i = 0; i < l; i++) {
        if (!x[i].querySelectorAll('label')[0].innerHTML.toLowerCase().includes(input)) {
        x[i].classList.add("hidden");
        }
        else {
        x[i].classList.remove("hidden");
        }
    }
}