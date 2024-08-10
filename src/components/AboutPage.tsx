import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      {/* Main Content */}
      <main className="about-main">
        <section className="about-content">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to delivering high-quality products that enhance
            your life and provide exceptional value. Our mission is to innovate
            and create solutions that meet the evolving needs of our customers.
          </p>
          <p>
            With a commitment to excellence and a passion for technology, we
            strive to lead the industry with innovative products and outstanding
            customer service. Our team is driven by the goal of making a
            positive impact in the lives of our users.
          </p>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Lead Designer</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
