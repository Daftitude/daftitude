import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from "../components/ServicesSection";
import ServicePackages from '../components/ServicePackages';
import ContactCTA from '../components/ContactCTA';
import CommunityImpact from '../components/CommunityImpact';
import TechHubSection from '../components/TechHubSection';
import TechUpdates from '../components/TechUpdates';
import CaseStudies from '../components/CaseStudies';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ServicePackages />
      <ContactCTA />
      <CommunityImpact />
      <TechHubSection />
      <TechUpdates />
      <CaseStudies />
      <Footer />
    </>
  );
}