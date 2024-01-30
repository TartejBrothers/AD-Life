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

function search() {
  var searchTerm = document.getElementById("search").value.toLowerCase();
  var resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  var searchableElements = document.querySelectorAll(".searchable");
  var hasResults = false;

  searchableElements.forEach(function (element) {
    var content = element.textContent.toLowerCase();

    if (content.includes(searchTerm)) {
      var resultItem = document.createElement("div");
      resultItem.textContent = content;
      resultsContainer.appendChild(resultItem);
      hasResults = true;
    }
  });
  resultsContainer.style.display = hasResults ? "block" : "none";
  resultsContainer.innerHTML += searchTerm.split(" ").join("<br>");
  resultsContainer.innerHTML +=
    '<div class="close-button" onclick="closeSearchResults()">✖</div>';
}

function closeSearchResults() {
  var resultsContainer = document.getElementById("searchResults");
  resultsContainer.style.display = "none";
}

document.getElementById("search").addEventListener("input", search);
