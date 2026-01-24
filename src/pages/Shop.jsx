import React, { useState } from "react";
import "./Shop.css";

import img2 from "../assets/shop2.jpg";
import img3 from "../assets/shop3.jpg";
import img4 from "../assets/section5.jpg";
import img5 from "../assets/section2.jpg";
import img6 from "../assets/section1.jpg";

const productsData = [
  {
    id: 1,
    name: "Oversized Printed T-Shirt",
    brand: "Jounce®",
    price: 449,
    color: "Black",
    category: "T-Shirts",
    image: img2,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Slim Fit Cotton Shirt",
    brand: "Jounce®",
    price: 899,
    color: "White",
    category: "Shirts",
    image: img6,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Warm Winter Hoodie",
    brand: "Jounce®",
    price: 1299,
    color: "Grey",
    category: "Hoodies",
    image: img5,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Comfort Joggers",
    brand: "Jounce®",
    price: 999,
    color: "Black",
    category: "Joggers",
    image: img4,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Oversized Sweatshirt",
    brand: "Jounce®",
    price: 1099,
    color: "Brown",
    category: "Sweatshirts",
    image: img3,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Casual Polo T-Shirt",
    brand: "Jounce®",
    price: 599,
    color: "Blue",
    category: "T-Shirts",
    image: img2,
    sizes: ["S", "M", "L", "XL"],
  },
];

