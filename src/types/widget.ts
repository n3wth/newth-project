export interface Widget {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
  tags?: string[];
}

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