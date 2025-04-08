import React from "react";

export default function WeatherCard({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="bg-gray-800 rounded-2xl shadow-md p-6 w-full border border-gray-700">
      <h2 className="text-2xl font-bold text-blue-400 mb-3">{name}</h2>
      <p className="text-lg text-gray-200">
        🌡️ Temp: <span className="font-semibold">{main.temp}°C</span>
      </p>
      <p className="text-gray-300">💧 Humidity: {main.humidity}%</p>
      <p className="text-gray-300">☁️ Condition: {weather[0].main}</p>
    </div>
  );
}
