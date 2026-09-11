import React from "react";
import "./Testimonial.css";

const col1Data = [
  {
    id: 1,
    avatar: "/Images/p1.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    stars: 5,
  },
  {
    id: 2,
    avatar: "/Images/p2.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stars: 5,
  },
  {
    id: 3,
    avatar: "/Images/p3.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    stars: 4,
  },
];

const col2Data = [
  {
    id: 4,
    avatar: "/Images/p4.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stars: 5,
  },
  {
    id: 5,
    avatar: "/Images/p5.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    stars: 5,
  },
  {
    id: 6,
    avatar: "/Images/p6.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    stars: 4,
  },
];

const col3Data = [
  {
    id: 7,
    avatar: "/Images/p7.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    stars: 5,
  },
  {
    id: 8,
    avatar: "/Images/p8.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    stars: 5,
  },
  {
    id: 9,
    avatar: "/Images/p9.webp",
    name: "Eben Pingree",
    role: "Cofounder at Kinsome",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stars: 5,
  },
];

const Testimonial = () => {
  const renderCards = (data) =>
    data.map((item) => (
      <div key={item.id} className="testimonial-card">
        <div className="card-author-header">
          <img src={item.avatar} alt={item.name} className="card-avatar" />
          <div className="card-author-info">
            <h3 className="author-name">{item.name}</h3>
            <p className="author-role">{item.role}</p>
          </div>
        </div>
        <p className="card-quote">{item.quote}</p>
        <div className="card-stars">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src="/Images/star.svg"
              alt="Star"
              className={`card-star-icon ${i >= item.stars ? "star-grey" : ""}`}
            />
          ))}
        </div>
      </div>
    ));

  return (
    <section className="testimonial-section">
      {/* 1st Child: Header */}
      <div className="testimonial-header">
        <h2 className="testimonial-title">
          What Our <span>Students</span> Say
        </h2>
        <p className="testimonial-subtitle">
          Hear from students who achieved success with our expert guidance.
        </p>
      </div>

      {/* 2nd Child: Moving Columns Container */}
      <div className="testimonial-cards-wrapper">
        {/* Column 1 (Scroll Up) */}
        <div className="testimonial-col scroll-up">
          <div className="col-track">
            {renderCards(col1Data)}
            {/* Seamless Infinite Loop Clone */}
            {renderCards(col1Data)}
          </div>
        </div>

        {/* Column 2 (Scroll Down) */}
        <div className="testimonial-col scroll-down">
          <div className="col-track">
            {renderCards(col2Data)}
            {/* Seamless Infinite Loop Clone */}
            {renderCards(col2Data)}
          </div>
        </div>

        {/* Column 3 (Scroll Up) */}
        <div className="testimonial-col scroll-up">
          <div className="col-track">
            {renderCards(col3Data)}
            {/* Seamless Infinite Loop Clone */}
            {renderCards(col3Data)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;