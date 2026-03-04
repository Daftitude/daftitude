import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../index.css";

const STORAGE_KEY = "daftitude:taskType";

function getInitialMode() {
  try {
    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get("taskType");
    if (urlMode === "advanced") return "advanced";
    if (urlMode === "basic") return "basic";
  } catch {}

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "advanced") return "advanced";
    if (stored === "basic") return "basic";
  } catch {}

  return "basic";
}

export default function Hero({ logo, taskType, onTaskTypeChange }) {
  const [mode, setMode] = useState(taskType || getInitialMode());
  const isAdvanced = useMemo(() => mode === "advanced", [mode]);

  const setTaskType = (type) => {
    const next = type === "advanced" ? "advanced" : "basic";
    setMode(next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}

    // keep URL shareable
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("taskType", next);
      window.history.replaceState({}, "", url.toString());
    } catch {}

    if (onTaskTypeChange) onTaskTypeChange(next);
  };

  useEffect(() => {
    window.particlesJS?.("particles-js", {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 900 } },
        color: { value: "#0cc7f6" },
        shape: { type: "circle" },
        opacity: { value: 0.35 },
        size: { value: 2 },
        line_linked: {
          enable: true,
          distance: 160,
          color: "#0cc7f6",
          opacity: 0.25,
          width: 1,
        },
        move: { enable: true, speed: 1.4, direction: "none", out_mode: "out" },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 90 } },
      },
      retina_detect: true,
    });
  }, []);

  const chips = isAdvanced
    ? ["Automation", "Web Apps", "Security", "AI Workflows"]
    : ["Smart Home", "Wi-Fi", "TV Setup", "Security Cameras"];

  return (
    <section className={`hero hero--system hero--${mode}`}>
      <div id="particles-js" />

      {/* Mode wash overlay (animated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`wash-${mode}`}
          className={`hero-mode-wash ${isAdvanced ? "is-advanced" : "is-basic"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          aria-hidden="true"
        />
      </AnimatePresence>

      <div className="hero-content">
        {logo && <img src={logo} alt="DaFTitude Logo" className="hero-logo" />}

        {/* Title + subtitle swap with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`copy-${mode}`}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h1 className="hero-title hero-title--glow">
              {isAdvanced ? "DaFTitude" : "DaFT Tech"}
              <br />
              {isAdvanced ? "Helping Build Smarter Systems." : "Tech-Help Without The Headache."}
            </h1>

            <p className="hero-subtitle">
              {isAdvanced
                ? "Automation, AI workflows, web builds, security hardening, and modern technical systems."
                : "Smart home setups, Wi-Fi problems, TV installs, cameras, and everyday tech support."}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Onboarding selector */}
        <div className="hero-onboard">
          <div className="hero-onboard-label">Select your experience</div>

          <div className="hero-mode-grid">
            <button
              type="button"
              className={`hero-mode-card ${!isAdvanced ? "is-active" : ""}`}
              onClick={() => setTaskType("basic")}
            >
              <div className="hero-mode-top">
                <div className="hero-mode-icon">🛠️</div>
                <div>
                  <div className="hero-mode-title-row">
                    <h3 className="hero-mode-title">Basic</h3>
                    {!isAdvanced && <span className="hero-mode-badge">selected</span>}
                  </div>
                  <p className="hero-mode-desc">Quick help for everyday tech problems.</p>
                  <ul className="hero-mode-bullets">
                    <li>Smart device setup</li>
                    <li>Wi-Fi troubleshooting</li>
                    <li>TV / home theater installs</li>
                  </ul>
                </div>
              </div>
            </button>

            <button
              type="button"
              className={`hero-mode-card ${isAdvanced ? "is-active" : ""}`}
              onClick={() => setTaskType("advanced")}
            >
              <div className="hero-mode-top">
                <div className="hero-mode-icon">⚡</div>
                <div>
                  <div className="hero-mode-title-row">
                    <h3 className="hero-mode-title">Advanced</h3>
                    {isAdvanced && <span className="hero-mode-badge">selected</span>}
                  </div>
                  <p className="hero-mode-desc">
                    Systems, automation, and high-signal tech builds.
                  </p>
                  <ul className="hero-mode-bullets">
                    <li>Web apps & automation</li>
                    <li>Security hardening</li>
                    <li>AI integrations</li>
                  </ul>
                </div>
              </div>
            </button>
          </div>

          {/* Chips animate too */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`chips-${mode}`}
              className="hero-chip-row"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {chips.map((chip) => (
                <button
                  key={chip}
                  className="hero-chip"
                  type="button"
                  onClick={() => (window.location.href = "#services")}
                >
                  {chip}
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTAs animate based on mode */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`cta-${mode}`}
            className="hero-actions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <a href="#services" className="cta-btn">
              {isAdvanced ? "Explore Advanced →" : "Get Basic Help →"}
            </a>

            <a
              href={isAdvanced ? "#about" : "#services"}
              className="cta-btn cta-btn--ghost"
            >
              Learn More
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="scroll-down subtle">↓ scroll ↓</div>
      </div>
    </section>
  );
}