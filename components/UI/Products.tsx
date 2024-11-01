'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ProductsPage: React.FC = () => {
    // Sample product data (replace with your actual data)
    const products = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        title: `Heavy-Duty Rotary Tiller ${i + 1}`,
        description: "The Heavy-Duty Rotary Tiller is designed to help farmers prepare their soil efficiently and effectively. Built for rugged performance, this tiller breaks up tough soil and mixes organic matter, making it ideal for large fields and challenging terrains.",
        image: "/Kamco_hero1.svg", // Replace with actual image paths
        piecesLeft: 128,
    }));

    const itemsPerPage = 5; // Number of items to display per page
    const totalPages = Math.ceil(products.length / itemsPerPage); // Total number of pages

    const [currentPage, setCurrentPage] = useState(1); // State to track the current page

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; // Ensure page is within bounds
        setCurrentPage(page);
    };

    // Get the current items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="px-4 md:px-20 py-10 font-sans">
            <header className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                    <button className="border border-gray-300 rounded-md px-4 py-2">Filters</button>
                    <button className="border border-gray-300 rounded-md px-4 py-2">Sort</button>
                    <button className="border border-gray-300 rounded-md px-4 py-2">Categories</button>
                </div>
                <Link href="/dealers">
                    <button className="bg-[#166434] text-white px-4 py-2 rounded-md hover:bg-[#0f4222] transition duration-200">
                        Explore Dealers
                    </button>
                </Link>
            </header>

            <div className="space-y-6">
                {currentItems.map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4 flex cursor-pointer">
                        <img src={product.image} alt={product.title} className="w-48 h-48 object-cover rounded-lg mr-16" />
                        <div className="flex-1 text-left">
                            <div className='flex justify-between'>
                            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                            <p className="text-gray-500">{product.piecesLeft} Pieces Left</p>
                            </div>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <Link href={`/products/${product.id}`}>
                                <button className="text-[#166434] font-semibold hover:underline">Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1} 
                    className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages} 
                    className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;
