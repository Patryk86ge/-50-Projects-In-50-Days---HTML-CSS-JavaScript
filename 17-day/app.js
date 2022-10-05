const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=87167d50b8a810b20afa0efe36f165d8&page=1';
const IMG_PAGE = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=87167d50b8a810b20afa0efe36f165d8&query="';
const searchInput = document.querySelector(".input");
const main = document.querySelector(".main");
const form = document.querySelector(".form");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json();
  showMove(data.results);
  console.log(data.results);
}
function showMove(moves) {
  console.log(  main.innerHTML = '');
  main.innerHTML = '';
  moves.forEach(el => {
    const {original_title, vote_average, overview, backdrop_path, id} = el;
    main.innerHTML += `
    <div class="move_box" id="${id}">
    <img src="${IMG_PAGE}${backdrop_path}" alt="${original_title}">
      <div class="move_info">
        <h3>${original_title}</h3>
        <span class="${getVoteColor(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>overview</h3>
        <p>
         ${overview}
        </p>
      </div>
  </div>
  `
  })
}

function getVoteColor(vote) {
  if (vote >= 8) {
    return 'green'
  }else if (vote >= 5){
    return 'orange'
  }else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchMove = searchInput.value;
  if (searchMove && searchMove !== '') {
    getMovies(SEARCH_URL + searchMove);
    searchInput.value = '';
  } else {
    window.location.reload();
  }
})






