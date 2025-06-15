import type { ReactNode } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-background/95 sticky top-0 z-30 w-full">
        <NavigationMenu className="mx-auto max-w-5xl px-4 py-2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="font-bold text-xl tracking-tight px-2 py-1">↗ WidgetHub</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/weather-vietnam" className="px-2 py-1">Weather Vietnam</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Add more nav links here as you add widgets */}
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl mx-auto py-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout; 