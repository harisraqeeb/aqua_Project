import React from "react";
import "./PersonalStatement.css";

const PersonalStatement = () => {
  return (
    <section className="ps-section-box">
      {/* Left Column: Image */}
      <div className="ps-visual-container">
        <img
          src="/Images/s3.webp" // Image path yahan add karein
          alt="Personal Statement Guidance"
          className="ps-featured-image"
        />
      </div>

      {/* Right Column: Text Content */}
      <div className="ps-details-block">
        <h2 className="ps-main-heading">
          <span>Personal</span> Statement
        </h2>

        <p className="ps-body-text">
          Crafting an outstanding personal statement is essential for making a lasting impression on residency programs. While an average personal statement may not harm your application, a stellar one can significantly increase your chances of landing an interview.
        </p>

        <p className="ps-body-text">
          We work with you to create a statement that reflects your unique qualities and aspirations, helping you stand out from other candidates.
        </p>

        <p className="ps-body-text">
          Your mentor will guide you in writing a personal statement that showcases your personal identity, ties together your academic and professional story, sets you apart, addresses any weaknesses or gaps, and opens the door for interviews.
        </p>

        {/* Learn More Action Link */}
        <a href="#learn-more" className="ps-action-link">
          <span>Learn More</span>
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