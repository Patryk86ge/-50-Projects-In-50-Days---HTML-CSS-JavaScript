const API_URL = 'https://api.github.com/users/';
const inputSearch = document.querySelector(".form input");
const form = document.querySelector(".form");
const mainBox = document.querySelector(".main");

async function getUser(username) {
  try {
    const {data} = await axios(API_URL + username);
    user(data);
    getRepoUser(username)
    console.log(data);
  } catch (err) {
    if (err.response.status == 404) {
      errModal('No profile with this username');
    }

  }
}

async function getRepoUser(username) {
  try {
    const {data} = await axios(API_URL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    errModal('problem fetching repo');
  }
}

function user(data) {
  const cart = `
    <div class="container_search">
    <div class="img_user">
      <img src="${data.avatar_url}" alt="${data.username}">
    </div>
    <div class="box_user">
      <h1 class="user_name">${data.name}</h1>
      <p class="user_description">${data.bio}</p>
      <ul>
        <li>${data.followers} <strong>Followers</strong></li>
        <li>${data.following} <strong>Fallowing</strong></li>
        <li>${data.public_repos} <strong>Repos</strong></li>
      </ul>
      <div class="repos">
<!--        <a href="#" class="repos">Repo1</a>-->
<!--        <a href="#" class="repos">Repo2</a>-->
<!--        <a href="#" class="repos">Repo3</a>-->
      </div>
    </div>
  </div>
  `
  mainBox.innerHTML = cart;
}

function addReposToCard(repos) {
  const repEl = document.querySelector(".repos");
  repos.slice(0,5).forEach(repo => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repos');
    repoLink.href = repo.html_url ;
    repoLink.target = '_blank';
    repoLink.innerHTML = repo.name;

    repEl.appendChild(repoLink)

  })
}

function errModal(message) {
  mainBox.innerHTML = `
  <div>${message}</div>
  `
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = inputSearch.value
  if (user) {
    getUser(user);
    inputSearch.value = '';
  }
})