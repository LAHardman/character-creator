window.onload = function() {
    let raceSearchBar = document.getElementById('raceSearch');
    raceSearchBar.addEventListener('keyup', function() {
        raceSearch();
    }, false);

    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'javascript/main.js';
    head.appendChild(script);

    let headerLinks = document.getElementById('headerLinks').children;
    for (let i = 0; i < headerLinks.length; i++) {
        if (!headerLinks[i].classList.contains('active')) {
            headerLinks[i].addEventListener('click', function() {
                tabSelect(this);
            }, false);
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