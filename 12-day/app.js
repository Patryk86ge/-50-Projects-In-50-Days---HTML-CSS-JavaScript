const faq = document.querySelectorAll(".faq");
const btn = document.querySelectorAll(".faq-toggle");

btn.forEach(el => {
  el.addEventListener('click',(e)=> {
    el.parentNode.classList.toggle('active')
  })
})