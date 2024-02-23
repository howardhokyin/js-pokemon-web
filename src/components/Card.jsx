// import Charmander from '../image/charmander.png';
import React, { useState, useEffect } from 'react';
// import { pokemonAPI } from '../api/pokemonAPI';
// import Info from './Info';

const Card = ({ pokemons }) => {
  return (
    <div className="bg-blue-100">
      <div>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index} className="mb-1">
              {/* Making each name clickable for further actions, like fetching more details */}
              <button
                onClick={() => handlePokemonClick(pokemon.url)}
                className="text-blue-500 hover:text-blue-700"
              >
                {pokemon.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* data.type */}
      <div>type</div>
      {/* data.weight */}
      <div>weight</div> <div>height</div>
    </div>
  );
};

export default Card;
