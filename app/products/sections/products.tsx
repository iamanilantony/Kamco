"use client";

import { Button } from "@/components/UI/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import products from "@/public/data/productListNew";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const ProductsCard = ({
  title,
  imgPath,
  codeName,
}: {
  title: string;
  imgPath: string;
  codeName: string;
}) => {
  return (
    <Link href={`/products`}>
      <div className="overflow-hidden w-[90vw] sm:w-[calc(50vw-25px)] md:w-[calc(25vw-85px)] relative aspect-square bg-white rounded-xl border border-gray-300 p-4 cursor-pointer group flex flex-col items-center justify-between">
        <h1 className="text-2xl font-bold mt-1 z-10 relative text-left w-full text-ellipsis">
          {title}
        </h1>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            height={250}
            width={250}
            src={imgPath}
            alt={title}
            className="object-contain group-hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'>
            <div className='aspect-video relative bg-gray-200'>
               <Image src={imgPath} alt={title} layout='fill' objectFit='cover' />
            </div>
            <div className='p-4'>
               <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
            </div>
         </div> */}
    </Link>
  );
};

const Products = () => {
  // State to keep track of selected filter
  const searchparam = useSearchParams();
  const initailFilter = searchparam?.get("category");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    initailFilter?.toString() || null
  );

  // Button filter options
  const filterOptions = [
    {
      label: "Land Preparation",
      img: "/new_images/products/bg_removed/landprep.webp",
    },
    {
      label: "Harvesting",
      img: "/products/PR-041_120B.png",
    },
    {
      label: "Intercultivation",
      img: "/products/Garden Tiller PNG.png",
    },
    {
      label: "De weeding",
      img: "/products/PR-036RemoveBackground.png",
    },
    {
      label: "Garden Tools/ Irrigation",
      img: "/products/Pumpset Image Preview.png",
    },
    {
      label: "Plant Protection",
      img: "/products/Drone Background Removed.png",
    },
  ];

  // Filter products based on the selected filter
  const filteredProducts = selectedFilter
    ? products.filter(
        (product) =>
          product.name?.toLowerCase().includes(selectedFilter.toLowerCase()) ||
          product.category?.toLowerCase().includes(selectedFilter.toLowerCase())
      )
    : products;

  return (
    <div
      id="product-grid"
      className="flex flex-col space-y-8 justify-start items-center md:items-start  urbanist-font px-4 md:px-16 min-h-screen mt-12"
    >
      <h2 className="text-2xl text-left font-bold tracking-tight text-[#274321] sm:text-3xl lg:text-4xl">
        Products
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filterOptions.map((option, index) => (
          // <Button
          //   key={index}
          //   onClick={() =>
          //     setSelectedFilter(
          //       selectedFilter === option.label ? null : option.label
          //     )
          //   }
          //   className={`bg-[#C0EBA6] outline outline-[0.5px] outline-[#5B5B5B] rounded-2xl text-base md:text-lg urbanist-font text-black p-8 hover:bg-[#C0EBA6] hover:outline-[#5B5B5B] transition-all max-sm:w-full max-sm:justify-between ${
          //     selectedFilter === option.label ? "bg-[#C0EBA6] font-bold" : ""
          //   }`}
          // >
          //   <Image
          //     src={option.img}
          //     alt={option.img}
          //     width={50}
          //     height={50}
          //     className="mr-2"
          //   />
          //   {option.label}
          // </Button>

          <Button
            variant="secondary"
            className={cn(
              "bg-white border border-green-400  w-full sm:w-auto  text-black h-auto py-3 px-6 flex items-center gap-3 text-base",
              selectedFilter === option.label &&
                "bg-green-800 text-white hover:bg-green-800 border-none"
            )}
            key={index}
            onClick={() =>
              setSelectedFilter(
                selectedFilter === option.label ? null : option.label
              )
            }
          >
            <Image
              src={option.img}
              alt={option.img}
              width={72}
              height={72}
              className="object-contain"
            />
            <span>{option.label}</span>
          </Button>
        ))}
      </div>

      {/* Search Input */}
      <div className="rounded-2xl border border-gray-300 flex items-center p-2 md:p-4 gap-2 w-full">
        <SearchSVG />
        <input
          type="text"
          placeholder="Search for Tractors, Tillers, Reapers, Plant protection, Land preparations....."
          className="w-full border-0 focus:ring-0 focus:outline-none"
          onChange={(e) => setSelectedFilter(e.target.value)}
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8  pb-32 w-full ">
        {filteredProducts.map((product, index) => (
          <ProductsCard
            key={index}
            title={product.name}
            imgPath={product.src}
            codeName={product.codeName}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

const SearchSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
      stroke="#5B5B5B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
