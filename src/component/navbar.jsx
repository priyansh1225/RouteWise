import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/routewise-logo.png";

function Navbar({ toggleTheme }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (!confirmLogout) return;

  localStorage.removeItem("token");
  alert("Logged out successfully!");
  navigate("/login");
};
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

        {!token ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Logout
            </button>
          </li>
        )}
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