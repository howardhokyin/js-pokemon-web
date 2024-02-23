import React from 'react';

const Nav = () => {
  return (
    <div className="flex flex-row justify-end space-x-5 p-2 bg-teal-500 font-bold">
      <div className="text-red-500">PokeDex</div>
      <div>Battle</div>
      <div>Search</div>
    </div>
  );
};

export default Nav;
