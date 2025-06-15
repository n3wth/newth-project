import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, MapPin, Cloud } from 'lucide-react';

const widgets = [
  {
    icon: <Sun className="w-6 h-6 text-yellow-400" />,
    title: 'Vietnam 10-Day Weather Forecast',
    description: 'Hanoi, Ho Chi Minh City, Ha Long Bay',
    path: '/weather-vietnam',
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-500" />,
    title: 'Hanoi Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hanoi',
  },
  {
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    title: 'Ho Chi Minh City Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hochiminh',
  },
  {
    icon: <MapPin className="w-6 h-6 text-emerald-500" />,
    title: 'Ha Long Bay Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/halongbay',
  },
  // Add new widgets here!
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-center tracking-tight">Widget Hub</h1>
      <p className="text-muted-foreground mb-10 text-center max-w-lg text-lg">Discover, preview, and embed widgets for any project. Add your own widgets by creating a new page and adding it here!</p>
      <div className="flex flex-col gap-8 w-full max-w-lg">
        {widgets.map((widget, i) => (
          <Card key={i} className="p-0">
            <CardHeader className="flex flex-row items-center gap-4 pb-1">
              {widget.icon}
              <div>
                <CardTitle className="text-xl font-semibold">{widget.title}</CardTitle>
                <CardDescription className="text-base">{widget.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col gap-2">
              <Button asChild variant="default" className="w-fit">
                <Link to={widget.path}>View Widget</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 