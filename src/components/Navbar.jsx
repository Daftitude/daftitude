import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      if (window.location.pathname === link.getAttribute('href')) {
        link.classList.add('active');
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          <img src="/img/DaftitALL Logo3.png" alt="DaFTitude Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/tech-hub">Tech Hub</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact" className="cta-btn">Contact</a></li>
        </ul>
        <div className="mobile-menu-icon" aria-label="Toggle navigation menu" onClick={() => {}}>☰</div>
      </div>
    </nav>
  );
}
