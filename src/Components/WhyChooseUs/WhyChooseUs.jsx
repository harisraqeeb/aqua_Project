import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "/public/Images/f1.svg",
      title: (
        <>
          Time-Tested
          <br />
          Strategies
        </>
      ),
    },
    {
      icon: "/public/Images/f1.svg",
      title: (
        <>
          Personalized Study
          <br />
          Plans
        </>
      ),
    },
  ];
   const features1 = [
   {
         icon: "/public/Images/f1.svg",
      title: (
        <>
          Student-Centered
          <br />
          Approach
        </>
      ),
    },
    {
         icon: "/public/Images/f1.svg",
      title: (
        <>
          Comprehensive
          <br />
          Resource Support
        </>
      ),
    },
    {
         icon: "/public/Images/f1.svg",
      title: (
        <>
          Trusted by Aspiring
          <br />
          Physicians
        </>
      ),
    },
  ];


  return (
    <section className="why-choose-us">
      {/* LEFT CONTENT */}
      <div className="why-choose-us___1">
        <div className="why-choose-content">
          <h2 className="why-choose-title">
            The USMLE <span>Advantage</span>
            <br />
            You Deserve
          </h2>

          <p className="why-choose-description">
            We focus on industry leading platforms so that you can be prepared
            for your next job. Then we teach all we can about overpass is the
            solution.
          </p>
        </div>


    
          <div className="why-choose-us___2" >
                {features.map((feature, index) => (
            <div className="why-choose-card"key={index}>
              <img className="why-choose-icon" alt="" src={feature.icon} />

              <div className="why-choose-card-title">{feature.title}</div>
            </div>     ))}
          </div>
   

      </div>

<div className="whychooseus___lst">


                {features1.map((feature, index) => (
            <div className="why-choose-card"key={index}>
              <img className="why-choose-icon" alt="" src={feature.icon} />

              <div className="why-choose-card-title">{feature.title}</div>
            </div>     ))}
   



</div>


    </section>
  );
};

export default WhyChooseUs;
