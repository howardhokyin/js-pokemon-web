import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../index.css';

function App() {
  const pokemonURI = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemonID, setPokemonID] = useState('');
  const [pokemons, setPokemons] = useState([]);

  //fetch data
  useEffect(() => {
    if (pokemonID && pokemonID < 1200) {
      async function FetchPokemon() {
        const response = await fetch(pokemonURI + pokemonID); //with pokemon ID can fetch the pokemon
        const data = await response.json();
        console.log(data);
      }
    }

    FetchPokemon();
  }, [pokemonID]);

  const handleIDInput = (event) => {
    setPokemonID(event.target.value);
  };

  const FetchPokemon = async () => {};

  return (
    <div className=" bg-red-400">
      <input type="text" value={pokemonID} onChange={handleIDInput} />
      <button onClick={FetchPokemon}>OK</button>
    </div>
  );
}

export default App;
