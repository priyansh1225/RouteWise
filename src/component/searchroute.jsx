function SearchRoute() {
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
        />

        <input
          type="text"
          placeholder="Enter Destination"
        />

        <button>Find Route</button>
      </div>
    </section>
  );
}

export default SearchRoute;