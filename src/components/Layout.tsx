import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full max-w-[1600px] mx-auto py-4">
      <main className="px-2">
        {children}
      </main>
    </div>
  );
};

export default Layout; 