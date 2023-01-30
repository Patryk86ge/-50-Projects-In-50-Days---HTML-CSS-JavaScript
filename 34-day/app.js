const numbers = document.querySelectorAll(".numbers span");
const counter = document.querySelector(".counter");
const finalMsg = document.querySelector(".final");
const btnReplay = document.querySelector(".replay");

animationGo()

function resetDom() {
  counter.classList.remove('hide');
  finalMsg.classList.remove('show');

  numbers.forEach((nr) => {
    nr.classList.value = '';
  })
  numbers[0].classList.add('in')
}
function animationGo() {
  numbers.forEach((nr,idx) => {
    const nextToLast = numbers.length - 1;

    nr.addEventListener('animationend',(e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast){
        nr.classList.remove('in');
        nr.classList.add('out');
      }else if(e.animationName === 'goOut' && nr.nextElementSibling) {
        nr.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMsg.classList.add('show')
      }
    })
  })
}

btnReplay.addEventListener('click',() => {
  resetDom();
  animationGo()
})