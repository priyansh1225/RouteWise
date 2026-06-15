import Navbar from "../component/navbar";
import Footer from "../component/footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Dashboard</h1>

        <p>
          View transport updates, route suggestions and community reports.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;