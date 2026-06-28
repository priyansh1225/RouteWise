import { useState } from "react";

function SearchRoute() {
  const [from, setFrom] = useState("");
  const [results, setResults] = useState([]);

  const searchRoute = async () => {
    if (!from) {
      alert("Please enter a starting location.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/search?from=${from}`
      );

      const data = await response.json();

      setResults(data);
    } catch (error) {
      console.log(error);
      alert("Backend not running!");
    }
  };

  return (
    <section
      id="search-route"
      className="search-section"
    >
      <h2>Search Route</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Starting Location"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Destination (Optional)"
        />

        <button onClick={searchRoute}>
          Find Route
        </button>
      </div>

      <br />

      {results.length > 0 && (
        <div className="card-section">
          {results.map((route) => (
            <div className="card" key={route.id}>
              <h3>
                {route.from} → {route.to}
              </h3>

              <p>Vehicle: {route.vehicle}</p>

              <p>Fare: ₹{route.fare}</p>

              <br />

              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${route.to}`,
                    "_blank"
                  )
                }
              >
                📍 View on Google Maps
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchRoute;