document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();
});

particlesJS.load("particles-js", "particles.json", () => {
  console.log("particles.JS started");
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.Scrollspy.init(elems);
});
