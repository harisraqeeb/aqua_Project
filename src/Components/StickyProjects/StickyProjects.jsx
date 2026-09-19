
import React, { useEffect, useRef } from "react";
import "./StickyProjects.css";

const projects = [
    {
        id: "purification",
        title: <>9-Stage <br className="njnj" /> Purification Process</>,
        subtitle: "WHO & PSQCA Certified Water Quality",
        badge: "CERTIFIED",
        tag: "PURITY STANDARD",
        image: "/Images/purification_plant.png",
        logo: "/Images/purity_badge.svg",
        description: "Our state-of-the-art 9-stage computerized filtration removes all contaminants while retaining essential minerals — delivering water that is 99.9% pure.",
        stat: "99.9% Pure",
    },
    {
        id: "quality",
        title: <>In-House <br className="njnj" /> Quality Lab</>,
        subtitle: "ISO 9001:2015 | Daily Testing Protocol",
        badge: "ISO CERTIFIED",
        tag: "QUALITY ASSURANCE",
        image: "/Images/quality_lab.png",
        logo: "/Images/purity_badge.svg",
        description: "Every batch is tested in our accredited quality laboratory before dispatch. Our specialists run 12+ daily tests to ensure every sip meets international standards.",
        stat: "12+ Daily Tests",
    },
    {
        id: "delivery",
        title: <>Same-Day <br className="njnj" /> Doorstep Delivery</>,
        subtitle: "Serving Homes, Offices & Events",
        badge: "TRUSTED",
        tag: "FAST DELIVERY",
        image: "/Images/delivery_van_cover.png",
        logo: "/Images/purity_badge.svg",
        description: "From a single bottle to bulk orders — Aqua Clear delivers fresh, sealed water directly to your home, office, or event venue. On-time, every time.",
        stat: "500+ Daily Orders",
    },
];

const StickyProjects = () => {
    const cardsRef = useRef([]);

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
                                    <img
                                        src={project.image}
                                        alt={project.id}
                                        className="sp-bg"
                                        onError={(e) => { e.currentTarget.style.opacity = "0"; }}
                                    />
                                </div>

                                <div className="sp-overlay">
                                    {/* Top row: badges */}
                                    <div className="sp-top-row">
                                        <div className="sp-verified-badge">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                            {project.badge}
                                        </div>
                                        <div className="sp-tag-badge">{project.tag}</div>
                                    </div>

                                    {/* Center stat */}
                                    <div className="sp-stat-center">
                                        <span className="sp-stat-number">{project.stat}</span>
                                    </div>

                                    {/* Title block */}
                                    <div className="sp-title-block sjhdbjhsbdhj">
                                        <h2 className="sp-title sjhdbjhsbdhj">
                                            <strong>{project.title}</strong>
                                        </h2>
                                        <p className="sp-subtitle sjhdbjhsbdhj">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    {/* Bottom info bar — no button, just logo + description */}
                                    <div className="sp-hover-bar">
                                        <div className="sp-logo">
                                            <img
                                                src={project.logo}
                                                alt="Aqua Clear"
                                                className="sp-logo-image"
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                onError={(e) => { e.currentTarget.style.display = "none"; }}
                                            />
                                        </div>
                                        <p className="sp-desc-text">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StickyProjects;
