'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redirect to the main website
    window.location.href = 'https://aidantorrence.com';
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-serif font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-300">
          Taking you to <a href="https://aidantorrence.com" className="underline">aidantorrence.com</a>
        </p>
      </div>
    </main>
  );
}
