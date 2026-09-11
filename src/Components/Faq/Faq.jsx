import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit eros, tempor in mi et, congue placerat dui. Nullam in mi.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, conelit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit eros, tempor in mi et, congue placerat dui.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit eros, tempor in mi et, congue placerat dui. Nullam in mi",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit eros, tempor in mi et, congue placerat dui.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet, conelit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit eros, tempor in mi et, congue placerat dui.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(3);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* Left Section */}
        <div className="faq-left">
          <h2 className="faq-title">
            Got Questions? <br />
            We’ve Got <span>Answers</span>
          </h2>
          <p className="faq-desc">
            Find answers to the most common questions about our services, tutoring process, and how we can help you succeed in your USMLE journey.
          </p>
          <button className="faq-cta-btn">CTA here</button>
        </div>

        {/* Right Section */}
        <div className="faq-right">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => toggleFaq(item.id)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{item.question}</h3>
                  <div className="faq-icon-box">
                    <svg
                      className={`faq-arrow-icon ${isOpen ? "rotate" : ""}`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#161D46"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Ultra Smooth Collapsible Wrapper */}
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;