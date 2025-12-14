// src/pages/Contact.jsx
import ContactHero from '../../components/contact/ContactHero';

export default function Contact() {
  return (
    <>
      <ContactHero />

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