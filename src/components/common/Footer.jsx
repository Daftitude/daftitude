export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>DaFTitude</h3>
          <p>
            Smart Tech, Simple Solutions. I provide expert tech support,
            smart home setups, and digital services tailored to your needs.
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact Me</h4>
          <p>Email: <a href="mailto:info@daftitude.com">Kyhl_Hines@daftitude.com</a></p>
          <p>Phone: <a href="tel:+12052108012">+1 (205) 210 8012</a></p>
          <p>Location: Birmingham, AL</p>
        </div>
        <div className="social-media">
            <h3>Follow Me</h3>
            <a href="https://www.facebook.com" target="_blank" className="social-icon">🌐</a>
            <a href="https://x.com/DaFTitude" target="_blank" className="social-icon">🐦</a>
            <a href="https://www.instagram.com/daftitude/" target="_blank" className="social-icon">📸</a>
            <a href="https://www.tiktok.com/@daftitude" target="_blank" className="social-icon">📹</a>
            <a href="https://www.youtube.com/@DaFTitude" target="_blank" className="social-icon">🎥</a>
            <a href="https://www.github.com/Daftitude" target="blank" className="social-icon">🖥️</a>
            <a href="https://www.linkedin.com/in/kyhl-hines-45896517b/" target="_blank" className="social-icon">💼</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 DaFTitude. All rights reserved.</p>
      </div>
    </footer>
  );
}
