import { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const data = [
    { q: "What is your return policy?", a: "You can return within 7 days." },
    { q: "How long is delivery?", a: "Delivery takes 3–5 working days." },
    { q: "Do you offer COD?", a: "Yes, COD is available." },
    { q: "Do you offer COD?", a: "Yes, COD is available." },
    { q: "Do you offer COD?", a: "Yes, COD is available." },
    { q: "Do you offer COD?", a: "Yes, COD is available." },
    { q: "Do you offer COD?", a: "Yes, COD is available." },
  ];

  return (
    <div className="faq-container">
      {data.map((item, i) => (
        <div className="faq-box" key={i}>
          <div className="faq-question" onClick={() => toggle(i)}>
            {item.q}
            <span>{active === i ? "-" : "+"}</span>
          </div>

          <div className={`faq-answer ${active === i ? "show" : ""}`}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
