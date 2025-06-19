import type { Widget } from '@/types/widget'

export const WIDGET_CATEGORIES = {
  ALL: 'all',
  PRODUCTIVITY: 'productivity',
  UTILITIES: 'utilities',
  PERSONAL: 'personal',
} as const

export const WIDGETS: Widget[] = [
  // Example Widget - Replace with your own widgets
  {
    id: 'example-widget',
    title: 'Example Widget',
    description: 'A sample widget to demonstrate the platform structure and capabilities',
    path: '/widgets/example',
    category: WIDGET_CATEGORIES.UTILITIES,
    tags: ['example', 'demo', 'template'],
  },

  // Add your widgets here following this structure:
  // {
  //   id: 'unique-widget-id',
  //   title: 'Widget Title',
  //   description: 'Brief description of what this widget does',
  //   path: '/widgets/your-widget-path',
  //   category: WIDGET_CATEGORIES.CATEGORY_NAME,
  //   tags: ['tag1', 'tag2', 'tag3'],
  // },
]
