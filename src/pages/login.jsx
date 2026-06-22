import Navbar from "../component/navbar";
import Footer from "../component/footer";

function Login({ toggleTheme }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="login-page">
        <h1>Login</h1>

        <form className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;