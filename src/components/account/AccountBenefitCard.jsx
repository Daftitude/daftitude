export default function AccountBenefitCard({ icon, title, text }) {
  return (
    <article className="account-benefit-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
