import { Link } from "react-router-dom";

export default function AskDaftInfoSections({ missions, connectedResources, faqs }) {
  return (
    <>
      <section id="missions" className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">More Help Options</p>
          <h2>Still not sure?</h2>
          <p>
            Use these only if the quick-start choices do not fit.
          </p>
        </div>

        <div className="phase-card-grid askdaft-mission-grid">
          {missions.map((mission) => (
            <article className="phase-card" key={mission.title}>
              <span className="mission-tag">{mission.tag}</span>
              <h3>{mission.title}</h3>
              <p>{mission.text}</p>
              <Link className="phase-btn phase-btn-ghost" to={`/contact?source=askdaft&type=${mission.requestType}`}>
                Start This Request
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Helpful Resources</p>
          <h2>Learn before you book.</h2>
          <p>
            Open a related guide if you want more context first.
          </p>
        </div>

        <div className="phase-card-grid three">
          {connectedResources.map((resource) => (
            <article className="phase-card" key={resource.title}>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <Link className="phase-btn phase-btn-ghost" to={resource.href}>
                Open Resource
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Quick Answers</p>
          <h2>Before you book.</h2>
        </div>

        <div className="phase-card-grid four">
          {faqs.map((faq) => (
            <article className="phase-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
