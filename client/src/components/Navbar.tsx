import { Link, NavLink } from 'react-router-dom';

 function Navbar() {
  return (
    <header className="topbar">
      <Link to="/" className="brand">
         Mystery Room
      </Link>
      <nav>
        <NavLink to="/mysteries">Mysteries</NavLink>
        <NavLink to="/how-to-play">How to play</NavLink>
      </nav>
    </header>
  );
}
export default Navbar;