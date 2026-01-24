import React, { useState } from "react";
import "./Returnorder.css";
import { useNavigate } from "react-router-dom";
import productImg from "../assets/shirt.jpg";

const ReturnRequest = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState("");
  const [action, setAction] = useState("refund");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="return-page">
      <h1>Return / Replace Item</h1>

      <div className="return-card">
        {/* Product */}
        <div className="return-product">
          <img src={productImg} alt="Product" />
          <div>
            <h4>Oversized Cotton Shirt</h4>
            <p>Size: M · Color: Black</p>
            <p className="price">₹1299</p>
          </div>
        </div>

        {/* Form */}
        <div className="return-form">
          <label>Reason for return</label>
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="">Select reason</option>
            <option>Size issue</option>
            <option>Damaged product</option>
            <option>Wrong item received</option>
            <option>Quality not as expected</option>
            <option>Other</option>
          </select>

          <label>What would you like?</label>
          <div className="return-options">
            <button
              type="button"
              className={action === "refund" ? "active" : ""}
              onClick={() => setAction("refund")}
            >
              Refund
            </button>
            <button
              type="button"
              className={action === "replace" ? "active" : ""}
              onClick={() => setAction("replace")}
            >
              Replacement
            </button>
          </div>

          {/* ✅ Upload */}
          <label>Upload images (optional)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />

          {/* Preview */}
          {images.length > 0 && (
            <div className="upload-preview">
              {images.map((img, i) => (
                <div key={i} className="preview-img">
                  <img src={URL.createObjectURL(img)} alt="upload" />
                  <span onClick={() => removeImage(i)}>×</span>
                </div>
              ))}
            </div>
          )}

          <label>Additional comments (optional)</label>
          <textarea placeholder="Tell us more..." />

          <button
            className="submit-return-btn"
            onClick={() => navigate("/return-success")}
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnRequest;
