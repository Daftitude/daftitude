
import Hero from '../components/Hero';
import AboutSection from '../components/about/AboutSection';
import ServicesSection from "../components/services/ServicesSection";
import ServicePackages from '../components/services/ServicePackages';
import ContactCTA from '../components/contact/ContactCTA';
import CommunityImpact from '../components/CommunityImpact';
import CaseStudies from '../components/techhub/CaseStudies';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ServicePackages />
      <ContactCTA />
      <CaseStudies />
      <CommunityImpact />
      <ContactCTA />
    </>
  );
}