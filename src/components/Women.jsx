import React from "react";
import "./Women.css";

// Import your actual images here
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";
import women5 from "../assets/women5.jpg";

const editorialImages = [
  {
    id: 1,
    src: women1,
    alt: "Oversized jacket with tailored trousers",
    category: "Contemporary Outerwear",
    description: "Structured silhouette meets relaxed tailoring",
  },
  {
    id: 2,
    src: women2,
    alt: "Denim on denim ensemble",
    category: "Denim Collection",
    description: "Modern reinterpretation of classic denim",
  },
  {
    id: 3,
    src: women3,
    alt: "Neutral-toned athleisure set",
    category: "Everyday Luxury",
    description: "Elevated comfort in muted tones",
  },
  {
    id: 4,
    src: women4,
    alt: "Relaxed trousers with structured top",
    category: "Modern Tailoring",
    description: "Fluid lines with architectural precision",
  },
  {
    id: 5,
    src: women5,
    alt: "Minimalist knitwear",
    category: "Essential Knits",
    description: "Textured fabrics in monochromatic palette",
  },
  {
    id: 6,
    src: women2,
    alt: "Minimalist knitwear",
    category: "Essential Knits",
    description: "Textured fabrics in monochromatic palette",
  },
];

const dramaticImage = {
  src: women2,
  alt: "Dramatic red-lit fashion editorial",
  title: "Red Series",
  subtitle: "An exploration of form and shadow",
  description:
    "Cinematic lighting meets avant-garde design in our latest editorial collection",
};

const Womenpage = () => {
  return (
    <div className="editorial-fashion-collage">
      {/* Main Editorial Collage */}
      <main className="collage-container">
        {/* Left Grid - Editorial Photography */}
        <div className="editorial-grid">
          <div className="grid-header">
            <h1 className="grid-title">
              <span className="title-line">Autumn</span>
              <span className="title-line accent">Collection 2026</span>
            </h1>
            <p className="grid-subtitle">
              Contemporary silhouettes in neutral palettes. Modern tailoring
              meets relaxed sophistication.
            </p>
          </div>

          <div className="photo-grid">
            {editorialImages.map((image) => (
              <div key={image.id} className="grid-item">
                <div className="image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="editorial-image"
                  />
                  <div className="image-overlay">
                    <div className="image-info">
                      <span className="image-category">{image.category}</span>
                      <p className="image-desc">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid-footer">
            <div className="collection-info">
              <span className="collection-label">Now Viewing</span>
              <h3 className="collection-name">Studio Collection</h3>
              <p className="collection-details">
                Shot in natural studio light | Neutral palette | Premium fabrics
              </p>
            </div>
            <button className="explore-btn">
              Explore Collection
              <span className="arrow">↗</span>
            </button>
          </div>
        </div>

        {/* Right Side - Dramatic Editorial */}
        <div className="dramatic-editorial">
          <div className="dramatic-content">
            <div className="editorial-badge">
              <span className="badge-text">Exclusive Editorial</span>
            </div>

            <div className="dramatic-image-wrapper">
              <img
                src={dramaticImage.src}
                alt={dramaticImage.alt}
                className="dramatic-image"
              />
              <div className="dramatic-overlay">
                <div className="editorial-meta">
                  <span className="issue-number">Issue 07</span>
                  <span className="photographer">Photography by Alex Chen</span>
                </div>
              </div>
            </div>

            <div className="editorial-content">
              <div className="editorial-header">
                <h2 className="editorial-title">{dramaticImage.title}</h2>
                <h3 className="editorial-subtitle">{dramaticImage.subtitle}</h3>
              </div>

              <p className="editorial-description">
                {dramaticImage.description}
              </p>

              <div className="editorial-features">
                <div className="feature">
                  <div className="feature-icon">⏤</div>
                  <div className="feature-content">
                    <h4>Cinematic Lighting</h4>
                    <p>Deep red tones, dramatic shadows</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">⏤</div>
                  <div className="feature-content">
                    <h4>Avant-Garde Styling</h4>
                    <p>Pushing boundaries of form</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">⏤</div>
                  <div className="feature-content">
                    <h4>Limited Series</h4>
                    <p>Exclusive editorial release</p>
                  </div>
                </div>
              </div>

              <div className="editorial-actions">
                <button className="action-btn primary">
                  View Full Editorial
                  <span className="action-arrow">→</span>
                </button>
                <button className="action-btn secondary">
                  Behind the Scenes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Womenpage;
