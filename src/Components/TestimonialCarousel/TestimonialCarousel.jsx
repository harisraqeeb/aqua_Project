import React, { useState } from "react";
import "./TestimonialCarousel.css";

const clientData = [
  {
    id: 1,
    name: "Steve",
    company: "Steve's HVAC Crew",
    image: "/Images/c1.webp",
    video: "/Videos/v1.mp4", // Apna video path yahan dein
    rating: 5,
  },
  {
    id: 2,
    name: "Olivia",
    company: "Sunny Days Landscaping",
    image: "/Images/c2.webp",
    video: "/Videos/v2.mp4",
    rating: 5,
  },
  {
    id: 3,
    name: "Drew",
    company: "Aqua Splash Pools",
    image: "/Images/Video.png",
    video: "/Videos/v3.mp4",
    rating: 5,
  },
  {
    id: 4,
    name: "Luka",
    company: "Mighty Roofers",
    image: "/Images/c3.webp",
    video: "/Videos/v4.mp4",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily",
    company: "Gleam Cleaners",
    image: "/Images/c4.webp",
    video: "/Videos/v5.mp4",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Center card (Drew)
  const [isPlaying, setIsPlaying] = useState(false);  // Video playing state

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? clientData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setActiveIndex((prev) => (prev === clientData.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index) => {
    if (index !== activeIndex) {
      setIsPlaying(false);
      setActiveIndex(index);
    }
  };

  const getCardClass = (index) => {
    const diff = index - activeIndex;

    if (diff === 0) return "card-center";
    if (diff === -1 || diff === clientData.length - 1) return "card-left-1";
    if (diff === -2 || diff === clientData.length - 2) return "card-left-2";
    if (diff === 1 || diff === -(clientData.length - 1)) return "card-right-1";
    if (diff === 2 || diff === -(clientData.length - 2)) return "card-right-2";
    return "card-hidden";
  };

  return (
    <section className="client-carousel-wrapper">
      <h2 className="carousel-heading">
        Hear from Our <span>Clients</span>
      </h2>

      <div className="carousel-stage">
        {clientData.map((client, index) => {
          const cardClass = getCardClass(index);
          const isCenter = cardClass === "card-center";

          return (
            <div
              key={client.id}
              className={`carousel-card ${cardClass}`}
              onClick={() => handleCardClick(index)}
            >
              {/* Media Swap Logic: Center Card & Playing State */}
              {isCenter && isPlaying ? (
                <video
                  src={client.video}
                  className="card-video"
                  controls
                  autoPlay
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                <img
                  src={client.image}
                  alt={`${client.name}, ${client.company}`}
                  className="card-image"
                />
              )}

              {/* Overlay elements tabhi dikhenge jab video play na ho rahi ho */}
              {(!isCenter || !isPlaying) && (
                <div className="card-overlay">
                  {/* Top Right Expand Icon for Center Card */}
                  {isCenter && (
                    <button className="top-right-icon" aria-label="Expand">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </button>
                  )}

                  {isCenter ? (
                    <>
                      {/* Play Button */}
                      <button
                        className="play-btn"
                        aria-label="Play Video"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlaying(true);
                        }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#161D46">
                          <polygon points="8,5 19,12 8,19" />
                        </svg>
                      </button>

                      {/* Card Info */}
                      <div className="center-card-info">
                        <h3 className="center-name">
                          {client.name}, <br /> {client.company}
                        </h3>
                        <div className="rating-container">
                          {[...Array(client.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="star-icon"
                              viewBox="0 0 16 16"
                              fill="#FFB800"
                            >
                              <path d="M8 0L10.472 4.908L15.902 5.736L11.986 9.534L12.91 14.93L8 12.382L3.09 14.93L4.014 9.534L0.098 5.736L5.528 4.908L8 0Z" />
                            </svg>
                          ))}
                          <span className="rating-text">5/5</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <h3 className="side-card-name">
                      {client.name}, {client.company}
                    </h3>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        <button className="nav-arrow" onClick={handlePrev} aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#161D46" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button className="nav-arrow" onClick={handleNext} aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#161D46" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;