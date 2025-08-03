export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/img/About Me Section .png" alt="Kyhl Hines - CEO of DaFTitude" />
        </div>
        <div className="about-content">
          <h2>👋 About Me</h2>
          <h3>Kyhl Hines - CEO of DaFTitude</h3>
          <p>
            With over a decade of experience in IT, engineering optimization, and smart tech solutions,
            I founded DaFTitude to bridge the gap between technology and everyday life.
          </p>
          <p>
            Whether it's optimizing WiFi, setting up smart homes, or crafting sleek digital solutions,
            my mission is to make technology accessible, efficient, and stress-free for everyone.
          </p>
          <p>
            At DaFTitude, we believe technology should empower you, not overwhelm you. Our values center
            around innovation, reliability, and customer satisfaction.
          </p>
          <a href="./pages/about" className="learn-more-btn">Learn More →</a>
        </div>
      </div>
    </section>
  );
}
