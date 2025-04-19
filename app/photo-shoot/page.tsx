'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PhotoShoot() {
  // Using a static display since we don't need form submission functionality
  const isSubmitted = false;

  return (
    <main className="min-h-screen bg-black text-white pt-12">
      {/* Top Section with CTA button for mobile */}
      <div className="bg-zinc-900 fixed top-0 left-0 right-0 z-10 py-2 px-4 flex items-center justify-between border-b border-zinc-800">
        <a href="https://aidantorrence.com" className="text-lg font-serif font-bold">
          Aidan Torrence Photography
        </a>
        <Link
          href="https://cal.com/aidantorrence/photo-shoot-collab"
          className="px-3 py-1 border-2 border-white rounded-md text-sm font-bold text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Schedule Intro Call
        </Link>
          </div>
          
      <div className="max-w-4xl mx-auto px-4 py-8">
        {!isSubmitted ? (
          <div>
            {/* Content Section - Images and Info */}
            <div className="space-y-6">
              {/* Two square images at the top instead of one large image */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image 
                  src="/nola.jpg" 
                  alt="New Orleans photo session example" 
                    fill
                    className="object-cover"
                    priority
                />
              </div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/avery.jpg" 
                    alt="Portrait photo style example" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  I am offering a free photo session for a limited time while I am in town. you can bring fashion outfits like shirts, jeans, skirts, dresses, or swimwear that complement natural outdoor environments.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                    <p>Free 1-2 hour photo session at beautiful locations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                    <p>Guidance and posing tips during the shoot</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                    <p>Receive your photos in 2 weeks</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                    <p>You're welcome to bring a friend if you'd feel more comfortable</p>
                  </li>
                </ul>
              </div>
              
              {/* Next Steps Section */}
              <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-800">
                <h2 className="text-xl font-serif font-bold mb-3">Next Steps</h2>
                <p className="text-gray-300 mb-4">
                  Ready to get started? The next step is to schedule a quick introductory call. During this call, we'll discuss location options, timing, and your vision for the shoot. This helps ensure we create the perfect photo session experience for you.
                </p>
                <div className="text-center mt-4">
                  <Link
                    href="https://cal.com/aidantorrence/photo-shoot-collab"
                    className="inline-block px-6 py-3 bg-white text-black border-2 border-white rounded-md font-bold shadow-lg hover:bg-gray-200"
                  >
                    📅 Schedule Intro Call
                  </Link>
                </div>
              </div>
              
              {/* Example photos - also making these square */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/abby.jpg" 
                    alt="Portrait photo style example" 
                    fill
                    className="object-cover"
                  />
            </div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
              <Image 
                src="/beka.jpg" 
                    alt="Outdoor portrait example" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">You're almost there!</h2>
              <p className="text-gray-300 mb-8">
                Click the button below to schedule your free beach photo session.
              </p>
          </div>
            
            <Link
              href="https://cal.com/aidantorrence/photo-shoot-collab"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-bold rounded-md border-2 border-white shadow-xl hover:bg-gray-200"
            >
              📅 Schedule Intro Call
            </Link>
            
            <div className="mt-12 border-t border-zinc-800 pt-8">
              <h3 className="text-xl font-medium mb-4">What to expect on the call:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Schedule planning</h4>
                    <p className="text-sm text-gray-400">We'll find the perfect date and time that works for you</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Location options</h4>
                    <p className="text-sm text-gray-400">Discuss beach and nature locations that would work best</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Creative vision</h4>
                    <p className="text-sm text-gray-400">Share your ideas and outfit preferences for the shoot</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Questions answered</h4>
                    <p className="text-sm text-gray-400">Get all your questions and concerns addressed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* FAQ Section */}
      <div className="bg-zinc-950 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Is this photo shoot really free?",
                answer: "Yes, the shoot is completely free. There are no hidden fees or obligations to purchase anything."
              },
              {
                question: "Why are you offering this for free?",
                answer: "I'm expanding my portfolio and looking for people to collaborate with. This is a mutually beneficial opportunity to create beautiful imagery together."
              },
              {
                question: "What should I bring to the shoot?",
                answer: "After our consultation call, you'll receive preparation guidance. Generally, bringing a few outfit options that work with beach and nature settings is recommended."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="https://cal.com/aidantorrence/photo-shoot-collab"
              className="inline-block px-8 py-4 bg-white text-black text-lg font-bold rounded-md border-2 border-white shadow-xl hover:bg-gray-200"
            >
              📅 Schedule Intro Call
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 