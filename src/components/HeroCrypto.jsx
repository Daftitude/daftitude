import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";

const HeroCrypto = () => {
  useEffect(() => {
    window.particlesJS?.("crypto-particles", {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
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
  }, []);

  return (
    <section className="hero">
      <div id="crypto-particles"></div>
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span role="img" aria-label="coin">📊</span> Track Your Crypto Like a Pro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Live prices, portfolio growth, and your strategy — all in one spot.
        </motion.p>

        <motion.div
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
        >
          ↓ scroll to explore ↓
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCrypto;