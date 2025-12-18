import HeroTechHub from "../../components/techhub/HeroTechHub";
import ContactCTA from '../../components/contact/ContactCTA';
import CommunityImpact from '../../components/CommunityImpact';
import CaseStudies from '../../components/techhub/CaseStudies';

export default function TechHub() {
  return (
    <>

      <HeroTechHub />
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
      <CaseStudies />
      <section className="techhub-cta">
        <h2>Got a Topic You Want Covered?</h2>
        <p>I'm always building new content. Let me know what you'd love to see in the Tech Hub.</p>
        <a href="/contact" className="cta-btn">Request a Topic</a>
      </section>
      <CommunityImpact />
      <ContactCTA />
    </>
  );
}
