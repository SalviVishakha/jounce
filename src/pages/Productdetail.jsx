import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import confetti from "canvas-confetti";
gsap.registerPlugin(MotionPathPlugin);
import {
  FaStar,
  FaRegStar,
  FaHeart,
  FaRegHeart,
  FaArrowUp,
  FaArrowDown,
  FaTruck,
  FaShieldAlt,
  FaExchangeAlt,
} from "react-icons/fa";
import "./ProductDetail.css";
import left from "../assets/left-image.jpg";
import right from "../assets/right-image.jpg";
import top from "../assets/top-image.jpg";
import bottom from "../assets/bottom-image.jpg";
import SizeGuide from "../components/Sizeguide";
import RecentlyView from "../components/RecentlyView";

const ProductDetailPremium = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [selectedColor, setSelectedColor] = useState("Camel");
  const imgRef = useRef(null);
  const colors = [
    { name: "Black", code: "#000000" },
    { name: "Beige", code: "#e6d5c3" },
    { name: "Olive", code: "#556b2f" },
    { name: "Camel", code: "#c19a6b" },
  ];

  const product = {
    id: 1,
    title: "Modern Wool-Blend Coat",
    description:
      "A contemporary take on classic outerwear, this wool-blend coat features a tailored silhouette with minimalist details. Perfect for transitional seasons and sophisticated layering.",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviewCount: 342,
    sizes: ["XS", "S", "M", "L", "XL"],
    details: {
      material: "70% Wool, 30% Polyester",
      fit: "Oversized Fit",
      care: "Dry Clean Only",
      origin: "Made in Portugal",
      style: "Single-Breasted",
      lining: "Silk-Blend Lining",
    },
    images: [left, right, top, bottom, left, right],
  };

  const thumbnails = product.images.map((img, index) => ({
    id: index,
    image: img,
    alt: `View ${index + 1}`,
  }));

  const scrollThumbnails = (direction) => {
    if (direction === "up") {
      setSelectedImage((prev) => Math.max(0, prev - 1));
      setScrollPosition((prev) => Math.max(0, prev - 1));
    } else {
      setSelectedImage((prev) => Math.min(thumbnails.length - 1, prev + 1));
      setScrollPosition((prev) => Math.min(thumbnails.length - 4, prev + 1));
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="star-icon filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon" />);
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    // In real app, this would dispatch to Redux/Context or make API call
    console.log(
      `Added ${quantity} x ${product.title} (${selectedSize}) to cart`,
    );
    alert(`${product.title} added to cart!`);
  };

  //reviews
  const [reviews, setReviews] = useState([
    { name: "Aarav", rating: 5, comment: "Amazing quality" },
    { name: "Riya", rating: 4, comment: "Good Product, premium feel." },
    { name: "Kunal", rating: 3, comment: "Decent but expected better" },
  ]);

  const [selectedRating, setSelectedRating] = useState(0);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");

  const animateFlyToCart = () => {
    const cartIcon = document.querySelector("#cartIcon");
    const productImg = imgRef.current;

    if (!cartIcon || !productImg) return;

    const imgRect = productImg.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    // Include scroll offsets
    const startX = imgRect.left + window.scrollX;
    const startY = imgRect.top + window.scrollY;
    const endX = cartRect.left + window.scrollX;
    const endY = cartRect.top + window.scrollY;

    const flyImg = productImg.cloneNode(true);
    flyImg.classList.add("fly-clone");
    flyImg.style.position = "absolute";
    flyImg.style.left = startX + "px";
    flyImg.style.top = startY + "px";
    flyImg.style.width = "120px";
    flyImg.style.height = "120px";
    flyImg.style.zIndex = 9999;
    flyImg.style.pointerEvents = "none";

    document.body.appendChild(flyImg);

    // Animate to cart icon
    gsap.to(flyImg, {
      duration: 0.9,
      ease: "power2.inOut",
      left: endX + "px",
      top: endY + "px",
      scale: 0.2,
      opacity: 0.4,
      onComplete: () => flyImg.remove(),
    });
  };

  const [added, setAdded] = useState(false);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="product-detail-premium">
      {/* Breadcrumb */}
      <nav className="premium-breadcrumb">
        <a href="/" className="crumb">
          Home
        </a>
        <span className="separator">/</span>
        <a href="/women" className="crumb">
          Women
        </a>
        <span className="separator">/</span>
        <a href="/women/coats" className="crumb">
          Coats & Jackets
        </a>
        <span className="separator">/</span>
        <span className="crumb current">{product.title}</span>
      </nav>

      {/* Main Product Container */}
      <div className="product-content">
        {/* Left Column - Image Gallery */}
        <div className="image-gallery-section">
          {/* Vertical Thumbnail Gallery */}
          <div className="thumbnail-gallery-vertical">
            <button
              className="scroll-btn up"
              onClick={() => scrollThumbnails("up")}
              disabled={scrollPosition === 0}
              aria-label="Scroll thumbnails up"
            >
              <FaArrowUp />
            </button>

            <div className="thumbnails-container">
              <div
                className="thumbnails-track"
                style={{ transform: `translateY(-${scrollPosition * 100}px)` }}
              >
                {thumbnails.map((thumb, index) => (
                  <button
                    key={thumb.id}
                    className={`thumbnail-vertical ${
                      selectedImage === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={thumb.image} alt={thumb.alt} />
                    {selectedImage === index && (
                      <div className="selected-indicator"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="scroll-btn down"
              onClick={() => scrollThumbnails("down")}
              disabled={scrollPosition >= thumbnails.length - 4}
              aria-label="Scroll thumbnails down"
            >
              <FaArrowDown />
            </button>
          </div>

          {/* Main Product Image */}
          <div className="main-image-wrapper">
            <div className="main-image-container">
              <img
                ref={imgRef}
                src={product.images[selectedImage]}
                alt={product.title}
                className="main-product-image fly-image"
              />

              {/* Image Badge */}
              <div className="image-badge">
                <span className="badge-text">Editor's Pick</span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="image-counter">
              <span className="current-image">{selectedImage + 1}</span>
              <span className="separator">/</span>
              <span className="total-images">{thumbnails.length}</span>
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="product-details-section">
          {/* Product Header */}
          <div className="product-header">
            <h1 className="product-title-premium">{product.title}</h1>
            <div className="product-meta">
              <div className="rating-container">
                <div className="stars-container">{renderStars()}</div>
                <span className="rating-text">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="pricing-section">
            <div className="price-container">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <div className="discount-badge">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            )}
          </div>

          {/* Size Selection */}
          <div className="size-section">
            <div className="section-header">
              <h3 className="section-title">Size</h3>
              {/* <button className="size-guide-link">Size Guide</button> */}

              <SizeGuide triggerLabel="Size Chart" />
            </div>
            <div className="size-selector-grid">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-pill ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="fit-note">
              <span className="fit-icon">ⓘ</span>
              This style runs {product.details.fit.toLowerCase()}
            </div>
          </div>

          {/* color selection  */}
          <div className="color-selection">
            <div className="section-header">
              <h3 className="section-title">Color</h3>
              <span className="selected-color-name">{selectedColor}</span>
            </div>

            <div className="color-options">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`color-swatch ${
                    selectedColor === color.name ? "active" : ""
                  }`}
                  style={{ backgroundColor: color.code }}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Select color ${color.name}`}
                >
                  {selectedColor === color.name && (
                    <span className="color-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="quantity-section">
            <h3 className="section-title">Quantity</h3>
            <div className="quantity-selector-premium">
              <button
                className="quantity-btn"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="quantity-display">{quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => setQuantity((prev) => prev + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <button
              ref={btnRef}
              className={`add-to-cart-btn-premium ${added ? "added" : ""}`}
              onClick={() => {
                if (!added) {
                  handleAddToCart();
                  animateFlyToCart();
                  setAdded(true);

                  const rect = btnRef.current.getBoundingClientRect();
                  confetti({
                    particleCount: 60,
                    spread: 70,
                    startVelocity: 15,
                    origin: {
                      x: (rect.left + rect.width / 2) / window.innerWidth,
                      y: (rect.top + rect.height / 2) / window.innerHeight,
                    },
                  });
                } else {
                  navigate("/add-to-cart");
                }
              }}
            >
              {added ? "Go to Bag →" : "Add to Cart"}
            </button>

            <button
              className={`wishlist-btn-premium ${isWishlisted ? "active" : ""}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              {isWishlisted ? <FaHeart /> : <FaRegHeart />}
              <span>{isWishlisted ? "Saved" : "Wishlist"}</span>
            </button>
          </div>

          {/* pincode check  */}
          <div className="pincode-section">
            <h3 className="section-title">Check Delivery</h3>

            <div className="pincode-box">
              <input type="text" placeholder="Enter Pincode" />
              <button>Check</button>
            </div>

            <p className="delivery-message success">
              Delivery by <strong>15 Jan , Thursday </strong>
            </p>
          </div>

          {/* Shipping Info */}
          <div className="shipping-info">
            <div className="info-item">
              <FaTruck className="info-icon" />
              <div>
                <strong>Free Shipping</strong>
                <p>Order ships in 1-2 business days</p>
              </div>
            </div>
            <div className="info-item">
              <FaShieldAlt className="info-icon" />
              <div>
                <strong>Quality Guarantee</strong>
                <p>2-year warranty on craftsmanship</p>
              </div>
            </div>
            <div className="info-item">
              <FaExchangeAlt className="info-icon" />
              <div>
                <strong>Easy Returns</strong>
                <p>30-day return policy</p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="description-section">
            <h3 className="section-title">Description</h3>
            <p className="product-description-text">{product.description}</p>
          </div>

          {/* Product Details */}
          <div className="details-section">
            <h3 className="section-title">Product Details</h3>
            <div className="details-grid">
              {Object.entries(product.details).map(([key, value]) => (
                <div key={key} className="detail-item">
                  <span className="detail-label">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <span className="detail-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="review-box">
            <h2 className="review-title">Customer Reviews</h2>

            {/* Rating Filter */}
            <div className="filter-row">
              <span>Filter by Rating:</span>
              {[0, 5, 4, 3, 2, 1].map((r) => (
                <button
                  key={r}
                  className={`filter-btn ${
                    selectedRating === r ? "active" : ""
                  }`}
                  onClick={() => setSelectedRating(r)}
                >
                  {r === 0 ? "All" : `${r} ⭐`}
                </button>
              ))}
            </div>

            {/* Reviews List */}
            <div className="review-list">
              {(selectedRating === 0
                ? reviews
                : reviews.filter((r) => r.rating === selectedRating)
              ).map((r, index) => (
                <div className="review-card" key={index}>
                  <div className="review-header">
                    <h4>{r.name}</h4>
                    <div className="stars">
                      {[...Array(r.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="review-text">{r.comment}</p>
                </div>
              ))}
            </div>

            {/* Add Review */}
            <div className="add-review">
              <h4>Write a Review</h4>

              <div className="rating-select">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`rate-star ${newRating >= star ? "active" : ""}`}
                    onClick={() => setNewRating(star)}
                  >
                    ⭐
                  </span>
                ))}
              </div>

              <textarea
                placeholder="Share your experience..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />

              <button
                className="submit-btn"
                onClick={() => {
                  if (!newRating || !newComment) return;
                  setReviews([
                    {
                      name: "Guest User",
                      rating: newRating,
                      comment: newComment,
                    },
                    ...reviews,
                  ]);
                  setNewRating(0);
                  setNewComment("");
                }}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
      <RecentlyView />
    </div>
  );
};

export default ProductDetailPremium;
