// Weather data types
export interface WeatherData {
  city: string;
  daily: WeatherDay[];
}

export interface WeatherDay {
  date: string;
  condition: string;
  tempMin: number;
  tempMax: number;
  precipitation: number;
}

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

// Fallback mock data in case API fails - generates current dates
function generateMockWeatherData(city: string): WeatherData {
  const today = new Date();
  const daily: WeatherDay[] = [];
  
  // Base weather patterns for each city
  const cityPatterns = {
    'Hanoi': {
      tempBase: 25,
      tempVariation: 8,
      conditions: ['Partly cloudy', 'Sunny', 'Light rain', 'Cloudy', 'Overcast clouds']
    },
    'Ho Chi Minh City': {
      tempBase: 30,
      tempVariation: 6,
      conditions: ['Sunny', 'Partly cloudy', 'Thunderstorms', 'Heavy rain', 'Clear sky']
    },
    'Ha Long Bay': {
      tempBase: 22,
      tempVariation: 7,
      conditions: ['Foggy', 'Partly cloudy', 'Light rain', 'Cloudy', 'Mist']
    }
  };
  
  const pattern = cityPatterns[city as keyof typeof cityPatterns] || cityPatterns['Hanoi'];
  
  for (let i = 0; i < 10; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    // Generate realistic temperatures with some variation
    const tempVariation = (Math.random() - 0.5) * pattern.tempVariation;
    const tempMax = Math.round(pattern.tempBase + tempVariation + Math.random() * 5);
    const tempMin = Math.round(tempMax - 5 - Math.random() * 3);
    
    // Pick a random condition
    const condition = pattern.conditions[Math.floor(Math.random() * pattern.conditions.length)];
    
    // Generate precipitation based on condition
    let precipitation = 0;
    if (condition.toLowerCase().includes('rain')) {
      precipitation = Math.round(Math.random() * 15 + 2);
    } else if (condition.toLowerCase().includes('thunder')) {
      precipitation = Math.round(Math.random() * 25 + 10);
    }
    
    daily.push({
      date: date.toISOString().split('T')[0],
      tempMin,
      tempMax,
      condition,
      precipitation
    });
  }
  
  return {
    city,
    daily
  };
}

export async function getWeatherData(city: string): Promise<WeatherData> {
  try {
    // Try to fetch from OpenWeatherMap API first
    return await fetchWeatherFromAPI(city);
  } catch (error) {
    console.warn(`API fetch failed for ${city}, falling back to mock data:`, error);
    
    // Fall back to mock data if API fails
    const mockData = generateMockWeatherData(city);
    
    // Add a small delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockData;
  }
}
