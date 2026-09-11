import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        
        {/* Top Section: Space Between */}
        <div className="footer-top">
          
          {/* Logo & Description */}
          <div className="footer-col footer-brand">
            <img src="/Images/logo1.svg" alt="llogo"  className="jhbj" />
            <p className="footer-desc">
              Lorem ipsum is a dummy or placeholder text commonly used in graphic design.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#process" className="footer-link">Process</a>
            <a href="#faq" className="footer-link">FAQ</a>
          </div>

          {/* Contact Column */}
          <div className="footer-col footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+44 800 123 4567</span>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <span>support@askotto.com</span>
            </div>
          </div>

          {/* Social Icons Column */}
          <div className="footer-col footer-socials">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Copyright & Policies Section */}
        <div className="footer-bottom">
          <p className="copyright-text">
            Copyright © 2024 UUNLIMITED
          </p>
          <div className="footer-legal">
            <a href="#terms" className="legal-link">Terms & Conditions</a>
            <span className="legal-separator">|</span>
            <a href="#privacy" className="legal-link">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;