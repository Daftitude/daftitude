// src/components/AgreementTracker.jsx
import { useState } from 'react';

const sampleAgreements = [
  {
    id: 1,
    title: 'Trust #001 - Summer Chore Split',
    status: 'Active',
    created: '2025-07-01',
    expires: '2025-09-30',
  },
  {
    id: 2,
    title: 'Trust #002 - Allowance Linked to Check-ins',
    status: 'Pending Review',
    created: '2025-07-10',
    expires: '2025-10-10',
  },
];

export default function AgreementTracker() {
  const [agreements, setAgreements] = useState(sampleAgreements);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-2">📜 Active Trust Agreements</h2>
      <ul className="space-y-3">
        {agreements.map((agreement) => (
          <li
            key={agreement.id}
            className="border p-3 rounded flex flex-col md:flex-row md:justify-between md:items-center bg-gray-50"
          >
            <div>
              <p className="font-medium">{agreement.title}</p>
              <p className="text-xs text-gray-500">
                Created: {agreement.created} | Expires: {agreement.expires}
              </p>
            </div>
            <span
              className={`px-3 py-1 mt-2 md:mt-0 rounded text-sm font-semibold ${
                agreement.status === 'Active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {agreement.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}