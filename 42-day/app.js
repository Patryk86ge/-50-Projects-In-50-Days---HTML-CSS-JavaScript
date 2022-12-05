const btn = document.querySelector(".magicBtn");
const boxes = document.querySelector(".boxes");

btn.addEventListener('click',() => boxes.classList.toggle('big'))

function creatBox (){
  for (let i=0; i<4; i++) {
    for (let j=0; j<4; j++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.backgroundPosition = `${-j * 125}px ${-i * 125}px `
      boxes.appendChild(div)
      console.log(div);
    }

  }
}
creatBox()