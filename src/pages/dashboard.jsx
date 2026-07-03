import { useEffect, useState } from "react";

import Navbar from "../component/navbar";
import Footer from "../component/footer";

function Dashboard({ toggleTheme }) {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/routes")
      .then((res) => res.json())
      .then((data) => {
        setRoutes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const busRoutes = routes.filter(
    (route) => route.vehicle === "Bus"
  ).length;

  const vikramRoutes = routes.filter(
    (route) => route.vehicle === "Vikram"
  ).length;

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="page">
        <h1>Route Management Dashboard</h1>

        <div className="stats-grid">
          <div className="stats-card">
            <h2>{routes.length}</h2>
            <p>Total Routes</p>
          </div>

          <div className="stats-card">
            <h2>{busRoutes}</h2>
            <p>Bus Routes</p>
          </div>

          <div className="stats-card">
            <h2>{vikramRoutes}</h2>
            <p>Vikram Routes</p>
          </div>
        </div>

        <h2 style={{ marginTop: "40px" }}>
          Available Routes
        </h2>

        {loading ? (
          <p>Loading routes...</p>
        ) : (
          <div className="card-section">
            {routes.map((route) => (
              <div className="card" key={route.id}>
                <h3>
                  {route.from} → {route.to}
                </h3>

                <p>
                  <strong>Vehicle:</strong>{" "}
                  {route.vehicle}
                </p>

                <p>
                  <strong>Fare:</strong> ₹
                  {route.fare}
                </p>

                <div className="route-buttons">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;