// src/pages/About.jsx
import React from "react";
import AboutHero from "../../components/about/AboutHero";

export default function About() {
  return (
    <>
      <AboutHero />

      {/* About Me Section */}
      <section id="about-me" className="about-me-section">
        <div className="section-container">
          <div className="about-container">
            <div className="about-image">
              <img src="/img/About Me Section .png" alt="Kyhl Hines - CEO of DaFTitude" />
            </div>
            <div className="about-content">
            <h2>About</h2>
            <p>
              I focus on understanding systems before changing them.
            </p>

            <p>
              Most technical problems aren’t caused by missing tools. They come from
              unclear assumptions, misaligned incentives, or systems that grew faster
              than their understanding.
            </p>

            <p>
              My work is centered on slowing things down just enough to see what’s
              actually happening — then designing solutions that make sense under
              real-world conditions, not ideal ones.
            </p>

          </div>
        </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="mission-section">
        <h2>How I Work</h2>

        <div className="values-container">
          <div className="value-card">
            <h3>Clarity Before Action</h3>
            <p>
              I don’t touch tools or code until the system is understood.
              Fast changes without understanding usually create slower problems.
            </p>
          </div>

          <div className="value-card">
            <h3>Constraints Are Signals</h3>
            <p>
              Real environments have limits — budget, time, people, and risk.
              Good solutions work with those constraints instead of ignoring them.
            </p>
          </div>

          <div className="value-card">
            <h3>Simple Beats Clever</h3>
            <p>
              Systems that can’t be explained clearly are hard to maintain calmly.
              Complexity has to earn its place.
            </p>
          </div>
        </div>

      </section>

      {/* Journey Section */}
      <section id="journey" className="journey-section">
        <h2>Background</h2>
        <p>
          My approach was shaped in environments where systems had to work —
          not look impressive.
        </p>

        <ul className="timeline">
          <li>
            <strong>Military IT:</strong> Supported secure, high-stakes systems
            where failure had real consequences.
          </li>
          <li>
            <strong>Enterprise & Network Engineering:</strong> Worked on
            infrastructure, optimization, and reliability across real production
            environments.
          </li>
          <li>
            <strong>DaFTitude:</strong> Applying those lessons to help people and
            organizations make technology clearer, calmer, and more reliable.
          </li>
        </ul>

      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Simplify Your Tech?</h2>
        <p>If you’re dealing with systems that feel more complicated than they should,
          we can start by understanding what’s actually happening.</p>
        <a href="/services" className="cta-btn">View My Services</a>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Need Help? Contact Me</h2>
        <p>Don’t waste time fighting corporate support bots—talk to a real expert today!</p>
        <a href="tel:+12052108012" className="contact-btn">Call Now</a>
      </section>
    </>
  );
}