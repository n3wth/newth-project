import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Clock } from 'lucide-react';

interface ItineraryLocation {
  name: string;
  dates: string;
  nights: number;
  description: string;
  type: 'city' | 'cruise' | 'retreat';
}

const ITINERARY_LOCATIONS: ItineraryLocation[] = [
  {
    name: 'Ho Chi Minh City',
    dates: 'Jun 28-30 & Jul 5-6',
    nights: 3,
    description: 'Arrival city, Can Gio Mangrove, Cu Chi Tunnels, final departure',
    type: 'city'
  },
  {
    name: 'Hanoi',
    dates: 'Jun 30 - Jul 2',
    nights: 2,
    description: 'Old Quarter, Hoàn Kiếm Lake, Water Puppet Show',
    type: 'city'
  },
  {
    name: 'Ha Long Bay',
    dates: 'Jul 2-4',
    nights: 2,
    description: 'Private cruise, kayaking, cave visits, floating village',
    type: 'cruise'
  },
  {
    name: 'Ninh Binh (TOKI Retreat)',
    dates: 'Jul 4-5',
    nights: 1,
    description: 'Vân Long wetlands, sunrise boat safari, spa retreat',
    type: 'retreat'
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
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            {location.name}
          </CardTitle>
          <Badge className={getTypeColor(location.type)}>
            {getTypeIcon(location.type)} {location.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="font-medium">{location.dates}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">
              {location.nights} night{location.nights !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
        
        <Separator />
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {location.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function VietnamItinerary() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITINERARY_LOCATIONS.map((location) => (
            <LocationCard key={location.name} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
} 