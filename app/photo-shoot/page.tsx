'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FreePhotoShoot() {
  const [activeSection, setActiveSection] = useState('form');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    artisticInterest: '',
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Form Section - Directly integrated with images */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="p-5 pb-0">
            <div className="flex justify-between items-center mb-3">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`w-full h-1 ${
                    index + 1 <= step ? 'bg-white' : 'bg-gray-700'
                  } ${index < totalSteps - 1 ? 'mr-1' : ''}`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center">
              Step {step} of {totalSteps}
            </p>
          </div>
          
          {/* Step 1 - Free Photo Session */}
          {step === 1 && (
            <div className="p-5">
              <div className="mb-6">
                <Image 
                  src="/nz-experience.jpg" 
                  alt="Photo session example" 
                  width={800}
                  height={500}
                  className="w-full rounded-lg object-cover h-64 md:h-80"
                />
              </div>
              
              <p className="text-gray-300 text-sm md:text-base mb-4">
                I&apos;m offering a free photo shoot opportunity while I&apos;m in town for a limited time. Here are the details:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-white">•</div>
                  <p>The shoot is completely free with no hidden costs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-white">•</div>
                  <p>1-2 hour professional photography session</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-white">•</div>
                  <p>Professional guidance and posing tips</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-white">•</div>
                  <p>You will receive edited photos within 2 weeks</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-white">•</div>
                  <p>You&apos;re welcome to bring a friend if you&apos;d feel more comfortable</p>
                </li>
              </ul>
              
              <button
                onClick={handleNext}
                className="w-full px-4 py-3 border border-transparent rounded-md text-sm md:text-base font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Get Started
              </button>
            </div>
          )}
          
          {/* Step 2 - Photo Style */}
          {step === 2 && (
            <div className="p-5">
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <Image 
                    src="/nz-gallery-1.jpg" 
                    alt="Photo style example 1" 
                    width={400}
                    height={600}
                    className="w-full rounded-lg object-cover h-48 md:h-64"
                  />
                  <Image 
                    src="/nz-gallery-2.jpg" 
                    alt="Photo style example 2" 
                    width={400}
                    height={600}
                    className="w-full rounded-lg object-cover h-48 md:h-64"
                  />
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-center mb-4">
                Photo Style
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                The theme for this shoot is artistic nature or beach photos. You would bring swimwear and/or fashion outfits to wear.
              </p>
              <div className="space-y-3 mb-6">
                <label className="flex items-center space-x-2 p-3 border border-zinc-700 rounded-lg hover:bg-zinc-800 cursor-pointer">
                  <input
                    type="radio"
                    name="artisticInterest"
                    value="very-interested"
                    onChange={handleChange}
                    checked={formData.artisticInterest === 'very-interested'}
                    className="h-4 w-4 text-blue-400"
                  />
                  <span className="text-white text-sm md:text-base">I&apos;m very interested in this style!</span>
                </label>
                <label className="flex items-center space-x-2 p-3 border border-zinc-700 rounded-lg hover:bg-zinc-800 cursor-pointer">
                  <input
                    type="radio"
                    name="artisticInterest"
                    value="need-more-info"
                    onChange={handleChange}
                    checked={formData.artisticInterest === 'need-more-info'}
                    className="h-4 w-4 text-blue-400"
                  />
                  <span className="text-white text-sm md:text-base">I&apos;d like to learn more</span>
                </label>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="px-4 py-3 border border-zinc-600 rounded-md text-sm md:text-base font-medium text-gray-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-3 border border-transparent rounded-md text-sm md:text-base font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          
          {/* Step 3 - Final Step */}
          {step === 3 && (
            <div className="p-5">
              <div className="mb-6">
                <Image 
                  src="/nz-gallery-3.jpg" 
                  alt="Final step image" 
                  width={800}
                  height={500}
                  className="w-full rounded-lg object-cover h-64 md:h-80"
                />
              </div>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-center mb-4">
                Final Step!
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-6">
                Ready to make this happen? Let&apos;s schedule a quick intro call to discuss your vision!
              </p>
              
              <div className="text-center mb-6">
                <Link
                  href="https://cal.com/aidantorrence/photo-shoot-collab"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Schedule Intro Call
                </Link>
              </div>
              
              <div className="mt-6 border-t border-zinc-800 pt-6">
                <div className="text-xs text-gray-400">
                  <p className="mb-1">During our call, we&apos;ll discuss:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Available dates and times for the shoot</li>
                    <li>Your vision and ideas</li>
                    <li>Location preferences</li>
                    <li>Any questions you might have</li>
                  </ul>
                </div>
              </div>
              
              <button
                onClick={handleBack}
                className="mt-6 px-4 py-2 border border-zinc-600 rounded-md text-sm font-medium text-gray-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-zinc-950 border-b border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex justify-center space-x-8 md:space-x-16">
            <button 
              className={`py-3 md:py-4 px-2 text-sm md:text-base border-b-2 transition-colors ${activeSection === 'experience' ? 'border-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
            <button 
              className={`py-3 md:py-4 px-2 text-sm md:text-base border-b-2 transition-colors ${activeSection === 'gallery' ? 'border-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveSection('gallery')}
            >
              Gallery
            </button>
          </div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className={`max-w-7xl mx-auto px-4 py-8 md:py-16 ${activeSection !== 'experience' && 'hidden'}`}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The Experience</h2>
            <p className="text-gray-300 mb-6">
              I&apos;m offering a completely free photo session in stunning locations. This is a chance to receive professional photography without any cost to you.
            </p>
            <p className="text-gray-300 mb-6">
              This isn&apos;t just a photo shoot—it&apos;s an artistic collaboration between subject and environment, designed to showcase your natural beauty in harmony with breathtaking scenery.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">Free 1-2 hour experience at beautiful locations</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">No hidden fees or costs - completely free</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">Professional direction and posing guidance</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">Edited digital images delivered within 2 weeks</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">Bring a friend or guest if you prefer</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-xl font-medium mb-4">Ready to secure your free photo session?</h3>
              <button
                onClick={() => {
                  setActiveSection('form');
                  setStep(1);
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Apply Now
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-96 md:h-[600px]">
              <Image 
                src="/nz-experience.jpg" 
                alt="Photo shoot experience" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className={`max-w-7xl mx-auto px-4 py-8 md:py-16 ${activeSection !== 'gallery' && 'hidden'}`}>
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
            <button
              onClick={() => {
                setActiveSection('form');
                setStep(1);
              }}
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Apply Now
            </button>
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
                question: "Is this photo shoot really free?",
                answer: "Yes, the shoot is completely free. There are no hidden fees or obligations to purchase anything."
              },
              {
                question: "Why are you offering this for free?",
                answer: "I'm expanding my portfolio and looking for people to collaborate with. This is a mutually beneficial opportunity to create beautiful imagery together."
              },
              {
                question: "What should I bring to the shoot?",
                answer: "After our consultation call, you'll receive preparation guidance. Generally, bringing a few outfit options that work with natural settings is recommended."
              },
              {
                question: "How long does the shoot take?",
                answer: "The free shoot typically lasts 1-2 hours, depending on the location and number of setups."
              },
              {
                question: "How many photos will I receive?",
                answer: "You'll receive a selection of professionally edited images within two weeks of the shoot, typically 10-15 final images."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 