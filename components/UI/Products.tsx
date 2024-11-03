'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import products from '@/public/data/products.json'


// const formatSubcategories = (categories: any) => {
//     return categories.flatMap(category => 
//         category.subcategories?.map(subcategory => ({
//             name: subcategory.name,
//             codeName: subcategory.codeName,
//             src: subcategory.src,
//             piecesLeft: 128, // Default value, replace as needed
//             description: `Description for ${subcategory.name}` // Custom description, replace as needed
//         }))
//     );
// };

const ProductsPage = () => {
    // Sample product data derived from JSON structure provided
    const products = [
        { name: "Power Tillers", codeName: "PR-011", src: "/products/PR-011.jpg", piecesLeft: 128, description: "Efficient tillers for land preparation." },
        { name: "Tractors", codeName: "PR-012", src: "/products/PR-012.jpg", piecesLeft: 75, description: "High-performance tractors for large-scale fields." },
        { name: "Drone", codeName: "PR-021", src: "/products/PR-021.png", piecesLeft: 56, description: "Advanced drones for plant protection." },
        // { name: "Sprayers", codeName: "PR-022", src: "/products/PR-022.jpg", piecesLeft: 90, description: "High-efficiency sprayers for effective plant care." },
        { name: "Echo Leopard Power weeder", codeName: "PR-031", src: "/products/PR-031.png", piecesLeft: 150, description: "Reliable power weeder for de-weeding tasks." },
        { name: "Geared Power weeder", codeName: "PR-032", src: "/products/PR-032.jpg", piecesLeft: 60, description: "Durable, geared power weeder for intensive work." },
        { name: "Garden Tillers", codeName: "PR-033", src: "/products/PR-033.jpg", piecesLeft: 120, description: "Compact tillers for garden use." },
        // { name: "Micro Tiller", codeName: "PR-034", src: "/products/PR-034.jpg", piecesLeft: 100, description: "Small tiller ideal for micro-gardening." },
        { name: "Cono Weeder", codeName: "PR-035", src: "/products/PR-035.png", piecesLeft: 85, description: "Specialized cono weeder for efficient de-weeding." },
        { name: "Brush Cutter", codeName: "PR-036", src: "/products/PR-036.jpg", piecesLeft: 200, description: "Versatile brush cutter for various applications." },
        // { name: "Electric Brush cutter", codeName: "PR-037", src: "/products/PR-037.jpg", piecesLeft: 140, description: "Electric-powered brush cutter for ease of use." },
        { name: "Power Reaper", codeName: "PR-041", src: "/products/PR-041.jpg", piecesLeft: 45, description: "Efficient power reaper for harvesting tasks." },
        // { name: "Mini Harvest Combines", codeName: "PR-044", src: "/products/PR-044.jpg", piecesLeft: 30, description: "Compact harvest combine for small-scale farms." },
        // { name: "Mini Tool Kit", codeName: "PR-051", src: "/products/PR-051.jpg", piecesLeft: 300, description: "Essential mini tool kit for gardeners." },
        // { name: "Horti tool Kit", codeName: "PR-052", src: "/products/PR-052.jpg", piecesLeft: 250, description: "Horticultural tool kit for comprehensive gardening." },
        // { name: "Agri Tool Kit", codeName: "PR-053", src: "/products/PR-053.jpg", piecesLeft: 210, description: "Agricultural tool kit with all necessary tools." },
        // { name: "KAMCO-lite", codeName: "PR-06", src: "/products/PR-06.jpg", piecesLeft: 180, description: "Compact KAMCO-lite machine for multi-use." }
    ];

    // const formattedProducts =  formatSubcategories(products);


    const itemsPerPage = 5; // Number of items to display per page
    // const totalItems = products.filter(product => {
    //     if (product?.src) {
    //         const image = new Image();
    //         image.src = product.src;
    //         return image.complete;
    //     }
    //     return false;
    // })
    const totalPages = Math.ceil(products.filter(product => product?.src || 0).length / itemsPerPage); // Total number of pages based on products with images

    const [currentPage, setCurrentPage] = useState(1); // State to track the current page

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; // Ensure page is within bounds
        setCurrentPage(page);
    };

        // Get the current items to display, filtering out products without images
        const startIndex = (currentPage - 1) * itemsPerPage;
        
        const currentItems = products.slice(startIndex, startIndex + itemsPerPage);
    

    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 font-sans">
            <header className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <div className="flex flex-col space-y-2 w-full md:flex-row md:space-x-4 md:space-y-0">
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                        <option>Filters</option>
                        <option>Price Range</option>
                        <option>Availability</option>
                        <option>Ratings</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                        <option>Sort</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest First</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                        <option>Categories</option>
                        <option>Land Preparation</option>
                        <option>Plant protection</option>
                        <option>De weeding</option>
                        <option>Harvesting</option>
                        <option>Garden Tools</option>
                        <option>KAMCO-lite</option>
                    </select>
                </div>
                <Link href="/dealers">
                    <button className="bg-[#166434] text-white px-4 py-2 rounded-md hover:bg-[#0f4222] transition duration-200 text-sm md:text-base">
                        Explore Dealers
                    </button>
                </Link>
            </header>

            <div className="space-y-6">
                {currentItems.map((product, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row cursor-pointer hover:bg-gray-100 transition-bg duration-300"
                    >
                        <img src={product.src} alt={product.name} className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-16" />
                        <div className="flex-1 text-left">
                            <div className='flex justify-between mb-2 flex-col md:flex-row'>
                                <h2 className="text-lg md:text-xl font-bold">{product.name}</h2>
                                <p className="text-gray-500 text-sm md:text-base">{product.piecesLeft} Pieces Left</p>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base mb-2">{product.description}</p>
                            <Link href={`/products/${product.codeName}`}>
                                <button className="text-[#166434] font-semibold hover:underline text-sm md:text-base">Details</button>
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
                    className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 text-sm md:text-base"
                >
                    Previous
                </button>
                <span className="text-sm md:text-base">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 text-sm md:text-base"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;