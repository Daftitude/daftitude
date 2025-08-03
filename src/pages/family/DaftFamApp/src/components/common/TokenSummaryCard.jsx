// src/components/common/TokenSummaryCard.jsx
import React from "react";

export default function TokenSummaryCard() {
  return (
    <div className="token-summary-card">
      <h3 className="token-summary-title">Token Summary</h3>
      <div className="token-summary-stats">
        <div className="stat-block">
          <span className="stat-label">Total Tokens:</span>
          <span className="stat-value">🔸 3,500</span>
        </div>
        <div className="stat-block">
          <span className="stat-label">Burned:</span>
          <span className="stat-value stat-burned">🔥 250</span>
        </div>
        <div className="stat-block">
          <span className="stat-label">Balance:</span>
          <span className="stat-value stat-balance">💰 3,250</span>
        </div>
      </div>
    </div>
  );
}