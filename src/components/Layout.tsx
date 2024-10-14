import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-10 bg-white shadow-lg rounded-tl-3xl">
        <div className="min-h-full bg-white p-8 rounded-lg shadow-xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
