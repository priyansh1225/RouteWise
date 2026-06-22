import { Link } from "react-router-dom";
import logo from "../assets/routewise-logo.png";

function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src={logo}
          alt="RouteWise Logo"
          className="navbar-logo"
        />
        <h2>RouteWise</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        🌙 / ☀️
      </button>
    </nav>
  );
}

export default Navbar;