import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  // Hide navigation for embedded widget pages
  const isEmbeddedWidget = location.pathname.startsWith('/vietnam/') || 
                          location.pathname === '/weather-vietnam';

  if (isEmbeddedWidget) {
    return <div className="min-h-screen bg-white">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl font-semibold text-black">
              WidgetHub
            </Link>
            <div className="flex space-x-8">
              <Link 
                to="/weather-vietnam" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                Weather Vietnam
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout; 