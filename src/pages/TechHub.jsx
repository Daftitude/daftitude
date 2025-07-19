import Navbar from '../components/Navbar';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function TechHub() {
  return (
    <>
      <Navbar />

      <section className="techhub-hero">
        <h1>🧠 Tech Hub</h1>
        <p>
          Dive into tutorials, product reviews, how-tos, and troubleshooting tips curated to help you master your tech confidently.
        </p>
      </section>

      <section className="techhub-topics">
        <div className="topic">
          <h3>📦 Unboxings & Reviews</h3>
          <p>Get the real scoop on the latest devices and gadgets before you buy.</p>
        </div>
        <div className="topic">
          <h3>🛠️ DIY Setup & Fixes</h3>
          <p>Step-by-step guides for smart home installs, TV mounting, network fixes, and more.</p>
        </div>
        <div className="topic">
          <h3>📊 Product Comparisons</h3>
          <p>Side-by-side breakdowns of popular tech to help you pick the best fit for your needs.</p>
        </div>
        <div className="topic">
          <h3>🤖 AI & Automation Tips</h3>
          <p>Learn how to use AI tools, smart devices, and home automations to make life easier.</p>
        </div>
      </section>

      <section className="techhub-cta">
        <h2>Got a Topic You Want Covered?</h2>
        <p>We're always building new content. Let us know what you'd love to see in the Tech Hub.</p>
        <a href="/contact" className="cta-btn">Request a Topic</a>
      </section>
      <ContactCTA />
      <Footer />
    </>
  );
}

