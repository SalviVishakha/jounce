import React from "react";
import "./Return_policy.css";

const Return_policy = () => {
  return (
    <div className="return-container">
      <div className="return-box">
        <h1>Return & Refund</h1>
        <p className="update-text">Last Updated: January 2026</p>
        <section>
          <h2>Returns</h2>
          <p>
            We accept returns within <strong>7 - 1 days</strong>
            of delivery.Products must be unused,in original consition and with
            tags intact.
          </p>
        </section>

        <section>
          <h2>Non-Returnable Items</h2>
          <ul>
            <li>Used or damaged products</li>
            <li>Sale / Clearance items</li>
            <li>Personal care & hygiene products</li>
          </ul>
        </section>

        <section>
          <h2>Refunds</h2>
          <p>
            Once your return is received and inspected , your refund will be
            proccessed within <strong>5 - 7 business days</strong>.Refunds will
            be credited to the original payment method.
          </p>
        </section>
        <section>
          <h2>Exchange Policy</h2>
          <p>
            Exchanges are only allowed for defective or wrong products
            delivered. Exchange requests must be raised within 48 hours of
            delivery.
          </p>
        </section>

        <section>
          <h2>Order Cancellation</h2>
          <p>
            Orders can be cancelled before shipping. Once shipped,
            Cancellationisn't possible; you can request a return policy after
            delivery.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            For returns or refund queries , email us at
            <strong> support@yourstore.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Return_policy;
