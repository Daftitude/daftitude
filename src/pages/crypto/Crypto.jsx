import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroCrypto from "../../components/crypto/HeroCrypto";
import TokenData from "../../assets/crypto-data.json";
import { format } from "date-fns";

const Crypto = () => {
  const asOfDate = "July 21, 2025";
  const portfolioAge = "2y 6m 20d";

  const [prices, setPrices] = useState({
    eth: null,
    sol: null,
    usdc: 1.0,
    usd: 1.0,
  });

  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [balances, setBalances] = useState({});

  // Which education modal is open (null = none)
  const [activeModal, setActiveModal] = useState(null);

  // Fetch live prices
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana,usd-coin&vs_currencies=usd"
        );
        setPrices({
          eth: response.data.ethereum.usd,
          sol: response.data.solana.usd,
          usdc: response.data["usd-coin"].usd,
          usd: 1.0,
        });
      } catch (error) {
        console.error("Error fetching prices", error);
      }
    };

    fetchPrices();
  }, []);

  // Load token history and categorize
  useEffect(() => {
    const categorized = TokenData.transactions.map((tx) => ({
      ...tx,
      category: getCategory(tx),
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
    txList.forEach((tx) => {
      const symbol = tx.symbol.toUpperCase();
      const amount = parseFloat(tx.amount);
      if (!totals[symbol]) totals[symbol] = 0;
      if (
        tx.category === "Buy" ||
        tx.category === "Reward" ||
        tx.category === "Stake"
      ) {
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
      setFiltered(transactions.filter((tx) => tx.category === type));
    }
  };

  const closeModal = () => setActiveModal(null);

  return (
    <section className="crypto-section">
      <HeroCrypto />

      {/* ========= EDUCATION: CRYPTO GROUND SCHOOL ========= */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl text-slate-50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-semibold">
                🎓 Crypto Ground School
              </h2>
              <p className="text-slate-300 text-sm md:text-base mt-1">
                Learn the core concepts of crypto, spot trading, and futures so
                you always know exactly where you are in the market “ocean”.
              </p>
            </div>
            <div className="text-xs md:text-sm text-slate-400 md:text-right">
              <p>Audience: beginners to early-intermediate traders</p>
              <p>Style: clear, no-hype explanations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Module 0 – Orientation */}
            <button
              type="button"
              onClick={() => setActiveModal("orientation")}
              className="group bg-slate-800/80 border border-slate-700 hover:border-indigo-400 hover:bg-slate-800/90 rounded-xl p-4 text-left transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-semibold">
                  M0
                </span>
                <h3 className="font-semibold text-sm md:text-base">
                  Orientation: What Game Am I Playing?
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 group-hover:text-slate-100">
                Trade vs invest, spot vs derivatives, and what it means to put
                real money at risk in each environment.
              </p>
            </button>

            {/* Module 1 – Spot vs Futures vs Perps */}
            <button
              type="button"
              onClick={() => setActiveModal("market-types")}
              className="group bg-slate-800/80 border border-slate-700 hover:border-indigo-400 hover:bg-slate-800/90 rounded-xl p-4 text-left transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-semibold">
                  M1
                </span>
                <h3 className="font-semibold text-sm md:text-base">
                  Spot vs Futures vs Perpetual Futures
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 group-hover:text-slate-100">
                Who owns what, what expires, what can be liquidated, and how the
                three market types connect.
              </p>
            </button>

            {/* Module 2 – How Price Moves */}
            <button
              type="button"
              onClick={() => setActiveModal("price-moves")}
              className="group bg-slate-800/80 border border-slate-700 hover:border-indigo-400 hover:bg-slate-800/90 rounded-xl p-4 text-left transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-semibold">
                  M2
                </span>
                <h3 className="font-semibold text-sm md:text-base">
                  How Price Actually Moves
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 group-hover:text-slate-100">
                Order books, market orders, and how futures flows and arbitrage
                push spot price around.
              </p>
            </button>

            {/* Module 3 – Leverage & Risk */}
            <button
              type="button"
              onClick={() => setActiveModal("leverage-risk")}
              className="group bg-slate-800/80 border border-slate-700 hover:border-rose-400 hover:bg-slate-800/90 rounded-xl p-4 text-left transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-semibold">
                  M3
                </span>
                <h3 className="font-semibold text-sm md:text-base">
                  Leverage, Profit and Loss, and Liquidation
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 group-hover:text-slate-100">
                How position size, leverage, and liquidation interact – and how
                “sizing wrong” blows accounts up.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ========= EXISTING PORTFOLIO + HISTORY ========= */}
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

      {/* ========= EXISTING PRICE SNAPSHOT ========= */}
      <div className="container mx-auto px-4 text-center pb-8">
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

      {/* ========= MODALS (USING GLOBAL .modal + .modal-content) ========= */}
      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                color: "#666",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Close"
            >
              ×
            </button>

            {activeModal === "orientation" && (
              <>
                <h2>Orientation: What Game Am I Playing?</h2>
                <p>
                  Trading is placing a bet on future price using real money.
                  Every time you press buy or sell, you are taking a position
                  against other humans and algorithms.
                </p>
                <h3>Three things you actually control</h3>
                <ul>
                  <li>
                    <strong>Direction</strong> – long (betting up) or short
                    (betting down).
                  </li>
                  <li>
                    <strong>Position size</strong> – how many dollars of coin
                    you control. This decides how big each move hits your
                    account.
                  </li>
                  <li>
                    <strong>Exits</strong> – where you take profit and where you
                    admit you are wrong (your stop loss).
                  </li>
                </ul>
                <h3>Spot vs futures vs perpetual futures</h3>
                <ul>
                  <li>
                    <strong>Spot trading</strong> – you own the actual coin; no
                    built-in leverage; no liquidation.
                  </li>
                  <li>
                    <strong>Futures trading</strong> – you trade a contract
                    about future price with an expiration date, using margin and
                    leverage.
                  </li>
                  <li>
                    <strong>Perpetual futures trading</strong> – similar to
                    futures but with no expiry; a{" "}
                    <strong>funding rate</strong> (periodic payments between
                    long traders and short traders) keeps price near spot.
                  </li>
                </ul>
              </>
            )}

            {activeModal === "market-types" && (
              <>
                <h2>Spot vs Futures vs Perpetual Futures</h2>
                <p>
                  All three let you bet on price, but they handle ownership,
                  leverage, and risk differently.
                </p>
                <h3>Spot trading</h3>
                <ul>
                  <li>You own the real coin in your account.</li>
                  <li>No built-in leverage; 1 unit of cash buys 1 unit of coin.</li>
                  <li>No liquidation; if price drops, you just hold a losing
                    position until you sell.</li>
                </ul>
                <h3>Futures trading</h3>
                <ul>
                  <li>
                    You trade a <strong>contract</strong> about future price,
                    not the coin itself.
                  </li>
                  <li>
                    The contract has an <strong>expiration date</strong> chosen
                    by the exchange.
                  </li>
                  <li>
                    You post <strong>margin</strong> and can use{" "}
                    <strong>leverage</strong> to control more than your cash.
                  </li>
                  <li>
                    If unrealized losses get too large, you can be{" "}
                    <strong>liquidated</strong> (forced closed).
                  </li>
                </ul>
                <h3>Perpetual futures trading</h3>
                <ul>
                  <li>No expiry; you can hold the position indefinitely.</li>
                  <li>
                    A regular <strong>funding rate</strong> is paid between long
                    traders and short traders to keep perp price near spot.
                  </li>
                  <li>
                    Same leverage and liquidation concepts as regular futures.
                  </li>
                </ul>
              </>
            )}

            {activeModal === "price-moves" && (
              <>
                <h2>How Price Actually Moves</h2>
                <p>
                  Price moves when orders hit the{" "}
                  <strong>order book</strong>, not because of magic indicators.
                </p>
                <h3>Order book basics</h3>
                <ul>
                  <li>
                    <strong>Bid</strong> – buyers and their prices.
                  </li>
                  <li>
                    <strong>Ask</strong> – sellers and their prices.
                  </li>
                  <li>
                    <strong>Spread</strong> – best ask minus best bid.
                  </li>
                  <li>
                    <strong>Last price</strong> – the price of the most recent
                    trade.
                  </li>
                </ul>
                <h3>Price moving up</h3>
                <ul>
                  <li>Market buy orders consume sell orders on the ask side.</li>
                  <li>
                    As higher asks get filled, the last traded price moves up
                    and the chart prints green candles.
                  </li>
                </ul>
                <h3>Price moving down</h3>
                <ul>
                  <li>Market sell orders consume buy orders on the bid side.</li>
                  <li>
                    As lower bids get hit, the last traded price moves down and
                    the chart prints red candles.
                  </li>
                </ul>
                <h3>Futures flows and spot</h3>
                <ul>
                  <li>
                    Perpetual futures markets often have more leverage and
                    volume than spot.
                  </li>
                  <li>
                    Big futures trades and liquidations can push futures price
                    away from spot.
                  </li>
                  <li>
                    Arbitrage (traders long one market, short the other) drags
                    spot and futures prices back together.
                  </li>
                </ul>
              </>
            )}

            {activeModal === "leverage-risk" && (
              <>
                <h2>Leverage, Profit and Loss, and Liquidation</h2>
                <p>
                  Leverage is just a multiplier between your{" "}
                  <strong>margin</strong> (your own money in the trade) and
                  your <strong>position size</strong> (total dollars of coin you
                  control.
                </p>
                <h3>Core math</h3>
                <p>
                  If margin is <strong>I</strong> and leverage is{" "}
                  <strong>L</strong>, then:
                </p>
                <p className="card">
                  Position size = I × L
                </p>
                <p>
                  If price moves by a percentage <strong>%ΔP</strong> in your
                  direction:
                </p>
                <p className="card">
                  Profit and loss (PnL) = Position size × %ΔP
                </p>
                <p>
                  Your return on your own money is approximately:
                </p>
                <p className="card">
                  Return (%) ≈ Leverage × %ΔP
                </p>
                <h3>Why this can destroy accounts</h3>
                <ul>
                  <li>
                    Use $100 as margin at 10× leverage → $1,000 position size.
                  </li>
                  <li>A 10 percent move against you on the coin = 100 percent loss on your margin.</li>
                  <li>
                    That is liquidation: the position is closed before your
                    account balance can go negative.
                  </li>
                </ul>
                <h3>The safe way to think about leverage</h3>
                <ul>
                  <li>Decide your maximum dollar loss for the trade first.</li>
                  <li>Choose entry and stop loss based on logic.</li>
                  <li>
                    Compute position size so loss at the stop ≈ your chosen
                    dollar risk.
                  </li>
                  <li>
                    Use leverage only to reach that position size, not to chase
                    bigger risk.
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Crypto;
