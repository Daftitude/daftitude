export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2><span>OUR</span> SERVICES</h2>
      <p className="services-intro">
        From websites to WiFi, tech help to home automation — DaFTitude simplifies it all. Here's a quick glimpse at how we help:
      </p>

      <div className="services-preview-grid">
        <div className="service-preview-card">
          <h3>🌐 Web & Digital</h3>
          <p>Modern websites, digital business cards, and social strategies that convert.</p>
        </div>
        <div className="service-preview-card">
          <h3>📶 WiFi & Networks</h3>
          <p>Speed tests, mesh installs, and full-home connectivity optimization.</p>
        </div>
        <div className="service-preview-card">
          <h3>🏠 Smart Home Setup</h3>
          <p>Automate and secure your home with camera, lock, and voice integrations.</p>
        </div>
        <div className="service-preview-card">
          <h3>🛠️ On-Demand Tech Help</h3>
          <p>Real support when you need it — no waiting, no BS, just solutions.</p>
        </div>
      </div>

      <a href="/services" className="cta-btn">See All Services →</a>
    </section>
  );
}
