'use client'; // This ensures the component is only rendered on the client side

import { useState, useEffect } from 'react';

// Define types for the weather data
interface WeatherData {
  weather: { description: string }[];
  main: { temp: number };
}

const WeatherBox = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>('Kathmandu'); // Default city
  const [loading, setLoading] = useState<boolean>(true);

  const API_HOST = 'open-weather13.p.rapidapi.com';
  const API_KEY = 'c8d599626amsh441fa4f9824dc8fp15dbc6jsn77b3fef81d35'; // Replace with your actual API key

  const cities = ['Kathmandu','Pokhara','Chitwan','London', 'New York', 'Paris', 'Tokyo', 'Sydney'];

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': API_HOST,
              'x-rapidapi-key': API_KEY,
            },
          }
        );
        const data = await response.json();
        if (data) {
          setWeather(data);
          setError(null);
        } else {
          setError('No weather data found.');
        }
      } catch (error) {
        setError('Error fetching weather data.');
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // Fetch weather whenever city changes

  const getWeatherIcon = (description: string): string => {
    switch (description) {
      case 'clear sky':
        return '🌞'; // Sunny
      case 'few clouds':
      case 'scattered clouds':
        return '🌤'; // Partly Cloudy
      case 'broken clouds':
        return '☁️'; // Cloudy
      case 'shower rain':
      case 'rain':
        return '🌧'; // Rainy
      case 'thunderstorm':
        return '⛈'; // Thunderstorm
      case 'snow':
        return '❄️'; // Snow
      default:
        return '🌥'; // Default weather icon
    }
  };

  return (
    <div className="weather-box p-6 bg-white rounded-xl shadow-lg border-2 border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Weather in {city}
      </h2>

      <div className="mb-6">
        <label htmlFor="city" className="block text-gray-700 mb-2">
          Choose City
        </label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="text-center">
          <div className="text-5xl mb-4">
            {getWeatherIcon(weather?.weather?.[0]?.description ?? '')}
          </div>
          <p className="text-xl text-gray-700">
            <strong>Temperature:</strong> {weather?.main?.temp}°F
          </p>
          <p className="text-xl text-gray-700">
            <strong>Description:</strong> {weather?.weather?.[0]?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherBox;
