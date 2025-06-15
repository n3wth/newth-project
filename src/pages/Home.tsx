import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Lego, Sparkle, Code, Palette } from '@phosphor-icons/react';
import { WidgetGrid } from '@/components/WidgetGrid';
import { WIDGETS, WIDGET_CATEGORIES } from '@/constants/widgets';
import { filterWidgetsByCategory } from '@/utils/widgets';

export default function Home() {
  const allWidgets = WIDGETS;
  const vietnamWidgets = filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.VIETNAM);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3" data-testid="logo">
            <div className="flex items-center gap-2">
              <Lego size={32} weight="fill" className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Newth.ai Widgets</h1>
                <p className="text-sm text-muted-foreground">Personal Tools & Utilities</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4">
              <Sparkle className="w-3 h-3 mr-1" />
              Personal Collection
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              My Personal Widget Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of useful widgets I've built for documentation, trip planning, and personal projects. 
              Feel free to explore and use them for your own needs.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>TypeScript</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span>Tailwind CSS</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Lego className="w-4 h-4" />
              <span>shadcn/ui</span>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="w-full" data-testid="widget-tabs">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <TabsList data-testid="tabs-list" className="grid w-full grid-cols-2 lg:w-[400px]">
                  <TabsTrigger value="all" data-testid="tab-all" className="text-sm">
                    All Widgets
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {allWidgets.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="vietnam" data-testid="tab-vietnam" className="text-sm">
                    Vietnam Trip
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {vietnamWidgets.length}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
                <p className="text-sm text-muted-foreground">
                  Browse by category or use case
                </p>
              </div>
              
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <span>Theme:</span>
                <Badge variant="outline" className="font-mono">Default</Badge>
              </div>
            </div>

            <TabsContent value="all" data-testid="tab-content-all" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">All Personal Widgets</h3>
                <p className="text-sm text-muted-foreground">
                  Everything I've built for various personal projects and documentation
                </p>
              </div>
              <WidgetGrid widgets={allWidgets} />
            </TabsContent>

            <TabsContent value="vietnam" data-testid="tab-content-vietnam" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Vietnam Trip Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Weather widgets I built to help plan my Vietnam trip - tracking forecasts for key destinations
                </p>
              </div>
              <WidgetGrid widgets={vietnamWidgets} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Badge variant="outline" className="text-xs">React</Badge>
              <Badge variant="outline" className="text-xs">TypeScript</Badge>
              <Badge variant="outline" className="text-xs">shadcn/ui</Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Personal widget collection for documentation and project planning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 