export default function Services() {
  return (
    <>

      <section id="services" className="services-page">
        <h2><span>MY</span> SERVICES</h2>
        <p className="services-intro">
          Comprehensive tech solutions tailored to your needs. Compare my flexible plans below
          to find the perfect fit for your home or business.
        </p>

        <div className="services-container">
          <section id="web-development" className="service-detail">
            <h3>🌐 Web Development & Digital Solutions</h3>
            <p>💡 Empower your business with sleek websites, modern digital business cards, and impactful social media strategies.</p>
            <ul>
              <li>Custom Website Creation (Responsive & SEO-Optimized)</li>
              <li>Digital Business Cards for Professionals & Teams</li>
              <li>Social Media Management for Brand Growth</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>

          <section id="digital-business-cards" className="service-detail">
            <h3>📱 Digital Business Cards</h3>
            <p>💡 Modern, sleek, and interactive digital business cards to elevate your professional image.</p>
            <ul>
              <li>Custom Design with Branding Options</li>
              <li>Clickable Contact Links & Social Integrations</li>
              <li>QR Code for Easy Sharing</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>

          <section id="social-media-management" className="service-detail">
            <h3>📣 Social Media Management</h3>
            <p>💡 Grow your brand's online presence with strategic content, engagement, and data-driven campaigns.</p>
            <ul>
              <li>Content Creation & Scheduling</li>
              <li>Ad Campaign Management</li>
              <li>Analytics & Growth Reports</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>

          <section id="wifi-optimization" className="service-detail">
            <h3>📶🚀 Home WiFi & Network Optimization</h3>
            <p>💡 Optimize your internet speed and coverage for seamless connectivity at home or in the office.</p>
            <ul>
              <li>WiFi Speed Testing & Optimization</li>
              <li>Mesh Network Setup for Full Coverage</li>
              <li>Advanced Security & Device Management</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>

          <section id="tech-help" className="service-detail">
            <h3>🛠️📱 On-Demand Tech Help</h3>
            <p>💡 Fast, flexible tech support whenever you need it—no waiting for corporate hotlines.</p>
            <ul>
              <li>Device Troubleshooting & Support</li>
              <li>Remote Tech Assistance Available</li>
              <li>Custom Tech Solutions for Homes & Businesses</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>

          <section id="smart-home" className="service-detail">
            <h3>🏠🔒 Smart Home & Security Installation</h3>
            <p>💡 Make your home smarter and safer with expert installations.</p>
            <ul>
              <li>Ring & Nest Camera Setup</li>
              <li>Smart Lock & Home Automation Integration</li>
              <li>Custom Security Solutions for Every Home</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>

          <section id="home-theater" className="service-detail">
            <h3>📺🎶 Home Theater & TV Mounting</h3>
            <p>💡 Create the ultimate entertainment experience.</p>
            <ul>
              <li>TV Mounting with Advanced Cable Management</li>
              <li>Home Theater & Surround Sound Setup</li>
              <li>Custom Multi-Room Audio Solutions</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>

          <section id="office-tech" className="service-detail">
            <h3>🖥️🖨️ Office Tech Support</h3>
            <p>💡 Reliable support for all your office needs.</p>
            <ul>
              <li>Printer & Scanner Setup</li>
              <li>Network Security & Remote Work Optimization</li>
              <li>Ongoing IT Support for Businesses</li>
            </ul>
            <a href="#pricing-chart" className="cta-btn">View Pricing Plans</a>
          </section>
        </div>
      </section>

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
              <tr><td>🛠️ On-Demand Tech Help</td><td>$79</td><td>$199</td><td>$399/month</td></tr>
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
        <a href="tel:+1234567890" className="contact-btn">Call Now</a>
      </section>

    </>
  );
}
