export default function DashboardStatusCard({ label, value, helper, tone = "blue" }) {
  return (
    <article className={`dashboard-status-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{helper}</p>
    </article>
  );
}
