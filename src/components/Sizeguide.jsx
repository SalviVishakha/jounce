import { useState } from "react";
import "./SizeGuide.css";
import sizechart from "../assets/sizechart.png";

const SizeGuide = ({ triggerLabel = "Size Guide" }) => {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState("IN");

  return (
    <>
      {/* Trigger from Product Page */}
      <button onClick={() => setOpen(true)} className="pdf-btn">
        {triggerLabel}
      </button>

      {/* Overlay */}
      {open && (
        <div className="size-guide-overlay" onClick={() => setOpen(false)}>
          {/* Drawer */}
          <div
            className="size-guide-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <h2 className="sizeguide-title">SIZE GUIDE</h2>

            {/* Toggle */}
            <div className="unit-toggle">
              <span
                className={unit === "IN" ? "active" : ""}
                onClick={() => setUnit("IN")}
              >
                IN
              </span>

              <span
                className={unit === "CM" ? "active" : ""}
                onClick={() => setUnit("CM")}
              >
                CM
              </span>
            </div>

            {/* Table */}
            <table className="size-table">
              <thead>
                <tr>
                  <th>SIZE</th>
                  <th>CHEST</th>
                  <th>LENGTH</th>
                  <th>SHOULDER</th>
                </tr>
              </thead>

              {unit === "IN" ? (
                <tbody>
                  <tr>
                    <td>S</td>
                    <td>38</td>
                    <td>26.5</td>
                    <td>16.25</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>40</td>
                    <td>27.5</td>
                    <td>17.25</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>42</td>
                    <td>28.5</td>
                    <td>18.25</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>44</td>
                    <td>29.5</td>
                    <td>19.25</td>
                  </tr>
                  <tr>
                    <td>2XL</td>
                    <td>46</td>
                    <td>30.5</td>
                    <td>20.25</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>S</td>
                    <td>96.5</td>
                    <td>67.3</td>
                    <td>41.3</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>101.6</td>
                    <td>69.9</td>
                    <td>43.8</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>106.7</td>
                    <td>72.4</td>
                    <td>46.4</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>111.8</td>
                    <td>74.9</td>
                    <td>48.9</td>
                  </tr>
                  <tr>
                    <td>2XL</td>
                    <td>116.8</td>
                    <td>77.5</td>
                    <td>51.4</td>
                  </tr>
                </tbody>
              )}
            </table>

            <p className="note">All measurements are approximate</p>

            <div className="diagram">
              <img src={sizechart} alt="Measurement Guide" />
            </div>

            <div className="instructions">
              <h3>How To Measure</h3>
              <ul>
                <li>Keep body relaxed</li>
                <li>
                  <strong>Chest:</strong> Measure under arms
                </li>
                <li>
                  <strong>Length:</strong> Shoulder to bottom
                </li>
                <li>Regular fit – not tight, not loose</li>
                <li>Variation ± 0.5 inch</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SizeGuide;
