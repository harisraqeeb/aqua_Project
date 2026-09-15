import React from 'react';
import './Boost.css';

const Boost = () => {
  return (
    <section className="bst-section-wrapper">
      {/* First Div: Text Section (Gap 80px) */}
      <div className="bst-header-container">
        <h2 className="bst-main-heading">
          Core Services to Boost Your  <span className="bst-highlight-text">Success</span>
        </h2>
        <p className="bst-header-description">
         Achieving your residency dreams starts with the right support. Our comprehensive services are designed to guide you through every step of the process, from perfecting your ERAS application to nailing your interview
        </p>
      </div>

      {/* Second Div: Content & Image Grid (Gap 80px) */}
      <div className="bst-content-container">
        {/* Left Side: Image */}
        <div className="bst-image-wrapper zoom-in-left">
          <img
            src="/Images/Boost1.webp"
            alt="Residency Application Boost"
            className="bst-feature-image"
          />
        </div>

        {/* Right Side: 2x2 Cards Grid (Width 662px, Height 538px, Gap 24px) */}
        <div className="bst-cards-grid zoom-in-right">
          {/* Card 1 */}
          <div className="bst-card">
            <img src="/Images/Boost2.svg" alt="Icon" className="bst-card-icon" />
            <h3 className="bst-card-title">Application Review</h3>
            <p className="bst-card-desc">
              Your mentor will meticulously review and edit your ERAS application to ensure it’s polished, error-free, and tailored to your specialty
            </p>
          </div>

          {/* Card 2 (Dark Theme - Second Daba) */}
          <div className="bst-card bst-card-dark">
            <img src="/Images/Boost3.svg" alt="Icon" className="bst-card-icon" />
            <h3 className="bst-card-title">Personal Statement</h3>
            <p className="bst-card-desc">
             Create a personal statement that showcases your unique qualities, goals, and aspirations. Stand out from other applicants
            </p>
          </div>

          {/* Card 3 */}
          <div className="bst-card">
            <img src="/Images/Boost4.svg" alt="Icon" className="bst-card-icon" />
            <h3 className="bst-card-title">Interview Prep</h3>
            <p className="bst-card-desc">
             Ace your residency interviews with confidence. We prepare you for common questions and help you present your best self to program 
            </p>
          </div>

          {/* Card 4 */}
          <div className="bst-card">
            <img src="/Images/Boost5.svg" alt="Icon" className="bst-card-icon" />
            <h3 className="bst-card-title">Timely Help</h3>
            <p className="bst-card-desc">
             Stay on track with our dedicated support. We ensure you meet every deadline stress-free, paving the way for a smooth residency application
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boost;