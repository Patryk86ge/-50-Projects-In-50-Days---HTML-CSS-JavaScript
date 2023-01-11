const resultSpan = document.querySelector(".result");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const clipboardBtn = document.querySelector(".clipboard");
const generateBtn = document.querySelector(".btn-large");

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}
generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value;//plus przerobi string na number;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultSpan.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length);
})
clipboardBtn.addEventListener("click",() => {
  const textarea = document.createElement('textarea');
  const password = resultSpan.innerText;
  if (!password) { return }
  textarea.value = password ;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert("Password copy to clipboard")
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typeCount = lower + upper + number + symbol;
  const typeArr = [
    {lower},
    {upper},
    {number},
    {symbol}
  ].filter(el => Object.values(el)[0]);

  if (typeCount === 0) {
    return '';
  }
  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach(el => {
      const funcName = Object.keys(el)[0];
      generatedPassword += randomFunction[funcName]()
    })
  }

  return  generatedPassword.slice(0, length);

}


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}=/,.*[]';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
