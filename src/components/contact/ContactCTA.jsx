export default function ContactCTA({ taskType = "basic" }) {
  const isAdvanced = taskType === "advanced";

  return (
    <section id="contact" className="contact-section compact-contact">
      <h2>{isAdvanced ? "📬 Build / Integrate Something?" : "📬 Need Tech Help or Advice?"}</h2>
      <p>
        {isAdvanced
          ? "Automations, AI workflows, security tightening, web builds, or systems cleanup — if it’s messy, I’ll make it make sense."
          : "WiFi issues, smart home setup, TV/media problems, cameras, or general tech troubleshooting — I’ll get you stable and set up right."}
      </p>

      <a href="/contact" className="cta-btn">
        Contact Me →
      </a>

      <a
        href="https://daftitude.github.io/digital-card-kyhl"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2"
      >
        View My Digital Business Card
      </a>
    </section>
  );
}