import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { WidgetGrid } from '../WidgetGrid'
import type { Widget } from '@/types/widget'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>)
}

describe('WidgetGrid', () => {
  const mockWidgets: Widget[] = [
    {
      id: 'widget-1',
      title: 'Widget 1',
      description: 'Description 1',
      path: '/widget-1',
      category: 'utilities',
      tags: [],
    },
    {
      id: 'widget-2',
      title: 'Widget 2',
      description: 'Description 2',
      path: '/widget-2',
      category: 'productivity',
      tags: [],
    },
  ]

  it('should render all widgets when provided', () => {
    renderWithRouter(<WidgetGrid widgets={mockWidgets} />)

    expect(screen.getByText('Widget 1')).toBeInTheDocument()
    expect(screen.getByText('Widget 2')).toBeInTheDocument()
  })

  it('should render empty state when no widgets provided', () => {
    renderWithRouter(<WidgetGrid widgets={[]} />)

    const grid = screen.getByTestId('widget-grid')
    expect(grid).toBeInTheDocument()
    expect(grid.children).toHaveLength(0)
  })

  it('should have correct grid layout classes', () => {
    renderWithRouter(<WidgetGrid widgets={mockWidgets} />)

    const grid = screen.getByTestId('widget-grid')
    expect(grid).toHaveClass('grid')
    expect(grid).toHaveClass('grid-cols-1')
    expect(grid).toHaveClass('md:grid-cols-2')
    expect(grid).toHaveClass('lg:grid-cols-3')
  })

  it('should render widget cards with correct content', () => {
    renderWithRouter(<WidgetGrid widgets={mockWidgets} />)

    // Check that both widgets are rendered with their content
    expect(screen.getByText('Widget 1')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Widget 2')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()

    // Check that View Widget buttons are present
    const viewButtons = screen.getAllByText('View Widget')
    expect(viewButtons).toHaveLength(2)
  })

  it('should render correct number of widget cards', () => {
    const singleWidget = [mockWidgets[0]!] // Non-null assertion since we know the array has elements
    renderWithRouter(<WidgetGrid widgets={singleWidget} />)

    expect(screen.getByText('Widget 1')).toBeInTheDocument()
    expect(screen.queryByText('Widget 2')).not.toBeInTheDocument()
  })
})
