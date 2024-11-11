'use client'

import Slider from "react-slick";
import { useState } from "react";
import Link from "next/link";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of slides with different subtitles
  const slides = [
    {
      image: "/IMG1112135.jpg",
      subtitle: "Unleashing the power of innovation—tools that turn hard work into unstoppable growth, enabling greater efficiency and sustainable success.",
    },
    {
      image: "/IMG2222135.jpg",
      subtitle: "Empowering farmers with cutting-edge technology and sustainable solutions for success.",
    },
    {
      image: "/IMG3332135.jpg",
      subtitle: "Building a sustainable future with smarter agricultural tools for every farmer.",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setActiveSlide(next), // Change active slide index
  };

  return (
    <div
      className="relative flex flex-col justify-center items-start min-h-max gap-8 px-2 md:px-20 mb-24 md:mt-2 md:mb-4 mt-18 h-[35rem]"
    >
      {/* Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col space-y-4 w-full md:w-1/2 items-start animate__animated animate__fadeIn animate__delay-[0.05s]">
              <h1 className="text-white text-left text-4xl md:text-6xl font-semibold mb-4 text-left animate-bounce-up">
                About Us
              </h1>

              <p className="text-white font-medium text-base w-full md:w-3/4 mb-4 font-sans text-left animate__animated animate__fadeIn animate__delay-1s animate__bounceInUp">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Mobile View */}
      <div className="block md:hidden mb-4 px-8">
        <select
          className="w-full p-2 border rounded-md"
          value={activeSlide}
          onChange={(e) => setActiveSlide(Number(e.target.value))}
        >
          {slides.map((_, index) => (
            <option key={index} value={index}>
              Slide {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HeroSlider;
