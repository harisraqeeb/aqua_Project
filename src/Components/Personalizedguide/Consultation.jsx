import React from 'react';
import './Consultation.css';

const stepsData = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Begin with a one-on-one consultation to understand your goals, strengths, and specialty preferences, laying the foundation for strategy",
    image: "/Images/cons1.svg",
  },
  {
    step: "02",
    title: "Application Crafting",
    desc: "Work closely with your mentor to draft a standout personal statement and refine your ERAS application, ensuring both are polished",
    image: "/Images/cons2.svg",
  },
  {
    step: "03",
    title: "Interview Coaching",
    desc: "Receive expert guidance on answering common and specialty-specific interview questions, building confidence for your big day",
    image: "/Images/cons3.svg",
  },
  {
    step: "04",
    title: "Ongoing Support",
    desc: "Stay on track with continuous assistance, deadline reminders, and advice throughout your residency application process",
    image: "/Images/cons4.svg",
  },
];

const Consultation = () => {
  return (
    <section className="cst-section-wrapper">
      <h2 className="cst-main-heading">
        Step-by-Step <span className="cst-highlight-text">Process</span>
      </h2>

      <div className="cst-steps-container">
        {stepsData.map((item, index) => (
          <div key={item.step} className="cst-step-card-wrapper">
            <div className="cst-step-card">
              <div className="cst-image-container">
                <img src={item.image} alt={item.title} className="cst-card-img" />
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
        ))}
      </div>
    </section>
  );
};

export default Consultation;