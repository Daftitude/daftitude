// App.jsx
import { useEffect, useMemo, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingPageTools from './components/home/FloatingPageTools';

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

const BOOKING_LANES = {
  hub: {
    kicker: 'DaFTitude Booking Spine',
    title: 'Route the request before the work starts.',
    text: 'Booking is where DaFTitude turns interest into action: tech help, business systems, enterprise support, quotes, scheduling, and future payments all start here.',
    intent: 'Choose Path',
  },
  askdaft: {
    kicker: 'AskDaFT Booking',
    title: 'Start a practical tech help request.',
    text: 'Use this path for home tech, devices, accounts, Wi-Fi, printers, gaming consoles, smart TVs, suspicious messages, setup help, and small business tech support.',
    intent: 'AskDaFT Tech Help',
  },
  services: {
    kicker: 'DaFTitude Services Booking',
    title: 'Book business systems and premium support.',
    text: 'Use this path for automation, AI workflows, cybersecurity and privacy reviews, creator systems, consulting, premium residential support, and technical strategy.',
    intent: 'DaFTitude Services',
  },
  enterprise: {
    kicker: 'Enterprise Booking',
    title: 'Start a higher-touch client request.',
    text: 'Use this path for logged-in service requests, support history, payments, retainers, system planning, enterprise needs, and ongoing business support.',
    intent: 'Enterprise Flow',
  },
  payment: {
    kicker: 'Booking Payment',
    title: 'Review your quote, invoice, or payment path.',
    text: 'This route will support plan checkout, invoice payment, quote approval, deposits, and request-specific payment summaries.',
    intent: 'Payment Review',
  },
};

const SERVICE_LABELS = {
  diagnose: 'Fix It / Diagnose It',
  setup: 'Setup & Install',
  stability: 'Keep It Stable',
  support: 'On-Demand / Business IT Support',
};

const PACKAGE_LABELS = {
  wifi: 'Wi-Fi Troubleshooting',
  smarthome: 'Smart Home / Security Setup',
  tv: 'TV / Home Theater',
  pc: 'Computer Fix / Tune-Up',
  ondemand: 'On-Demand Tech Help',
  other: 'Not Sure What You Need?',
  infra: 'Network Infrastructure Setup',
  security: 'Cybersecurity Hardening',
  cloud: 'Cloud & Workspace Setup',
  automation: 'Automation / Workflows',
  ai: 'AI Tool Integration',
  support: 'Business IT Support',
};

function BookingPage({ lane = 'hub' }) {
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get('service');
  const packageParam = params.get('package');
  const deviceParam = params.get('device');
  const current = BOOKING_LANES[lane] || BOOKING_LANES.hub;

  const requestSummary = useMemo(() => {
    const rows = [
      ['Path', current.intent],
      serviceParam ? ['Service', SERVICE_LABELS[serviceParam] || serviceParam] : null,
      packageParam ? ['Package', PACKAGE_LABELS[packageParam] || packageParam] : null,
      deviceParam ? ['Device', deviceParam] : null,
      ['Account', 'Guest for now'],
      ['Status', lane === 'payment' ? 'Payment route placeholder' : 'Intake not submitted yet'],
    ];

    return rows.filter(Boolean);
  }, [current.intent, deviceParam, lane, packageParam, serviceParam]);

  const nextSteps = lane === 'hub'
    ? ['Pick the lane that matches your need.', 'Continue as guest or log in later.', 'Complete intake when the full form is wired.']
    : lane === 'payment'
    ? ['Review quote or invoice details.', 'Confirm service request scope.', 'Pay deposit or approve final amount once payments are wired.']
    : ['Confirm what kind of help you need.', 'Add context, urgency, and contact method.', 'Review estimate and submit the request.'];

  return (
    <main className="booking-page page-shell">
      <section className="booking-hero">
        <div className="booking-hero-copy">
          <p className="section-kicker">{current.kicker}</p>
          <h1>{current.title}</h1>
          <p>{current.text}</p>

          <div className="booking-hero-actions">
            <Link to="/login?source=booking" className="booking-btn booking-btn-primary">
              Log In for Saved Context
            </Link>
            <a href="#booking-paths" className="booking-btn booking-btn-secondary">
              Continue as Guest
            </a>
          </div>
        </div>

        <aside className="booking-summary-card" aria-label="Current booking summary">
          <span className="booking-summary-kicker">Current Request</span>
          <h2>{current.intent}</h2>

          <div className="booking-summary-list">
            {requestSummary.map(([label, value]) => (
              <div className="booking-summary-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="booking-paths" className="booking-path-section" aria-label="Booking paths">
        <div className="booking-section-head">
          <p className="section-kicker">Choose Your Path</p>
          <h2>Route the request before the form.</h2>
          <p>
            Home should send people here when they are ready to act. Contact stays for general messages; Booking handles service requests, estimates, scheduling, payments, and logged-in support context.
          </p>
        </div>

        <div className="booking-path-grid">
          <Link to="/booking/askdaft" className={`booking-path-card ${lane === 'askdaft' ? 'is-active' : ''}`}>
            <span>AskDaFT</span>
            <strong>Tech Help</strong>
            <small>Home devices, accounts, Wi-Fi, printers, suspicious links, setup help, and small business tech support.</small>
          </Link>

          <Link to="/booking/services" className={`booking-path-card ${lane === 'services' ? 'is-active' : ''}`}>
            <span>DaFTitude</span>
            <strong>Services</strong>
            <small>Business systems, automation, AI workflows, cybersecurity/privacy reviews, creator systems, and consulting.</small>
          </Link>

          <Link to="/booking/enterprise" className={`booking-path-card ${lane === 'enterprise' ? 'is-active' : ''}`}>
            <span>Enterprise</span>
            <strong>Client Flow</strong>
            <small>Logged-in service requests, retainers, payments, support history, system planning, and higher-touch business support.</small>
          </Link>

          <Link to="/booking/payment" className={`booking-path-card ${lane === 'payment' ? 'is-active' : ''}`}>
            <span>Payment</span>
            <strong>Quote / Invoice</strong>
            <small>Future route for deposits, quote approvals, invoice payment, and request-specific checkout summaries.</small>
          </Link>
        </div>
      </section>

      <section className="booking-intake-preview" aria-label="Booking intake preview">
        <div className="booking-intake-card">
          <p className="section-kicker">Quick Intake</p>
          <h2>What this flow will collect.</h2>
          <div className="booking-intake-grid">
            <div>
              <span>01</span>
              <strong>What do you need?</strong>
              <p>Repair, setup, maintenance, consulting, automation, security review, or unsure.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Who is this for?</strong>
              <p>Personal/home, small business, creator, premium residential, or enterprise.</p>
            </div>
            <div>
              <span>03</span>
              <strong>How urgent is it?</strong>
              <p>Flexible, this week, urgent, scheduled project, or ongoing support.</p>
            </div>
            <div>
              <span>04</span>
              <strong>How should we respond?</strong>
              <p>Email, phone, remote help, in-person visit, quote, or logged-in request.</p>
            </div>
          </div>
        </div>

        <aside className="booking-next-card">
          <p className="section-kicker">Next Steps</p>
          <ol>
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <Link to="/contact" className="booking-btn booking-btn-secondary">
            General Contact Instead
          </Link>
        </aside>
      </section>
    </main>
  );
}

function App() {
  const [globalMode, setGlobalMode] = useState(() => {
    return localStorage.getItem('daftitude:viewMode') || 'basic';
  });
  const [readingImpairmentMode, setReadingImpairmentMode] = useState(() => {
    return localStorage.getItem('daftitude:readingMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('daftitude:viewMode', globalMode);
    document.documentElement.dataset.viewMode = globalMode;
  }, [globalMode]);

  useEffect(() => {
    localStorage.setItem('daftitude:readingMode', String(readingImpairmentMode));
    document.body.classList.toggle('reading-impairment-mode', readingImpairmentMode);
  }, [readingImpairmentMode]);

  useEffect(() => {
    let cancelled = false;

    const mountParticles = () => {
      const target = document.getElementById('global-particles');

      if (cancelled || !target || !window.particlesJS) return;
      if (target.querySelector('canvas')) return;

      window.particlesJS.load('global-particles', '/particles-config.json');
    };

    if (window.particlesJS) {
      mountParticles();
      return () => {
        cancelled = true;
      };
    }

    const existingScript = document.querySelector('script[data-daftitude-particles="true"]');

    if (existingScript) {
      existingScript.addEventListener('load', mountParticles, { once: true });
      return () => {
        cancelled = true;
        existingScript.removeEventListener('load', mountParticles);
      };
    }

    const script = document.createElement('script');
    script.src = '/particles.min.js';
    script.async = true;
    script.dataset.daftitudeParticles = 'true';
    script.addEventListener('load', mountParticles, { once: true });
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.removeEventListener('load', mountParticles);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div id="global-particles" className="global-particles-layer" aria-hidden="true" />
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
        <Route path="/booking" element={<BookingPage lane="hub" />} />
        <Route path="/booking/askdaft" element={<BookingPage lane="askdaft" />} />
        <Route path="/booking/services" element={<BookingPage lane="services" />} />
        <Route path="/booking/enterprise" element={<BookingPage lane="enterprise" />} />
        <Route path="/booking/payment" element={<BookingPage lane="payment" />} />

        {/* Existing routes kept alive */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/family" element={<Family />} />
        <Route path="/family/*" element={<DaftAppRoutes />} />
      </Routes>
      <FloatingPageTools
        mode={globalMode}
        setMode={setGlobalMode}
        readingImpairmentMode={readingImpairmentMode}
        setReadingImpairmentMode={setReadingImpairmentMode}
        scrollToTop={scrollToTop}
        advancedHref="/askdaft/request"
        basicHref="/askdaft"
      />
      <Footer />
    </>
  );
}

export default App;