// OPEN
var modal = document.getElementById('01');
var modal2 = document.getElementById('02');

// CLICK CLOSE
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
} else if (event.target == modal2) {
modal2.style.display = "none";
}
}
