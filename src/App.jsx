// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Crypto from './pages/Crypto/Crypto';
import Family from './pages/family/Family';
import Contact from './pages/contact/Contact';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/crypto">Crypto</Link>
        <Link to="/family">Family</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/family" element={<Family />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}