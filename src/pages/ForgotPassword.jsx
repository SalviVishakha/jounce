import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Forgot Password ?</h2>
        <p className="auth-subtext">
          Enter your registered email and we'll send you a reset link.
        </p>
        <form className="auth-form">
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />
          <Link to="/reset-password">
            <button type="button" className="auth-btn">
              Send Reset Link{" "}
            </button>
          </Link>
        </form>
        <p className="auth-footer">
          Remeber your password? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
