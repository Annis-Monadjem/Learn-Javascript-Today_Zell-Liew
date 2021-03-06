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
