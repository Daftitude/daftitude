import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

import HeroCrypto from "../../components/crypto/HeroCrypto";
import TokenData from "../../assets/crypto-data.json";

const commandCards = [
  {
    label: "Public Portfolio",
    title: "Transparent holdings mirror",
    text: "Show what is public, what is tracked, and what changed without pretending this is financial advice.",
  },
  {
    label: "Market Awareness",
    title: "Current prices and context",
    text: "Use market cards as awareness, not as a buy button. Price is information, not permission.",
  },
  {
    label: "Research Links",
    title: "Learning before action",
    text: "Point visitors toward Coinbase, CoinMarketCap, chain explorers, and future DaFTitude research tools.",
  },
  {
    label: "Risk Notes",
    title: "No gambling cosplay",
    text: "Separate tracking, research, investing, and trading so people know which game they are actually playing.",
  },
];

const lockedTools = [
  "Personal watchlist",
  "Portfolio import",
  "Price and risk alerts",
  "Advanced calculators",
  "Transaction tagging",
  "Private dashboards",
  "AI market summaries",
  "Saved research notes",
];

const riskNotes = [
  {
    title: "This is not a buy page",
    text: "Crypto on DaFTitude should teach, track, explain, and organize. It should not pressure users into buying anything.",
  },
  {
    title: "Public does not mean complete",
    text: "A public portfolio mirror can show selected holdings and transactions while private data stays behind login later.",
  },
  {
    title: "Tools should slow bad decisions down",
    text: "Good crypto tools should expose risk, sizing, assumptions, and history before someone acts on emotion.",
  },
];

const schoolModules = [
  {
    id: "orientation",
    code: "M0",
    title: "Orientation: What Game Am I Playing?",
    text: "Trade vs invest, spot vs derivatives, and what it means to put real money at risk in each environment.",
  },
  {
    id: "market-types",
    code: "M1",
    title: "Spot vs Futures vs Perpetual Futures",
    text: "Who owns what, what expires, what can be liquidated, and how the three market types connect.",
  },
  {
    id: "price-moves",
    code: "M2",
    title: "How Price Actually Moves",
    text: "Order books, market orders, and how futures flows and arbitrage push spot price around.",
  },
  {
    id: "leverage-risk",
    code: "M3",
    title: "Leverage, Profit and Loss, and Liquidation",
    text: "How position size, leverage, and liquidation interact — and how sizing wrong blows accounts up.",
  },
];

const getCategory = (tx) => {
  const desc = tx.description?.toLowerCase() || "";
  if (desc.includes("stake")) return "Stake";
  if (desc.includes("reward")) return "Reward";
  if (desc.includes("transfer")) return "Transfer";
  if (tx.type === "buy") return "Buy";
  if (tx.type === "sell") return "Sell";
  return "Other";
};

const buildBalances = (txList) => {
  const totals = {};

  txList.forEach((tx) => {
    const symbol = tx.symbol.toUpperCase();
    const amount = parseFloat(tx.amount);

    if (!totals[symbol]) totals[symbol] = 0;

    if (["Buy", "Reward", "Stake"].includes(tx.category)) {
      totals[symbol] += amount;
    } else if (["Sell", "Transfer"].includes(tx.category)) {
      totals[symbol] -= amount;
    }
  });

  return totals;
};

