import React from "react";
import "./ResidencyMatch.css";

const ResidencyMatch = () => {
  return (
    <section className="residency-wrapper">
      {/* Left Column: Text Content */}
      <div className="residency-info">
        <h2 className="residency-title">
          Residency & <span>Match</span>
        </h2>

        <p className="residency-text">
          Our ERAS application services offer a variety of essential offerings designed to maximize your chances for success. We begin with ERAS Application Review and Editing, where your mentor will carefully review and refine your application to ensure it is error-free and tailored to your specialty, making a strong impression on program directors.
        </p>

        <p className="residency-text">
          Next, we focus on your Personal Statement Review and Editing. Together, we'll craft a statement that reflects your true qualities and aspirations, helping you stand out among other applicants and making your statement a key factor in landing interviews.
        </p>

        <p className="residency-text">
          Finally, our Interview Preparation ensures that you're ready for the most commonly asked questions. We help you articulate your thoughts clearly, so you can confidently present yourself and show programs who you truly are.
        </p>

        {/* Learn More Link with Arrow */}
        <a href="#learn-more" className="residency-cta-link">
          <span>Learn More</span>
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
          src="/Images/ser2.webp" // Apna image path yahan dabein
          alt="Residency & Match Guidance"
          className="residency-banner-img"
        />
      </div>
    </section>
  );
};

export default ResidencyMatch;