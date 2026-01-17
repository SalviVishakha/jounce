import React, { useState } from "react";
import "./Wishlist.css";

// Images
import women1 from "../assets/women1.jpg";
import cordset from "../assets/cord-set.jpg";
import women3 from "../assets/women3.jpg";
import wishlist from "../assets/wishlist.png";

const Wishlist = () => {
  const [wishList, setWishlist] = useState([
    { id: 1, name: "Leather Jacket", price: 1200, image: women1 },
    { id: 2, name: "Cord Set", price: 900, image: cordset },
    { id: 3, name: "Women Dress", price: 2200, image: women3 },
  ]);

  const removeItem = (id) => {
    const updateList = wishList.filter((item) => item.id !== id);
    setWishlist(updateList);
  };

  const addToCart = (item) => {
    alert(`${item.name} added to cart`);
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>

      {wishList.length === 0 ? (
        <div className="empty-wishlist">
          <img src={wishlist} alt="Empty Wishlist" />
          <h3>Your Wishlist is Empty</h3>
          <p>Start exploring and save your favourite products!</p>

          <button className="browse-btn">Browse Products</button>
        </div>
      ) : (
        <div className="wishlist-items">
          {wishList.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>

              <div className="wishlist-buttons">
                <button onClick={() => addToCart(item)} className="add-btn">
                  Add to Cart
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
