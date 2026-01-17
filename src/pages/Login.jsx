import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Left aesthetic section */}
        <div className="login-visual">
          <h2>Welcome Back</h2>
          <p>Log in to explore your saved styles & collections</p>
        </div>

        {/* Right form section */}
        <div className="login-form">
          <h1>Login</h1>

          <form>
            <div className="input-group">
              <input type="email" required />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span className="forgot">Forgot Password?</span>
            </div>

            <button className="login-btn">Login</button>
          </form>

          <p className="register-link">
            Don’t have an account?
            <span onClick={() => navigate("/register")}> Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
