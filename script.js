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
let wheel =  document.querySelector(".wheel");
let shuriken = document.querySelector(".shuriken")
let blurredWheel = document.querySelector(".blurred-wheel")
let btn = document.getElementById("spin");
let number = 3000;

let clicks = 0;
btn.onclick = function () {
  clicks += 1;
	roulette.style.transform = "translate(-50%, -50%) rotate(" + number + "deg)";
	shuriken.style.transform = "translate(-50%, -50%) rotate(" + number + "deg)";
  setTimeout(()=>{
    blurredWheel.style.opacity = 1
    // wheel.style.display = 'none'
  }, 1600)
  setTimeout(()=>{
    blurredWheel.style.opacity = 0
    // wheel.style.display = 'block'
  }, 3000)
	number += 3000;
}