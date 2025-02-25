'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bringFriend: '',
    artisticInterest: '',
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
    <main className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-md mx-auto px-4 py-12 md:py-16 md:max-w-2xl lg:max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            {step === 1 && (
              <Image
                src="/beach-welcome.png"
                alt="Stunning beach sunset photoshoot"
                fill
                className="object-cover"
                priority
              />
            )}
            {step === 2 && (
              <Image
                src="/beach-friends.jpg"
                alt="Friends enjoying a beach photoshoot"
                fill
                className="object-cover"
                priority
              />
            )}
            {step === 3 && (
              <Image
                src="/beach-artistic.png"
                alt="Artistic beach portrait"
                fill
                className="object-cover"
                priority
              />
            )}
            {step === 4 && (
              <Image
                src="/beach-final.png"
                alt="Professional beach photography"
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
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Free Beach Photo Shoot
                </h1>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    I&apos;m offering a free beach photo shoot opportunity while I&apos;m in town for a short time. Here are the details.
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-gray-600 text-sm md:text-base">
                    <li>The shoot is totally free. There are no hidden fees or costs.</li>
                    <li>1 to 2 hours professional photography session</li>
                    <li>Professional guidance and posing tips</li>
                    <li>You will receive the photos in 2 weeks</li>
                    <li>I am open to any ideas you have for the shoot!</li>
                  </ul>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Bring a Friend
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  It&apos;s very important for me to ensure participants feel comfortable during the shoot. You are welcome to bring any guests that you would like. Or if you want to bring a friend to shoot with, that&apos;s also fine. Let me know if that is something you are interested in!
                </p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="bringFriend"
                      value="yes"
                      onChange={handleChange}
                      checked={formData.bringFriend === 'yes'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">Yes, I&apos;d love to bring a friend!</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="bringFriend"
                      value="no"
                      onChange={handleChange}
                      checked={formData.bringFriend === 'no'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">No, it&apos;s fine</span>
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Beach Photo Shoot
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  The theme for the shoot is an artistic nature or beach photo shoot. You can bring bikinis, swimwear, and/or dresses to the shoot. Please let me know if you have any concerns or questions about the wardrobe or anything else!
                </p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="artisticInterest"
                      value="very-interested"
                      onChange={handleChange}
                      checked={formData.artisticInterest === 'very-interested'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">I&apos;m very interested in this style!</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 md:p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="artisticInterest"
                      value="need-more-info"
                      onChange={handleChange}
                      checked={formData.artisticInterest === 'need-more-info'}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span className="text-gray-700 text-sm md:text-base">I&apos;d like to learn more</span>
                  </label>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 text-center mb-4 md:mb-4">
                  Final Step!
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  Ready to make this happen? Let&apos;s schedule a quick introductory call to discuss your vision for the shoot!
                </p>
                <div className="text-center">
                  <Link
                    href="https://cal.com/aidantorrence/photo-shoot-collab"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Schedule Intro Call
                  </Link>
                </div>
                <div className="mt-6 text-gray-600">
                  <p className="text-xs md:text-sm">
                    During our call, we&apos;ll discuss:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-xs md:text-sm">
                    <li>Available dates and times for the shoot</li>
                    <li>Your vision and ideas</li>
                    <li>Location preferences</li>
                    <li>Any questions you have</li>
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
                  {step === 1 ? 'Get Started' : 'Continue'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
