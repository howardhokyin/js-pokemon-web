import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pokedex">Pokedex</Link>
        <Link to="/search">Search</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
