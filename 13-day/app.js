const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("textarea");

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 100);
    randomSelect();
  }
})

function createTags(input) {
  const tags = input.split(',').filter(el => el.trim() !== '').map(el => el.trim())
  tagsEl.innerHTML = '';
  tags.forEach(el => {
    const takEl = document.createElement('span');
    takEl.classList.add('tag');
    takEl.innerHTML = el;
    tagsEl.appendChild(takEl);
  })
}

function randomSelect() {
  const time = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highLightTag(randomTag);

    setTimeout(()=> {
      removeHighLightTag(randomTag)
    },100)
  }, 100);

  setTimeout(()=> {
  clearInterval(interval)
    setTimeout(()=>{
      const randomTAg = pickRandomTag();
      highLightTag(randomTAg);
    },100)

  },time+100)

}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag){
  tag.classList.add('highlight');
}
function removeHighLightTag(tag){
  tag.classList.remove('highlight');
}