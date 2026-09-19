import React from 'react';
import './Consultation.css';

const stepsData = [
  {
    step: "01",
    title: "Product Selection",
    desc: "Choose from 19L dispenser bottles, 12L handle bottles, or 1.5L and 500ml bottled water packs.",
    image: "/Images/b19l.svg",
  },
  {
    step: "02",
    title: "Simple Order Placement",
    desc: "Submit your order details in seconds via our website form or instant WhatsApp chat.",
    image: "/Images/cons2.webp",
  },
  {
    step: "03",
    title: "Dispatch Confirmation",
    desc: "Our delivery dispatch team confirms your address and assigns a dedicated delivery vehicle.",
    image: "/Images/delivery_van.png",
  },
  {
    step: "04",
    title: "Doorstep Delivery & Refill",
    desc: "Enjoy fresh, sealed, high-purity drinking water delivered right to your home or office.",
    image: "/Images/hero_water.png",
  },
];

const Consultation = () => {
  return (
    <section className="cst-section-wrapper">
      <h2 className="cst-main-heading">
        Step-by-Step <span className="cst-highlight-text">Delivery Process</span>
      </h2>

      <div className="cst-steps-container">
        {stepsData.map((item, index) => {
          const animClass = index % 2 === 0 ? "zoom-in-left" : "zoom-in-right";
          return (
            <div key={item.step} className={`cst-step-card-wrapper ${animClass}`}>
              <div className="cst-step-card">
                <div className="cst-image-container" style={{ height: "140px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.image} alt={item.title} className="cst-card-img" style={{ maxHeight: "110px", width: "auto", objectFit: "contain" }} />
                  <span className="cst-step-badge">{item.step}</span>
                </div>
                <h3 className="cst-card-title">{item.title}</h3>
                <p className="cst-card-desc">{item.desc}</p>
              </div>

              {/* Absolute Arrow Connector */}
              {index < stepsData.length - 1 && (
                <div className={`cst-absolute-arrow cst-arrow-step-${index + 1}`}>
                  <img
                    src="/Images/consarrow.svg"
                    alt="connector arrow"
                    className="cst-arrow-img"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Consultation;