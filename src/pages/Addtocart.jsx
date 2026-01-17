import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

import women1 from "../assets/women1.jpg";
import women3 from "../assets/women3.jpg";
import emptycart from "../assets/emptycart.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Elegant Women Dress",
      price: 1500,
      qty: 1,
      image: women1,
      size: "M",
    },
    {
      id: 2,
      name: "Trendy Western Top",
      price: 1200,
      qty: 1,
      image: women3,
      size: "S",
    },
  ]);

  const sizes = ["M", "L", "XL", "XXL"]; // Size options

  // Increase Quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Change Size
  const changeSize = (id, newSize) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, size: newSize } : item))
    );
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <div className="checkout-progress">
        <div className="progress-line"></div>

        <div className="step active">
          <i className="fa-solid fa-cart-plus"></i>
          <span>Cart</span>
        </div>

        <div className="step">
          <i className="fa-solid fa-house"></i>
          <span>Address</span>
        </div>

        <div className="step">
          <i className="fa-solid fa-credit-card"></i>
          <span>Payment</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={emptycart} alt="Empty Cart" />
          <h2>Oops! Your Cart is Empty</h2>
          <p>
            Looks like you haven't added anything yet. <br />
            Start shopping to fill your cart with joy!
          </p>
        </div>
      ) : (
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img" />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  {/* ================= SIZE SELECTOR ================= */}
                  <div className="size-options">
                    {sizes.map((sizeOption) => (
                      <div
                        key={sizeOption}
                        className={`size-box ${
                          item.size === sizeOption ? "selected" : ""
                        }`}
                        onClick={() => changeSize(item.id, sizeOption)}
                      >
                        {sizeOption}
                      </div>
                    ))}
                  </div>

                  <p className="price">₹{item.price}</p>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-box">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span className="free">FREE</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="checkout-btn">
              <Link
                to="/shipping"
                style={{ color: "white", textDecoration: "none" }}
              >
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
