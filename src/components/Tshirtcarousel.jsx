// TshirtCarousel.jsx
import React from "react";
import Slider from "react-slick";

// IMPORTANT: import slick CSS (must be loaded somewhere in your app)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Tshirtcarousel.css";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import section5 from "../assets/section5.jpg";
import section4 from "../assets/section4.jpg";
import section1 from "../assets/section1.jpg";

const TshirtCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // desktop shows 3
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 600,
    arrows: false,

    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="tshirt-carousel-container">
      <h2 className="carousel-heading">Trendy Collections</h2>

      <div className="tshirt-carousel">
        <Slider {...settings}>
          {/* STATIC CARD 1 */}
          <div className="tshirt-card">
            <img src={image1} alt="T-shirt 1" className="tshirt-img" />
            <div className="tshirt-overlay">
              <div className="tshirt-frame" />
              <div className="tshirt-text">
                <p>EDGY PLUS-SIZE</p>
                <h2>T-SHIRTS</h2>
              </div>
            </div>
          </div>

          {/* STATIC CARD 2 */}
          <div className="tshirt-card">
            <img src={image2} alt="T-shirt 2" className="tshirt-img" />
            <div className="tshirt-overlay">
              <div className="tshirt-frame" />
              <div className="tshirt-text">
                <p>URBAN STREET</p>
                <h2>T-SHIRTS</h2>
              </div>
            </div>
          </div>

          {/* STATIC CARD 3 */}
          <div className="tshirt-card">
            <img src={image3} alt="T-shirt 3" className="tshirt-img" />
            <div className="tshirt-overlay">
              <div className="tshirt-frame" />
              <div className="tshirt-text">
                <p>TREND FIT</p>
                <h2>T-SHIRTS</h2>
              </div>
            </div>
          </div>

          <div className="tshirt-card">
            <img src={section5} alt="joggers" className="tshirt-img" />
            <div className="tshirt-overlay">
              <div className="tshirt-frame" />
              <div className="tshirt-text">
                <p>TREND FIT</p>
                <h2>JOGGERS</h2>
              </div>
            </div>
          </div>

          <div className="tshirt-card">
            <img src={section4} alt="joggers" className="tshirt-img" />
            <div className="tshirt-overlay">
              <div className="tshirt-frame" />
              <div className="tshirt-text">
                <p>TREND FIT</p>
                <h2>JACKET</h2>
              </div>
            </div>
          </div>

          <div className="tshirt-card">
            <img src={section1} alt="joggers" className="tshirt-img" />
            <div className="tshirt-overlay">
              <div className="tshirt-frame" />
              <div className="tshirt-text">
                <p>TREND FIT</p>
                <h2>SHIRTS</h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TshirtCarousel;
