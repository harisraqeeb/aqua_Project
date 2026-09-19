import React, { useState, useEffect } from "react";
import "./Success.css";

const successData = [
  {
    id: 1,
    image: "/Images/happy_client_office.png",
    badge: "Corporate Client",
    stars: 5,
    description:
      "Aqua Clear completely transformed our workplace hydration. We get 25 pure 19L dispenser refill bottles delivered twice weekly. Automated invoicing, computerized tracking, and friendly drivers make it 100% hassle-free!",
    name: "Sarah Ahmed",
    role: "Operations Director, Tech Hub Solutions",
    videoUrl: "https://www.youtube.com/embed/uj3OARSSnYo?autoplay=1&rel=0",
  },
  {
    id: 2,
    image: "/Images/happy_client_home.png",
    badge: "Residential Client",
    stars: 5,
    description:
      "As a doctor and a mother, water purity is my top priority. Aqua Clear's 9-stage RO and UV sterilization certification gives me complete peace of mind. The water has a crisp, refreshing natural taste that my kids love!",
    name: "Dr. Maria Farooq",
    role: "Pediatrician & Mother of 3, DHA Phase 5",
    videoUrl: "https://www.youtube.com/embed/BXHIWla7iIg?autoplay=1&rel=0",
  },
  {
    id: 3,
    image: "/Images/happy_client_event.png",
    badge: "Event Partner",
    stars: 5,
    description:
      "For our international corporate summit with 500+ attendees, Aqua Clear delivered 3,000 chilled 500ml bottles right to the venue on schedule. Exceptional quality, elegant packaging, and flawless service!",
    name: "Ayesha Khan",
    role: "Senior Event Director, Royale Conventions",
    videoUrl: "https://www.youtube.com/embed/G9nHOIRGgiQ?autoplay=1&rel=0",
  },
  {
    id: 4,
    image: "/Images/delivery_van.png",
    badge: "Hospitality Partner",
    stars: 5,
    description:
      "The speed and punctuality of Aqua Clear delivery vehicles is outstanding. Our hotel relies on them daily for high-volume 19L dispenser refills and 1.5L dining table bottles.",
    name: "Shahid Rafiq",
    role: "Logistics Manager, Grand Hotel & Suites",
    videoUrl: "https://www.youtube.com/embed/uj3OARSSnYo?autoplay=1&rel=0&start=60",
  },
];

const Success = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [currentIndex]);

  const currentItem = successData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === successData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? successData.length - 1 : prevIndex - 1
    );
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="success-section" id="client-stories">
      {/* Heading */}
      <h2 className="success-title">
        Hear from Our <span>Clients</span>
      </h2>

      {/* Main testimonial */}
      <div className="success-wrapper">
        {/* Left Arrow */}
        <button
          className="success-arrow success-arrow-left"
          onClick={handlePrev}
          aria-label="Previous Testimonial"
        >
          <img src="/Images/left.svg" alt="Previous" />
        </button>

        {/* Image & Video Container */}
        <div className="success-image-box">
          {/* Badge */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              background: "rgba(2, 132, 199, 0.9)",
              backdropFilter: "blur(6px)",
              color: "#FFF",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
              zIndex: 4,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            {currentItem.badge}
          </div>

          {isVideoPlaying ? (
            <iframe
              src={currentItem.videoUrl}
              className="success-image"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              title={`${currentItem.name} video testimonial`}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <>
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="success-image"
              />

              {/* Play Button */}
              <button
                className="success-play"
                onClick={handlePlayVideo}
                aria-label="Play Client Video Testimonial"
                title="Watch Video Review"
              >
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M17.5 10.13C18.17 10.52 18.17 11.48 17.5 11.87L7.75 17.5C7.08 17.89 6.25 17.41 6.25 16.63V5.37C6.25 4.59 7.08 4.11 7.75 4.5L17.5 10.13Z"
                    fill="#0284C7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Testimonial Content */}
        <div className="success-content">
          {/* Quote Icon */}
          <div className="quote-icon">
            <img src="/Images/quoteicon.svg" alt="Quote" />
          </div>

          {/* Stars */}
          <div className="success-stars">
            {[...Array(currentItem.stars)].map((_, i) => (
              <img
                key={i}
                src="/Images/star.svg"
                alt="Star"
                className="star"
                style={{ width: "22px", height: "22px" }}
              />
            ))}
          </div>

          {/* Description */}
          <p className="success-description">{currentItem.description}</p>

          {/* Person Details */}
          <div className="success-person">
            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#161D46", margin: "0 0 4px 0" }}>
              {currentItem.name}
            </h3>
            <p style={{ fontSize: "15px", color: "#0284C7", fontWeight: "500", margin: 0 }}>
              {currentItem.role}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="success-arrow success-arrow-right"
          onClick={handleNext}
          aria-label="Next Testimonial"
        >
          <img src="/Images/right.svg" alt="Next" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="success-dots">
        {successData.map((_, index) => (
          <span
            key={index}
            className={`success-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Success;