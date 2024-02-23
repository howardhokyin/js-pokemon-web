import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../index.css';

function App() {
  const pokemonURI = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemonID, setPokemonID] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonName, setPokemonName] = useState('');

  const handleIDInput = (event) => {
    setPokemonID(event.target.value);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  //fetch data
  const FetchPokemon = async () => {
    try {
      if (pokemonID < 1026) {
        const response = await fetch(pokemonURI + pokemonID); //with pokemon ID can fetch the pokemon
        const data = await response.json();
        const formattedName = capitalizeFirstLetter(data.name);
        setPokemonImage(data.sprites.front_default);

        setPokemonName(formattedName);
      } else {
        setPokemonID('');
        setPokemonImage('');
      }
    } catch (error) {
      console.log('you get error from ' + error);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col h-5/6 bg-yellow-300 justify-center items-center p-3">
        <img
          className="h-auto w-32 bg-yellow-200 rounded-full"
          src={pokemonImage}
          alt=""
        />
        <div className="">{pokemonName}</div>
      </div>{' '}
      <div className="flex flex-row h-1/6 bg-green-400 ">
        <input
          type="text"
          className="w-3/4 text-[28px] text-center shadow-lg border border-black bg-red-100"
          placeholder="Enter ID of pokemon"
          value={pokemonID}
          onChange={handleIDInput}
        />
        <button className="w-1/4 text-[28px]" onClick={FetchPokemon}>
          OK
        </button>
      </div>
    </div>
  );
}

export default App;
