import React from "react";
import "./HomeFirst.css";

const HomeFirst = () => {
  return (
    <section className="home-first">

      {/* LEFT CONTENT */}
      <div className="home-first-content">

        <div className="arrowmain">

        <h1 className="home-first-title">
          Pass <span>USMLE.</span>
          <br />
          Match Your
          <br />
          <span>Residency</span>
        </h1>
        <img src="/public/Images/arrow.webp" alt=" " className="jhgvhj"/>
        </div>

        <p className="home-first-description">
          At USMLE Unlimited, we are deeply committed to supporting aspiring
          physicians throughout their entire USMLE journey. Our mission is to
          provide comprehensive guidance and unwavering support as you navigate
          the challenges of preparing for these critical exams
        </p>

        <div className="home-first-buttons">

          <a href="#consultation" className="home-first-btn-primary">
            Book A Free Consultation
          </a>

          <a href="#started" className="home-first-btn-secondary">
            Get Started
          </a>

        </div>

      </div>


      {/* RIGHT IMAGE AREA */}
      <div className="home-first-visual">

     
      


        {/* MAIN IMAGE */}
        <div className="home-first-image-wrapper">
          <img
            src="/Images/image.webp"
            alt="Certified Tutor"
            className="home-first-image"
          />
        </div>


        {/* CERTIFIED TUTORS BADGE */}
        <div className="home-first-tutor-badge">

          <img className="home-first-badge-icon" src="/public/Images/certified.webp"/>
      

          <span>Certified Tutors</span>

        </div>


        {/* STUDENTS BADGE */}
        <div className="home-first-students-badge">

          <div className="home-first-avatars">

            <img src="/public/Images/icon1.webp" alt=""  className="home_first_avatars1"/>
           <img src="/public/Images/icon2.webp" alt=""  className="home_first_avatars1"/>
 <img src="/public/Images/icon3.webp" alt=""  className="home_first_avatars1"/>
  <img src="/public/Images/icon4.webp" alt=""  className="home_first_avatars1"/>
            <div className="home-first-avatar-count">
              1K
            </div>

          </div>

      <div className="Studentscardin">
          <strong>100+ Students</strong>

          <span>Learn Weekly</span>
</div>
        </div>

      </div>

    </section>
  );
};

export default HomeFirst;