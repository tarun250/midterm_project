import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { setCurrentCity } = useContext(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCurrentCity(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-3 w-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city..."
        className="flex-grow px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition">
        Search
      </button>
    </form>
  );
}
