import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import Home from '../Home'

// Helper function to render with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>)
}

describe('Home Page UX Tests', () => {
  describe('Page Layout UX', () => {
    it('should render the main header', () => {
      renderWithRouter(<Home />)

      const header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()

      const logo = screen.getByTestId('logo')
      expect(logo).toBeInTheDocument()
    })

    it('should display the hero section', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('Widget Platform Template')).toBeInTheDocument()
      expect(screen.getByText(/modern react \+ typescript template/i)).toBeInTheDocument()
    })

    it('should show technology badges', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('TypeScript')).toBeInTheDocument()
      expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
      expect(screen.getByText('shadcn/ui')).toBeInTheDocument()
    })

    it('should display the widget tabs interface', () => {
      renderWithRouter(<Home />)

      const tabsList = screen.getByTestId('tabs-list')
      expect(tabsList).toBeInTheDocument()

      const allTab = screen.getByTestId('tab-all')
      expect(allTab).toBeInTheDocument()
    })

    it('should show footer', () => {
      renderWithRouter(<Home />)

      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })
  })

  describe('Widget Display UX', () => {
    it('should show widget count badges in tabs', () => {
      renderWithRouter(<Home />)

      // Check that tabs show widget counts
      const allTab = screen.getByTestId('tab-all')
      expect(allTab).toHaveTextContent('1') // We have 1 example widget
    })

    it('should display widgets in grid format', () => {
      renderWithRouter(<Home />)

      // Should show our example widget
      expect(screen.getByText('Example Widget')).toBeInTheDocument()
      expect(screen.getByText(/sample widget to demonstrate/i)).toBeInTheDocument()
    })

    it('should have clickable widget buttons', () => {
      renderWithRouter(<Home />)

      const viewButtons = screen.getAllByText('View Widget')
      expect(viewButtons.length).toBeGreaterThan(0)
    })
  })

  describe('Tab Navigation UX', () => {
    it('should switch between tabs correctly', async () => {
      const user = userEvent.setup()
      renderWithRouter(<Home />)

      const allTab = screen.getByTestId('tab-all')
      const utilitiesTab = screen.getByTestId('tab-utilities')

      // Default tab should be "All"
      expect(screen.getByTestId('tab-content-all')).toBeInTheDocument()

      // Click on utilities tab
      await user.click(utilitiesTab)
      expect(screen.getByTestId('tab-content-utilities')).toBeInTheDocument()

      // Click back to all tab
      await user.click(allTab)
      expect(screen.getByTestId('tab-content-all')).toBeInTheDocument()
    })

    it('should show appropriate content for each tab', async () => {
      const user = userEvent.setup()
      renderWithRouter(<Home />)

      // All tab content
      expect(screen.getByText('All Widgets')).toBeInTheDocument()
      expect(screen.getByText(/browse all available widgets/i)).toBeInTheDocument()

      // Switch to utilities tab
      const utilitiesTab = screen.getByTestId('tab-utilities')
      await user.click(utilitiesTab)
      expect(screen.getByText('Utility Widgets')).toBeInTheDocument()
    })
  })

  describe('Accessibility UX', () => {
    it('should have proper heading hierarchy', () => {
      renderWithRouter(<Home />)

      const mainHeading = screen.getByRole('heading', { level: 1 })
      expect(mainHeading).toHaveTextContent('Widget Platform')

      // Check for section headings
      expect(screen.getByText('All Widgets')).toBeInTheDocument()
    })

    it('should have accessible tab navigation', () => {
      renderWithRouter(<Home />)

      const tabs = screen.getAllByRole('tab')
      expect(tabs.length).toBe(4) // All, Productivity, Utilities, Personal
    })

    it('should have accessible buttons', () => {
      renderWithRouter(<Home />)

      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(0)

      // Check specific widget buttons
      const viewButtons = screen.getAllByText('View Widget')
      expect(viewButtons.length).toBeGreaterThan(0)
    })
  })

  describe('Keyboard Navigation UX', () => {
    it('should support keyboard navigation for tabs', async () => {
      const user = userEvent.setup()
      renderWithRouter(<Home />)

      const allTab = screen.getByTestId('tab-all')
      const utilitiesTab = screen.getByTestId('tab-utilities')

      // Focus on first tab
      allTab.focus()
      expect(allTab).toHaveFocus()

      // Navigate with arrow keys
      await user.keyboard('{ArrowRight}')

      // Should focus on next tab
      expect(utilitiesTab).toHaveFocus()
    })

    it('should activate tab with Enter key', async () => {
      const user = userEvent.setup()
      renderWithRouter(<Home />)

      const utilitiesTab = screen.getByTestId('tab-utilities')
      utilitiesTab.focus()

      await user.keyboard('{Enter}')

      // Should show utilities content
      expect(screen.getByTestId('tab-content-utilities')).toBeInTheDocument()
    })
  })

  describe('Performance UX', () => {
    it('should not cause layout shifts during tab switching', async () => {
      const user = userEvent.setup()
      renderWithRouter(<Home />)

      const container = screen.getByTestId('widget-tabs')
      const initialHeight = container.getBoundingClientRect().height

      // Switch tabs
      const utilitiesTab = screen.getByTestId('tab-utilities')
      await user.click(utilitiesTab)

      // Height should remain stable (allowing for small differences)
      const newHeight = container.getBoundingClientRect().height
      expect(Math.abs(newHeight - initialHeight)).toBeLessThan(50)
    })

    it('should render widgets efficiently', () => {
      renderWithRouter(<Home />)

      // Should not render all widgets at once in different tabs
      const allTabContent = screen.getByTestId('tab-content-all')
      expect(allTabContent).toBeInTheDocument()

      // Other tab contents should exist but not be visible
      const utilitiesTabContent = screen.getByTestId('tab-content-utilities')
      expect(utilitiesTabContent).not.toBeVisible()
    })
  })

  describe('Content UX', () => {
    it('should display template-appropriate content', () => {
      renderWithRouter(<Home />)

      // Check for template-specific messaging
      expect(screen.getByText('Template')).toBeInTheDocument()
      expect(screen.getByText(/embeddable widget platforms/i)).toBeInTheDocument()
    })

    it('should show example widget', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('Example Widget')).toBeInTheDocument()
      expect(screen.getByText('example')).toBeInTheDocument() // tag
    })
  })
})
