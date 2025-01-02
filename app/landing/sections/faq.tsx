"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Animatedheading from "@/components/new_ui/animatedheading";

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
      "What are the key benefits of choosing KAMCO’s agricultural machinery?",
    description:
      "KAMCO’s machinery is known for its durability, efficiency, and affordability. Additionally, the company ensures reliable after-sales service and readily available spare parts.",
  },
  {
    title: "What are the eligibility criteria to become a KAMCO dealer?",
    description:
      "To become a dealer, applicants must meet specific financial, infrastructure, and experience criteria outlined in the dealer registration guidelines available on the website.",
  },
  {
    title: "How can I become a registered dealer for KAMCO?",
    description:
      "Dealers can apply by filling out the online registration form available on KAMCO’s website. The application will be reviewed, and selected dealers will be contacted for further steps.",
  },
  {
    title:
      "Will KAMCO assist farmers with SMAM registration and other related procedures?",
    description:
      "Yes, KAMCO offers support and guidance for farmers to complete SMAM (Sub-Mission on Agricultural Mechanization) registration and other government procedures required for effective farming practices.",
  },
  {
    title: "Does KAMCO provide training or marketing support for its dealers?",
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

const AccordionItem: React.FC<{
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ index, question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className="mb-4 overflow-hidden rounded-lg bg-[#fffbe6] flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        className="flex w-full items-center justify-between rounded-lg bg-yellow-50/60 p-4 text-left text-lg font-medium text-gray-900 hover:bg-yellow-50 focus:outline-none focus-visible:shadow-[0_0_0_2px_rgba(0,0,0,0.1)]"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="pr-6">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-green-600" />
          ) : (
            <Plus className="h-5 w-5 text-green-600" />
          )}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="bg-[#c0eba6] rounded-b-lg text-left flex-grow"
          >
            <motion.div
              variants={{ collapsed: { y: -10 }, open: { y: 0 } }}
              transition={{ duration: 0.3 }}
              className="px-4 py-4 text-gray-600"
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      className="py-6 md:py-16 pb-4  bg-yellow-50/20 max-w-[94vw] mx-auto"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <Animatedheading className="md:mb-8 mb-6">
          Frequently Asked Questions
        </Animatedheading>
        {/* FAQ Grid */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 md:max-w-6xl mx-auto">
          <div className="flex flex-col gap-3 md:w-1/2">
            {faqs.slice(0, 5).map((faq, index) => (
              <AccordionItem
                index={index}
                key={index}
                question={faq.title}
                answer={faq.description}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3 md:w-1/2">
            {faqs.slice(5).map((faq, index) => (
              <AccordionItem
                index={index + 5}
                key={index + 5}
                question={faq.title}
                answer={faq.description}
                isOpen={openIndex === index + 5}
                onClick={() =>
                  setOpenIndex(openIndex === index + 5 ? null : index + 5)
                }
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
