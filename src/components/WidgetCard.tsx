import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Widget } from '@/types/widget';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WidgetCardProps {
  widget: Widget;
  className?: string;
  variant?: 'default' | 'compact';
}

export const WidgetCard = ({ widget, className = '', variant = 'default' }: WidgetCardProps) => {
  const isCompact = variant === 'compact';

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
        "border-border/50 hover:border-border",
        className
      )}
      data-testid={`widget-card-${widget.id}`}
    >
      <CardHeader className={cn("space-y-2", isCompact && "pb-2")}>
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className={cn(
              "text-base font-semibold leading-tight group-hover:text-primary transition-colors",
              isCompact && "text-sm"
            )}>
              {widget.title}
            </CardTitle>
            <CardDescription className={cn(
              "text-sm text-muted-foreground line-clamp-2",
              isCompact && "text-xs"
            )}>
              {widget.description}
            </CardDescription>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
        </div>
        
        {widget.tags && widget.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {widget.tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs px-2 py-0.5 capitalize"
              >
                {tag}
              </Badge>
            ))}
            {widget.tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{widget.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className={cn("pt-0", isCompact && "pb-3")}>
        <Button 
          asChild 
          variant="ghost" 
          className="w-full justify-between p-0 h-auto font-medium text-sm hover:bg-transparent group/button"
        >
          <Link 
            to={widget.path}
            className="flex items-center justify-between w-full py-2"
            data-testid={`widget-link-${widget.id}`}
          >
            <span className="group-hover/button:text-primary transition-colors">
              View Widget
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </CardContent>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </Card>
  );
}; 