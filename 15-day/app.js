const counter = document.querySelectorAll(".counter");

counter.forEach(el => {
  el.innerHTML = '0';
  const updateCounter =() => {
    const target = +el.getAttribute('data-target');
    const count = +el.innerText;
    const increment = target / 300 ;

    if (count < target){
      el.innerText = `${Math.ceil( count + increment)}`
      setTimeout(updateCounter,1)
    }else {
      el.innerText = target
    }
  }
  updateCounter();
})