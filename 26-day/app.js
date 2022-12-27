const containerSlider = document.querySelector(".container_slider");
const leftSlide = document.querySelector(".left_slide");
const rightSlide = document.querySelector(".right_slide");
const downBtn = document.querySelector(".down_btn");
const upBtn = document.querySelector(".up_btn");
const slidesLength = rightSlide.querySelectorAll('div').length

let indexSlider = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`
 upBtn.addEventListener('click' ,() => slideChange('up'));
downBtn.addEventListener('click' ,() => slideChange('down'));

function slideChange(direct) {
  const slideHeight = containerSlider.clientHeight;
  if (direct === 'up'){
    indexSlider++;
    if (indexSlider > slidesLength -1){
      indexSlider = 0;

    }
  }
  else if (direct === 'down'){
    indexSlider--;
    if (indexSlider < 0){
      indexSlider = slidesLength -1;

    }
  }
  rightSlide.style.transform = `translateY(-${indexSlider * slideHeight}px)`
  leftSlide.style.transform = `translateY(${indexSlider * slideHeight}px)`

}