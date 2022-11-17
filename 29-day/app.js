const ratings = document.querySelectorAll(".rating");
const containerRating = document.querySelector(".container__rating");
const btnSend = document.querySelector(".btnSend");
const containerPanel = document.querySelector(".container__panel");
let selectRating = 'Satisfied';

containerRating.addEventListener('click',(e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectRating = e.target.nextElementSibling.innerHTML;
  }
})

btnSend.addEventListener('click',() => {
  containerPanel.innerHTML = `
     <div class="rating">
      <i class='fas fa-heart'></i>
      <br>
      <span>Thanks You</span>
      <br>
      <span>FeedBack: <strong>${selectRating}</strong></span>
      <br>
      <br>
      <p>We'll use your feedback to improve our costumer support</p> 
    </div>
  `
})

function removeActive() {
  for (let i=0; i<ratings.length; i++) {
      ratings[i].classList.remove('active')
  }
}