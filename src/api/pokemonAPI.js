export const fetchPokemonList = async (offset, limit) => {
  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  try {
    const response = await fetch(pokemonURL);

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log('Error: ' + e);
    throw e;
  }
};
