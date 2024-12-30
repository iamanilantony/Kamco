"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Animatedheading from "@/components/new_ui/animatedheading";

const Categories = () => {
  const router = useRouter();
  const itemsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".ani-card-1", {
        opacity: 1,
        scale: 1,
        delay: 0.1,
        ease: "power2.inOut",

        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 97%",
          end: "50% 80%",
          scrub: 1,
          // markers: true,
        },
      });
    },
    { scope: itemsRef }
  );
  useGSAP(
    () => {
      gsap.to(".ani-card-2", {
        opacity: 1,
        scale: 1,
        delay: 0.1,
        ease: "power2.inOut",

        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 82%",
          end: "bottom 75%",
          scrub: 1,
          // markers: true,
        },
      });
    },
    { scope: itemsRef }
  );

  const items = [
    {
      imgSrc: "/new_images/categories/landPreparation.webp",
      text: "Land Preparation",
    },
    {
      imgSrc: "/new_images/categories/plantProtection.webp",
      text: "Plant Protection",
    },
    {
      imgSrc: "/new_images/categories/deweeding.webp",
      text: "De Weeding",
    },
    {
      imgSrc: "/new_images/categories/harvesting.webp",
      text: "Harvesting",
    },
    { imgSrc: "/new_images/categories/gardenTools.webp", text: "Garden Tools" },
    { imgSrc: "/new_images/categories/kamco.webp", text: "KAMCO-lite" },
  ];

  return (
    <div className="max-w-[94vw] mx-auto flex flex-col justify-center items-center gap-8 py-10 pt-14">
      {/* Title */}
      {/* <h2 className='text-4xl font-bold text-center text-gray-900 urbanist-font'>Categories</h2> */}
      {/* <div className="flex justify-center w-full">
        <h2 className="mb-0 text-2xl text-center font-bold tracking-tight text-[#274321] sm:text-3xl lg:text-4xl">
          Categories
        </h2>
      </div> */}
      <Animatedheading>Categories</Animatedheading>

      {/* Grid Section */}
      <div
        ref={itemsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative group rounded-lg overflow-hidden shadow-lg cursor-pointer ${
              index > 2 ? "ani-card-2" : "ani-card-1"
            } opacity-0 scale-50`}
            onClick={() =>
              router.push(`/products?category=${encodeURIComponent(item.text)}`)
            }
          >
            {/* Image */}
            <Image
              src={item.imgSrc}
              alt={item.text}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              width={600}
              height={336}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold urbanist-font">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
