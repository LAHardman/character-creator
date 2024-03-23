window.onload = function() {
    let classSelections = document.getElementsByClassName('classSelection');
    for (let i = 0; i < classSelections.length; i++) {
        classSelections[i].addEventListener('click', function() {
            classSelect(this);
        }, false);
    }

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

function classSearch() {
    let input = document.getElementById('classSearch').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('classLabel');
    let l = x.length;
    for (i = 0; i < l; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].parentElement.classList.add("hidden");
        }
        else {
        x[i].parentElement.classList.remove("hidden");
        }
    }
}
function classSelect(selectedClass) {
    let previousSelection = document.getElementById('selected')
    if (previousSelection) {
        previousSelection.removeAttribute('id');
        if(selectedClass!=previousSelection) {
            selectedClass.id = 'selected';
        }
    } else {
        selectedClass.id = 'selected';

    }
}