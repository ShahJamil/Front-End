function toggleNavbar() {
  var x = document.getElementById("myNavbar");
  var navLinks = x.querySelector(".nav-links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}
