let selections = document.getElementsByClassName('selection');
for (let i = 0; i < selections.length; i++) {
    selections[i].addEventListener('click', function() {
        selectOption(this);
    }, false);
}

function selectOption(selectedOption) {
    let popout = selectedOption.getElementsByClassName('popout')[0];
    let previousSelection = document.getElementById('selected');
    if (previousSelection) {
        let previousPopout = previousSelection.getElementsByClassName('popout')[0];
        previousSelection.removeAttribute('id');
        previousPopout.classList.remove('active');
        if(selectedOption!=previousSelection) {
            selectedOption.id = 'selected';
            popout.classList.add('active');
        }
    } else {
        selectedOption.id = 'selected';
        popout.classList.add('active');
    }
}