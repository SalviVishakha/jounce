import React from "react";
import "./Tracking.css";
import { FaCheckCircle, FaTruck, FaBoxOpen, FaHome } from "react-icons/fa";

import product1 from "../assets/shirt.jpg";

const TrackOrder = () => {
  const order = {
    id: "ORD123456",
    date: "14 Jan 2026",
    status: "Out for Delivery",
    expectedDelivery: "18 Jan 2026",
    address: "Vishakha Salvi, 21 MG Road, Bangalore - 560001",
    items: [
      {
        name: "Oversized Cotton Shirt",
        price: 1299,
        qty: 1,
        img: product1,
      },
    ],
    trackingSteps: [
      { label: "Order Placed", completed: true },
      { label: "Packed", completed: true },
      { label: "Shipped", completed: true },
      { label: "Out for Delivery", completed: true },
      { label: "Delivered", completed: false },
    ],
  };

  return (
    <div className="track-page">
      <h1 className="track-title">Track Order</h1>

      {/* ---------- ORDER SUMMARY ---------- */}
      <div className="track-card summary-card">
        <div>
          <p className="order-id">Order #{order.id}</p>
          <p className="order-date">Placed on {order.date}</p>
        </div>
        <div className="order-status">{order.status}</div>
      </div>

      {/* ---------- TRACKING PROGRESS ---------- */}
      <div className="track-card progress-card">
        <h3>Delivery Progress</h3>

        <div className="progress-steps">
          {order.trackingSteps.map((step, i) => (
            <div className="progress-step" key={i}>
              <div
                className={`step-circle ${step.completed ? "completed" : ""}`}
              >
                {step.completed ? <FaCheckCircle /> : i + 1}
              </div>
              <span className="step-label">{step.label}</span>
              {i !== order.trackingSteps.length - 1 && (
                <div
                  className={`step-line ${
                    order.trackingSteps[i + 1].completed ? "completed" : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <p className="delivery-date">
          Expected Delivery: <strong>{order.expectedDelivery}</strong>
        </p>
      </div>

      {/* ---------- ITEMS ---------- */}
      <div className="track-card items-card">
        <h3>Items in this Order</h3>

        {order.items.map((item, i) => (
          <div className="track-item" key={i}>
            <img src={item.img} alt={item.name} />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p>
                ₹{item.price} × {item.qty}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- ADDRESS ---------- */}
      <div className="track-card address-card">
        <h3>Delivery Address</h3>
        <p>{order.address}</p>
      </div>

      {/* ---------- ACTIONS ---------- */}
      <div className="track-actions">
        <button className="track-btn outline">
          <FaTruck /> Contact Support
        </button>
        <button className="track-btn outline">
          <FaBoxOpen /> Download Invoice
        </button>
        <button className="track-btn danger">
          <FaHome /> Return / Replace
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