const MensShop = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const min = 0;
  const max = 2000;
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("default");
  const [sizes, setSizes] = useState([]);

  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const categories = [
    "T-Shirts",
    "Shirts",
    "Hoodies",
    "Joggers",
    "Sweatshirts",
  ];
  const colors = ["Black", "White", "Grey", "Brown", "Blue"];

  const filteredProducts = productsData
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)
    .filter((p) => (color ? p.color === color : true))
    .filter((p) => (category ? p.category === category : true))
    .filter((p) =>
      sizes.length ? sizes.some((s) => p.sizes.includes(s)) : true,
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="shop-page">
      {/* Banner */}
      <div className="shop-banner">
        <h2>Men's Collection</h2>
        <p>Streetwear • Comfort • Premium Fit</p>
      </div>

      <div className="shop-content">
        {/* ================= DESKTOP FILTERS ================= */}
        <aside className="filters desktop-only">
          <h3>Filters</h3>

          {/* Price */}
          <div className="filter-block">
            <h4>Price Range</h4>

            <div className="dual-slider">
              <div
                className="slider-tracks"
                style={{
                  left: `${(minPrice / max) * 100}%`,
                  right: `${100 - (maxPrice / max) * 100}%`,
                }}
              />
              <input
                type="range"
                min={min}
                max={max}
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(Math.min(+e.target.value, maxPrice - 100))
                }
              />
              <input
                type="range"
                min={min}
                max={max}
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Math.max(+e.target.value, minPrice + 100))
                }
              />
            </div>

            <div className="price-inputs">
              <div>
                ₹
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(Math.min(+e.target.value, maxPrice - 100))
                  }
                />
              </div>
              <span>To</span>
              <div>
                ₹
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(Math.max(+e.target.value, minPrice + 100))
                  }
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="filter-block">
            <h4>Category</h4>
            {categories.map((cat) => (
              <label className="filter-option" key={cat}>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(category === cat ? "" : cat)}
                />
                <span className="checkmark"></span>
                <span>{cat}</span>
              </label>
            ))}
            <button className="clear-btn" onClick={() => setCategory("")}>
              Clear selection
            </button>
          </div>

          {/* Size */}
          <div className="filter-block">
            <h4>Size</h4>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className={`size-btn ${sizes.includes(s) ? "active" : ""}`}
                  onClick={() =>
                    setSizes((prev) =>
                      prev.includes(s)
                        ? prev.filter((x) => x !== s)
                        : [...prev, s],
                    )
                  }
                >
                  {s}
                </button>
              ))}
            </div>
            <button className="clear-btn" onClick={() => setSizes([])}>
              Clear size
            </button>
          </div>

          {/* Color */}
          <div className="filter-block">
            <h4>Color</h4>
            <div className="color-options">
              {colors.map((c) => (
                <div
                  key={c}
                  className={`color-dot ${c.toLowerCase()} ${
                    color === c ? "active" : ""
                  }`}
                  onClick={() => setColor(c === color ? "" : c)}
                  title={c}
                />
              ))}
            </div>
            <button className="clear-btn" onClick={() => setColor("")}>
              Clear color
            </button>
          </div>
        </aside>

        {/* ================= PRODUCTS ================= */}
        <main className="products-section">
          <div className="products-topbar desktop-only">
            <p>{filteredProducts.length} products found</p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="sort-select"
            >
              <option value="default">Sort by: Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>No products found</h3>
              <p>Try adjusting your filters</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((item) => (
                <div key={item.id} className="product-card">
                  <div className="product-image-wrap">
                    <img src={item.image} alt={item.name} />
                    <button className="wishlist-btn">♡</button>
                  </div>

                  <div className="product-info">
                    <p className="shoptitle">{item.name}</p>
                    <p className="brand">{item.category}</p>
                    <p className="price">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}

      {/* ================= MOBILE OVERLAY ================= */}
      {(showFilter || showSort) && (
        <div
          className="mobile-overlay"
          onClick={() => {
            setShowFilter(false);
            setShowSort(false);
          }}
        />
      )}

      <div className="mobile-bottom-bar">
        <button onClick={() => setShowFilter(true)}>Filter</button>
        <button onClick={() => setShowSort(true)}>Sort</button>
      </div>

      {/* ================= MOBILE FILTER DRAWER (LEFT) ================= */}
      <div className={`mobile-filter-drawer ${showFilter ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>Filters</h3>
          <span onClick={() => setShowFilter(false)}>✕</span>
        </div>

        <div className="drawer-body">
          {/* Price */}

          <div className="filter-block">
            <div className="price-header">
              <h4>Price</h4>
              <span className="collapse-icon">—</span>
            </div>

            <div className="dual-slider">
              <div
                className="slider-track-active"
                style={{
                  left: `${(minPrice / max) * 100}%`,
                  right: `${100 - (maxPrice / max) * 100}%`,
                }}
              />
              <input
                type="range"
                min={min}
                max={max}
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(Math.min(+e.target.value, maxPrice - 100))
                }
              />
              <input
                type="range"
                min={min}
                max={max}
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Math.max(+e.target.value, minPrice + 100))
                }
              />
            </div>

            <div className="price-inputs-modern">
              <div className="price-box">
                <span>₹</span>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(Math.min(+e.target.value, maxPrice - 100))
                  }
                />
              </div>
              <span className="to-text">To</span>
              <div className="price-box">
                <span>₹</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(Math.max(+e.target.value, minPrice + 100))
                  }
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="filter-block">
            <h4>Category</h4>
            {categories.map((cat) => (
              <label className="filter-option" key={cat}>
                <input
                  type="radio"
                  name="m-category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(category === cat ? "" : cat)}
                />
                <span className="checkmark"></span>
                <span>{cat}</span>
              </label>
            ))}
            <button className="clear-btn" onClick={() => setCategory("")}>
              Clear
            </button>
          </div>

          {/* Size */}
          <div className="filter-block">
            <h4>Size</h4>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className={`size-btn ${sizes.includes(s) ? "active" : ""}`}
                  onClick={() =>
                    setSizes((prev) =>
                      prev.includes(s)
                        ? prev.filter((x) => x !== s)
                        : [...prev, s],
                    )
                  }
                >
                  {s}
                </button>
              ))}
            </div>
            <button className="clear-btn" onClick={() => setSizes([])}>
              Clear
            </button>
          </div>

          {/* Color */}
          <div className="filter-block">
            <h4>Color</h4>
            <div className="color-options">
              {colors.map((c) => (
                <div
                  key={c}
                  className={`color-dot ${c.toLowerCase()} ${
                    color === c ? "active" : ""
                  }`}
                  onClick={() => setColor(c === color ? "" : c)}
                  title={c}
                />
              ))}
            </div>
            <button className="clear-btn" onClick={() => setColor("")}>
              Clear
            </button>
          </div>
        </div>

        <button className="apply-btn" onClick={() => setShowFilter(false)}>
          Apply Filters
        </button>
      </div>

      {/* ================= MOBILE SORT SHEET (BOTTOM) ================= */}
      <div className={`mobile-sort-sheet ${showSort ? "open" : ""}`}>
        <div className="sheet-header">
          <span onClick={() => setShowSort(false)}>✕</span>
          <h3>Sort By</h3>
        </div>

        <div className="sheet-body">
          <button
            onClick={() => {
              setSort("default");
              setShowSort(false);
            }}
          >
            Recommended
          </button>
          <button
            onClick={() => {
              setSort("low");
              setShowSort(false);
            }}
          >
            Price: Low to High
          </button>
          <button
            onClick={() => {
              setSort("high");
              setShowSort(false);
            }}
          >
            Price: High to Low
          </button>
        </div>
      </div>
    </div>
  );
};

export default MensShop;
