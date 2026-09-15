import React from 'react';
import './MasteringBasics.css';

const basicsData = [
  {
    id: 1,
    title: "Master Core Medical Concepts",
    highlightWord: "Concepts",
    paragraphs: [
      "Focus on mastering essential medical subjects such as anatomy, physiology, pathology, and pharmacology, as these are the cornerstone of your USMLE Step 1 preparation. A deep understanding of anatomy will help you grasp the structure and function of the human body, while physiology will enable you to comprehend the body's dynamic processes.",
      "Pathology is crucial for recognizing disease mechanisms and understanding how different conditions manifest, and pharmacology provides the knowledge you need to understand drug interactions, side effects, and treatment strategies."
    ],
    image: "/Images/core1.webp"
  },
  {
    id: 2,
    title: "Test-Taking Strategies",
    highlightWord: "Strategies",
    paragraphs: [
      "Reviewing high-yield topics that are frequently tested on the USMLE Step 1 is essential for maximizing your score. These topics represent the core concepts that are most likely to appear on the exam and include areas such as biochemistry, microbiology, immunology.",
      "Understanding these high-yield subjects not only helps you prioritize your study time but also ensures that you're well-prepared for the exam's most challenging sections. Alongside reviewing these key topics, applying proven test-taking strategies is crucial for excelling on Step 1. One of the most important strategies is effective time management; you must learn to pace yourself."
    ],
    image: "/Images/core2.webp"
  },
  {
    id: 3,
    title: "Personalized Study Plan",
    highlightWord: "Plan",
    paragraphs: [
      "Creating a customized study plan based on your individual strengths and weaknesses is crucial for effective preparation for the USMLE Step 1. Everyone has different areas of expertise and areas that need more attention, so a one-size-fits-all approach to studying simply doesn't work.",
      "That's why we begin by thoroughly assessing your knowledge in various subjects to identify where you excel and where you may need more focus. Once this is done, we craft a personalized study schedule that allocates more time to areas where you need improvement while still reinforcing your strengths. This approach helps you maximize your study efficiency and ensures that you're not spending unnecessary time on topics you already understand."
    ],
    image: "/Images/core3.webp"
  }
];

const MasteringBasics = () => {
  return (
    <section className="mtb-section-wrapper">
      {/* Header Section */}
      <div className="mtb-header-container">
        <span className="mtb-step-badge">STEP 01</span>
        <h1 className="mtb-main-heading">
          Mastering <span className="mtb-highlight-text">the Basics</span>
        </h1>
        <p className="mtb-header-subtext">
          Mastering the fundamental subjects is essential for success on the USMLE exams. Our tutoring focuses on key areas like anatomy, physiology, pharmacology, pathology, and biochemistry, ensuring you have a solid foundation to build upon.
        </p>
      </div>

      {/* Map Loop Container (Gap 40px) */}
      <div className="mtb-items-grid">
        {basicsData.map((item, index) => {
          const isEven = index % 2 !== 0; // Alternates layout direction

          // Split title to highlight specified word
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