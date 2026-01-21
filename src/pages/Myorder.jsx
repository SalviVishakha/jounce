import React from "react";
import "./MyOrder.css";
import { Link } from "react-router-dom";
import { FaTruck, FaBoxOpen, FaRedoAlt } from "react-icons/fa";

import product1 from "../assets/shirt.jpg";
import product2 from "../assets/joggers.jpg";

const MyOrders = () => {
  const orders = [
    {
      id: "ORD123456",
      date: "14 Jan 2026",
      status: "Delivered",
      total: 2499,
      items: [
        {
          name: "Oversized Cotton Shirt",
          price: 1299,
          qty: 1,
          img: product1,
        },
      ],
    },
    {
      id: "ORD987654",
      date: "10 Jan 2026",
      status: "In Transit",
      total: 1799,
      items: [
        {
          name: "Relaxed Fit Joggers",
          price: 1799,
          qty: 1,
          img: product2,
        },
      ],
    },
  ];

  return (
    <div className="orders-page">
      <h1 className="orders-title">My Orders</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            {/* -------- ORDER HEADER -------- */}
            <div className="order-header">
              <div>
                <p className="order-id">Order #{order.id}</p>
                <p className="order-date">Placed on {order.date}</p>
              </div>

              <div className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </div>
            </div>

            {/* -------- PRODUCTS -------- */}
            <div className="order-items">
              {order.items.map((item, i) => (
                <div className="order-item" key={i}>
                  <img src={item.img} alt={item.name} />
                  <div className="order-item-info">
                    <h4>{item.name}</h4>
                    <p>
                      ₹{item.price} × {item.qty}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* -------- FOOTER -------- */}
            <div className="order-footer">
              <div className="order-total">Total: ₹{order.total}</div>

              <div className="order-actions">
                <Link to="/track-order" className="order-btn outline">
                  <FaTruck /> Track
                </Link>

                <button className="order-btn outline">
                  <FaBoxOpen /> Invoice
                </button>

                <button className="order-btn danger">
                  <FaRedoAlt /> Return
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
