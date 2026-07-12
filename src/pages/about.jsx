import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../component/navbar";
import Footer from "../component/footer";

function About({ toggleTheme }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
  navigate("/login");
}
  }, []);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="page">
        <h1>About RouteWise</h1>

        <div className="about-card">
          <p>
            RouteWise is a smart public transport navigation platform designed
            to help commuters find efficient routes, estimate fares and stay
            updated with local transport changes.
          </p>
        </div>

        <h2>Key Features</h2>

        <div className="feature-grid">
          <div className="feature-box">
            <h3>Smart Route Planning</h3>
            <p>Find the most efficient public transport routes.</p>
          </div>

          <div className="feature-box">
            <h3>Fare Estimation</h3>
            <p>Estimate travel costs before starting your journey.</p>
          </div>

          <div className="feature-box">
            <h3>Community Updates</h3>
            <p>Get alerts and route updates from local users.</p>
          </div>

          <div className="feature-box">
            <h3>Transport Alerts</h3>
            <p>Stay informed about diversions and disruptions.</p>
          </div>
        </div>

        <h2>Future Enhancements</h2>

        <div className="about-card">
          <ul>
            <li>AI-powered route recommendations</li>
            <li>Real-time transport tracking</li>
            <li>Crowdsourced traffic alerts</li>
            <li>Personalized travel dashboard</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;