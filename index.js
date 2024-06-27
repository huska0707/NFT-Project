// This is for the search icon on the nav bar

//grabbing the search bar
let searchIcon = document.getElementById("fa-magnifying-glass");
searchIcon.addEventListener("click", showSearchBar);

function showSearchBar() {
  let displayNavElem = document.getElementById("overlay");
  displayNavElem.style.display = "block";
}

// for displaying and hiding the search bar
let closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", closeSearchBar);

function closeSearchBar() {
  let hideSearchbar = document.getElementById("overlay");
  hideSearchbar.style.display = "none";
}
