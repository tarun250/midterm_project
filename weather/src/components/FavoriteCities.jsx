import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function FavoriteCities() {
  const { favorites, setCurrentCity } = useContext(WeatherContext);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-2">⭐ Favorite Cities</h2>
      <ul className="space-y-1">
        {favorites.length === 0 && <li>No favorites added yet.</li>}
        {favorites.map((city, index) => (
          <li
            key={index}
            className="cursor-pointer hover:underline text-blue-700"
            onClick={() => setCurrentCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
