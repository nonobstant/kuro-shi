$(".gece_modu_icon").click(function () {
  $("body").toggleClass("gece_modu");
  $(".ilerleme_yazi").toggleClass("basliklar_toggle");
  $(".baslik").toggleClass("basliklar_toggle");
});

$(".cont").scroll(function () {
  var winScroll =
  document.querySelector(".cont").scrollTop ||
  document.querySelector(".cont").scrollTop;
  var height =
  document.querySelector(".cont").scrollHeight -
  document.querySelector(".cont").clientHeight;
  var scrolled = winScroll / height * 100;
  document.getElementById("dolum").style.width = scrolled + "%";
});