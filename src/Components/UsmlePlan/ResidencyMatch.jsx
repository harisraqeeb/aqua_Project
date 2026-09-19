import React from "react";
import "./ResidencyMatch.css";

const ResidencyMatch = () => {
  return (
    <section className="residency-wrapper">
      {/* Left Column: Text Content */}
      <div className="residency-info">
        <h2 className="residency-title">
          Corporate &amp; <span>Commercial</span> Water Delivery
        </h2>

        <p className="residency-text">
          Aqua Clear specializes in dedicated commercial water delivery tailored for offices, banks, clinics, corporate centers, educational institutions, and hospitality venues. We ensure your workplace remains continuously hydrated with zero downtime.
        </p>

        <p className="residency-text">
          Our corporate accounts feature flexible volume discounts, automated recurring delivery schedules, free monthly dispenser sanitization, and consolidated monthly billing for effortless administrative management.
        </p>

        <p className="residency-text">
          From 19L dispenser refills to 500ml custom-branded bottles for corporate board meetings, Aqua Clear delivers guaranteed purity and professionalism.
        </p>

        {/* Learn More Link with Arrow */}
        <a href="#cta" className="residency-cta-link">
          <span>SETUP CORPORATE ACCOUNT</span>
          <svg
            className="residency-arrow-icon"
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

      {/* Right Column: Image */}
      <div className="residency-media-frame">
        <img
          src="/Images/delivery_van.png"
          alt="Aqua Clear Corporate Water Delivery"
          className="residency-banner-img"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default ResidencyMatch;