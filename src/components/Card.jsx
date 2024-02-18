// import Charmander from '../image/charmander.png';
import React, { useState, useEffect } from 'react';
// import { pokemonAPI } from '../api/pokemonAPI';
// import Info from './Info';

const Card = ({ pokemon }) => {
  return (
    <div>
      <div>
        {pokemon.name}
        {pokemon.url}
      </div>
    </div>
  );
};

export default Card;
