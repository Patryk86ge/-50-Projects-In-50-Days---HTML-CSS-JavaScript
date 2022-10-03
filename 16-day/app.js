const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector(".liters");
const percentage = document.querySelector(".percentage");
const remained = document.querySelector(".remained");

updateBigCup();

smallCups.forEach((el,inx) => {
  el.addEventListener('click',() =>{
    highlightCups(inx);
  })
})
function highlightCups(inx){
  if (smallCups[inx].classList.contains('full') && !smallCups[inx].nextElementSibling.classList.contains('full')){
    inx--;
  }
  smallCups.forEach((el,inx2) => {
    if (inx2 <= inx){
      el.classList.add('full');
    }else {
      el.classList.remove('full');
    }
  })
  updateBigCup();
}
function updateBigCup(){
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0){
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0 ;
  }else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px` ;
    percentage.innerHTML = `${fullCups / totalCups * 100}`
  }
  if (fullCups === totalCups){
    remained.style.visibility = 'hidden';
    remained.style.height = 0 ;
  }
  else {
    remained.style.visibility = 'visible';
    liters.innerHTML = `${2 - (250 * fullCups / 1000)} L`
  }

}