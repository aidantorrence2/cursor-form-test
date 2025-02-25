'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="pt-16 min-h-screen">
      {/* Hero section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/30 z-10"></div>
        <Image
          src="/DSC02848.jpg"
          alt="Aidan Torrence Photography"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider mb-4">
              About Aidan Torrence
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
              Professional photographer capturing life's beautiful moments
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-10 lg:space-x-16">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <div className="relative h-96 md:h-[35rem] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/DSC01969.jpg"
                  alt="Aidan Torrence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900 mb-6">
                The Passion Behind the Lens
              </h2>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  Hello, I'm Aidan Torrence, a professional photographer with a passion for 
                  capturing the beauty of natural environments and the genuine emotions of people.
                </p>
                
                <p>
                  My journey in photography began with a simple appreciation for moments that tell 
                  stories. Over the years, I've developed a style that emphasizes natural light, 
                  authentic expressions, and the breathtaking backdrop of beaches and coastal scenes.
                </p>
                
                <p>
                  I believe that a successful photoshoot is a collaborative experience. My approach 
                  is to create a comfortable, relaxed atmosphere where you can be yourself, resulting 
                  in photographs that truly represent who you are.
                </p>
                
                <p>
                  When I'm not behind the camera, you'll find me exploring new locations, studying 
                  different lighting techniques, and constantly refining my craft to deliver the 
                  best possible images to my clients.
                </p>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Book a Free Shoot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900 mb-4">
              My Photography Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creating timeless images that capture genuine emotions and beautiful moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Light</h3>
              <p className="text-gray-600">
                I specialize in using natural light to create warm, authentic images that 
                highlight your best features and capture the magic of the moment.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Connection</h3>
              <p className="text-gray-600">
                My goal is to create an environment where you feel comfortable being yourself, 
                allowing me to capture genuine expressions and emotions.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beautiful Locations</h3>
              <p className="text-gray-600">
                I carefully select stunning natural settings that complement your unique style 
                and create a breathtaking backdrop for your photos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-6">
            Ready for Your Beach Photoshoot?
          </h2>
          <p className="text-xl text-blue-400 mb-8 max-w-2xl mx-auto">
            Take advantage of this limited-time offer and book your free professional 
            beach photoshoot today.
          </p>
          <Link 
            href="https://cal.com/aidantorrence/photo-shoot-collab"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-blue-400 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </main>
  );
} 