document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();

  var elems = document.querySelectorAll(".scrollspy");

  for (i = 0; i < elems.length; i++) {
    var instances = M.Scrollspy.init(elems[i]);
  }
});

function closeSideNav() {
  document.getElementById("sidenav").style.transform = "translateX(0%)";
}
