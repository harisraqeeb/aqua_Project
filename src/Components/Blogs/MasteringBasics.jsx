import React from 'react';
import './MasteringBasics.css';

const basicsData = [
  {
    id: 1,
    title: "9-Stage Advanced Filtration",
    highlightWord: "Filtration",
    paragraphs: [
      "Our multi-barrier treatment facility utilizes sand filtration, active carbon absorption, and high-pressure Reverse Osmosis (RO) membranes to filter out micro-particles, heavy metals, pesticides, and total dissolved solids (TDS).",
      "This rigorous multi-stage purification guarantees that every drop of Aqua Clear water is crystal clear, odorless, and completely free of chemical contaminants."
    ],
    image: "/Images/hero_water.png"
  },
  {
    id: 2,
    title: "Essential Mineral Rebalancing",
    highlightWord: "Mineral",
    paragraphs: [
      "Pure water should not be stripped of vitality. After reverse osmosis, Aqua Clear enriches the water with calibrated trace minerals including Calcium, Magnesium, and Potassium.",
      "This process yields a clean, crisp taste while maintaining a healthy alkaline pH balance optimal for daily family and workplace hydration."
    ],
    image: "/Images/delivery_van.png"
  },
  {
    id: 3,
    title: "UV Sterilization & Ozonation",
    highlightWord: "Sterilization",
    paragraphs: [
      "To guarantee 100% biological safety, purified water passes through high-intensity Ultra-Violet (UV) chambers followed by medical-grade ozonation.",
      "This dual-action sterilization eliminates bacteria, viruses, and microbial spores without using harsh chemicals like chlorine."
    ],
    image: "/Images/c3.png"
  }
];

const MasteringBasics = () => {
  return (
    <section className="mtb-section-wrapper">
      {/* Header Section */}
      <div className="mtb-header-container">
        <span className="mtb-step-badge">PURIFICATION SCIENCE</span>
        <h1 className="mtb-main-heading">
          Mastering <span className="mtb-highlight-text">Pure Water Standards</span>
        </h1>
        <p className="mtb-header-subtext">
          Discover how Aqua Clear transforms raw source water into 100% pure, healthy, mineral-balanced drinking water for daily family and corporate consumption.
        </p>
      </div>

      {/* Map Loop Container */}
      <div className="mtb-items-grid">
        {basicsData.map((item, index) => {
          const isEven = index % 2 !== 0;

          const titleParts = item.title.split(item.highlightWord);

          return (
            <div
              key={item.id}
              className={`mtb-row-item ${isEven ? 'mtb-row-reverse' : ''}`}
            >
              {/* Text Side (Gap 60px between inner items via flex column gap) */}
              <div className={`mtb-text-content ${isEven ? 'zoom-in-right' : 'zoom-in-left'}`}>
                <h2 className="mtb-item-title">
                  {titleParts[0]}
                  <span className="mtb-highlight-text">{item.highlightWord}</span>
                  {titleParts[1]}
                </h2>
                <div className="mtb-paragraphs-wrapper">
                  {item.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="mtb-item-desc">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className={`mtb-image-wrapper ${isEven ? 'zoom-in-left' : 'zoom-in-right'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mtb-feature-img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MasteringBasics;