let selections = document.getElementsByClassName('selection');
for (let i = 0; i < selections.length; i++) {
    selections[i].addEventListener('click', function() {
        selectOption(this);
    }, false);
}

function selectOption(selectedOption) {
    let previousSelection = document.getElementById('selected')
    if (previousSelection) {
        previousSelection.removeAttribute('id');
        if(selectedOption!=previousSelection) {
            selectedOption.id = 'selected';
        }
    } else {
        selectedOption.id = 'selected';

    }
}