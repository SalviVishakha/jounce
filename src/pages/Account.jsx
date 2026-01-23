import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Account.css";
import {
  FaBoxOpen,
  FaHeart,
  FaTruck,
  FaHome,
  FaUserEdit,
  FaLock,
} from "react-icons/fa";

const Account = () => {
  const navigate = useNavigate();

  const user = {
    name: "Vishakha Salvi",
    email: "vishakha@email.com",
    phone: "+91 98765 43210",
  };

  return (
    <div className="account-page">
      {/* Header */}
      <div className="account-header">
        <h2>My Account</h2>
        <p>Manage your profile & orders</p>
      </div>

      {/* Profile Card */}
      <div className="account-profile-card">
        <div className="profile-left">
          <div className="avatar">{user.name.charAt(0)}</div>
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>

        <button
          className="profile-logout-btn"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>

      {/* Quick Actions */}
      <div className="account-grid">
        <Link to="/my-order" className="account-tile">
          <FaBoxOpen className="account-icon" />
          <p>My Orders</p>
        </Link>

        <Link to="/wishlist" className="account-tile">
          <FaHeart className="account-icon" />
          <p>Wishlist</p>
        </Link>

        <Link to="/track-order" className="account-tile">
          <FaTruck className="account-icon" />
          <p>Track Order</p>
        </Link>

        <Link to="/address-book" className="account-tile">
          <FaHome className="account-icon" />
          <p>Saved Addresses</p>
        </Link>

        <Link to="/profile-edit" className="account-tile">
          <FaUserEdit className="account-icon" />
          <p>Edit Profile</p>
        </Link>

        <Link to="/reset-password" className="account-tile">
          <FaLock className="account-icon" />
          <p>Change Password</p>
        </Link>
      </div>
    </div>
  );
};

export default Account;
