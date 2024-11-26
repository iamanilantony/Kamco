'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "How can I become a dealer of KAMCO?",
    answer: "To become a dealer of KAMCO, you must apply through our dealer registration portal or reach out to our sales team to understand the requirements and process."
  },
  {
    question: "How to locate the nearest dealer?",
    answer: "To find the nearest Kamco dealer, use our 'Explore All Dealers' feature on the website. This tool lets you easily locate dealers by filtering based on locality or state. You can also sort results to find the most convenient option. This way, you can quickly connect with a dealer nearby to explore our products in person and get expert advice."
  },
  {
    question: "Does Kamco provide maintenance and repair services?",
    answer: "Yes, Kamco offers maintenance and repair services for all our products. You can contact the nearest dealer for service or contact kamco number or email."
  },
  {
    question: "How do I request support for my Kamco equipment?",
    answer: "You can request support for your Kamco equipment contacting us on our kamco number or email. Our customer support team is available to assist you with troubleshooting, maintenance, or repairs."
  },
  {
    question: "Where can I find user manuals and technical documents?",
    answer: "User manuals and technical documents for all Kamco products are available on our website. You can download them from the 'Support' section for each product."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle answer visibility
  };

  return (
    <div className="w-full py-4 px-4 md:px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="">
            <div
              className="flex justify-between items-center cursor-pointer p-4 py-6 bg-[#FFFBE6] rounded-lg transition-all duration-200"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 bg-[#C1EBA6] rounded-lg text-left">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
