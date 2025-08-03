// src/components/modals/MyAchievementsModal.jsx
import React from 'react';
import { useToken } from '../../context/TokenContext';

const MyAchievementsModal = ({ onClose, unlockedBadges = [], customBadges = [] }) => {
  const { tokens } = useToken();

  const total = (t) => t.K + t.D + t.E + t.KD + t.KDM;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg max-w-3xl w-full overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">🎉 My Achievements</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700 text-lg font-bold">✖</button>
        </div>

        <div className="mb-4 text-gray-700 dark:text-gray-300">
          <p>Total Tokens: <strong>{total(tokens)}</strong></p>
          <p>Tokens Earned Today: <strong>{tokens.earnedToday}</strong></p>
          <p>Tokens Burned: <strong>{tokens.burned}</strong></p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">🏅 Unlocked Badges</h3>
          {unlockedBadges.length === 0 ? (
            <p className="text-sm text-gray-500">No badges unlocked yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {unlockedBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="border rounded p-2 bg-green-50 dark:bg-green-900 text-sm"
                >
                  <div className="font-semibold">{badge.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">{badge.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">🧑‍🎓 Custom Badges</h3>
          {customBadges.length === 0 ? (
            <p className="text-sm text-gray-500">No custom badges created.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {customBadges.map((badge, idx) => (
                <div
                  key={`custom-${idx}`}
                  className="border rounded p-2 bg-blue-50 dark:bg-blue-900 text-sm"
                >
                  <div className="font-semibold">{badge.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">{badge.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAchievementsModal;
