import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Womenpage.css";
import Women from "../components/Women";
import Four_side from "../components/Four_side";
import Women_category from "../components/Women_category";
import Women_products_section from "../components/Women_products_section";
import { FaArrowUp } from "react-icons/fa";

// Images
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";

// 🧩 HomePage Component
const Womenpage = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    arrows: true,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [women1, women2, women3, women4];
  return (
    <div className="women">
      {/* 🌟 Hero Section */}
      <section className="carousel-containers">
        <Slider {...slickSettings}>
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
      </section>

      <Women />
      <Four_side />
      <Women_category />
      <Women_products_section />

      {/* scroll button  */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Womenpage;
