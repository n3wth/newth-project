import { useEffect, useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import type { WeatherData, WeatherDay } from '../services/weatherService';
import '../styles/WeatherVietnam.css';

const CITIES = [
  'Hanoi',
  'Ho Chi Minh City', 
  'Ha Long Bay'
];

export default function WeatherVietnam() {
  const [weather, setWeather] = useState<Record<string, WeatherData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      const results: Record<string, WeatherData> = {};
      
      // Fetch weather for each city using Google API integration
      for (const city of CITIES) {
        try {
          results[city] = await getWeatherData(city);
        } catch (error) {
          console.error(`Failed to fetch weather for ${city}:`, error);
        }
      }
      
      setWeather(results);
      setLoading(false);
    }
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '200px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#666'
      }}>
        Loading Vietnam weather data...
      </div>
    );
  }

  return (
    <div className="weather-embed-container">
      <h2 className="weather-embed-header">🇻🇳 Vietnam 10-Day Weather Forecast</h2>
      <div className="weather-embed-cities">
        {CITIES.map(city => {
          const cityWeather = weather[city];
          if (!cityWeather) return null;
          
          return (
            <div key={city} className="weather-embed-city">
              <h3>{city}</h3>
              <div className="weather-embed-days">
                {cityWeather.daily.slice(0, 10).map((day: WeatherDay, i: number) => (
                  <div key={i} className={"weather-embed-day" + (i === 0 ? " weather-embed-today" : "") }>
                    <span>
                      {i === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                    </span>
                    <span style={{ fontSize: 12, opacity: 0.9, textTransform: 'capitalize' }}>{day.condition}</span>
                    <span style={{ textAlign: 'center', opacity: 0.8, fontSize: 13 }}>{day.tempMin}°</span>
                    <span style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>{day.tempMax}°</span>
                    <span className="weather-embed-precip">{day.precipitation}mm</span>
                  </div>
                ))}
              </div>
              <div className="weather-embed-source">{cityWeather.source}</div>
            </div>
          );
        })}
      </div>
      <div className="weather-embed-footer">
        ⚡ Powered by Google API Key: AIzaSyD7WCApkLtI-PJA7169MnnItGXRRpZ2kRY
        <br />
        <em style={{ fontSize: 11 }}>
          Real-time weather data with Google Geocoding API integration
        </em>
      </div>
    </div>
  );
}
