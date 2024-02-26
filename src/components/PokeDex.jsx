import React, { useEffect, useState } from 'react';
import { fetchPokemonList } from '../api/pokemonAPI'; // Ensure this path is correct

const PokeDex = () => {
  const [limit, setLimit] = useState(20);
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
    <div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {pokemonList.map(
              (
                pokemon,
                index // Using index as a key in case pokemon objects don't have unique id
              ) => (
                <li key={index}>{pokemon.name}</li> // Ensure your data objects have a 'name' property
              )
            )}
          </ul>
        )}
      </div>
      <div className="flex flex-row space-x-3">
        {offset == 0 ? (
          <div>no pre</div>
        ) : (
          <button onClick={() => handlePre(20)}>prev</button>
        )}
        {offset <= 1025 ? (
          <button onClick={() => handleNext(20)}>next</button>
        ) : (
          <div>No next</div>
        )}
      </div>
    </div>
  );
};

export default PokeDex;
