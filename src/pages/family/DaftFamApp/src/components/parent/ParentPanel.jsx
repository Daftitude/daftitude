import React from "react";
import {
  TokenSummaryCard,
  ReminderBoard,
  StickyBoard,
} from "../common";

import {
  GasGauge,
  BonusTracker,
  FamilyVote,
} from "../dashboard";

import {
  ParentBadgeCreator,
  AgreementTracker,
  DBAForm,
  CheckInScheduler,
  BadgeDisplay,
} from ".";

export default function ParentPanel() {
  return (
    <div className="fade-in px-4 py-8 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center">🧑‍🎓 Parent Panel</h1>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Token Summary</h2>
          <TokenSummaryCard />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Energy Status</h2>
          <GasGauge />
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Progress Tracker</h2>
        <BonusTracker />
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Create Custom Badges</h2>
        <ParentBadgeCreator />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Agreement Overview</h2>
          <AgreementTracker />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Submit DBA Form</h2>
          <DBAForm />
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Schedule Check-Ins</h2>
        <CheckInScheduler />
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Family Voting</h2>
        <FamilyVote />
      </section>

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

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Unlocked Badges</h2>
        <BadgeDisplay />
      </section>
    </div>
  );
}