// src/App.jsx
// App.jsx
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import TechHub from './pages/techhub/TechHub';
import Crypto from './pages/crypto/Crypto';
import Footer from './components/Footer'
import Family from './pages/family/Family';
import DaftFamApp from './pages/family/DaftFamApp/src/App'; 


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech-hub" element={<TechHub />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/family" element={<Family />} />
        <Route path="/family/*" element={<DaftFamApp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;