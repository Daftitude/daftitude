import { Link, useParams, useSearchParams } from "react-router-dom";
import { loadAskDaftTickets } from "../../utils/askDaftTickets";

const statusSteps = [
  "Submitted",
  "Received",
  "Scope Review",
  "Estimate Ready",
  "Approved",
  "Scheduled",
  "In Progress",
  "Completed",
];

export default function AskDaftTicketDetail() {
  const { ticketId } = useParams();
  const [searchParams] = useSearchParams();
  const isGuest = searchParams.get("guest") === "1";

  const tickets = loadAskDaftTickets();
  const ticket = tickets.find((item) => item.id === ticketId);

  if (!ticket) {
    return (
      <main className="account-page askdaft-ticket-detail-page">
        <section className="askdaft-ticket-detail-hero">
          <p className="phase-kicker">Ticket Not Found</p>
          <h1>We could not find that AskDaFT ticket.</h1>
          <p>
            Guest tickets are currently saved on the device/browser used to create them.
          </p>
          <div className="account-dashboard-actions">
            <Link className="phase-btn phase-btn-primary" to="/askdaft/request?intent=not-sure&mode=simple">
              Start New Request
            </Link>
            <Link className="phase-btn phase-btn-secondary" to="/askdaft/dashboard">
              View Dashboard
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="account-page askdaft-ticket-detail-page">
      <section className="askdaft-ticket-detail-hero">
        <div>
          <p className="phase-kicker">{isGuest ? "Guest Request Received" : "Request Saved"}</p>
          <h1>
            Ticket <span className="pricing-emphasis-green">{ticket.status}</span>.
          </h1>
          <p>
            AskDaFT will review the request, confirm the support path, and explain any price change before deeper work continues.
          </p>
        </div>

        <div className="askdaft-ticket-id-card">
          <span>Ticket ID</span>
          <strong>{ticket.id}</strong>
          <small>Save this number.</small>
        </div>
      </section>

      {isGuest && (
        <section className="askdaft-guest-save-panel">
          <div>
            <p className="phase-kicker">Guest Ticket</p>
            <h2>Want AskDaFT to remember this?</h2>
            <p>
              This guest ticket is saved on this device for now. Create an account or log in to save ticket history, devices, notes, screenshots, and follow-ups.
            </p>
          </div>

          <div className="account-dashboard-actions">
            <Link className="phase-btn phase-btn-primary" to={`/signup?ticket=${ticket.id}`}>
              Create Account
            </Link>
            <Link className="phase-btn phase-btn-secondary" to={`/login?ticket=${ticket.id}`}>
              Log In
            </Link>
            <Link className="phase-btn phase-btn-ghost" to="/askdaft/request?intent=not-sure&mode=simple">
              Start Another
            </Link>
          </div>
        </section>
      )}

      <section className="askdaft-ticket-detail-grid">
        <article>
          <span>Status</span>
          <strong>{ticket.status}</strong>
        </article>
        <article>
          <span>Help type</span>
          <strong>{ticket.requestLabel}</strong>
        </article>
        <article>
          <span>Starting commitment</span>
          <strong>{ticket.estimate?.startingCommitment || "Review needed"}</strong>
        </article>
        <article>
          <span>Estimated range</span>
          <strong>{ticket.estimate?.range || "Review needed"}</strong>
        </article>
        <article>
          <span>Contact</span>
          <strong>{ticket.contact?.phone || ticket.contact?.email || "Not provided"}</strong>
        </article>
        <article>
          <span>Support path</span>
          <strong>{ticket.supportPath}</strong>
        </article>
      </section>

      <section className="askdaft-ticket-detail-panel">
        <p className="phase-kicker">What you told AskDaFT</p>
        <h2>{ticket.issue}</h2>
        <p>{ticket.description}</p>
      </section>

      <section className="askdaft-ticket-detail-panel">
        <p className="phase-kicker">Ticket Status</p>
        <h2>Progress tracker</h2>

        <div className="askdaft-ticket-status-timeline">
          {statusSteps.map((step, index) => {
            const isCurrent = step === ticket.status;
            const isSubmitted = step === "Submitted";

            return (
              <div className={`askdaft-ticket-status-step ${isSubmitted ? "complete" : ""} ${isCurrent ? "current" : ""}`} key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            );
          })}
        </div>
      </section>

      <section className="askdaft-ticket-detail-panel">
        <p className="phase-kicker">AskDaFT Promise</p>
        <h2>Band-Aid. Best. Recommendation.</h2>

        <div className="askdaft-ticket-recommendation-grid">
          <article>
            <strong>Band-Aid</strong>
            <p>{ticket.recommendation?.bandAid || "Lowest-cost practical next step."}</p>
          </article>
          <article>
            <strong>Best</strong>
            <p>{ticket.recommendation?.best || "Balanced fix for time, cost, and reliability."}</p>
          </article>
          <article>
            <strong>AskDaFT Recommendation</strong>
            <p>{ticket.recommendation?.askDaft || "Honest recommendation after review."}</p>
          </article>
        </div>
      </section>

      <section className="askdaft-ticket-detail-actions">
        <Link className="phase-btn phase-btn-primary" to="/askdaft/dashboard">
          View Dashboard
        </Link>
        <Link className="phase-btn phase-btn-secondary" to="/askdaft/tickets">
          View All Tickets
        </Link>
        <Link className="phase-btn phase-btn-ghost" to="/askdaft/request?intent=not-sure&mode=simple">
          Start New Request
        </Link>
      </section>
    </main>
  );
}
