import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page yu're looking fo doesn't exist or has been moved.</p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-btn primary">
            Go Home
          </Link>
          <Link to="/" className="notfound-btn outline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
