import { Link } from 'react-router-dom';
import type { Widget } from '@/types/widget';

interface WidgetCardProps {
  widget: Widget;
  className?: string;
}

export const WidgetCard = ({ widget, className = '' }: WidgetCardProps) => {
  return (
    <div 
      className={`border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white ${className}`}
      data-testid={`widget-card-${widget.id}`}
    >
      <h3 className="font-semibold text-black mb-2">{widget.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{widget.description}</p>
      <Link 
        to={widget.path} 
        className="text-black hover:underline text-sm font-medium"
        data-testid={`widget-link-${widget.id}`}
      >
        View Widget →
      </Link>
    </div>
  );
}; 