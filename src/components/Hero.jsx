import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";

const Hero = () => {
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
        move: {
          enable: true,
          speed: 1.4,
          direction: "none",
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 90 },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <section className="hero hero--system">
      <div id="particles-js" />

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          "Most problems aren’t that complicated.
          <br />
          Most solutions are."
          <br />
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Software, systems, and setups designed for real usage,
real constraints, and real people.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#about" className="cta-btn">
            How I Think →
          </a>

          <a href="#case-studies" className="cta-btn cta-btn--ghost">
            What I Build
          </a>
        </motion.div>

        <motion.div
          className="scroll-down subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.9 }}
        >
          ↓ scroll ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
