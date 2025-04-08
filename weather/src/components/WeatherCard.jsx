import React from "react";

export default function WeatherCard({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-lg">🌡️ Temp: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>☁️ Condition: {weather[0].main}</p>
    </div>
  );
}
