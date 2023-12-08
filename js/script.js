function toggleMenu() {
  var dropdownMenu = document.getElementById("dropdown-menu");

  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.animation = "slideOut 0.3s ease-in-out";
    setTimeout(function () {
      dropdownMenu.style.display = "none";
      dropdownMenu.style.animation = "";
    }, 300);
  } else {
    dropdownMenu.style.display = "block";
    dropdownMenu.style.animation = "slideIn 0.3s ease-out";
  }
}
