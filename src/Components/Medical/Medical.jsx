import React, { useState, useRef } from "react";
import "./Medical.css";

const medicalData = [
  {
    id: 1,
    image: "/Images/m1.webp",
    category: "MEDICAL",
    date: "June 3, 2024",
    title: "How to Navigating Clinical Vignettes for USMLE",
    authorAvatar: "/Images/p1.webp",
    authorName: "Sean Maximin",
    authorRole: "Admin",
  },
  {
    id: 2,
    image: "/Images/m2.webp",
    category: "MEDICAL",
    date: "June 3, 2024",
    title: "Ultimate ERAS Application Submission Day Checklist",
    authorAvatar: "/Images/p2.webp",
    authorName: "Sean Maximin",
    authorRole: "Admin",
  },
  {
    id: 3,
    image: "/Images/m3.webp",
    category: "MEDICAL",
    date: "June 3, 2024",
    title: "Starting Dedicated for USMLE Step 1? Make a Stud...",
    authorAvatar: "/Images/p3.webp",
    authorName: "Sean Maximin",
    authorRole: "Admin",
  },
];

const Medical = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Swipe detection on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    // Minimum swipe threshold (50px)
    if (distance > 50 && activeIndex < medicalData.length - 1) {
      // Swipe left -> Next card
      setActiveIndex((prev) => prev + 1);
    } else if (distance < -50 && activeIndex > 0) {
      // Swipe right -> Previous card
      setActiveIndex((prev) => prev - 1);
    }

    // Reset touch coordinates
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="medical-section">
      {/* Header Section */}
      <div className="medical-header">
        <h2 className="medical-title">
          The <span>Medical</span> Student Hub
        </h2>
        <p className="medical-subtitle">
          Explore expert tips, success stories, and the latest updates in medical education to stay informed and inspired on your journey
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
          {medicalData.map((item) => (
            <div key={item.id} className="medical-card">
              
              {/* Main Featured Image */}
              <div className="card-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-main-img"
                />
              </div>

              {/* Meta Row */}
              <div className="card-meta">
                <span className="category-badge">{item.category}</span>
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
        {medicalData.map((_, index) => (
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