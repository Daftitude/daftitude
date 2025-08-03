// src/pages/Crypto.jsx
import React, { useState, useEffect } from 'react';
import TokenData from '../assets/crypto-data.json'; // Optional: store clean JSON
import { format } from 'date-fns';

const Crypto = () => {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [balances, setBalances] = useState({});
  const categories = ['All', 'Buy', 'Sell', 'Reward', 'Stake', 'Deposit', 'Send', 'Convert'];

  useEffect(() => {
    // In practice, you'd parse external data and categorize here
    const tx = TokenData.map(tx => ({
      ...tx,
      category: categorize(tx),
    }));
    setTransactions(tx);
    setFiltered(tx);
    updateBalances(tx);
  }, []);

  const categorize = (tx) => {
    const desc = tx.description.toLowerCase();
    if (desc.includes('reward')) return 'Reward';
    if (desc.includes('stake') || desc.includes('unstake')) return 'Stake';
    if (desc.includes('buy')) return 'Buy';
    if (desc.includes('sell')) return 'Sell';
    if (desc.includes('send')) return 'Send';
    if (desc.includes('deposit')) return 'Deposit';
    if (desc.includes('convert')) return 'Convert';
    return 'Other';
  };

  const updateBalances = (txs) => {
    const balanceMap = {};
    txs.forEach(tx => {
      const sym = tx.symbol.toUpperCase();
      const value = parseFloat(tx.amount);
      balanceMap[sym] = (balanceMap[sym] || 0) + value;
    });
    setBalances(balanceMap);
  };

  const handleFilter = (type) => {
    setFilterType(type);
    if (type === 'All') {
      setFiltered(transactions);
    } else {
      setFiltered(transactions.filter(tx => tx.category === type));
    }
  };

  return (
    <div className="crypto-page p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-accent">📈 My Crypto Activity</h1>

      {/* Balance Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(balances).map(([symbol, value]) => (
          <div key={symbol} className="p-4 bg-[#1e1e1e] rounded-lg shadow-md text-center">
            <p className="text-sm opacity-60">{symbol}</p>
            <h2 className="text-xl font-semibold">{value.toFixed(4)}</h2>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filterType === cat ? 'bg-accent text-black' : 'bg-[#292929] text-white'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#111] rounded-lg overflow-hidden">
          <thead className="bg-primary text-black">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Asset</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-right">Amount</th>
              <th className="px-4 py-3 text-right">Value (USD)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tx, index) => (
              <tr
                key={index}
                className="border-b border-[#222] hover:bg-[#1c1c1c] transition"
              >
                <td className="px-4 py-2">{format(new Date(tx.date), 'MMM d, yyyy')}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img
                    src={`/icons/${tx.symbol.toLowerCase()}.svg`}
                    alt={tx.symbol}
                    className="w-5 h-5"
                  />
                  {tx.symbol}
                </td>
                <td className="px-4 py-2">{tx.category}</td>
                <td className={`px-4 py-2 text-right ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tx.amount > 0 ? '+' : ''}
                  {tx.amount}
                </td>
                <td className={`px-4 py-2 text-right ${tx.valueUSD > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tx.valueUSD > 0 ? '+' : ''}
                  ${Math.abs(tx.valueUSD).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* News Feed Placeholder */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">📰 Latest Crypto News</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Regulators Eye Ethereum ETFs</h3>
            <p className="text-sm text-gray-400">
              SEC might approve ETH ETFs as early as Q4 this year.
            </p>
          </div>
          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Bitcoin Breaks $60K Again</h3>
            <p className="text-sm text-gray-400">
              BTC returns to $60,000 amid ETF buzz and institutional buying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
