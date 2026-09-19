"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: "matriculation",
    title: <>Matriculation <br className="njnj" /> (Science)</>,
    subtitle: "BISE Abbottabad | IBCC Verified",
    image: "/Images/maric.webp",
    logo: "/Images/matriclogo.webp",
    qr: "/Images/matricQRimg.webp",
    link: "https://attest.ibcc.edu.pk/verify.php?code=300SrmE)Q3DqfP8uUzT!@=855cUvMmYiIo4hFK6!M@:x8VvMmA0L-RkiB:Wl",
  },
  {
    id: "intermediate",
    title: <>
      Intermediate <br className="njnj" /> (FSc Pre-Engineering)
    </>,
    subtitle: "BISE Abbottabad | IBCC Verified",
    image: "/Images/fscimg.webp",
    logo: "/Images/fsclogo.webp",
    qr: "/Images/interQRimg.webp",
    link: "https://attest.ibcc.edu.pk/verify.php?code=300CsTz@bZFgK)oG7TukkZ*y%7DP=OkswC%5DSnPxlP@38J@2:zRjdYOd5IJu%3EW*",
  },
  {
    id: "bscs",
    title: <>BS Computer Science </>,
    subtitle: "HEC Verified Degree",
    image: "/Images/bscsimg.webp",
    logo: "/Images/bscslogo.webp",
    qr: "/Images/bscsQRimg.webp",
    link: "#",
    popupImage: "/Images/degreebscsattest.png",
    qrLabel: "Degree Stamp",
  },
];

