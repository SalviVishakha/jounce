import "./Header.css";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaTruck,
  FaBox,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

//images
import allimg from "../assets/shirt.jpg";
import image1 from "../assets/section3.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/section5.jpg";
import image4 from "../assets/shop3.jpg";
import image6 from "../assets/shop2.jpg";
import image5 from "../assets/sweatshirt.jpg";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("men");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileView, setMobileView] = useState("main");

  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);

  useEffect(() => {
    if (location.pathname === "/women") setActive("women");
    else setActive("men");
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (type) => {
    setActive(type);
    navigate(type === "women" ? "/women" : "/men");
    if (isMobile) setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileView("main");
  };

  const handleLinkClick = () => {
    if (isMobile) setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

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

            <div className="header-right">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="search-input"
                />
              </div>

              <Link to="/wishlist" className="icon-wrapper">
                <FaHeart className="icon" />
                {wishlistCount > 0 && (
                  <span className="icon-badge">{wishlistCount}</span>
                )}
              </Link>

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

      {/* ================= MOBILE MENU ================= */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-categories">
              {/* ---------- MAIN MENU ---------- */}
              {mobileView === "main" && (
                <>
                  <h3 className="mobile-section-title">Shop Categories</h3>

                  <Link
                    to="/men"
                    className="mobile-category-item"
                    onClick={handleLinkClick}
                  >
                    Trending 2026
                  </Link>

                  <div
                    className="mobile-category-item"
                    onClick={() => setMobileView("newArrival")}
                  >
                    New Arrivals
                    <svg
                      className="icon icon-arrow"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M7 5L13 10L7 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>

                  <div
                    className="mobile-category-item"
                    onClick={() => setMobileView("tshirts")}
                  >
                    T-Shirts
                    <svg
                      className="icon icon-arrow"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M7 5L13 10L7 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>

                  <div
                    className="mobile-category-item"
                    onClick={() => setMobileView("bottoms")}
                  >
                    Bottoms
                    <svg
                      className="icon icon-arrow"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M7 5L13 10L7 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>
                </>
              )}

              {/* ---------- NEW ARRIVALS ---------- */}
              {mobileView === "newArrival" && (
                <>
                  <div className="submenu-header">
                    <span
                      onClick={() => setMobileView("main")}
                      className="submenu-back"
                    >
                      <svg
                        className="icon icon-arrow-left"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 5L7 10L13 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>NEW ARRIVALS</span>
                  </div>

                  <div className="submenu-grid">
                    <div className="submenu-item">
                      <img src={allimg} alt="all" />
                      <div>View All</div>
                    </div>

                    <div className="submenu-item">
                      <img src={image1} />
                      <div>Shirts</div>
                    </div>
                    <div className="submenu-item">
                      <img src={image2} alt="T-Shirts" />
                      <span>T-Shirts</span>
                    </div>

                    <div className="submenu-item">
                      <img src={image3} alt="Bottoms" />
                      <span>Bottoms</span>
                    </div>
                  </div>
                </>
              )}

              {/* ---------- T-SHIRTS ---------- */}
              {mobileView === "tshirts" && (
                <>
                  <div className="submenu-header">
                    <span
                      onClick={() => setMobileView("main")}
                      className="submenu-back"
                    >
                      <svg
                        className="icon icon-arrow-left"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 5L7 10L13 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>T-SHIRTS</span>
                  </div>

                  <div className="submenu-grid">
                    <div className="submenu-item">
                      <img src={image2} />
                      <div>Round Neck T-Shirt</div>
                    </div>
                    <div className="submenu-item">
                      <img src={allimg} />
                      <div>Polo Neck T-Shirt</div>
                    </div>
                    <div className="submenu-item">
                      <img src={image6} />
                      <div>Turtle Neck T-Shirt</div>
                    </div>
                    <div className="submenu-item">
                      <img src={image4} />
                      <div>High Neck T-Shirt</div>
                    </div>
                    <div className="submenu-item">
                      <img src={image5} />
                      <div>Stripe T-Shirt</div>
                    </div>
                  </div>
                </>
              )}

              {/* ---------- BOTTOMS ---------- */}
              {mobileView === "bottoms" && (
                <>
                  <div className="submenu-header">
                    <span
                      onClick={() => setMobileView("main")}
                      className="submenu-back"
                    >
                      <svg
                        className="icon icon-arrow-left"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 5L7 10L13 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>BOTTOMS</span>
                  </div>

                  <div className="submenu-grid">
                    <div className="submenu-item">
                      <img src={image3} />
                      <div>Jeans</div>
                    </div>

                    <div className="submenu-item">
                      <img src={image3} />
                      <div>Cargos</div>
                    </div>

                    <div className="submenu-item">
                      <img src={image3} />
                      <div>Joggers</div>
                    </div>

                    <div className="submenu-item">
                      <img src={image3} />
                      <div>View All</div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* ---------- BOTTOM NAV ---------- */}
            <nav className="mobile-nav">
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <FaBox className="mobile-nav-icon" />
                My Orders
              </Link>

              <Link
                to="/track-order"
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <FaTruck className="mobile-nav-icon" />
                Track Order
              </Link>

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
