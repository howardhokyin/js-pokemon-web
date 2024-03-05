import { Outlet, NavLink } from 'react-router-dom'; // Import NavLink

const Nav = () => {
  return (
    <>
      <nav className="flex justify-center space-x-3 bg-red-400 h-[40px] items-center p-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-green-200' : 'text-black'
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/pokedex"
          className={({ isActive }) =>
            isActive ? 'text-green-200' : 'text-white'
          }
        >
          Pokedex
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? 'text-green-200' : 'text-white'
          }
        >
          Search
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
