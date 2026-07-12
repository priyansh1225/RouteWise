import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../component/navbar";
import Footer from "../component/footer";
import api from "../services/api";

function Register({ toggleTheme }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="login-page">
        <h1>Register</h1>

        <form
          className="login-form"
          onSubmit={handleRegister}
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <button type="submit">
            Register
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Register;