const StickyProjects = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 991;

    const getStickyTops = () => {
      const w = window.innerWidth;
      if (w <= 479) return [56, 68, 80];
      if (w <= 991) return [70, 85, 100];
      return [120, 150, 180];
    };

    const updateCards = () => {
      const stickyTops = getStickyTops();
      cardsRef.current.forEach((card, index) => {
        const nextCard = cardsRef.current[index + 1];
        if (!nextCard || !card) return;

        const rect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();
        const stickyTop = stickyTops[index] ?? 60;

        if (rect.top <= stickyTop + 2) {
          const totalDistance = rect.height;
          const currentDistance = rect.bottom - nextRect.top;
          if (currentDistance > 0) {
            const progress = Math.min(1, currentDistance / totalDistance);
            const scale = 1 - progress * (isMobile() ? 0.05 : 0.08);
            const opacity = 1 - progress * 0.3;
            card.style.transform = `scale(${scale}) translateZ(0)`;
            card.style.opacity = `${opacity}`;
            card.style.pointerEvents = currentDistance > 20 ? "none" : "auto";
          } else {
            card.style.transform = "scale(1) translateZ(0)";
            card.style.opacity = "1";
            card.style.pointerEvents = "auto";
          }
        } else {
          card.style.transform = "scale(1) translateZ(0)";
          card.style.opacity = "1";
          card.style.pointerEvents = "auto";
        }
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCards();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateCards();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── Section shell ── */
        .sp-section {
          width: 100%;
          background: transparent;
        }
        .sp-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0;
        }

        /* ── Cards stack ── */
        .sp-cards {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 12vh;
        }

        /* ── Single card ── */
        .sp-card {
          position: sticky;
          border-radius: 32px;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          width: 100%;
          transform-origin: top center;
          transition:
            transform 0.12s linear,
            opacity 0.12s linear,
            box-shadow 0.3s ease;
          cursor: pointer;
          box-shadow:
            0 0 0 1px rgba(244, 50, 82, 0.15),
            0 0 40px rgba(244, 50, 82, 0.08),
            0 8px 32px rgba(0,0,0,0.10);
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .sp-card:hover {
          box-shadow:
            0 0 0 1px rgba(244, 50, 82, 0.35),
            0 0 60px rgba(244, 50, 82, 0.12),
            0 12px 48px rgba(0,0,0,0.18);
        }

        /* Sticky offsets — desktop */
        .sp-card-1 { top: 120px; }
        .sp-card-2 { top: 150px; }
        .sp-card-3 { top: 180px; }

        /* ── Background image ── */
        .sp-bg-container {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
        }
        .sp-bg {
          object-fit: cover;
          display: block;
        }

        /* ── Gradient overlay ── */
        .sp-overlay {
          position: absolute; inset: 0; z-index: 1;
          display: flex; flex-direction: column;
          justify-content: space-between; align-items: center;
          padding: 28px 28px 24px;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.88) 100%);
          transition: background 0.4s ease;
        }
        .sp-card:hover .sp-overlay {
          background: linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.96) 100%);
        }

        /* ── Title / subtitle ── */
        .sp-title {
          color: #fff;
          text-align: center;
          font-size: clamp(16px, 3vw, 42px);
          font-weight: 800;
          line-height: 1.1;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        .sp-subtitle {
          color: rgb(244, 50, 82);
          font-size: clamp(11px, 1.4vw, 18px);
          font-weight: 500;
          margin-top: 6px;
          opacity: 0.9;
          text-align: center;
        }
        .dark .sp-subtitle {
          color: hsl(75 100% 60%);
        }
        .njnj {
          display: none;
        }

        /* ── QR popup (desktop hover) ── */
        .sp-qr-container {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -60%) scale(0.8);
          width: clamp(120px, 15vw, 200px);
          height: clamp(120px, 15vw, 200px);
          background: white;
          padding: 8px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          opacity: 0;
          transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 2;
          pointer-events: none;
        }
        .sp-card:hover .sp-qr-container {
          opacity: 1;
          transform: translate(-50%, -60%) scale(1);
        }
        .sp-qr-container-inner {
          position: relative;
          width: 100%; height: 100%;
        }
        .sp-qr-image {
          object-fit: contain;
          border-radius: 8px;
        }
        .sp-qr-label {
          position: absolute;
          bottom: -34px; left: 0;
          width: 100%;
          text-align: center;
          color: white;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ── Verified badge ── */
        .sp-verified-badge {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 6px 12px;
          border-radius: 100px;
          display: flex; align-items: center; gap: 6px;
          color: white;
          font-size: 11px; font-weight: 600;
          z-index: 2;
        }
        .sp-verified-badge svg {
          width: 14px; height: 14px;
          color: rgb(244, 50, 82);
        }
        .dark .sp-verified-badge svg {
          color: hsl(75 100% 60%);
        }

        /* ── Hover bar ── */
        .sp-hover-bar {
          width: 100%;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(244, 50, 82, 0.20);
          border-radius: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          min-height: 60px;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.4s ease;
          gap: 10px;
        }
        .sp-card:hover .sp-hover-bar {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-logo {
          position: relative;
          height: 38px;
          width: 120px;
        }
        .sp-logo-image {
          object-fit: contain;
          width: unset !important;
        }

        .sp-btn {
          display: flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, rgb(244, 50, 82), rgb(220, 20, 60) 45%, rgb(143, 15, 44));
          color: #fff;
          border-radius: 14px;
          padding: 10px 22px;
          font-size: 14px; font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 20px rgba(244, 50, 82, 0.35);
          flex-shrink: 0;
        }
        .sp-btn:hover { transform: scale(1.05); box-shadow: 0 0 35px rgba(244, 50, 82, 0.6); }
        .dark .sp-btn {
          background: hsl(75 100% 60%);
          color: #0a0a0a;
          box-shadow: 0 0 20px hsl(75 100% 60% / 0.5);
        }
        .dark .sp-btn:hover { box-shadow: 0 0 35px hsl(75 100% 60% / 0.85); }
        .sp-btn svg { width: 16px; height: 16px; }

        /* ══════════════════════════════════════
           TABLET  (≤ 991px)
        ══════════════════════════════════════ */
        @media (max-width: 991px) {
          .sp-cards {
            gap: 24px;
            padding-bottom: 8vh;
            padding-left: 12px;
            padding-right: 12px;
          }
          .sp-card {
            border-radius: 20px;
            aspect-ratio: 4 / 3;       /* taller on tablet so content fits */
          }
          .sp-card-1 { top: 70px; }
          .sp-card-2 { top: 85px; }
          .sp-card-3 { top: 100px; }

          .sp-overlay { padding: 16px 14px 14px; }

          /* Title left-aligned on mobile */
          .sp-title-block { text-align: left !important; }
          .sp-title { text-align: left; }
          .sp-subtitle { text-align: left; }

          /* Hover bar always visible on touch */
          .sp-hover-bar {
            opacity: 1 !important;
            transform: translateY(0) !important;
            background: rgba(255,255,255,0.85);
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            border-radius: 16px;
            padding: 10px 14px;
            min-height: auto;
          }

          /* QR always visible on mobile — small size */
          .sp-qr-container {
            display: block !important;
            opacity: 1 !important;
            transform: translate(-50%, -60%) scale(1) !important;
            pointer-events: auto;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            transition: none;
          }
          .sp-qr-label { font-size: 9px; bottom: -22px; }

         
          .sp-btn { padding: 8px 14px; font-size: 12px; border-radius: 10px; gap: 6px; }
          .sp-btn svg { width: 13px; height: 13px; }
        }

        /* ══════════════════════════════════════
           MOBILE  (≤ 479px)
        ══════════════════════════════════════ */
        @media (max-width: 479px) {

          .sp-qr-container {padding: 2px;
                  height: 100px;
        width: 73px;
        left: 87%;
        top: 42%;}

          
        .sjhdbjhsbdhj{
        text-align: left !important;
        }
        .njnj {
          display: block;
        }
        .sp-overlay {
        align-items: flex-start !important;
        gap: 20px !important;
        }
        .sp-qr-label {
        font-size: 9px;
        bottom: -18px;
        left: -19px;
        white-space: nowrap;
    }

          .sp-cards {
            gap: 18px;
            padding-left: 8px;
            padding-right: 8px;
            padding-bottom: 6vh;
          }
          .sp-card {
            border-radius: 16px;
            aspect-ratio: 3 / 2;       /* comfortable height on phones */
          }
          .sp-card-1 { top: 56px; }
          .sp-card-2 { top: 68px; }
          .sp-card-3 { top: 80px; }

          .sp-overlay { padding: 12px 10px 10px; gap: 6px; }

          .sp-verified-badge {
            top: 10px; right: 10px;
            padding: 4px 9px;
            font-size: 9px;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            background: rgba(255,255,255,0.25);
          }
          .sp-verified-badge svg { width: 11px; height: 11px; }

          .sp-hover-bar {
            padding: 8px 10px;
            border-radius: 12px;
            gap: 8px;
          }
       
          .sp-btn { padding: 6px 10px; font-size: 11px; border-radius: 8px; gap: 5px; }
          .sp-btn svg { width: 12px; height: 12px; }
        }

        @media (max-width: 400px) {
        .sp-card {
        aspect-ratio: 1 / 0.9;
    }
          .sp-overlay { 
            padding: 12px; 
            gap: 10px !important; 
            height: auto !important;
          }
          .sp-qr-container {
            padding: 4px;
            // height: 75px;
            // width: 75px;
            right: 12px;
            left: auto !important;
            top: 35%;
            transform: translateY(-50%) !important;
            display: block !important;
            opacity: 1 !important;
          }
          .sp-qr-label {
            font-size: 8px;
            bottom: -20px;
            left: 0;
            width: 100%;
            text-align: center;
          }
          .sp-title {
            font-size: 17px !important;
            max-width: 70%; /* Leave room for QR on the right */
          }
          .sp-subtitle {
            font-size: 11px !important;
            max-width: 70%;
          }
        }

        /* ══════════════════════════════════════
           SMALL MOBILE (≤ 360px)
        ══════════════════════════════════════ */
        @media (max-width: 360px) {
          .sp-card {
            aspect-ratio: 1 / 1; 
          }
          .sp-title {
            font-size: 15px !important;
          }
          .sp-subtitle {
            font-size: 10px !important;
          }
          .sp-qr-container {
            height: 65px;
            width: 65px;
            right: 10px;
            top: 38%;
          }
          .sp-qr-label {
            font-size: 7px;
            bottom: -18px;
          }
          .sp-btn {
            padding: 4px 8px;
            font-size: 9px;
          }
    
          .sp-overlay {
            padding: 10px 8px 8px;
            gap: 10px !important;
          }
          .sp-verified-badge {
            top: 8px;
            right: 8px;
            padding: 3px 7px;
            font-size: 8px;
          }
        }

        /* ══════════════════════════════════════
           MODAL
        ══════════════════════════════════════ */
        .sp-modal-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: spFadeIn 0.4s ease;
        }
        .sp-modal-content {
          position: relative;
          max-width: 95vw; max-height: 95vh;
          background: #fff;
          padding: 12px;
          border-radius: 24px;
          border: 1px solid rgba(244, 50, 82, 0.15);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          animation: spScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sp-modal-content-inner {
          position: relative;
          width: 90vw; 
          max-width: 1000px;
          height: 35vh; 
          max-height: 800px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .sp-modal-image {
          object-fit: contain;
          border-radius: 12px;
        }
        .sp-modal-close {
          position: absolute;
          top: -18px; right: -18px;
          width: 44px; height: 44px;
          background: linear-gradient(135deg, rgb(244, 50, 82), rgb(220, 20, 60));
          color: #fff;
          border: 2px solid #000; 
          border-radius: 50%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 50;
        }
        .sp-modal-close:hover { 
          transform: rotate(90deg) scale(1.1); 
          background: #fff; 
        }
        .sp-modal-close svg { width: 22px; height: 22px; }

        @media (max-width: 768px) {

        .sp-modal-content-inner{
          height: 12vh;
        }
        
          .sp-modal-overlay { padding: 10px; }
          .sp-modal-content { border-radius: 16px; padding: 8px; width: auto; height: 15vh;}
          .sp-modal-close { 
            top: -12px; 
            right: -12px; 
            width: 36px; 
            height: 36px; 
          }
          .sp-modal-close svg { width: 18px; height: 18px; }
        }

        @keyframes spFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes spScaleUp { from { transform: scale(0.95) translateY(10px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }

        .dark .sp-modal-content {
           background: #0a0a0a;
           border-color: hsl(75 100% 60% / 0.2);
           box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8);
        }

        /* ── Dark mode overrides ── */
        .dark .sp-card {
          box-shadow:
            0 0 0 1px hsl(75 100% 60% / 0.15),
            0 0 40px hsl(75 100% 60% / 0.12),
            0 8px 32px rgba(0,0,0,0.4);
        }
        .dark .sp-card:hover {
          box-shadow:
            0 0 0 1px hsl(75 100% 60% / 0.4),
            0 0 60px hsl(75 100% 60% / 0.22),
            0 12px 48px rgba(0,0,0,0.55);
        }
        .dark .sp-hover-bar {
          background: rgba(0,0,0,0.55);
          border: 1px solid hsl(75 100% 60% / 0.35);
        }
        .dark .sp-modal-content {
          background: #111;
          border: 1px solid hsl(75 100% 60% / 0.3);
          box-shadow: 0 0 50px rgba(0,0,0,0.8), 0 0 20px hsl(75 100% 60% / 0.1);
        }
      `}</style>

      <section className="sp-section">
        <div className="sp-wrapper">
          <div className="sp-cards">
            {projects.map((project, index) => (
              <div
                key={project.id}
                id={project.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={`sp-card sp-card-${index + 1}`}
              >
                <div className="sp-bg-container">
                  <Image
                    src={project.image}
                    alt={project.id}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    className="sp-bg"
                    priority={index === 0}
                    onError={(e) => { e.currentTarget.style.opacity = "0"; }}
                  />
                </div>

                <div className="sp-overlay">
                  {/* Verified badge */}
                  <div className="sp-verified-badge">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    VERIFIED
                  </div>

                  {/* QR — hover on desktop, always visible (small) on mobile */}
                  <div className="sp-qr-container">
                    <div className="sp-qr-container-inner">
                      <Image src={project.qr} alt="Verification" fill sizes="200px" className="sp-qr-image" />
                    </div>
                    <div className="sp-qr-label">{project.qrLabel || "Scan to Verify"}</div>
                  </div>

                  {/* Title block — center on desktop, left on mobile */}
                  <div className="text-center sp-title-block  sjhdbjhsbdhj">
                    <h2 className="sp-title sjhdbjhsbdhj">
                      <strong>{project.title}</strong>
                    </h2>
                    <p className="sp-subtitle sjhdbjhsbdhj">{project.subtitle}</p>
                  </div>

                  {/* Bottom action bar */}
                  <div className="sp-hover-bar">
                    <div className="sp-logo">
                      <Image
                        src={project.logo}
                        alt="logo"
                        fill
                        sizes="120px"
                        className="sp-logo-image"
                        style={{ filter: "none" }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    </div>
                    <a
                      href={project.link === "#" ? undefined : project.link}
                      target={project.link === "#" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="sp-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.id === "bscs" && project.popupImage) {
                          e.preventDefault();
                          setSelectedImage(project.popupImage);
                        }
                      }}
                    >
                      Verify Degree
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Image Popup */}
      {selectedImage && (
        <div className="sp-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="sp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="sp-modal-close" onClick={() => setSelectedImage(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="sp-modal-content-inner">
              <Image src={selectedImage} alt="Verification" fill className="sp-modal-image" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyProjects;
