import React, { useState } from "react";
import { useToken } from "../../context/TokenContext";
import TokenSummaryCard from "../../components/common/TokenSummaryCard";
import GasLevelSlider from "../../components/dashboard/GasLevelSlider";
import AgreementTracker from "../../components/parent/AgreementTracker";
import ParentBadgeCreator from "../../components/parent/ParentBadgeCreator";
import DBAForm from "../../components/parent/DBAForm";
import CheckInScheduler from "../../components/parent/CheckInScheduler";
import ReminderBoard from "../../components/common/ReminderBoard";
import StickyBoard from "../../components/common/StickyBoard";
import FamilyVote from "../../components/dashboard/FamilyVote";
import TrustContractStatus from "../../components/admin/TrustContractStatus";

export default function Settings() {
  const { tokens, setTokens, gasLevel, setGasLevel, role } = useToken();

  // Local overrides for temporary experimentation
  const [localGas, setLocalGas] = useState(gasLevel);
  const [localTokens, setLocalTokens] = useState(tokens);
  const [confirmingReset, setConfirmingReset] = useState(false);

  const handleReset = () => {
    if (!confirmingReset) return setConfirmingReset(true);

    // Reset local state and context values
    setTokens({ k: 0, d: 0, kd: 0 });
    setGasLevel(100);
    setLocalGas(100);
    setLocalTokens({ k: 0, d: 0, kd: 0 });
    setConfirmingReset(false);
  };

  return (
    <div className="fade-in space-y-8 max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center">Settings & Controls ⚙️</h1>

      {/* Token Overview */}
      <section className="grid md:grid-cols-2 gap-6">
        <TokenSummaryCard tokens={localTokens} />
        <GasLevelSlider gasLevel={localGas} setGasLevel={setLocalGas} />
      </section>

      {/* Agreements & DBA */}
      <section className="grid md:grid-cols-2 gap-6">
        <AgreementTracker />
        <DBAForm />
      </section>

      {/* Check-In Scheduler */}
      <section>
        <CheckInScheduler />
      </section>

      {/* Parent Controls */}
      {role === "parent" && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Parent Tools 👨‍👩‍👧‍👦</h2>
          <ParentBadgeCreator />
          <FamilyVote />
        </section>
      )}

      {/* Trust Smart Contract Status */}
      <section>
        <TrustContractStatus />
      </section>

      {/* Sticky + Reminders */}
      <section className="grid md:grid-cols-2 gap-6">
        <StickyBoard />
        <ReminderBoard />
      </section>

      {/* Reset Button */}
      <div className="text-center mt-10">
        <button
          className={`px-6 py-2 rounded-md text-white font-semibold ${
            confirmingReset ? "bg-red-600" : "bg-gray-700"
          } hover:bg-red-700 transition`}
          onClick={handleReset}
        >
          {confirmingReset ? "Click again to confirm reset" : "Reset All Settings"}
        </button>
      </div>
    </div>
  );
}