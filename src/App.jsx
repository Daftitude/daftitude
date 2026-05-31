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
import AskDaftDashboard from './pages/askdaft/AskDaftDashboard';
import AskDaftRequest from './pages/askdaft/AskDaftRequest';
import AskDaftTickets from './pages/askdaft/AskDaftTickets';
import AskDaftTicketDetail from './pages/askdaft/AskDaftTicketDetail';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
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
        <Route path="/askdaft/dashboard" element={<AskDaftDashboard />} />
        <Route path="/askdaft/request" element={<AskDaftRequest />} />
        <Route path="/askdaft/tickets" element={<AskDaftTickets />} />
        <Route path="/askdaft/tickets/:ticketId" element={<AskDaftTicketDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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