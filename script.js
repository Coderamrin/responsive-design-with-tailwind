const nav = document.querySelector(".nav");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () => {
  nav.classList.toggle("left-[-100%]");
});
