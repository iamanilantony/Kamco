"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// Define types for props
interface AwardCardProps {
  title: string;
  description: string;
}

// AwardCard Component
const AwardCard: React.FC<AwardCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col m-2 items-center justify-between h-full p-6 bg-white rounded-lg text-center ">
      {/* Title */}
      <h2 className="text-xl font-bold urbanist-font">{title}</h2>
      {/* Subtitle */}
      <p className="text-sm text-black inter-font">{description}</p>
      {/* Placeholder Image */}
      <div className="flex items-center justify-center">
        <Image
          height={80}
          width={80}
          draggable={false}
          src="/new_images/awards/star.webp"
          alt="Award Icon"
        />
      </div>
    </div>
  );
};

// Define types for awards data
interface Award {
  title: string;
  description: string;
}

// Awards Data
const awardsData: Award[] = [
  {
    title: "FACT MKK NAYAR MEMORIAL PRODUCTIVITY AWARDS 2019-20",
    description:
      "Second Best Productivity Performance in Industry to KAMCO, Palakkad Unit",
  },
  {
    title: "AUTODESK IMAGINE AWARD 2021",
    description: "Design and Manufacturing Categories",
  },
  {
    title: "SAFETY AWARD 2009",
    description:
      "First Prize for Outstanding Performance in Industrial Safety issued by Dept. of Factories & Boilers",
  },
  {
    title: "CERTIFICATE OF INDUSTRIAL SAFETY AWARD 2002",
    description: "Issued by National Safety Council of India",
  },
  {
    title: "INDUSTRY EXCELLENCE AWARD 1999",
    description: "Issued by The Institution of Engineers [India]",
  },
  {
    title: "INDUSTRY EXCELLENCE AWARD 1998",
    description: "Issued by The Institution of Engineers [India]",
  },
  {
    title: "PRODUCTIVITY AWARD 1989-90",
    description: "By Kerala State Productivity Council",
  },
  {
    title: "PRODUCTIVITY AWARD 1987-88",
    description: "Issued by Kerala State Productivity Council",
  },
];

// Awards Section Component
const Awards: React.FC = () => {
  const swiperRef = useRef(null);
  return (
    <div className="p-4 md:p-16 my-16 md:my-12 urbanist-font flex flex-col md:flex-row items-center justify-center gap-3">
      <Image
        height={300}
        width={400}
        draggable={false}
        src="/new_images/awards/award.webp"
        alt="Award Main Image"
        className="h-auto w-full md:w-[40%] rounded-3xl"
      />
      <div className="flex flex-col items-center justify-center w-full md:w-3/5 h-full mt-8 md:mt-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          allowTouchMove={false}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          className="w-full h-full min-h-[500px]"
          onSwiper={(swiper) => {
            //@ts-ignore
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awardsData.slice(0, 4).map((award, index) => (
                <AwardCard
                  key={index}
                  title={award.title}
                  description={award.description}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awardsData.slice(4, 8).map((award, index) => (
                <AwardCard
                  key={index}
                  title={award.title}
                  description={award.description}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-center md:justify-end gap-8 mt-8 w-full md:w-1/6 mb-4 md:mb-0">
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
    </div>
  );
};

export default Awards;
