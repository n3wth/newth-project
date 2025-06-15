import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lego } from '@phosphor-icons/react';

const widgets = [
  {
    title: 'Vietnam 10-Day Weather Forecast',
    description: 'Hanoi, Ho Chi Minh City, Ha Long Bay',
    path: '/weather-vietnam',
    category: 'vietnam',
  },
  {
    title: 'Hanoi Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hanoi',
    category: 'vietnam',
  },
  {
    title: 'Ho Chi Minh City Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hochiminh',
    category: 'vietnam',
  },
  {
    title: 'Ha Long Bay Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/halongbay',
    category: 'vietnam',
  },
];

const vietnamWidgets = widgets.filter(w => w.category === 'vietnam');

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Lego size={32} weight="fill" />
        <h1 className="text-2xl font-semibold text-black">Newth.ai Widgets</h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="vietnam">Vietnam</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
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

          <TabsContent value="vietnam">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vietnamWidgets.map((widget, i) => (
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
        </Tabs>
      </div>
    </div>
  );
} 