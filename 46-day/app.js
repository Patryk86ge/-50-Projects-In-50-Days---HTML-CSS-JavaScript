const range = document.querySelector("#range");

const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

range.addEventListener('input',(e) => {
  const inputValue = +e.target.value;
  const label = e.target.nextElementSibling;

  const inputWidth = getComputedStyle(e.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(label).getPropertyValue('width');

  const nrWidth = +inputWidth.substring(0,inputWidth.length -2 );
  const nrLabelWidth = +labelWidth.substring(0,labelWidth.length -2 );

  const max = +e.target.max;
  const min = +e.target.min;

  const leftValue = inputValue * (nrWidth/max) - nrLabelWidth / 2 + scale(inputValue,min,max,10,-10);


  label.style.left = `${leftValue}px`;
  label.innerHTML = inputValue;
})

