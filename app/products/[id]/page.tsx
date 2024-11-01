// app/products/[id]/page.tsx
import React from 'react';
import { useParams } from 'next/navigation';

const ProductDetailPage = () => {
    const { id } = useParams(); 

    // Sample product data (Replace this with actual data fetching logic)
    const products = [
        {
            id: '1',
            title: "Heavy-Duty Rotary Tiller",
            price: 15299,
            piecesLeft: 128,
            description: "The Heavy-Duty Rotary Tiller is designed to help farmers prepare their soil efficiently and effectively. Built for rugged performance, this tiller breaks up tough soil and mixes organic matter, making it ideal for large fields and challenging terrains.",
            image: "/Kamco_hero1.svg", // Replace with actual image paths
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
        },
        // Add more products as needed
    ];

    // Find the product by ID
    const product = products.find(prod => prod.id === id);

    if (!product) {
        return <p>Product not found</p>;
    }

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
                        <button className="bg-[#166434] text-white px-4 py-2 rounded-md hover:bg-[#0f4222] transition duration-200">Contact Dealers</button>
                        <button className="ml-2 bg-gray-200 text-[#166434] px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200">Enquire Now</button>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Product Detail</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <h3 className="font-semibold">Product Detail</h3>
                    <p>Warranty: {product.additionalDetails.warranty}</p>
                    <p>Maintenance: {product.additionalDetails.maintenance}</p>
                    <p>Compatibility: {product.additionalDetails.compatibility}</p>
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
