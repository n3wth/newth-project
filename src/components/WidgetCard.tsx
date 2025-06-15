import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ExternalLinkIcon, CopyIcon, CheckIcon } from 'lucide-react';
import type { Widget } from '@/types/widget';
import { BASE_URL } from '@/constants/config';
import { cn } from '@/lib/utils';

interface WidgetCardProps {
  widget: Widget;
  className?: string;
  variant?: 'default' | 'compact';
}

export const WidgetCard = ({ widget, className = '', variant = 'default' }: WidgetCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const isCompact = variant === 'compact';
  const fullUrl = `${BASE_URL}${widget.path}`;

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  const handleVisitWidget = () => {
    window.open(fullUrl, '_blank');
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <Card 
        className={cn(
          "group cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-border/50 hover:border-border",
          className
        )}
        onClick={handleCardClick}
        data-testid={`widget-card-${widget.id}`}
      >
        <CardHeader className={cn("pb-3", isCompact && "pb-2")}>
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <CardTitle className={cn(
                "text-lg leading-tight group-hover:text-primary transition-colors",
                isCompact && "text-base"
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
            <ExternalLinkIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1 mb-3">
            {widget.tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {widget.tags && widget.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{widget.tags.length - 3}
              </Badge>
            )}
          </div>
          <div onClick={handleLinkClick}>
            <Link 
              to={widget.path}
              className="text-sm text-primary hover:underline"
              data-testid={`widget-link-${widget.id}`}
            >
              View in app →
            </Link>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {widget.title}
            </DialogTitle>
            <DialogDescription>
              {widget.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Widget Metadata */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Category:</span>
                <Badge variant="outline">{widget.category}</Badge>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm font-medium">Tags:</span>
                <div className="flex flex-wrap gap-1">
                  {widget.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* URL Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Widget URL:</label>
              <div className="flex gap-2">
                <Input
                  value={fullUrl}
                  readOnly
                  className="font-mono text-sm"
                />
                <Button
                  onClick={handleCopyUrl}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <CheckIcon className="h-4 w-4 text-green-600" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {copied && (
                <p className="text-sm text-green-600">URL copied to clipboard!</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button onClick={handleVisitWidget} className="flex-1 gap-2">
                <ExternalLinkIcon className="h-4 w-4" />
                Open Widget
              </Button>
              <Link to={widget.path} className="flex-1">
                <Button variant="outline" className="w-full">
                  View in App
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WidgetCard; 