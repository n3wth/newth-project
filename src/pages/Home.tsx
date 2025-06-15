import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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
      <h1 className="text-3xl font-bold mb-4 text-center">Widget Hub</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-lg">Discover, preview, and embed widgets for any project. Add your own widgets by creating a new page and adding it here!</p>
      <div className="flex flex-col gap-6 w-full max-w-lg">
        {widgets.map((widget, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center gap-3 pb-1">
              {widget.icon}
              <div>
                <CardTitle className="text-lg">{widget.title}</CardTitle>
                <CardDescription>{widget.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col gap-1">
              <Link to={widget.path} className="text-primary underline font-medium">View Widget</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 