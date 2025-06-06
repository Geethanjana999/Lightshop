import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">Lumion </Link>
      </div>
      <div className="navTitles">
        <ul>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
