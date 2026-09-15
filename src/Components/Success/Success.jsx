import React, { useState, useRef, useEffect } from "react";
import "./Success.css";

const successData = [
  {
    id: 1,
    image: "/Images/adam.png", // Agar file public folder mein hai, toh use '/success-person.png'
    stars: 5,
    description:
      "Workhorse Growth Partners transformed our digital presence and helped us achieve record growth. Workhorse Growth Partners transformed our digital presence and helped us achieve record growth.",
    name: "Adam Rae",
    role: "CEO of UrbanScape Ventures",
    // Ek testing video link:
    videoUrl: "https://www.instagram.com/reel/DdLNvZ-iukp/",
  },
  {
    id: 2,
    image: "/Images/adam.png", // Replace with different images for other stories if needed
    stars: 5,
    description:
      "Their strategic insight and dedication completely changed our customer acquisition model. Highly recommended team!",
    name: "Sarah Jenkins",
    role: "CMO at TechPulse",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    image: "/Images/adam.png",
    stars: 5,
    description:
      "Exceptional results! Our revenue jumped by 40% in just six months of working with Workhorse Growth Partners.",
    name: "Michael Chen",
    role: "Founder & Director of Apex Global",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Success = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // Jab bhi index change ho, purani video ko band kar dein agar chal rahi ho
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
    // Play video programmatically after state change
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 50);
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false); // Video khatam hone par wapis image dikhaein
  };

  return (
    <section className="success-section">
      {/* Heading */}
      <h2 className="success-title">
        Our Success <span>Story</span>
      </h2>

      {/* Main testimonial */}
      <div className="success-wrapper">
        {/* Left Arrow */}
        <button
          className="success-arrow success-arrow-left"
          onClick={handlePrev}
        >
          <img src="/Images/left.svg" alt="Previous" />
        </button>

        {/* Image & Video Container */}
        <div className="success-image-box">
          {isVideoPlaying ? (
            /* Agar video chal rahi hai, toh video dikhaein */
            <video
              ref={videoRef}
              src={currentItem.videoUrl}
              className="success-image" // Same CSS class as image to maintain size
              controls // Add controls so user can pause/stop
              onEnded={handleVideoEnded} // Wapis image par switch karne ke liye
              style={{ objectFit: "cover" }} // Ensure it covers the area like image
            />
          ) : (
            /* Agar video nahi chal rahi, toh image aur play button dikhaein */
            <>
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="success-image"
              />

              {/* Play Button */}
              <button className="success-play" onClick={handlePlayVideo}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M17.5 10.13C18.17 10.52 18.17 11.48 17.5 11.87L7.75 17.5C7.08 17.89 6.25 17.41 6.25 16.63V5.37C6.25 4.59 7.08 4.11 7.75 4.5L17.5 10.13Z"
                    fill="#171D4C"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Testimonial Content */}
        <div className="success-content">
          {/* Quote */}
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
                className={i === 0 ? "star" : ""}
              />
            ))}
          </div>


          <div className="jhbjhbjhbhbjhb">
            <div className="quote-icon1">
              <img src="/Images/quoteicon.svg" alt="Quote" />
            </div>
            <div className="success-stars1">
              {[...Array(currentItem.stars)].map((_, i) => (
                <img
                  key={i}
                  src="/Images/star.svg"
                  alt="Star"
                  className={i === 0 ? "star" : ""}
                />
              ))}
            </div>
          </div>



          {/* Description */}
          <p className="success-description">{currentItem.description}</p>

          {/* Person */}
          <div className="success-person">
            <h3>{currentItem.name}</h3>
            <p>{currentItem.role}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="success-arrow success-arrow-right"
          onClick={handleNext}
        >
          <img src="/Images/right.svg" alt="Next" />
        </button>
      </div>

      {/* Dots */}
      <div className="success-dots">
        {successData.map((_, index) => (
          <span
            key={index}
            className={`success-dot ${index === currentIndex ? "active" : ""
              }`}
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Success;