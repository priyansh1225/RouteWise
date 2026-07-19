import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/routewise-logo.png";

function Navbar({ toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();

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

  const isDark =
    !document.body.classList.contains("light-theme");

  return (
    <>
      <nav className="navbar">

        <div className="logo-container">
          <img
            src={logo}
            alt="RouteWise Logo"
            className="navbar-logo"
          />

          <div>
            <h2>RouteWise</h2>

            <p className="page-indicator">
              You are on •{" "}
              <span>
                {location.pathname === "/"
                  ? "Home"
                  : location.pathname === "/about"
                  ? "About"
                  : location.pathname === "/dashboard"
                  ? "Dashboard"
                  : location.pathname === "/ai"
                  ? "AI Assistant"
                  : location.pathname === "/login"
                  ? "Login"
                  : location.pathname === "/register"
                  ? "Register"
                  : "RouteWise"}
              </span>
            </p>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <Link
              className={
                location.pathname === "/"
                  ? "active-nav"
                  : ""
              }
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={
                location.pathname === "/about"
                  ? "active-nav"
                  : ""
              }
              to="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className={
                location.pathname === "/dashboard"
                  ? "active-nav"
                  : ""
              }
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              className={
                location.pathname === "/ai"
                  ? "active-nav"
                  : ""
              }
              to="/ai"
            >
              AI Assistant
            </Link>
          </li>

          {!token ? (
            <>
              <li>
                <Link
                  className={
                    location.pathname === "/login"
                      ? "active-nav"
                      : ""
                  }
                  to="/login"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  className={
                    location.pathname === "/register"
                      ? "active-nav"
                      : ""
                  }
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
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
          {isDark ? "☀️" : "🌙"}
        </button>

      </nav>
    </>
  );
}

export default Navbar;