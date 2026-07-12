import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import api from "../services/api";

import Navbar from "../component/navbar";
import Footer from "../component/footer";

function Login({ toggleTheme }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      alert("Google Login Successful!");
      navigate("/dashboard");
    }
  }, [searchParams, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="login-page">
        <h1>Login</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <button
            type="button"
            onClick={() => {
              window.location.href =
                "http://localhost:5000/auth/google";
            }}
          >
            Sign in with Google
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;