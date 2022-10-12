const hourEL = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");
const timeEL = document.querySelector(".time");
const dataEL = document.querySelector(".data");
const btnToggle = document.querySelector(".clock-toggle");
const html = document.querySelector("html");

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
btnToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
})

function clockTime() {
  const data = new Date();
  const hour = data.getHours();
  const hourClock = hour % 12;
  const minutes = data.getMinutes();
  const second = data.getSeconds();
  const day = data.getDay();
  const mont = data.getMonth();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hourClock,0,11,0,360)}deg)`;
  minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
  secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(second,0,59,0,360)}deg)`;
  timeEL.innerHTML = `${hourClock}:${minutes < 10 ? `0${minutes}`:minutes} ${ampm}`
  dataEL.innerHTML = `${days[day]} ${month[mont]}`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
clockTime();
setInterval(clockTime,1000)