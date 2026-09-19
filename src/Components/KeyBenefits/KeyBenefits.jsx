import React from "react";
import "./KeyBenefits.css";

const benefitsData = [
  {
    id: 1,
    icon: "/Images/purity_badge.svg",
    title: "9-Stage Purification",
    description: "Reverse osmosis, ozonation, and UV sterilization for complete purity.",
  },
  {
    id: 2,
    icon: "/Images/b19l.svg",
    title: "Eco-Friendly Bottles",
    description: "BPA-free food grade high-durability recyclable water bottles.",
  },
  {
    id: 3,
    icon: "/Images/purity_badge.svg",
    title: "Guaranteed Slots",
    description: "On-time doorstep delivery for residential and office schedules.",
  },
  {
    id: 4,
    icon: "/Images/purity_badge.svg",
    title: "Lab Certified Purity",
    description: "Regular third-party microbiological and mineral laboratory testing.",
  },
  {
    id: 5,
    icon: "/Images/b12l.svg",
    title: "Dispenser Support",
    description: "Dispenser sanitization and replacement support for office partners.",
  },
  {
    id: 6,
    icon: "/Images/b1_5l.svg",
    title: "Flexible Subscriptions",
    description: "Automated weekly or monthly delivery refills with easy pause options.",
  },
  {
    id: 7,
    icon: "/Images/b500ml.svg",
    title: "Corporate Bulk Supply",
    description: "Customized event bottled water supply for conferences and weddings.",
  },
  {
    id: 8,
    icon: "/Images/purity_badge.svg",
    title: "24/7 WhatsApp Ordering",
    description: "Instant order placement, address updates, and delivery tracking.",
  },
];

const KeyBenefits = () => {
  return (
    <section className="benefits-section">
      {/* Header Container */}
      <div className="benefits-header">
        <h2 className="benefits-title">
          The Key <span>Benefits</span> of Choosing Aqua Clear
        </h2>
        <p className="benefits-subtitle">
          Experience unmatched water purity, guaranteed delivery timing, and dedicated customer support for all your residential and corporate hydration needs.
        </p>
      </div>

      {/* Grid Cards Container */}
      <div className="benefits-grid">
        {benefitsData.map((item) => (
          <div key={item.id} className="benefit-card">
            <div className="benefit-icon-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={item.icon} alt={item.title} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
            </div>
            <h3 className="benefit-card-title">{item.title}</h3>
            <p className="benefit-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyBenefits;