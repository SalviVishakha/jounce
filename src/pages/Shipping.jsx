import React, { useState } from "react";
import "./Shipping.css";

const Shipping = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    landmark: "",
    type: "Home",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Shipping Details:", form);
    alert("Address saved successfully!");
  };

  return (
    <div className="shipping-container">
      <div className="checkout-progress">
        <div className="progress-line"></div>

        {/* CART STEP - completed */}
        <div className="step">
          <i className="fa-solid fa-cart-plus"></i>
          <span>Cart</span>
        </div>

        {/* SHIPPING STEP - active */}
        <div className="step active">
          <i className="fa-solid fa-house"></i>
          <span>Address</span>
        </div>

        {/* PAYMENT STEP - pending */}
        <div className="step">
          <i className="fa-solid fa-credit-card"></i>
          <span>Payment</span>
        </div>
      </div>

      <h2>Shipping Address</h2>

      <form onSubmit={submitHandler} className="shipping-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter Phone number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email (optional)</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Address Line 1</label>
          <input
            type="text"
            name="address1"
            required
            placeholder="House no , Street , Area"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address Line 2 (optional)</label>
          <input
            type="text"
            name="address2"
            placeholder="Apartment , Block , Nearby"
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>State</label>
            <input type="text" name="state" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Landmark (optional)</label>
          <input type="text" name="landmark" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Address Type</label>
          <select name="type" onChange={handleChange}>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button className="shipping-btn" type="submit">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default Shipping;
