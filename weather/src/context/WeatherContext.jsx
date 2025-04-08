import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    if (currentCity) fetchWeather(currentCity);
  }, [currentCity]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchWeather = async (city) => {
    const apiKey = "6bde73cfdea3d5a41320fdf646855c85"; 
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Failed to fetch weather:", error);
    }
  };

  const addFavorite = (city) => {
    if (!favorites.includes(city)) setFavorites([...favorites, city]);
  };

  const contextValue = {
    currentCity,
    setCurrentCity,
    weatherData,
    favorites,
    addFavorite,
    fetchWeather,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
