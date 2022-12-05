const codeInput = document.querySelectorAll(".code");

codeInput[0].focus();

codeInput.forEach((el,inx) => {
  el.addEventListener('keydown',(e) => {
    if (e.key <= 0 && e.key >= 9){
      codeInput[inx].value = '';
      setTimeout(() => codeInput[inx +1 ].focus(),10)
    }else if (e.key === 'Backspace'){
      setTimeout(() => codeInput[inx - 1 ].focus(),10)
    }
  })
})
