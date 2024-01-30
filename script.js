
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
  gsap.fromTo(".wheel",{rotate: number}, {rotate: number + 1500, duration: 3, ease: "power3.in",})
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