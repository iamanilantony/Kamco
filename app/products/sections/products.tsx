"use client"

import { Button } from "@/components/UI/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import products from "@/public/data/productListNew";

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
    <div className="overflow-hidden w-full sm:w-[calc(50vw-30px)] md:w-[calc(25vw-85px)] relative h-80 bg-white rounded-xl border border-[#5B5B5B] p-4 cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px]">
      <Link href={`/products/${codeName}`}>
        <h1 className="text-xl font-bold mt-1 z-10 relative text-left w-full transition-colors duration-300 ease-in-out group-hover:text-[#3b6631]">
          {title}
        </h1>
        <Image
          height={200}
          width={200}
          src={imgPath}
          alt={title}
          className="w-full h-full object-contain translate-x-10 translate-y-10 absolute z-0 bottom-0 right-0 transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:translate-x-[-5px] group-hover:translate-y-[-5px]"
        />
      </Link>
    </div>
  );
};

const Products = () => {
  // State to keep track of selected filter
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  // Button filter options
  const filterOptions = [
    "land preparation",
    "Plant Protection",
    "de-weeding",
    "Harvesting",
    "Garden Tools",
  ];

  // Filter products based on the selected filter
  const filteredProducts = selectedFilter
    ? products.filter((product) =>
        product.category
          ?.toLowerCase()
          .includes(selectedFilter.toLowerCase())
      )
    : products;

  return (
    <div className="flex flex-col space-y-8 justify-start max-sm:justify-center items-start max-sm:items-center urbanist-font px-4 md:px-16 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold">Products</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filterOptions.map((product, index) => (
          <Button
            key={index}
            onClick={() =>
              setSelectedFilter(selectedFilter === product ? null : product)
            }
            className={`bg-[#FFFBE6] outline outline-[0.5px] outline-[#5B5B5B] rounded-xl text-sm md:text-lg urbanist-font text-black p-4 md:p-8 hover:bg-[#c6b23e] hover:outline-[#5B5B5B] ${
              selectedFilter === product ? "bg-[#FFD700] font-bold" : ""
            }`}
          >
            {product}
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
      <div className="flex flex-wrap gap-4 md:gap-12 pt-8 pb-32">
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
