import React from 'react';
import Link from 'next/link';
import { Home, Image, Twitter, MessageSquare } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl p-6 text-white">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-white tracking-widest">AI Design Studio</h1>
      </div>
      <nav>
        <ul className="space-y-6">
          <li>
            <Link href="/" className="flex items-center space-x-3 p-3 text-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-gray-900">
              <Home size={24} />
              <span className="text-lg font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/logo" className="flex items-center space-x-3 p-3 text-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-gray-900">
              <Image size={24} />
              <span className="text-lg font-semibold">Logo Generator</span>
            </Link>
          </li>
          <li>
            <Link href="/banner" className="flex items-center space-x-3 p-3 text-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-gray-900">
              <Twitter size={24} />
              <span className="text-lg font-semibold">Twitter Banner</span>
            </Link>
          </li>
          <li>
            <Link href="/tagline" className="flex items-center space-x-3 p-3 text-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-gray-900">
              <MessageSquare size={24} />
              <span className="text-lg font-semibold">Tagline Generator</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
