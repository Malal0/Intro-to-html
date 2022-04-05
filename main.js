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
const body = document.querySelector("body");
const sliderContainer = document.querySelector("#darkToggle");
const slider = document.querySelector("#circle");
const profilePic = document.querySelector("#profile-pic");

const aTags = document.getElementsByTagName("a");

slider.addEventListener("click", function () {
    darkMode();
    changePic();
    anchorTags();
});

/*if image is dark change to light
if image is light change to dark*/
function changePic() {
    if (profilePic.src = "/images/self portrait.png") {
        profilePic.src = "/images/self portrait white.png";
    } else {
        profilePic.src = "/images/self portrait.png";
    }
};
//function that:
//changes the body background color
//changes the body, atag, border color
function darkMode() {
    slider.classList.toggle("slider--left");
    body.classList.toggle("body--bg-dark");
    sliderContainer.classList.toggle("container--border-light-color");
};
//aTag.style.color = "#d3b3db";

function anchorTags() {
    for (var i = 0; i < aTags.length; i++) {
        aTags[i].style.color = "var(--lightText)";
    };
};