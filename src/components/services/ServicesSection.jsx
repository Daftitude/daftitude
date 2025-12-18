export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2>What I Help With</h2>

      <p className="services-intro">
        Most tech problems come down to unclear systems, unnecessary complexity,
        or setups that weren’t built for real-world use.
        My work focuses on fixing those root issues.
      </p>

      <div className="services-feature-list">
        <div className="service-feature-card">
          <img
            src="..\..\src\images\services\clarity.png"
            alt="System analysis and diagnostics"
          />
          <div className="service-content">
            <h3>Clarity</h3>
            <p>
              Understanding what’s actually happening inside a system before
              touching tools or code.
            </p>
            <span className="service-meta">
              Audits • diagnostics • technical breakdowns
            </span>
          </div>
        </div>

        <div className="service-feature-card">
          <img
            src="..\..\src\images\services\structure.png"
            alt="System structure and architecture"
          />
          <div className="service-content">
            <h3>Structure</h3>
            <p>
              Designing systems that are intentional, explainable, and easy to
              reason about.
            </p>
            <span className="service-meta">
              Software • networks • smart environments
            </span>
          </div>
        </div>

        <div className="service-feature-card">
          <img
            src="..\..\src\images\services\stability.png"
            alt="System stability and reliability"
          />
          <div className="service-content">
            <h3>Stability</h3>
            <p>
              Making sure things keep working when usage changes, scale increases,
              or conditions aren’t ideal.
            </p>
            <span className="service-meta">
              Reliability • performance • security
            </span>
          </div>
        </div>

        <div className="service-feature-card">
          <img
            src="..\..\src\images\services\support.png"
            alt="Ongoing system support"
          />
          <div className="service-content">
            <h3>Support</h3>
            <p>
              Improving, maintaining, and fixing systems over time without
              introducing chaos.
            </p>
            <span className="service-meta">
              Ongoing help • iteration • refinement
            </span>
          </div>
        </div>
      </div>

      <a href="/services" className="cta-btn">
        See concrete examples →
      </a>
    </section>
  );
}
