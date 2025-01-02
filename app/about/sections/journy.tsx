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
import useIsMobile from "@/lib/hooks/useIsMobile";

const Journy = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { ismobile } = useIsMobile();
  const handleYearClick = (index: number) => {
    // @ts-ignore
    swiperRef.current?.slideToLoop(index);
    setActiveIndex(index);
  };

  return (
    <div className="p-4 md:p-8 urbanist-font md:mt-20 mt-8 md:space-y-16 space-y-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center w-full mb-4 md:mb-6">
        Our Journey Over The Years
      </h2>

      <div className="flex-col items-center hidden md:flex">
        <div className="items-center flex">
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

      {!ismobile ? (
        <Swiper
          className="justify-center items-center flex"
          modules={[EffectCoverflow, Pagination, Navigation]}
          spaceBetween={-500}
          slidesPerView={3}
          loop={true}
          effect="coverflow"
          initialSlide={0}
          coverflowEffect={{
            rotate: 0,
            depth: 150,
            slideShadows: false,
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
      ) : (
        <Swiper
          className="justify-center items-center flex"
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          initialSlide={0}
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
                  "relative rounded-xl overflow-hidden h-full shadow-lg transition-transform"
                )}
              >
                <Image
                  height={800}
                  width={800}
                  src={facility.image}
                  alt={facility.description}
                  className="w-full h-[480px]  object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 z-10 text-left bg-black/60 text-white p-4">
                  <h3 className="text-xl font-semibold mb-3 urbanist-font">
                    {facility.year}
                  </h3>
                  <p className="inter-font">{facility.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Journy;
