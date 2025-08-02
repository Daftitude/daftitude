import React from "react";
import { TokenStats, ReminderBoard, StickyBoard } from "../common";
import { AgreementStatus } from "../parent";
import { FamilyVote, BonusTracker } from "../dashboard";
import { BadgeDisplay } from "../child";
import { DBAForm, TrustContractStatus } from ".";

export default function AdminPanel() {
  return (
    <div className="fade-in px-4 py-8 max-w-7xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center">👨‍💼 Admin Panel</h1>

      {/* Token Analytics */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Token System Overview</h2>
        <TokenStats />
      </section>

      {/* Agreement + Trust */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Agreement Status</h2>
          <AgreementStatus />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Smart Contract Trust</h2>
          <TrustContractStatus />
        </div>
      </section>

      {/* DBA & Voting */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">DBA Management</h2>
          <DBAForm />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Family Voting Control</h2>
          <FamilyVote />
        </div>
      </section>

      {/* Bonuses + Badges */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Bonus History</h2>
          <BonusTracker />
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Unlocked Badges</h2>
          <BadgeDisplay />
        </div>
      </section>

      {/* Notes + Reminders */}
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
    </div>
  );
}