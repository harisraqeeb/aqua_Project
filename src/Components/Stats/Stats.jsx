import React from "react";
import "./Stats.css";

const statsData = [
  {
    value: "32%+",
    description: "Students fail Step 1 on\ntheir first attempt",
  },
  {
    value: "6 Months",
    description: "Typical preparation\ntime for Step 1",
  },
  {
    value: "45%+",
    description: "Struggle with time\nmanagement",
  },
  {
    value: "95%+",
    description: "First-attempt success\nrate",
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