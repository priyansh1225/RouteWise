function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find the Smartest Public Transport Route</h1>

        <p>
          Navigate buses, vikrams, magic vehicles and local transport
          with ease.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("search-route")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Plan Your Route
        </button>
      </div>
    </section>
  );
}

export default Hero;