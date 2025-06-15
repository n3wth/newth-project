import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { WidgetCard } from '../WidgetCard';
import type { Widget } from '@/types/widget';

const mockWidget: Widget = {
  id: 'test-widget',
  title: 'Test Widget',
  description: 'This is a test widget description',
  path: '/test-widget',
  category: 'test',
  tags: ['test', 'example'],
};

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('WidgetCard', () => {
  it('should render widget information correctly', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />);
    
    expect(screen.getByText('Test Widget')).toBeInTheDocument();
    expect(screen.getByText('This is a test widget description')).toBeInTheDocument();
    expect(screen.getByText('View Widget →')).toBeInTheDocument();
  });

  it('should have correct test IDs', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />);
    
    expect(screen.getByTestId('widget-card-test-widget')).toBeInTheDocument();
    expect(screen.getByTestId('widget-link-test-widget')).toBeInTheDocument();
  });

  it('should have correct link href', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />);
    
    const link = screen.getByTestId('widget-link-test-widget');
    expect(link).toHaveAttribute('href', '/test-widget');
  });

  it('should apply custom className', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} className="custom-class" />);
    
    const card = screen.getByTestId('widget-card-test-widget');
    expect(card).toHaveClass('custom-class');
  });

  it('should have proper accessibility structure', () => {
    renderWithRouter(<WidgetCard widget={mockWidget} />);
    
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('Test Widget');
    
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('View Widget →');
  });
}); 