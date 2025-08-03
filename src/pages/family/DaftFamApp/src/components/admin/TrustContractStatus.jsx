// src/components/TrustContractStatus.jsx
import { useState } from 'react';

export default function TrustContractStatus() {
  const [trusts, setTrusts] = useState([
    {
      id: 1,
      title: 'Kyhl + Dad Trust',
      startDate: '2025-07-23',
      duration: '90 days',
      status: 'Active',
      tokensStaked: {
        Kyhl: 50,
        Dad: 100,
      },
      dbaCount: 1,
    },
  ]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-3">🤝 Trust Contract Status</h2>
      {trusts.map((trust) => (
        <div
          key={trust.id}
          className="border rounded p-3 mb-3 bg-gray-100 shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{trust.title}</h3>
            <span
              className={`text-sm font-medium px-2 py-1 rounded ${
                trust.status === 'Active'
                  ? 'bg-green-100 text-green-600'
                  : trust.status === 'Expired'
                  ? 'bg-yellow-100 text-yellow-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {trust.status}
            </span>
          </div>
          <p className="text-sm mt-1">Start Date: {trust.startDate}</p>
          <p className="text-sm">Duration: {trust.duration}</p>
          <p className="text-sm">Kyhl Stake: {trust.tokensStaked.Kyhl} KD</p>
          <p className="text-sm">Dad Stake: {trust.tokensStaked.Dad} KD</p>
          <p className="text-sm">DBAs Logged: {trust.dbaCount}/3</p>
        </div>
      ))}
    </div>
  );
}