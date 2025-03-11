'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/beach-welcome.png"
            alt="Aidan Torrence Photography"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            Aidan Torrence Photography
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Capturing natural beauty with natural light
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/photo-shoot"
              className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Photo Session
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Natural Light Photography
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I specialize in natural light photography that captures authentic moments and genuine emotions. My approach focuses on creating a comfortable environment where your true personality can shine through.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether it&apos;s a serene beach portrait, an urban adventure, or an intimate lifestyle session, I strive to create timeless images that tell your unique story.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My photography style emphasizes natural beauty, soft lighting, and authentic connections - creating images that feel both artistic and genuine.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/beach-artistic.png"
                alt="Natural light portrait photography"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Portfolio Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <Image
                src="/beach-welcome.png"
                alt="Beach portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <Image
                src="/beach-friends.jpg"
                alt="Friends photoshoot"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <Image
                src="/beach-final.png"
                alt="Artistic portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready for Your Photo Session?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I offer various photography experiences tailored to your vision. Explore my specialized sessions and find the perfect fit for your photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/photo-shoot"
              className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Photo Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
