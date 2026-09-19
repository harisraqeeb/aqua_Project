import React, { useEffect, useState } from "react";
import "./TestimonialCarousel.css";

const clientData = [
  {
    id: 1,
    name: "Sarah Ahmed",
    company: "Operations Director, Tech Hub",
    image: "/Images/happy_client_office.png",
    video: "https://www.youtube.com/embed/uj3OARSSnYo?autoplay=1&rel=0",
    rating: 5,
    quote: "Aqua Clear dispenser refills keep our 50+ employees hydrated every single day. Pure water & prompt delivery!",
  },
  {
    id: 2,
    name: "Dr. Maria Farooq",
    company: "Pediatric Clinic & DHA Resident",
    image: "/Images/happy_client_home.png",
    video: "https://www.youtube.com/embed/BXHIWla7iIg?autoplay=1&rel=0",
    rating: 5,
    quote: "Certified 9-stage RO filtration gives our clinic & family total peace of mind. Crisp and refreshing!",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    company: "Senior Director, Royale Events",
    image: "/Images/happy_client_event.png",
    video: "https://www.youtube.com/embed/G9nHOIRGgiQ?autoplay=1&rel=0",
    rating: 5,
    quote: "Delivered 3,000 chilled 500ml bottles right on schedule for our international corporate summit.",
  },
  {
    id: 4,
    name: "Shahid Rafiq",
    company: "Grand Hotel & Suites",
    image: "/Images/delivery_van.png",
    video: "https://www.youtube.com/embed/uj3OARSSnYo?autoplay=1&rel=0&start=30",
    rating: 5,
    quote: "Exceptional delivery fleet. Guaranteed morning deliveries for all hotel suites and restaurant dining.",
  },
  {
    id: 5,
    name: "Usman Ghani",
    company: "Grand Residency Apartments",
    image: "/Images/hero_water.png",
    video: "https://www.youtube.com/embed/BXHIWla7iIg?autoplay=1&rel=0&start=20",
    rating: 5,
    quote: "Smooth weekly doorstep refills across our entire 40-unit building with automated billing.",
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




  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);


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
                <iframe
                  src={client.video}
                  className="card-video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={`${client.name} video`}
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
                      {/* <img src="/Images/expendicon.svg" alt="Expand Video" /> */}
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
            <iframe
              src={currentClient.video}
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="fullscreen-video"
              title="Full screen video"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialCarousel;