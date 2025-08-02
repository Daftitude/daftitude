import { useState } from 'react';

const itemsForSale = [
  { id: 1, name: 'Extra Screen Time', price: 10 },
  { id: 2, name: 'Skip a Chore Pass', price: 15 },
  { id: 3, name: 'Choose Dinner', price: 20 },
];

export default function Marketplace({ balance, onPurchase }) {
  const [message, setMessage] = useState('');

  const handleBuy = (item) => {
    if (balance >= item.price) {
      onPurchase(item);
      setMessage(`You purchased: ${item.name}`);
    } else {
      setMessage(`Not enough tokens for ${item.name}`);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-2">🎁 Family Marketplace</h2>
      <ul className="space-y-3">
        {itemsForSale.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <span>{item.name}</span>
            <button
              onClick={() => handleBuy(item)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              {item.price} DaFT
            </button>
          </li>
        ))}
      </ul>
      {message && <p className="mt-3 text-sm text-blue-600">{message}</p>}
    </div>
  );
}
