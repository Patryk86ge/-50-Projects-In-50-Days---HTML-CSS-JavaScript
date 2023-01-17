const addBtn = document.querySelector(".add");
const notesLS = JSON.parse(localStorage.getItem('notes'));

if (notesLS){
   notesLS.forEach(el => {
     addNote(el)
   })
}

addBtn.addEventListener("click",() => addNote());

function addNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : "" }"></textarea>
  `

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  mainDiv.innerHTML = marked(text)

  editBtn.addEventListener('click',() => {
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  })

  deleteBtn.addEventListener('click',() => {
    note.remove()
    updatesLs()
  })

  textArea.addEventListener('input',(e) => {
    const { value } = e.target;

    mainDiv.innerHTML = marked(value);
    updatesLs()
  })

  document.body.appendChild(note);
}

function updatesLs(){
  const textNote = document.querySelectorAll("textarea");
  const notes = [];

  textNote.forEach(note => notes.push(note.value))
  localStorage.setItem('notes',JSON.stringify(notes))
}