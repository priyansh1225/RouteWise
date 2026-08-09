import { useState } from "react";

function SearchRoute() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRoute = async () => {
    if (!from.trim()) {
      alert("Please enter a starting location.");
      return;
    }

    setLoading(true);

    try {
    const response = await fetch(
  `https://routewise-backend-fylq.onrender.com/search?from=${encodeURIComponent(
    from.trim()
  )}&to=${encodeURIComponent(to.trim())}`
);

      if (!response.ok) {
        throw new Error("Failed to search routes");
      }

      const data = await response.json();

      setResults(data);

      if (data.length === 0) {
        alert("No routes found.");
      }
    } catch (error) {
      console.error("Route search error:", error);
      alert("Unable to search routes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="search-route" className="search-route-section">
      <h2>Search Route</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Starting Location"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Destination"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <button onClick={searchRoute} disabled={loading}>
          {loading ? "Searching..." : "Find Route"}
        </button>
      </div>

      {results.length > 0 && (
        <div className="card-section">
          {results.map((route) => (
            <div className="card" key={route._id}>
              <h3>
                {route.from} → {route.to}
              </h3>

              <p>
                <strong>Vehicle:</strong> {route.vehicle}
              </p>

              <p>
                <strong>Fare:</strong> ₹{route.fare}
              </p>

              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      route.to
                    )}`,
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