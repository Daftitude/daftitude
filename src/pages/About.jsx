export default function About() {
  return (
    <>

      <header className="about-hero">
        <h1>👋 Meet Kyhl Hines</h1>
        <p>Founder & CEO of DaFTitude – Bridging the gap between people and technology.</p>
      </header>

      {/* About Me Section */}
      <section id="about-me" className="about-me-section">
        <div className="about-container">
          <div className="about-image">
            <img src="/img/About Me Section .png" alt="Kyhl Hines - CEO of DaFTitude" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hi, I'm Kyhl Hines, the founder and CEO of DaFTitude. With over a decade of experience in IT,
              network engineering, and smart tech solutions, I've dedicated my career to making technology simple,
              accessible, and effective for everyone.
            </p>
            <p>
              My journey began in the military, where I managed complex IT systems within high-stakes environments.
              From handling secure networks to developing efficient workflows, I learned the importance of precision,
              adaptability, and resilience. These experiences laid the foundation for DaFTitude — a company built to
              demystify technology and help people embrace it confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="mission-section">
        <h2>🌟 My Mission & Values</h2>
        <p>At DaFTitude, My mission is simple—make technology work for you, not the other way around.</p>

        <div className="values-container">
          <div className="value-card">
            <h3>💡 Simplicity</h3>
            <p>I break down complex tech into simple, manageable solutions for homes and businesses.</p>
          </div>
          <div className="value-card">
            <h3>🔒 Reliability</h3>
            <p>Whether it's network security or smart home systems, I deliver reliable, long-lasting results.</p>
          </div>
          <div className="value-card">
            <h3>🚀 Innovation</h3>
            <p>I'm always exploring the latest technologies to bring cutting-edge solutions to my clients.</p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="journey-section">
        <h2>📈 My Professional Journey</h2>
        <p>From military IT operations to founding DaFTitude, here’s a glimpse of my professional milestones:</p>

        <ul className="timeline">
          <li>
            <strong>2010–2016:</strong> Military IT Specialist – Managed secure networks and advanced tech systems
            in dynamic environments.
          </li>
          <li>
            <strong>2017–2021:</strong> Network Administrator at Jacobs – Specialized in LAN/WAN optimization,
            server management, and tech consulting.
          </li>
          <li>
            <strong>2022–Present:</strong> Founder of DaFTitude – Providing smart tech solutions, from smart homes
            to digital consulting, helping businesses and individuals thrive.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Simplify Your Tech?</h2>
        <p>Explore my services and discover how DaFTitude can make your life easier with smart tech solutions.</p>
        <a href="/services" className="cta-btn">View My Services</a>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Need Help? Contact Me</h2>
        <p>Don’t waste time fighting corporate support bots—talk to a real expert today!</p>
        <a href="tel:+1234567890" className="contact-btn">Call Now</a>
      </section>

    </>
  );
}