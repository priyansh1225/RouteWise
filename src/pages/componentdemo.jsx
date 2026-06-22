import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { Button, Input, Modal, Toast, Loader } from "../component/ui";

function ComponentDemo({ toggleTheme }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="page">
        <h1>Component Library Demo</h1>

        <div className="about-card">
          <h2>Button Component</h2>
          <Button text="Demo Button" />
        </div>

        <div className="about-card">
          <h2>Input Component</h2>
          <Input placeholder="Enter Route Name" />
        </div>

        <div className="about-card">
          <h2>Toast Component</h2>
          <Toast message="Route updated successfully!" />
        </div>

        <div className="about-card">
          <h2>Loader Component</h2>
          <Loader />
        </div>

        <div className="about-card">
          <h2>Modal Component</h2>
          <Modal
            title="RouteWise Modal"
            content="This is a reusable modal component."
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ComponentDemo;