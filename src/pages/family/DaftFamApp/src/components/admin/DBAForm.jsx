// src/components/DBAForm.jsx
import { useState } from 'react';

export default function DBAForm() {
  const [form, setForm] = useState({ participants: '', reason: '' });
  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = () => {
    if (form.participants.trim() && form.reason.trim()) {
      const newEntry = {
        id: submitted.length + 1,
        ...form,
        date: new Date().toISOString().split('T')[0],
      };
      setSubmitted([newEntry, ...submitted]);
      setForm({ participants: '', reason: '' });
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-3">🤝 Dual Burn Agreement (DBA)</h2>
      <div className="mb-2">
        <input
          className="w-full border rounded px-3 py-2 mb-2"
          value={form.participants}
          onChange={(e) => setForm({ ...form, participants: e.target.value })}
          placeholder="Participants (e.g., Kyhl & Dad)"
        />
        <textarea
          className="w-full border rounded px-3 py-2"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
          placeholder="Reason for the burn agreement"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
      >
        Submit DBA
      </button>

      {submitted.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">📜 Past Agreements</h3>
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {submitted.map((entry) => (
              <li key={entry.id} className="bg-gray-100 p-2 rounded text-sm">
                <p><strong>{entry.participants}</strong> – {entry.date}</p>
                <p className="text-gray-700">{entry.reason}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}