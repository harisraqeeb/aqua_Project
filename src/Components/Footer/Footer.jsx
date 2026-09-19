import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "./Footer.css";
import { COMPANY_CONFIG } from "../../config/company";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo & Description */}
          <div className="footer-col footer-brand">
            <img
              src="/Images/aqua_clear_logo.svg"
              alt="Aqua Clear Logo"
              className="jhbj"
              style={{ width: "180px", height: "auto", marginBottom: "16px" }}
            />
            <p className="footer-desc">
              {COMPANY_CONFIG.name} provides clean, refreshing drinking water and convenient delivery solutions for homes, offices, and commercial establishments.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="/" className="footer-link">Home</a>
            <a href="/ServicePage" className="footer-link">About Us</a>
            <a href="#products" className="footer-link">Products</a>
            <a href="/ServiceSuccess" className="footer-link">Services</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="/Blogs" className="footer-link">Hydration Blog</a>
          </div>

          {/* Contact Column */}
          <div className="footer-col footer-contact">
            <h4 className="footer-heading">Contact Aqua Clear</h4>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ color: "inherit", textDecoration: "none" }}>
                {COMPANY_CONFIG.phone}
              </a>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" style={{ color: "#25D366" }} />
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${COMPANY_CONFIG.whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                WhatsApp Us
              </a>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href={`mailto:${COMPANY_CONFIG.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                {COMPANY_CONFIG.email}
              </a>
            </div>
            <div className="contact-item" style={{ alignItems: "flex-start", gap: "8px" }}>
              <FiMapPin className="contact-icon" style={{ marginTop: "4px" }} />
              <span style={{ fontSize: "14px", lineHeight: "1.4" }}>{COMPANY_CONFIG.address}</span>
            </div>
          </div>

          {/* Social Icons Column */}
          <div className="footer-col footer-socials">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons">
              <a href={COMPANY_CONFIG.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href={COMPANY_CONFIG.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={COMPANY_CONFIG.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href={COMPANY_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
            <div style={{ marginTop: "16px" }}>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "20px",
                  background: "#0284C7",
                  color: "#FFF",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <FiPhone /> CALL NOW
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Copyright & Policies Section */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Aqua Clear. All Rights Reserved. Pure Water. Clear Choice.
          </p>
          <div className="footer-legal">
            <a href="#terms" className="legal-link">Terms &amp; Conditions</a>
            <span className="legal-separator">|</span>
            <a href="#privacy" className="legal-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;