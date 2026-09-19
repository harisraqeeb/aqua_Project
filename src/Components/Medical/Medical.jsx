import React, { useState, useRef } from "react";
import "./Medical.css";

const hydrationData = [
  {
    id: 1,
    image: "/Images/hero_water.png",
    category: "PURITY & HEALTH",
    date: "September 2026",
    title: "Understanding 9-Stage Purification & Essential Mineral Balance",
    authorAvatar: "/Images/p1.webp",
    authorName: "Aqua Clear Quality Lab",
    authorRole: "Hydration Specialist",
  },
  {
    id: 2,
    image: "/Images/delivery_van.png",
    category: "OFFICE WELLNESS",
    date: "September 2026",
    title: "Why Clean Water Increases Corporate Workplace Productivity",
    authorAvatar: "/Images/p2.webp",
    authorName: "Aqua Clear Operations",
    authorRole: "Logistics Team",
  },
  {
    id: 3,
    image: "/Images/hydration_glass.png",
    category: "HYDRATION TIPS",
    date: "September 2026",
    title: "Daily Hydration Guidelines: How Much Pure Water Do You Need?",
    authorAvatar: "/Images/p3.webp",
    authorName: "Aqua Clear Wellness",
    authorRole: "Health Advisor",
  },
];

const Medical = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50 && activeIndex < hydrationData.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (distance < -50 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="medical-section" id="quality">
      {/* Header Section */}
      <div className="medical-header">
        <h2 className="medical-title">
          The <span>Aqua Clear</span> Hydration Hub
        </h2>
        <p className="medical-subtitle">
          Explore expert hydration advice, water quality standards, and healthy living insights to keep your family and workplace energized.
        </p>
      </div>

      {/* Cards Slider Outer Box */}
      <div 
        className="medical-cards-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="medical-cards-wrapper"
          style={{ "--active-index": activeIndex }}
        >
          {hydrationData.map((item) => (
            <div key={item.id} className="medical-card">
              {/* Main Featured Image */}
              <div className="card-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-main-img"
                  style={{ objectFit: "cover", width: "100%", height: "200px" }}
                />
              </div>

              {/* Meta Row */}
              <div className="card-meta">
                <span className="category-badge" style={{ background: "#0284C7", color: "#FFF" }}>{item.category}</span>
                <span className="card-date">{item.date}</span>
              </div>

              {/* Card Title */}
              <h3 className="card-title">{item.title}</h3>

              {/* Author Section */}
              <div className="card-author">
                <img
                  src={item.authorAvatar}
                  alt={item.authorName}
                  className="author-avatar-icon"
                />
                <div className="author-details">
                  <span className="author-names">{item.authorName}</span>
                  <span className="author-roles">{item.authorRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="medical-dots">
        {hydrationData.map((_, index) => (
          <span
            key={index}
            className={`medical-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Medical;