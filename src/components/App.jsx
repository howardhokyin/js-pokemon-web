import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../index.css';

function App() {
  const pokemonURI = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemons, setPokemons] = useState([]); // Renamed for clarity

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(pokemonURI);
      const data = await response.json();
      setPokemons(data.results);
    }
    fetchPokemon();
  }, []);

  return (
    <div className=" bg-red-400">
      {pokemons.map((pokemon) => (
        <a key={pokemon.name} className="m-3 ">
          <Card pokemon={pokemon} />
        </a>
      ))}
    </div>
  );
}

export default App;
