import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h3 className="footer-logo">Jounce</h3>
          <p className="footer-text">
            Premium quality T-shirts crafted for comfort and style.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Size Guide</li>
            <Link
              to="/return-policy"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li>Return-Policy</li>
            </Link>
            <Link
              to="/shipping-policy"
              style={{ color: "white", textDecoration: "none" }}
            >
              <li>Shipping-Policy</li>
            </Link>

            <Link to="/faq" style={{ color: "white", textDecoration: "none" }}>
              <li>FAQs</li>
            </Link>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <FaEnvelope /> support@jounce.com
          </p>
          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p>
            <FaMapMarkerAlt /> Mumbai, India
          </p>
        </div>
      </div>

      <div className="footer-bottom">©2026 Jounce. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
