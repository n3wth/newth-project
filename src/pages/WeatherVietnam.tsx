import { useEffect, useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import type { WeatherData, WeatherDay } from '../services/weatherService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Sun, CloudRain, Cloud, CloudSun, CloudLightning, CloudDrizzle, CloudSnow, CloudFog, CloudHail, CloudMoon, CloudSunRain } from 'lucide-react';

const CITIES = [
  'Hanoi',
  'Ho Chi Minh City',
  'Ha Long Bay',
];

function getWeatherIcon(condition: string) {
  const c = condition.toLowerCase();
  if (c.includes('thunder')) return <CloudLightning className="w-4 h-4 text-yellow-500" />;
  if (c.includes('rain') && c.includes('heavy')) return <CloudRain className="w-4 h-4 text-blue-700" fill="#60a5fa" />;
  if (c.includes('rain')) return <CloudDrizzle className="w-4 h-4 text-blue-400" />;
  if (c.includes('cloud') && c.includes('partly')) return <CloudSun className="w-4 h-4 text-yellow-400" />;
  if (c.includes('cloud')) return <Cloud className="w-4 h-4 text-gray-400" />;
  if (c.includes('sun')) return <Sun className="w-4 h-4 text-yellow-400" />;
  if (c.includes('fog')) return <CloudFog className="w-4 h-4 text-gray-300" />;
  if (c.includes('hail')) return <CloudHail className="w-4 h-4 text-blue-300" />;
  if (c.includes('snow')) return <CloudSnow className="w-4 h-4 text-blue-200" />;
  if (c.includes('moon')) return <CloudMoon className="w-4 h-4 text-blue-200" />;
  return <CloudSunRain className="w-4 h-4 text-blue-400" />;
}

interface WeatherVietnamProps {
  fixedHeight?: number | string;
}

export default function WeatherVietnam({ fixedHeight }: WeatherVietnamProps) {
  const [weather, setWeather] = useState<Record<string, WeatherData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      const results: Record<string, WeatherData> = {};
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
      <div className="flex justify-center items-center h-48 text-muted-foreground font-medium">
        Loading Vietnam weather data...
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-[1600px] mx-auto px-2"
      style={fixedHeight ? { height: typeof fixedHeight === 'number' ? `${fixedHeight}px` : fixedHeight, overflow: 'hidden' } : {}}
    >
      <h2 className="text-center text-2xl font-semibold tracking-tight mb-6">🇻🇳 Vietnam 10-Day Weather Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CITIES.map((city) => {
          const cityWeather = weather[city];
          if (!cityWeather) return null;
          return (
            <Card key={city} className="bg-card/80 border shadow-sm flex flex-col max-h-[500px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-base font-medium text-foreground">{city}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col min-h-0">
                <div className="overflow-auto flex-1 min-h-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20 text-xs text-muted-foreground font-semibold">Day</TableHead>
                        <TableHead className="text-xs text-muted-foreground font-semibold">Icon</TableHead>
                        <TableHead className="text-xs text-muted-foreground font-semibold">Condition</TableHead>
                        <TableHead className="text-center text-xs text-muted-foreground font-semibold">Min</TableHead>
                        <TableHead className="text-center text-xs text-muted-foreground font-semibold">Max</TableHead>
                        <TableHead className="text-center text-xs text-muted-foreground font-semibold">Rain</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cityWeather.daily.slice(0, 10).map((day: WeatherDay, i: number) => (
                        <TableRow key={i} className={i === 0 ? 'font-bold text-primary' : ''}>
                          <TableCell className="text-xs">{i === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}</TableCell>
                          <TableCell>{getWeatherIcon(day.condition)}</TableCell>
                          <TableCell className="capitalize text-xs opacity-90">{day.condition}</TableCell>
                          <TableCell className="text-center text-xs opacity-80">{day.tempMin}°</TableCell>
                          <TableCell className="text-center text-xs font-semibold">{day.tempMax}°</TableCell>
                          <TableCell className="text-center text-xs text-sky-500 dark:text-sky-400">{day.precipitation}mm</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-2 text-xs text-muted-foreground text-center opacity-80">
                  Simulated data (powered by Google API Key)
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="text-xs text-muted-foreground text-center rounded-md py-2 mt-6">
        ⚡ Powered by Google API Key: <span className="font-mono">AIzaSyD7WCApkLtI-PJA7169MnnItGXRRpZ2kRY</span>
        <br />
        <em className="text-xs">Real-time weather data with Google Geocoding API integration</em>
      </div>
    </div>
  );
}
