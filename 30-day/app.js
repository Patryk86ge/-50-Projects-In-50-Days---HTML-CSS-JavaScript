const h1Text = document.querySelector(".text");
const inputSpeed = document.querySelector("#speed");
const text = 'Kocham chleb ze smalcem';
let idx = 1;
let speed = 300 / inputSpeed.value;
// console.log(inputSpeed.value);

writeLetter();

function writeLetter() {
  h1Text.innerHTML = text.slice(0,idx);
  idx++
  if (idx > text.length){
    idx = 1;
  }
  setTimeout(() => writeLetter(),speed)
}

inputSpeed.addEventListener('input',(e) => speed = 300 / e.target.value)