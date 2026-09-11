import React, { useState, useEffect, useRef } from "react";
import "./HowItsWork.css";

const stepsData = [
  {
    id: 1,
    title: "Schedule a Free Consultation",
    description:
      "Take the first step towards achieving your aspirations by discussing your goals and challenges with our expert advisors. Our team of seasoned professionals will work closely with you to create a personalized plan tailored to your unique needs and objectives",
  },
  {
    id: 2,
    title: "Get Matched with Your Tutor",
    description:
      "Unlock your full potential and achieve success in the USMLE exams with our personalized tutoring services. We connect you with a specialized USMLE tutor who understands your unique needs, aspirations, and learning style",
  },
  {
    id: 3,
    title: "Begin Your Personalized Tutoring",
    description:
      "Transform your studying with a tailored approach that maximizes your potential. Our customized study plan is designed to help you achieve your goals by focusing on your strengths and addressing your areas for improvement.",
  },
  {
    id: 4,
    title: "Master the Exam & Residency Match",
    description:
      "Unlock your full potential and achieve success in the USMLE exams and residency match with our expert guidance and comprehensive support. Our team of experienced professionals is dedicated to helping you navigate the complex",
  },
];

const HowItsWork = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section top & bottom bounds calculation
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Jab section viewport ke andar aaye tab hi start hoga (Top threshold trigger)
      const startOffset = windowHeight * 0.75; // Screen ke middle/bottom par enter hotay hi start
      const endOffset = windowHeight * 0.25;

      if (sectionTop <= startOffset && rect.bottom >= endOffset) {
        // Calculate exact progress (0 to 1) relative to section position
        const totalDistance = sectionHeight;
        const currentDistance = startOffset - sectionTop;
        
        const scrollProgress = Math.min(
          Math.max(currentDistance / totalDistance, 0),
          1
        );

        // Smoothly step mapping
        if (scrollProgress < 0.2) {
          setActiveStep(1);
        } else if (scrollProgress >= 0.2 && scrollProgress < 0.45) {
          setActiveStep(2);
        } else if (scrollProgress >= 0.45 && scrollProgress < 0.7) {
          setActiveStep(3);
        } else if (scrollProgress >= 0.7) {
          setActiveStep(4);
        }
      } else if (sectionTop > startOffset) {
        // Jab user upar ho section se, tab hamesha Step 1 par reset rahe
        setActiveStep(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic line height percentage
  const activeLineHeight = ((activeStep - 1) / (stepsData.length - 1)) * 100;

  return (
    <section className="how-its-work-section" ref={sectionRef}>
      <div className="how-its-work-container">
        
        {/* Left Column */}
        <div className="how-left-content">
          <h2 className="how-title">
            How Your Path to USMLE <br />
            <span>Success</span> is Tailored
          </h2>

          <p className="how-description">
            Our proven process is designed to help you excel in USMLE exams
            and secure your residency match. With personalized guidance and
            expert support, success is just a few steps away.
          </p>

          <button className="how-btn">CTA here</button>

          {/* Decorative Arrow SVG */}
          <div className="how-arrow-box">
            <img src="/public/Images/sucesserror.svg" alt="arrow" className="arrr"/>
        
          </div>
        </div>

        {/* Right Column Timeline */}
        <div className="how-timeline-container">
          
          {/* Base Gray Line */}
          <div className="timeline-line-bg"></div>

          {/* Dynamic Animated Gradient Line */}
          <div
            className="timeline-line-active"
            style={{
              height: `${activeLineHeight}%`,
            }}
          ></div>

          {/* Steps List */}
          <div className="timeline-steps">
            {stepsData.map((step) => {
              const isActive = step.id <= activeStep;
              const isCurrent = step.id === activeStep;

              return (
                <div
                  key={step.id}
                  className="timeline-step-item"
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Step Dot */}
                  <div
                    className={`step-dot ${isActive ? "dot-active" : ""}`}
                  ></div>

                  {/* Step Text Content */}
                  <div className="step-text-content">
                    <h3
                      className={`step-title ${
                        isCurrent ? "title-active" : ""
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="step-desc">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItsWork;