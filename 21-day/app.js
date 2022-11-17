const imageContainer = document.querySelector(".image__container");
const image = document.querySelectorAll(".image__container img");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

let counter = 0;
let interval = setInterval(run,2000);

function run (){
  counter++;
  changeImg();
}
function changeImg () {
  if (counter > image.length -1 ){
    counter = 0;
  }else if (counter < 0){
    counter = image.length -1;
  }
  imageContainer.style.transform = `translateX(${-counter * 300}px)`;
}

function resetInterval()  {
  clearInterval(interval);
  interval = setInterval(run,2000);
}

btnRight.addEventListener('click',() => {
  counter++;
  changeImg();
  resetInterval();

})
btnLeft.addEventListener('click',() => {
  counter--;
  changeImg();
  resetInterval();
})