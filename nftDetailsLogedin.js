
let priceBtnOne = document.getElementById ( "priceBtnOne");
priceBtnOne.addEventListener ("click", showForm);

function showForm () {
    let overlayElem = document.getElementById ("overlayOne");
    overlayElem.style.display = "block";
}

let closeIcon = document.getElementById("fa-close");
function closeform() {
    let overlayElem = document.getElementById ("overlayOne");
    overlayElem.style.display = "none";
}

let priceBtnTwo = document.getElementById ( "priceBtnTwo");
priceBtnTwo.addEventListener ("click", showForm2);

function showForm2 () {
    let overlayElem2 = document.getElementById ("overlayTwo");
    overlayElem2.style.display = "block";
}
function closeform2() {
    let overlayElem2 = document.getElementById ("overlayTwo");
    overlayElem2.style.display = "none";
}

let displayBtn = document.getElementById ( "displayBtn");
displayBtn.addEventListener ("click", showHidden);

function showHidden() {
    let sliderElem = document.getElementById ("slider");
    sliderElem.classList.toggle("btn");
    console.log("showHidden");
}
