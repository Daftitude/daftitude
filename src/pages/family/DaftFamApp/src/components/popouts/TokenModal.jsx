// src/components/popouts/TokenModal.jsx
import React, { useState, useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';

const TokenModal = ({ onClose }) => {
  const {
    tokenState,
    addToken,
    burnToken,
    convertToComposite,
    resetDailyEarnings,
  } = useContext(TokenContext);

  const [action, setAction] = useState('mint');
  const [tokenType, setTokenType] = useState('K');
  const [amount, setAmount] = useState('');
  const [baseTokens, setBaseTokens] = useState(['K', 'D']);
  const [compositeTarget, setCompositeTarget] = useState('KD');

  const handleSubmit = () => {
    const amt = parseInt(amount);
    if (isNaN(amt) || amt <= 0) return;

    if (action === 'mint') {
      addToken(tokenType, amt);
    } else if (action === 'burn') {
      burnToken(tokenType, amt);
    } else if (action === 'convert') {
      convertToComposite(baseTokens, compositeTarget);
    } else if (action === 'reset') {
      resetDailyEarnings();
    }

    setAmount('');
    onClose();
  };

  return (
    <div className="modal-wrapper fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out" id="token-modal">
      <div className="popout-modal">
        {/* Emoji badge title and badge */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="popout-modal-title">🪙 Token Utility</h2>
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">Token Modal</span>
        </div>
        <div className="mb-4">
          <label htmlFor="actionSelect" className="block text-sm font-medium text-gray-700 mb-1">Action</label>
          <select
            id="actionSelect"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="mint">➕ Mint (Add)</option>
            <option value="burn">🔥 Burn (Remove)</option>
            <option value="convert">🔄 Convert to Composite</option>
            <option value="reset">♻️ Reset Daily Earnings</option>
          </select>
        </div>
        {(action === 'mint' || action === 'burn') && (
          <>
            <div className="mb-2">
              <label htmlFor="tokenTypeSelect" className="block text-sm font-medium text-gray-700 mb-1">Token Type</label>
              <select
                id="tokenTypeSelect"
                className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={tokenType}
                onChange={(e) => setTokenType(e.target.value)}
              >
                <option value="K">🥇 K</option>
                <option value="D">🥈 D</option>
                <option value="T">🥉 T</option>
                <option value="E">✨ E</option>
                <option value="P">🏅 P</option>
              </select>
              {/* Availability placeholder */}
              <div className="text-sm text-gray-500 mt-1">Available: 20 KD</div>
            </div>
            <div className="mb-4">
              <label htmlFor="tokenAmount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                id="tokenAmount"
                aria-label="Token amount input"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
              />
            </div>
          </>
        )}
        {action === 'convert' && (
          <>
            <div className="mb-2">
              <label htmlFor="baseTokensSelect" className="block text-sm font-medium text-gray-700 mb-1">Base Tokens</label>
              <select
                id="baseTokensSelect"
                className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={baseTokens.join(',')}
                onChange={(e) =>
                  setBaseTokens(e.target.value.split(',').map((v) => v.trim()))
                }
              >
                <option value="K,D">🥇 K + 🥈 D → KD</option>
                <option value="K,D,T">🥇 K + 🥈 D + 🥉 T → KDT</option>
                <option value="K,D,T,E,P">All → DaFT</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="compositeTargetSelect" className="block text-sm font-medium text-gray-700 mb-1">Target Composite Token</label>
              <select
                id="compositeTargetSelect"
                className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={compositeTarget}
                onChange={(e) => setCompositeTarget(e.target.value)}
              >
                <option value="KD">KD</option>
                <option value="KDT">KDT</option>
                <option value="KDM">KDM</option>
                <option value="DaFT">DaFT</option>
              </select>
            </div>
          </>
        )}
        <hr className="my-4 border-gray-200" />
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:scale-105 transform transition-transform duration-200"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          className="btn-cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TokenModal;