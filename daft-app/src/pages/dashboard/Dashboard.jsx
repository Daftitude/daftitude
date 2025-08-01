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
    <div className="fade-in p-4 space-y-8 max-w-[1500px] mx-auto">
      {/* Top Header + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TokenSummaryCard />
        </div>
        <GasGauge />
      </div>

      {/* Badges + Bonus + Confetti */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ParentBadgeCreator addBadge={addCustomBadge} />
        <BadgeDisplay customBadges={customBadges} />
        <BonusConfetti />
      </div>

      {/* Token + Check-in + Agreement */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TokenStats />
        <CheckInScheduler />
        <AgreementStatus />
      </div>

      {/* Main Tools Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BonusTracker />
        <DBAForm />
        <FamilyPlanner />
        <StickyBoard />
        <TaskList />
        <CalendarView />
        <Marketplace />
        <FamilyVote />
        <TrustContractStatus />
        <FamilyBulletin />
        <ReminderBoard />
        <VotesBoard />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3 pt-6">
        <button onClick={() => handleOpen('token')} className="btn">🔓 Token</button>
        <button onClick={() => handleOpen('dba')} className="btn">📄 DBA</button>
        <button onClick={() => handleOpen('trust')} className="btn">🤝 Trust</button>
        <button onClick={() => handleOpen('sticky')} className="btn">📝 Sticky</button>
        <button onClick={() => handleOpen('vote')} className="btn">🗳️ Vote</button>
        <button onClick={() => handleOpen('task')} className="btn">✅ Task</button>
        <button onClick={() => handleOpen('reminder')} className="btn">⏰ Reminder</button>
        <button onClick={() => handleOpen('marketplace')} className="btn">🛒 Market</button>

        <button
          onClick={handleAchievementsClick}
          className={`btn relative transition-all duration-300 ${
            hasNewBadges ? 'animate-pulse ring-2 ring-yellow-400' : ''
          }`}
        >
          🏅 My Achievements
          {hasNewBadges && (
            <span className="absolute top-0 right-0 mt-1 mr-1 h-2 w-2 rounded-full bg-red-500 shadow-md animate-ping" />
          )}
        </button>
      </div>

      {/* All Popouts */}
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
    </div>
  );
}