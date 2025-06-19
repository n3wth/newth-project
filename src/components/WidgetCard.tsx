import React, { useState, Suspense } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import LoadingSpinner from './LoadingSpinner'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { ArrowSquareOut, Play } from '@phosphor-icons/react'
import type { Widget } from '@/types/widget'

interface WidgetCardProps {
  widget: Widget
}

const getWidgetComponent = (path: string) => {
  const componentMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
    '/widgets/example': () => import('../pages/ExampleWidget'),
    // Add your widget imports here following this pattern:
    // '/widgets/my-widget': () => import('../pages/MyWidget'),
  }

  return componentMap[path] || null
}

export function WidgetCard({ widget }: WidgetCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const componentLoader = getWidgetComponent(widget.path)

  const handleViewWidget = () => {
    window.open(widget.path, '_blank')
  }

  const handlePreview = () => {
    setIsPreviewOpen(true)
  }

  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-lg border-muted">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {widget.title}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed line-clamp-2">
              {widget.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 pb-4">
        <div className="flex flex-wrap gap-1">
          {widget.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium">
              {tag}
            </Badge>
          ))}
          {widget.tags && widget.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{widget.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 gap-2">
        <Button onClick={handleViewWidget} className="flex-1" size="sm">
          <ArrowSquareOut className="w-3 h-3 mr-1" />
          View Widget
        </Button>

        {componentLoader && (
          <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
            <DialogTrigger asChild>
              <Button onClick={handlePreview} variant="outline" size="sm">
                <Play className="w-3 h-3 mr-1" />
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[80vh] overflow-hidden">
              <div className="h-full overflow-auto">
                <Suspense fallback={<LoadingSpinner />}>
                  {(() => {
                    const LazyComponent = React.lazy(componentLoader)
                    return <LazyComponent />
                  })()}
                </Suspense>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  )
}
