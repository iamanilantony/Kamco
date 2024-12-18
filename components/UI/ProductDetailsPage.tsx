"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import CountrySelection from "./AvailableCountriesButton";
import products from "@/public/data/productDetails.json";
import ProductImageSlider from "./ProductImageSlider";
import Link from "next/link";

const ProductDetailPage = () => {
  const { id } = useParams() as { id: string };

  const product = products && products?.products.find((prod) => prod.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const [selectedRAM, setSelectedRAM] = useState("4 GB");
  const [pincode, setPincode] = useState("");

  return (
    <div className="container mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
        <ProductImageSlider
          product={{ title: product.title, images: product.image }}
        />

        {/* Product Info */}
        <div className="md:ml-6 w-full md:w-1/2 text-left">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          {/* Delivery Info */}
          <div className="mt-4">
            <p className="text-sm text-gray-700">
              {product.description}
              {/* <span className="font-semibold">Delivery by 15 Nov, Friday</span> | Free ₹40 if ordered before 12:30 PM */}
            </p>
            <div className="mt-4">
              <p className="border border-green-600 rounded-md px-3 py-2 text-sm w-full md:w-1/3 text-green-600">
                Delivering internationally
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Highlights</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Additional Features
            </h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              {product.additionalDetails.map((feature, index) => (
                <li key={index} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between space-x-8 mt-6">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-gray-700">Blades</p>
              <p className="text-sm text-gray-500">{product.blades}</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-gray-700">Gearbox</p>
              <p className="text-sm text-gray-500">{product.gearbox}</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-gray-700">Weight</p>
              <p className="text-sm text-gray-500">{product.weight}</p>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <Link href="/dealers">
              <button className="bg-[#166434] text-white px-6 py-3 rounded-md hover:bg-[#0f4222] transition-all duration-200 text-lg">
                Contact Dealers
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-gray-200 text-[#166434] px-6 py-3 rounded-md hover:bg-gray-300 transition-all duration-200 text-lg">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Other Products You Might Like</h3>
                <div className="flex space-x-8">
                    {product.otherProducts && product.otherProducts.map((productImage, index) => (
                        <div key={index} className="w-32 h-32 rounded-lg overflow-hidden cursor-pointer">
                            <img src={productImage} alt={`Other Product ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div> */}
    </div>
  );
};

export default ProductDetailPage;
