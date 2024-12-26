"use client";
import { ImageSlider } from "@/components/new_ui/imageslider";
import { motion } from "framer-motion";
import SplitText from "@/components/new_ui/splittext";

import Animatedbutton from "@/components/new_ui/animatedbutton";
import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(ref.current, {
      opacity: 1,
      scrollTrigger: {
        start: "2% top",
        end: "bottom top",
      },
    });
  });

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
        className="w-full h-full object-cover rounded-2xl md:object-cover"
        src="/new_images/hero.webm"
      />

      <div className=" absolute top-1/2 left-0 text-white w-full transform -translate-y-1/2 px-4 md:px-12 flex max-sm:flex-col justify-between items-center">
        <div className="max-sm:text-center md:text-left">
          <SplitText
            blured
            delay={0}
            text="A BOON FOR THE FARMERS,"
            staggerAmount={1.3}
            className="exo-font font-light text-2xl sm:text-5xl text-left md:text-6xl"
          />
          <SplitText
            blured
            delay={0.9}
            text="A GAIN GOT THE NATION."
            staggerAmount={1.3}
            className="md:mt-4 exo-font font-light text-2xl sm:text-5xl text-left md:text-6xl"
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
          className="max-sm:text-center text-right text-xs sm:text-sm md:text-base mt-4 md:mt-0"
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
    <div className="flex justify-start items-center flex-col gap-2 md:min-h-[80vh] px-4 md:px-0">
      <ImageSlider
        showArrows={false}
        showDots={false}
        className="max-h-[80vh] w-full md:w-[94vw] mt-2"
        slides={slides}
      />
      <div className="max-w-full md:max-w-[94vw] w-full flex flex-col md:flex-row justify-between">
        {/* Stats Section */}
        <div className="pt-8  flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
          {/* Stats */}
          <div
            ref={ref}
            className="flex justify-center opacity-0 lg:justify-start space-x-6 md:space-x-20 ml-4 md:ml-12"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
                50+
              </h2>
              <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
                Years of <br /> Experience
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
                80+
              </h2>
              <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
                Dealers <br /> Across Country
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
                1L+
              </h2>
              <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
                Happy <br /> Customers
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900">
                900+
              </h2>
              <p className="text-xs sm:text-sm md:text-lg font-medium text-gray-600">
                Skilled <br /> Manpower
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 mt-6 md:mt-0 px-4 md:px-0">
          {/* <Link
            href="https://www.kamcoindia.com/dealers"
            className="bg-[#274321] text-white py-3 md:py-5 px-8 md:px-16 rounded-2xl hover:bg-[#3b6631] text-base sm:text-lg md:text-2xl urbanist-font cursor-pointer z-10 transition-all duration-300 ease-in-out"
          >
            Register Now
          </Link>
          <Link
            href="/dealers"
            className="bg-[#d7ffbf] py-3 md:py-5 px-8 md:px-16 rounded-2xl hover:bg-[#beff96] text-base sm:text-lg md:text-2xl urbanist-font cursor-pointer z-10 transition-all duration-300 ease-in-out"
          >
            Explore Dealers
          </Link> */}
          <Animatedbutton
            navigateto={"https://www.kamcoindia.com/dealers"}
            delay={1.2}
            className="bg-[#274321] text-white hover:bg-[#3b6631]"
          >
            Register Now
          </Animatedbutton>
          <Animatedbutton
            navigateto={"/dealers"}
            delay={1.2}
            className="bg-[#d7ffbf] hover:bg-[#beff96]"
          >
            Explore Dealers
          </Animatedbutton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
