'use client';

import React from 'react';
import Link from 'next/link';

const ProductDetailPage: React.FC = () => {
    // Sample product data
    const product = {
        title: "Heavy-Duty Rotary Tiller",
        price: 15299,
        piecesLeft: 128,
        description: "The Heavy-Duty Rotary Tiller is designed to help farmers prepare their soil efficiently and effectively. Built for rugged performance, this tiller breaks up tough soil and mixes organic matter, making it ideal for large fields and challenging terrains. Its robust construction ensures durability.",
        image: "/Kamco_hero1.svg", // Replace with actual image path
        additionalDetails: {
            warranty: "2-year limited warranty on parts and labor",
            maintenance: "Requires periodic blade sharpening and gearbox lubrication",
            compatibility: "Fits most standard tractors with a 3-point hitch system",
        },
        dealers: [
            { name: "Kottaram Traders", rating: 4.3 },
            { name: "Kottaram Traders", rating: 4.3 },
            { name: "Kottaram Traders", rating: 4.3 },
            { name: "Kottaram Traders", rating: 4.2 },
            { name: "Kottaram Traders", rating: 4.3 },
            { name: "Kottaram Traders", rating: 4.3 },
        ],
        otherProducts: [
            "/Kamco_hero2.svg", // Replace with actual image paths
            "/Kamco_hero3.svg",
        ],
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row mb-8">
                <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                <div className="md:ml-6 mt-4 md:mt-0">
                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                    <h2 className="text-xl text-gray-700">₹ {product.price}</h2>
                    <p className="text-gray-500">{product.piecesLeft} Pieces Left</p>
                    <p className="mt-4">{product.description}</p>
                    <div className="mt-4">
                        <Link href="/contact">
                            <button className="bg-[#166434] text-white px-4 py-2 rounded-md hover:bg-[#0f4222] transition duration-200">Contact Dealers</button>
                        </Link>
                        <Link href="/enquire">
                            <button className="ml-2 bg-gray-200 text-[#166434] px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200">Enquire Now</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Product Detail</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <h3 className="font-semibold">Product Detail</h3>
                    <p>Engine Power: 50 HP minimum required</p>
                    <p>Working Width: 5 feet (customizable options available)</p>
                    <p>Tilling Depth: Adjustable up to 8 inches</p>
                    <p>Blades: Hardened steel blades for superior cutting and durability</p>
                    <p>Gearbox: Heavy-duty, sealed gearbox for long-lasting performance</p>
                    <p>Weight: 650 lbs</p>
                    <p>Drive Type: PTO shaft with shear bolt protection</p>
                    <p>Features:</p>
                    <ul className="list-disc ml-6">
                        <li>Adjustable skid shoes for varied depth control</li>
                        <li>Side chain drive for consistent performance</li>
                        <li>Rear shield to prevent debris from flying</li>
                    </ul>
                    <p>Ideal For:</p>
                    <ul className="list-disc ml-6">
                        <li>Soil preparation for planting</li>
                        <li>Mixing compost or organic matter</li>
                        <li>Breaking up compacted soil</li>
                    </ul>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Additional Details</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <p><strong>Warranty:</strong> {product.additionalDetails.warranty}</p>
                    <p><strong>Maintenance:</strong> {product.additionalDetails.maintenance}</p>
                    <p><strong>Compatibility:</strong> {product.additionalDetails.compatibility}</p>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Dealers Near You</h2>
                <ul>
                    {product.dealers.map((dealer, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <span className="mr-2">{dealer.name}</span>
                            <span className="text-gray-500">{dealer.rating} Rating</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-2">Other Products</h2>
                <div className="flex space-x-4">
                    {product.otherProducts.map((image, index) => (
                        <img key={index} src={image} alt={`Other Product ${index + 1}`} className="w-32 h-32 object-cover rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
