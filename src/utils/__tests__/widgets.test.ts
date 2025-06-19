import { describe, it, expect } from 'vitest'
import { filterWidgetsByCategory, getWidgetById, getWidgetsByTag } from '../widgets'
import { WIDGETS, WIDGET_CATEGORIES } from '@/constants/widgets'

describe('Widget Utilities', () => {
  describe('filterWidgetsByCategory', () => {
    it('should filter widgets by category', () => {
      const mockWidgets = [
        {
          id: 'test1',
          title: 'Test 1',
          description: 'Test description',
          path: '/test1',
          category: WIDGET_CATEGORIES.UTILITIES,
          tags: ['test'],
        },
        {
          id: 'test2',
          title: 'Test 2',
          description: 'Test description',
          path: '/test2',
          category: WIDGET_CATEGORIES.PRODUCTIVITY,
          tags: ['test'],
        },
      ]

      const utilityWidgets = filterWidgetsByCategory(mockWidgets, WIDGET_CATEGORIES.UTILITIES)
      expect(utilityWidgets).toHaveLength(1)
      expect(utilityWidgets[0]?.id).toBe('test1')
    })

    it('should return empty array for non-existent category', () => {
      const mockWidgets = [
        {
          id: 'test1',
          title: 'Test 1',
          description: 'Test description',
          path: '/test1',
          category: WIDGET_CATEGORIES.UTILITIES,
          tags: ['test'],
        },
      ]

      const result = filterWidgetsByCategory(
        mockWidgets,
        'non-existent' as keyof typeof WIDGET_CATEGORIES
      )
      expect(result).toHaveLength(0)
    })

    it('should filter real widgets by Utilities category', () => {
      const utilityWidgets = filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.UTILITIES)
      expect(utilityWidgets.length).toBeGreaterThanOrEqual(0)
      utilityWidgets.forEach((widget) => {
        expect(widget.category).toBe(WIDGET_CATEGORIES.UTILITIES)
      })
    })

    it('should handle empty widgets array', () => {
      const result = filterWidgetsByCategory([], WIDGET_CATEGORIES.UTILITIES)
      expect(result).toHaveLength(0)
    })
  })

  describe('getWidgetById', () => {
    it('should return widget by id', () => {
      const mockWidgets = [
        {
          id: 'test1',
          title: 'Test 1',
          description: 'Test description',
          path: '/test1',
          category: WIDGET_CATEGORIES.UTILITIES,
          tags: ['test'],
        },
      ]

      const widget = getWidgetById(mockWidgets, 'test1')
      expect(widget).toBeDefined()
      expect(widget?.id).toBe('test1')
    })

    it('should return undefined for non-existent id', () => {
      const mockWidgets = [
        {
          id: 'test1',
          title: 'Test 1',
          description: 'Test description',
          path: '/test1',
          category: WIDGET_CATEGORIES.UTILITIES,
          tags: ['test'],
        },
      ]

      const widget = getWidgetById(mockWidgets, 'non-existent')
      expect(widget).toBeUndefined()
    })
  })

  describe('getWidgetsByTag', () => {
    it('should filter widgets by tag', () => {
      const mockWidgets = [
        {
          id: 'test1',
          title: 'Test 1',
          description: 'Test description',
          path: '/test1',
          category: WIDGET_CATEGORIES.UTILITIES,
          tags: ['tag1', 'common'],
        },
        {
          id: 'test2',
          title: 'Test 2',
          description: 'Test description',
          path: '/test2',
          category: WIDGET_CATEGORIES.PRODUCTIVITY,
          tags: ['tag2', 'common'],
        },
      ]

      const commonWidgets = getWidgetsByTag(mockWidgets, 'common')
      expect(commonWidgets).toHaveLength(2)
    })

    it('should return empty array for non-existent tag', () => {
      const mockWidgets = [
        {
          id: 'test1',
          title: 'Test 1',
          description: 'Test description',
          path: '/test1',
          category: WIDGET_CATEGORIES.UTILITIES,
          tags: ['test'],
        },
      ]

      const result = getWidgetsByTag(mockWidgets, 'non-existent')
      expect(result).toHaveLength(0)
    })

    it('should filter real widgets by example tag', () => {
      const exampleWidgets = getWidgetsByTag(WIDGETS, 'example')
      expect(exampleWidgets.length).toBeGreaterThanOrEqual(0)
      exampleWidgets.forEach((widget) => {
        expect(widget.tags).toContain('example')
      })
    })
  })

  describe('Widget Category Validation', () => {
    it('should ensure 100% of widgets have valid categories', () => {
      const validCategories = Object.values(WIDGET_CATEGORIES).filter((cat) => cat !== 'all')

      WIDGETS.forEach((widget) => {
        expect(validCategories).toContain(widget.category)
      })
    })

    it('should ensure all widgets are discoverable through category filters', () => {
      const allFilterableWidgets = WIDGETS.filter(
        (widget) => widget.category !== WIDGET_CATEGORIES.ALL
      )

      const discoveredWidgets = [
        ...filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.PRODUCTIVITY),
        ...filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.UTILITIES),
        ...filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.PERSONAL),
      ]

      expect(discoveredWidgets.length).toBe(allFilterableWidgets.length)
    })

    it('should ensure no widget is orphaned without a category', () => {
      WIDGETS.forEach((widget) => {
        expect(widget.category).toBeDefined()
        expect(widget.category).toBeTruthy()
        expect(typeof widget.category).toBe('string')
      })
    })

    it('should ensure widgets exist in the template', () => {
      // Template should have at least the example widget
      expect(WIDGETS.length).toBeGreaterThan(0)
    })
  })

  describe('Widget Implementation Validation', () => {
    it('should ensure all widgets have valid paths', () => {
      WIDGETS.forEach((widget) => {
        expect(widget.path).toBeDefined()
        expect(widget.path).toMatch(/^\//)
        expect(widget.path.length).toBeGreaterThan(1)
      })
    })

    it('should ensure all widgets have required properties', () => {
      WIDGETS.forEach((widget) => {
        expect(widget.id).toBeDefined()
        expect(widget.title).toBeDefined()
        expect(widget.description).toBeDefined()
        expect(widget.path).toBeDefined()
        expect(widget.category).toBeDefined()
        expect(Array.isArray(widget.tags)).toBe(true)

        expect(typeof widget.id).toBe('string')
        expect(typeof widget.title).toBe('string')
        expect(typeof widget.description).toBe('string')
        expect(typeof widget.path).toBe('string')
        expect(typeof widget.category).toBe('string')
      })
    })

    it('should ensure widget IDs are unique', () => {
      const ids = WIDGETS.map((widget) => widget.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('should ensure widget paths are unique', () => {
      const paths = WIDGETS.map((widget) => widget.path)
      const uniquePaths = new Set(paths)
      expect(uniquePaths.size).toBe(paths.length)
    })

    it('should ensure all widgets follow naming conventions', () => {
      WIDGETS.forEach((widget) => {
        expect(widget.id).toMatch(/^[a-z0-9-]+$/)
        expect(widget.title.length).toBeGreaterThan(0)
        expect(widget.description.length).toBeGreaterThan(10)
        expect(widget.tags?.length || 0).toBeGreaterThan(0)
      })
    })
  })
})
