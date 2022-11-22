const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes (){
  window.innerHeight
  const  triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop< triggerBottom){
      el.classList.add('show')
    }else {
      el.classList.remove('show');
    }
    console.log(boxTop);
  })

}


