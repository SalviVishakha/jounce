import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper/modules";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowUp } from "react-icons/fa";

import "./Home.css";

// Images
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import banner6 from "../assets/banner6.png";
import oversizedtshirt from "../assets/oversizedtshirt.jpg";
import joggers from "../assets/joggers.jpg";
import hoodies from "../assets/hoodies.jpg";
import shirt from "../assets/shirt.jpg";
import sweatshirt from "../assets/sweatshirt.jpg";
import fullsleves from "../assets/fullsleves.jpg";
import section1 from "../assets/section1.jpg";
import section2 from "../assets/section2.jpg";
import section3 from "../assets/section3.jpg";
import section4 from "../assets/section4.jpg";
import section5 from "../assets/section5.jpg";
import section6 from "../assets/section6.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

// 🧩 HomePage Component
const Home = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    arrows: false,
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

  const images = [banner1, banner2, banner3, banner4, banner5, banner6];

  const categories = [
    { name: "Oversized T-shirts", image: oversizedtshirt },
    { name: "Warm Joggers", image: joggers },
    { name: "Hoodies", image: hoodies },
    { name: "Shirts", image: shirt },
    { name: "Sweatshirts", image: sweatshirt },
    { name: "Full Sleeve T-shirts", image: fullsleves },
  ];

  return (
    <div className="homepage">
      {/* 🌟 Hero Section */}

      <section className="carousel-container">
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
      <section className="hero">
        <div className="hero-text">
          <h1>
            Elevate Your Style With <br /> <span>Bold Fashion</span>
          </h1>
        </div>

        <div className="hero-grid-wrapper">
          <div className="vertical-brand">
            <span>J</span>
            <span>O</span>
            <span>U</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
          </div>

          <div className="hero-grid">
            {[
              { img: section5, title: "Joggers", text: "Sleek & Stylish" },
              { img: section2, title: "Sweatshirts", text: "Chill & Trendy" },
              { img: section3, title: "Pants", text: "Modern & Sharp" },
              {
                img: section4,
                title: "Denim Jackets",
                text: "Trendy & Comfortable",
              },
              { img: section1, title: "Shirts", text: "Casual Vibes" },
              { img: section6, title: "Joggers", text: "Relaxed & Cool" },
            ].map((item, i) => (
              <div key={i} className={`card card${i + 1}`}>
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛍 Banner Carousel */}

      {/* 🔥 Trending Categories */}
      <section className="trending-container">
        <h2>Trending Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ Product Slider */}
      <section className="product-slider-wrapper">
        <h2>New Arrival</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {[image1, image2, image3, image4, image5].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="product-card">
                <div className="image-wrap">
                  <img
                    src={img}
                    alt={`Product ${i + 1}`}
                    className="product-image"
                  />

                  <div className="rating-badge">
                    <FaStar />
                    <span>4.5</span>
                  </div>
                  <button className="wishlist-btn">♡</button>
                </div>
                <div className="product-info">
                  <p className="men-title">Men’s Graphic Printed T-shirt</p>

                  <div className="price-section">
                    <span className="price">₹449</span>
                    <span className="original">₹1099</span>
                    <span className="discount">60% OFF</span>
                  </div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

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

export default Home;
