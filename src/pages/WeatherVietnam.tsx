import { useEffect, useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import type { WeatherData, WeatherDay } from '../services/weatherService';

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
        fontFamily: 'sans-serif',
        color: '#666'
      }}>
        Loading Vietnam weather data...
      </div>
    );
  }

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      maxWidth: 1000, 
      margin: '0 auto', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 12, 
      padding: 24,
      color: 'white',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: 32, 
        fontSize: 28,
        fontWeight: 'bold',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        🇻🇳 Vietnam 10-Day Weather Forecast
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 24 
      }}>
        {CITIES.map(city => {
          const cityWeather = weather[city];
          if (!cityWeather) return null;
          
          return (
            <div key={city} style={{ 
              background: 'rgba(255,255,255,0.1)', 
              backdropFilter: 'blur(10px)',
              borderRadius: 12, 
              padding: 20,
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ 
                margin: '0 0 20px 0', 
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600'
              }}>
                {city}
              </h3>
              
              <div style={{ display: 'grid', gap: 12 }}>
                {cityWeather.daily.slice(0, 10).map((day: WeatherDay, i: number) => (
                  <div key={i} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '80px 1fr 60px 60px 50px',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: i < 9 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    fontSize: 14
                  }}>
                    <span style={{ 
                      fontWeight: i === 0 ? 'bold' : 'normal',
                      fontSize: i === 0 ? 15 : 14
                    }}>
                      {i === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span style={{ 
                      fontSize: 12, 
                      opacity: 0.9,
                      textTransform: 'capitalize'
                    }}>
                      {day.condition}
                    </span>
                    <span style={{ 
                      textAlign: 'center', 
                      opacity: 0.8,
                      fontSize: 13
                    }}>
                      {day.tempMin}°
                    </span>
                    <span style={{ 
                      textAlign: 'center', 
                      fontWeight: 'bold',
                      fontSize: 15
                    }}>
                      {day.tempMax}°
                    </span>
                    <span style={{ 
                      textAlign: 'center', 
                      color: '#87CEEB',
                      fontSize: 12
                    }}>
                      {day.precipitation}mm
                    </span>
                  </div>
                ))}
              </div>
              
              <div style={{ 
                marginTop: 16, 
                fontSize: 11, 
                opacity: 0.7, 
                textAlign: 'center' 
              }}>
                {cityWeather.source}
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{ 
        fontSize: 12, 
        opacity: 0.8, 
        marginTop: 32, 
        textAlign: 'center',
        background: 'rgba(255,255,255,0.1)',
        padding: 16,
        borderRadius: 8
      }}>
        ⚡ Powered by Google API Key: AIzaSyD7WCApkLtI-PJA7169MnnItGXRRpZ2kRY
        <br />
        <em style={{ fontSize: 11 }}>
          Real-time weather data with Google Geocoding API integration
        </em>
      </div>
    </div>
  );
}
