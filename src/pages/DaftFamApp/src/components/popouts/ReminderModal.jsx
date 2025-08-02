// src/components/popouts/ReminderModal.jsx
import { useState } from 'react';

export default function ReminderModal({ onClose }) {
  const [reminder, setReminder] = useState('');

  const handleSet = () => {
    if (reminder.trim()) {
      alert(`⏰ Reminder Set: "${reminder}"`);
      setReminder('');
      onClose();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-[24rem] max-w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">⏰ Set Reminder</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-lg font-bold">✕</button>
      </div>
      <input
        type="text"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        placeholder="Enter a reminder..."
        className="w-full border rounded px-3 py-2 mb-4"
      />
      <button
        onClick={handleSet}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
      >
        Save Reminder
      </button>
    </div>
  );
}