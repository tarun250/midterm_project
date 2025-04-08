import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function FavoriteCities() {
  const { favorites, setCurrentCity } = useContext(WeatherContext);

  return (
    <div className="bg-gray-800 rounded-2xl shadow-md p-5 w-full border border-gray-700">
      <h2 className="text-xl font-bold text-blue-400 mb-3">⭐ Favorite Cities</h2>
      <ul className="space-y-2">
        {favorites.length === 0 && (
          <li className="text-gray-400">No favorites added yet.</li>
        )}
        {favorites.map((city, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-300 hover:text-blue-200 transition"
            onClick={() => setCurrentCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
