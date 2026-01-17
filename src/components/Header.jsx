import "./Header.css";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("men");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 🔴 Demo counts (static for now)
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);

  useEffect(() => {
    if (location.pathname === "/women") {
      setActive("women");
    } else {
      setActive("men");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (type) => {
    setActive(type);
    navigate(type === "women" ? "/women" : "/men");
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <nav className="header-center">
              <div className="gender-toggle">
                <button
                  className={active === "men" ? "active" : ""}
                  onClick={() => handleToggle("men")}
                >
                  MEN
                </button>

                <button
                  className={active === "women" ? "active" : ""}
                  onClick={() => handleToggle("women")}
                >
                  WOMEN
                </button>
              </div>
            </nav>

            {/* Icons */}
            <div className="header-right">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="search-input"
                />
              </div>

              {/* ❤️ Wishlist */}
              <Link to="/wishlist" className="icon-wrapper">
                <FaHeart className="icon" />
                {wishlistCount > 0 && (
                  <span className="icon-badge">{wishlistCount}</span>
                )}
              </Link>

              {/* 🛒 Cart */}
              <Link to="/add-to-cart" className="icon-wrapper" id="cartIcon">
                <FaShoppingCart className="icon" />
                {cartCount > 0 && (
                  <span className="icon-badge">{cartCount}</span>
                )}
              </Link>

              <Link to="/login">
                <FaUser className="icon" />
              </Link>
            </div>
          </>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div className="mobile-menu-toggle">
            <button className="hamburger-btn" onClick={handleMobileMenuToggle}>
              {isMobileMenuOpen ? (
                <FaTimes className="hamburger-icon" />
              ) : (
                <FaBars className="hamburger-icon" />
              )}
            </button>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-search-box">
              <FaSearch className="mobile-search-icon" />
              <input
                type="text"
                placeholder="Search for products..."
                className="mobile-search-input"
              />
            </div>

            <div className="mobile-gender-toggle">
              <button
                className={active === "men" ? "active" : ""}
                onClick={() => handleToggle("men")}
              >
                MEN
              </button>
              <button
                className={active === "women" ? "active" : ""}
                onClick={() => handleToggle("women")}
              >
                WOMEN
              </button>
            </div>

            <div className="mobile-categories">
              <h3 className="mobile-section-title">Shop Categories</h3>

              <Link
                to="/men"
                className="mobile-category-item"
                onClick={handleLinkClick}
              >
                Men Clothing
              </Link>
              <Link
                to="/women"
                className="mobile-category-item"
                onClick={handleLinkClick}
              >
                Women Clothing
              </Link>
              <Link
                to="/tshirts"
                className="mobile-category-item"
                onClick={handleLinkClick}
              >
                T-Shirts
              </Link>
              <Link
                to="/hoodies"
                className="mobile-category-item"
                onClick={handleLinkClick}
              >
                Hoodies & Sweatshirts
              </Link>
              <Link
                to="/joggers"
                className="mobile-category-item"
                onClick={handleLinkClick}
              >
                Joggers
              </Link>
            </div>

            {/* Mobile Icons with badges */}
            <nav className="mobile-nav">
              <Link
                to="/wishlist"
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <FaHeart className="mobile-nav-icon" />
                Wishlist
                {wishlistCount > 0 && (
                  <span className="mobile-badge">{wishlistCount}</span>
                )}
              </Link>

              <Link
                to="/add-to-cart"
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <FaShoppingCart className="mobile-nav-icon" />
                Cart
                {cartCount > 0 && (
                  <span className="mobile-badge">{cartCount}</span>
                )}
              </Link>

              <Link
                to="/login"
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <FaUser className="mobile-nav-icon" />
                Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
