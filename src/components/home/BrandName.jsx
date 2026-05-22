

export default function BrandName({ name }) {
  if (name === "AskDaFT") {
    return (
      <strong className="brand-word brand-word-askdaft" aria-label="AskDaFT">
        <span className="brand-ask">Ask</span>
        <span className="brand-daft">DaFT</span>
      </strong>
    );
  }

  return (
    <strong className="brand-word brand-word-daftitude" aria-label="DaFTitude">
      <span className="brand-daft">DaFT</span>
      <span className="brand-itude">itude</span>
    </strong>
  );
}