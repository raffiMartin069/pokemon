// https://pokeapi.co/

const pokedex = document.getElementById("pokedex");
const fetchPokemon = async () => {
  const pokemon = await Promise.all(
    Array.from({ length: 150 }, (_, i) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((res) =>
        res.json()
      )
    )
  );
  console.log(pokemon);
  const pokemonData = pokemon.map(({ name, sprites, types, id, species }) => ({
    name,
    species,
    image: sprites["front_default"],
    type: types.map((type) => type.type.name).join(", "),
    id,
  }));
  displayPokemon(pokemonData);
};

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      ({ image, name, type }) => `
        <li class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-title">${name}</h2>
            <p class="card-subtitle">Type: ${type}</p>
        </li>
    `
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString;

  // Add bounce effect to the image
  const cardImages = document.querySelectorAll('.card-image');
  cardImages.forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.animation = 'bounce 0.6s';
    });
    image.addEventListener('mouseout', () => {
      image.style.animation = '';
    });
  });
};

// Call the fetchPokemon function to start the data fetching process
fetchPokemon();
