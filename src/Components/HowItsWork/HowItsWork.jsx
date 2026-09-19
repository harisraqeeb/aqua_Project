import React, { useState, useEffect, useRef } from "react";
import "./HowItsWork.css";

const stepsData = [
  {
    id: 1,
    number: "01",
    title: "Choose Your Product",
    description:
      "Select your required water products—from 19L dispenser refill bottles, 12L handle bottles, or 1.5L and 500ml bottled water packs.",
  },
  {
    id: 2,
    number: "02",
    title: "Place Your Order",
    description:
      "Fill out our simple online order form or message us directly on WhatsApp with your location and preferred quantity.",
  },
  {
    id: 3,
    number: "03",
    title: "Confirm Delivery",
    description:
      "Our dispatch team verifies your address, confirms your preferred delivery slot, and assigns a dedicated delivery agent.",
  },
  {
    id: 4,
    number: "04",
    title: "Receive Your Water",
    description:
      "Enjoy prompt, hassle-free delivery of clean, sealed, and refreshing drinking water right to your home or office door.",
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

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const startOffset = windowHeight * 0.75;
      const endOffset = windowHeight * 0.25;

      if (sectionTop <= startOffset && rect.bottom >= endOffset) {
        const totalDistance = sectionHeight;
        const currentDistance = startOffset - sectionTop;
        
        const scrollProgress = Math.min(
          Math.max(currentDistance / totalDistance, 0),
          1
        );

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
        setActiveStep(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLineHeight = ((activeStep - 1) / (stepsData.length - 1)) * 100;

  return (
    <section className="how-its-work-section" ref={sectionRef} id="how-it-works">
      <div className="how-its-work-container">
        
        {/* Left Column */}
        <div className="how-left-content">
          <h2 className="how-title">
            How Aqua Clear <br />
            <span>Delivery</span> Works
          </h2>

          <p className="how-description">
            Getting crisp, purified drinking water delivered to your doorstep is fast, simple, and reliable. Follow our 4 easy steps to start enjoying pure hydration today.
          </p>

          <a href="#cta" className="how-btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            ORDER NOW
          </a>

          {/* Decorative Arrow SVG */}
          <div className="how-arrow-box">
            <img src="/Images/sucesserror.svg" alt="arrow" className="arrr"/>
          </div>
        </div>

        {/* Right Column Timeline */}
        <div className="how-timeline-container">
          
          {/* Base Line */}
          <div className="timeline-line-bg"></div>

          {/* Dynamic Active Line */}
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
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#0284C7", marginBottom: "4px" }}>
                      STEP {step.number}
                    </div>
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