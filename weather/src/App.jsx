import React from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import FavoriteCities from "./components/FavoriteCities";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="w-full max-w-2xl p-6 flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-300">
          🌦️ Real-time Weather Dashboard
        </h1>
        <SearchBar />
        <CurrentWeather />
        <FavoriteCities />
      </div>
    </div>
  );
}
