import React from "react";
import "./Fashionsection.css";

import hoodies from "../assets/hoodies.jpg";
import fullsleves from "../assets/fullsleves.jpg";
import shirt from "../assets/shirt.jpg";

const FashionSection = () => {
  return (
    <section className="fashion-wrapper">
      <div className="fashion-container">
        {/* Left Section */}
        <div className="fashion-card left">
          <img src={shirt} alt="Left Fashion" />
          <div className="product-info">
            <p>White Shirt</p>
            <p>Grey Trousers</p>
          </div>
        </div>

        {/* Center Section */}
        <div className="center-content">
          <h1 className="main-heading">
            DIVE INTO A <span className="highlight">WORLD</span> OF ENDLESS{" "}
            <br />
            FASHION POSSIBILITIES
          </h1>

          <img
            src={fullsleves}
            alt="Center Showcase"
            className="center-image"
          />

          <p className="subtext">
            Discover the latest trends in men's fashion. Explore our curated
            collection to find your unique style.
          </p>
          <div className="cta-buttons">
            <button className="btn primary">SHOP NOW</button>
            <button className="btn secondary">EXPLORE MORE PRODUCTS</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="fashion-card right">
          <img src={hoodies} alt="Right Fashion" />
          <div className="product-info">
            <p className="price">€400</p>
            <p>Casual Formal Set</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionSection;
