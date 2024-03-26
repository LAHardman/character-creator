window.onload = function() {

    let head = document.getElementsByTagName('head')[0];

    let headerScript = document.createElement('script');
    headerScript.type = 'text/javascript';
    headerScript.src = '../javascript/elements/header.js';
    head.appendChild(headerScript);

    let searchScript = document.createElement('script');
    searchScript.type = 'text/javascript';
    searchScript.src = '../javascript/elements/search.js';
    head.appendChild(searchScript);

    let selectionScript = document.createElement('script');
    selectionScript.type = 'text/javascript';
    selectionScript.src = '../javascript/elements/selection.js';
    head.appendChild(selectionScript);

}