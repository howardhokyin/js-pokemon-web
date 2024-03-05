import React, { useEffect, useState } from 'react';
import { fetchPokemonList } from '../api/pokemonAPI';
import Card from './Card';

const PokeDex = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
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

  const handleSelect = (pokemonName) => {
    setSelectedPokemon(pokemonName);
  };

  return (
    <div className="bg-yellow-100">
      <div className="flex flex-row  min-h-screen max-w-[1000px] mx-auto">
        <div className="flex flex-row justify-center font-bold text-[40px]">
          {' '}
          {offset == 0 ? (
            <></>
          ) : (
            <button className="" onClick={() => handlePre(10)}>
              &lt;
            </button>
          )}
        </div>

        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-rows-5 grid-flow-col gap-2 ">
              {pokemonList.map((pokemon) => (
                <button
                  key={pokemon.name}
                  onClick={() => handleSelect(pokemon.name)}
                >
                  {/* {console.log(pokemon.name)} */}
                  <Card pokemon={pokemon} />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-row space-x-3 justify-center font-bold text-[40px]">
          {offset <= 1025 ? (
            <button onClick={() => handleNext(10)}>&gt;</button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokeDex;
