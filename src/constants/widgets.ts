import type { Widget } from '@/types/widget';

export const WIDGET_CATEGORIES = {
  ALL: 'all',
  VIETNAM: 'vietnam',
} as const;

export const WIDGETS: Widget[] = [
  {
    id: 'vietnam-weather-forecast',
    title: 'Vietnam 10-Day Weather Forecast',
    description: 'Hanoi, Ho Chi Minh City, Ha Long Bay',
    path: '/weather-vietnam',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'forecast', 'vietnam'],
  },
  {
    id: 'hanoi-weather',
    title: 'Hanoi Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hanoi',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'hanoi', 'vietnam'],
  },
  {
    id: 'hochiminh-weather',
    title: 'Ho Chi Minh City Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/hochiminh',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'ho-chi-minh', 'vietnam'],
  },
  {
    id: 'halongbay-weather',
    title: 'Ha Long Bay Weather Widget',
    description: '10-day forecast',
    path: '/vietnam/halongbay',
    category: WIDGET_CATEGORIES.VIETNAM,
    tags: ['weather', 'ha-long-bay', 'vietnam'],
  },
]; 