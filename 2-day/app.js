const progress = document.querySelector("#progress__line");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1 ;

next.addEventListener('click',() => {
  currentActive++
  if(currentActive > circle.length){
    currentActive = circle.length
  }
  update();
  // console.log(currentActive);
})

prev.addEventListener('click',() => {
  currentActive--
  if(currentActive < 1){
    currentActive = 1;
  }
  update();
})

function update() {
  circle.forEach((el,index) => {
    console.log(index);
    if (index < currentActive) {
      el.classList.add('active')
    }
    else {
      el.classList.remove('active')
    }
  })
  const active = document.querySelectorAll(".active");
  progress.style.width = ((active.length - 1) / (circle.length -1)) * 100 + '%';

  if (currentActive === 1){
    prev.disabled = true
  }else if (currentActive === circle.length){
    next.disabled = true;
  }
  else {
    prev.disabled = false ;
    next.disabled = false ;
  }
}
