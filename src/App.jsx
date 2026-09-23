import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ServiceSuccess from "./Pages/ServiceSuccess/ServiceSuccess";
import Blogs from "./Pages/Blog/Blogs";
import FloatingWhatsApp from "./Components/FloatingWhatsApp/FloatingWhatsApp";
import Tasks from "./Pages/Tasks/Tasks";

const ScrollToTopAndHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

const AnimationObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px 0px 0px",
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targetSelectors = [
      ".zoom-in-left",
      ".zoom-in-right",
      ".zoom-in-up",
      ".slide-left",
      ".slide-right",
      ".slide-up",
      ".zoom-in",
      ".zoom-out",
      ".fade-zoom",
      ".service-card",
      ".why-choose-card",
      ".faq-item",
      ".home-first-image-wrapper",
      ".home-first-tutor-badge",
      ".home-first-students-badge",
      ".book-free-banner",
      ".stats-box",
      ".how-its-work-card",
      ".testimonial-card",
      ".medical-card",
      ".key-benefit-card",
      ".blog-card",
      ".usmle-card",
      ".dreams-card",
      ".boost-card",
      ".consultation-card"
    ];

    const elements = document.querySelectorAll(targetSelectors.join(", "));
    elements.forEach((el) => {
      if (
        !el.classList.contains("zoom-in-left") &&
        !el.classList.contains("zoom-in-right") &&
        !el.classList.contains("zoom-in-up") &&
        !el.classList.contains("slide-left") &&
        !el.classList.contains("slide-right") &&
        !el.classList.contains("zoom-in") &&
        !el.classList.contains("zoom-out") &&
        !el.classList.contains("fade-zoom")
      ) {
        el.classList.add("zoom-in");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopAndHash />
      <AnimationObserver />
      <div key={window.location.pathname} className="page-zoom-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/ServiceSuccess" element={<ServiceSuccess />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Routes>
      </div>
      {/* Floating WhatsApp - always visible, bottom-right, fixed globally */}
      <FloatingWhatsApp />
      <Routes>
        <Route path="/Tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;