import { Link } from "react-router-dom";

export default function QuickContactCTA() {
  return (
    <section className="quick-contact-cta" aria-label="Quick contact options">
      <div className="quick-contact-card">
        <p className="story-kicker">Need Help Now?</p>
        <h2>
          Still have <span className="pricing-emphasis-yellow">questions</span> or need <span className="pricing-emphasis-green">help now</span>?
        </h2>
        <p>
          Text or call, DM me on socials, or email me if you like doing things the dinosaur way.
        </p>

        <div className="quick-contact-actions">
          <a className="quick-contact-btn primary" href="sms:+12052108012">
            Text Me
            <span>+1 (205) 210-8012</span>
          </a>
          <a className="quick-contact-btn secondary" href="tel:+12052108012">
            Call Now
            <span>Open phone app</span>
          </a>
          <Link className="quick-contact-btn ghost" to="/contact">
            DM on Socials
            <span>Find the links</span>
          </Link>
          <a className="quick-contact-btn ghost" href="mailto:Kyhl.Hines@daftitude.com?subject=DaFTitude%20Help%20Request">
            Email
            <span>Dinosaur mode</span>
          </a>
        </div>
      </div>
    </section>
  );
}