import { useEffect } from "react";
import { Link } from "react-router-dom";
import serviceLogo from "../../images/logos/logo-service.png";

const ServicesHero = ({ taskType = "basic", onTaskTypeChange }) => {
  const isAdvanced = taskType === "advanced";

  useEffect(() => {
    window.particlesJS?.("services-particles", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#0cc7f6" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#0cc7f6",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });

    const handleScroll = () => {
      const y = window.scrollY;
      const hero = document.querySelector(".services-hero");
      if (hero) {
        hero.style.background = `radial-gradient(circle at center, rgba(12, 199, 246, ${1 - y / 600
          }), #0a0a0a)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subtitle = isAdvanced
    ? "Business-grade IT: infrastructure, security, cloud, automation, and fast triage."
    : "Home tech help: Wi-Fi, smart home, TVs, cameras, tune-ups, and on-demand support.";

  return (
    <section className="services-hero">
      <div id="services-particles"></div>

      <div className="hero-content">
        <img
          src={serviceLogo}
          alt="Services"
          className="services-logo"
        />
        <h1
          className="hero-title"
        >
          <span role="img" aria-label="toolbox">
            🧰
          </span>{" "}
          Services
        </h1>

        <p
          className="hero-subtitle"
        >
          {subtitle}
        </p>
        <div
          className="service-flow-steps"
        >
          <div className="service-step">
            <span className="step-number">1</span>
            <span>Select Service</span>
          </div>

          <div className="service-step">
            <span className="step-number">2</span>
            <span>Choose Package</span>
          </div>

          <div className="service-step">
            <span className="step-number">3</span>
            <span>Request Help</span>
          </div>
        </div>

        {/* Mode Switch */}
        <div
          className="hero-actions"
        >
          <button
            type="button"
            className={`cta-btn ${!isAdvanced ? "" : "cta-btn--ghost"}`}
            onClick={() => onTaskTypeChange?.("basic")}
            aria-pressed={!isAdvanced}
          >
            Basic Mode
          </button>

          <button
            type="button"
            className={`cta-btn ${isAdvanced ? "" : "cta-btn--ghost"}`}
            onClick={() => onTaskTypeChange?.("advanced")}
            aria-pressed={isAdvanced}
          >
            Advanced Mode
          </button>
        </div>

        <div
          className="hero-actions"
        >
          <a href="#pricing-reality" className="cta-btn cta-btn--ghost">
            View Packages
          </a>

          <Link to="/booking/services" className="cta-btn">
            Book Services
          </Link>
        </div>

        <div
          className="scroll-down"
        >
          ↓ scroll to explore ↓
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;