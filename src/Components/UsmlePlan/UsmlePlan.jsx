import React from "react";
import "./UsmlePlan.css";

const UsmlePlan = () => {
  return (
    <section className="usmle-container">
      {/* Left Column: Image */}
      <div className="usmle-image-wrapper">
        <img
          src="/Images/hero_water.png"
          alt="Aqua Clear Quality Purification"
          className="usmle-image"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right Column: Content */}
      <div className="usmle-content">
        <h2 className="usmle-heading">
          <span>Aqua Clear</span> Pure Water Standard
        </h2>

        <p className="usmle-paragraph">
          Our state-of-the-art water purification facility utilizes a multi-barrier treatment system including sand filtration, active carbon absorption, reverse osmosis (RO), ozonation, and ultra-violet (UV) sterilization to eliminate 99.9% of impurities, heavy metals, and micro-contaminants.
        </p>

        <p className="usmle-paragraph">
          We carefully rebalance essential minerals such as Calcium, Magnesium, and Potassium to maintain optimal alkaline pH levels and deliver a crisp, natural, refreshing taste in every bottle. Every batch undergoes strict microbiological and chemical laboratory testing.
        </p>

        {/* Order Link with Arrow */}
        <a href="#cta" className="usmle-link">
          <span>ORDER WATER NOW</span>
          <svg
            className="usmle-arrow"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default UsmlePlan;