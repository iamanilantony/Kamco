import { Button } from "@/components/UI/button";
import Image from "next/image";
import React from "react";

const ProductsCard = ({
  title,
  imgPath,
}: {
  title: string;
  imgPath: string;
}) => {
  return (
    <div className="overflow-hidden  w-full sm:w-[calc(50vw-30px)] md:w-[calc(25vw-85px)] relative h-80 bg-white rounded-xl border border-[#5B5B5B] p-4">
      <h1 className="text-xl font-bold mt-1 z-10 relative text-left w-full">
        {title}
      </h1>
      <Image
        height={200}
        width={200}
        src={imgPath}
        alt={title}
        className="w-full h-full object-contain translate-x-10 translate-y-10 absolute z-0 bottom-0 right-0 "
      />
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Power Tillers",
      imgPath: "/new_images/products/powertiller.webp",
    },
    {
      title: "Tractors",
      imgPath: "/new_images/products/tractor1.webp",
    },
    {
      title: "Tractors",
      imgPath: "/new_images/products/tractor1.webp",
    },
    {
      title: "Drones",
      imgPath: "/new_images/products/drone.webp",
    },
    {
      title: "Echo Leopard Power Weeder",
      imgPath: "/new_images/products/echoleopard.webp",
    },
    {
      title: "Echo Leopard Power Weeder",
      imgPath: "/new_images/products/echoleopard.webp",
    },
    {
      title: "Power Tillers",
      imgPath: "/new_images/products/powertiller.webp",
    },
  ];

  return (
    <div className="flex flex-col space-y-8 justify-start max-sm:justify-center items-start max-sm:items-center urbanist-font px-4 md:px-16 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold">Products</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          "land preparation",
          "Plant Protection",
          "de-weeding",
          "Harvesting",
          "Garden Tools",
        ].map((product, index) => (
          <Button
            key={index}
            className="bg-[#FFFBE6] outline outline-[0.5px] outline-[#5B5B5B] rounded-xl text-sm md:text-lg urbanist-font text-black p-4 md:p-8 hover:bg-[#FFFAE6] hover:outline-[#5B5B5B]"
          >
            {product}
          </Button>
        ))}
      </div>
      <div className="rounded-2xl border border-[#5B5B5B] flex items-center p-2 md:p-4 gap-2 w-full">
        <SearchSVG />
        <input
          type="text"
          placeholder="Search for Tractors, Tillers, Reapers, Plant protection, Land preparations....."
          className="w-full border-0 focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-4 md:gap-12 pt-8 pb-32">
        {products.map((product, index) => (
          <ProductsCard
            key={index}
            title={product.title}
            imgPath={product.imgPath}
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
