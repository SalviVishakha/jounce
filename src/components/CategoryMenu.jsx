// TrendingCategories.jsx
import React from "react";
import "./CategoryMenu.css";
import oversizedtshirt from "../assets/oversizedtshirt.jpg";
import joggers from "../assets/joggers.jpg";
import hoodies from "../assets/hoodies.jpg";
import shirt from "../assets/shirt.jpg";
import sweatshirt from "../assets/sweatshirt.jpg";
import fullsleves from "../assets/fullsleves.jpg";
const categories = [
  {
    name: "Oversized T-shirts",
    image: oversizedtshirt,
  },
  {
    name: "Warm Joggers",
    image: joggers,
  },
  {
    name: "Hoodies",
    image: hoodies,
  },
  {
    name: "Shirts",
    image: shirt,
  },
  {
    name: "Sweatshirts",
    image: sweatshirt,
  },
  {
    name: "Full Sleeve T-shirts",
    image: fullsleves,
  },
];

const CategoryMenu = () => {
  return (
    <div className="trending-container">
      <h2>Trending Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
