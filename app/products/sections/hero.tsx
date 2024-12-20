import { Button } from "@/components/UI/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const products = [
    {
      name: "Power Tillers",
      image: "/new_images/products/icons/img1.webp",
      link: "#",
    },
    {
      name: "Geared Power Rea...",
      image: "/new_images/products/icons/img2.webp",
      link: "#",
    },
    {
      name: "Brush Cutters",
      image: "/new_images/products/icons/img3.webp",
      link: "#",
    },
    {
      name: "Power Reaper",
      image: "/new_images/products/icons/img4.webp",
      link: "#",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-12 md:justify-between items-center md:px-16 py-8 text-left relative">
      <Image
        src="/new_images/products/heroimage.webp"
        alt="hero"
        width={1200}
        height={1200}
        className="object-cover absolute h-full w-full top-0 left-0 "
        draggable={false}
      />
      <div className="absolute h-full w-full top-0 left-0 bg-black/50"></div>
      <div className="container text-white z-10 w-full md:w-1/2 space-y-6 md:space-y-12 p-4 md:p-0 h-full">
        <h1 className="text-4xl md:text-6xl font-bold urbanist-font">
          KAMCO Tractors: Your <br className="hidden md:block" /> Reliable Farm
          Partner
        </h1>
        <p className="mt-2 inter-font text-base md:text-lg">
          Experience the future of farming with KAMCO Tractors. Our robust and
          efficient tractors are designed to handle the toughest terrains and
          the heaviest workloads. With cutting-edge technology and superior
          performance, KAMCO tractors are the perfect solution for modern
          agriculture.
        </p>

        <Button className="bg-[#d7ffbf] py-4 md:py-8 px-8 md:px-16 rounded-2xl text-lg md:text-xl urbanist-font text-black hover:bg-[#a6ff8f]">
          Explore the Tractors
        </Button>
      </div>
      {/* right section */}
      <div className="text-white p-4 md:p-6 rounded-md z-10 w-full md:w-auto mt-8 md:mt-0 space-y-16 max-sm:hidden">
        {/* Section Header */}
        <h2 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6">
          Other Top Products
        </h2>

        {/* Product List */}
        <ul className="space-y-4 md:space-y-8">
          {products.map((product, index) => (
            <li key={index} className="flex items-center justify-between">
              {/* Product Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 md:w-16 md:h-16 object-cover rounded"
                />
                <p className="text-lg md:text-base font-medium">
                  {product.name}
                </p>
              </div>

              {/* Learn More Link */}
              <a
                href={product.link}
                className="text-xs md:text-sm font-medium underline hover:text-gray-300"
              >
                Learn More
              </a>
            </li>
          ))}
        </ul>

        {/* Explore All Products */}
        <div className="text-center mt-6 md:mt-8">
          <a
            href="#"
            className="text-xs md:text-sm font-medium underline hover:text-gray-300"
          >
            Explore All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
