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

export default function VietnamMap() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Embedded Google Map */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center">Trip Route & Locations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1z4tx3cKm2w41sj6dW18jRRltKZl_WjI&ehbc=2E312F&noprof=1"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vietnam Trip Itinerary Map"
              />
            </div>
          </CardContent>
        </Card>

        {/* Location Details */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Itinerary Locations</h2>
            <p className="text-sm text-muted-foreground">June 26 – July 6, 2025</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ITINERARY_LOCATIONS.map((location) => (
              <LocationCard key={location.name} location={location} />
            ))}
          </div>
        </div>

        {/* Trip Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Trip Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Duration</span>
                </div>
                <p className="text-muted-foreground">11 days total</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Locations</span>
                </div>
                <p className="text-muted-foreground">4 destinations</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Accommodation</span>
                </div>
                <p className="text-muted-foreground">8 nights total</p>
              </div>
            </div>
            
            <Separator />
            
            <p className="text-xs text-muted-foreground">
              From bustling cities to serene cruises and peaceful retreats
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 