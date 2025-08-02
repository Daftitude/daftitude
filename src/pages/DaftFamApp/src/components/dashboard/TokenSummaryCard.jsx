// TokenSummaryCard.jsx
import React from 'react';
import { useToken } from '../../context/TokenContext'; // make sure this path is correct

export default function TokenSummaryCard() {
  const { tokens } = useToken();

  if (!tokens) return null; // Safety check (optional)

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">🎖️ Token Summary</h3>
      <ul className="space-y-1">
        {Object.entries(tokens).map(([type, count]) => (
          <li key={type} className="text-sm">
            <span className="font-medium">{type}:</span> {count}
          </li>
        ))}
      </ul>
    </div>
  );
}