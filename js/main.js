// Your JavaScript goes here
const button = document.querySelector("button");
const body = document.body;

button.addEventListener("click", _ => {
  body.classList.toggle("offsite-is-open");
});
