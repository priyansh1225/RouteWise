import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Card from "../component/card";

function Dashboard({ toggleTheme }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="page">
        <h1>Dashboard</h1>

        <div className="card-section">
          <Card
            title="Recent Searches"
            description="View recently searched routes."
          />

          <Card
            title="Community Alerts"
            description="Latest transport updates from users."
          />

          <Card
            title="Popular Routes"
            description="Frequently travelled routes."
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;