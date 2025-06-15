import type { WeatherData, WeatherDay } from '@/types/widget';

// Export types for backward compatibility
export type { WeatherData, WeatherDay };

// Weather service that uses Google APIs where possible
const GOOGLE_API_KEY = 'AIzaSyD7WCApkLtI-PJA7169MnnItGXRRpZ2kRY';

// Google Geocoding API to get precise coordinates
async function getCoordinates(cityName: string): Promise<{ lat: number; lon: number } | null> {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName + ', Vietnam')}&key=${GOOGLE_API_KEY}`;
    console.log('Attempting to fetch coordinates for:', cityName);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('Geocoding API response not ok:', response.status, response.statusText);
      return null;
    }
    
    const data = await response.json();
    console.log('Geocoding API response:', data);
    
    if (data.status === 'OK' && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lon: location.lng };
    } else {
      console.error('Geocoding API error:', data.status, data.error_message);
    }
  } catch (error) {
    console.error('Geocoding failed:', error);
  }
  return null;
}

// Simulated weather data generator
const generateWeatherData = (city: string): WeatherData => {
  const conditions = [
    'sunny', 'partly cloudy', 'cloudy', 'light rain', 
    'heavy rain', 'thunderstorm', 'fog', 'clear'
  ];
  
  const daily: WeatherDay[] = [];
  const baseDate = new Date();
  
  for (let i = 0; i < 10; i++) {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i);
    
    // Generate realistic temperature ranges for Vietnam
    const baseTemp = city.toLowerCase().includes('hanoi') ? 25 : 28;
    const tempVariation = Math.random() * 8 - 4; // ±4 degrees
    const tempMax = Math.round(baseTemp + tempVariation + Math.random() * 5);
    const tempMin = Math.round(tempMax - 5 - Math.random() * 3);
    
    daily.push({
      date: date.toISOString().split('T')[0],
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      tempMin,
      tempMax,
      precipitation: Math.round(Math.random() * 15), // 0-15mm
    });
  }
  
  return {
    city,
    daily,
  };
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  // Simulate network delay
  await delay(300 + Math.random() * 200);
  
  // Simulate occasional API failures (5% chance)
  if (Math.random() < 0.05) {
    throw new Error(`Failed to fetch weather data for ${city}`);
  }
  
  return generateWeatherData(city);
};
