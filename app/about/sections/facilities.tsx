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
      imageUrl: "/Units/ATHANI.JPG",
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
      imageUrl: "/Units/KALAMASSERY.jpeg",
    },
    {
      title: "Kanjikode, Palakkad Unit – Expanding Production",
      description:
        "Established in 1995, the Kanjikode facility in Palakkad contributes to our production of Power Tillers, further expanding our reach and ability to serve India’s farmers with durable, high-quality machinery built for diverse agricultural applications.",
      imageUrl: "/Units/PALAKKAD.jpg",
    },
    {
      title: "Mala, Thrissur Unit – Dedicated to Harvesting Solutions",
      description:
        "Our fourth unit in Mala, Thrissur, focuses on producing Power Reapers. With specialized assembly lines for critical components, the facility is equipped for thorough inspections and testing at every stage, ensuring that each reaper delivers reliability and performance that farmers can depend on.",
      imageUrl: "/Units/MALA.JPG",
    },
    {
      title: "Kannur Unit – Garden Tiller and Power Weeder Innovation",
      description:
        "Inaugurated in 2014, our Kannur facility at Valiyavelicham is dedicated to Garden Tillers and Power Weeders, including models like the B30, K40, and the Eco Leopard Tiller KLW 100D. This unit combines cutting-edge manufacturing practices with stringent quality controls, ensuring that our tillers and weeders are robust, efficient, and versatile for various farming needs.",
      imageUrl: "/Units/KANNUR.jpg",
    },
    {
      title: "Athani Tractor Manufacturing Unit",
      description:
        "Our Athani campus also houses a specialized unit for Tractor production, featuring an advanced, automated conveyor assembly system. Each tractor undergoes rigorous testing to ensure durability, power, and fuel efficiency, aligning with our mission to deliver modern, sustainable solutions for India’s agricultural future.",
      imageUrl: "/new_images/about/image2.webp",
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
        slidesOffsetBefore={0}
        onSwiper={(swiper) => {
          //@ts-ignore
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: { slidesPerView: 1, slidesOffsetBefore: 0 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3, slidesOffsetBefore: 25 },
        }}
        className="h-full"
      >
        {facilities.map((facility, index) => (
          <SwiperSlide key={index}>
            <div className="border-[#969696] aspect-auto rounded-lg border p-4 max-w-full md:max-w-xl my-4 md:my-8 h-full text-left min-h-[550px]">
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
