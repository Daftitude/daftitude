import React from 'react';
import { Link } from 'react-router-dom';
import FamilyNavbar from './FamilyNavbar';

const features = [
  { emoji: '💡', title: 'Token System', desc: 'Earn, track, and spend family tokens like DaFT, KD, and Bonus Coins.' },
  { emoji: '🧠', title: 'Planner & Tasks', desc: 'Plan events, assign chores, track growth and check-ins.' },
  { emoji: '🎖️', title: 'Badges & Rewards', desc: 'Gamify achievements for kids, teens, and adults alike.' },
  { emoji: '🧾', title: 'Agreements & Trusts', desc: 'Create family commitments backed by token logic.' },
  { emoji: '🗳️', title: 'Voting & Governance', desc: 'Families can vote on new ideas, purchases, and more.' },
  { emoji: '💬', title: 'Group Messaging', desc: 'Talk, vent, plan, and connect across all age groups.' },
  { emoji: '🌳', title: 'Legacy Tree Mode', desc: 'Navigate generations. Switch from your local to your full family.' },
  { emoji: '🚨', title: 'SOS & Alerts', desc: 'Emergency alerts, mass messaging, and “I’m OK” features.' },
];

const FamilyLanding = () => {
  return (
    <>
      <FamilyNavbar />
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-900 text-white">
      <header className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Welcome to the DaFT <span className="text-yellow-400">Family System</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          A private, gamified dashboard built to help families organize, grow, and thrive — together.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-semibold">
            Sign Up
          </Link>
          <Link to="/login" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold">
            Log In
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 shadow hover:shadow-xl transition">
            <div className="text-3xl">{f.emoji}</div>
            <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="text-center py-20 border-t border-white/10 px-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="text-gray-300 space-y-2 max-w-xl mx-auto text-left text-sm md:text-base">
          <li>1. Create or join your Family Root (Legacy Tree)</li>
          <li>2. Invite family members, assign roles (Parent, Child, Admin)</li>
          <li>3. Track tasks, unlock badges, message each other</li>
          <li>4. Switch between Local and Legacy views anytime</li>
          <li>5. Use tokens to gamify behavior, agreements, and fun</li>
        </ol>
      </section>

      <footer className="text-center text-sm text-gray-400 py-8">
        © {new Date().getFullYear()} DaFTitude. Built for your bloodline.
      </footer>
      </div>
    </>
  );
};

export default FamilyLanding;