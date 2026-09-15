import React from "react";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Residency & Match",
    description:
      "No cookie cutter approaches. By accounting for your preferences, goals, and study style, we'll customize the most effective plan for you. Our individualized approach means a better score for you",
    type: "home",
  },
  {
    id: 2,
    title: "USMLE Tutoring",
    description:
      "No cookie cutter approaches. By accounting for your preferences, goals, and study style, we'll customize the most effective plan for you. Our individualized approach means a better score for you",
    type: "edit",
  },
  {
    id: 3,
    title: "Personal Statement",
    description:
      "No cookie cutter approaches. By accounting for your preferences, goals, and study style, we'll customize the most effective plan for you. Our individualized approach means a better score for you",
    type: "document",
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
    <section className="services">
  

        {/* Heading */}
        <div className="services-header">
          <h2>
            Empower Your <span>Journey</span> to
            <br />
            Success
          </h2>

          <p>
            Expert USMLE Step 1 &amp; Step 2 tutoring tailored to future
            physicians. Achieve your goals with personalized guidance designed to help you excel
          </p>
        </div>

        {/* Cards */}
        <div className="services-cards">
          {servicesData.map((service, idx) => {
            const animClass = idx === 0 ? "zoom-in-left" : idx === 1 ? "zoom-in-up" : "zoom-in-right";
            return (
              <div
                className={`service-card ${animClass} ${
                  service.id === 2 ? "active-card" : ""
                }`}
                key={service.id}
              >
                {/* Icon */}
                <div className="service-icon">
                  {service.type === "home" && <img src="/Images/s1.svg" alt="" />}
                  {service.type === "edit" && <img src="/Images/s2.svg" alt="" />}
                  {service.type === "document" && <img src="/Images/s3.svg" alt="" />}
                </div>

                {/* Content */}
                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                {/* Learn More */}
                <a href="#learn-more" className="learn-more">
                  <span>Learn More</span>
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