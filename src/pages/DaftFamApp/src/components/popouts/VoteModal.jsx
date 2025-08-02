// src/components/popouts/VoteModal.jsx
import React from 'react';

export default function VoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="vote-modal">
        <h2 className="modal-title">🗳️ Public Trust Vote</h2>
        <p className="modal-message">
          Cast your vote to influence the direction of this Trust decision.
        </p>
        <p className="modal-subtext">
          Your vote is anonymous but will be publicly counted.
        </p>
        <div className="flex flex-col gap-3 mb-6">
          <button className="vote-button">✅ Yes, I Support</button>
          <button className="vote-button">❌ No, I Oppose</button>
        </div>
        <button
          onClick={onClose}
          className="modal-subtext underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}