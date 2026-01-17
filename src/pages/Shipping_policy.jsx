import React from "react";
import "./Shipping_policy.css";

const ShippingPolicy = () => {
  return (
    <div className="shipping-containers">
      <div className="shipping-box">
        <h1>Shipping Policy</h1>
        <p className="update-text">Last Updated: January 2026</p>

        <section>
          <h2>📦 Order Processing</h2>
          <p>
            Orders are processed within <strong>1 – 2 business days</strong>.
            Orders placed on weekends or holidays will be processed on the next
            business day.
          </p>
        </section>

        <section>
          <h2>🚚 Shipping Time</h2>
          <ul>
            <li>Standard Delivery: 5 – 7 business days</li>
            <li>Express Delivery: 2 – 4 business days</li>
            <li>International Shipping: 7 – 15 business days</li>
          </ul>
        </section>

        <section>
          <h2>💰 Shipping Charges</h2>
          <p>
            Shipping charges are calculated at checkout based on your location
            and order value. Free shipping may be available on promotional
            offers.
          </p>
        </section>

        <section>
          <h2>📍 Order Tracking</h2>
          <p>
            Once your order is shipped, you will receive a tracking ID via
            email/SMS to track your shipment in real-time.
          </p>
        </section>

        <section>
          <h2>❌ Order Delays</h2>
          <p>
            Delivery delays may occur due to weather, logistics, or unexpected
            circumstances. We will notify you if there is a major delay.
          </p>
        </section>

        <section>
          <h2>📞 Contact Us</h2>
          <p>
            If you have questions about shipping, contact us at
            <strong> support@yourstore.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
