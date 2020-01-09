// OPEN
var modal = document.getElementById('01');
var modal2 = document.getElementById('02');
var modal3 = document.getElementById('03');
var body = document.getElementById('shell');

// CLICK CLOSE
window.onclick = function(event) {
if (event.target == shell) {
modal.style.display = "none";
modal2.style.display = "none";
modal3.style.display = "none";
}
}