export default function Crypto() {
  const asOfDate = "July 21, 2025";
  const portfolioAge = "2y 6m 20d";

  const [prices, setPrices] = useState({
    eth: null,
    sol: null,
    usdc: 1.0,
    usd: 1.0,
  });
  const [filterType, setFilterType] = useState("All");
  const [activeModal, setActiveModal] = useState(null);

  const transactions = useMemo(() => {
    return TokenData.transactions.map((tx) => ({
      ...tx,
      category: getCategory(tx),
    }));
  }, []);

  const filtered = useMemo(() => {
    if (filterType === "All") return transactions;
    return transactions.filter((tx) => tx.category === filterType);
  }, [filterType, transactions]);

  const balances = useMemo(() => buildBalances(transactions), [transactions]);

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

  const closeModal = () => setActiveModal(null);

  return (
    <section className="crypto-section">
      <HeroCrypto />

      <section className="crypto-command-section" aria-label="Crypto command center overview">
        <div className="crypto-command-head">
          <p className="section-kicker">Crypto Command Center</p>
          <h2>Coinbase-style structure. DaFTitude-style purpose.</h2>
          <p>
            This page is not for buying. It is for tracking, learning, researching, showing selected public portfolio context, and previewing tools that can become private behind login later.
          </p>
        </div>

        <div className="crypto-command-grid">
          {commandCards.map((card) => (
            <article className="crypto-command-card" key={card.title}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="crypto-prices-section" aria-label="Crypto market snapshot">
        <div className="crypto-section-head">
          <p className="section-kicker">Market Snapshot</p>
          <h2>Current prices for awareness, not impulse.</h2>
          <p>Live price cards give context. They should support research and risk review, not push a buy decision.</p>
        </div>

        <div className="price-grid">
          <div className="price-card">
            <h3>ETH</h3>
            <p>{prices.eth ? `$${prices.eth.toFixed(2)}` : "Loading..."}</p>
          </div>
          <div className="price-card">
            <h3>SOL</h3>
            <p>{prices.sol ? `$${prices.sol.toFixed(2)}` : "Loading..."}</p>
          </div>
          <div className="price-card">
            <h3>USDC</h3>
            <p>{`$${prices.usdc.toFixed(2)}`}</p>
          </div>
          <div className="price-card">
            <h3>USD</h3>
            <p>{`$${prices.usd.toFixed(2)}`}</p>
          </div>
        </div>
      </section>

      <section className="crypto-ground-school" aria-label="Crypto Ground School">
        <div className="crypto-section-head">
          <p className="section-kicker">Crypto Ground School</p>
          <h2>Learn the market before you swim in it.</h2>
          <p>
            Plain-English lessons for beginners to early-intermediate traders: spot, futures, perpetuals, price movement, leverage, liquidation, and risk.
          </p>
        </div>

        <div className="crypto-ground-grid">
          {schoolModules.map((module) => (
            <button
              type="button"
              className="crypto-school-card"
              onClick={() => setActiveModal(module.id)}
              key={module.id}
            >
              <span>{module.code}</span>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="crypto-portfolio-section" aria-label="Public portfolio overview">
        <div className="crypto-section-head">
          <p className="section-kicker">Public Portfolio Mirror</p>
          <h2>Selected holdings and transaction history.</h2>
          <p>As of: {asOfDate} · Portfolio age: {portfolioAge}</p>
        </div>

        <div className="balance-grid">
          {Object.entries(balances).map(([symbol, amount]) => (
            <div key={symbol} className="token-balance-card">
              <img
                src={`/icons/${symbol.toLowerCase()}.svg`}
                alt={`${symbol} icon`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <h3>{symbol}</h3>
              <p>{amount.toFixed(4)}</p>
            </div>
          ))}
        </div>

        <div className="crypto-filter-buttons">
          {["All", "Buy", "Sell", "Stake", "Reward", "Transfer"].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setFilterType(type)}
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
      </section>

      <section className="crypto-locked-section" aria-label="Locked crypto tool previews">
        <div className="crypto-locked-copy">
          <p className="section-kicker">See It Before Login</p>
          <h2>Public users can see the tools. Logged-in users will eventually use them.</h2>
          <p>
            This is the same “see but cannot touch” pattern as the rest of DaFTitude: educate publicly, save private context behind login.
          </p>
          <div className="crypto-action-row">
            <Link className="booking-btn booking-btn-primary" to="/login?source=crypto-tools">
              Log In for Tools
            </Link>
            <Link className="booking-btn booking-btn-secondary" to="/booking/services?source=crypto-tools">
              Build a Crypto Tool
            </Link>
          </div>
        </div>

        <div className="crypto-tool-grid">
          {lockedTools.map((tool) => (
            <div className="crypto-tool-card" key={tool}>
              <span>Locked Preview</span>
              <strong>{tool}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="crypto-risk-section" aria-label="Crypto risk notes">
        <div className="crypto-risk-copy">
          <p className="section-kicker">Risk Notes</p>
          <h2>Good crypto pages should slow bad decisions down.</h2>
          <p>
            DaFTitude should make the difference between research, tracking, investing, and trading obvious.
          </p>
        </div>

        <div className="crypto-risk-grid">
          {riskNotes.map((note) => (
            <article className="crypto-risk-card" key={note.title}>
              <span>Risk Awareness</span>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={closeModal} className="crypto-modal-close" aria-label="Close">
              ×
            </button>

            {activeModal === "orientation" && (
              <>
                <h2>Orientation: What Game Am I Playing?</h2>
                <p>Trading is placing a bet on future price using real money. Every time you press buy or sell, you are taking a position against other humans and algorithms.</p>
                <h3>Three things you actually control</h3>
                <ul>
                  <li><strong>Direction</strong> — long or short.</li>
                  <li><strong>Position size</strong> — how many dollars of coin you control.</li>
                  <li><strong>Exits</strong> — where you take profit and where you admit you are wrong.</li>
                </ul>
              </>
            )}

            {activeModal === "market-types" && (
              <>
                <h2>Spot vs Futures vs Perpetual Futures</h2>
                <p>All three let you bet on price, but they handle ownership, leverage, and risk differently.</p>
                <ul>
                  <li><strong>Spot:</strong> you own the real coin.</li>
                  <li><strong>Futures:</strong> you trade a contract with expiration, margin, and leverage.</li>
                  <li><strong>Perpetual futures:</strong> no expiry; funding rates help keep perp price near spot.</li>
                </ul>
              </>
            )}

            {activeModal === "price-moves" && (
              <>
                <h2>How Price Actually Moves</h2>
                <p>Price moves when orders hit the order book, not because of magic indicators.</p>
                <ul>
                  <li><strong>Bid:</strong> buyers and their prices.</li>
                  <li><strong>Ask:</strong> sellers and their prices.</li>
                  <li><strong>Spread:</strong> best ask minus best bid.</li>
                  <li><strong>Last price:</strong> the price of the most recent trade.</li>
                </ul>
              </>
            )}

            {activeModal === "leverage-risk" && (
              <>
                <h2>Leverage, Profit and Loss, and Liquidation</h2>
                <p>Leverage is a multiplier between your margin and your position size.</p>
                <p className="card">Position size = margin × leverage</p>
                <p className="card">PnL = position size × price move</p>
                <ul>
                  <li>Use $100 margin at 10× leverage and you control a $1,000 position.</li>
                  <li>A 10 percent move against you can wipe out the margin.</li>
                  <li>Leverage should support risk sizing, not gambling.</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
