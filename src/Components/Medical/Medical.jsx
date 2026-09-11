import React from "react";
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

      {/* Cards Wrapper Container */}
      <div className="medical-cards-wrapper">
        {medicalData.map((item) => (
          <div key={item.id} className="medical-card">
            
            {/* Main Featured Image: 397.33px * 250px */}
            <div className="card-image-box">
              <img
                src={item.image}
                alt={item.title}
                className="card-main-img"
              />
            </div>

            {/* Meta Row: Badge & Date */}
            <div className="card-meta">
              <span className="category-badge">{item.category}</span>
              <span className="card-date">{item.date}</span>
            </div>

            {/* Card Title */}
            <h3 className="card-title">{item.title}</h3>

            {/* Author Footer: Avatar Icon (51px * 51px) & Details */}
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
    </section>
  );
};

export default Medical;