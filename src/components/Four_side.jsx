import React, { useState, useEffect, useRef } from "react";
import "./Four_side.css";

// Import your high-fashion images - replace with actual paths
import left from "../assets/left-image.jpg";
import right from "../assets/right-image.jpg";
import top from "../assets/top-image.jpg";
import bottom from "../assets/bottom-image.jpg";

const FashionHero = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isStable, setIsStable] = useState(false);
  const timerRef = useRef(null);

  // Animation sequence that stops after second state
  useEffect(() => {
    const timeouts = [];

    // First pair enter
    timeouts.push(
      setTimeout(() => {
        setAnimationPhase(1);
      }, 1000)
    );

    // First pair exit / second pair enter
    timeouts.push(
      setTimeout(() => {
        setAnimationPhase(2);
        setIsStable(true);
      }, 4000)
    ); // adjust time if needed

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Manual restart button
  const restartAnimation = () => {
    setIsStable(false);
    setIsAnimating(true);
    setAnimationPhase(0);

    // Start sequence again
    setTimeout(() => {
      setIsAnimating(true);
      setAnimationPhase(1);

      setTimeout(() => {
        setIsAnimating(false);
        setAnimationPhase(2);

        setTimeout(() => {
          setIsAnimating(true);
          setAnimationPhase(3);

          setTimeout(() => {
            setIsAnimating(false);
            setIsStable(true);
          }, 2000);
        }, 800);
      }, 2000);
    }, 800);
  };

  return (
    <div className="fashion-editorial-hero">
      {/* Main Split Layout */}
      <div className="editorial-split">
        {/* Left Panel */}
        <div className="editorial-panel left-panel">
          {/* First Model - Slide from Left */}
          <div
            className={`model-container first-model ${
              animationPhase === 1 ? "active" : ""
            } ${animationPhase === 2 ? "exiting" : ""}`}
          >
            <img
              src={left}
              alt="Elegant contemporary fashion model"
              className="fashion-model-image"
            />
            <div className="model-overlay left-overlay">
              <div className="overlay-content">
                <span className="collection-tag">Spring Collection</span>
              </div>
            </div>
          </div>

          {/* Second Model - Slide from Top */}
          <div
            className={`model-container second-model ${
              animationPhase === 2 ? "active" : ""
            }`}
          >
            <img
              src={top}
              alt="Premium fashion editorial model"
              className="fashion-model-image"
            />
            <div className="model-overlay left-overlay">
              <div className="overlay-content">
                <span className="collection-tag">Evening Edition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Divider with Branding */}
        <div className="center-brand-divider">
          {/* <div className="brand-logo">
            <span className="logo-symbol">É</span>
            <span className="logo-text">ditorial</span>
          </div> */}
          {/* <div className="divider-line"></div> */}
          {/* <div className="stability-indicator">
            {isStable && (
              <div className="stable-badge">
                <span className="stable-icon">✓</span>
                <span className="stable-text">Viewing</span>
              </div>
            )}
          </div> */}
        </div>

        {/* Right Panel */}
        <div className="editorial-panel right-panel">
          {/* First Model - Slide from Right */}
          <div
            className={`model-container first-model ${
              animationPhase >= 1 ? "active" : ""
            } ${animationPhase >= 2 ? "exiting" : ""}`}
          >
            <img
              src={right}
              alt="Modern fashion editorial"
              className="fashion-model-image"
            />
            <div className="model-overlay right-overlay">
              <div className="overlay-content">
                <span className="collection-tag">Premium Tailoring</span>
              </div>
            </div>
          </div>

          {/* Second Model - Slide from Bottom */}
          <div
            className={`model-container second-model ${
              animationPhase >= 2 ? "active" : ""
            }`}
          >
            <img
              src={bottom}
              alt="Luxury fashion model"
              className="fashion-model-image"
            />
            <div className="model-overlay right-overlay">
              <div className="overlay-content">
                <span className="collection-tag">Atelier Collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restart Animation Button (only shows when stable) */}
      {/* {isStable && (
        <button
          className="restart-animation-btn"
          onClick={restartAnimation}
          aria-label="Replay animation"
        >
          <svg className="restart-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3019 3 18.1885 4.77814 19.7545 7.42909M19.7545 7.42909V3M19.7545 7.42909H15.3254"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="restart-text">Replay Intro</span>
        </button>
      )} */}

      {/* Progress Indicator */}
      {/* <div className="animation-progress">
        <div className="progress-dots">
          <div
            className={`dot ${
              animationPhase === 0 || animationPhase === 1 ? "active" : ""
            }`}
          ></div>
          <div
            className={`dot ${
              animationPhase === 2 || animationPhase === 3 ? "active" : ""
            } ${isStable ? "stable-dot" : ""}`}
          ></div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${isStable ? "100%" : (animationPhase + 1) * 25 + "%"}`,
              transition: isAnimating ? "width 0.8s ease" : "none",
            }}
          ></div>
        </div>
        {isStable && (
          <div className="stable-message">
            <span className="stable-check">✓</span>
            Final State Reached
          </div>
        )}
      </div> */}

      {/* Subtle Interaction Hint (only shows when stable) */}
      {/* {isStable && (
        <div className="stable-hint">
          <svg className="hint-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hint-text">Scroll to explore</span>
        </div>
      )} */}

      {/* Ambient Lighting Effects */}
      <div className="ambient-light top-light"></div>
      <div className="ambient-light bottom-light"></div>
      <div className="ambient-light left-light"></div>
      <div className="ambient-light right-light"></div>

      {/* Stability Overlay Effect */}
      {isStable && (
        <div className="stability-overlay">
          <div className="overlay-grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="grid-cell"></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionHero;
