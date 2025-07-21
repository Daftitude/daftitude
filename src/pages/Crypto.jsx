import React from 'react';

const CryptoDashboard = () => {
  const asOfDate = "July 21, 2025";
  const portfolioAge = "2y 6m 20d";

  return (
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase">Crypto Portfolio Tracker</h2>
        <div className="text-sm text-gray-500 sm:text-right mt-2 sm:mt-0">
          <p><strong>As of:</strong> {asOfDate}</p>
          <p><strong>Portfolio Age:</strong> {portfolioAge}</p>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="card p-4 bg-gray-800 text-white rounded shadow">
          <h3>Total Balance</h3>
          <p>$8,174.46</p>
        </div>
        <div className="card p-4 bg-gray-800 text-white rounded shadow">
          <h3>Total Deposits</h3>
          <p>$13,300.00</p>
        </div>
        <div className="card p-4 bg-gray-800 text-white rounded shadow">
          <h3>Total Withdrawals</h3>
          <p>$1,354.62</p>
        </div>
        <div className="card p-4 bg-gray-800 text-white rounded shadow">
          <h3>Total Sent</h3>
          <p>$500.00</p>
        </div>
        <div className="card p-4 bg-gray-800 text-white rounded shadow">
          <h3>Total Rewards</h3>
          <p>$117.53</p>
        </div>
      </div>

      {/* Asset Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="card p-4 bg-gray-700 text-white rounded shadow">
          <h3>ETH</h3>
          <p>Balance: 2.203885</p>
          <p>Avg Entry: $2,484.73</p>
          <p>Return: ↗ $2,071.54</p>
        </div>
        <div className="card p-4 bg-gray-700 text-white rounded shadow">
          <h3>SOL</h3>
          <p>Balance: 0.000003</p>
          <p>Avg Entry: $204.70</p>
          <p>Return: ↘ $0.01</p>
        </div>
        <div className="card p-4 bg-gray-700 text-white rounded shadow">
          <h3>USDC</h3>
          <p>Balance: $623.78</p>
          <p>Earned: $8.89</p>
        </div>
        <div className="card p-4 bg-gray-700 text-white rounded shadow">
          <h3>USD</h3>
          <p>Balance: $3.07</p>
        </div>
      </div>

      {/* Open Orders */}
      <h3 className="text-lg font-semibold mb-2">Open Orders</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-600">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="p-2 border border-gray-600">Pair</th>
              <th className="p-2 border border-gray-600">Type</th>
              <th className="p-2 border border-gray-600">Price</th>
              <th className="p-2 border border-gray-600">Amount</th>
              <th className="p-2 border border-gray-600">Total</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-black">
            <tr>
              <td className="p-2 border border-gray-400">LINK-USDC</td>
              <td className="p-2 border border-gray-400">Limit Buy</td>
              <td className="p-2 border border-gray-400">$15.20</td>
              <td className="p-2 border border-gray-400">7.4 LINK</td>
              <td className="p-2 border border-gray-400">$113.32</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">LINK-USDC</td>
              <td className="p-2 border border-gray-400">Limit Buy</td>
              <td className="p-2 border border-gray-400">$16.40</td>
              <td className="p-2 border border-gray-400">12.2 LINK</td>
              <td className="p-2 border border-gray-400">$201.58</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">SOL-USDC</td>
              <td className="p-2 border border-gray-400">Limit Buy</td>
              <td className="p-2 border border-gray-400">$144.00</td>
              <td className="p-2 border border-gray-400">0.68923611 SOL</td>
              <td className="p-2 border border-gray-400">$99.99</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">SOL-USDC</td>
              <td className="p-2 border border-gray-400">Limit Buy</td>
              <td className="p-2 border border-gray-400">$137.00</td>
              <td className="p-2 border border-gray-400">0.72445255 SOL</td>
              <td className="p-2 border border-gray-400">$99.99</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-400">SOL-USDC</td>
              <td className="p-2 border border-gray-400">Limit Buy</td>
              <td className="p-2 border border-gray-400">$132.00</td>
              <td className="p-2 border border-gray-400">0.75189393 SOL</td>
              <td className="p-2 border border-gray-400">$99.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoDashboard;