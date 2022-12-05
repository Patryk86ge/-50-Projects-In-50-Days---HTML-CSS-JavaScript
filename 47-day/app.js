const btnOpen = document.querySelector(".btn_open");
const btnClose = document.querySelector(".btn_close");
const nav = document.querySelectorAll(".nav");
const html = document.querySelector("html");

console.log(html);

nav.forEach(el => {
  btnOpen.addEventListener('click', () => el.classList.add('nav__visible'));
  btnClose.addEventListener('click', () => el.classList.remove('nav__visible'));
})


