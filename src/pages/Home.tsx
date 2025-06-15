import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sun, Cloud, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-200/60 via-sky-100/80 to-emerald-100/60 dark:from-slate-900/90 dark:via-slate-800/90 dark:to-slate-900/90 py-24 px-4">
      <h1 className="text-5xl font-extrabold mb-3 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-500 to-emerald-400 drop-shadow-lg">Weather Widgets</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-xl">Explore and embed beautiful, responsive weather widgets for Vietnam. Click a widget to preview or copy its embed link.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 dark:border-slate-700 rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Sun className="w-10 h-10 text-yellow-400 drop-shadow" />
            <div>
              <CardTitle className="text-2xl">Vietnam 10-Day Weather Forecast</CardTitle>
              <CardDescription>Forecast for Hanoi, Ho Chi Minh City, and Ha Long Bay</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-3">
            <p className="text-muted-foreground">A beautiful 10-day weather forecast widget for three major Vietnamese cities.</p>
            <Link to="/weather-vietnam" className="inline-block px-4 py-2 mt-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">View Widget</Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 dark:border-slate-700 rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <MapPin className="w-10 h-10 text-blue-500 drop-shadow" />
            <div>
              <CardTitle className="text-2xl">Hanoi Weather Widget</CardTitle>
              <CardDescription>Embeddable widget for Hanoi's 10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-3">
            <p className="text-muted-foreground">Perfect for dashboards, Notion, and more.</p>
            <Link to="/vietnam/hanoi" className="inline-block px-4 py-2 mt-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">View Widget</Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 dark:border-slate-700 rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Cloud className="w-10 h-10 text-sky-400 drop-shadow" />
            <div>
              <CardTitle className="text-2xl">Ho Chi Minh City Weather Widget</CardTitle>
              <CardDescription>Embeddable widget for Ho Chi Minh City's 10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-3">
            <p className="text-muted-foreground">Perfect for dashboards, Notion, and more.</p>
            <Link to="/vietnam/hochiminh" className="inline-block px-4 py-2 mt-2 rounded-lg bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition">View Widget</Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 dark:border-slate-700 rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <MapPin className="w-10 h-10 text-emerald-500 drop-shadow" />
            <div>
              <CardTitle className="text-2xl">Ha Long Bay Weather Widget</CardTitle>
              <CardDescription>Embeddable widget for Ha Long Bay's 10-day forecast</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-3">
            <p className="text-muted-foreground">Perfect for dashboards, Notion, and more.</p>
            <Link to="/vietnam/halongbay" className="inline-block px-4 py-2 mt-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition">View Widget</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 