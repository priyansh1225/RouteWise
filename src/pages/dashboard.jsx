import { useEffect, useState } from "react";

import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Card from "../component/card";

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

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="page">
        <h1>Dashboard</h1>

        <h2>Available Routes</h2>

        {loading ? (
          <p>Loading routes...</p>
        ) : (
          <div className="card-section">
            {routes.map((route) => (
              <Card
                key={route.id}
                title={`${route.from} → ${route.to}`}
                description={`Vehicle: ${route.vehicle} | Fare: ₹${route.fare}`}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;