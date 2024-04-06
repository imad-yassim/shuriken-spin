// entrance animation
setTimeout(() => {
  gsap.to(".fadeIn", { opacity: 1, duration: 2, delay: 0.2 });
  gsap.to(".loading", { opacity: 0, duration: 0.5 });
  const mainDark = document.querySelector(".mainDark");
  mainDark.style.backgroundColor = "rgba(0,0,0,0.6)";
}, 2000);

function revealAnimation() {
  const screens = {
    sm: { height: "40vw", marginTop: "-11vw" },
    md: { height: "40vw", marginTop: "-11vw" },
    lg: { height: "32vw", marginTop: "-12vw" },
  };
  const actualScreen =
    window.innerWidth < 729
      ? screens.sm
      : window.innerWidth < 1024
      ? screens.md
      : screens.lg;

  gsap.to(".bottomthing", {
    height: actualScreen.height,
    duration: 2,
    delay: 1.3,
    ease: "power2.inOut",
  });
  gsap.to(".bottomthing", {
    marginTop: actualScreen.marginTop,
    duration: 2.5,
    delay: 1.2,
    ease: "power3.inOut",
  });
  gsap.to(".topthing", {
    y: "-60%",
    duration: 2,
    delay: 1.2,
    ease: "power3.inOut",
  });
  gsap.to(".scrollsContainer", { opacity: 1, duration: 1 });
  gsap.to(".reward", { opacity: 1, duration: 1, delay: 3.2 });
  gsap.to("#claim", { opacity: 1, duration: 1, delay: 3.6 });
  gsap.to(".revealDarkBg", {
    opacity: 1,
    PointerEvents: "auto",
    duration: 0.5,
  });
}

// revealAnimation();

let btn = document.getElementById("spin");

let number = 0;
let clicks = 0;

const getPrize = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(3000), 4000);
  });

btn.onclick = async function () {
  btn.disabled = true
  clicks += 1;
  // initial rotation -------------------
  gsap.fromTo(
    ".wheel",
    { rotate: number },
    { rotate: number + 1500, duration: 1.4, ease: "power1.in" }
  );
  gsap.fromTo(
    ".shuriken",
    { rotate: number },
    { rotate: number + 2500, duration: 1, ease: "power1.in" }
  );
  gsap.fromTo(
    ".shuriken",
    { opacity: 1 },
    { opacity: 0, duration: 0.5, delay: 0.5 }
  );
  gsap.to(".blurred-wheel", { opacity: 1, duration: 0.5, delay: 0.2 });
  gsap.to(".blurred-shuriken", { opacity: 1, duration: 2, delay: 0.5 });

  // add where it lands
  gsap.set(".wheel", { rotate: 0, delay: 3.2 });
  gsap.set(".shuriken", { rotate: 0, delay: 3.2 });
  const prizeDegree = await getPrize();
  console.log(prizeDegree);
  // reveal animation
  number = prizeDegree;
  gsap.to(".blurred-wheel", { opacity: 0, duration: 0.5 });
  gsap.to(".blurred-shuriken", { opacity: 0, duration: 2 });
  gsap.fromTo(
    ".shuriken",
    { opacity: 0, duration: 0.5 },
    { opacity: 1, delay: 0, duration: 0.8 }
  );
  gsap.fromTo(
    ".wheel",
    { rotate: 0 },
    { rotate: number, duration: 12, ease: "power4.out" }
  );
  gsap.fromTo(
    ".shuriken",
    { rotate: 0 },
    { rotate: number, duration: 12, ease: "power1.out" }
  );
  setTimeout(() => {
    revealAnimation();
    btn.disabled = false
  }, 12000);
};
// mobile menu buttons
const rewardsBtn = document.getElementById("rewardsBtn");
const nftsBtn = document.getElementById("nftsBtn");
const closeTabButton = document.querySelectorAll(".closeBtn");

function openTab(tab) {
  if (tab === 0) {
    gsap.to("#rewardsTab", { x: "-50%", ease: "ease.in" });
  } else {
    gsap.to("#nftsTab", { x: "-50%", ease: "ease.in" });
  }
  closeTabButton[0].style.display = "block";
  closeTabButton[1].style.display = "block";
}

function closeTab() {
  gsap.to("#rewardsTab", { x: "170%" });
  gsap.to("#nftsTab", { x: "-170%" });

  closeTabButton[0].style.display = "none";
  closeTabButton[1].style.display = "none";
}

rewardsBtn.onclick = () => openTab(0);
nftsBtn.onclick = () => openTab(1);

closeTabButton[0].onclick = () => closeTab();
closeTabButton[1].onclick = () => closeTab();

function selectMultiplier(button, num){
  const allMultiplies = [1,5,2]
  const multiplierBtns = document.querySelectorAll(".multiplierBtn");
  multiplierBtns.forEach((btn, index)=>{
    btn.children[0].classList.remove("scale-[1.15]")
    btn.children[0].src = `./x${allMultiplies[index]}.png`
  })
  button.children[0].classList.add("scale-[1.15]")
  button.children[0].src = `./x${num}-selected.png`
}
