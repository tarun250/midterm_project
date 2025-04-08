import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

export default function CurrentWeather() {
  const { weatherData, currentCity, addFavorite } = useContext(WeatherContext);

  if (!weatherData || weatherData.cod !== 200) return <p>No weather data to display.</p>;

  return (
    <div>
      <WeatherCard data={weatherData} />
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => addFavorite(currentCity)}
      >
        Add to Favorites
      </button>
    </div>
  );
}
