import React, { useState, useEffect } from 'react';

const Search = () => {
  const pokemonURI = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemons, setPokemons] = useState([]);
  const [pokemonID, setPokemonID] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    FetchPokemons();
  }, []);

  const FetchPokemons = async () => {
    try {
      const response = await fetch(pokemonURI);
      if (!response.ok) {
        throw new Error('404');
      }
      const data = await response.json();

      setPokemons(data.results);
      console.log(data.results);
    } catch (e) {}
  };

  const handleIDInput = (event) => {
    setPokemonID(event.target.value);
  };

  //capitalize the first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  //fetch specific data by ID
  const FetchPokemon = async () => {
    try {
      if (pokemonID < 100000) {
        const response = await fetch(pokemonURI + pokemonID); //with pokemon ID can fetch the pokemon
        const data = await response.json();
        const formattedName = capitalizeFirstLetter(data.name);
        setPokemonImage(data.sprites.front_default);

        setPokemonName(formattedName);
      } else {
        setPokemonID('');
        setPokemonImage('');
        setPokemonName('');
      }
    } catch (error) {
      console.log('you get error from ' + error);
    }
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col h-5/6 bg-yellow-300 justify-center items-center p-3">
        {pokemonName === '' && <div>please enter ID (1-1025) </div>}
        <img
          className="h-auto w-32 bg-yellow-200 rounded-full"
          src={pokemonImage}
          alt=""
        />
        <div className="">{pokemonName}</div>
      </div>{' '}
      <div className="flex flex-row h-1/6  ">
        <input
          type="text"
          className="w-3/4 text-[28px] text-center shadow-lg border border-black bg-red-100"
          placeholder="Enter ID of pokemon"
          value={pokemonID}
          onChange={handleIDInput}
        />
        {pokemonID < 100000 ? (
          <button
            className="w-1/4 text-[28px] bg-green-400"
            onClick={FetchPokemon}
          >
            OK
          </button>
        ) : (
          <p className="w-1/4 text-[28px] text-center h-full flex content-center items-center bg-gray-300">
            Must be between 1-1025
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
