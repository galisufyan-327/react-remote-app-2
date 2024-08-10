import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Discover Amazing Products</h2>
        <p>
          Explore our wide range of products designed to make your life easier
          and more enjoyable. Browse through our collection and find what suits
          you best.
        </p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
