import { Link } from "react-router-dom";
import { BrandName } from ".";

export default function FinalStartSection() {
  return (
    <section className="story-mode-section final-start-section">
      <p className="story-kicker step-pill-kicker">Final Step</p>
      <h2>
        Choose the <span className="pricing-emphasis-blue">next move</span> that fits where you are.
      </h2>
      <p>
        Need <span className="pricing-emphasis-green">hands-on tech help</span>? Route into <BrandName name="AskDaFT" /> booking.
        Need a <span className="pricing-emphasis-blue">bigger plan</span>, research help, or business support? Route into <BrandName name="DaFTitude" /> Services.
        Want to <span className="pricing-emphasis-yellow">learn first</span>? Start with the hubs and build your understanding before you ask for help.
      </p>
      <div className="game-actions centered">
        <Link className="game-btn primary" to="/booking/askdaft">Book Tech Help</Link>
        <Link className="game-btn secondary" to="/booking/services">Book Services</Link>
        <Link className="game-btn ghost" to="/tech-hub">Start Learning</Link>
        <Link className="game-btn ghost" to="/contact">General Contact</Link>
      </div>
    </section>
  );
}