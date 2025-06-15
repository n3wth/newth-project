import type { Widget } from '@/types/widget';

export const WIDGET_CATEGORIES = {
  ALL: 'all',
  VIETNAM: 'vietnam',
} as const;

export const WIDGETS: Widget[] = [
  {
    id: 'vietnam-weather-overview',
    title: 'Vietnam Trip Weather Overview',
    description: 'Complete weather dashboard for my Vietnam trip planning - Hanoi, Ho Chi Minh City, and Ha Long Bay forecasts in one view',
    path: '/weather-vietnam',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'vietnam', 'travel', 'planning']
  },
  {
    id: 'vietnam-flights',
    title: 'Vietnam Trip Flights',
    description: 'Flight details for my Vietnam trip - outbound and return flights with Vietnam Airlines',
    path: '/vietnam/flights',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['flights', 'vietnam', 'travel', 'airlines']
  },
  {
    id: 'vietnam-map',
    title: 'Vietnam Trip Map',
    description: 'Interactive map showing all the locations from my Vietnam trip itinerary',
    path: '/vietnam/map',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['map', 'vietnam', 'locations', 'interactive']
  },
  {
    id: 'vietnam-itinerary',
    title: 'Vietnam Trip Itinerary',
    description: 'Detailed itinerary cards for each location - Ho Chi Minh City, Hanoi, Ha Long Bay, and Ninh Binh',
    path: '/vietnam/itinerary',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['itinerary', 'vietnam', 'locations', 'planning']
  },
  {
    id: 'hanoi-weather',
    title: 'Hanoi Weather Widget',
    description: 'Dedicated weather forecast for Hanoi - perfect for planning my northern Vietnam itinerary',
    path: '/vietnam/hanoi',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'hanoi', 'vietnam', 'forecast']
  },
  {
    id: 'hochiminh-weather',
    title: 'Ho Chi Minh City Weather',
    description: 'Weather tracking for Ho Chi Minh City (Saigon) - essential for my southern Vietnam adventures',
    path: '/vietnam/hochiminh',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'saigon', 'vietnam', 'forecast']
  },
  {
    id: 'halongbay-weather',
    title: 'Ha Long Bay Weather',
    description: 'Weather conditions for Ha Long Bay - crucial for planning the perfect boat trip and photography',
    path: '/vietnam/halongbay',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'halongbay', 'vietnam', 'cruise']
  }
]; 