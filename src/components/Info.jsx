import React, { useState, useEffect } from 'react';

const Info = () => {
  const pokemonURI = 'https://pokeapi.co/api/v2/pokemon/';
  const [name, setName] = useState('');

  useEffect(() => {
    fetch(pokemonURI)
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array to run only once

  return <div>Info</div>;
};

export default Info;
