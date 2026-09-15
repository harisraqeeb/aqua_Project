import React from "react";
import "./BookFree.css";

const BookFree = () => {
  return (
    <section className="book-free-section" id="cta">
      <div className="book-free-banner">
        <h2 className="book-free-title">
          Take the First Step Toward <span>Success</span>
        </h2>
        
        <p className="book-free-desc">
          Stay ahead in your exam preparation with our expert insights and valuable resources. Our newsletter delivers essential tips, updates, and strategies directly to your inbox. Get access to study guides, success stories, exclusive offers, and more, helping you stay motivated and on track throughout your USMLE journey
        </p>

        <button className="book-free-btn">
          Book A Free Consultation
        </button>
      </div>
    </section>
  );
};

export default BookFree;