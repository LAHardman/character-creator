window.onload = function() {
    let classSelections = document.getElementsByClassName('classSelection');
    for (let i = 0; i < classSelections.length; i++) {
        classSelections[i].addEventListener('click', function() {
            classSelect(this);
        }, false);
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