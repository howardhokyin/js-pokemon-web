export const pokemonAPI = async () => {
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';

  fetch('pokemonURL')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
