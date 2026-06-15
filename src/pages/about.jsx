import Navbar from "../component/navbar";
import Footer from "../component/footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>About RouteWise</h1>

        <p>
          RouteWise helps commuters discover efficient public transport routes,
          compare travel options and navigate cities easily.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;