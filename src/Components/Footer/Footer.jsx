import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "./Footer.css";
import { COMPANY_CONFIG } from "../../config/company";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, path, hash) => {
    e.preventDefault();
    if (hash) {
      if (location.pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        navigate(`/#${hash}`);
      }
    } else if (path) {
      if (location.pathname === path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(path);
      }
    }
  };

  return (
    <footer className="footer-main">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo & Description */}
          <div className="footer-col footer-brand">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", null)}
              style={{ cursor: "pointer", display: "inline-block" }}
            >
              <img
                src="/Images/aqua_clear_logo.svg"
                alt="Aqua Clear Logo"
                className="jhbj"
                style={{ width: "180px", height: "auto", marginBottom: "16px", cursor: "pointer" }}
              />
            </a>
            <p className="footer-desc">
              {COMPANY_CONFIG.name} provides clean, refreshing drinking water and convenient delivery solutions for homes, offices, and commercial establishments.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="/" onClick={(e) => handleNavClick(e, "/", null)} className="footer-link">Home</a>
            <a href="/ServicePage" onClick={(e) => handleNavClick(e, "/ServicePage", null)} className="footer-link">About Us</a>
            <a href="#products" onClick={(e) => handleNavClick(e, null, "products")} className="footer-link">Products</a>
            <a href="/ServiceSuccess" onClick={(e) => handleNavClick(e, "/ServiceSuccess", null)} className="footer-link">Services</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, null, "faq")} className="footer-link">FAQ</a>
            <a href="/Blogs" onClick={(e) => handleNavClick(e, "/Blogs", null)} className="footer-link">Hydration Blog</a>
          </div>

          {/* Contact Column */}
          <div className="footer-col footer-contact">
            <h4 className="footer-heading">Contact Aqua Clear</h4>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>
                {COMPANY_CONFIG.phone}
              </a>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" style={{ color: "#25D366" }} />
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${COMPANY_CONFIG.whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
              >
                WhatsApp Us
              </a>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href={`mailto:${COMPANY_CONFIG.email}`} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>
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
              <a href={COMPANY_CONFIG.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" style={{ cursor: "pointer" }}>
                <FaFacebookF />
              </a>
              <a href={COMPANY_CONFIG.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" style={{ cursor: "pointer" }}>
                <FaInstagram />
              </a>
              <a href={COMPANY_CONFIG.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" style={{ cursor: "pointer" }}>
                <FaTiktok />
              </a>
              <a href={COMPANY_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ cursor: "pointer" }}>
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
                  cursor: "pointer"
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
            <a href="#cta" onClick={(e) => handleNavClick(e, null, "cta")} className="legal-link">Terms &amp; Conditions</a>
            <span className="legal-separator">|</span>
            <a href="#cta" onClick={(e) => handleNavClick(e, null, "cta")} className="legal-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;