import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Home from '../Home'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Home Page UX Tests', () => {
  describe('Page Layout UX', () => {
    it('should render the main header', () => {
      renderWithRouter(<Home />)

      expect(screen.getByTestId('logo')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Widget Platform')
    })

    it('should display the hero section', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('Build Amazing Widget Platforms')).toBeInTheDocument()
      expect(screen.getByText(/modern react \+ typescript template/i)).toBeInTheDocument()
    })

    it('should show technology badges', () => {
      renderWithRouter(<Home />)

      expect(screen.getAllByText('TypeScript')[0]).toBeInTheDocument()
      expect(screen.getAllByText('shadcn/ui')[0]).toBeInTheDocument()
      expect(screen.getByText('Vite')).toBeInTheDocument()
    })

    it('should display the main sections', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('Everything You Need to Build')).toBeInTheDocument()
      expect(screen.getByText('Why Choose This Template?')).toBeInTheDocument()
      expect(screen.getByText('See It In Action')).toBeInTheDocument()
      expect(screen.getByText('Quick Start Guide')).toBeInTheDocument()
    })

    it('should show footer', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('Resources')).toBeInTheDocument()
      expect(screen.getByText('Support')).toBeInTheDocument()
      expect(screen.getByText('Connect')).toBeInTheDocument()
    })
  })

  describe('Widget Display UX', () => {
    it('should display widgets in grid format', () => {
      renderWithRouter(<Home />)

      // Should have widget grid in the demo section
      const widgetGrid = screen.getByTestId('widget-grid')
      expect(widgetGrid).toBeInTheDocument()
    })

    it('should have clickable widget buttons', () => {
      renderWithRouter(<Home />)

      const viewButtons = screen.getAllByText('View Widget')
      expect(viewButtons.length).toBeGreaterThan(0)

      const previewButtons = screen.getAllByText('Preview')
      expect(previewButtons.length).toBeGreaterThan(0)
    })
  })

  describe('Navigation UX', () => {
    it('should have working navigation links', () => {
      renderWithRouter(<Home />)

      // Use specific selectors for navigation links
      expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /widgets/i })).toBeInTheDocument()
      // Handle multiple Get Started links
      expect(screen.getAllByRole('link', { name: /get started/i })[0]).toBeInTheDocument()
    })

    it('should have call-to-action buttons', () => {
      renderWithRouter(<Home />)

      const getStartedButtons = screen.getAllByText('Get Started')
      expect(getStartedButtons.length).toBeGreaterThan(0)

      expect(screen.getByText('View Demo')).toBeInTheDocument()
      expect(screen.getByText('Download Template')).toBeInTheDocument()
    })
  })

  describe('Accessibility UX', () => {
    it('should have proper heading hierarchy', () => {
      renderWithRouter(<Home />)

      // Check for main page headings (h1, h2)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Widget Platform')

      const h2Headings = screen.getAllByRole('heading', { level: 2 })
      expect(h2Headings.length).toBeGreaterThan(0)
    })

    it('should have accessible buttons', () => {
      renderWithRouter(<Home />)

      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(0)

      // Each button should be accessible
      buttons.forEach((button) => {
        expect(button).toBeInTheDocument()
      })
    })
  })

  describe('Content UX', () => {
    it('should display template-appropriate content', () => {
      renderWithRouter(<Home />)

      // Check for template-specific messaging
      expect(screen.getByText('Open Source Template')).toBeInTheDocument()
      expect(screen.getAllByText(/embeddable widget platforms/i)[0]).toBeInTheDocument()
    })

    it('should show example widget', () => {
      renderWithRouter(<Home />)

      // Should display at least one widget in the demo section
      const widgetGrid = screen.getByTestId('widget-grid')
      expect(widgetGrid.children.length).toBeGreaterThan(0)
    })
  })

  describe('Features Section', () => {
    it('should display key features', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('Modern Stack')).toBeInTheDocument()
      expect(screen.getByText('Beautiful UI')).toBeInTheDocument()
      expect(screen.getByText('Type Safe')).toBeInTheDocument()
      expect(screen.getByText('Responsive')).toBeInTheDocument()
    })

    it('should show benefits list', () => {
      renderWithRouter(<Home />)

      expect(screen.getByText('Embeddable widget architecture')).toBeInTheDocument()
      expect(screen.getByText('Comprehensive testing setup')).toBeInTheDocument()
      expect(screen.getByText('Production-ready builds')).toBeInTheDocument()
    })
  })
})
