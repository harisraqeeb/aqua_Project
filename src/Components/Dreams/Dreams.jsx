import React, { useEffect, useState } from 'react';
import "./Dreams.css";
import Navbar from '../Navbar/Navbar';

const Dreams = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);
  return (
    <div className='DreamsMAin'>
      {/* White text + Dark background logo */}
      <Navbar isDarkBg={true} darkLogoSrc="/Images/aqua_clear_logo_white.svg" />

      <div className='DreamsMAin1 animate-slide-down'>
        <div className='dreams-badge-pill'>
          <span className='dreams-pulse-dot'></span>
          <span>9-Stage RO &amp; UV Sterilized Water</span>
        </div>

        <h1 className='DreamsMAin1_P1'>
          Pure Drinking Water Solutions for Every <span>Home &amp; Office</span>
        </h1>
        <p className='DreamsMAin1_P2'>
          Aqua Clear is committed to delivering pristine, mineral-balanced drinking water across residential and commercial sectors. Discover our certified purity standards, automated doorstep refills, and sustainable packaging.
        </p>

        {/* Action Buttons */}
        <div className='dreams-actions'>
          <a
            href="#cta"
            className='dreams-btn-primary'
            onClick={(e) => {
              e.preventDefault();
              const cta = document.getElementById("cta");
              if (cta) cta.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Order Water Now
          </a>
          <button
            className='dreams-btn-video'
            onClick={() => setIsVideoOpen(true)}
            aria-label="Watch Purity Process Video"
          >
            <span className='dreams-play-icon'>▶</span>
            <span>Watch Purity Video</span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="dreams-video-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="dreams-video-card" onClick={(e) => e.stopPropagation()}>
            <button className="dreams-close-btn" onClick={() => setIsVideoOpen(false)}>
              &times;
            </button>
            <iframe
              src="https://www.youtube.com/embed/uj3OARSSnYo?autoplay=1&rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              className="dreams-video-player"
              title="Aqua Clear Purity Process Video"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dreams;