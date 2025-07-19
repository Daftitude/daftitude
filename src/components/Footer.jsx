export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>DaFTitude</h3>
          <p>
            Smart Tech, Simple Solutions. We provide expert tech support,
            smart home setups, and digital services tailored to your needs.
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@daftitude.com">info@daftitude.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Location: Fayetteville, NC</p>
        </div>
        <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com" target="_blank" className="social-icon">🌐</a>
            <a href="https://www.twitter.com" target="_blank" className="social-icon">🐦</a>
            <a href="https://www.instagram.com" target="_blank" className="social-icon">📸</a>
            <a href="https://www.linkedin.com" target="_blank" className="social-icon">💼</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 DaFTitude. All rights reserved.</p>
      </div>
    </footer>
  );
}
