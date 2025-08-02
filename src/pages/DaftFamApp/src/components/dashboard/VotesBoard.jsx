import { useState } from 'react';

export default function VotesBoard() {
  const [votes, setVotes] = useState([
    { id: 1, topic: 'Dinner Plan', option: 'Tacos', user: 'Mom' },
    { id: 2, topic: 'Movie Night', option: 'Kung Fu Panda', user: 'You' },
    { id: 3, topic: 'Weekend Plan', option: 'Hiking', user: 'Alex' },
  ]);

  return (
    <div className="bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-md mt-6 w-full">
      <h2 className="text-xl font-bold mb-4">📊 Family Vote Results</h2>
      {votes.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No votes submitted yet.</p>
      ) : (
        <ul className="space-y-3 max-h-60 overflow-y-auto">
          {votes.map((vote) => (
            <li
              key={vote.id}
              className="bg-gray-100 dark:bg-zinc-700 p-3 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">{vote.topic}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">{vote.user}</span> voted: <strong>{vote.option}</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}