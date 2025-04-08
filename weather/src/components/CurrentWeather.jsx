import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

export default function CurrentWeather() {
  const {
    weatherData,
    currentCity,
    favorites,
    addFavorite,
    removeFavorite,
  } = useContext(WeatherContext);

  const [isClicked, setIsClicked] = useState(false);

  if (!weatherData || weatherData.cod !== 200)
    return <p className="text-gray-400">No weather data to display.</p>;

  const isFavorite = favorites.includes(currentCity);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset after animation

    if (isFavorite) {
      removeFavorite(currentCity);
    } else {
      addFavorite(currentCity);
    }
  };

  return (
    <div className="w-full flex flex-col items-center transition-all duration-500 ease-in-out">
      <WeatherCard data={weatherData} />

      <button
        onClick={handleClick}
        className={`mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 transform ${
          isFavorite
            ? "bg-red-600 hover:bg-red-500 focus:ring-red-400"
            : "bg-blue-600 hover:bg-blue-500 focus:ring-blue-400"
        } ${
          isClicked ? "scale-95" : "scale-100"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900`}
      >
        {isFavorite ? "❌ Remove from Favorites" : "⭐ Add to Favorites"}
      </button>
    </div>
  );
}
