// src/components/popouts/MarketplaceModal.jsx
import React, { useState } from "react";
import { useToken } from "../../context/TokenContext";

export default function MarketplaceModal({ item, close }) {
  const { tokenState, setTokenState } = useToken();
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const userTokens = tokenState?.balance || 0;

  const handleConfirm = () => {
    if (userTokens < item.cost) return;

    setIsProcessing(true);

    setTimeout(() => {
      setTokenState((prev) => ({
        ...prev,
        balance: prev.balance - item.cost,
        history: [
          ...(prev.history || []),
          {
            type: "purchase",
            item: item.name,
            amount: -item.cost,
            timestamp: new Date().toISOString(),
          },
        ],
      }));
      setConfirmed(true);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto fade-in">
      <h2 className="text-2xl font-bold mb-2">{confirmed ? "🎉 Purchase Successful!" : "Confirm Purchase"}</h2>

      {!confirmed && (
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          You're about to redeem <strong>{item.name}</strong> for <strong>{item.cost} tokens</strong>.
        </p>
      )}

      {confirmed ? (
        <div className="text-center text-green-600 dark:text-green-400 font-semibold mt-4">
          {item.name} added to your rewards!
        </div>
      ) : (
        <div className="flex justify-between mt-6">
          <button
            onClick={close}
            className="bg-gray-300 dark:bg-zinc-700 text-black dark:text-white px-4 py-2 rounded hover:opacity-80 transition"
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={userTokens < item.cost || isProcessing}
            className={`px-4 py-2 rounded text-white transition ${
              userTokens < item.cost
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isProcessing ? "Processing..." : `Redeem for ${item.cost}`}
          </button>
        </div>
      )}

      <div className="text-xs text-center mt-4 text-gray-400">
        Balance: {userTokens} tokens
      </div>
    </div>
  );
}