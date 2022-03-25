//opacity .7 light green: #BBDBB4B3
//light green: #BBDBB4;
//opacity .7 dark green: #223021b3;
//dark green: #223021;
//dark purple: #302131;
//light purple: #d3b3db;
//  1.I need to make a refernce to the html body
//  2.reference to a tags
// 3.reference to the slider container
// 4.refernce to the slider
console.log("no qema cuh");
const body = document.querySelector("body");
const aTag = document.querySelectorAll("a");
const sliderContainer = document.querySelector("#darkToggle");
const slider = document.querySelector("#circle");

slider.addEventListener("click", function () {
    console.log("here \/")
    darkMode()
});

//function that:
//changes the body background color
//changes the body, atag, border color
function darkMode() {
    slider.classList.toggle("slider--left")
    body.classList.toggle("body--bg-dark")
    sliderContainer.classList.toggle("container--border-light-color")
    aTag.classList.toggle("")
};