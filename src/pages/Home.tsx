import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sun, Cloud, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/60 via-sky-100/60 to-emerald-50/60 dark:from-slate-900/80 dark:via-slate-800/80 dark:to-slate-900/80 py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400">Weather Widgets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Sun className="w-8 h-8 text-yellow-400" />
            <div>
              <CardTitle>Vietnam 10-Day Weather Forecast</CardTitle>
              <CardDescription>Forecast for Hanoi, Ho Chi Minh City, and Ha Long Bay</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-2 flex flex-col gap-2">
            <p className="text-muted-foreground">A beautiful 10-day weather forecast widget for three major Vietnamese cities.</p>
            <Link to="/weather-vietnam" className="text-primary underline font-medium">/weather-vietnam</Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <MapPin className="w-8 h-8 text-blue-500" />
            <div>
              <CardTitle>Hanoi Weather Widget</CardTitle>
              <CardDescription>Embeddable widget for Hanoi's 10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-2 flex flex-col gap-2">
            <p className="text-muted-foreground">Perfect for dashboards, Notion, and more.</p>
            <Link to="/vietnam/hanoi" className="text-primary underline font-medium">/vietnam/hanoi</Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Cloud className="w-8 h-8 text-sky-400" />
            <div>
              <CardTitle>Ho Chi Minh City Weather Widget</CardTitle>
              <CardDescription>Embeddable widget for Ho Chi Minh City's 10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-2 flex flex-col gap-2">
            <p className="text-muted-foreground">Perfect for dashboards, Notion, and more.</p>
            <Link to="/vietnam/hochiminh" className="text-primary underline font-medium">/vietnam/hochiminh</Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <MapPin className="w-8 h-8 text-emerald-500" />
            <div>
              <CardTitle>Ha Long Bay Weather Widget</CardTitle>
              <CardDescription>Embeddable widget for Ha Long Bay's 10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-2 flex flex-col gap-2">
            <p className="text-muted-foreground">Perfect for dashboards, Notion, and more.</p>
            <Link to="/vietnam/halongbay" className="text-primary underline font-medium">/vietnam/halongbay</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 