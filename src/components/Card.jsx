import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/pokemonAPI';

const Card = ({ pokemon }) => {
  const [image, setImage] = useState('');
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState([]);
  useEffect(() => {
    fetchPokemon(pokemon.name).then((data) => {
      setImage(data.sprites.front_default);
      setID(data.id);
      setName(data.name);
      const typeName = data.types.map((t) => t.type.name);
      // console.log('the type are : ' + typeName);
      setType(typeName + '');
    });
  }, []);
  return (
    <div>
      {' '}
      <div className="flex flex-row bg-yellow-300 rounded-full border-4 border-red-500 m-2 ">
        <img
          src={image}
          alt=""
          className="bg-gray-200 rounded-full border-4 border-red-300 w-32"
        />
        <div className="flex flex-col p-3 font-bold text-[20px] justify-center items-start">
          <div className="flex justify-between items-center w-[300px]">
            <h1 className="flex">{name}</h1>
            <h1 className="flex">id: {id}</h1>
          </div>
          <p className="">Type: {type}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
