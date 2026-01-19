import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mobile-back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
        Back
      </div>

      <div className="register-wrapper">
        <div className="register-card">
          {/* left-section  */}
          <div className="register-visual">
            <h2>Create Your Style</h2>
            <p>Join our fashion world & discover curated looks</p>
          </div>

          {/* right-section  */}
          <div className="register-form">
            <h1>Sign Up</h1>
            <form>
              <div className="input-group">
                <input type="text" required />
                <label>Full Name</label>
              </div>

              <div className="input-group">
                <input type="text" required />
                <label>E-mail Address</label>
              </div>

              <div className="input-group">
                <input type="text" required />
                <label>Password</label>
              </div>

              <button className="register-btn">Create Account</button>
            </form>
            <p className="login-link">
              Already have an account ?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
