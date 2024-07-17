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

function showMarketPlaceMenu() {
  let showMarketPlaceMenu = document.getElementById(
    "marketplace-dropdown-content"
  );
  showMarketPlaceMenu.classList.toggle("showmarket-dropdown");
}

function toggleMenu() {
  let showMarketPlaceMenu = document.getElementById("extra-dropdown-content");
  showMarketPlaceMenu.classList.toggle("showextra-dropdown");
}

function showMobileMarketDropdown() {
  let showMobileMarketElem = document.getElementById(
    "mobile-marketplace-dropdown-content2"
  );
  showMobileMarketElem.classList.toggle("showMobmarket-dropdown");
}

function showSidebar() {
  let showMobNav = document.getElementById("mobile-menu");
  showMobNav.style.display = "block";
}

function closeSideNavBar() {
  let hideSearchbar = document.getElementById("mobile-menu");
  hideSearchbar.style.display = "none";
}
