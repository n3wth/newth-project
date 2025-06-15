import type { WeatherData, WeatherDay } from '@/types/widget';

// Export types for backward compatibility
export type { WeatherData, WeatherDay };

// Mock weather data for demonstration
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
      { date: '2024-07', tempMin: 18, tempMax: 23, condition: 'Foggy', precipitation: 1 },
      { date: '2024-01-08', tempMin: 16, tempMax: 21, condition: 'Light rain', precipitation: 6 },
      { date: '2024-01-09', tempMin: 17, tempMax: 22, condition: 'Cloudy', precipitation: 2 },
      { date: '2024-01-10', tempMin: 19, tempMax: 24, condition: 'Partly cloudy', precipitation: 0 },
    ]
  }
};

export async function getWeatherData(city: string): Promise<WeatherData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const data = mockWeatherData[city];
  if (!data) {
    throw new Error(`Weather data not available for ${city}`);
  }
  
  return data;
}
