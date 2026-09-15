import React from 'react';
import './ClinicalMastery.css';

const clinicalData = [
  {
    id: 1,
    title: "Master Clinical Knowledge Areas",
    highlightWord: "Clinical",
    paragraphs: [
      "Step 2 requires you to demonstrate a strong understanding of clinical medicine, including internal medicine, pediatrics, surgery, psychiatry, obstetrics and gynecology, and more. We focus on high-yield clinical knowledge areas that are frequently tested, ensuring that you're well-prepared for the exam's clinical scenarios.",
      "Our team will work closely with you to enhance your knowledge of essential topics, ensuring you can approach clinical cases with confidence. We reinforce the key principles of disease pathophysiology, diagnosis, and treatment to ensure you're equipped with the knowledge."
    ],
    image: "/Images/core4.webp"
  },
  {
    id: 2,
    title: "Clinical Skills Application",
    highlightWord: "Skills",
    paragraphs: [
      "Beyond theory, Step 2 also tests your clinical skills in a practical, patient-centered context. We emphasize the importance of applying your knowledge in simulated clinical scenarios, practicing effective diagnostic reasoning, and making informed treatment decisions.",
      "Our tutors guide you through a range of clinical cases, helping you develop critical thinking skills that are essential for success. Through case-based learning, you'll be able to refine your skills in history-taking, physical examination, diagnosis, and treatment planning. By mastering these clinical skills, you'll be able to confidently handle the patient cases presented during Step 2."
    ],
    image: "/Images/core5.webp"
  },
  {
    id: 3,
    title: "Test-Taking Strategies for Step 2",
    highlightWord: "Step 2",
    paragraphs: [
      "Step 2 is a challenging exam, and performing well requires more than just knowledge. It involves effectively managing time, prioritizing tasks, and analyzing clinical vignettes to select the correct answers. We focus on developing proven test-taking strategies that will help you tackle even the most challenging.",
      "Techniques such as time management, identifying key information, and using clinical reasoning will allow you to approach each question with confidence. With regular practice and tailored guidance, you'll learn how to efficiently navigate the exam and approach questions with a clear, methodical thought process, ensuring you maximize your score."
    ],
    image:"/Images/core6.webp"
  }
];

const ClinicalMastery = () => {
  return (
    <section className="clm-section-wrapper">
      {/* Header Section */}
      <div className="clm-header-container">
        <span className="clm-step-badge">STEP 02</span>
        <h1 className="clm-main-heading">
          Clinical <span className="clm-highlight-text">Mastery</span>
        </h1>
        <p className="clm-header-subtext">
          Achieving clinical mastery is crucial for performing well on USMLE Step 2. Our tutoring focuses on honing your clinical knowledge and decision-making skills, covering common and high-yield clinical scenarios. We emphasize applying theoretical knowledge to real-world situations.
        </p>
      </div>

      {/* Map Loop Container (Gap 40px) */}
      <div className="clm-items-grid">
        {clinicalData.map((item, index) => {
          const isEven = index % 2 !== 0; // Zigzag alternate layout

          const titleParts = item.title.split(item.highlightWord);

          return (
            <div
              key={item.id}
              className={`clm-row-item ${isEven ? 'clm-row-reverse' : ''}`}
            >
              {/* Text Side (Gap between title & paragraphs) */}
              <div className="clm-text-content">
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
              <div className="clm-image-wrapper">
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