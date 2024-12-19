"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Facilities = () => {
  const facilities = [
    {
      title: "Tractor Manufacturing Unit",
      description:
        "Athani houses a specialized unit for Tractor production, featuring an advanced automated conveyor assembly system for durability and power.",
      imageUrl: "/new_images/about/image1.webp",
    },
    {
      title: "Athani Unit - Power Hub",
      description:
        "Located at our head office, the Athani facility houses KAMCO’s primary production lines for Power Tillers, including the KMB200, Super DI, and Super DI-SS models, as well as Tractors.",
      imageUrl: "/new_images/about/image2.webp",
    },
    {
      title: "Kalamassery Unit - Diesel Engine E...",
      description:
        "Our second unit, established in 1992 in Kalamassery, specializes in Diesel Engine production, forming the core of our Power Tiller and Tractor lineup.",
      imageUrl: "/new_images/about/image3.webp",
    },
    {
      title: "Kalamassery Unit Expansion",
      description:
        "A new addition to our Kalamassery facility, expanding production capacity for modern power tillers and engine solutions that includes a state-of-the-art manufacturing unit for Power Tillers",
      imageUrl: "/new_images/about/image4.webp",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="p-4 md:p-8 urbanist-font">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl md:text-5xl font-bold text-center w-full mb-4 md:mb-6">
          Our Manufacturing Facilities
        </h2>
        <div className="flex items-center justify-center md:justify-end gap-4 w-full md:w-1/6 mb-4 md:mb-0">
          <button
            //@ts-ignore
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-700 transition"
          >
            &#8592;
          </button>
          <button
            //@ts-ignore
            onClick={() => swiperRef.current?.slideNext()}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-700 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={1}
        slidesOffsetBefore={100}
        onSwiper={(swiper) => {
          //@ts-ignore
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {facilities.map((facility, index) => (
          <SwiperSlide key={index}>
            <div className="border-[#969696] rounded-lg border p-4 max-w-full md:max-w-xl my-4 md:my-8 h-full">
              <Image
                height={500}
                width={500}
                src={facility.imageUrl}
                alt={facility.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl text-black font-semibold mb-2 md:mb-4">
                {facility.title}
              </h3>
              <p className="text-gray-600 inter-font text-sm md:text-base">
                {facility.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Facilities;
