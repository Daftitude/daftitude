export default function CaseStudies() {
  return (
    <section id="system-briefs" className="system-briefs">
      <header className="system-briefs-header">
        <h2>📁 System Briefs</h2>
        <p>
          Short, current observations on how real-world systems behave under
          pressure — platforms, markets, and technology.
        </p>
      </header>

      <div className="briefs-grid">
        {/* 1 */}
        <article className="brief-card">
          <h3>Why Skill-Based Matchmaking Still Feels Unfair</h3>
          <p className="brief-excerpt">
            Competitive matchmaking systems aim for balance, yet player trust
            often erodes even when outcomes are statistically fair.
          </p>
          <div className="brief-meta">
            <span>Games</span>
            <span>Matchmaking</span>
            <span>Dec 2025</span>
          </div>
          <a href="/tech-hub/matchmaking" className="brief-link">
            Read →
          </a>
        </article>

        {/* 2 */}
        <article className="brief-card">
          <h3>Dating Apps Are Optimizing for Engagement, Not Matches</h3>
          <p className="brief-excerpt">
            Dating platforms increasingly reward attention and retention over
            successful long-term outcomes.
          </p>
          <div className="brief-meta">
            <span>Platforms</span>
            <span>Algorithms</span>
            <span>Dec 2025</span>
          </div>
          <a href="/tech-hub/dating-apps" className="brief-link">
            Read →
          </a>
        </article>

        {/* 3 */}
        <article className="brief-card">
          <h3>Flock Safety Cameras and the Normalization of Surveillance</h3>
          <p className="brief-excerpt">
            License plate recognition systems are spreading rapidly, reshaping
            expectations around privacy and public safety.
          </p>
          <div className="brief-meta">
            <span>Security</span>
            <span>Society</span>
            <span>Dec 2025</span>
          </div>
          <a href="/tech-hub/flock-safety" className="brief-link">
            Read →
          </a>
        </article>

        {/* 4 */}
        <article className="brief-card brief-coming-soon">
          <h3>Social Media Is Reshaping Behavior Faster Than We Can Measure It</h3>
          <p className="brief-excerpt coming-soon-text">
            Coming soon.
          </p>
          <div className="brief-meta">
            <span>Platforms</span>
            <span>Psychology</span>
          </div>
        </article>

        {/* 5 */}
        <article className="brief-card brief-coming-soon">
          <h3>Subscription Fatigue Is a Systemic Design Choice</h3>
          <p className="brief-excerpt coming-soon-text">
            Coming soon.
          </p>
          <div className="brief-meta">
            <span>Economy</span>
            <span>Products</span>
          </div>
        </article>

        {/* 6 */}
        <article className="brief-card brief-coming-soon">
          <h3>The Job Market Isn’t Broken — It’s Optimized Differently</h3>
          <p className="brief-excerpt coming-soon-text">
            Coming soon.
          </p>
          <div className="brief-meta">
            <span>Work</span>
            <span>Incentives</span>
          </div>
        </article>

        {/* 7 */}
        <article className="brief-card brief-coming-soon">
          <h3>How Crypto Actually Works (And Why Most People Misunderstand It)</h3>
          <p className="brief-excerpt coming-soon-text">
            Coming soon.
          </p>
          <div className="brief-meta">
            <span>Crypto</span>
            <span>Systems</span>
          </div>
        </article>

        {/* 8 */}
        <article className="brief-card brief-coming-soon">
          <h3>“Get Rich Fast” Is How Experienced Traders Get Richer</h3>
          <p className="brief-excerpt coming-soon-text">
            Coming soon.
          </p>
          <div className="brief-meta">
            <span>Markets</span>
            <span>Behavior</span>
          </div>
        </article>

        {/* 9 */}
        <article className="brief-card brief-coming-soon">
          <h3>New Tech Ships Faster Than Teams Can Maintain It</h3>
          <p className="brief-excerpt coming-soon-text">
            Coming soon.
          </p>
          <div className="brief-meta">
            <span>Technology</span>
            <span>Adoption</span>
          </div>
        </article>
      </div>
    </section>
  );
}
