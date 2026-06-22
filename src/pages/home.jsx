import Navbar from "../component/navbar";
import Hero from "../component/hero";
import SearchRoute from "../component/searchroute";
import Card from "../component/card";
import CommunityUpdates from "../component/communityupdates";
import Footer from "../component/footer";

function Home({ toggleTheme }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <Hero />

      <SearchRoute />

      <section className="card-section">
        <Card
          title="Smart Route Planning"
          description="Find the best public transport route."
        />

        <Card
          title="Fare Estimation"
          description="Estimate travel costs before travelling."
        />

        <Card
          title="Live Updates"
          description="Receive transport updates from users."
        />
      </section>

      <CommunityUpdates />

      <Footer />
    </>
  );
}

export default Home;