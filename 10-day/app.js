const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// function generateJoke() {
//   const configApi = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }
//   fetch('https://icanhazdadjoke.com',configApi )
//     .then(res => res.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke
//       console.log(data)
//     } )
// }

// async

async function generateJoke() {
  const configApi = {
    headers: {
      'Accept': 'application/json'
    }
  }
  try {
    const res = await fetch('https://icanhazdadjoke.com', configApi)
    const data = await res.json()
    jokeEl.innerHTML = data.joke;
  } catch (error){
    alert("error");
  }

}

