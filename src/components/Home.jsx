import React from 'react';
import PokeBall from '../image/pokeball.png';

const Home = () => {
  return (
    <div className="flex bg-yellow-400 min-h-screen justify-center items-center text-[50px]">
      <img src={PokeBall} alt="" />
      Welcome to Pokemon <img src={PokeBall} alt="" />
    </div>
  );
};

export default Home;
