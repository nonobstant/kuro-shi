// OPEN
var modal = document.getElementById('01');
var modal2 = document.getElementById('02');
var body = document.getElementById('body');

// CLICK CLOSE
window.onclick = function(event) {
if (event.target == body) {
modal.style.display = "none";
modal2.style.display = "none";
} 
}
