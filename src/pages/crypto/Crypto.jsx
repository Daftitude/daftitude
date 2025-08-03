import React, { useState, useEffect } from "react";
import axios from 'axios';
import HeroCrypto from '../../components/HeroCrypto';
import TokenData from "../../assets/crypto-data.json";
import { format } from "date-fns";

const Crypto = () => {
  const asOfDate = "July 21, 2025";
  const portfolioAge = "2y 6m 20d";

  const [prices, setPrices] = useState({
    eth: null,
    sol: null,
    usdc: 1.0,
    usd: 1.0
  });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana,usd-coin&vs_currencies=usd'
        );
        setPrices({
          eth: response.data.ethereum.usd,
          sol: response.data.solana.usd,
          usdc: response.data['usd-coin'].usd,
          usd: 1.0
        });
      } catch (error) {
        console.error("Error fetching prices", error);
      }
    };

    fetchPrices();
  }, []);

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
      <HeroCrypto />
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
      <>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Portfolio Overview</h2>
          <p className="mb-2">As of: {asOfDate}</p>
          <p className="mb-4">Portfolio Age: {portfolioAge}</p>
          <div className="price-grid grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="price-card bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">ETH</h3>
              <p>{prices.eth ? `$${prices.eth.toFixed(2)}` : "Loading..."}</p>
            </div>
            <div className="price-card bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">SOL</h3>
              <p>{prices.sol ? `$${prices.sol.toFixed(2)}` : "Loading..."}</p>
            </div>
            <div className="price-card bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">USDC</h3>
              <p>{`$${prices.usdc.toFixed(2)}`}</p>
            </div>
            <div className="price-card bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">USD</h3>
              <p>{`$${prices.usd.toFixed(2)}`}</p>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Crypto;