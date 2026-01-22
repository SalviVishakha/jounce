import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ResetPassword = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Reset Password</h2>
        <p className="auth-subtext">Craete a new strong password</p>
        <form className="auth-form">
          <label>New Password</label>
          <input type="password" placeholder="Enter New Password" required />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm New Password" required />

          <Link to="/login">
            <button type="button" className="auth-btn">
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
