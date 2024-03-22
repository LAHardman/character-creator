window.onload = function() {
    let headerLinks = document.getElementById('headerLinks').children;
    for (let i = 0; i < headerLinks.length; i++) {
        if (!headerLinks[i].classList.contains('active')) {
            headerLinks[i].addEventListener('click', function() {
                tabSelect(this);
            }, false);
        }
    }
}

tabSelect = function(selectedTab) {
    window.location.href=selectedTab.innerHTML.toLowerCase()+'Page.html';
}