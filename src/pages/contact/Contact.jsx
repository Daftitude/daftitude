// src/pages/Contact.jsx
import { Link } from 'react-router-dom';
import ContactHero from '../../components/contact/ContactHero';

export default function Contact() {
  return (
    <>
      <ContactHero />

      <section className="contact-route-strip page-shell" aria-label="Choose the right contact path">
        <div className="booking-path-grid contact-booking-grid">
          <Link to="/booking/askdaft" className="booking-path-card">
            <span>Tech Help</span>
            <strong>Book AskDaFT</strong>
            <small>Use this for devices, accounts, Wi-Fi, printers, scams, setup, and home or small business tech help.</small>
          </Link>

          <Link to="/booking/services" className="booking-path-card">
            <span>Business</span>
            <strong>Book Services</strong>
            <small>Use this for automation, AI workflows, privacy reviews, creator systems, and premium consulting.</small>
          </Link>

          <Link to="/booking" className="booking-path-card">
            <span>Not Sure</span>
            <strong>Start at Booking</strong>
            <small>Use this when you know you need help, but you are not sure which DaFTitude path fits.</small>
          </Link>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Send Me a Message</h2>
            <form action="mailto:Kyhl_Hines@daftitude.com" method="post" enctype="text/plain">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />

              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" required />

              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <a
          href="https://daftitude.github.io/digital-card-kyhl"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
        >
          View My Digital Business Card
        </a>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}