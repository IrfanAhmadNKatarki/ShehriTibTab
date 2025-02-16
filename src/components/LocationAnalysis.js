import { useEffect, useState } from "react";

export default function LocationAnalysis({ setLocation }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });

      // Fetch weather data (Replace 'YOUR_API_KEY' with an actual API key)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`);
      const data = await response.json();
      setWeather({ temp: data.main.temp, humidity: data.main.humidity });
    });
  }, [setLocation]);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">Location & Weather</h2>
      {weather ? <p>Temperature: {weather.temp}°C, Humidity: {weather.humidity}%</p> : <p>Fetching weather data...</p>}
    </div>
  );
}
