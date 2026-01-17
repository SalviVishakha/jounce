import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import women1 from "../assets/women1.jpg";
import cordset from "../assets/cord-set.jpg";
import women3 from "../assets/women3.jpg";
import ethnic from "../assets/ethnic.jpg";
import western from "../assets/western.jpg";
import dress from "../assets/dress.jpg";
import { FaStar } from "react-icons/fa";
import "./Women_products_section.css";

const products = [
  {
    id: 1,
    img: western,
    title: "Elegant Floral Dress",
    brand: "Jounce",
    price: 1499,
    oldPrice: 2499,
    rating: 4.5,
  },
  {
    id: 2,
    img: women1,
    title: "Elegant Floral Dress",
    brand: "Jounce",
    price: 1499,
    oldPrice: 2499,
    rating: 4.5,
  },
  {
    id: 3,
    img: cordset,
    title: "Elegant Floral Dress",
    brand: "Jounce",
    price: 1499,
    oldPrice: 2499,
    rating: 4.5,
  },
  {
    id: 4,
    img: women3,
    title: "Elegant Floral Dress",
    brand: "Jounce",
    price: 1499,
    oldPrice: 2499,
    rating: 4.5,
  },
  {
    id: 5,
    img: ethnic,
    title: "Elegant Floral Dress",
    brand: "Jounce",
    price: 1499,
    oldPrice: 2499,
    rating: 4.5,
  },
  {
    id: 6,
    img: dress,
    title: "Elegant Floral Dress",
    brand: "Jounce",
    price: 1499,
    oldPrice: 2499,
    rating: 4.5,
  },
];

const Women_products_section = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // desktop
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="women-product-section">
      <h2 className="women-title">Classy Best Picks</h2>

      <Slider {...settings} className="women-slider">
        {products.map((items) => (
          <div className="product-card" key={items.id}>
            <div className="img-box">
              <img src={items.img} alt={items.title} />
            </div>

            <div className="product-info">
              <p className="brand">{items.brand}</p>
              <h3 className="name">{items.title}</h3>

              <div className="price-row">
                <span className="price">₹{items.price}</span>
                <span className="old-price">₹{items.oldPrice}</span>
              </div>

              <div className="rating">
                <FaStar className="star" />
                <span>{items.rating}</span>
              </div>

              <Link to="/product-details">
                <button className="btn">Add to Cart</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Women_products_section;
