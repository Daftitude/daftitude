// src/pages/Marketplace.jsx
import React, { useState } from "react";
import MarketplaceModal from "../../components/popouts/MarketplaceModal";
import PopoutContainer from "../../components/popouts/PopoutContainer";
import { useToken } from "../../context/TokenContext";
import TokenSummaryCard from "../../components/dashboard/TokenSummaryCard";

const mockItems = [
  {
    id: 1,
    name: "Extra Screen Time 📱",
    cost: 25,
    category: "Privileges",
    desc: "30 minutes of bonus screen time.",
  },
  {
    id: 2,
    name: "Skip a Chore 🧹",
    cost: 50,
    category: "Perks",
    desc: "Skip one pre-approved chore of your choice.",
  },
  {
    id: 3,
    name: "Choose Family Movie 🎬",
    cost: 15,
    category: "Fun",
    desc: "Pick the movie for family night.",
  },
  {
    id: 4,
    name: "Buy a Snack 🍭",
    cost: 10,
    category: "Goods",
    desc: "Redeem for a small snack/treat.",
  },
  {
    id: 5,
    name: "Game Download 🎮",
    cost: 75,
    category: "Digital",
    desc: "Parent-approved new game download.",
  },
];

export default function Marketplace() {
  const { tokenState } = useToken();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePurchase = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="fade-in px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🛒 Family Marketplace</h1>

      <div className="mb-6 flex justify-center">
        <TokenSummaryCard />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockItems.map((item) => (
          <div key={item.id} className="card bg-white dark:bg-zinc-800 shadow-md border border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-3">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{item.cost} Tokens</span>
                <button
                  onClick={() => handlePurchase(item)}
                  className="text-sm bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 transition"
                >
                  Redeem
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedItem && (
        <PopoutContainer onClose={() => setShowModal(false)}>
          <MarketplaceModal item={selectedItem} close={() => setShowModal(false)} />
        </PopoutContainer>
      )}
    </div>
  );
}