import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

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
      <main>{children}</main>
    </div>
  );
};

export default Layout; 