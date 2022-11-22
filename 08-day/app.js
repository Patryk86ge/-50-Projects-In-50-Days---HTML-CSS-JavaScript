const labels = document.querySelectorAll(".form-control label");
 labels.forEach(el => {
   el.innerHTML = el.innerText
     .split('')
     .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms ">${letter}</span>`)
     .join('')
 })