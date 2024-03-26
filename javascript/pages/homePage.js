
window.onload = function() {

    let head = document.getElementsByTagName('head')[0];

    let headerScript = document.createElement('script');
    headerScript.type = 'text/javascript';
    headerScript.src = '../javascript/elements/header.js';
    head.appendChild(headerScript);

}