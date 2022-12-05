const content = document.querySelectorAll(".content");
const liItem = document.querySelectorAll("nav ul li");
console.log(content)

liItem.forEach((item, inx) => {
  item.addEventListener('click', () => {
    removeAllcntent();
    removeAllItems();

    item.classList.add('active');
    content[inx].classList.add('showe');
  })
})

function removeAllcntent() {
  content.forEach(el => {
    el.classList.remove('showe')
    console.log(el);
  })
}

function removeAllItems() {
  liItem.forEach(el => {
    el.classList.remove('active')
  })
}
const aa = {

}