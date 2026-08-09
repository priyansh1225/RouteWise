import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./component/ProtectedRoute";

import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import AIChat from "./pages/AIchat";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home toggleTheme={toggleTheme} />}
          />

          <Route
            path="/about"
            element={<About toggleTheme={toggleTheme} />}
          />

          <Route
            path="/dashboard"
            element={ <Dashboard toggleTheme={toggleTheme} />
          
            }
          />

          <Route
            path="/login"
            element={<Login toggleTheme={toggleTheme} />}
          />

          <Route
            path="/register"
            element={<Register toggleTheme={toggleTheme} />}
          />

          <Route
            path="/ai"
            element={<AIChat toggleTheme={toggleTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;