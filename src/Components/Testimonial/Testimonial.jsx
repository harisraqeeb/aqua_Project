import React from "react";
import "./Testimonial.css";

const col1Data = [
  {
    id: 1,
    avatar: "/Images/p1.webp",
    name: "Tariq Mahmood",
    role: "Home Owner, DHA Phase 6",
    quote: "Aqua Clear has been supplying 19L dispenser bottles for our family for over a year. The water is crisp, taste is pure, and delivery is always on time!",
    stars: 5,
  },
  {
    id: 2,
    avatar: "/Images/p2.webp",
    name: "Sarah Ahmed",
    role: "HR Director, Tech Hub",
    quote: "We order 20+ dispenser bottles weekly for our office staff. Aqua Clear handles our subscription seamlessly with computerized invoicing and friendly drivers.",
    stars: 5,
  },
  {
    id: 3,
    avatar: "/Images/p3.webp",
    name: "Hamza Malik",
    role: "Fitness Trainer",
    quote: "Hydration is key to fitness. I recommend Aqua Clear 1.5L bottles to all my gym clients because of its clean taste and essential mineral balance.",
    stars: 5,
  },
];

const col2Data = [
  {
    id: 4,
    avatar: "/Images/p4.webp",
    name: "Ayesha Khan",
    role: "Event Planner, Royale Events",
    quote: "We ordered 500ml custom-labeled bottles for a corporate conference. Aqua Clear delivered chilled bottles right on schedule. Exceptional service!",
    stars: 5,
  },
  {
    id: 5,
    avatar: "/Images/p5.webp",
    name: "Dr. Bilal Siddiqui",
    role: "Medical Clinic Director",
    quote: "In a medical clinic, water purity is non-negotiable. Aqua Clear's 9-stage filtration certification gives us 100% confidence for patient care.",
    stars: 5,
  },
  {
    id: 6,
    avatar: "/Images/p6.webp",
    name: "Zainab Usman",
    role: "Resident",
    quote: "The 12L handle bottles are super easy to lift and position on our kitchen counter. Best customer support and instant WhatsApp order tracking!",
    stars: 5,
  },
];

const col3Data = [
  {
    id: 7,
    avatar: "/Images/p7.webp",
    name: "Kamran Hassan",
    role: "Restaurant Manager",
    quote: "Our dining guests frequently compliment the water quality. Aqua Clear keeps our restaurant supplied every morning without fail.",
    stars: 5,
  },
  {
    id: 8,
    avatar: "/Images/p8.webp",
    name: "Farhan Saeed",
    role: "Commercial Buyer",
    quote: "Reliable, transparent pricing and polite delivery agents. Aqua Clear is the most professional water delivery partner in the city.",
    stars: 5,
  },
  {
    id: 9,
    avatar: "/Images/p9.webp",
    name: "Nida Fatima",
    role: "Apartment Community Lead",
    quote: "Aqua Clear delivers to all 40 units in our building twice a week. Super smooth coordination and top quality drinking water.",
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
          Trusted by Thousands of <span>Homes</span> &amp; <span>Offices</span>
        </h2>
        <p className="testimonial-subtitle">
          Read what our valued residential and corporate customers say about Aqua Clear's water purity, prompt delivery, and outstanding service.
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