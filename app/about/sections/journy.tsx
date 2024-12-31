"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import history from "@/public/data/history";
import { cn } from "@/lib/utils";

const Journy = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [ismobile, setismobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setismobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleYearClick = (index: number) => {
    // @ts-ignore
    swiperRef.current?.slideToLoop(index);
    setActiveIndex(index);
  };

  return (
    <div className="p-4 md:p-8 urbanist-font my-16 space-y-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center w-full mb-4 md:mb-6">
        Our Journey Over The Years
      </h2>

      <div className="flex flex-col items-center">
        <div className="items-center hidden md:flex">
          {/* Left Arrow */}
          <button
            // @ts-ignore
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-700 transition"
          >
            &#8592;
          </button>

          {/* Timeline Container */}
          <div className="flex items-center mx-4 bg-yellow-50 rounded-md shadow-md border border-black overflow-hidden">
            {history.map((item, index) => (
              <div
                key={index}
                onClick={() => handleYearClick(index)}
                className={`p-5 py-3 border-r border-black last:border-r-0 text-black cursor-pointer ${
                  index === activeIndex
                    ? "bg-[#C0EBA6] font-bold border-x"
                    : "border-none"
                }`}
              >
                {item.year}
              </div>
            ))}
          </div>

          <button
            // @ts-ignore
            onClick={() => swiperRef.current?.slideNext()}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-700 transition"
          >
            &#8594;
          </button>
        </div>
      </div>

      <Swiper
        className="justify-center items-center flex"
        modules={[EffectCoverflow, Pagination, Navigation]}
        spaceBetween={ismobile ? 500 : -500}
        slidesPerView={ismobile ? 1 : 3}
        loop={true}
        effect="coverflow"
        initialSlide={0}
        coverflowEffect={{
          rotate: 0,
          stretch: ismobile ? 0 : 10,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        }}
        centeredSlides={true}
        onSwiper={(swiper) => {
          //@ts-ignore
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {history.map((facility, index) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                "relative rounded-xl overflow-hidden h-full shadow-lg min-w-[800px] transition-transform",
                index === activeIndex ? "scale-100" : "scale-90"
              )}
            >
              <Image
                height={500}
                width={500}
                src={facility.image}
                alt={facility.description}
                className="w-full h-[480px]  object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 z-10 text-left bg-black/60 text-white p-8">
                <h3 className="text-2xl font-semibold mb-5 urbanist-font">
                  {facility.year}
                </h3>
                <p className="inter-font">{facility.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Journy;
