// App.jsx
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Home from './pages/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import TechHub from './pages/techhub/TechHub';
import Crypto from './pages/crypto/Crypto';
import Family from './pages/family/Family';
import DaftAppRoutes from './pages/family/DaftFamApp/src/DaftAppRoutes';

import AskDaft from './pages/askdaft/AskDaft';
import AIHub from './pages/ai/AIHub';
import PrivacyHub from './pages/privacy/PrivacyHub';
import CybersecurityHub from './pages/cybersecurity/CybersecurityHub';
import Mission from './pages/mission/Mission';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Phase 1 public brand architecture */}
        <Route path="/askdaft" element={<AskDaft />} />
        <Route path="/ai" element={<AIHub />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/privacy" element={<PrivacyHub />} />
        <Route path="/cybersecurity" element={<CybersecurityHub />} />
        <Route path="/tech" element={<TechHub />} />
        <Route path="/techhub" element={<TechHub />} />
        <Route path="/tech-hub" element={<TechHub />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />

        {/* Existing routes kept alive */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/family" element={<Family />} />
        <Route path="/family/*" element={<DaftAppRoutes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;