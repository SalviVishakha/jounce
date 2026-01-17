import React from "react";
import "./Productslider.css";
import { FaStar } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Image imports
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const ProductSlider = () => {
  return (
    <div className="product-slider-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="product-card">
            <img
              src={image1}
              alt="Men's White Keep Listening Typography T-shirt"
              className="product-image"
            />
            <div className="product-info">
              <p className="brand">Jounce®</p>
              <p className="title">
                Men's White Keep Listening Typography T-shirt
              </p>
              <div className="price-section">
                <span className="price">₹429</span>
                <span className="original">₹1099</span>
                <span className="discount">60% OFF</span>
              </div>
              <div
                className="rating"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaStar style={{ color: "#dcb31fff" }} />
                <span style={{ color: "black", fontWeight: "bold" }}>4.5</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="product-card">
            <img
              src={image2}
              alt="Men's White World Peace Graphic Printed T-shirt"
              className="product-image"
            />
            <div className="product-info">
              <p className="brand">Jounce®</p>
              <p className="title">
                Men's White World Peace Graphic Printed T-shirt
              </p>
              <div className="price-section">
                <span className="price">₹449</span>
                <span className="original">₹1099</span>
                <span className="discount">59% OFF</span>
              </div>
              <div
                className="rating"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaStar style={{ color: "#dcb31fff" }} />
                <span style={{ color: "black", fontWeight: "bold" }}>4.6</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="product-card">
            <img
              src={image3}
              alt="Men's White T-shirt"
              className="product-image"
            />
            <div className="product-info">
              <p className="brand">Jounce®</p>
              <p className="title">Men's White T-shirt</p>
              <div className="price-section">
                <span className="price">₹349</span>
                <span className="original">₹999</span>
                <span className="discount">65% OFF</span>
              </div>
              <div
                className="rating"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaStar style={{ color: "#dcb31fff" }} />
                <span style={{ color: "black", fontWeight: "bold" }}>4.6</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="product-card">
            <img
              src={image4}
              alt="Men's Black The Dark Knight Graphic Printed T-shirt"
              className="product-image"
            />
            <div className="product-info">
              <p className="brand">Jounce®</p>
              <p className="title">
                Men's Black The Dark Knight Graphic Printed T-shirt
              </p>
              <div className="price-section">
                <span className="price">₹449</span>
                <span className="original">₹1499</span>
                <span className="discount">70% OFF</span>
              </div>
              <div
                className="rating"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaStar style={{ color: "#dcb31fff" }} />
                <span style={{ color: "black", fontWeight: "bold" }}>4.3</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="product-card">
            <img
              src={image5}
              alt="Men's Fog Green Spike Graphic Printed T-shirt"
              className="product-image"
            />
            <div className="product-info">
              <p className="brand">Jounce®</p>
              <p className="title">
                Men's Fog Green Spike Graphic Printed T-shirt
              </p>
              <div className="price-section">
                <span className="price">₹299</span>
                <span className="original">₹1399</span>
                <span className="discount">78% OFF</span>
              </div>
              <div
                className="rating"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaStar style={{ color: "#dcb31fff" }} />
                <span style={{ color: "black", fontWeight: "bold" }}>4.5</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
