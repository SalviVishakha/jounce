import React from "react";
import "./Returnsuccess.css";
import { Link } from "react-router-dom";

const ReturnSuccess = () => {
  return (
    <div className="return-success">
      <h1>Return Request Submitted</h1>
      <p>Your return has been successfully placed.</p>

      <div className="success-actions">
        <Link to="/my-orders" className="btn outline">
          Go to Orders
        </Link>
        <Link to="/track-return" className="btn">
          Track Return
        </Link>
      </div>
    </div>
  );
};

export default ReturnSuccess;
