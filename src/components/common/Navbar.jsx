import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/daftitudelogo.png";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (!navRef.current) return;
      const h = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--navbar-h", `${h}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setTechOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav ref={navRef} className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="DaFTitude" />
        <span>DaFTitude</span>
      </Link>

      <div className="navbar-links">

        <button
          className={`navbar-hamburger ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={menuOpen ? "is-open" : ""}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/askdaft" onClick={closeMenu} className="nav-askdaft-pill">
              AskDaft
            </Link>
          </li>

          <li className="nav-dropdown">
            <button
              type="button"
              className="nav-dropbtn"
              onClick={() => {
                setTechOpen(!techOpen);
                setAboutOpen(false);
              }}
              aria-expanded={techOpen}
            >
              Tech Hub
              <span className="nav-caret">▾</span>
            </button>

            <div className={`nav-dropdown-menu ${techOpen ? "is-open" : ""}`}>
              <Link to="/tech" onClick={closeMenu}>Tech Overview</Link>
              <Link to="/ai" onClick={closeMenu}>AI Hub</Link>
              <Link to="/crypto" onClick={closeMenu}>Crypto</Link>
              <Link to="/privacy" onClick={closeMenu}>Privacy</Link>
              <Link to="/cybersecurity" onClick={closeMenu}>Cybersecurity</Link>
            </div>
          </li>

          <li className="nav-dropdown">
            <button
              type="button"
              className="nav-dropbtn"
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setTechOpen(false);
              }}
              aria-expanded={aboutOpen}
            >
              About
              <span className="nav-caret">▾</span>
            </button>

            <div className={`nav-dropdown-menu ${aboutOpen ? "is-open" : ""}`}>
              <Link to="/mission" onClick={closeMenu}>Mission</Link>
              <Link to="/about" onClick={closeMenu}>About DaFTitude</Link>
              <Link to="/services" onClick={closeMenu}>Legacy Services</Link>
            </div>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}