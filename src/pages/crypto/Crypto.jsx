import React, { useState, useEffect } from "react";
import TokenData from "../../assets/crypto-data.json";
import { format } from "date-fns";

const Crypto = () => {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [balances, setBalances] = useState({});

  useEffect(() => {
    // Categorize transactions
    const categorized = TokenData.transactions.map(tx => ({
      ...tx,
      category: getCategory(tx)
    }));
    setTransactions(categorized);
    setFiltered(categorized);
    updateBalances(categorized);
  }, []);

  const getCategory = (tx) => {
    const desc = tx.description?.toLowerCase() || "";
    if (desc.includes("stake")) return "Stake";
    if (desc.includes("reward")) return "Reward";
    if (desc.includes("transfer")) return "Transfer";
    if (tx.type === "buy") return "Buy";
    if (tx.type === "sell") return "Sell";
    return "Other";
  };

  const updateBalances = (txList) => {
    const totals = {};
    txList.forEach(tx => {
      const symbol = tx.symbol.toUpperCase();
      const amount = parseFloat(tx.amount);
      if (!totals[symbol]) totals[symbol] = 0;
      if (tx.category === "Buy" || tx.category === "Reward" || tx.category === "Stake") {
        totals[symbol] += amount;
      } else if (tx.category === "Sell" || tx.category === "Transfer") {
        totals[symbol] -= amount;
      }
    });
    setBalances(totals);
  };

  const handleFilter = (type) => {
    setFilterType(type);
    if (type === "All") {
      setFiltered(transactions);
    } else {
      setFiltered(transactions.filter(tx => tx.category === type));
    }
  };

  return (
    <section className="crypto-section">
      <div className="container">
        <h1>📊 My Crypto Portfolio</h1>

        <div className="balance-grid">
          {Object.entries(balances).map(([symbol, amount]) => (
            <div key={symbol} className="token-balance-card">
              <img
                src={`/icons/${symbol.toLowerCase()}.svg`}
                alt={`${symbol} icon`}
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3>{symbol}</h3>
              <p>{amount.toFixed(4)}</p>
            </div>
          ))}
        </div>

        <h2>💸 Transaction History</h2>

        <div className="filter-buttons">
          {["All", "Buy", "Sell", "Stake", "Reward", "Transfer"].map((type) => (
            <button
              key={type}
              onClick={() => handleFilter(type)}
              className={filterType === type ? "active" : ""}
            >
              {type}
            </button>
          ))}
        </div>

        <table className="tx-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Token</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tx) => (
              <tr key={tx.id}>
                <td>{format(new Date(tx.date), "MMM d, yyyy")}</td>
                <td>{tx.symbol.toUpperCase()}</td>
                <td>{tx.amount}</td>
                <td>${tx.price}</td>
                <td>{tx.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Crypto;