import React from "react";
import "./Services.css";

const productsData = [
  {
    id: 1,
    title: "19L Water Bottle",
    subtitle: "5 Gallon Dispenser Refill",
    description:
      "Ideal for homes and offices with convenient refill and delivery options. Compatible with standard hot/cold water dispensers.",
    suitable: "Homes, Executive Offices, Clinics & Large Families",
    icon: "/Images/b19l.svg",
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "12L Water Bottle",
    subtitle: "3 Gallon Handle Bottle",
    description:
      "Compact size with ergonomic carrying handle. Easy to lift, store, and position on kitchen countertops or desks.",
    suitable: "Small Apartments, Workstations, Senior Citizens",
    icon: "/Images/b12l.svg",
    badge: "Convenient",
  },
  {
    id: 3,
    title: "1.5L Bottled Water",
    subtitle: "Everyday Hydration Pack",
    description:
      "Convenient drinking water for homes, workplaces, travel, dining tables, and everyday family hydration.",
    suitable: "Dining Tables, Workplaces, Gym, Daily Travel",
    icon: "/Images/b1_5l.svg",
    badge: "Family Favorite",
  },
  {
    id: 4,
    title: "500ml Bottled Water",
    subtitle: "On-The-Go Single Serve",
    description:
      "Easy-to-carry single-serve bottled water for individuals, office meetings, corporate conferences, and events.",
    suitable: "Events, Conferences, Personal Carry, Hospitality",
    icon: "/Images/b500ml.svg",
    badge: "Event Special",
  },
];

const ArrowIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 11H17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 6L17 11L12 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Services = () => {
  return (
    <section className="services" id="products">
      {/* Heading */}
      <div className="services-header">
        <h2>
          Our Premium <span>Products</span> &amp;
          <br />
          Water Sizes
        </h2>

        <p>
          Pure, healthy, and lab-certified mineral-balanced drinking water packaged in various sizes tailored for homes, corporate offices, and special events.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="services-cards" style={{ flexWrap: "wrap", justifyContent: "center" }}>
        {productsData.map((product, idx) => {
          const animClass =
            idx === 0
              ? "zoom-in-left"
              : idx === 1
              ? "zoom-in-up"
              : idx === 2
              ? "zoom-in-up"
              : "zoom-in-right";
          return (
            <div
              className={`service-card ${animClass} ${
                product.id === 1 ? "active-card" : ""
              }`}
              key={product.id}
            >
              {/* Product Badge */}
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#0284C7",
                  background: "rgba(2, 132, 199, 0.1)",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  display: "inline-block",
                  marginBottom: "12px",
                }}
              >
                {product.badge}
              </div>

              {/* Icon */}
              <div className="service-icon" style={{ height: "90px", display: "flex", alignItems: "center" }}>
                <img
                  src={product.icon}
                  alt={product.title}
                  style={{ width: "auto", height: "80px", objectFit: "contain" }}
                />
              </div>

              {/* Content */}
              <div className="service-content">
                <h3>{product.title}</h3>
                <span style={{ fontSize: "14px", color: "#0284C7", fontWeight: "500", display: "block", marginBottom: "8px" }}>
                  {product.subtitle}
                </span>
                <p>{product.description}</p>
                <div style={{ marginTop: "10px", fontSize: "13px", color: "#5C768D", fontStyle: "italic" }}>
                  <strong>Suitable for:</strong> {product.suitable}
                </div>
              </div>

              {/* Order Now CTA */}
              <a href="#cta" className="learn-more">
                <span>ORDER NOW</span>
                <ArrowIcon />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;