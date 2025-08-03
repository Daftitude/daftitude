import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";

const FamilyHero = () => {
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
    <section className="relative pt-24 pb-32 bg-black text-white overflow-hidden">
      {/* Particle background */}
      <div id="about-particles" className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          👪 Welcome to DaFTitude Family
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join our community and manage your family ecosystem with ease, transparency, and a little bit of DaFT magic.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Log In
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyHero;