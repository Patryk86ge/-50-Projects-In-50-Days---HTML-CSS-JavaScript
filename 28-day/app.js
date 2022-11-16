const result = document.querySelector(".result");
const filter = document.querySelector(".filter");
const listItem = [];

getUser();

filter.addEventListener('input', (e) => filterUser(e.target.value))

async function getUser() {
  const res = await fetch('https://randomuser.me/api?results=50')
  const {results} = await res.json()
  result.innerHTML = '';

  results.forEach(user => {
    const li = document.createElement('li');
    listItem.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user__info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `
    result.appendChild(li)
  })
  console.log(results);
}

function filterUser(search) {
  listItem.forEach(item => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())){
      item.classList.remove('hiden')
    }else {
      item.classList.add('hiden');
    }
  })
}

