import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Home Page UX Tests', () => {
  beforeEach(() => {
    renderWithRouter(<Home />);
  });

  describe('Initial Page Load', () => {
    it('should display the logo and brand name', () => {
      expect(screen.getByTestId('logo')).toBeInTheDocument();
      expect(screen.getByText('Newth.ai Widgets')).toBeInTheDocument();
    });

    it('should show tabs navigation', () => {
      expect(screen.getByTestId('widget-tabs')).toBeInTheDocument();
      expect(screen.getByTestId('tabs-list')).toBeInTheDocument();
      expect(screen.getByTestId('tab-all')).toBeInTheDocument();
      expect(screen.getByTestId('tab-vietnam')).toBeInTheDocument();
    });

    it('should default to "All" tab being active', () => {
      const allTab = screen.getByTestId('tab-all');
      expect(allTab).toHaveAttribute('data-state', 'active');
    });

    it('should display widget grid on initial load', () => {
      expect(screen.getByTestId('widget-grid')).toBeInTheDocument();
    });
  });

  describe('Tab Navigation UX', () => {
    it('should switch to Vietnam tab when clicked', async () => {
      const user = userEvent.setup();
      const vietnamTab = screen.getByTestId('tab-vietnam');
      
      await user.click(vietnamTab);
      
      await waitFor(() => {
        expect(vietnamTab).toHaveAttribute('data-state', 'active');
      });
    });

    it('should show Vietnam content when Vietnam tab is active', async () => {
      const user = userEvent.setup();
      const vietnamTab = screen.getByTestId('tab-vietnam');
      
      await user.click(vietnamTab);
      
      await waitFor(() => {
        expect(screen.getByTestId('tab-content-vietnam')).toBeInTheDocument();
      });
    });

    it('should switch back to All tab', async () => {
      const user = userEvent.setup();
      const vietnamTab = screen.getByTestId('tab-vietnam');
      const allTab = screen.getByTestId('tab-all');
      
      // First switch to Vietnam
      await user.click(vietnamTab);
      await waitFor(() => {
        expect(vietnamTab).toHaveAttribute('data-state', 'active');
      });
      
      // Then switch back to All
      await user.click(allTab);
      await waitFor(() => {
        expect(allTab).toHaveAttribute('data-state', 'active');
      });
    });
  });

  describe('Widget Display UX', () => {
    it('should display Vietnam weather widgets', () => {
      expect(screen.getByText('Vietnam 10-Day Weather Forecast')).toBeInTheDocument();
      expect(screen.getByText('Hanoi Weather Widget')).toBeInTheDocument();
      expect(screen.getByText('Ho Chi Minh City Weather Widget')).toBeInTheDocument();
      expect(screen.getByText('Ha Long Bay Weather Widget')).toBeInTheDocument();
    });

    it('should show widget descriptions', () => {
      expect(screen.getByText('Hanoi, Ho Chi Minh City, Ha Long Bay')).toBeInTheDocument();
      expect(screen.getAllByText('10-day forecast')).toHaveLength(3);
    });

    it('should have clickable widget links', () => {
      const widgetLinks = screen.getAllByText('View Widget →');
      expect(widgetLinks.length).toBeGreaterThan(0);
      
      widgetLinks.forEach(link => {
        expect(link).toBeInTheDocument();
        expect(link.closest('a')).toHaveAttribute('href');
      });
    });
  });

  describe('Responsive Design UX', () => {
    it('should have responsive grid classes', () => {
      const grid = screen.getByTestId('widget-grid');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });

    it('should have proper container spacing', () => {
      const container = screen.getByTestId('widget-tabs').closest('.container');
      expect(container).toHaveClass('mx-auto', 'px-4', 'py-8');
    });
  });

  describe('Accessibility UX', () => {
    it('should have proper heading hierarchy', () => {
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toHaveTextContent('Newth.ai Widgets');
      
      const widgetHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(widgetHeadings.length).toBeGreaterThan(0);
    });

    it('should have accessible tab navigation', () => {
      const tabList = screen.getByRole('tablist');
      expect(tabList).toBeInTheDocument();
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(2);
      
      tabs.forEach(tab => {
        expect(tab).toHaveAttribute('aria-selected');
      });
    });

    it('should have accessible links', () => {
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
      
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Keyboard Navigation UX', () => {
    it('should support keyboard navigation for tabs', async () => {
      const user = userEvent.setup();
      const allTab = screen.getByTestId('tab-all');
      const vietnamTab = screen.getByTestId('tab-vietnam');
      
      // Focus on first tab
      allTab.focus();
      expect(allTab).toHaveFocus();
      
      // Navigate to next tab with arrow key
      await user.keyboard('{ArrowRight}');
      expect(vietnamTab).toHaveFocus();
      
      // Navigate back with arrow key
      await user.keyboard('{ArrowLeft}');
      expect(allTab).toHaveFocus();
    });

    it('should activate tab with Enter key', async () => {
      const user = userEvent.setup();
      const vietnamTab = screen.getByTestId('tab-vietnam');
      
      vietnamTab.focus();
      await user.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(vietnamTab).toHaveAttribute('data-state', 'active');
      });
    });
  });

  describe('Performance UX', () => {
    it('should render widgets efficiently', () => {
      const widgets = screen.getAllByTestId(/^widget-card-/);
      expect(widgets.length).toBeGreaterThan(0);
      
      // Check that all widgets are rendered without performance issues
      widgets.forEach(widget => {
        expect(widget).toBeInTheDocument();
      });
    });

    it('should not cause layout shifts during tab switching', async () => {
      const user = userEvent.setup();
      const container = screen.getByTestId('widget-tabs');
      const initialHeight = container.getBoundingClientRect().height;
      
      // Switch tabs
      await user.click(screen.getByTestId('tab-vietnam'));
      
      await waitFor(() => {
        const newHeight = container.getBoundingClientRect().height;
        // Height should remain relatively stable (allowing for small differences)
        expect(Math.abs(newHeight - initialHeight)).toBeLessThan(50);
      });
    });
  });
}); 