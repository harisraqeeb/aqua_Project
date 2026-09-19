import React from "react";
import "./HomeFirst.css";
import { COMPANY_CONFIG } from "../../config/company";

const HomeFirst = () => {
  return (
    <section className="home-first">
      {/* LEFT CONTENT */}
      <div className="home-first-content zoom-in-left">
        <div className="arrowmain">
          <h1 className="home-first-title">
            <span>AQUA CLEAR</span>
            <br />
            Pure Water.
            <br />
            <span>Clear Choice.</span>
          </h1>
          <img src="/Images/arrow.webp" alt="" className="jhgvhj" />
        </div>

        <p className="home-first-description">
          {COMPANY_CONFIG.heroSubtext} Experience 100% purified, fresh drinking water delivered directly to your home, office, or commercial establishment with guaranteed reliability and speed.
        </p>

        <div className="home-first-buttons" style={{ flexWrap: "wrap" }}>
          <a href="#cta" className="home-first-btn-primary">
            ORDER NOW
          </a>

          <a href="#products" className="home-first-btn-secondary">
            EXPLORE PRODUCTS
          </a>

          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${COMPANY_CONFIG.whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="home-first-btn-whatsapp"
          >
            WHATSAPP US
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE AREA */}
      <div className="home-first-visual zoom-in-right">
        {/* MAIN IMAGE */}
        <div className="home-first-image-wrapper">
          <img
            src="/Images/hero_water.png"
            alt="Aqua Clear Premium Bottled Water"
            className="home-first-image"
          />
        </div>

        {/* CERTIFIED PURITY BADGE */}
        <div className="home-first-tutor-badge">
          <img
            className="home-first-badge-icon"
            src="/Images/purity_badge.svg"
            alt="100% Pure"
          />
          <span>100% Filtered &amp; Pure</span>
        </div>

        {/* HAPPY CUSTOMERS BADGE */}
        <div className="home-first-students-badge">
          <div className="home-first-avatars">
            <img src="/Images/icon1.webp" alt="Client 1" className="home_first_avatars1" />
            <img src="/Images/icon2.webp" alt="Client 2" className="home_first_avatars1" />
            <img src="/Images/icon3.webp" alt="Client 3" className="home_first_avatars1" />
            <img src="/Images/icon4.webp" alt="Client 4" className="home_first_avatars1" />
            <div className="home-first-avatar-count">5K+</div>
          </div>

          <div className="Studentscardin">
            <strong>5,000+ Happy</strong>
            <span>Homes &amp; Offices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFirst;