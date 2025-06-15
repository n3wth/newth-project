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
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
          <Link to="/" className="font-bold text-2xl tracking-tight text-primary">↗ WidgetHub</Link>
          <NavigationMenu className="flex-1 justify-end">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/weather-vietnam" className="px-4 py-2 text-muted-foreground hover:text-primary transition">Weather Vietnam</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Add more nav links here as you add widgets */}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout; 