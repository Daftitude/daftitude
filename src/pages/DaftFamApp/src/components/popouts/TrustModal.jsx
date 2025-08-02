// src/components/popouts/TrustModal.jsx
import React from 'react';

export default function TrustModal() {
  return (
    <div className="trust-modal fade-in">
      <h2 className="trust-modal-title">📜 Trust Agreement</h2>
      <p className="trust-modal-description">
        This modal explains how Trust Contracts work in the DaFT system. Parents can create agreements, children can accept, and tokens may be exchanged based on compliance.
      </p>
      <ul className="trust-modal-list">
        <li><strong>📌 Create:</strong> Parents can draft terms and assign token stakes.</li>
        <li><strong>🧾 Accept:</strong> Children must review and accept the terms.</li>
        <li><strong>✅ Track:</strong> Trust progress is tracked weekly.</li>
        <li><strong>🔥 Burn/Reward:</strong> Based on status, tokens are either returned, rewarded, or burned.</li>
      </ul>
      <div className="trust-modal-footer">
        <button className="btn-confirm">Got it</button>
      </div>
    </div>
  );
}