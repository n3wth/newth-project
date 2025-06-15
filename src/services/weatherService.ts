import type { WeatherData, WeatherDay } from '@/types/widget';

// Export types for backward compatibility
export type { WeatherData, WeatherDay };

const OPENWEATHER_API_KEY = '3eb6328a959ba7abef565bbe4be7b982';
const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// City coordinates for Vietnam locations
const CITY_COORDINATES: Record<string, { lat: number; lon: number }> = {
  'Hanoi': { lat: 21.0285, lon: 105.8542 },
  'Ho Chi Minh City': { lat: 10.8231, lon: 106.6297 },
  'Ha Long Bay': { lat: 20.9101, lon: 107.1839 }
};

interface OpenWeatherResponse {
  list: Array<{
    dt: number;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      main: string;
      description: string;
    }>;
    rain?: {
      '3h': number;
    };
    snow?: {
      '3h': number;
    };
  }>;
}

function kelvinToCelsius(kelvin: number): number {
  return Math.round(kelvin - 273.15);
}

function formatCondition(weather: { main: string; description: string }): string {
  return weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
}

function getPrecipitation(item: any): number {
  const rain = item.rain?.['3h'] || 0;
  const snow = item.snow?.['3h'] || 0;
  return Math.round(rain + snow);
}

async function fetchWeatherFromAPI(city: string): Promise<WeatherData> {
  const coordinates = CITY_COORDINATES[city];
  if (!coordinates) {
    throw new Error(`Coordinates not found for city: ${city}`);
  }

  const url = `${OPENWEATHER_BASE_URL}/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${OPENWEATHER_API_KEY}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`OpenWeatherMap API error: ${response.status} ${response.statusText}`);
    }
    
    const data: OpenWeatherResponse = await response.json();
    
    // Group forecasts by day and get daily min/max
    const dailyData: Record<string, {
      date: string;
      tempMin: number;
      tempMax: number;
      conditions: string[];
      precipitation: number;
    }> = {};
    
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toISOString().split('T')[0];
      const tempMin = kelvinToCelsius(item.main.temp_min);
      const tempMax = kelvinToCelsius(item.main.temp_max);
      const condition = formatCondition(item.weather[0]);
      const precipitation = getPrecipitation(item);
      
      if (!dailyData[date]) {
        dailyData[date] = {
          date,
          tempMin,
          tempMax,
          conditions: [condition],
          precipitation
        };
      } else {
        dailyData[date].tempMin = Math.min(dailyData[date].tempMin, tempMin);
        dailyData[date].tempMax = Math.max(dailyData[date].tempMax, tempMax);
        if (!dailyData[date].conditions.includes(condition)) {
          dailyData[date].conditions.push(condition);
        }
        dailyData[date].precipitation = Math.max(dailyData[date].precipitation, precipitation);
      }
    });
    
    // Convert to array and take first 10 days
    const daily: WeatherDay[] = Object.values(dailyData)
      .slice(0, 10)
      .map(day => ({
        date: day.date,
        tempMin: day.tempMin,
        tempMax: day.tempMax,
        condition: day.conditions[0], // Use the first/most common condition
        precipitation: day.precipitation
      }));
    
    return {
      city,
      daily
    };
    
  } catch (error) {
    console.error(`Failed to fetch weather for ${city}:`, error);
    throw new Error(`Failed to fetch weather data for ${city}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Fallback mock data in case API fails
const mockWeatherData: Record<string, WeatherData> = {
  'Hanoi': {
    city: 'Hanoi',
    daily: [
      { date: '2024-01-01', tempMin: 18, tempMax: 25, condition: 'Partly cloudy', precipitation: 0 },
      { date: '2024-01-02', tempMin: 20, tempMax: 27, condition: 'Sunny', precipitation: 0 },
      { date: '2024-01-03', tempMin: 19, tempMax: 24, condition: 'Light rain', precipitation: 2 },
      { date: '2024-01-04', tempMin: 17, tempMax: 22, condition: 'Cloudy', precipitation: 0 },
      { date: '2024-01-05', tempMin: 21, tempMax: 28, condition: 'Sunny', precipitation: 0 },
      { date: '2024-01-06', tempMin: 22, tempMax: 29, condition: 'Partly cloudy', precipitation: 0 },
      { date: '2024-01-07', tempMin: 20, tempMax: 26, condition: 'Light rain', precipitation: 3 },
      { date: '2024-01-08', tempMin: 18, tempMax: 23, condition: 'Cloudy', precipitation: 1 },
      { date: '2024-01-09', tempMin: 19, tempMax: 25, condition: 'Sunny', precipitation: 0 },
      { date: '2024-01-10', tempMin: 21, tempMax: 27, condition: 'Partly cloudy', precipitation: 0 },
    ]
  },
  'Ho Chi Minh City': {
    city: 'Ho Chi Minh City',
    daily: [
      { date: '2024-01-01', tempMin: 24, tempMax: 32, condition: 'Sunny', precipitation: 0 },
      { date: '2024-01-02', tempMin: 25, tempMax: 33, condition: 'Partly cloudy', precipitation: 0 },
      { date: '2024-01-03', tempMin: 23, tempMax: 30, condition: 'Thunderstorms', precipitation: 15 },
      { date: '2024-01-04', tempMin: 22, tempMax: 29, condition: 'Heavy rain', precipitation: 25 },
      { date: '2024-01-05', tempMin: 26, tempMax: 34, condition: 'Sunny', precipitation: 0 },
      { date: '2024-01-06', tempMin: 27, tempMax: 35, condition: 'Hot', precipitation: 0 },
      { date: '2024-01-07', tempMin: 25, tempMax: 32, condition: 'Partly cloudy', precipitation: 2 },
      { date: '2024-01-08', tempMin: 24, tempMax: 31, condition: 'Light rain', precipitation: 5 },
      { date: '2024-01-09', tempMin: 26, tempMax: 33, condition: 'Sunny', precipitation: 0 },
      { date: '2024-01-10', tempMin: 25, tempMax: 32, condition: 'Partly cloudy', precipitation: 0 },
    ]
  },
  'Ha Long Bay': {
    city: 'Ha Long Bay',
    daily: [
      { date: '2024-01-01', tempMin: 16, tempMax: 22, condition: 'Foggy', precipitation: 0 },
      { date: '2024-01-02', tempMin: 18, tempMax: 24, condition: 'Partly cloudy', precipitation: 0 },
      { date: '2024-01-03', tempMin: 17, tempMax: 21, condition: 'Light rain', precipitation: 8 },
      { date: '2024-01-04', tempMin: 15, tempMax: 20, condition: 'Cloudy', precipitation: 3 },
      { date: '2024-01-05', tempMin: 19, tempMax: 25, condition: 'Sunny', precipitation: 0 },
      { date: '2024-01-06', tempMin: 20, tempMax: 26, condition: 'Partly cloudy', precipitation: 0 },
      { date: '2024-01-07', tempMin: 18, tempMax: 23, condition: 'Foggy', precipitation: 1 },
      { date: '2024-01-08', tempMin: 16, tempMax: 21, condition: 'Light rain', precipitation: 6 },
      { date: '2024-01-09', tempMin: 17, tempMax: 22, condition: 'Cloudy', precipitation: 2 },
      { date: '2024-01-10', tempMin: 19, tempMax: 24, condition: 'Partly cloudy', precipitation: 0 },
    ]
  }
};

export async function getWeatherData(city: string): Promise<WeatherData> {
  try {
    // Try to fetch from OpenWeatherMap API first
    return await fetchWeatherFromAPI(city);
  } catch (error) {
    console.warn(`API fetch failed for ${city}, falling back to mock data:`, error);
    
    // Fall back to mock data if API fails
    const mockData = mockWeatherData[city];
    if (!mockData) {
      throw new Error(`No weather data available for ${city}`);
    }
    
    // Add a small delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockData;
  }
}
