window.onload = function() {
    document.getElementById('mascara').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

document.getElementById('aceitar').onclick = function() {
    document.getElementById('mascara').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('recusar').onclick = function() {
    location.reload();
}

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'SEU_ID_ANALYTICS');
