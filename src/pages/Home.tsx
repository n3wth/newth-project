import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const widgets = [
  {
    title: 'Vietnam 10-Day Weather Forecast',
    description: 'Hanoi, Ho Chi Minh City, Ha Long Bay',
    path: '/weather-vietnam',
  },
  {
    title: 'Hanoi Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hanoi',
  },
  {
    title: 'Ho Chi Minh City Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hochiminh',
  },
  {
    title: 'Ha Long Bay Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/halongbay',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-4 sm:text-6xl">
          Build your Widget Library
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A set of beautifully-designed, embeddable widgets and a code distribution platform. 
          Works with your favorite frameworks. Open Source. Open Code.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <Link to="/weather-vietnam">Get Started</Link>
          </Button>
          <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50">
            Browse Widgets
          </Button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="examples" className="w-full">
          <div className="flex items-center justify-between mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="examples" className="data-[state=active]:bg-white">Examples</TabsTrigger>
              <TabsTrigger value="weather" className="data-[state=active]:bg-white">Weather</TabsTrigger>
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-white">Dashboard</TabsTrigger>
            </TabsList>
            <div className="text-sm text-gray-500">
              Theme: <span className="text-black">Default</span>
            </div>
          </div>

          <TabsContent value="examples">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {widgets.map((widget, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h3 className="font-semibold text-black mb-2">{widget.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{widget.description}</p>
                  <Link 
                    to={widget.path} 
                    className="text-black hover:underline text-sm font-medium"
                  >
                    View Widget →
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weather">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {widgets.map((widget, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h3 className="font-semibold text-black mb-2">{widget.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{widget.description}</p>
                  <Link 
                    to={widget.path} 
                    className="text-black hover:underline text-sm font-medium"
                  >
                    View Widget →
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dashboard">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-black mb-2">Dashboard Widgets Coming Soon</h3>
              <p className="text-gray-600">
                Add your own dashboard widgets by creating new components and adding them here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 