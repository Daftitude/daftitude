import { Link } from "react-router-dom";

export default function AskDaftHero() {
  return (
    <section className="phase-hero askdaft-hero">
      <div className="phase-eyebrow">Powered by DaFTitude</div>
      <h1>AskDaFT Support</h1>
      <p className="phase-lede">
        <span className="pricing-emphasis-green">Tech help</span> that starts with the <span className="pricing-emphasis-yellow">problem</span>, not the paperwork.
      </p>
      <p className="phase-sublede">
        Pick the <span className="pricing-emphasis-yellow">issue</span>. Add <span className="pricing-emphasis-blue">details</span>. Choose how you want <span className="pricing-emphasis-green">help</span>. Start as a guest, or log in to save your request.
      </p>

      <div className="phase-hero-actions">
        <Link className="phase-btn phase-btn-primary" to="/askdaft/request">
          Start Request
        </Link>
        <Link className="phase-btn phase-btn-secondary" to="/login?source=askdaft">
          Log In
        </Link>
        <a className="phase-btn phase-btn-ghost" href="/askdaft/request">
          Compare Request Modes
        </a>
      </div>

      <div className="askdaft-entry-strip" aria-label="AskDaFT entry options">
        <article>
          <strong>Guest</strong>
          <span>Fastest path. No account needed.</span>
        </article>
        <article>
          <strong>Login</strong>
          <span>Save requests, devices, notes, and history.</span>
        </article>
        <article>
          <strong>Subscribe</strong>
          <span>Better for repeat help and ongoing support.</span>
        </article>
      </div>
    </section>
  );
}
