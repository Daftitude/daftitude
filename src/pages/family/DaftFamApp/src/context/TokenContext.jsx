// src/context/TokenContext.jsx
import { createContext, useContext, useState } from 'react';

export const TokenContext = createContext();

export const useToken = () => useContext(TokenContext);

export function TokenProvider({ children }) {
  const [tokens, setTokens] = useState({
    K: 0,
    D: 0,
    E: 0,
    KD: 0,
    KDM: 0,
    burned: 0,
    earnedToday: 0,
  });

  const addToken = (type, amount = 1) => {
    setTokens((prev) => ({
      ...prev,
      [type]: prev[type] + amount,
      earnedToday: prev.earnedToday + amount,
    }));
  };

  const burnToken = (type, amount = 1) => {
    setTokens((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - amount, 0),
      burned: prev.burned + amount,
    }));
  };

  const convertToComposite = (baseTokens, targetType) => {
    const updated = { ...tokens };
    for (const type of baseTokens) {
      if (updated[type] <= 0) return false;
      updated[type]--;
    }
    updated[targetType]++;
    setTokens(updated);
    return true;
  };

  const resetDailyEarnings = () => {
    setTokens((prev) => ({ ...prev, earnedToday: 0 }));
  };

  return (
    <TokenContext.Provider
      value={{ tokens, addToken, burnToken, convertToComposite, resetDailyEarnings }}
    >
      {children}
    </TokenContext.Provider>
  );
}