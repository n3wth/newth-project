import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sun, Cloud, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Weather Widgets</h1>
      <div className="flex flex-col gap-6 w-full max-w-lg">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-1">
            <Sun className="w-6 h-6 text-yellow-400" />
            <div>
              <CardTitle className="text-lg">Vietnam 10-Day Weather Forecast</CardTitle>
              <CardDescription>Hanoi, Ho Chi Minh City, Ha Long Bay</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-1">
            <Link to="/weather-vietnam" className="text-primary underline font-medium">View Widget</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-1">
            <MapPin className="w-6 h-6 text-blue-500" />
            <div>
              <CardTitle className="text-lg">Hanoi Weather Widget</CardTitle>
              <CardDescription>10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-1">
            <Link to="/vietnam/hanoi" className="text-primary underline font-medium">View Widget</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-1">
            <Cloud className="w-6 h-6 text-sky-400" />
            <div>
              <CardTitle className="text-lg">Ho Chi Minh City Weather Widget</CardTitle>
              <CardDescription>10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-1">
            <Link to="/vietnam/hochiminh" className="text-primary underline font-medium">View Widget</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-1">
            <MapPin className="w-6 h-6 text-emerald-500" />
            <div>
              <CardTitle className="text-lg">Ha Long Bay Weather Widget</CardTitle>
              <CardDescription>10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-1">
            <Link to="/vietnam/halongbay" className="text-primary underline font-medium">View Widget</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 