import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, MapPin, Cloud, ArrowRight } from 'lucide-react';

const widgets = [
  {
    icon: <Sun className="w-6 h-6 text-yellow-400" />,
    title: 'Vietnam 10-Day Weather Forecast',
    description: 'Hanoi, Ho Chi Minh City, Ha Long Bay',
    path: '/weather-vietnam',
    category: 'weather'
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-500" />,
    title: 'Hanoi Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hanoi',
    category: 'weather'
  },
  {
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    title: 'Ho Chi Minh City Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hochiminh',
    category: 'weather'
  },
  {
    icon: <MapPin className="w-6 h-6 text-emerald-500" />,
    title: 'Ha Long Bay Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/halongbay',
    category: 'weather'
  },
  // Add new widgets here!
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Build your Widget Library
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            A set of beautifully-designed, embeddable widgets and a code distribution platform. 
            Works with your favorite frameworks. Open Source. Open Code.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/weather-vietnam">
                Get Started
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Browse Widgets
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-24">
        <Tabs defaultValue="examples" className="w-full">
          <div className="flex items-center justify-between mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="weather">Weather</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </TabsList>
            <div className="text-sm text-muted-foreground">
              Theme: <span className="font-medium">Default</span>
            </div>
          </div>

          <TabsContent value="examples" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {widgets.map((widget, i) => (
                <Card key={i} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      {widget.icon}
                      <CardTitle className="text-lg">{widget.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {widget.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="ghost" size="sm" className="w-full justify-start p-0 h-auto">
                      <Link to={widget.path} className="flex items-center gap-2">
                        View Widget
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weather" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {widgets.filter(w => w.category === 'weather').map((widget, i) => (
                <Card key={i} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      {widget.icon}
                      <CardTitle className="text-lg">{widget.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {widget.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="ghost" size="sm" className="w-full justify-start p-0 h-auto">
                      <Link to={widget.path} className="flex items-center gap-2">
                        View Widget
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dashboard" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">Dashboard Widgets Coming Soon</h3>
              <p className="text-muted-foreground">
                Add your own dashboard widgets by creating new components and adding them here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
} 