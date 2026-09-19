import React from "react";
import "./Stats.css";

const statsData = [
  {
    value: "10,000+",
    description: "Daily Liters\nDelivered",
  },
  {
    value: "99.9%",
    description: "Filtration Purity\nRating",
  },
  {
    value: "100%",
    description: "On-Time Doorstep\nDelivery",
  },
  {
    value: "5,000+",
    description: "Satisfied Homes\n& Offices",
  },
];

const Stats = () => {
  return (
    <section className="stats-container">
      <div className="stats-wrapper">
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="stat-item">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-description">
                {stat.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
            </div>

            {/* Vertical Divider Line */}
            {index < statsData.length - 1 && (
              <div className="stat-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;