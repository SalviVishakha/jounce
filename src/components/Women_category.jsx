import React from "react";
import "./Women_Category.css";
import cord_set from "../assets/cord-set.jpg";
import formal from "../assets/formal.jpg";
import ethnic from "../assets/ethnic.jpg";
import western from "../assets/western.jpg";
import dress from "../assets/dress.jpg";

const categories = [
  {
    title: "Print Paradise",
    desc: "For that extra serving of drama",
    image: dress,
  },
  {
    title: "Regal Mustard",
    desc: "The colour of classy",
    image: cord_set,
  },
  {
    title: "Fusion Dresses",
    desc: "For a look straight out of a Bollywood movie",
    image: formal,
  },
  {
    title: "Kurta Sets By BIBA",
    desc: "We've found you the perfect match",
    image: ethnic,
    tag: "BESTSELLER",
  },
  {
    title: "Summer-Ready Ethnic",
    desc: "Breezy dresses fit for virtual calls",
    image: western,
  },
];

const WomenCategories = () => {
  return (
    <section className="women-section">
      <div className="women-grid">
        {categories.map((item, index) => (
          <div className="women-card" key={index}>
            <div className="image-wrapper">
              {item.tag && <span className="tag">{item.tag}</span>}
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="explore">+ EXPLORE</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomenCategories;
