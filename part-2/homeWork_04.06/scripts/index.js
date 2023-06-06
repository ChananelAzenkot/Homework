/*
let a = 8;

try{
    console.log(b);
}
catch{
    console.log('Error');
}
finally{
    console.log('hello world');
}
*/
const show = document.getElementById("show");

setTimeout(() => {
  console.log("hello world");
}, 2000);

//exercise 1
console.log("exercise 1");

async function print1() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
      reject("Error");
    }, 1000);
  });
  await promise.then(
    (resolve) => console.log(resolve),
    (reject) => console.log(reject)
  );
}

print1().then(async () => {
  console.log(2);

  //exercise 2
  console.log("exercise 2");

  function getPromise() {
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=36");
      request.onload = () => {
        if (request.status == 200) {
          resolve(request.response);
        } else {
          reject("Error");
        }
      };
      request.send();
    });
    return promise;
  }
  let promise = getPromise();
  let pokemons = [];

  const promiseHandler = () => {
    promise.then(
      (result) => {
        pokemons = [...JSON.parse(result).results];
        pokemons.forEach((pokemon) => console.log(pokemon.name + " "));
      },
      (error) => console.log(error)
    );
  };

  promiseHandler();

  async function fetchPokemons() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36");
    if (response.status == 200) {
      return response.json();
    } else {
      console.log(response.statusText);
    }
  }
  pokemons = await fetchPokemons();

  console.log("exercise 3");
  pokemons.results.forEach((pokemon) => console.log(pokemon.name + " "));

  console.log("exercise 4");
  const base = document.getElementById("base");
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  pokemons.results.forEach(async (pokemon, index) => {
    let pokemonResponse = await fetch(pokemon.url);
    if (pokemonResponse.status == 200) {
      let pokemonData = await pokemonResponse.json();
      const pokiId = index +1;
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokiId}.png`;
      const img = document.createElement("img");
      const divBox = document.createElement("div");
      divBox.classList.add("divBox");
      divBox.innerHTML = pokemonData.name;
      container.appendChild(divBox);
      img.src = imgUrl;
      divBox.appendChild(img);
      base.appendChild(container);
    } else {
      console.log("none", pokemon.name);
    }
  });
});







