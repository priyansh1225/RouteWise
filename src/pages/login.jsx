import Navbar from "../component/navbar";
import Footer from "../component/footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Login</h1>

        <p>Login to submit community transport updates.</p>

        <button className="login-btn">Login</button>
      </div>

      <Footer />
    </>
  );
}

export default Login;