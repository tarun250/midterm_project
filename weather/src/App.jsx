import React from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import FavoriteCities from "./components/FavoriteCities";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🌦️ Real-time Weather Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <SearchBar />
          <CurrentWeather />
        </div>
        <FavoriteCities />
      </div>
    </div>
  );
}
