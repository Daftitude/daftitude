// src/pages/Dashboard.jsx

import React, { useState, useEffect } from 'react';

import { useToken } from '../../context/TokenContext';

// Components - Dashboard Tools
import TokenStats from '../../components/common/TokenStats';
import GasGauge from '../../components/dashboard/GasGauge';
import CheckInScheduler from '../../components/parent/CheckInScheduler';
import AgreementStatus from '../../components/parent/AgreementStatus';
import BonusTracker from '../../components/dashboard/BonusTracker';
import DBAForm from '../../components/parent/DBAForm';
import FamilyPlanner from '../../components/planning/FamilyPlanner';
import StickyBoard from '../../components/common/StickyBoard';
import TaskList from '../../components/common/TaskList';
import CalendarView from '../../components/planning/CalendarView';
import Marketplace from '../../components/marketplace/Marketplace';
import FamilyVote from '../../components/dashboard/FamilyVote';
import TrustContractStatus from '../../components/admin/TrustContractStatus';
import FamilyBulletin from '../../components/dashboard/FamilyBulletin';
import ReminderBoard from '../../components/common/ReminderBoard';
import VotesBoard from '../../components/dashboard/VotesBoard';
import TokenSummaryCard from '../../components/dashboard/TokenSummaryCard';
import BadgeDisplay from '../../components/child/BadgeDisplay';
import ParentBadgeCreator from '../../components/parent/ParentBadgeCreator';
import BonusConfetti from '../../components/common/BonusConfetti';

// Modals & Popouts
import {
  TokenModal,
  DBAModal,
  TrustModal,
  StickyModal,
  VoteModal,
  TaskModal,
  ReminderModal,
  MarketplaceModal,
  MyAchievementsModal,
  PopoutContainer
} from '../../components/popouts';

