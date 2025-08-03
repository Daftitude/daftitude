// src/components/popouts/StickyModal.jsx
import { useState } from 'react';

export default function StickyModal({ onClose }) {
  const [note, setNote] = useState('');

  const handleSaveNote = () => {
    if (note.trim()) {
      alert(`📌 Sticky Note Saved: "${note}"`);
      setNote('');
      onClose();
    }
  };

  return (
    <div className="bg-yellow-50 rounded-lg shadow-xl p-6 w-[24rem] max-w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">📌 New Sticky Note</h3>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-lg font-bold">✕</button>
      </div>

      <textarea
        placeholder="Write your sticky note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={5}
        className="w-full border rounded px-3 py-2 mb-4 bg-yellow-100"
      />

      <button
        onClick={handleSaveNote}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
      >
        Save Sticky
      </button>
    </div>
  );
}