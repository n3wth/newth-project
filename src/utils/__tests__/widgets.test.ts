import { describe, it, expect } from 'vitest';
import { filterWidgetsByCategory, getWidgetById, getWidgetsByTag } from '../widgets';
import type { Widget } from '@/types/widget';

const mockWidgets: Widget[] = [
  {
    id: 'widget-1',
    title: 'Test Widget 1',
    description: 'Description 1',
    path: '/widget-1',
    category: 'vietnam',
    tags: ['weather', 'test'],
  },
  {
    id: 'widget-2',
    title: 'Test Widget 2',
    description: 'Description 2',
    path: '/widget-2',
    category: 'dashboard',
    tags: ['analytics', 'test'],
  },
  {
    id: 'widget-3',
    title: 'Test Widget 3',
    description: 'Description 3',
    path: '/widget-3',
    category: 'vietnam',
    tags: ['weather', 'forecast'],
  },
];

describe('Widget Utilities', () => {
  describe('filterWidgetsByCategory', () => {
    it('should return all widgets when category is "all"', () => {
      const result = filterWidgetsByCategory(mockWidgets, 'all');
      expect(result).toEqual(mockWidgets);
      expect(result).toHaveLength(3);
    });

    it('should filter widgets by specific category', () => {
      const result = filterWidgetsByCategory(mockWidgets, 'vietnam');
      expect(result).toHaveLength(2);
      expect(result.every(widget => widget.category === 'vietnam')).toBe(true);
    });

    it('should return empty array for non-existent category', () => {
      const result = filterWidgetsByCategory(mockWidgets, 'non-existent');
      expect(result).toEqual([]);
    });
  });

  describe('getWidgetById', () => {
    it('should return widget when ID exists', () => {
      const result = getWidgetById(mockWidgets, 'widget-2');
      expect(result).toEqual(mockWidgets[1]);
    });

    it('should return undefined when ID does not exist', () => {
      const result = getWidgetById(mockWidgets, 'non-existent');
      expect(result).toBeUndefined();
    });
  });

  describe('getWidgetsByTag', () => {
    it('should return widgets with specific tag', () => {
      const result = getWidgetsByTag(mockWidgets, 'weather');
      expect(result).toHaveLength(2);
      expect(result.every(widget => widget.tags?.includes('weather'))).toBe(true);
    });

    it('should return empty array for non-existent tag', () => {
      const result = getWidgetsByTag(mockWidgets, 'non-existent');
      expect(result).toEqual([]);
    });

    it('should handle widgets without tags', () => {
      const widgetsWithoutTags: Widget[] = [
        {
          id: 'widget-no-tags',
          title: 'No Tags Widget',
          description: 'Description',
          path: '/no-tags',
          category: 'test',
        },
      ];
      const result = getWidgetsByTag(widgetsWithoutTags, 'any-tag');
      expect(result).toEqual([]);
    });
  });
}); 