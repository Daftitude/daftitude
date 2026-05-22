import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand-card">
          <h3 className="footer-logo">
            <span className="brand-word brand-word-daftitude">
              <span className="brand-daft">DaFT</span>
              <span className="brand-itude">itude</span>
            </span>
          </h3>
          <p>
            Practical tech help, plain-English education, AI workflow planning, and safer digital decisions.
          </p>
          <div className="footer-mini-tags" aria-label="DaFTitude focus areas">
            <span>Tech Help</span>
            <span>AI</span>
          </div>
        </div>

        <div className="footer-link-card">
          <h4>Explore</h4>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/askdaft">AskDaFT Help</Link>
            <Link to="/tech">Tech Hub</Link>
            <Link to="/crypto">Crypto</Link>
            <Link to="/mission">Mission</Link>
          </nav>
        </div>

        <div className="footer-contact-card">
          <h4>Contact</h4>
          <p>
            <span>Email</span>
            <a href="mailto:Kyhl.Hines@daftitude.com">Kyhl.Hines@daftitude.com</a>
          </p>
          <p>
            <span>Call / Text</span>
            <a href="tel:+12052108012">+1 (205) 210 8012</a>
          </p>
          <p>
            <span>Location</span>
            Birmingham, AL
          </p>
          <Link className="footer-contact-btn" to="/contact">
            Contact DaFTitude
          </Link>
        </div>

        <div className="footer-social-card">
          <h4>Follow</h4>
          <div className="social-media" aria-label="Social media links">
            <a href="https://x.com/DaFTitude" target="_blank" rel="noreferrer" className="social-icon" aria-label="DaFTitude on X">𝕏</a>
            <a href="https://www.instagram.com/daftitude/" target="_blank" rel="noreferrer" className="social-icon" aria-label="DaFTitude on Instagram">📸</a>
            <a href="https://www.tiktok.com/@daftitude" target="_blank" rel="noreferrer" className="social-icon" aria-label="DaFTitude on TikTok">♪</a>
            <a href="https://www.youtube.com/@DaFTitude" target="_blank" rel="noreferrer" className="social-icon" aria-label="DaFTitude on YouTube">▶</a>
            <a href="https://www.github.com/Daftitude" target="_blank" rel="noreferrer" className="social-icon" aria-label="DaFTitude on GitHub">⌘</a>
            <a href="https://www.linkedin.com/in/kyhl-hines-45896517b/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Kyhl Hines on LinkedIn">in</a>
          </div>
          <p className="footer-social-note">
            Building around tech, AI, privacy, security, and useful systems.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} DaFTitude. Built for practical digital confidence.</p>
      </div>
    </footer>
  );
}
