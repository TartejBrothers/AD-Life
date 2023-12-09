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
function changemenumentees() {
  var mentees = document.getElementById("mentees");
  var mentors = document.getElementById("mentors");
  var menteesbutton = document.getElementById("buttonmentees");
  var mentorsbutton = document.getElementById("buttonmentors");
  mentors.style.display = "none";
  menteesbutton.style.backgroundColor = "#1B204A";
  menteesbutton.style.color = "#fff";
  mentorsbutton.style.backgroundColor = "#fff";
  mentorsbutton.style.color = "#1B204A";
  mentees.style.display = "flex";
}
function changemenumentors() {
  var mentees = document.getElementById("mentees");
  var mentors = document.getElementById("mentors");
  var menteesbutton = document.getElementById("buttonmentees");
  var mentorsbutton = document.getElementById("buttonmentors");
  mentees.style.display = "none";
  mentors.style.display = "flex";
  mentorsbutton.style.backgroundColor = "#1B204A";
  mentorsbutton.style.color = "#fff";
  menteesbutton.style.backgroundColor = "#fff";
  menteesbutton.style.color = "#1B204A";
}
