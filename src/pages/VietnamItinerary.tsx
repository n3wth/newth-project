import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Clock, DollarSign } from 'lucide-react';

interface ItineraryLocation {
  name: string;
  dates: string;
  nights: number;
  description: string;
  type: 'city' | 'cruise' | 'retreat';
  cost: number;
}

const ITINERARY_LOCATIONS: ItineraryLocation[] = [
  {
    name: 'Ho Chi Minh City',
    dates: 'Jun 28-30 & Jul 5-6',
    nights: 3,
    description: 'Arrival city, Can Gio Mangrove, Cu Chi Tunnels, final departure',
    type: 'city',
    cost: 450
  },
  {
    name: 'Hanoi',
    dates: 'Jun 30 - Jul 2',
    nights: 2,
    description: 'Old Quarter, Hoàn Kiếm Lake, Water Puppet Show',
    type: 'city',
    cost: 320
  },
  {
    name: 'Ha Long Bay',
    dates: 'Jul 2-4',
    nights: 2,
    description: 'Private cruise, kayaking, cave visits, floating village',
    type: 'cruise',
    cost: 680
  },
  {
    name: 'Ninh Binh (TOKI Retreat)',
    dates: 'Jul 4-5',
    nights: 1,
    description: 'Vân Long wetlands, sunrise boat safari, spa retreat',
    type: 'retreat',
    cost: 280
  }
];

function LocationCard({ location }: { location: ItineraryLocation }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'city': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'cruise': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'retreat': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'city': return '🏙️';
      case 'cruise': return '🛥️';
      case 'retreat': return '🌿';
      default: return '📍';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            {location.name}
          </CardTitle>
          <Badge className={getTypeColor(location.type)}>
            {getTypeIcon(location.type)} {location.type}
          </Badge>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Dates</p>
              <p className="text-sm font-medium">{location.dates}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="text-sm font-medium">
                {location.nights} night{location.nights !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
            <div>
              <p className="text-xs text-muted-foreground">Cost</p>
              <p className="text-sm font-bold text-green-600 dark:text-green-400">
                ${location.cost}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {location.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function VietnamItinerary() {
  const totalCost = ITINERARY_LOCATIONS.reduce((sum, location) => sum + location.cost, 0);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-green-200 dark:border-green-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-green-800 dark:text-green-200">
                    Vietnam Trip Itinerary
                  </h2>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    8 days across 4 destinations
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="text-2xl font-bold text-green-700 dark:text-green-300">
                      ${totalCost}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Total estimated cost
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITINERARY_LOCATIONS.map((location) => (
            <LocationCard key={location.name} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
} 