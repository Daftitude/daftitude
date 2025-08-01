import React from "react";
import { TokenSummaryCard, GasGauge, BonusTracker, FamilyVote } from "../dashboard";
import { TaskBoard } from "../planning";
import { StickyBoard, ReminderBoard } from "../common";
import BadgeDisplay from "./BadgeDisplay";
import CheckInLog from "./CheckInTimeline";

export default function ChildPanel() {
  return (
    <div className="fade-in px-4 py-8 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center">👶 Child Panel</h1>

      {/* Stats + Energy */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Token Summary</h2>
          <TokenSummaryCard />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Energy Meter</h2>
          <GasGauge />
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Progress & Bonuses</h2>
        <BonusTracker />
      </section>

      {/* Task Log */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Task Board</h2>
        <TaskBoard />
      </section>

      {/* Check-In Log */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Check-In Log</h2>
        <CheckInLog />
      </section>

      {/* Sticky Notes + Reminders */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Sticky Notes</h2>
          <StickyBoard />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Reminders</h2>
          <ReminderBoard />
        </div>
      </section>

      {/* Badges */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Unlocked Badges</h2>
        <BadgeDisplay />
      </section>

      {/* Voting */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Family Votes</h2>
        <FamilyVote />
      </section>
    </div>
  );
}