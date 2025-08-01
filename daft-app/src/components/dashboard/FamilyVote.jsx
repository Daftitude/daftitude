import { useState } from 'react';

export default function FamilyVote({ onVoteSubmit }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [topic, setTopic] = useState('');
  const [customOption, setCustomOption] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const baseOptions = ['Pizza', 'Tacos', 'Salad', 'Leftovers', 'Out to Eat', 'I’ll Be Out'];

  const handleSubmit = () => {
    const finalOption = customOption || selectedOption;
    if (topic && finalOption) {
      onVoteSubmit({ topic, selectedOption: finalOption });
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-2">🗳️ Family Vote</h2>
      <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
        Suggest a topic and cast your vote:
      </p>

      <input
        type="text"
        placeholder="e.g., What should we eat tonight?"
        className="w-full mb-3 p-2 border rounded bg-white dark:bg-zinc-900 dark:text-white"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        disabled={submitted}
      />

      <div className="flex flex-wrap gap-2 mb-3">
        {baseOptions.map((option) => (
          <button
            key={option}
            onClick={() => {
              setSelectedOption(option);
              setCustomOption('');
            }}
            className={`px-3 py-1 rounded border ${
              selectedOption === option
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-zinc-700 dark:text-white'
            }`}
            disabled={submitted}
          >
            {option}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Or enter your own option..."
        className="w-full mb-3 p-2 border rounded bg-white dark:bg-zinc-900 dark:text-white"
        value={customOption}
        onChange={(e) => {
          setCustomOption(e.target.value);
          setSelectedOption('');
        }}
        disabled={submitted}
      />

      <button
        onClick={handleSubmit}
        disabled={submitted || !(topic && (selectedOption || customOption))}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {submitted ? 'Vote Submitted ✅' : 'Submit Vote'}
      </button>
    </div>
  );
}