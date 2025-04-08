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
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city..."
        className="flex-grow px-3 py-2 rounded border"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
    </form>
  );
}
