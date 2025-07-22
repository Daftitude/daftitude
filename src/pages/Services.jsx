import React from "react";
import ServicesHero from '../components/ServicesHero';

export default function Services() {
  return (
    <>
      <ServicesHero />

      {/* Existing detailed services */}
      <section id="services" className="services-page">
        {/* Keep the rest of your existing content unchanged here */}
      </section>

      {/* Pricing Table */}
      <section id="pricing-chart" className="service-detail">
        <h2>💰 Service Pricing Chart</h2>
        <p>Compare our flexible plans side-by-side to find the perfect fit for your needs.</p>

        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Starter Plan</th>
                <th>Standard Plan</th>
                <th>Premium Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>🌐 Website Development</td><td>$499</td><td>$999</td><td>Custom Quote</td></tr>
              <tr><td>📱 Digital Business Cards</td><td>$99</td><td>$199</td><td>Custom Quote</td></tr>
              <tr><td>📣 Social Media Management</td><td>$299/month</td><td>$599/month</td><td>Custom Quote</td></tr>
              <tr><td>📶 WiFi Optimization</td><td>$129</td><td>$299</td><td>Custom Quote</td></tr>
              <tr><td>💪 On-Demand Tech Help</td><td>$79</td><td>$199</td><td>$399/month</td></tr>
              <tr><td>🏠 Smart Home & Security</td><td>$199</td><td>$499</td><td>Custom Quote</td></tr>
              <tr><td>📺 Home Theater Setup</td><td>$149</td><td>$399</td><td>Custom Quote</td></tr>
              <tr><td>🖥️ Office Tech Support</td><td>$99</td><td>$249</td><td>$499/month</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Need Help? Contact Me</h2>
        <p>Don’t waste time fighting corporate support bots—talk to a real expert today!</p>
        <a href="tel:+12052108012" className="contact-btn">Call Now</a>
      </section>
    </>
  );
}
