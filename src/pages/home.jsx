import Navbar from "../component/navbar";
import Hero from "../component/hero";
import Card from "../component/card";
import Footer from "../component/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Card
        title="Smart Route Planning"
        description="Find the best public transport route."
      />

      <Card
        title="Fare Estimation"
        description="Compare travel costs before travelling."
      />

      <Card
        title="Community Updates"
        description="Get verified route diversion and closure updates."
      />

      <Footer />
    </div>
    
  );
}

export default Home;