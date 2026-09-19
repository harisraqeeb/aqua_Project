import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "/Images/purity_badge.svg",
      title: (
        <>
          Pure &amp; Fresh
          <br />
          9-Stage Filtration
        </>
      ),
    },
    {
      icon: "/Images/purity_badge.svg",
      title: (
        <>
          Reliable Doorstep
          <br />
          Delivery
        </>
      ),
    },
  ];
  
  const features1 = [
    {
      icon: "/Images/purity_badge.svg",
      title: (
        <>
          Quality-Focused
          <br />
          &amp; Lab Tested
        </>
      ),
    },
    {
      icon: "/Images/purity_badge.svg",
      title: (
        <>
          Easy 1-Click
          <br />
          Online Ordering
        </>
      ),
    },
    {
      icon: "/Images/purity_badge.svg",
      title: (
        <>
          Customer-First
          <br />
          Dedicated Service
        </>
      ),
    },
  ];

  return (
    <section className="why-choose-us" id="why-us">
      {/* LEFT CONTENT */}
      <div className="why-choose-us___1 zoom-in-left">
        <div className="why-choose-content">
          <h2 className="why-choose-title">
            The Aqua Clear <span>Advantage</span>
            <br />
            You Can Trust
          </h2>

          <p className="why-choose-description">
            We combine state-of-the-art multi-stage reverse osmosis, ozonation, and UV purification to deliver crisp, refreshing drinking water straight to your home or corporate workplace.
          </p>
        </div>

        <div className="why-choose-us___2">
          {features.map((feature, index) => (
            <div className="why-choose-card" key={index}>
              <img className="why-choose-icon" alt="" src={feature.icon} />
              <div className="why-choose-card-title">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="whychooseus___lst zoom-in-right">
        {features1.map((feature, index) => (
          <div className="why-choose-card" key={index}>
            <img className="why-choose-icon" alt="" src={feature.icon} />
            <div className="why-choose-card-title">{feature.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
