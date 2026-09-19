import React from "react";
import "./PersonalStatement.css";

const PersonalStatement = () => {
  return (
    <section className="ps-section-box">
      {/* Left Column: Image */}
      <div className="ps-visual-container">
        <img
          src="/Images/hero_water.png"
          alt="Aqua Clear Sealed Bottled Water"
          className="ps-featured-image"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right Column: Text Content */}
      <div className="ps-details-block">
        <h2 className="ps-main-heading">
          <span>Uncompromising</span> Hygiene Guarantee
        </h2>

        <p className="ps-body-text">
          Every Aqua Clear bottle undergoes an automated 6-step washing, sanitizing, and rinsing cycle before filling. We utilize 100% food-grade BPA-free Polycarbonate and PET materials that preserve water freshness without odor or leaching.
        </p>

        <p className="ps-body-text">
          Our filling and capping lines are fully automated inside HEPA air-filtered sterile cleanrooms, preventing human contact and external exposure during bottling.
        </p>

        <p className="ps-body-text">
          Each bottle is capped with a tamper-evident heat seal so you receive 100% genuine, untouched, factory-fresh drinking water every single time.
        </p>

        {/* Learn More Action Link */}
        <a href="#cta" className="ps-action-link">
          <span>ORDER GUARANTEED PURE WATER</span>
          <svg
            className="ps-arrow-svg"
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

export default PersonalStatement;