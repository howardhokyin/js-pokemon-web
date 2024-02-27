import React, { useEffect, useState } from 'react';
import { fetchPokemonList } from '../api/pokemonAPI';
import Card from './Card';

const PokeDex = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemonList(offset, limit)
      .then((data) => {
        setPokemonList(data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon list:', error);
        setIsLoading(false);
      });
  }, [offset, limit]);

  const handleNext = (number) => {
    setOffset((current) => current + number);
  };

  const handlePre = (number) => {
    setOffset((current) => current - number);
  };

  return (
    <div className="bg-yellow-100 min-h-screen">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-rows-5 grid-flow-col ">
            {pokemonList.map((pokemon) => (
              <button key={pokemon.name}>
                {/* {console.log(pokemon.name)} */}
                <Card pokemon={pokemon} />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-row space-x-3">
        {offset == 0 ? (
          <div>no pre</div>
        ) : (
          <button onClick={() => handlePre(10)}>&lt;</button>
        )}
        {offset <= 1025 ? (
          <button onClick={() => handleNext(10)}>&gt;</button>
        ) : (
          <div>No next</div>
        )}
      </div>
    </div>
  );
};

export default PokeDex;
