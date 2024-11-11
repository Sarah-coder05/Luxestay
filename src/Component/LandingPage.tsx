import React, { useState } from 'react';
import { LandingPageProps } from './LandingPageProps';
import { FaPlus, FaMinus } from 'react-icons/fa';
import hotel from './Asset/Hotel Illustration.png';
import house from './Asset/House Illustration.png';

const LandingPage: React.FC<LandingPageProps> = ({ header, benefits, faq }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="font-sans">
      <section
        className="relative w-full bg-cover bg-center h-[500px] min-h-[600px]"
        style={{ backgroundImage: `url(${header.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center text-white px-6 md:px-24 gap-10 md:gap-20 py-8 md:py-10 justify-evenly">
          <div className="text-start w-full md:w-1/2 max-w-lg">
            <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold italic">{header.title}</h1>
            <p className="text-sm mt-4">{header.subtitle}</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2 items-center">
            <button className="rounded-full text-white bg-blue-800 text-sm p-2">
              What would you like to list?
            </button>
            <div className="bg-white rounded-lg text-center shadow-lg p-2 text-gray-800 w-full sm:w-3/4 md:w-full">
              <img src={hotel} className="mx-auto" alt="Hotel Illustration" />
              <h3 className="font-bold">{header.options[0].label}</h3>
              <p className="text-sm">{header.options[0].description}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-2 text-center text-gray-800 w-full sm:w-3/4 md:w-full">
              <img src={house} className="mx-auto" alt="House Illustration" />
              <h3 className="font-bold">{header.options[1].label}</h3>
              <p className="text-sm">{header.options[1].description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">With LuxeStay, You:</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {benefits.benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border shadow-lg flex flex-col items-start text-start">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold">{benefit.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto flex flex-col md:flex-row">
        <h2 className="text-4xl font-bold md:w-1/2 mb-8 md:mb-0">Your questions, answered</h2>
        <div className="space-y-4 md:w-1/2">
          {faq.faqs.slice(0, 6).map((faqItem, index) => (
            <div key={index}>
              <div className="flex justify-between items-center pb-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="text-left text-gray-700 font-medium text-lg flex-1"
                >
                  {faqItem.question}
                </button>
                <span className="ml-4 rounded-full bg-gray-100 border p-1 cursor-pointer" onClick={() => toggleFAQ(index)}>
                  {openFAQIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {openFAQIndex === index && (
                <p className="text-gray-600 mt-2 border-t pt-4">{faqItem.answer}</p>
              )}
              <hr className="my-4 border-gray-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
