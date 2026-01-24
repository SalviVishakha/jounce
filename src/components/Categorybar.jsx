import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryBar.css";

import shirts from "../assets/shirt.jpg";
import tshirts from "../assets/joggers.jpg";
import bottoms from "../assets/sweatshirt.jpg";
import hoodies from "../assets/shop3.jpg";

const CategoryBar = () => {
  const [active, setActive] = useState(null);

  const data = {
    new: [
      { name: "Shirts", img: shirts, link: "/shop" },
      { name: "T-Shirts", img: tshirts, link: "/shop" },
      { name: "Bottoms", img: bottoms, link: "/shop" },
      { name: "Hoodies", img: hoodies, link: "/shop" },
    ],
    tshirts: [
      { name: "Oversized", img: tshirts, link: "/shop" },
      { name: "Printed", img: tshirts, link: "/shop" },
      { name: "Plain", img: tshirts, link: "/shop" },
    ],
    bottoms: [
      { name: "Jeans", img: bottoms, link: "/shop" },
      { name: "Cargos", img: bottoms, link: "/shop" },
      { name: "Joggers", img: bottoms, link: "/shop" },
    ],
    hoodies: [
      { name: "Zip Hoodies", img: hoodies, link: "/shop" },
      { name: "Pullover", img: hoodies, link: "/shop" },
    ],
  };

  return (
    <div className="category-bar" onMouseLeave={() => setActive(null)}>
      <div className="category-links">
        <span onMouseEnter={() => setActive("new")}>New Arrivals</span>
        <span onMouseEnter={() => setActive("tshirts")}>T-Shirts</span>
        <span onMouseEnter={() => setActive("bottoms")}>Bottoms</span>
        <span onMouseEnter={() => setActive("hoodies")}>Hoodies</span>
      </div>

      {active && (
        <div className="category-dropdown">
          <div className="dropdown-inner">
            <div className="dropdown-grid">
              {data[active].map((item, i) => (
                <Link to={item.link} key={i} className="dropdown-card">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            <Link to="/shop" className="view-all-link">
              View All →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
