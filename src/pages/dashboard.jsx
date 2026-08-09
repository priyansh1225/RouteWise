import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../component/navbar";
import Footer from "../component/footer";
import api from "../services/api";

function Dashboard({ toggleTheme }) {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

const goToSearchRoute = () => {
  navigate("/");

  setTimeout(() => {
    document
      .getElementById("search-route")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

  useEffect(() => {
    loadUpdates();
  }, []);

  const loadUpdates = async () => {
    try {
      const res = await api.get("/api/updates");
      setUpdates(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="page dashboard-page">

        <h1 className="page-title">
          Welcome to RouteWise 🚌
        </h1>

        <p className="dashboard-subtitle">
          Plan your journey, check transport routes and stay updated
          with your local community.
        </p>

        {/* Quick Actions */}

        <div className="dashboard-actions">

         <button
  onClick={goToSearchRoute}
  className="dashboard-action-card dashboard-route-button"
>
  <span className="dashboard-icon">🗺️</span>
  <h2>Plan Your Route</h2>
  <p>
    Find buses and vikrams between your starting point
    and destination.
  </p>
</button>

          <Link to="/about" className="dashboard-action-card">
            <span className="dashboard-icon">ℹ️</span>
            <h2>About RouteWise</h2>
            <p>
              Learn more about RouteWise and its purpose.
            </p>
          </Link>

          <Link to="/ai" className="dashboard-action-card">
            <span className="dashboard-icon">🤖</span>
            <h2>AI Assistant</h2>
            <p>
              Ask the RouteWise assistant about travel and transport.
            </p>
          </Link>

        </div>

        {/* Dashboard Statistics */}

        <div className="stats-grid">

          <div className="stats-card">
            <h2>{updates.length}</h2>
            <p>Community Updates</p>
          </div>

          <div className="stats-card">
            <h2>🚌</h2>
            <p>Public Transport</p>
          </div>

          <div className="stats-card">
            <h2>📍</h2>
            <p>Route Planning</p>
          </div>

          <div className="stats-card">
            <h2>🔐</h2>
            <p>Secure Account</p>
          </div>

        </div>

        {/* Community Updates */}

        <div className="about-card dashboard-updates">

          <div className="dashboard-section-header">
            <div>
              <h2>Latest Community Updates</h2>
              <p>
                Stay informed about recent transport updates.
              </p>
            </div>
          </div>

          {loading ? (
            <p>Loading updates...</p>
          ) : updates.length === 0 ? (
            <p>No community updates available.</p>
          ) : (
            <div className="dashboard-update-list">

              {updates.slice(0, 5).map((update) => (
                <div
                  key={update._id}
                  className="update-card"
                >
                  <span className="update-icon">📢</span>

                  <div>
                    <p>{update.message}</p>

                    {update.createdAt && (
                      <small>
                        {new Date(
                          update.createdAt
                        ).toLocaleDateString()}
                      </small>
                    )}
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* Bottom Navigation */}

        <div className="dashboard-bottom-actions">

          <Link to="/" className="custom-btn">
            🏠 Home
          </Link>

          <Link to="/about" className="custom-btn">
            ℹ️ About
          </Link>

          <Link to="/ai" className="custom-btn">
            🤖 AI Assistant
          </Link>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;