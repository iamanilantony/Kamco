"use client";
import { ImageSlider } from "@/components/new_ui/imageslider";
import { motion } from "framer-motion";
import SplitText from "@/components/new_ui/splittext";
import React from "react";

const Hero = () => {
  const slides = [
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      key="custom-1"
      className="w-full h-full flex items-center justify-center relative"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-2xl"
        src="/new_images/hero.webm"
      />

      <div className="absolute top-1/2 left-0 text-white w-full transform -translate-y-1/2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div>
          <SplitText
            blured
            delay={1}
            text="Empowering Farmers"
            staggerAmount={0.3}
            className="text-left exo-font font-light text-3xl md:text-6xl"
          />
          <SplitText
            blured
            delay={1.3}
            text="Enriching The Nation"
            staggerAmount={0.3}
            className=" mt-4 text-left exo-font font-light text-2xl md:text-6xl"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="text-right text-sm mt-4 md:mt-0"
        >
          <p>Unleashing the power of innovation—tools that</p>
          <p>turn hard work into unstoppable</p>
          <p>growth, enabling greater efficiency and </p>
          <p>sustainable success.</p>
        </motion.div>
      </div>
    </motion.div>,
  ];
  return (
    <div className="flex justify-start items-center flex-col gap-2 md:min-h-[80vh]">
      <ImageSlider
        showDots={false}
        className="max-h-[50vh] w-full md:w-[94vw] mt-2"
        slides={slides}
      />
      <div className="max-w-full md:max-w-[94vw] w-full flex flex-col md:flex-row justify-between">
        {/* Stats Section */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
          {/* Stats */}
          <div className="flex justify-center lg:justify-start space-x-12 md:space-x-20 ml-4 md:ml-12">
            <div className="text-center ">
              <h2 className="text-4xl md:text-5xl urbanist-font font-bold text-gray-900">
                50+
              </h2>
              <p className="text-base md:text-lg font-medium text-gray-600">
                Years of <br /> Experience
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl urbanist-font font-bold text-gray-900">
                80+
              </h2>
              <p className="text-base md:text-lg font-medium text-gray-600">
                Dealers <br /> Across Country
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl urbanist-font font-bold text-gray-900">
                1L+
              </h2>
              <p className="text-base md:text-lg font-medium text-gray-600">
                Happy <br /> Customers
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl urbanist-font font-bold text-gray-900">
                900+
              </h2>
              <p className="text-base md:text-lg font-medium text-gray-600">
                Skilled <br /> Manpower
              </p>
            </div>
          </div>

          {/* Buttons */}
        </div>
        <div className="flex flex-col space-y-3 mt-6 md:mt-0">
          <button className="bg-[#274321] text-white py-3 md:py-5 px-8 md:px-16 rounded-2xl hover:bg-green-700 text-xl md:text-2xl urbanist-font">
            Register Now
          </button>

          <button className="bg-[#d7ffbf] py-3 md:py-5 px-8 md:px-16 rounded-2xl hover:bg-green-700 text-xl md:text-2xl urbanist-font">
            Explore Dealers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;