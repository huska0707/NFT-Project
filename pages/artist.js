let hamElem = document.getElementById ("hamburger");

hamElem.addEventListener("click", toggleMenu);

function showSideNav(){
    let showMobNav = document.getElementById("mobile-menu");
    showMobNav.style.display = "block";
}
function closeSideNavBar(){
    let hideSearchbar = document.getElementById("mobile-menu");
    hideSearchbar.style.display = "none";
}

function showMobileMarketDropdown(){
    let showMobileMarketElem = document.getElementById("mobile-marketplace-dropdown-content2");
    showMobileMarketElem.classList.toggle("showMobmarket-dropdown")
}