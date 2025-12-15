export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/img/About Me Section .png" alt="Kyhl Hines - CEO of DaFTitude" />
        </div>
        <div className="about-content">
          <h2>About</h2>

          <p>
            I’ve spent years working with technology in environments where things
            actually matter — networks that can’t go down, systems people depend on,
            and setups that need to work outside of ideal conditions.
          </p>

          <p>
            Over time, one pattern became obvious: most problems are straightforward,
            but they get buried under unnecessary complexity, assumptions, and tools
            added without a clear reason.
          </p>

          <p>
            My approach is simple. I focus on understanding how a system behaves in the
            real world, design around constraints instead of fighting them, and avoid
            adding complexity unless it earns its place.
          </p>

          <p>
            That mindset carries through everything I work on — software, networks,
            smart systems, and workflows. If it can’t be explained clearly or maintained
            calmly, it probably doesn’t belong.
          </p>

          <a href="/about" className="learn-more-btn">
            More context →
          </a>
        </div>
      </div>
    </section>
  );
}
