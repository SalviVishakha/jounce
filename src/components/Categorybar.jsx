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
      { name: "Shirts", img: shirts, link: "/shirts" },
      { name: "T-Shirts", img: tshirts, link: "/tshirts" },
      { name: "Bottoms", img: bottoms, link: "/bottoms" },
      { name: "Hoodies", img: hoodies, link: "/hoodies" },
    ],
    tshirts: [
      { name: "Oversized", img: tshirts, link: "/tshirts" },
      { name: "Printed", img: tshirts, link: "/tshirts" },
      { name: "Plain", img: tshirts, link: "/tshirts" },
    ],
    bottoms: [
      { name: "Jeans", img: bottoms, link: "/bottoms" },
      { name: "Cargos", img: bottoms, link: "/bottoms" },
      { name: "Joggers", img: bottoms, link: "/bottoms" },
    ],
    hoodies: [
      { name: "Zip Hoodies", img: hoodies, link: "/hoodies" },
      { name: "Pullover", img: hoodies, link: "/hoodies" },
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

            <Link to="/products" className="view-all-link">
              View All →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
