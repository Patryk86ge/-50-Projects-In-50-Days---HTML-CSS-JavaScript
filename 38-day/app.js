const container = document.querySelector(".container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const divSquare = document.createElement('div');
  divSquare.classList.add('square');
  container.appendChild(divSquare);

  divSquare.addEventListener('mouseenter', () => setColor(divSquare));
  divSquare.addEventListener('mouseleave', () => removeColor(divSquare));
}

function setColor(element) {
  const color = randomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000'

}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}