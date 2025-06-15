import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lego } from '@phosphor-icons/react';
import { WidgetGrid } from '@/components/WidgetGrid';
import { WIDGETS, WIDGET_CATEGORIES } from '@/constants/widgets';
import { filterWidgetsByCategory } from '@/utils/widgets';

export default function Home() {
  const allWidgets = WIDGETS;
  const vietnamWidgets = filterWidgetsByCategory(WIDGETS, WIDGET_CATEGORIES.VIETNAM);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 mb-8" data-testid="logo">
        <Lego size={32} weight="fill" />
        <h1 className="text-2xl font-semibold text-black">Newth.ai Widgets</h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="all" className="w-full" data-testid="widget-tabs">
          <div className="mb-8">
            <TabsList data-testid="tabs-list">
              <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
              <TabsTrigger value="vietnam" data-testid="tab-vietnam">Vietnam</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" data-testid="tab-content-all">
            <WidgetGrid widgets={allWidgets} />
          </TabsContent>

          <TabsContent value="vietnam" data-testid="tab-content-vietnam">
            <WidgetGrid widgets={vietnamWidgets} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 