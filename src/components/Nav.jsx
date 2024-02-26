import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="flex justify-end space-x-3 bg-red-400">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/pokedex">Pokedex</Link>
        <Link to="/search">Search</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
