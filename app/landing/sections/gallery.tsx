"use client";

import useIsMobile from "@/lib/hooks/useIsMobile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  const imagesToShow = 8;
  const router = useRouter();
  const { ismobile } = useIsMobile();

  return (
    <div className="p-4 flex flex-col justify-center items-center max-w-[94vw] mx-auto">
      <div className="flex justify-start w-full mb-8">
        <h2 className="mb-0 text-2xl text-left font-bold tracking-tight text-[#274321] sm:text-3xl lg:text-4xl">
          Image Gallery
        </h2>
      </div>

      <Marquee
        gradient={true}
        speed={80}
        gradientColor="white"
        gradientWidth={ismobile ? 20 : 50}
        pauseOnClick={true}
        className="h-full py-4 overflow-hidden"
      >
        {Array.from({ length: imagesToShow }).map((_, index) => (
          <div
            className="relative mx-2 group cursor-pointer"
            onClick={() => router.push("/gallery")}
          >
            <Image
              key={index}
              src={`/new_images/gallery/${index + 1}.JPG`}
              alt="Gallery Image"
              className="rounded-lg parall-img aspect-square shadow-lg w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              width={300}
              height={300}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"></div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
