import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TechHub from './pages/TechHub';
import Crypto from './pages/Crypto'
import Footer from './components/Footer';

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
        </Routes>
      <Footer />
    </>
  );
}

export default App;