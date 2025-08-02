import React from "react";
import { useToken } from "../../context/TokenContext";
import TokenSummaryCard from "../../components/TokenSummaryCard";
import BonusTracker from "../../components/dashboard/BonusTracker";
import BadgeDisplay from "../../components/BadgeDisplay";
import CalendarBoard from "../../components/dashboard/CalendarBoard";
import GasGauge from "../../components/GasGauge";
import ReminderBoard from "../../components/ReminderBoard";
import StickyBoard from "../../components/StickyBoard";
import TaskBoard from "../../components/TaskBoard";
import BonusConfetti from "../../components/BonusConfetti";
import MyAchievementsModal from "../../components/popouts/MyAchievementsModal";
import { Sparkles } from "lucide-react";

export default function Profile() {
  const { tokens, role, user } = useToken();
  const userName = user?.name || "You";
  const streak = tokens?.streak || 0;
  const nextBonus = 7 - (streak % 7); // for 7-day milestone loop

  return (
    <div className="fade-in px-4 py-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">👤 {userName}'s Profile</h1>
        <MyAchievementsModal />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Token Overview */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Your Stats</h2>
          <TokenSummaryCard />
        </div>

        {/* Role and Energy */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Role & Energy</h2>
          <div className="flex items-center gap-4">
            <span className={`text-sm font-bold px-3 py-1 rounded-full role-${role.toLowerCase()}`}>{role}</span>
            <div className="flex-1">
              <GasGauge />
            </div>
          </div>
          <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-300">
            🧪 Staying active fuels your DaFT progress!
          </div>
        </div>

        {/* Streak + Bonus Tracker */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Progress Tracker</h2>
          <BonusTracker />
          <div className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
            🔥 You're on a {streak}-day streak! {nextBonus === 1 ? "🎉 Bonus coming tomorrow!" : `💡 ${nextBonus} days to next bonus`}
          </div>
        </div>

        {/* Calendar */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Your Calendar</h2>
          <CalendarBoard />
        </div>

        {/* Unlocked Badges */}
        <div className="card col-span-1 md:col-span-2 relative">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            🏆 Unlocked Badges <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
          </h2>
          <BadgeDisplay />
          <BonusConfetti />
        </div>
      </div>

      {/* Notes & Reminders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Reminders</h2>
          <ReminderBoard />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Sticky Notes</h2>
          <StickyBoard />
        </div>
      </div>

      {/* Task Log */}
      <div className="card mt-6">
        <h2 className="text-xl font-semibold mb-2">Task Snapshot</h2>
        <TaskBoard />
      </div>
    </div>
  );
}