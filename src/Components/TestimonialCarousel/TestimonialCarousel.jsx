import React, { useState } from "react";
import "./TestimonialCarousel.css";

const clientData = [
  {
    id: 1,
    name: "Steve",
    company: "Steve's HVAC Crew",
    image: "/Images/c1.webp",
    video: "/Images/11.mp4",
    rating: 5,
  },
  {
    id: 2,
    name: "Olivia",
    company: "Sunny Days Landscaping",
    image: "/Images/c2.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: 5,
  },
  {
    id: 3,
    name: "Drew",
    company: "Aqua Splash Pools",
    image: "/Images/c2.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    rating: 5,
  },
  {
    id: 4,
    name: "Luka",
    company: "Mighty Roofers",
    image: "/Images/c3.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily",
    company: "Gleam Cleaners",
    image: "/Images/c4.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const handleExpandClick = (e) => {
    e.stopPropagation(); // Event bubbling stop karein
    setIsFullscreen(true);
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

  const currentClient = clientData[activeIndex];

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
              {/* Media Swap Logic */}
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

              {/* Overlay elements */}
              {(!isCenter || !isPlaying) && (
                <div className="card-overlay">
                  {/* Top Right Expand Icon */}
                  {isCenter && (
                    <div
                      className="top-right-icon"
                      onClick={handleExpandClick}
                      role="button"
                      tabIndex={0}
                    >
                      <img src="/Images/expendicon.svg" alt="Expand Video" />
                    </div>
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
                        <img src="/Images/playybtn.svg" alt="Play" />
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
          <img src="/Images/arrowleftt.svg" alt="Previous" />
        </button>

        <button className="nav-arrow" onClick={handleNext} aria-label="Next">
          <img src="/Images/arrowrightt.svg" alt="Next" />
        </button>
      </div>

      {/* Fullscreen Video Modal View */}
      {isFullscreen && (
        <div className="video-modal-overlay" onClick={() => setIsFullscreen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setIsFullscreen(false)}>
              &times;
            </button>
            <video
              src={currentClient.video}
              controls
              autoPlay
              className="fullscreen-video"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialCarousel;