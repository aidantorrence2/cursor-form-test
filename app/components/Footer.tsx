'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <span className="text-lg font-serif tracking-wider text-white">
                AIDAN TORRENCE
              </span>
              <span className="ml-2 text-xs uppercase tracking-widest font-light text-gray-400">
                Photography
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              Capturing beautiful moments in breathtaking locations.
              Professional photography services specializing in natural light 
              photography.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <p className="text-xs text-gray-500 text-center">
            &copy; {currentYear} Aidan Torrence Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 