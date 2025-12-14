export default function CaseStudies() {
  return (
    <section id="case-studies">
      <h2>📊 Case Studies</h2>
      <p>Discover how DaFTitude has transformed businesses and homes with smart tech solutions.</p>
      <div className="case-container">
        <div className="case-card">
          <h3>Smart Home Overhaul</h3>
          <p>How I optimized security and automation for a busy family in under a week.</p>
          <a href="/service#smart-home" className="cta-btn">View Details</a>
        </div>
        <div className="case-card">
          <h3>WiFi Rescue Mission</h3>
          <p>Fixing slow internet issues for a remote team working from home.</p>
          <a href="/service#wifi-optimization" className="cta-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
}
