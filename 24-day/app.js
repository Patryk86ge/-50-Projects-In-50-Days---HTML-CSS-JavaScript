const excerpt = document.querySelector(".excerpt");
const profileImg = document.querySelector(".profile__img");
const name = document.querySelector(".name");
const data = document.querySelector(".data");
const cardTitle = document.querySelector(".card__title");
const cardHeader = document.querySelector(".card__header");

const animatedBg = document.querySelectorAll(".animated__bg");
const animatedText = document.querySelectorAll(".animated__bgText");

setTimeout(getData,2000);

function getData() {
  cardHeader.innerHTML = `<img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg" alt="img">`;
  cardTitle.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ut?';
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="men">`;
  name.innerHTML = 'John Doe';
  data.innerHTML = 'Oct 08,2022';

  animatedBg.forEach(bg => bg.classList.remove('animated__bg'));
  animatedText.forEach(el => el.classList.remove('animated__bgText'))

}

