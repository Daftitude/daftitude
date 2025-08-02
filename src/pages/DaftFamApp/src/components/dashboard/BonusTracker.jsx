import { useState } from "react";

export default function BonusTracker() {
  const [streak, setStreak] = useState(3);
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

  const handleStreak = () => {
    const nextStreak = streak + 1;
    setStreak(nextStreak);

    if (nextStreak === 7) {
      setBadgeUnlocked(true);
    }
  };

  return (
    <div className="bonus-tracker">
      <h3>🎖 Bonus Tracker</h3>
      <ul>
        <li>Daily Streak: {streak} days</li>
        <li>
          <button
            onClick={handleStreak}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Day to Streak
          </button>
        </li>
        {badgeUnlocked && (
          <li>
            <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded shadow-md animate-pulse">
              🏆 Badge Unlocked: 7-Day Streak!
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}