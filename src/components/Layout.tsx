import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-muted py-4">
      <main className="max-w-3xl mx-auto px-2">
        {children}
      </main>
    </div>
  );
};

export default Layout; 