import "./Contactus.css";
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaPhone } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        {/* LEFT PANEL */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <p>
            <FaMapMarkerAlt /> 23, Avenue de Paris
            <br />
            75012 Paris
          </p>
          <p>
            <FaEnvelope /> hello@mikechemardin.com
          </p>
          <p>
            <FaUser /> mikechemardin
          </p>
          <p>
            <FaPhone /> +33 6 19 53 01 44
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p className="subtitle">Feel free to drop us a line below!</p>

          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea rows="5" placeholder="Type your message here..." />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