export default function Dashboard() {
  const { tokens } = useToken();
  const Section = ({ icon, title, subtitle }) => (
    <div className="mt-16 mb-8 space-y-2">
      <div className="flex items-center gap-3">
        <div className="text-3xl animate-fade-in-slow drop-shadow-glow">{icon}</div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-glow">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-300 pl-[2.2rem]">
          {subtitle}
        </p>
      )}
      <div className="h-[2px] bg-gradient-to-r from-yellow-400 via-orange-300 to-pink-300 rounded-full w-full mt-2" />
    </div>
  );

  const [activeModal, setActiveModal] = useState(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [customBadges, setCustomBadges] = useState(() => {
    const saved = localStorage.getItem('customBadges');
    return saved ? JSON.parse(saved) : [];
  });
  const [hasNewBadges, setHasNewBadges] = useState(false);

  const handleOpen = (modal) => setActiveModal(modal);
  const handleClose = () => setActiveModal(null);

  const addCustomBadge = (badge) => {
    const updated = [...customBadges, badge];
    setCustomBadges(updated);
    localStorage.setItem('customBadges', JSON.stringify(updated));
  };

  // Detect new token-based badge unlocks
  useEffect(() => {
    const lastCheck = localStorage.getItem('lastBadgeTokens');
    if (!lastCheck) {
      localStorage.setItem('lastBadgeTokens', JSON.stringify(tokens));
    } else {
      const prev = JSON.parse(lastCheck);
      const prevSum = Object.values(prev).reduce((a, b) => a + b, 0);
      const currentSum = Object.values(tokens).reduce((a, b) => a + b, 0);
      if (currentSum > prevSum) setHasNewBadges(true);
    }
  }, [tokens]);

  const handleAchievementsClick = () => {
    setHasNewBadges(false);
    localStorage.setItem('lastBadgeTokens', JSON.stringify(tokens));
    setShowAchievements(true);
  };

  return (
    <div className="fade-in p-4 space-y-12 max-w-[1500px] mx-auto bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl ring-1 ring-white/10 border border-white/10">

      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/30 via-orange-300/20 to-transparent rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/30 via-blue-300/20 to-transparent rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      {/* Overview */}
      <Section icon="📊" title="Overview" subtitle="Your balance and fuel levels at a glance." />
      <div className="rounded-3xl bg-white/5 p-4 border border-white/10 shadow-inner">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><TokenSummaryCard /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><GasGauge /></div>
        </div>
      </div>

      {/* Badges & Bonuses */}
      <Section icon="🎖️" title="Badges & Bonuses" subtitle="Track your progress and rewards." />
      <div className="rounded-3xl bg-white/10 p-4 border border-white/10 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><ParentBadgeCreator addBadge={addCustomBadge} /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><BadgeDisplay customBadges={customBadges} /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><BonusConfetti /></div>
        </div>
      </div>

      {/* Token Stats + Check-ins */}
      <Section icon="📈" title="Token & Agreements" subtitle="Monitor your token flow and agreements." />
      <div className="rounded-3xl bg-white/5 p-4 border border-white/10 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><TokenStats /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><CheckInScheduler /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><AgreementStatus /></div>
        </div>
      </div>

      {/* Planning & Tools */}
      <Section icon="🧠" title="Planning & Boards" subtitle="Organize your family life and stay on track." />
      <div className="rounded-3xl bg-white/10 p-4 border border-white/10 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><BonusTracker /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><DBAForm /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><FamilyPlanner /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><StickyBoard /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><TaskList /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><CalendarView /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><Marketplace /></div>
        </div>
      </div>

      {/* Governance */}
      <Section icon="💬" title="Family & Governance" subtitle="Vote, share news, and manage trust." />
      <div className="rounded-3xl bg-white/5 p-4 border border-white/10 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><FamilyVote /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><TrustContractStatus /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><FamilyBulletin /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><ReminderBoard /></div>
          <div className="rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg p-4 shadow-xl ring-1 ring-white/10 shadow-lg border border-white/10 hover:bg-white/10 transition-colors hover:ring-2 hover:ring-yellow-400/70 hover:scale-[1.015] transition-all duration-300"><VotesBoard /></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3 pt-6">
        <button onClick={() => handleOpen('token')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">🔓 Token</button>
        <button onClick={() => handleOpen('dba')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">📄 DBA</button>
        <button onClick={() => handleOpen('trust')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">🤝 Trust</button>
        <button onClick={() => handleOpen('sticky')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">📝 Sticky</button>
        <button onClick={() => handleOpen('vote')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">🗳️ Vote</button>
        <button onClick={() => handleOpen('task')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">✅ Task</button>
        <button onClick={() => handleOpen('reminder')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">⏰ Reminder</button>
        <button onClick={() => handleOpen('marketplace')} className="btn bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full">🛒 Market</button>
        <button
          onClick={handleAchievementsClick}
          className={`btn relative bg-gradient-to-br from-yellow-400 via-orange-300 to-pink-400 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 rounded-full ${hasNewBadges ? 'animate-pulse ring-2 ring-yellow-400' : ''}`}
        >
          🏅 My Achievements
          {hasNewBadges && (
            <span className="absolute top-0 right-0 mt-1 mr-1 h-2 w-2 rounded-full bg-red-500 shadow-md animate-ping" />
          )}
        </button>
      </div>

      {/* Modals */}
      <PopoutContainer>
        {activeModal === 'token' && <TokenModal onClose={handleClose} />}
        {activeModal === 'dba' && <DBAModal onClose={handleClose} />}
        {activeModal === 'trust' && <TrustModal onClose={handleClose} />}
        {activeModal === 'sticky' && <StickyModal onClose={handleClose} />}
        {activeModal === 'vote' && <VoteModal onClose={handleClose} />}
        {activeModal === 'task' && <TaskModal onClose={handleClose} />}
        {activeModal === 'reminder' && <ReminderModal onClose={handleClose} />}
        {activeModal === 'marketplace' && <MarketplaceModal onClose={handleClose} />}
        {showAchievements && <MyAchievementsModal onClose={() => setShowAchievements(false)} />}
      </PopoutContainer>

      <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur text-sm px-4 py-2 rounded-lg shadow-lg border border-orange-400/30 text-white z-50 max-w-sm">
        💡 <span className="font-bold text-orange-300">Tip:</span> Complete tasks 3 days in a row to earn a bonus badge!
      </div>

    </div>
  );
}