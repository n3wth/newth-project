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
    <section className="flex flex-col items-center justify-center w-full min-h-[80vh]">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-center mb-4">Widget Hub</h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-xl">Discover, preview, and embed widgets for any project. Add your own widgets by creating a new page and adding it here!</p>
        <div className="flex flex-col gap-8 w-full">
          {widgets.map((widget, i) => (
            <Card key={i} className="p-6 border border-border/60 shadow-sm rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-4 pb-1">
                {widget.icon}
                <div>
                  <CardTitle className="text-xl font-semibold leading-tight mb-1">{widget.title}</CardTitle>
                  <CardDescription className="text-base leading-snug">{widget.description}</CardDescription>
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
    </section>
  );
} 