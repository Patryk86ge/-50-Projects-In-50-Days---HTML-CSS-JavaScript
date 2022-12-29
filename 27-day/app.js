const messageContainer = document.querySelector(".message_container");
const messageBtn = document.querySelector(".message_btn");

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]
const types = [
  'info',
  'success',
  'error'
]

messageBtn.addEventListener('click', () => createMessage());

function createMessage(message = null,type = null) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.classList.add(type ? type : getRandomType())
  div.innerText = message ? message : randomMessage();
  messageContainer.appendChild(div);

  setTimeout(()=> {
    div.remove()
  },4000)
}

function randomMessage() {
  return messages[Math.floor(Math.random()* messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random()* types.length)];
}



