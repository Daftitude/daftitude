// src/components/TokenStats.jsx
import React, { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';

const TokenStats = () => {
  const { tokens } = useContext(TokenContext);

  return (
    <div className="token-stats-card">
      <h3 className="token-stats-title">📊 Token Stats</h3>
      <ul className="token-stats-list">
        {Object.entries(tokens).map(([token, value]) => (
          <li key={token} className="token-stats-item">
            <span className="token-name">{token}</span>
            <span className="token-value">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenStats;