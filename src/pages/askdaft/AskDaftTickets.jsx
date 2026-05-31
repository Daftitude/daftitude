import { Link } from "react-router-dom";
import { loadAskDaftTickets } from "../../utils/askDaftTickets";

export default function AskDaftTickets() {
  const tickets = loadAskDaftTickets();

  return (
    <main className="account-page askdaft-tickets-page">
      <section className="askdaft-ticket-detail-hero">
        <div>
          <p className="phase-kicker">AskDaFT Tickets</p>
          <h1>Your support requests.</h1>
          <p>
            Guest tickets are currently saved on this device. Account tickets will sync to your profile in the backend phase.
          </p>
        </div>

        <div className="account-dashboard-actions">
          <Link className="phase-btn phase-btn-primary" to="/askdaft/request?intent=not-sure&mode=simple">
            Start New Request
          </Link>
          <Link className="phase-btn phase-btn-secondary" to="/askdaft/dashboard">
            Dashboard
          </Link>
        </div>
      </section>

      <section className="askdaft-ticket-list-panel">
        {tickets.length ? (
          <div className="askdaft-ticket-list">
            {tickets.map((ticket) => (
              <Link className="askdaft-ticket-list-card" to={`/askdaft/tickets/${ticket.id}?guest=1`} key={ticket.id}>
                <div>
                  <span>{ticket.status}</span>
                  <strong>{ticket.requestLabel}</strong>
                  <p>{ticket.description}</p>
                </div>
                <div>
                  <small>{ticket.id}</small>
                  <small>{ticket.estimate?.range || "Review needed"}</small>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="askdaft-empty-ticket-state">
            <strong>No tickets yet.</strong>
            <p>Start a request first. Your guest ticket will show here after submission.</p>
            <Link className="phase-btn phase-btn-primary" to="/askdaft/request?intent=not-sure&mode=simple">
              Start Request
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
