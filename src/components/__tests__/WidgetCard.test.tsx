import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { WidgetCard } from '../WidgetCard'
import type { Widget } from '@/types/widget'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>)
}

describe('WidgetCard', () => {
  const mockWidget: Widget = {
    id: 'test-widget',
    title: 'Test Widget',
    description: 'This is a test widget description',
    path: '/widgets/test',
    category: 'utilities',
    tags: ['test', 'example'],
  }

  it('should render widget information correctly', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />)

    expect(screen.getByText('Test Widget')).toBeInTheDocument()
    expect(screen.getByText('This is a test widget description')).toBeInTheDocument()
  })

  it('should display widget tags', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />)

    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('example')).toBeInTheDocument()
  })

  it('should have view widget button', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />)

    const viewButton = screen.getByText('View Widget')
    expect(viewButton).toBeInTheDocument()
  })

  it('should render widget card structure', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />)

    expect(screen.getByText('Test Widget')).toBeInTheDocument()
    expect(screen.getByText('View Widget')).toBeInTheDocument()
  })

  it('should handle widgets with many tags', () => {
    const widgetWithManyTags: Widget = {
      ...mockWidget,
      tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
    }

    renderWithRouter(<WidgetCard widget={widgetWithManyTags} />)

    // Should show first 3 tags
    expect(screen.getByText('tag1')).toBeInTheDocument()
    expect(screen.getByText('tag2')).toBeInTheDocument()
    expect(screen.getByText('tag3')).toBeInTheDocument()

    // Should show +2 indicator for remaining tags
    expect(screen.getByText('+2')).toBeInTheDocument()
  })
})
