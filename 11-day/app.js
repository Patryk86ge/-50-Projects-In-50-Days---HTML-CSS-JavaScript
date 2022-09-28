const insert = document.querySelector(".insert");


window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
   <div class="key">
    ${e.key === '' ? 'space' : e.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${e.keyCode === '' ? 'space' : e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${e.code === '' ? 'space' : e.code}
    <small>event.Code</small>
  </div>
  `
  console.log(e.keyCode);
})