const backgraund = document.querySelector('.backgraund');
const inputPassword = document.querySelector('#password');

inputPassword.addEventListener('input',(e) => {
  e.preventDefault;
  const input = e.target.value;
  const inputLength = input.length;
 
  
 const blureValue = 20 - (inputLength *2);
 backgraund.style.filter = `blur(${blureValue}px)`
  
})