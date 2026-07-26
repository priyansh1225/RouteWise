import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../component/navbar";
import Footer from "../component/footer";
import api from "../services/api";

function Dashboard({ toggleTheme }) {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const loggedIn = !!localStorage.getItem("token");

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="page">

       <h1 className="page-title">
  RouteWise Dashboard
</h1>
        <p className="page-subtitle">
          Welcome to your RouteWise dashboard.
        </p>

        <div className="stats-grid">

          <div className="stats-card">
            <h2>{updates.length}</h2>
            <p>Total Community Updates</p>
          </div>

          <div className="stats-card">
            <h2>{loggedIn ? "Yes" : "No"}</h2>
            <p>Authenticated User</p>
          </div>

          <div className="stats-card">
            <h2>Online</h2>
            <p>Backend Status</p>
          </div>

          <div className="stats-card">
            <h2>Ready</h2>
            <p>AI Assistant</p>
          </div>

        </div>

        <div className="about-card">

          <h2>Latest Community Updates</h2>

          {loading ? (
            <p>Loading updates...</p>
          ) : updates.length === 0 ? (
            <p>No updates available.</p>
          ) : (
            updates.slice(0, 5).map((update) => (
              <div
                key={update._id}
                className="update-card"
              >
                {update.message}
              </div>
            ))
          )}

        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >

          <Link to="/" className="custom-btn">
            🏠 Home
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