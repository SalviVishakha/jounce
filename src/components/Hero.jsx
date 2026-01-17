import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Show hero section AFTER JOUNCE animation completes
    setTimeout(() => {
      setShowHero(true);
    }, 2000); // Match CSS animation time
  }, []);

  return (
    <div className="hero-wrapper">
      {/* JOUNCE Animation */}
      {!showHero && <div className="jounce-animate">JOUNCE</div>}

      {/* HERO SECTION */}
      {/* {showHero && (
        <section className="hero-section">
          <h1 className="title">
            Premium Cotton <br />
            <span>For Next Generation</span>
          </h1>

          <p className="subtitle">
            Experience unmatched comfort with our premium fashion collection.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Explore Collection</button>
            <button className="btn secondary">Shop Now</button>
          </div>

          <div className="hero-features">
            <div>
              <h3>100%</h3>
              <p>Premium Cotton</p>
            </div>
            <div>
              <h3>Timeless</h3>
              <p>Design</p>
            </div>
            <div>
              <h3>Premium</h3>
              <p>Quality</p>
            </div>
          </div>
        </section>
      )} */}
    </div>
  );
};

export default Hero;
