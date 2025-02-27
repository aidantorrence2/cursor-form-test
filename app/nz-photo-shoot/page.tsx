'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NZPhotoShoot() {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/nz-mountains.jpg" 
            alt="New Zealand South Island Mountains" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        {/* Overlay Text */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ELEVATE YOUR PRESENCE
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            An exclusive photo experience amidst New Zealand's breathtaking South Island landscapes. Full-day and shorter sessions available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-4"
          >
            <Link
              href="https://cal.com/aidantorrence/nz-photo-experience"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-none bg-white text-black hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Schedule Your Call
            </Link>
            <p className="text-sm text-gray-300">Limited slots available - Book your consultation now</p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
      
      {/* Floating Call Booking Button (visible when scrolled) */}
      <div className="fixed bottom-8 right-8 z-50 md:hidden">
        <Link
          href="https://cal.com/aidantorrence/nz-photo-experience"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Schedule your call"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </Link>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-black sticky top-16 z-30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 md:space-x-16">
            <button 
              className={`py-4 px-2 border-b-2 transition-colors ${activeSection === 'experience' ? 'border-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveSection('experience')}
            >
              The Experience
            </button>
            <button 
              className={`py-4 px-2 border-b-2 transition-colors ${activeSection === 'gallery' ? 'border-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveSection('gallery')}
            >
              Gallery
            </button>
            <button 
              className={`py-4 px-2 border-b-2 transition-colors ${activeSection === 'details' ? 'border-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveSection('details')}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The Experience</h2>
              <p className="text-gray-300 mb-6">
                Immerse yourself in the dramatic landscapes of New Zealand's South Island with an exclusive full-day photography experience. This bespoke photo adventure combines digital and film photography to capture your essence against the backdrop of one of the world's most breathtaking locations.
              </p>
              <p className="text-gray-300 mb-6">
                This isn't just a photo shoot—it's an artistic collaboration between subject and environment, designed to showcase your natural beauty harmonized with New Zealand's rugged majesty.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Full-day experience (8+ hours) with multiple locations</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Half-day (4 hours) and mini (2 hours) sessions also available</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Digital + Film photography for a diverse portfolio</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Expert direction and styling advice throughout</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">20+ professionally edited digital images</p>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-xl font-medium mb-4">Ready to create powerful imagery in stunning landscapes?</h3>
                <Link
                  href="https://cal.com/aidantorrence/nz-photo-experience"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Schedule Your Call Now
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-96 md:h-[600px]">
                <Image 
                  src="/nz-experience.jpg" 
                  alt="New Zealand photo shoot experience" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Gallery Section */}
        {activeSection === 'gallery' && (
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Portfolio Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="aspect-[3/4] relative overflow-hidden group">
                  <Image 
                    src={`/nz-gallery-${item}.jpg`} 
                    alt={`Gallery image ${item}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12 space-y-4">
              <h3 className="text-xl font-medium">Envision yourself in these breathtaking settings</h3>
              <Link
                href="https://cal.com/aidantorrence/nz-photo-experience"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Book Your Call Today
              </Link>
            </div>
          </div>
        )}
        
        {/* Details Section */}
        {activeSection === 'details' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">The Details</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif mb-4">Who This Is For</h3>
                <p className="text-gray-300 mb-4">
                  This exclusive experience is crafted for models, influencers, and individuals with a strong visual presence seeking to elevate their portfolio with extraordinary imagery. Ideal for those who understand the value of exceptional photography in a world-class location.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif mb-4">The Investment</h3>
                <p className="text-gray-300 mb-4">
                  The full-day experience includes 8+ hours of shooting time across multiple iconic South Island locations, professional direction, digital and film photography, and a curated selection of 20+ professionally edited images.
                </p>
                <p className="text-gray-300 mb-4">
                  Half-day (4 hours) and mini sessions (2 hours) are also available for those with limited time or specific location requests. Each option includes a proportional set of professionally edited images.
                </p>
                <p className="text-gray-300 mb-4">
                  Pricing is tailored to your specific requirements and creative vision. Schedule a consultation to discuss your unique needs and receive a custom quote.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif mb-4">The Process</h3>
                <ol className="space-y-4 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <span className="font-serif font-bold text-lg mr-3">1.</span>
                    <p>Schedule a consultation call to discuss your vision and goals</p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-serif font-bold text-lg mr-3">2.</span>
                    <p>Collaborate on planning the perfect locations and styling</p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-serif font-bold text-lg mr-3">3.</span>
                    <p>Experience your full-day shoot across South Island's most stunning landscapes</p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-serif font-bold text-lg mr-3">4.</span>
                    <p>Receive your professionally edited digital gallery within 14 days</p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-serif font-bold text-lg mr-3">5.</span>
                    <p>Film images developed and delivered within 30 days</p>
                  </li>
                </ol>
                <div className="bg-zinc-900 p-8 border border-zinc-800 rounded-sm text-center">
                  <h4 className="text-xl font-medium mb-4">Take the first step to your transformation</h4>
                  <p className="text-gray-300 mb-6">Our calendar is filling quickly for the season. Secure your consultation now.</p>
                  <Link
                    href="https://cal.com/aidantorrence/nz-photo-experience"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-none bg-white text-black hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    Schedule Your Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-zinc-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">What Models Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Aidan in New Zealand was a career highlight. The images are breathtaking and have elevated my portfolio to a new level.",
                name: "Sophia C.",
                title: "Fashion Model"
              },
              {
                quote: "The attention to detail and artistic vision throughout the experience was unmatched. These aren't just photos—they're art that tells my story.",
                name: "James R.",
                title: "Commercial Model"
              },
              {
                quote: "The combination of digital precision and film's artistic quality created a diverse portfolio in just one day. Worth every moment.",
                name: "Eliza T.",
                title: "Influencer & Model"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black p-8 border border-zinc-800">
                <svg className="w-10 h-10 text-zinc-700 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/nz-cta-bg.jpg" 
            alt="New Zealand landscape" 
            fill 
            className="object-cover brightness-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Elevate Your Portfolio</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Limited sessions available during the 2025 season. Secure your South Island experience today.
          </p>
          <div className="space-y-6">
            <Link
              href="https://cal.com/aidantorrence/nz-photo-experience"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-none bg-white text-black hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Schedule Your Call Now
            </Link>
            <p className="text-sm text-gray-400">No obligation. Let's discuss your vision and create something extraordinary.</p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                question: "What makes this different from regular photo shoots?",
                answer: "This is a premium, full-day artistic experience across multiple iconic New Zealand locations. It combines both digital and film photography to create a diverse, high-end portfolio that captures both technical precision and artistic atmosphere."
              },
              {
                question: "Do I need modeling experience?",
                answer: "While experience is beneficial, it's not required. Direction and guidance will be provided throughout the day to ensure natural, authentic poses that complement your features and the stunning landscapes."
              },
              {
                question: "What should I bring to the shoot?",
                answer: "After our consultation call, you'll receive a detailed preparation guide. Generally, we recommend bringing 3-5 outfit options, minimal accessories, and comfortable shoes for moving between locations."
              },
              {
                question: "How quickly will I receive my images?",
                answer: "Digital images are delivered within 14 days via a private online gallery. Film photographs require additional processing time and will be delivered within 30 days."
              },
              {
                question: "Can I use the images for commercial purposes?",
                answer: "Usage rights are discussed during consultation and tailored to your needs. Standard packages include personal use and personal branding. Commercial licensing is available as an additional option."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
            <Link
              href="https://cal.com/aidantorrence/nz-photo-experience"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Book a 15-Minute Call
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 