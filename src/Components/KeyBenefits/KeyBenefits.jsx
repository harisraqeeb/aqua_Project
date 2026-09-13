import React from "react";
import "./KeyBenefits.css";

const benefitsData = [
  {
    id: 1,
    icon: "/Images/k1.svg", // Replace with your icon paths
    title: "Tailored Guidance",
    description: "Personalized plans to meet your learning style and goals",
  },
  {
    id: 2,
    icon: "/Images/k2.svg",
    title: "Expert Mentors",
    description: "Learn from industry professionals with proven success",
  },
  {
    id: 3,
    icon: "/Images/k3.svg",
    title: "Proven Results",
    description: "A 5/5-star rating and countless success stories",
  },
  {
    id: 4,
    icon: "/Images/k4.svg",
    title: "Interactive Community",
    description: "Engage with peers in dynamic, collaborative sessions",
  },
  {
    id: 5,
    icon: "/Images/k5.svg",
    title: "Rich Resources",
    description: "Access study materials, practice tests, and templates",
  },
  {
    id: 6,
    icon: "/Images/k6.svg",
    title: "Flexible Timing",
    description: "Study on your schedule with adaptable course options",
  },
  {
    id: 7,
    icon: "/Images/k7.svg",
    title: "Progress Tracking",
    description: "Monitor growth with regular assessments and feedback",
  },
  {
    id: 8,
    icon: "/Images/k8.svg",
    title: "24/7 Support",
    description: "Assistance whenever you need it, every step of the way",
  },
];

const KeyBenefits = () => {
  return (
    <section className="benefits-section">
      {/* Header Container */}
      <div className="benefits-header">
        <h2 className="benefits-title">
          The Key <span>Benefits</span> of Partnering with Us
        </h2>
        <p className="benefits-subtitle">
          Experience tailored support, expert guidance, and a proven track record of success to help you excel in your USMLE exams and residency applications
        </p>
      </div>

      {/* Grid Cards Container */}
      <div className="benefits-grid">
        {benefitsData.map((item) => (
          <div key={item.id} className="benefit-card">
            <div className="benefit-icon-wrapper">
              <img src={item.icon} alt={item.title}/>
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