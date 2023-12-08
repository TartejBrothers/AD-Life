function toggleMenu() {
  var dropdownMenu = document.getElementById("dropdown-menu");

  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.animation = "slideOut 0.6s ease-out";
    setTimeout(function () {
      dropdownMenu.style.display = "none";
      dropdownMenu.style.animation = "";
    }, 600);
  } else {
    dropdownMenu.style.display = "flex";
    dropdownMenu.style.animation = "slideIn 0.6s ease-out";
  }
}
