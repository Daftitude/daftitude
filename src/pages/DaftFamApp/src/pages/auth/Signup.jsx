import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../context/TokenContext";

const Signup = () => {
  const navigate = useNavigate();
  const { setTokenData } = useToken();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "parent",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return setError("All fields are required.");
    }

    try {
      // Mock signup API call — replace with real endpoint later
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Signup failed.");
      const data = await res.json();

      // Example: { token, user: { name, role, familyId } }
      setTokenData(data.token, data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Create Your Family Account</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
          >
            <option value="parent">Parent</option>
            <option value="child">Child</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md font-semibold transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;