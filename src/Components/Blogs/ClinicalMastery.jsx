import React from 'react';
import './ClinicalMastery.css';

const clinicalData = [
  {
    id: 1,
    title: "Daily Energy & Mental Focus",
    highlightWord: "Energy",
    paragraphs: [
      "Even mild dehydration of 1-2% can reduce concentration, memory retention, and physical energy levels. Consuming purified mineral-balanced water throughout the workday maintains peak cognitive focus and combats fatigue.",
      "Aqua Clear provides crisp, clean drinking water that encourages constant hydration for office employees, students, and active families."
    ],
    image: "/Images/hero_water.png"
  },
  {
    id: 2,
    title: "Eco-Conscious Bottle Recycling",
    highlightWord: "Eco-Conscious",
    paragraphs: [
      "Our 19L and 12L multi-use dispenser bottles are washed, sanitized, and reused up to 50 times in a closed-loop eco-friendly lifecycle before being responsibly recycled.",
      "By choosing Aqua Clear dispenser refills, homes and corporate offices significantly reduce single-use plastic waste while enjoying premium quality water."
    ],
    image: "/Images/delivery_van.png"
  },
  {
    id: 3,
    title: "Convenient Subscription Delivery",
    highlightWord: "Subscription",
    paragraphs: [
      "No more heavy grocery store carrying or emergency store runs. Aqua Clear offers flexible weekly and monthly subscription plans tailored to your consumption volume.",
      "Our dedicated logistics team delivers sealed refill bottles directly into your kitchen, breakroom, or storage area with zero effort on your part."
    ],
    image: "/Images/c3.png"
  }
];

const ClinicalMastery = () => {
  return (
    <section className="clm-section-wrapper">
      {/* Header Section */}
      <div className="clm-header-container">
        <span className="clm-step-badge">WORKPLACE WELLNESS</span>
        <h1 className="clm-main-heading">
          Hydration &amp; <span className="clm-highlight-text">Workplace Wellness</span>
        </h1>
        <p className="clm-header-subtext">
          Discover how clean, mineral-balanced drinking water enhances daily energy, mental focus, and overall well-being at home and in corporate environments.
        </p>
      </div>

      {/* Map Loop Container */}
      <div className="clm-items-grid">
        {clinicalData.map((item, index) => {
          const isEven = index % 2 !== 0;

          const titleParts = item.title.split(item.highlightWord);

          return (
            <div
              key={item.id}
              className={`clm-row-item ${isEven ? 'clm-row-reverse' : ''}`}
            >
              {/* Text Side (Gap between title & paragraphs) */}
              <div className={`clm-text-content ${isEven ? 'zoom-in-right' : 'zoom-in-left'}`}>
                <h2 className="clm-item-title">
                  {titleParts[0]}
                  <span className="clm-highlight-text">{item.highlightWord}</span>
                  {titleParts[1]}
                </h2>
                <div className="clm-paragraphs-wrapper">
                  {item.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="clm-item-desc">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className={`clm-image-wrapper ${isEven ? 'zoom-in-left' : 'zoom-in-right'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="clm-feature-img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClinicalMastery;