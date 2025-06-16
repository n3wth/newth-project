import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Lego, Sparkle, Code, Palette } from '@phosphor-icons/react';
import { WidgetGrid } from '@/components/WidgetGrid';
import { WIDGETS, WIDGET_CATEGORIES } from '@/constants/widgets';
import { filterWidgetsByCategory } from '@/utils/widgets';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const allWidgets = WIDGETS;
  const vietnamWidgets = filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.VIETNAM);
  const productivityWidgets = filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.PRODUCTIVITY);
  const utilityWidgets = filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.UTILITIES);
  const personalWidgets = filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.PERSONAL);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate shrinking values based on scroll
  const maxScroll = 50; // Even more responsive - shrink over first 50px
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  
  // Direct linear progression for immediate response (no easing)
  const logoSize = 32 - (scrollProgress * 16); // Shrink from 32px to 16px (50% smaller)
  const headerPadding = 6 - (scrollProgress * 3); // More dramatic padding reduction
  const titleSize = 2 - (scrollProgress * 0.75); // More dramatic title shrinking

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
        <div className="container mx-auto px-4" style={{ paddingTop: `${headerPadding * 0.25}rem`, paddingBottom: `${headerPadding * 0.25}rem` }}>
          <div className="flex items-center justify-center gap-3" data-testid="logo">
            <div className="flex items-center gap-2">
              <Lego 
                size={logoSize} 
                weight="fill" 
                className="text-primary transition-all duration-200" 
              />
              <div>
                <h1 
                  className="font-bold tracking-tight transition-all duration-200"
                  style={{ fontSize: `${titleSize}rem` }}
                >
                  Newth.ai Widgets
                </h1>
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
              A collection of useful widgets I've built for productivity, utilities, trip planning, and personal projects. 
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
                <TabsList data-testid="tabs-list" className="grid w-full grid-cols-5 lg:w-[600px]">
                  <TabsTrigger value="all" data-testid="tab-all" className="text-xs">
                    All
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {allWidgets.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="vietnam" data-testid="tab-vietnam" className="text-xs">
                    Vietnam
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {vietnamWidgets.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="productivity" data-testid="tab-productivity" className="text-xs">
                    Productivity
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {productivityWidgets.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="utilities" data-testid="tab-utilities" className="text-xs">
                    Utilities
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {utilityWidgets.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="personal" data-testid="tab-personal" className="text-xs">
                    Personal
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {personalWidgets.length}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
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
                  Everything I've built for various personal projects, productivity, and documentation
                </p>
              </div>
              <WidgetGrid widgets={allWidgets} />
            </TabsContent>

            <TabsContent value="vietnam" data-testid="tab-content-vietnam" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Vietnam Trip Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Widgets I built to help plan my Vietnam trip - weather, flights, maps, and itinerary
                </p>
              </div>
              <WidgetGrid widgets={vietnamWidgets} />
            </TabsContent>

            <TabsContent value="productivity" data-testid="tab-content-productivity" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Productivity Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Focus timers, habit trackers, and note-taking tools to boost productivity
                </p>
              </div>
              <WidgetGrid widgets={productivityWidgets} />
            </TabsContent>

            <TabsContent value="utilities" data-testid="tab-content-utilities" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Utility Widgets</h3>
                <p className="text-sm text-muted-foreground">
                  Handy tools for design, time zones, and everyday tasks
                </p>
              </div>
              <WidgetGrid widgets={utilityWidgets} />
            </TabsContent>

            <TabsContent value="personal" data-testid="tab-content-personal" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Personal Widgets</h3>
                <p className="text-sm text-muted-foreground">
                  Local weather, reading lists, and personal tracking tools
                </p>
              </div>
              <WidgetGrid widgets={personalWidgets} />
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
              Personal widget collection for productivity, utilities, and project planning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 