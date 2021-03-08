/***************************************************************
 *
 *                        TRANSITIONEND
 *
 ***************************************************************/
//{{{
document.addEventListener("transitionend", e => {
  const clicked = e.target.classList.contains("is-highlighted");
  if (clicked) {
    e.target.remove();
  }
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("transitionElems")) {
    e.target.classList.add("is-highlighted");
  }
}); //}}}

/***************************************************************
 *
 *                        ANIMATIONEND
 *
 ***************************************************************/
//{{{
document.addEventListener("click", e => {
  if (e.target.classList.contains("animationElems")) {
    e.target.classList.add("is-clicked");
  }
});

const animationElemsList = Array.from(
  document.querySelectorAll(".animationElems"),
);
document.addEventListener("animationend", e => {
  const animatElem = animationElemsList.find(
    animateElem => animateElem === e.target,
  );
  if (animatElem) {
    animatElem.remove();
  }
});
//}}}

/***************************************************************
 *
 *                        GSAP
 *
 ***************************************************************/

const gsap1 = document.querySelector("#gsap-1");
const gsap2 = document.querySelector("#gsap-2");
const gsap3 = document.querySelector("#gsap-3");
const gsap4 = document.querySelector("#gsap-4");

TweenMax.to(gsap1, 1, { x: 200, ease: Power4.easeOut });
TweenMax.to(gsap2, 3, { y: 200, ease: Power0.Bounce });
TweenMax.to(gsap3, 4, { rotate: 360, opacity: 0, ease: Power0.Bounce });

const tl = new TimelineMax({});
gsap4.addEventListener("click", e => {
  tl.to(gsap4, 1, { x: 100, ease: Power0.easeOut });
  tl.to(gsap4, 1, { y: 100, ease: Power0.easeOut });
  tl.to(gsap4, 1, { x: 0, ease: Power0.easeOut });
  tl.to(gsap4, 1, { y: 0, ease: Power0.easeOut });
});
