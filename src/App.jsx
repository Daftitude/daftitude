// App.jsx
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TechHub from './pages/TechHub';
import Crypto from './pages/Crypto';
import Footer from './components/Footer'
import FamilyLanding from './pages/DaftFamApp/FamilyLanding';
import DaftFamApp from './pages/DaftFamApp/App'; 


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
        <Route path="/family" element={<FamilyLanding />} />
        <Route path="/family/*" element={<DaftFamApp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;