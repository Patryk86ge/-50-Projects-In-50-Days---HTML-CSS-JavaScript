const boxContainer = document.querySelector(".container");
const boxLeft = document.querySelector(".left");
const boxRight = document.querySelector(".right");


boxLeft.addEventListener('mouseover',()=> boxContainer.classList.add('hover_left'))
boxLeft.addEventListener('mouseleave',()=> boxContainer.classList.remove('hover_left'))

boxRight.addEventListener('mouseover',()=> boxContainer.classList.add('hover_right'));
boxRight.addEventListener('mouseleave',()=> boxContainer.classList.remove('hover_right'));