import React, { useEffect, useState } from 'react';
import { fetchPokemonImg } from '../api/pokemonAPI';

const Card = ({ pokemon }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    fetchPokemonImg(pokemon.name).then((data) => {
      setImage(data);
      setName(pokemon.name);
    });
  }, []);
  return (
    <div className="flex flex-row bg-yellow-300 rounded-full border-4 border-red-500 m-2 ">
      <img
        src={image}
        alt=""
        className="bg-gray-200 rounded-full border-4 border-red-300 w-32"
      />
      <p className="flex p-3 font-bold text-[20px] justify-center items-center">
        {name}
      </p>
    </div>
  );
};

export default Card;
