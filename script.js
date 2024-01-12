const fadeInImage = document.getElementById("transparent-grey-div");
document.addEventListener("DOMContentLoaded", function() {
  // Initial state
  fadeInImage.style.opacity = 0;
  fadeInImage.style.transform = "scale(0)";
  setTimeout(function() {
    // Final state
    fadeInImage.style.opacity = 1;
    fadeInImage.style.transform = "scale(1)";
    fadeInImage.style.borderRadius = "0";
  }, 500); // 3000 milliseconds (3 seconds) delay before the image enlarges and fades in
});


var myDiv = document.getElementById("myDiv");

setTimeout(function() {
  myDiv.style.transition = "background-color 1s ease";
  myDiv.style.backgroundColor = "rgba(10, 10, 10, 0.5)";
}, 2000);

document.body.classList.add('show-image');

//------------------------------------------------------------------------------Roulette

let roulette = document.querySelector("#roulette");
let btn = document.getElementById("spin");
let number = 3000;

let clicks = 0;
btn.onclick = function () {
  clicks += 1;
	roulette.style.transform = "translate(-50%, -50%) rotate(" + number + "deg)";
  setTimeout(()=>{
    roulette.style.filter = "blur(10px)";
  }, 1200)
  setTimeout(()=>{
    roulette.style.filter = "blur(0px)";
  }, 3000)
	number += 3000;
}