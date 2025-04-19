'use client';

import Image from 'next/image';

export default function About() {
  return (
    <main className="pt-16 min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
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
      <section className="py-16 md:py-24 bg-zinc-950">
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
              <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white mb-6">
                The Passion Behind the Lens
              </h2>
              
              <div className="prose prose-lg prose-invert text-gray-300">
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy section */}
      <section className="py-16 md:py-24 bg-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white mb-4">
              My Photography Philosophy
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Creating timeless images that capture genuine emotions and beautiful moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-zinc-900 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Natural Light</h3>
              <p className="text-gray-300">
                I specialize in using natural light to create warm, authentic images that 
                highlight your best features and capture the magic of the moment.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Authentic Connection</h3>
              <p className="text-gray-300">
                My goal is to create an environment where you feel comfortable being yourself, 
                allowing me to capture genuine expressions and emotions.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Beautiful Locations</h3>
              <p className="text-gray-300">
                I carefully select stunning natural settings that complement your unique style 
                and create a breathtaking backdrop for your photos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 