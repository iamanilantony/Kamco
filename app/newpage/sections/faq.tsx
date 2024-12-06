"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
// import { motion } from "framer-motion";

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: "How can I become a dealer of KAMCO?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How to locate the nearest dealer?",
      description:
        'To find the nearest Kamco dealer, use our "Explore All Dealers" feature on the website. This tool lets you easily locate dealers by filtering based on locality or state. You can also sort results to find the most convenient option. This way, you can quickly connect with a dealer nearby to explore our products in person and get expert advice.',
    },
    {
      title: "Does Kamco provide maintenance and repair services?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How do I request support for my Kamco equipment?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Where can I find user manuals and technical documents?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How can I become a dealer of KAMCO?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How to locate the nearest dealer?",
      description:
        'To find the nearest Kamco dealer, use our "Explore All Dealers" feature on the website. This tool lets you easily locate dealers by filtering based on locality or state. You can also sort results to find the most convenient option. This way, you can quickly connect with a dealer nearby to explore our products in person and get expert advice.',
    },
    {
      title: "Does Kamco provide maintenance and repair services?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How do I request support for my Kamco equipment?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Where can I find user manuals and technical documents?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-[80vw] mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 urbanist-font">
          <h3 className="text-xl text-[rgb(52,121,40)] leading-snug">FAQs</h3>
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 inter-font w-full">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {faqs.slice(0, 5).map((faq, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div
                  className={`p-4 md:p-6 md:px-20 rounded-lg transition-colors max-w-full bg-[#fffbe6]`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.title}
                    </h3>
                    <span className="text-xl font-bold">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                </div>
                <div
                  className={cn(
                    "p-4 md:p-6 md:px-20 rounded-lg bg-[#c0eba6]",
                    activeIndex === index ? "block" : "hidden"
                  )}
                >
                  <p className="mt-3 inter-font text-sm">{faq.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {faqs.slice(5).map((faq, index) => (
              <div className="flex flex-col gap-2" key={index + 5}>
                <div
                  className={`p-4 md:p-6 md:px-20 rounded-lg transition-colors max-w-full bg-[#fffbe6]`}
                  onClick={() => toggleAccordion(index + 5)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.title}
                    </h3>
                    <span className="text-xl font-bold">
                      {activeIndex === index + 5 ? "-" : "+"}
                    </span>
                  </div>
                </div>
                <div
                  className={cn(
                    "p-4 md:p-6 md:px-20 rounded-lg bg-[#c0eba6]",
                    activeIndex === index + 5 ? "block" : "hidden"
                  )}
                >
                  <p className="mt-3 inter-font text-sm">{faq.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
