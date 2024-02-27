export const fetchPokemonList = async (offset, limit) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  try {
    const response = await fetch(URL);

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log('Error: ' + e);
    throw e;
  }
};

export const fetchPokemonImg = async (pokemonName) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.sprites.front_default;
  } catch (e) {
    console.log('Error: ' + e);
    throw e;
  }
};
