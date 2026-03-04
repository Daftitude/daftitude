import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [advOpen, setAdvOpen] = useState(false);

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

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-logo">
        <img src="src\images\logos\daftitudelogo.png" alt="DaFTitude" />
        <span>DaFTitude</span>
      </div>

      <div className="navbar-links">

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={menuOpen ? "is-open" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li className="nav-dropdown">
            <button
              className="nav-dropbtn"
              onClick={() => setAdvOpen(!advOpen)}
            >
              Advanced
              <span className="nav-caret">▾</span>
            </button>

            <div className={`nav-dropdown-menu ${advOpen ? "is-open" : ""}`}>
              <Link to="/techhub">Tech Hub</Link>
              <Link to="/crypto">Crypto</Link>
              <Link to="/ai">AI</Link>
            </div>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}