import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_CONFIG } from "../../config/company";
import "./FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  const url = `https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${COMPANY_CONFIG.whatsappMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Contact Aqua Clear on WhatsApp"
      title="Chat with Aqua Clear on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Order on WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
