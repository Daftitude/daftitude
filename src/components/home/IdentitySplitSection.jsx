import { Link } from "react-router-dom";
import BrandName from "./BrandName";

export default function IdentitySplitSection() {
  return (
    <section className="story-mode-section split-identity-section">
      <div className="identity-panel daftitude-panel">
        <p className="story-kicker"><BrandName name="DaFTitude" /></p>
        <h2>
          What <BrandName name="DaFTitude" /> has <span className="pricing-emphasis-blue">built</span>, is <span className="pricing-emphasis-green">building</span>, and is <span className="pricing-emphasis-yellow">moving toward</span>.
        </h2>
        <p>
          <BrandName name="DaFTitude" /> is focused on <span className="pricing-emphasis-blue">cybersecurity education</span>, <span className="pricing-emphasis-yellow">research</span>, <span className="pricing-emphasis-green">public outreach</span>, and helping people understand the systems behind <span className="pricing-emphasis-blue">modern tech</span>, <span className="pricing-emphasis-green">AI</span>, <span className="pricing-emphasis-red">privacy</span>, <span className="pricing-emphasis-red">scams</span>, and <span className="pricing-emphasis-yellow">digital risk</span>.
        </p>
        <p>
          I am also accepting <span className="pricing-emphasis-green">contracts</span>, <span className="pricing-emphasis-yellow">consulting work</span>, and the right <span className="pricing-emphasis-blue">full-time opportunity</span> where software, cybersecurity, AI, education, and <span className="pricing-emphasis-green">public impact</span> overlap.
        </p>

        <div className="panel-buzz-row" aria-label="Current DaFTitude focus areas">
          <span title="Researching cybersecurity, scams, AI risk, privacy, and public-facing digital safety education.">Cybersecurity research</span>
          <span title="Building resources that help regular people understand modern digital risks before damage happens.">Public outreach</span>
          <span title="Open to contracts, consulting, and serious full-time opportunities connected to tech, security, and education.">Contracts / full-time work</span>
        </div>

        <div className="panel-action-row">
          <Link className="game-btn secondary" to="/contact">Contact DaFTitude</Link>
          <Link className="game-btn ghost" to="/tech">Research I’m Working On</Link>
        </div>
      </div>

      <div className="identity-panel askdaft-panel">
        <p className="story-kicker"><BrandName name="AskDaFT" /></p>
        <h2>
          What <BrandName name="AskDaFT" /> has <span className="pricing-emphasis-blue">helped with</span>, is <span className="pricing-emphasis-green">doing</span>, and is <span className="pricing-emphasis-yellow">focused on </span>.
        </h2>
        <p>
          <BrandName name="AskDaFT" /> is taking on more <span className="pricing-emphasis-yellow">senior</span> and <span className="pricing-emphasis-yellow">elderly</span> clients who need <span className="pricing-emphasis-green">patient</span>, plain-English help staying <span className="pricing-emphasis-green">connected</span>, <span className="pricing-emphasis-blue">safer</span>, and more confident with everyday technology.
        </p>
        <p>
          The goal is to help parents and grandparents stay <span className="pricing-emphasis-green">connected</span> and in the now: <span className="pricing-emphasis-red">phones</span>, <span className="pricing-emphasis-yellow">portals</span>, <span className="pricing-emphasis-red">scams</span>, <span className="pricing-emphasis-green">accounts</span>, <span className="pricing-emphasis-blue">smart devices</span>, home tech, and the tools they depend on but may not feel comfortable using alone.
        </p>

        <div className="panel-buzz-row" aria-label="Current AskDaFT focus areas">
          <span title="Patient tech help for seniors, parents, grandparents, and people who do not want to feel rushed.">Senior-friendly tech help</span>
          <span title="Helping families stay connected through phones, video calls, portals, accounts, and everyday devices.">Family connection support</span>
          <span title="Plain-English help with scam awareness, suspicious messages, passwords, portals, and safer digital habits.">Safety and scam support</span>
        </div>

        <div className="panel-action-row">
          <Link className="game-btn primary" to="/askdaft">Visit AskDaFT</Link>
          <Link className="game-btn ghost" to="/contact">Ask About Help</Link>
        </div>
      </div>
    </section>
  );
}