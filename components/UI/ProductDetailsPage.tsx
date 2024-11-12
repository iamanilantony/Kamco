'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import CountrySelection from './AvailableCountriesButton';
import products from '@/public/data/productDetails.json'
import ProductImageSlider from './ProductImageSlider';

const ProductDetailPage = () => {

    const { id } = useParams();

    const product = products && products?.products.find(prod => prod.id === id);

    if (!product) {
        return <p>Product not found</p>;
    }


    const [selectedRAM, setSelectedRAM] = useState("4 GB");
    const [pincode, setPincode] = useState("");

    return (
        <div className="container mx-auto p-6 font-sans">
            {/* Product Info Section */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
                {/* Product Image */}
                {/* <div className="w-full md:w-1/2">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div> */}
                <ProductImageSlider product={{ title: product.title, images: product.image }} />

                {/* Product Info */}
                <div className="md:ml-6 w-full md:w-1/2 text-left">
                    <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                    <h2 className="text-2xl font-semibold text-[#166434]">₹ {product.price}</h2>
                    <p className="text-gray-500 text-sm">{product.piecesLeft} Pieces Left</p>

                    {/* RAM Selection */}
                    {/* <div className="flex space-x-4 mt-4">
            {["4 GB", "6 GB", "8 GB"].map((ram) => (
              <button
                key={ram}
                onClick={() => setSelectedRAM(ram)}
                className={`px-6 py-2 rounded-md text-sm font-semibold
                  ${selectedRAM === ram ? "bg-[#008C44] text-white" : "bg-white text-gray-700 border border-gray-300"} 
                  hover:bg-[#0f4222] hover:text-white transition-all duration-200`}
              >
                {ram}
              </button>
            ))}
          </div> */}

                    {/* Delivery Info */}
                    <div className="mt-4">
                        <p className="text-sm text-gray-700">
                            {product.description}
                            {/* <span className="font-semibold">Delivery by 15 Nov, Friday</span> | Free ₹40 if ordered before 12:30 PM */}
                        </p>
                        {/* <div className="mt-2">
              <input
                type="text"
                placeholder="Enter Delivery Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-1/2"
              />
              <button className="bg-[#008C44] text-white px-6 py-2 rounded-md text-sm mt-2 hover:bg-[#0f4222]">
                Check
              </button>
            </div> */}
                        <CountrySelection />
                    </div>

                    {/* Highlights */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Highlights</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                            {product.features.map((feature, index) => (
                                <li key={index} className="text-sm">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Additional Features</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                            {product.additionalDetails.map((feature, index) => (
                                <li key={index} className="text-sm">{feature}</li>
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

                    {/* Seller Info */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Sellers</h3>
                        <div className="space-y-4 mt-4">
                            {product.dealers.map((dealer, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img
                                        src={dealer.image}
                                        alt={dealer.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <span className="font-semibold text-gray-800">{dealer.name}</span>
                                        <div className="flex items-center space-x-1 text-yellow-500">
                                            <span className="text-sm">{dealer.rating}★</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            7 Days Service Center Replacement/Repair, GST invoice available
                        </p>
                    </div>


                    {/* Buttons */}
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-[#166434] text-white px-6 py-3 rounded-md hover:bg-[#0f4222] transition-all duration-200 text-lg">
                            Contact Dealers
                        </button>
                        <button className="bg-gray-200 text-[#166434] px-6 py-3 rounded-md hover:bg-gray-300 transition-all duration-200 text-lg">
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Other Products */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Other Products You Might Like</h3>
                <div className="flex space-x-8">
                    {product.otherProducts && product.otherProducts.map((productImage, index) => (
                        <div key={index} className="w-32 h-32 rounded-lg overflow-hidden cursor-pointer">
                            <img src={productImage} alt={`Other Product ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
