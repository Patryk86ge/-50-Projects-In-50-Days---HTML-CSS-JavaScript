const sounds = ['crash','bass',"snare",
  "tom-1",
  "tom-2",
  "tom-3",
  "tom-4"]

sounds.forEach(el => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = el;
  btn.addEventListener('click',()=>{
    stapSongs();
    document.getElementById(el).play();
  })
  document.querySelector("#button").appendChild(btn);

})
function stapSongs (){
  sounds.forEach(el => {
    const song = document.getElementById(el);
    song.pause();
    song.currentTime = 0;
  })
}