import "./RecentlyView.css";
import React, { useEffect, useState } from "react";

const RecentlyView = () => {
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentItems(data);
  }, []);
  if (recentItems.length === 0) return <></>;

  return (
    <div className="recently-viewed-section">
      <h2 className="rv-title">Recently Viewed</h2>

      <div className="rv-grid">
        {recentItems.map((item) => (
          <div className="rv-card" key={item.id}>
            <img src={item.image} alt={item.name} className="rv-img" />

            <div className="rv-info">
              <h4>{item.name}</h4>
              <p className="rv-price">{item.price}</p>
              <button className="rv-btn">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyView;
