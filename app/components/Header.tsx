'use client';

import Link from 'next/link';

export default function Header() {
  // Header will always display with a background
  // No longer need isScrolled state since the header will always have the same style
  
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm shadow-sm py-3"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-xl font-serif tracking-wider text-white">
                AIDAN TORRENCE
              </span>
              <span className="sm:ml-2 text-xs uppercase tracking-widest font-light text-gray-400">
                Photography
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 