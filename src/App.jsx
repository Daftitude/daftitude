// App.jsx
import Navbar from './components/common/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import TechHub from './pages/techhub/TechHub';
import Crypto from './pages/crypto/Crypto';
import Footer from './components/common/Footer'
import Family from './pages/family/Family';
import DaftAppRoutes from './pages/family/DaftFamApp/src/DaftAppRoutes';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tech-hub" element={<TechHub />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/family" element={<Family />} />
        <Route path="/family/*" element={<DaftAppRoutes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;