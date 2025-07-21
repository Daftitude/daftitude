import React from 'react';
import './index.css'; // Assumes your global CSS is imported here

const CryptoDashboard = () => {
  const asOfDate = "July 21, 2025";
  const portfolioAge = "2y 6m 20d";

  return (
    <div className="container text-center">
      <div className="space-between mb-2">
        <h2 className="text-uppercase">Crypto Portfolio Tracker</h2>
        <div>
          <p><strong>As of:</strong> {asOfDate}</p>
          <p><strong>Portfolio Age:</strong> {portfolioAge}</p>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-3 mb-2">
        <div className="card">
          <h3>Total Balance</h3>
          <p>$8,174.46</p>
        </div>
        <div className="card">
          <h3>Total Deposits</h3>
          <p>$13,300.00</p>
        </div>
        <div className="card">
          <h3>Total Withdrawals</h3>
          <p>$1,354.62</p>
        </div>
        <div className="card">
          <h3>Total Sent</h3>
          <p>$500.00</p>
        </div>
        <div className="card">
          <h3>Total Rewards</h3>
          <p>$117.53</p>
        </div>
      </div>

      {/* Asset Breakdown */}
      <div className="grid grid-2 mb-2">
        <div className="card">
          <h3>ETH</h3>
          <p>Balance: 2.203885</p>
          <p>Avg Entry: $2,484.73</p>
          <p>Return: ↗ $2,071.54</p>
        </div>
        <div className="card">
          <h3>SOL</h3>
          <p>Balance: 0.000003</p>
          <p>Avg Entry: $204.70</p>
          <p>Return: ↘ $0.01</p>
        </div>
        <div className="card">
          <h3>USDC</h3>
          <p>Balance: $623.78</p>
          <p>Earned: $8.89</p>
        </div>
        <div className="card">
          <h3>USD</h3>
          <p>Balance: $3.07</p>
        </div>
      </div>

      {/* Open Orders */}
      <h3 className="mt-2">Open Orders</h3>
      <table className="pricing-table mt-1">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LINK-USDC</td>
            <td>Limit Buy</td>
            <td>$15.20</td>
            <td>7.4 LINK</td>
            <td>$113.32</td>
          </tr>
          <tr>
            <td>LINK-USDC</td>
            <td>Limit Buy</td>
            <td>$16.40</td>
            <td>12.2 LINK</td>
            <td>$201.58</td>
          </tr>
          <tr>
            <td>SOL-USDC</td>
            <td>Limit Buy</td>
            <td>$144.00</td>
            <td>0.68923611 SOL</td>
            <td>$99.99</td>
          </tr>
          <tr>
            <td>SOL-USDC</td>
            <td>Limit Buy</td>
            <td>$137.00</td>
            <td>0.72445255 SOL</td>
            <td>$99.99</td>
          </tr>
          <tr>
            <td>SOL-USDC</td>
            <td>Limit Buy</td>
            <td>$132.00</td>
            <td>0.75189393 SOL</td>
            <td>$99.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoDashboard;