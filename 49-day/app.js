const userData = [
  {
    name:'Sean Watson',
    work: 'Manager',
    email:'sean.watson@example.com',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur\n' +
      '    consequatur, dolor, dolore eaque eius\n' +
      '    et fuga impedit, iusto necessitatibus quaerat quasi saepe soluta! Accusamus accusantium cumque doloremque eveniet\n' +
      '    fugit itaque minus officiis quibusdam suscipit voluptatem. Aliquid eius, error est fugiat itaque maxime quam\n' +
      '    quisquam reprehenderit temporibus, tenetur totam voluptas',
    img:'https://randomuser.me/api/portraits/men/50.jpg'
  },
  {
    name:'Manager',
    work: 'Manager',
    email:'kevin.bennett@example.com',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur\n' +
      '    consequatur, dolor, dolore eaque eius\n' +
      '    et fuga impedit, iusto necessitatibus quaerat quasi saepe soluta! Accusamus accusantium cumque doloremque eveniet\n' +
      '    fugit itaque minus officiis quibusdam suscipit voluptatem. Aliquid eius, error est fugiat itaque maxime quam\n' +
      '    quisquam reprehenderit temporibus, tenetur totam voluptas',
    img:'https://randomuser.me/api/portraits/men/55.jpg'
  },
  {
    name:'Sonia Kennedy',
    work: 'IT Developer',
    email:'sonia.kennedy@example.com',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur\n' +
      '    consequatur, dolor, dolore eaque eius\n' +
      '    et fuga impedit, iusto necessitatibus quaerat quasi saepe soluta! Accusamus accusantium cumque doloremque eveniet\n' +
      '    fugit itaque minus officiis quibusdam suscipit voluptatem. Aliquid eius, error est fugiat itaque maxime quam\n' +
      '    quisquam reprehenderit temporibus, tenetur totam voluptas',
    img:'https://randomuser.me/api/portraits/women/78.jpg'
  },
  {
    name:'Delores Franklin',
    work: 'IT HR',
    email:'delores.franklin@example.com',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur\n' +
      '    consequatur, dolor, dolore eaque eius\n' +
      '    et fuga impedit, iusto necessitatibus quaerat quasi saepe soluta! Accusamus accusantium cumque doloremque eveniet\n' +
      '    fugit itaque minus officiis quibusdam suscipit voluptatem. Aliquid eius, error est fugiat itaque maxime quam\n' +
      '    quisquam reprehenderit temporibus, tenetur totam voluptas',
    img:'https://randomuser.me/api/portraits/women/17.jpg'
  },
]

const testimonialUserText = document.querySelector(".testimonial__userText");
const userImg = document.querySelector(".testimonial__user img");
const userWork = document.querySelector(".user__work");
const userEmail = document.querySelector(".email");
const userName = document.querySelector(".user__name");

let index = 1;

function generateUser() {
  const {name,work,email,description,img} = userData[index];
  testimonialUserText.innerHTML = description;
  userImg.src = img;
  userName.innerHTML = name;
  userWork.innerHTML = work;
  userEmail.innerHTML = email;
  index++;

  if (index === userData.length -1){
    index = 0;
  }
}
setInterval(generateUser,10000);
