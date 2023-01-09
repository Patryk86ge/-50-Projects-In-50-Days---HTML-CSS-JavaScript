const counter = document.querySelector(".counter");
const bgImage = document.querySelector(".bg-image");

let clickCount = 0;

bgImage.addEventListener('dblclick', (e) => {
  counter.innerHTML = ++clickCount;
  counter.style.color = 'red';
  createHart(e);
})

const createHart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffSet = e.target.offsetLeft;
  const topOffSet = e.target.offsetTop;

  const xInside = x - leftOffSet;
  const yInside = y - topOffSet;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  bgImage.appendChild(heart)

}