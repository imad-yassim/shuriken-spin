
let btn = document.getElementById("spin");

let number = 0;
let clicks = 0;

const getPrize = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(3000), 4000);
  });

btn.onclick = async function () {
  clicks += 1;
  // initial rotation -------------------
  gsap.fromTo(".wheel",{rotate: number}, {rotate: number + 1500, duration: 3, ease: "power3.in"})
  gsap.to(".blurred-wheel", {opacity: 1, duration: 0.5, delay: 1.8})

  // add where it lands
  gsap.set(".wheel", {rotate: 0, delay: 3.2})
  const prizeDegree = await getPrize();
console.log(prizeDegree);
  // reveal animation
  number = prizeDegree;
  gsap.to(".blurred-wheel", {opacity: 0, duration: 0.5})
  gsap.fromTo(".wheel",{rotate: 0}, {rotate: number, duration: 12, ease: "power4.out"})
}


const rewardsBtn = document.getElementById("rewardsBtn");
const nftsBtn = document.getElementById("nftsBtn");
const closeTabButton = document.querySelectorAll(".closeBtn");


function openTab (tab){
  if(tab === 0){
    gsap.to("#rewardsTab", {x: "-50%", ease: "ease.in"})
  }else {
    gsap.to("#nftsTab", {x: "-50%", ease: "ease.in"})
  }
  closeTabButton[0].style.display = "block"
  closeTabButton[1].style.display = "block"
}

function closeTab (){
    gsap.to("#rewardsTab", {x: "170%"})
    gsap.to("#nftsTab", {x: "-170%"})

    closeTabButton[0].style.display = "none"
    closeTabButton[1].style.display = "none"
}

rewardsBtn.onclick = () => openTab(0);
nftsBtn.onclick = () => openTab(1);

closeTabButton[0].onclick = () => closeTab()
closeTabButton[1].onclick = () => closeTab()