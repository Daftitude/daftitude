// src/components/Badges.jsx
import React from 'react';
import { useToken } from '@/context/TokenContext';

const builtInBadges = [
  { name: 'Token Apprentice', icon: '🥉', condition: (tokens) => tokens.K + tokens.D + tokens.E >= 10 },
  { name: 'Token Master', icon: '🥇', condition: (tokens) => tokens.K + tokens.D + tokens.E >= 100 },
  { name: 'Burn Wizard', icon: '🔥', condition: (tokens) => tokens.burned >= 50 },
  { name: 'Streak Starter', icon: '📅', condition: (tokens) => tokens.streak && tokens.streak >= 3 },
  { name: 'Weekly Hero', icon: '🦸', condition: (tokens) => tokens.weeklyTasksCompleted >= 7 },
  { name: 'Planner Pro', icon: '📓', condition: (tokens) => tokens.plannerUsed >= 5 },
  { name: 'Marketplace Tycoon', icon: '💸', condition: (tokens) => tokens.redeemedItems >= 5 },
  { name: 'Agreement Keeper', icon: '🤝', condition: (tokens) => tokens.agreementsFulfilled >= 3 },
  { name: 'Early Riser', icon: '☀️', condition: (tokens) => tokens.earlyCheckIns >= 5 },
  { name: 'Helper Badge', icon: '🧹', condition: (tokens) => tokens.helpfulTasks >= 3 },
];

const Badges = () => {
  const { tokens } = useToken();

  const earnedBadges = builtInBadges.filter((badge) => badge.condition(tokens));

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-md">
      <h3 className="text-xl font-bold mb-2">🏅 Badges</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {earnedBadges.length === 0 ? (
          <p className="text-sm col-span-full text-center">No badges earned yet.</p>
        ) : (
          earnedBadges.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col items-center bg-zinc-100 dark:bg-zinc-700 p-3 rounded-lg"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-xs mt-1 font-semibold text-center">{badge.name}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Badges;