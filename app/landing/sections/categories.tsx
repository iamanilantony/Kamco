"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();

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
    <div className="max-w-[94vw] mx-auto flex flex-col justify-center items-center gap-8 py-10">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 urbanist-font">
        Categories
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
