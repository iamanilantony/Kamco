"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

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

  const ref = useRef<HTMLDivElement>(null);
  // useGSAP(
  //   () => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.from(".innerdiv", {
  //       opacity: 0,
  //       y: 500,
  //       ease: "power2.inOut",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: ref.current,
  //         start: "30% 55%",
  //         end: "bottom 55%",
  //         // scrub: 1,
  //         markers: true,
  //       },
  //     });
  //   },
  //   { scope: ref }
  // );
  const inview = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (inview) {
      controls.start("visible");
      console.log("invirew");
    }
  }, [inview]);

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section ref={ref} className="my-32 px-4 md:px-6">
      <div className="max-w-[80vw] mx-auto md:px-32 innerdiv">
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col justify-center items-center gap-3 urbanist-font"
        >
          <h3 className="text-xl md:text-2xl text-[rgb(52,121,40)] leading-snug">
            FAQs
          </h3>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-6 inter-font w-full">
          <motion.div
            animate={controls}
            initial="hidden"
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col gap-6 w-full md:w-1/2"
          >
            {faqs.slice(0, 5).map((faq, index) => (
              <motion.div className="flex flex-col gap-2" key={index}>
                <div
                  className={`p-4 md:p-6 md:px-20 rounded-lg transition-colors max-w-full bg-[#fffbe6]`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {faq.title}
                    </h3>
                    <span className="text-xl font-bold">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 md:p-6 md:px-20 rounded-lg bg-[#c0eba6]"
                    >
                      <p className="mt-3 inter-font text-sm md:text-base">
                        {faq.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col gap-6 w-full md:w-1/2"
          >
            {faqs.slice(5).map((faq, index) => (
              <motion.div
                layout
                className="flex flex-col gap-2"
                key={index + 5}
              >
                <div
                  className={`p-4 md:p-6 md:px-20 rounded-lg transition-colors max-w-full bg-[#fffbe6]`}
                  onClick={() => toggleAccordion(index + 5)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {faq.title}
                    </h3>
                    <span className="text-xl font-bold">
                      {activeIndex === index + 5 ? "-" : "+"}
                    </span>
                  </div>
                </div>
                <AnimatePresence>
                  {activeIndex === index + 5 && (
                    <motion.div
                      key={index + 5}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 md:p-6 md:px-20 rounded-lg bg-[#c0eba6]"
                    >
                      <p className="mt-3 inter-font text-sm md:text-base">
                        {faq.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
