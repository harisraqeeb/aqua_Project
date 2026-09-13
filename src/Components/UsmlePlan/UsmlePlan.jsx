import React from "react";
import "./UsmlePlan.css";

const UsmlePlan = () => {
  return (
    <section className="usmle-container">
      {/* Left Column: Image */}
      <div className="usmle-image-wrapper">
        <img
          src="/Images/ser1.webp" // Image path yahan add karein
          alt="USMLE Preparation Team"
          className="usmle-image"
        />
      </div>

      {/* Right Column: Content */}
      <div className="usmle-content">
        <h2 className="usmle-heading">
          <span>USMLE</span> Success Plan
        </h2>

        <p className="usmle-paragraph">
          Our team of experienced USMLE tutors is dedicated to helping you excel in both USMLE Step 1 and Step 2, ensuring you're well-prepared to embark on your medical career with confidence. We cover essential foundational knowledge and high-yield principles, including subjects like anatomy, physiology, biochemistry, and microbiology.
        </p>

        <p className="usmle-paragraph">
          This solid foundation is critical for developing clinical reasoning and diagnostic skills. In addition, we focus on test-taking strategies, helping you manage time, analyze questions, and approach challenging ones effectively. By practicing these strategies, you'll improve your performance and gain the confidence needed to succeed on the exams.
        </p>

        {/* Learn More Link with Arrow */}
        <a href="#learn-more" className="usmle-link">
          <span>Learn More</span>
          <svg
            className="usmle-arrow"
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

export default UsmlePlan;