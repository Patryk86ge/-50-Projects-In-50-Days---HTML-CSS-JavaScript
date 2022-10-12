const body = document.body;
const slide = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slide.length - 1) {
    activeSlide = 0;
  }
  setBgImg();
  setActiveClass()
})
leftBtn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = 0;
  }
  setBgImg();
  setActiveClass()
})
setBgImg();

function setBgImg() {
  body.style.backgroundImage = slide[activeSlide].style.backgroundImage;

}

function setActiveClass() {
  slide.forEach(slide => slide.classList.remove('active'));
  slide[activeSlide].classList.add('active');
}
