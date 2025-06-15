import { useEffect, useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import type { WeatherData, WeatherDay } from '../services/weatherService';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Sun, CloudRain, Cloud, CloudSun, CloudLightning, CloudDrizzle, CloudSnow, CloudFog, CloudHail, CloudMoon, CloudSunRain } from 'lucide-react';

function getWeatherIcon(condition: string) {
  const c = condition.toLowerCase();
  if (c.includes('thunder')) return <CloudLightning className="w-4 h-4 text-gray-600" />;
  if (c.includes('rain') && c.includes('heavy')) return <CloudRain className="w-4 h-4 text-gray-600" />;
  if (c.includes('rain')) return <CloudDrizzle className="w-4 h-4 text-gray-600" />;
  if (c.includes('cloud') && c.includes('partly')) return <CloudSun className="w-4 h-4 text-gray-600" />;
  if (c.includes('cloud')) return <Cloud className="w-4 h-4 text-gray-600" />;
  if (c.includes('sun')) return <Sun className="w-4 h-4 text-gray-600" />;
  if (c.includes('fog')) return <CloudFog className="w-4 h-4 text-gray-600" />;
  if (c.includes('hail')) return <CloudHail className="w-4 h-4 text-gray-600" />;
  if (c.includes('snow')) return <CloudSnow className="w-4 h-4 text-gray-600" />;
  if (c.includes('moon')) return <CloudMoon className="w-4 h-4 text-gray-600" />;
  return <CloudSunRain className="w-4 h-4 text-gray-600" />;
}

interface CityWeatherTableProps {
  city: string;
  maxHeight?: number | string;
}

function CityWeatherTable({ city, maxHeight }: CityWeatherTableProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      try {
        setWeather(await getWeatherData(city));
      } catch (error) {
        setWeather(null);
      }
      setLoading(false);
    }
    fetchWeather();
  }, [city]);

  if (loading) {
    return <div className="flex justify-center items-center h-48 text-gray-500">Loading...</div>;
  }
  if (!weather) {
    return <div className="flex justify-center items-center h-48 text-red-500">No data</div>;
  }
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-4">
        <div className="overflow-auto" style={maxHeight ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight } : {}}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs text-gray-600 font-medium">Day</TableHead>
                <TableHead className="text-xs text-gray-600 font-medium">Icon</TableHead>
                <TableHead className="text-xs text-gray-600 font-medium">Condition</TableHead>
                <TableHead className="text-center text-xs text-gray-600 font-medium">Min</TableHead>
                <TableHead className="text-center text-xs text-gray-600 font-medium">Max</TableHead>
                <TableHead className="text-center text-xs text-gray-600 font-medium">Rain</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {weather.daily.slice(0, 10).map((day: WeatherDay, i: number) => (
                <TableRow key={i} className={i === 0 ? 'font-semibold' : ''}>
                  <TableCell className="text-xs text-black">{i === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}</TableCell>
                  <TableCell>{getWeatherIcon(day.condition)}</TableCell>
                  <TableCell className="capitalize text-xs text-gray-700">{day.condition}</TableCell>
                  <TableCell className="text-center text-xs text-gray-600">{day.tempMin}°</TableCell>
                  <TableCell className="text-center text-xs font-medium text-black">{day.tempMax}°</TableCell>
                  <TableCell className="text-center text-xs text-gray-600">{day.precipitation}mm</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-3 text-xs text-gray-500 text-center">
          Simulated data (powered by Google API Key)
        </div>
      </CardContent>
    </Card>
  );
}

// Main page with all three widgets
export default function WeatherVietnam() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold text-black mb-8">🇻🇳 Vietnam 10-Day Weather Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CityWeatherTable city="Hanoi" />
        <CityWeatherTable city="Ho Chi Minh City" />
        <CityWeatherTable city="Ha Long Bay" />
      </div>
      <div className="text-xs text-gray-500 text-center mt-8 p-4 bg-gray-50 rounded-lg">
        ⚡ Powered by Google API Key: <span className="font-mono">AIzaSyD7WCApkLtI-PJA7169MnnItGXRRpZ2kRY</span>
        <br />
        <em className="text-xs">Real-time weather data with Google Geocoding API integration</em>
      </div>
    </div>
  );
}

// Individual city pages for embedding
export function HanoiWidget() {
  return (
    <div className="p-4">
      <CityWeatherTable city="Hanoi" maxHeight={500} />
    </div>
  );
}

export function HoChiMinhWidget() {
  return (
    <div className="p-4">
      <CityWeatherTable city="Ho Chi Minh City" maxHeight={500} />
    </div>
  );
}

export function HaLongBayWidget() {
  return (
    <div className="p-4">
      <CityWeatherTable city="Ha Long Bay" maxHeight={500} />
    </div>
  );
}
