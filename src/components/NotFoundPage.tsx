import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <header className="not-found-header">
        <h1>404</h1>
        <p>Page Not Found</p>
      </header>

      <main className="not-found-main">
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="home-link">
          Go Back to Home
        </a>
      </main>

      <footer className="not-found-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
