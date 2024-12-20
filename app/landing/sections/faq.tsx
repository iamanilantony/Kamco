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
      title:
        "Is KAMCO the only government company in agriculture mechanization in India?",
      description:
        "Yes, KAMCO is a prominent government company in India specializing in agricultural mechanization. It operates under the Government of Kerala and is dedicated to providing high-quality machinery for farmers.",
    },
    {
      title:
        "Does KAMCO offer a wide range of products for different farming needs?",
      description:
        "Yes, KAMCO provides a diverse range of products tailored to the varying requirements of farmers, such as the type of land, crops, and specific farming practices.",
    },
    {
      title:
        "Will KAMCO assist farmers with SMAM registration and other related procedures?",
      description:
        "Yes, KAMCO offers support and guidance for farmers to complete SMAM (Sub-Mission on Agricultural Mechanization) registration and other government procedures required for effective farming practices.",
    },
    {
      title:
        "What are the key benefits of choosing KAMCO’s agricultural machinery?",
      description:
        "KAMCO’s machinery is known for its durability, efficiency, and affordability. Additionally, the company ensures reliable after-sales service and readily available spare parts.",
    },
    {
      title: "How can I become a registered dealer for KAMCO?",
      description:
        "Dealers can apply by filling out the online registration form available on KAMCO’s website. The application will be reviewed, and selected dealers will be contacted for further steps.",
    },
    {
      title: "What are the eligibility criteria to become a KAMCO dealer?",
      description:
        "To become a dealer, applicants must meet specific financial, infrastructure, and experience criteria outlined in the dealer registration guidelines available on the website.",
    },
    {
      title:
        "Does KAMCO provide training or marketing support for its dealers?",
      description:
        "Yes, KAMCO offers training sessions for dealers to familiarize them with the products and provides marketing materials to support promotional efforts.",
    },
    {
      title: "How can I register as a supplier with KAMCO?",
      description:
        "Prospective suppliers can submit their applications through the Supplier Registration Form on the website, along with the required documents.",
    },
    {
      title: "What are the key criteria for supplier registration?",
      description:
        "Suppliers must demonstrate reliability, financial stability, and prior experience in supplying quality materials as per KAMCO’s standards. Detailed requirements are listed on the registration page.",
    },
    {
      title: "Does KAMCO allow MSME suppliers to participate in tenders?",
      description:
        "Yes, KAMCO encourages MSME suppliers to participate in tenders and provides equal opportunities in accordance with government procurement policies.",
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
    <section ref={ref} className="my-32 px-12">
      <div className="md:max-w-7xl mx-auto innerdiv space-y-12">
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
        <div className="flex flex-col md:flex-row gap-6 inter-font w-full text-left">
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
                  className={`p-4 md:p-6 md:px-12 rounded-lg transition-colors max-w-full bg-[#fffbe6] min-h-[110px] flex justify-start items-center`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center gap-3 cursor-pointer w-full">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
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
                      className="p-4 md:p-6 rounded-lg bg-[#c0eba6] flex justify-center items-center"
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
              <motion.div className="flex flex-col gap-2" key={index + 5}>
                <div
                  className={`p-4 md:p-6 md:px-20 rounded-lg transition-colors max-w-full bg-[#fffbe6] min-h-[110px] flex justify-start items-center`}
                  onClick={() => toggleAccordion(index + 5)}
                >
                  <div className="flex justify-between items-center gap-3 cursor-pointer w-full">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
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
                      className="p-4 md:p-6 rounded-lg bg-[#c0eba6] flex justify-center items-center"
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
