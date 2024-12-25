"use client";

import { Button } from "@/components/UI/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import products from "@/public/data/productListNew";
import { useSearchParams } from "next/navigation";

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
    <Link href={`/products/${codeName}`}>
      <div className="overflow-hidden w-[90vw] sm:w-[calc(50vw-25px)] md:w-[calc(25vw-85px)] relative aspect-square bg-white rounded-xl border border-[#5B5B5B] p-4 cursor-pointer group flex flex-col items-center justify-between">
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
    </Link>
  );
};

const Products = () => {
  // State to keep track of selected filter
  const searchparam = useSearchParams();
  const initailFilter = searchparam?.get("category");
  console.log(initailFilter);
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
      label: "Plant Protection",
      img: "/new_images/products/bg_removed/protection.webp",
    },
    {
      label: "Deweeding",
      img: "/new_images/products/bg_removed/landprep.webp",
    },
    {
      label: "Harvesting",
      img: "/new_images/products/bg_removed/harvesting.webp",
    },
    {
      label: "Garden Tools",
      img: "/new_images/products/bg_removed/garden.webp",
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
      className="flex flex-col space-y-8 justify-start max-sm:justify-center items-start max-sm:items-center urbanist-font px-4 md:px-16 min-h-screen mt-24"
    >
      <h1 className="text-3xl md:text-5xl font-bold">Products</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filterOptions.map((option, index) => (
          <Button
            key={index}
            onClick={() =>
              setSelectedFilter(
                selectedFilter === option.label ? null : option.label
              )
            }
            className={`bg-[#C0EBA6] outline outline-[0.5px] outline-[#5B5B5B] rounded-2xl text-base md:text-lg urbanist-font text-black p-8 hover:bg-[#C0EBA6] hover:outline-[#5B5B5B] transition-all max-sm:w-full max-sm:justify-between ${
              selectedFilter === option.label ? "bg-[#C0EBA6] font-bold" : ""
            }`}
          >
            <Image
              src={option.img}
              alt={option.img}
              width={50}
              height={50}
              className="mr-2"
            />
            {option.label}
          </Button>
        ))}
      </div>

      {/* Search Input */}
      <div className="rounded-2xl border border-[#5B5B5B] flex items-center p-2 md:p-4 gap-2 w-full">
        <SearchSVG />
        <input
          type="text"
          placeholder="Search for Tractors, Tillers, Reapers, Plant protection, Land preparations....."
          className="w-full border-0 focus:ring-0 focus:outline-none"
          onChange={(e) => setSelectedFilter(e.target.value)}
        />
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-start gap-4 md:gap-12 pt-8  pb-32">
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
