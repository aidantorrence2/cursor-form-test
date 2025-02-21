'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BusinessCollab() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    contentInterest: '',
  });

  const totalSteps = 4;

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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-md mx-auto px-4 py-8 md:max-w-2xl lg:max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            {step === 1 && (
              <Image
                src="/beach-welcome.png"
                alt="Professional content creation"
                fill
                className="object-cover"
                priority
              />
            )}
            {step === 2 && (
              <Image
                src="/beach-friends.jpg"
                alt="Social media content examples"
                fill
                className="object-cover"
                priority
              />
            )}
            {step === 3 && (
              <Image
                src="/beach-artistic.png"
                alt="Creative business photography"
                fill
                className="object-cover"
                priority
              />
            )}
            {step === 4 && (
              <Image
                src="/beach-final.png"
                alt="Professional business content"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          <div className="p-4 md:p-8">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-4">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-full h-1 ${
                      index + 1 <= step ? 'bg-blue-500' : 'bg-gray-200'
                    } ${index < totalSteps - 1 ? 'mr-1' : ''}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center">
                Step {step} of {totalSteps}
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Free Social Media Content for Your Business
                </h1>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    I&apos;m offering free social media content creation for Christchurch businesses. Here are the details.
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-gray-600 text-sm md:text-base">
                    <li>Professional photography and content creation at no cost</li>
                    <li>High-quality images optimized for social media</li>
                    <li>2-3 hours of content creation at your location</li>
                    <li>You&apos;ll receive the content within 1 week</li>
                    <li>Perfect for Instagram, Facebook, and other platforms</li>
                  </ul>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Type of Business
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  What type of business do you run? This helps me prepare and plan the best content strategy for your needs.
                </p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="businessType"
                      value="hospitality"
                      onChange={handleChange}
                      checked={formData.businessType === 'hospitality'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Hospitality (Restaurant, Café, Bar)</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="businessType"
                      value="fashion-retail"
                      onChange={handleChange}
                      checked={formData.businessType === 'fashion-retail'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Fashion and Retail</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="businessType"
                      value="service"
                      onChange={handleChange}
                      checked={formData.businessType === 'service'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Service Business</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="businessType"
                      value="online"
                      onChange={handleChange}
                      checked={formData.businessType === 'online'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Online Business / E-commerce</span>
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Content Style
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  What type of content would be most valuable for your business? Select your preferred style and focus.
                </p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="contentInterest"
                      value="product-focused"
                      onChange={handleChange}
                      checked={formData.contentInterest === 'product-focused'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Product-focused content</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="contentInterest"
                      value="lifestyle"
                      onChange={handleChange}
                      checked={formData.contentInterest === 'lifestyle'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Lifestyle and atmosphere</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="contentInterest"
                      value="other"
                      onChange={handleChange}
                      checked={formData.contentInterest === 'other'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Other (we can discuss)</span>
                  </label>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Final Step!
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  Let&apos;s schedule a quick call to discuss your business and content needs! Remember, this service is completely free - there are no hidden fees or costs whatsoever.
                </p>
                <div className="text-center">
                  <a
                    href="https://cal.com/aidantorrence/your-business-collab"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Schedule Call
                  </a>
                </div>
                <div className="mt-6 text-gray-600">
                  <p className="text-xs md:text-sm">
                    During our call, we&apos;ll discuss:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-xs md:text-sm">
                    <li>Your business goals and target audience</li>
                    <li>Content style and brand guidelines</li>
                    <li>Best times for the content creation session</li>
                    <li>Any specific shots or content pieces you need</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-6 md:mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
              )}
              {step < totalSteps && (
                <button
                  onClick={handleNext}
                  className={`${
                    step === 1 ? 'w-full' : ''
                  } px-3 py-2 md:px-4 md:py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 