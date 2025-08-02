// src/components/FamilyBulletin.jsx
import { useState } from 'react';

export default function FamilyBulletin() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const handlePost = () => {
    if (input.trim()) {
      setPosts([{ id: Date.now(), text: input.trim() }, ...posts]);
      setInput('');
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-2">📌 Family Bulletin Board</h2>
      <textarea
        className="w-full border rounded px-3 py-2 mb-2"
        placeholder="Write a note to the family..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handlePost}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Post
      </button>

      <ul className="mt-4 space-y-2 max-h-40 overflow-y-auto">
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-100 p-2 rounded text-sm">
            {post.text}
          </li>
        ))}
      </ul>
    </div>
  );
}