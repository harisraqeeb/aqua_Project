import React from 'react';
import './Boost.css';

const Boost = () => {
  return (
    <section className="bst-section-wrapper">
      {/* First Div: Text Section */}
      <div className="bst-header-container">
        <h2 className="bst-main-heading">
          Core Water Services for <span className="bst-highlight-text">Homes &amp; Offices</span>
        </h2>
        <p className="bst-header-description">
          From weekly residential bottle refills to corporate dispenser supply, bulk event hydration, and automated subscription plans, Aqua Clear delivers pure refreshment.
        </p>
      </div>

      {/* Second Div: Content & Image Grid */}
      <div className="bst-content-container">
        {/* Left Side: Image */}
        <div className="bst-image-wrapper zoom-in-left">
          <img
            src="/Images/delivery_van.png"
            alt="Aqua Clear Delivery Logistics"
            className="bst-feature-image"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side: 2x2 Cards Grid */}
        <div className="bst-cards-grid zoom-in-right">
          {/* Card 1 */}
          <div className="bst-card">
            <img src="/Images/b19l.svg" alt="Icon" className="bst-card-icon" style={{ height: "40px" }} />
            <h3 className="bst-card-title">Residential Delivery</h3>
            <p className="bst-card-desc">
              Scheduled doorstep delivery of 19L dispenser bottles and 12L handle bottles for homes and apartments.
            </p>
          </div>

          {/* Card 2 (Dark Theme) */}
          <div className="bst-card bst-card-dark">
            <img src="/Images/b12l.svg" alt="Icon" className="bst-card-icon" style={{ height: "40px" }} />
            <h3 className="bst-card-title">Office Water Supply</h3>
            <p className="bst-card-desc">
              Reliable commercial dispenser supply with monthly consolidated billing and free dispenser sanitization.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bst-card">
            <img src="/Images/b500ml.svg" alt="Icon" className="bst-card-icon" style={{ height: "40px" }} />
            <h3 className="bst-card-title">Event &amp; Bulk Supply</h3>
            <p className="bst-card-desc">
              500ml and 1.5L bottled water packs for corporate conferences, sports tournaments, weddings, and parties.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bst-card">
            <img src="/Images/purity_badge.svg" alt="Icon" className="bst-card-icon" style={{ height: "40px" }} />
            <h3 className="bst-card-title">Rapid 24h Dispatch</h3>
            <p className="bst-card-desc">
              Dedicated delivery fleet operating Monday through Saturday to ensure you never run out of clean drinking water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boost;