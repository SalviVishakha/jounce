import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import banner6 from "../assets/banner6.png";

const StaticCarousel = () => {
  const settings = {
    dots: true,
    infinite: true, // makes it loop
    slidesToShow: 3, // 3 images on screen
    slidesToScroll: 1, // scroll 1 at a time
    autoplay: true, // auto-slide
    autoplaySpeed: 2500,
    speed: 600,
    arrows: true,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="carousel-container" style={{ padding: "20px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="carousel-card"
            style={{ padding: "10px" }}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StaticCarousel;
