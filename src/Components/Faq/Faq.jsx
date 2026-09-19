import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    id: 1,
    question: "What types of drinking water and bottle sizes are available?",
    answer:
      "Aqua Clear provides 19L (5-Gallon) dispenser refill bottles, 12L (3-Gallon) handle bottles, 1.5L everyday family bottles, and 500ml single-serve bottles for meetings and events.",
  },
  {
    id: 2,
    question: "Do you deliver water to homes and residential locations?",
    answer:
      "Yes! We offer prompt doorstep delivery to houses, apartments, and residential communities with flexible delivery slots to fit your daily schedule.",
  },
  {
    id: 3,
    question: "Do you provide water solutions for offices and commercial businesses?",
    answer:
      "Absolutely. We supply corporate offices, commercial facilities, clinics, and banks with regular 19L dispenser refills, dispenser maintenance, and dedicated account support.",
  },
  {
    id: 4,
    question: "How can I place an order with Aqua Clear?",
    answer:
      "You can place an order in seconds using our online order form above, or click the WhatsApp button to message our customer service team directly.",
  },
  {
    id: 5,
    question: "Can I schedule regular recurring water deliveries?",
    answer:
      "Yes, we offer convenient weekly, bi-weekly, or monthly delivery schedules so you never run out of fresh drinking water.",
  },
  {
    id: 6,
    question: "Do you supply bulk water for corporate events and functions?",
    answer:
      "Yes, we provide bulk supply packages of 500ml and 1.5L bottled water for corporate events, sports gatherings, weddings, and conferences with advance booking.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Left Section */}
        <div className="faq-left zoom-in-left">
          <h2 className="faq-title">
            Got Questions? <br />
            We’ve Got <span>Answers</span>
          </h2>
          <p className="faq-desc">
            Find answers to the most common questions about Aqua Clear drinking water, multi-barrier purification, delivery schedules, and ordering options.
          </p>
          <a
            href="#cta"
            className="faq-cta-btn"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
          >
            ORDER NOW
          </a>
        </div>

        {/* Right Section */}
        <div className="faq-right zoom-in-right">
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