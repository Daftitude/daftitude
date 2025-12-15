import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../index.css";

const AboutHero = () => {
  useEffect(() => {
    window.particlesJS?.("about-particles", {
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
  }, []);

  return (
    <section className="about-hero services-hero">
      <div id="about-particles"></div>
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🙋‍♂️ Get to Know DaFTitude
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Learn about our mission, values, and the story behind DaFTitude.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;